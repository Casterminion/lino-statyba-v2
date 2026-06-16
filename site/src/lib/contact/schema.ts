import type { ContactFormPayload, ParseContactResult } from "./types";

const MAX_NAME = 100;
const MAX_PHONE = 30;
const MAX_EMAIL = 254;
const MAX_MESSAGE = 2000;

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const PHONE_RE = /^\+?[\d\s()-]{6,30}$/;
const CONTROL_CHAR_RE = /[\x00-\x08\x0B\x0C\x0E-\x1F\x7F]/;

export const CONTACT_ERRORS = {
  vardas: "Įveskite vardą.",
  vardasLength: "Vardas per ilgas (daugiausia 100 simbolių).",
  telefonas: "Įveskite telefono numerį.",
  telefonasInvalid: "Neteisingas telefono numeris.",
  telefonasLength: "Telefono numeris per ilgas (daugiausia 30 simbolių).",
  elpastas: "Neteisingas el. pašto adresas.",
  elpastasLength: "El. pašto adresas per ilgas.",
  zinute: "Žinutė per ilga (daugiausia 2000 simbolių).",
  generic: "Neteisingi duomenys.",
} as const;

function isRecord(value: unknown): value is Record<string, unknown> {
  return typeof value === "object" && value !== null && !Array.isArray(value);
}

function readString(value: unknown): string {
  return typeof value === "string" ? value.trim() : "";
}

function hasControlChars(value: string): boolean {
  return CONTROL_CHAR_RE.test(value);
}

export function parseContactPayload(body: unknown): ParseContactResult {
  if (!isRecord(body)) {
    return { ok: false, error: CONTACT_ERRORS.generic };
  }

  const vardas = readString(body.vardas);
  const telefonas = readString(body.telefonas);
  const elpastasRaw = readString(body.elpastas);
  const zinuteRaw = readString(body.zinute);
  const website = readString(body.website);

  if (!vardas) {
    return { ok: false, error: CONTACT_ERRORS.vardas, field: "vardas" };
  }

  if (vardas.length > MAX_NAME || hasControlChars(vardas)) {
    return { ok: false, error: CONTACT_ERRORS.vardasLength, field: "vardas" };
  }

  if (!telefonas) {
    return { ok: false, error: CONTACT_ERRORS.telefonas, field: "telefonas" };
  }

  if (telefonas.length > MAX_PHONE) {
    return { ok: false, error: CONTACT_ERRORS.telefonasLength, field: "telefonas" };
  }

  if (!PHONE_RE.test(telefonas) || hasControlChars(telefonas)) {
    return { ok: false, error: CONTACT_ERRORS.telefonasInvalid, field: "telefonas" };
  }

  if (elpastasRaw) {
    if (elpastasRaw.length > MAX_EMAIL) {
      return { ok: false, error: CONTACT_ERRORS.elpastasLength, field: "elpastas" };
    }

    if (!EMAIL_RE.test(elpastasRaw) || hasControlChars(elpastasRaw)) {
      return { ok: false, error: CONTACT_ERRORS.elpastas, field: "elpastas" };
    }
  }

  if (zinuteRaw) {
    if (zinuteRaw.length > MAX_MESSAGE || hasControlChars(zinuteRaw)) {
      return { ok: false, error: CONTACT_ERRORS.zinute, field: "zinute" };
    }
  }

  const data: ContactFormPayload = {
    vardas,
    telefonas,
    website,
    ...(elpastasRaw ? { elpastas: elpastasRaw } : {}),
    ...(zinuteRaw ? { zinute: zinuteRaw } : {}),
  };

  return { ok: true, data };
}
