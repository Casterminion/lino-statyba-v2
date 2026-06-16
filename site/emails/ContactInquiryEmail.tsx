import { Hr, Section, Text } from "@react-email/components";
import type { ContactInquiryEmailProps } from "@/lib/contact/types";
import { BrandHeader } from "./components/BrandHeader";
import { ContactInfoCard } from "./components/ContactInfoCard";
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
      <Section
        style={{
          backgroundColor: emailTheme.card,
          border: `1px solid ${emailTheme.border}`,
        }}
      >
        <Section
          style={{
            height: "3px",
            backgroundColor: emailTheme.primary,
            lineHeight: "3px",
            fontSize: "3px",
          }}
        >
          &nbsp;
        </Section>

        <BrandHeader
          logoUrl={props.logoUrl}
          companyName={props.companyName}
          submittedAtFormatted={props.submittedAtFormatted}
        />

        <Hr style={{ borderColor: emailTheme.border, margin: "0 28px" }} />

        <Section style={{ padding: "24px 28px 28px" }}>
          <Text
            style={{
              margin: "0 0 16px",
              fontSize: "13px",
              fontWeight: 600,
              color: emailTheme.textSecondary,
              lineHeight: "20px",
            }}
          >
            Kliento informacija
          </Text>

          <ContactInfoCard emoji="👤" label="Vardas" value={props.vardas} />
          <ContactInfoCard
            emoji="📞"
            label="Telefonas"
            value={props.telefonas}
            href={telHref}
          />
          <ContactInfoCard
            emoji="✉️"
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
        </Section>
      </Section>
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
