import { getAssetsByRole } from "../assets";

export function getPressLogosForSection(section: "as-seen-in" | "as-seen-in-mobile" = "as-seen-in") {
  return getAssetsByRole("press-logo").filter((a) => a.section === section || !a.section);
}
