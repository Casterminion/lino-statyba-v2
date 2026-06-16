#!/usr/bin/env node
/**
 * Chrome Performance profiling for ContactModal lag investigation.
 * Records 5s traces with continuous real mouse movement via Puppeteer.
 */
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import puppeteer from "puppeteer";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, "..");
const URL = "http://localhost:3000";
const DURATION_MS = 5000;
const TRACE_DIR = path.join(ROOT, ".perf-traces");
const FIXTURES = path.join(ROOT, "scripts/perf-fixtures");

const PATHS = {
  cursor: path.join(ROOT, "src/components/CustomCursor.tsx"),
  modal: path.join(ROOT, "src/components/contact/ContactModal.tsx"),
  providers: path.join(ROOT, "src/components/Providers.tsx"),
};

const BACKUPS = Object.fromEntries(
  Object.entries(PATHS).map(([k, p]) => [k, fs.readFileSync(p, "utf8")]),
);

const CONFIGS = {
  baseline: {
    label: "Baseline (cursor ON + blur ON)",
    cursor: true,
    cursorMode: "broken",
    blur: true,
  },
  testA: {
    label: "Test A — cursor OFF, blur ON",
    cursor: false,
    cursorMode: "broken",
    blur: true,
  },
  testB: {
    label: "Test B — cursor ON, blur OFF",
    cursor: true,
    cursorMode: "broken",
    blur: false,
  },
  testC: {
    label: "Test C — cursor OFF when overlay + blur OFF",
    cursor: true,
    cursorMode: "fixed",
    blur: false,
  },
};

function applyConfig(config) {
  fs.writeFileSync(
    PATHS.providers,
    fs.readFileSync(
      path.join(FIXTURES, config.cursor ? "Providers.with-cursor.tsx" : "Providers.no-cursor.tsx"),
      "utf8",
    ),
  );

  fs.writeFileSync(
    PATHS.cursor,
    fs.readFileSync(
      path.join(
        FIXTURES,
        config.cursorMode === "fixed" ? "CustomCursor.fixed.tsx" : "CustomCursor.broken.tsx",
      ),
      "utf8",
    ),
  );

  let modal = fs.readFileSync(path.join(FIXTURES, "ContactModal.blur.tsx"), "utf8");
  if (!config.blur) {
    modal = modal.replace("backdrop-blur-[2px]", "");
  }
  fs.writeFileSync(PATHS.modal, modal);
}

function restoreFiles() {
  for (const [key, content] of Object.entries(BACKUPS)) {
    fs.writeFileSync(PATHS[key], content);
  }
}

function parseTrace(tracePath) {
  const raw = JSON.parse(fs.readFileSync(tracePath, "utf8"));
  const events = raw.traceEvents ?? raw;

  const traceStart = events.find((e) => e.name === "TracingStartedInBrowser")?.ts ?? events[0]?.ts ?? 0;
  const windowStart = traceStart;
  const windowEnd = traceStart + DURATION_MS * 1000;

  const inWindow = events.filter((e) => e.ts >= windowStart && e.ts <= windowEnd);

  const mainTid = events.find((e) => e.name === "thread_name" && e.args?.name === "CrRendererMain")?.tid;
  const mainEvents = inWindow.filter((e) => e.tid === mainTid && e.dur);

  const sumDur = (names) =>
    mainEvents
      .filter((e) => names.includes(e.name))
      .reduce((acc, e) => acc + (e.dur ?? 0), 0) / 1000;

  const count = (names) => inWindow.filter((e) => e.tid === mainTid && names.includes(e.name)).length;

  const beginFrames = inWindow.filter((e) => e.name === "BeginFrame");
  const drawFrames = inWindow.filter((e) => e.name === "DrawFrame" && e.dur);

  const frameCount = beginFrames.length;
  const fps = frameCount / (DURATION_MS / 1000);

  const frameDurations = drawFrames.map((e) => (e.dur ?? 0) / 1000).filter((d) => d > 0);
  const worstFrameMs = frameDurations.length ? Math.max(...frameDurations) : 0;

  const mainThreadBusyUs = mainEvents.reduce((acc, e) => acc + (e.dur ?? 0), 0);
  const mainThreadPct = (mainThreadBusyUs / 1000 / DURATION_MS) * 100;

  const paintMs = sumDur(["Paint", "PaintImage", "Rasterize"]);
  const layoutMs = sumDur(["Layout", "UpdateLayoutTree", "RecalculateStyles"]);
  const compositeMs = sumDur(["CompositeLayers", "UpdateLayerTree", "UpdateLayer"]);
  const scriptingMs = sumDur([
    "FunctionCall",
    "EvaluateScript",
    "V8.Execute",
    "RunMicrotasks",
    "EventDispatch",
  ]);
  const renderingMs = paintMs + compositeMs + layoutMs;

  const paintCount = count(["Paint", "PaintImage"]);
  const layerUpdates = count(["UpdateLayer", "UpdateLayerTree", "CompositeLayers"]);

  return {
    fps: round(fps, 1),
    worstFrameMs: round(worstFrameMs, 2),
    mainThreadPct: round(mainThreadPct, 1),
    paintMs: round(paintMs, 2),
    layoutMs: round(layoutMs, 2),
    compositeMs: round(compositeMs, 2),
    scriptingMs: round(scriptingMs, 2),
    renderingMs: round(renderingMs, 2),
    paintCount,
    layerUpdates,
    frameCount,
  };
}

function round(n, d) {
  const p = 10 ** d;
  return Math.round(n * p) / p;
}

function sleep(ms) {
  return new Promise((r) => setTimeout(r, ms));
}

async function waitForServer(page) {
  for (let i = 0; i < 30; i++) {
    try {
      const res = await page.goto(URL, { waitUntil: "networkidle2", timeout: 10000 });
      if (res?.ok()) return;
    } catch {
      await sleep(1000);
    }
  }
  throw new Error("Dev server not reachable at " + URL);
}

async function reloadAfterHmr(page) {
  await sleep(2500);
  await page.reload({ waitUntil: "networkidle2" });
  await sleep(1000);
}

async function setModal(page, open) {
  const isOpen = await page.evaluate(() => !!document.querySelector('[role="dialog"]'));
  if (open && !isOpen) {
    await page.evaluate(() => {
      const btn = [...document.querySelectorAll("button")].find(
        (b) => b.textContent?.trim() === "Gauti pasiūlymą",
      );
      btn?.click();
    });
    await sleep(800);
  }
  if (!open && isOpen) {
    await page.evaluate(() => {
      document.querySelector('[aria-label="Uždaryti"]')?.click();
    });
    await sleep(500);
  }
}

async function moveMouseContinuously(page, durationMs) {
  const { width, height } = page.viewport();
  const start = Date.now();
  let x = width * 0.3;
  let y = height * 0.3;
  while (Date.now() - start < durationMs) {
    x += (Math.random() - 0.5) * 80;
    y += (Math.random() - 0.5) * 80;
    x = Math.max(20, Math.min(width - 20, x));
    y = Math.max(20, Math.min(height - 20, y));
    await page.mouse.move(x, y);
    await sleep(12);
  }
}

async function recordTrace(page, label, modalOpen) {
  fs.mkdirSync(TRACE_DIR, { recursive: true });
  const safe = label.replace(/[^a-z0-9]+/gi, "-").toLowerCase();
  const tracePath = path.join(TRACE_DIR, `${safe}-modal-${modalOpen ? "open" : "closed"}.json`);

  await setModal(page, modalOpen);

  await page.tracing.start({
    path: tracePath,
    categories: [
      "devtools.timeline",
      "disabled-by-default-devtools.timeline",
      "disabled-by-default-devtools.timeline.frame",
      "disabled-by-default-devtools.timeline.stack",
      "blink",
    ],
  });

  const inPagePromise = page.evaluate(
    (durationMs) =>
      new Promise((resolve) => {
        const frameTimes = [];
        let paintCount = 0;
        const po = new PerformanceObserver((list) => {
          paintCount += list.getEntries().length;
        });
        try {
          po.observe({ type: "paint", buffered: true });
        } catch {
          /* unsupported */
        }

        const t0 = performance.now();
        let last = t0;
        function tick(t) {
          frameTimes.push(t - last);
          last = t;
          if (t - t0 < durationMs) requestAnimationFrame(tick);
          else {
            po.disconnect();
            const samples = frameTimes.slice(2);
            const avg = samples.reduce((a, b) => a + b, 0) / samples.length;
            resolve({
              rafFps: 1000 / avg,
              rafWorstMs: Math.max(...samples),
              rafFrames: samples.length,
              performancePaintCount: paintCount,
            });
          }
        }
        requestAnimationFrame(tick);
      }),
    DURATION_MS,
  );

  await moveMouseContinuously(page, DURATION_MS);
  await page.tracing.stop();
  const inPage = await inPagePromise;
  const trace = parseTrace(tracePath);

  const screenshotPath = path.join(TRACE_DIR, `${safe}-modal-${modalOpen ? "open" : "closed"}.png`);
  await page.screenshot({ path: screenshotPath, fullPage: false });

  return { label, modalOpen, tracePath, screenshotPath, ...trace, inPage };
}

async function runConfig(name, config, page) {
  console.log(`\n=== Applying ${config.label} ===`);
  applyConfig(config);
  await reloadAfterHmr(page);

  const closed = await recordTrace(page, `${name}-closed`, false);
  const open = await recordTrace(page, `${name}-open`, true);
  return { name, config: config.label, closed, open };
}

function metricRows(closed, open) {
  const rows = [
    ["FPS (trace BeginFrame)", "fps", 1],
    ["RAF FPS (in-page)", "rafFps", 1, true],
    ["Worst frame (ms)", "worstFrameMs", 2],
    ["Main thread %", "mainThreadPct", 1],
    ["Paint time (ms)", "paintMs", 2],
    ["Composite Layers time (ms)", "compositeMs", 2],
    ["Rendering time (ms)", "renderingMs", 2],
    ["Layout time (ms)", "layoutMs", 2],
    ["Scripting time (ms)", "scriptingMs", 2],
    ["Paint count", "paintCount", 0],
    ["Layer updates", "layerUpdates", 0],
  ];

  return rows.map(([label, key, decimals, nested]) => {
    const c = nested ? closed.inPage?.[key] : closed[key];
    const o = nested ? open.inPage?.[key] : open[key];
    const cv = typeof c === "number" ? round(c, decimals) : c;
    const ov = typeof o === "number" ? round(o, decimals) : o;
    const delta = typeof cv === "number" && typeof ov === "number" ? round(ov - cv, decimals) : "—";
    return `| ${label} | ${cv} | ${ov} | ${delta} |`;
  });
}

function fmtDelta(n, suffix = " fps") {
  if (!Number.isFinite(n)) return "—";
  const sign = n >= 0 ? "+" : "";
  return `${sign}${round(n, 1)}${suffix}`;
}

function buildSummary(results) {
  const baseline = results.find((r) => r.name === "baseline");
  const lines = [
    "# Modal Performance Profiling Report",
    "",
    `Duration per recording: **${DURATION_MS / 1000}s** with continuous Puppeteer mouse movement.`,
    "Viewport: **1440×900**. Tracing categories: devtools.timeline + blink.",
    "",
    "## 1. Baseline proof — modal CLOSED vs OPEN (cursor ON + blur ON)",
    "",
    "| Metric | Modal CLOSED | Modal OPEN | Delta |",
    "|---|---:|---:|---:|",
  ];

  if (!baseline) return lines.join("\n");

  const c = baseline.closed;
  const o = baseline.open;
  lines.push(
    ...metricRows(c, o),
    "",
    "## 2. A/B tests — modal OPEN only",
    "",
    "| Config | Avg FPS | Worst frame (ms) | Main thread % | Paints | Layer updates | vs baseline FPS |",
    "|---|---:|---:|---:|---:|---:|---:|",
  );

  for (const r of results) {
    const m = r.open;
    const deltaFps = round(m.fps - baseline.open.fps, 1);
    const sign = deltaFps >= 0 ? "+" : "";
    lines.push(
      `| ${r.config} | ${m.fps} | ${m.worstFrameMs} | ${m.mainThreadPct} | ${m.paintCount} | ${m.layerUpdates} | ${sign}${deltaFps} |`,
    );
  }

  const b = baseline.open;
  const a = results.find((r) => r.name === "testA").open;
  const bTest = results.find((r) => r.name === "testB").open;
  const cTest = results.find((r) => r.name === "testC").open;

  lines.push(
    "",
    "## 3. Recovery attribution (modal OPEN vs baseline OPEN)",
    "",
    "| Change | FPS recovered | Main thread % recovered | Paints avoided | Layer updates avoided |",
    "|---|---:|---:|---:|---:|",
    `| Disable cursor only (A − baseline) | ${fmtDelta(a.fps - b.fps)} | ${fmtDelta(b.mainThreadPct - a.mainThreadPct, " pp")} | ${b.paintCount - a.paintCount} | ${b.layerUpdates - a.layerUpdates} |`,
    `| Remove blur only (B − baseline) | ${fmtDelta(bTest.fps - b.fps)} | ${fmtDelta(b.mainThreadPct - bTest.mainThreadPct, " pp")} | ${b.paintCount - bTest.paintCount} | ${b.layerUpdates - bTest.layerUpdates} |`,
    `| Both disabled (C − baseline) | ${fmtDelta(cTest.fps - b.fps)} | ${fmtDelta(b.mainThreadPct - cTest.mainThreadPct, " pp")} | ${b.paintCount - cTest.paintCount} | ${b.layerUpdates - cTest.layerUpdates} |`,
    "",
    "## 4. Timing breakdown — modal OPEN",
    "",
    "| Config | Scripting (ms) | Layout (ms) | Paint (ms) | Composite (ms) | Rendering (ms) |",
    "|---|---:|---:|---:|---:|---:|",
  );

  for (const r of results) {
    const m = r.open;
    lines.push(
      `| ${r.name} | ${m.scriptingMs} | ${m.layoutMs} | ${m.paintMs} | ${m.compositeMs} | ${m.renderingMs} |`,
    );
  }

  lines.push(
    "",
    "## Screenshots",
    "",
    ...results.flatMap((r) => [
      `- \`${path.basename(r.closed.screenshotPath)}\` (closed)`,
      `- \`${path.basename(r.open.screenshotPath)}\` (open)`,
    ]),
  );

  return lines.join("\n");
}

async function main() {
  fs.mkdirSync(TRACE_DIR, { recursive: true });

  const browser = await puppeteer.launch({
    headless: false,
    defaultViewport: { width: 1440, height: 900 },
    args: ["--disable-background-timer-throttling", "--disable-renderer-backgrounding"],
  });

  const page = await browser.newPage();
  await waitForServer(page);

  const results = [];
  try {
    for (const [name, config] of Object.entries(CONFIGS)) {
      results.push(await runConfig(name, config, page));
    }
  } finally {
    restoreFiles();
    await browser.close();
  }

  const reportPath = path.join(TRACE_DIR, "report.json");
  fs.writeFileSync(reportPath, JSON.stringify(results, null, 2));

  const summary = buildSummary(results);
  const summaryPath = path.join(TRACE_DIR, "summary.md");
  fs.writeFileSync(summaryPath, summary);

  console.log("\n" + summary);
  console.log(`\nFull report: ${reportPath}`);
  console.log(`Summary: ${summaryPath}`);
  console.log(`Traces & screenshots: ${TRACE_DIR}`);
}

main().catch((err) => {
  restoreFiles();
  console.error(err);
  process.exit(1);
});
