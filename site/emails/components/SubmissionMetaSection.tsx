import { Text } from "@react-email/components";
import { emailTheme } from "../email-theme";

type SubmissionMetaSectionProps = {
  submittedAtFormatted: string;
  ip: string;
  deviceLabel: string;
};

export function SubmissionMetaSection({
  submittedAtFormatted,
  ip,
  deviceLabel,
}: SubmissionMetaSectionProps) {
  return (
    <Text
      style={{
        margin: "48px 0 0",
        paddingTop: "8px",
        fontSize: "12px",
        lineHeight: "20px",
        color: emailTheme.textMuted,
        textAlign: "center",
      }}
    >
      {submittedAtFormatted}
      <span style={{ color: emailTheme.accent, padding: "0 10px" }}>·</span>
      {deviceLabel}
      <span style={{ color: emailTheme.accent, padding: "0 10px" }}>·</span>
      {ip}
    </Text>
  );
}
