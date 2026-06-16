import { Button, Link, Section } from "@react-email/components";
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
          borderRadius: `${emailTheme.cardRadius}px`,
          border: `1px solid ${emailTheme.border}`,
          boxShadow: emailTheme.shadow,
          overflow: "hidden",
        }}
      >
        <BrandHeader logoUrl={props.logoUrl} companyName={props.companyName} />

        <Section style={{ padding: "24px 20px 8px" }}>
          <ContactInfoCard label="Vardas" value={props.vardas} />
          <ContactInfoCard label="Telefonas" value={props.telefonas} href={telHref} />
          {props.elpastas ? (
            <ContactInfoCard label="El. paštas" value={props.elpastas} href={mailHref} />
          ) : (
            <ContactInfoCard label="El. paštas" value="—" />
          )}
          <MessageSection message={props.zinute} />

          {(telHref || mailHref) && (
            <Section style={{ marginTop: "8px", marginBottom: "12px" }}>
              {telHref ? (
                <Button
                  href={telHref}
                  style={{
                    display: "block",
                    width: "100%",
                    boxSizing: "border-box",
                    backgroundColor: emailTheme.primary,
                    color: emailTheme.textOnDark,
                    fontSize: "14px",
                    fontWeight: 600,
                    textDecoration: "none",
                    textAlign: "center",
                    padding: "14px 20px",
                    borderRadius: `${emailTheme.buttonRadius}px`,
                    marginBottom: mailHref ? "10px" : 0,
                  }}
                >
                  Skambinti klientui
                </Button>
              ) : null}
              {mailHref ? (
                <Button
                  href={mailHref}
                  style={{
                    display: "block",
                    width: "100%",
                    boxSizing: "border-box",
                    backgroundColor: emailTheme.secondary,
                    color: emailTheme.primary,
                    fontSize: "14px",
                    fontWeight: 600,
                    textDecoration: "none",
                    textAlign: "center",
                    padding: "14px 20px",
                    borderRadius: `${emailTheme.buttonRadius}px`,
                  }}
                >
                  Atsakyti el. paštu
                </Button>
              ) : null}
            </Section>
          )}

          <SubmissionMetaSection
            submittedAtFormatted={props.submittedAtFormatted}
            ip={props.ip}
            deviceLabel={props.deviceLabel}
          />
        </Section>

        <Section
          style={{
            padding: "16px 20px 24px",
            borderTop: `1px solid ${emailTheme.borderSubtle}`,
            textAlign: "center",
          }}
        >
          <Link
            href={props.siteUrl}
            style={{
              fontSize: "12px",
              color: emailTheme.textMuted,
              textDecoration: "none",
            }}
          >
            {props.siteUrl.replace(/^https?:\/\//, "")}
          </Link>
        </Section>
      </Section>
    </EmailLayout>
  );
}

ContactInquiryEmail.PreviewProps = {
  vardas: "Jonas Petraitis",
  telefonas: "+370 612 34567",
  elpastas: "jonas@pastas.lt",
  zinute: "Domina karkasinio namo statyba. Norėčiau gauti preliminarų pasiūlymą.",
  website: "",
  submittedAt: "2026-06-16T12:00:00.000Z",
  submittedAtFormatted: "2026-06-16 15:00:00",
  ip: "192.168.1.1",
  userAgent: "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 Chrome/120.0.0.0",
  deviceLabel: "Chrome on Mac",
  companyName: "Lino Statyba",
  companyEmail: "info@linostatyba.lt",
  logoUrl: "https://linostatyba.lt/media/lino-logo.png",
  siteUrl: "https://linostatyba.lt",
} satisfies ContactInquiryEmailProps;

export default ContactInquiryEmail;
