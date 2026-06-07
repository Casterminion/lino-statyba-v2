import type { LinoPage } from "./types";

/** Inventory §5 — /kontaktai */
export const kontaktaiPage: LinoPage = {
  slug: "kontaktai",
  title: "Kontaktai - Lino Statyba",
  description: "Susisiekite su Lino Statyba komanda.",
  h1: "Kontaktai",
  blocks: [
    { type: "heading", level: "h2", text: "Susisiekite su mumis" },
    {
      type: "paragraph",
      text: "Adresas: Vasario 16-osios g. 32, Teleičiai, 53214 Kauno r. sav.\nMob.: +370 676 77272\nEl.paštas: info@linostatyba.lt\nDarbo laikas:\nPirmadienis – Penktadienis: 08:00 – 17:00\nŠeštadienis – Sekmadinis: nedirbame",
    },
    { type: "heading", level: "h4", text: "+370 676 77272" },
    { type: "heading", level: "h4", text: "info@linostatyba.lt" },
    {
      type: "heading",
      level: "h4",
      text: "Vasario 16-osios g. 32, Teleičiai, 53214 Kauno r. sav.",
    },
  ],
};
