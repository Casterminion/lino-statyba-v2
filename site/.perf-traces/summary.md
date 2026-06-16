# Modal Performance Profiling Report

Duration per recording: **5s** with continuous Puppeteer mouse movement.
Viewport: **1440×900**. Tracing categories: devtools.timeline + blink.

## 1. Baseline proof — modal CLOSED vs OPEN (cursor ON + blur ON)

| Metric | Modal CLOSED | Modal OPEN | Delta |
|---|---:|---:|---:|
| FPS (trace BeginFrame) | 60 | 60 | 0 |
| RAF FPS (in-page) | 52.4 | 55.2 | 2.8 |
| Worst frame (ms) | 0 | 0 | 0 |
| Main thread % | 34.6 | 47 | 12.4 |
| Paint time (ms) | 0.17 | 3.46 | 3.29 |
| Composite Layers time (ms) | 2.17 | 2.96 | 0.79 |
| Rendering time (ms) | 51.63 | 79.48 | 27.85 |
| Layout time (ms) | 49.28 | 73.05 | 23.77 |
| Scripting time (ms) | 190.6 | 225.49 | 34.89 |
| Paint count | 2 | 38 | 36 |
| Layer updates | 1541 | 1984 | 443 |

## 2. A/B tests — modal OPEN only

| Config | Avg FPS | Worst frame (ms) | Main thread % | Paints | Layer updates | vs baseline FPS |
|---|---:|---:|---:|---:|---:|---:|
| Baseline (cursor ON + blur ON) | 60 | 0 | 47 | 38 | 1984 | +0 |
| Test A — cursor OFF, blur ON | 60 | 0 | 13.2 | 0 | 0 | +0 |
| Test B — cursor ON, blur OFF | 60 | 0 | 32.6 | 6 | 2628 | +0 |
| Test C — cursor OFF when overlay + blur OFF | 60 | 0 | 17.9 | 0 | 0 | +0 |

## 3. Recovery attribution (modal OPEN vs baseline OPEN)

| Change | FPS recovered | Main thread % recovered | Paints avoided | Layer updates avoided |
|---|---:|---:|---:|---:|
| Disable cursor only (A − baseline) | +0 fps | +33.8 pp | 38 | 1984 |
| Remove blur only (B − baseline) | +0 fps | +14.4 pp | 32 | -644 |
| Both disabled (C − baseline) | +0 fps | +29.1 pp | 38 | 1984 |

## 4. Timing breakdown — modal OPEN

| Config | Scripting (ms) | Layout (ms) | Paint (ms) | Composite (ms) | Rendering (ms) |
|---|---:|---:|---:|---:|---:|
| baseline | 225.49 | 73.05 | 3.46 | 2.96 | 79.48 |
| testA | 81.07 | 0 | 0 | 0 | 0 |
| testB | 126.48 | 47.28 | 0.54 | 3.54 | 51.36 |
| testC | 119.5 | 0 | 0 | 0 | 0 |

## Screenshots

- `baseline-closed-modal-closed.png` (closed)
- `baseline-open-modal-open.png` (open)
- `testa-closed-modal-closed.png` (closed)
- `testa-open-modal-open.png` (open)
- `testb-closed-modal-closed.png` (closed)
- `testb-open-modal-open.png` (open)
- `testc-closed-modal-closed.png` (closed)
- `testc-open-modal-open.png` (open)