import { Link, Section, Text } from "@react-email/components";
import { emailTheme } from "../email-theme";

type SubmissionMetaSectionProps = {
  submittedAtFormatted: string;
  ip: string;
  deviceLabel: string;
  siteUrl: string;
};

export function SubmissionMetaSection({
  submittedAtFormatted,
  ip,
  deviceLabel,
  siteUrl,
}: SubmissionMetaSectionProps) {
  const labelStyle = {
    margin: 0,
    fontSize: "12px",
    lineHeight: "20px",
    color: emailTheme.textMuted,
  };

  return (
    <Section
      style={{
        marginTop: "28px",
        paddingTop: "20px",
        borderTop: `1px solid ${emailTheme.border}`,
      }}
    >
      <Text
        style={{
          margin: "0 0 10px",
          fontSize: "11px",
          fontWeight: 600,
          letterSpacing: "0.06em",
          textTransform: "uppercase" as const,
          color: emailTheme.textMuted,
          lineHeight: "16px",
        }}
      >
        Techninė informacija
      </Text>

      <Text style={{ ...labelStyle, marginBottom: "4px" }}>
        Data: {submittedAtFormatted}
      </Text>
      <Text style={{ ...labelStyle, marginBottom: "4px" }}>
        Naršyklė: {deviceLabel}
      </Text>
      <Text style={{ ...labelStyle, marginBottom: "12px" }}>IP: {ip}</Text>

      <Link
        href={siteUrl}
        style={{
          fontSize: "12px",
          color: emailTheme.textMuted,
          textDecoration: "none",
        }}
      >
        {siteUrl.replace(/^https?:\/\//, "")}
      </Link>
    </Section>
  );
}
