import { Section, Text } from "@react-email/components";
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
    <Section
      style={{
        backgroundColor: emailTheme.surface,
        border: `1px solid ${emailTheme.borderSubtle}`,
        borderRadius: `${emailTheme.cardRadius}px`,
        padding: "16px 18px",
        marginTop: "8px",
      }}
    >
      <MetaRow label="Pateikta:" value={submittedAtFormatted} />
      <MetaRow label="IP:" value={ip} />
      <MetaRow label="Įrenginys:" value={deviceLabel} isLast />
    </Section>
  );
}

function MetaRow({
  label,
  value,
  isLast = false,
}: {
  label: string;
  value: string;
  isLast?: boolean;
}) {
  return (
    <Text
      style={{
        margin: isLast ? 0 : "0 0 8px",
        fontSize: "12px",
        lineHeight: "18px",
        color: emailTheme.textMuted,
      }}
    >
      <span style={{ fontWeight: 600, color: emailTheme.text }}>{label}</span> {value}
    </Text>
  );
}
