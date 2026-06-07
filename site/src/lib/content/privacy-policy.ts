import { BUSINESS_ADDRESS } from "./business";

export const COMPANY = {
  name: "MB Lino statyba",
  code: "305895716",
  vat: "LT100015106313",
  address: BUSINESS_ADDRESS.formatted,
  phone: "+370 676 77272",
  email: "info@linostatyba.lt",
} as const;

export const PRIVACY_POLICY = {
  lastUpdated: "2026 m. birželio 7 d.",
  title: "Privatumo politika",
  description:
    "Sužinokite, kaip MB Lino statyba renka ir tvarko jūsų asmens duomenis.",
} as const;
