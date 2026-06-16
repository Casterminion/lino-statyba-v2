import { Section, Text } from "@react-email/components";
import { emailTheme } from "../email-theme";

type MessageSectionProps = {
  message?: string;
};

export function MessageSection({ message }: MessageSectionProps) {
  const displayMessage = message?.trim() ? message : "—";

  return (
    <Section
      style={{
        backgroundColor: emailTheme.card,
        border: `1px solid ${emailTheme.border}`,
        borderRadius: `${emailTheme.cardRadius}px`,
        padding: "18px 20px",
        marginBottom: "12px",
        boxShadow: emailTheme.shadow,
      }}
    >
      <Text
        style={{
          margin: "0 0 8px",
          fontSize: "11px",
          fontWeight: 600,
          letterSpacing: "0.08em",
          textTransform: "uppercase",
          color: emailTheme.textMuted,
          lineHeight: "14px",
        }}
      >
        Žinutė
      </Text>
      <Text
        style={{
          margin: 0,
          fontSize: "15px",
          fontWeight: 400,
          color: emailTheme.text,
          lineHeight: "24px",
          whiteSpace: "pre-wrap",
          wordBreak: "break-word",
        }}
      >
        {displayMessage}
      </Text>
    </Section>
  );
}
