import type { ContactInquiryEmailProps } from "./types";

export function buildContactPlainText(props: ContactInquiryEmailProps): string {
  const lines = [
    "NAUJA UŽKLAUSA — LINO STATYBA",
    "",
    `Vardas: ${props.vardas}`,
    `Telefonas: ${props.telefonas}`,
  ];

  if (props.elpastas) {
    lines.push(`El. paštas: ${props.elpastas}`);
  }

  if (props.zinute) {
    lines.push("", "Žinutė:", props.zinute);
  }

  lines.push(
    "",
    "---",
    `Pateikta: ${props.submittedAtFormatted}`,
    `IP: ${props.ip}`,
    `Įrenginys: ${props.deviceLabel}`,
    "",
    props.siteUrl,
  );

  return lines.join("\n");
}
