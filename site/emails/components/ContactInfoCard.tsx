import { Link, Section, Text } from "@react-email/components";
import { emailTheme } from "../email-theme";

type ContactInfoCardProps = {
  emoji: string;
  label: string;
  value: string;
  href?: string;
};

export function ContactInfoCard({
  emoji,
  label,
  value,
  href,
}: ContactInfoCardProps) {
  const valueStyle = {
    margin: "4px 0 0",
    fontSize: "18px",
    fontWeight: 600,
    color: href ? emailTheme.primary : emailTheme.text,
    lineHeight: "26px",
    wordBreak: "break-word" as const,
  };

  return (
    <Section style={{ marginBottom: "16px" }}>
      <Text
        style={{
          margin: 0,
          fontSize: "13px",
          fontWeight: 500,
          color: emailTheme.textMuted,
          lineHeight: "20px",
        }}
      >
        {emoji} {label}
      </Text>
      {href ? (
        <Link href={href} style={{ ...valueStyle, textDecoration: "none" }}>
          {value}
        </Link>
      ) : (
        <Text style={valueStyle}>{value}</Text>
      )}
    </Section>
  );
}
