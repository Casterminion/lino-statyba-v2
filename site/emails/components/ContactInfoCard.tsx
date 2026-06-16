import { Link, Section, Text } from "@react-email/components";
import { emailTheme } from "../email-theme";

type ContactInfoCardProps = {
  label: string;
  value: string;
  href?: string;
};

export function ContactInfoCard({ label, value, href }: ContactInfoCardProps) {
  return (
    <Section
      style={{
        backgroundColor: emailTheme.card,
        border: `1px solid ${emailTheme.border}`,
        borderRadius: `${emailTheme.cardRadius}px`,
        padding: "16px 18px",
        marginBottom: "12px",
        boxShadow: emailTheme.shadow,
      }}
    >
      <Text
        style={{
          margin: "0 0 6px",
          fontSize: "11px",
          fontWeight: 600,
          letterSpacing: "0.08em",
          textTransform: "uppercase",
          color: emailTheme.textMuted,
          lineHeight: "14px",
        }}
      >
        {label}
      </Text>
      {href ? (
        <Link
          href={href}
          style={{
            margin: 0,
            fontSize: "16px",
            fontWeight: 600,
            color: emailTheme.primary,
            textDecoration: "none",
            lineHeight: "24px",
            wordBreak: "break-word",
          }}
        >
          {value}
        </Link>
      ) : (
        <Text
          style={{
            margin: 0,
            fontSize: "16px",
            fontWeight: 600,
            color: emailTheme.text,
            lineHeight: "24px",
            wordBreak: "break-word",
          }}
        >
          {value}
        </Text>
      )}
    </Section>
  );
}
