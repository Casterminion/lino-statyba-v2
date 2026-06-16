import { Text } from "@react-email/components";
import type { ContactInquiryEmailProps } from "@/lib/contact/types";
import { BrandHeader } from "./components/BrandHeader";
import { ContactInfoCard } from "./components/ContactInfoCard";
import { EmailCardTable } from "./components/EmailCardTable";
import { EmailLayout } from "./components/EmailLayout";
import { MessageSection } from "./components/MessageSection";
import { SubmissionMetaSection } from "./components/SubmissionMetaSection";
import { emailTheme } from "./email-theme";

function normalizeTel(phone: string): string {
  return phone.replace(/\s/g, "");
}

export function ContactInquiryEmail(props: ContactInquiryEmailProps) {
  const telHref = props.telefonas ? `tel:${normalizeTel(props.telefonas)}` : undefined;
  const mailHref = props.elpastas ? `mailto:${props.elpastas}` : undefined;

  return (
    <EmailLayout preview={`Nauja užklausa — ${props.vardas}`}>
      <EmailCardTable>
        <tr>
          <td
            style={{
              height: "3px",
              backgroundColor: emailTheme.primary,
              fontSize: "1px",
              lineHeight: "1px",
            }}
          >
            &nbsp;
          </td>
        </tr>

        <BrandHeader
          logoUrl={props.logoUrl}
          companyName={props.companyName}
          submittedAtFormatted={props.submittedAtFormatted}
        />

        <tr>
          <td
            style={{
              padding: `0 ${emailTheme.cellPadding}`,
              borderTop: `1px solid ${emailTheme.border}`,
              fontSize: "1px",
              lineHeight: "1px",
            }}
          >
            &nbsp;
          </td>
        </tr>

        <tr>
          <td style={{ padding: `20px ${emailTheme.cellPadding} 16px` }}>
            <Text
              style={{
                margin: 0,
                fontSize: "13px",
                fontWeight: "bold",
                color: emailTheme.textSecondary,
                lineHeight: "20px",
              }}
            >
              Kliento informacija
            </Text>
          </td>
        </tr>

        <ContactInfoCard label="Vardas" value={props.vardas} />
        <ContactInfoCard
          label="Telefonas"
          value={props.telefonas}
          href={telHref}
        />
        <ContactInfoCard
          label="El. paštas"
          value={props.elpastas ?? "—"}
          href={mailHref}
        />

        <MessageSection message={props.zinute} />

        <SubmissionMetaSection
          submittedAtFormatted={props.submittedAtFormatted}
          ip={props.ip}
          deviceLabel={props.deviceLabel}
          siteUrl={props.siteUrl}
        />
      </EmailCardTable>
    </EmailLayout>
  );
}

ContactInquiryEmail.PreviewProps = {
  vardas: "Jonas Petraitis",
  telefonas: "+370 612 34567",
  elpastas: "jonas@pastas.lt",
  zinute: "Domina karkasinio namo statyba. Norėčiau gauti preliminarį pasiūlymą.",
  website: "",
  submittedAt: "2026-06-16T12:00:00.000Z",
  submittedAtFormatted: "2026-06-16 15:00:00",
  ip: "192.168.1.1",
  userAgent:
    "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 Chrome/120.0.0.0",
  deviceLabel: "Chrome on Mac",
  companyName: "Lino Statyba",
  companyEmail: "info@linostatyba.lt",
  logoUrl: "https://linostatyba.lt/media/lino-logo.png",
  siteUrl: "https://linostatyba.lt",
} satisfies ContactInquiryEmailProps;

export default ContactInquiryEmail;
