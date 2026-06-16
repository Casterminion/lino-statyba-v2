import { Section, Text } from "@react-email/components";
import { emailTheme } from "../email-theme";

type MessageSectionProps = {
  message?: string;
};

export function MessageSection({ message }: MessageSectionProps) {
  const displayMessage = message?.trim() ? message : "—";

  return (
    <Section style={{ marginTop: "40px" }}>
      <Text
        style={{
          margin: "0 0 16px",
          fontSize: "12px",
          fontWeight: 500,
          color: emailTheme.textMuted,
          lineHeight: "16px",
        }}
      >
        Žinutė
      </Text>
      <Section
        style={{
          backgroundColor: emailTheme.quoteBg,
          borderRadius: "12px",
          padding: "28px 32px",
          borderLeft: `3px solid ${emailTheme.accent}`,
        }}
      >
        <Text
          style={{
            margin: "0 0 12px",
            fontSize: "32px",
            fontWeight: 400,
            color: emailTheme.quoteMark,
            lineHeight: "24px",
            fontFamily: "Georgia, 'Times New Roman', serif",
          }}
        >
          &ldquo;
        </Text>
        <Text
          style={{
            margin: 0,
            fontSize: "16px",
            fontWeight: 400,
            color: emailTheme.textSecondary,
            lineHeight: "28px",
            whiteSpace: "pre-wrap",
            wordBreak: "break-word",
          }}
        >
          {displayMessage}
        </Text>
      </Section>
    </Section>
  );
}
