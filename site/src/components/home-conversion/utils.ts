/** Split existing prose into scannable bullets — no copy changes, sentence boundaries only. */
export function splitIntoBullets(body: string, limit = 6): string[] {
  const normalized = body.replace(/\s+/g, " ").trim();
  if (!normalized) return [];

  const sentences = normalized
    .split(/(?<=[.!?])\s+(?=[A-ZĄČĘĖĮŠŲŪŽ„"])/u)
    .map((s) => s.trim())
    .filter(Boolean);

  return sentences.slice(0, limit);
}

const TRUST_ICON_VARIANTS = [
  "experience",
  "projects",
  "partners",
  "precision",
  "sustainability",
  "value",
] as const;

export type TrustIconVariant = (typeof TRUST_ICON_VARIANTS)[number];

/** Derive title + short text from existing bullet — presentation only, no copy edits. */
export function splitBulletForCard(bullet: string, index: number): {
  title: string;
  text: string;
  icon: TrustIconVariant;
} {
  const commaIdx = bullet.indexOf(",");
  if (commaIdx > 10 && commaIdx < 70) {
    return {
      title: bullet.slice(0, commaIdx).trim(),
      text: bullet.slice(commaIdx + 1).trim(),
      icon: TRUST_ICON_VARIANTS[index] ?? "experience",
    };
  }

  const dashIdx = bullet.indexOf(" – ");
  if (dashIdx > 10) {
    return {
      title: bullet.slice(0, dashIdx).trim(),
      text: bullet.slice(dashIdx + 3).trim(),
      icon: TRUST_ICON_VARIANTS[index] ?? "experience",
    };
  }

  const words = bullet.split(" ");
  const titleWordCount = Math.min(5, Math.max(3, Math.floor(words.length / 2)));
  return {
    title: words.slice(0, titleWordCount).join(" "),
    text: words.slice(titleWordCount).join(" "),
    icon: TRUST_ICON_VARIANTS[index] ?? "experience",
  };
}
