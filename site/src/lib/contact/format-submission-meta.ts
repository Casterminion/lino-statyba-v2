import type { ContactSubmissionMeta } from "./types";

const VILNIUS_TZ = "Europe/Vilnius";

export function formatSubmissionTimestamp(date: Date): string {
  return new Intl.DateTimeFormat("lt-LT", {
    timeZone: VILNIUS_TZ,
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: false,
  }).format(date);
}

export function simplifyUserAgent(userAgent: string): string {
  if (!userAgent || userAgent === "unknown") {
    return "Nežinomas įrenginys";
  }

  let browser = "Nežinoma naršyklė";
  let device = "Nežinomas įrenginys";

  if (/iPhone|iPad|iPod/.test(userAgent)) {
    device = /iPad/.test(userAgent) ? "iPad" : "iPhone";
    if (/CriOS/.test(userAgent)) browser = "Chrome";
    else if (/FxiOS/.test(userAgent)) browser = "Firefox";
    else if (/EdgiOS/.test(userAgent)) browser = "Edge";
    else browser = "Safari";
  } else if (/Android/.test(userAgent)) {
    device = "Android";
    if (/Chrome/.test(userAgent)) browser = "Chrome";
    else if (/Firefox/.test(userAgent)) browser = "Firefox";
    else browser = "Android naršyklė";
  } else if (/Mac OS X|Macintosh/.test(userAgent)) {
    device = "Mac";
    if (/Edg\//.test(userAgent)) browser = "Edge";
    else if (/Chrome\//.test(userAgent)) browser = "Chrome";
    else if (/Firefox\//.test(userAgent)) browser = "Firefox";
    else if (/Safari\//.test(userAgent)) browser = "Safari";
  } else if (/Windows/.test(userAgent)) {
    device = "Windows";
    if (/Edg\//.test(userAgent)) browser = "Edge";
    else if (/Chrome\//.test(userAgent)) browser = "Chrome";
    else if (/Firefox\//.test(userAgent)) browser = "Firefox";
  } else if (/Linux/.test(userAgent)) {
    device = "Linux";
    if (/Chrome\//.test(userAgent)) browser = "Chrome";
    else if (/Firefox\//.test(userAgent)) browser = "Firefox";
  }

  return `${browser} on ${device}`;
}

export function buildSubmissionMeta(ip: string, userAgent: string): ContactSubmissionMeta {
  const submittedAt = new Date();

  return {
    submittedAt: submittedAt.toISOString(),
    submittedAtFormatted: formatSubmissionTimestamp(submittedAt),
    ip,
    userAgent,
    deviceLabel: simplifyUserAgent(userAgent),
  };
}
