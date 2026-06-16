import { Section, Text } from "@react-email/components";
import { emailTheme } from "../email-theme";

type MessageSectionProps = {
  message?: string;
};

export function MessageSection({ message }: MessageSectionProps) {
  const displayMessage = message?.trim() ? message : "—";

  return (
    <Section style={{ marginTop: "8px" }}>
      <Text
        style={{
          margin: "0 0 10px",
          fontSize: "13px",
          fontWeight: 600,
          color: emailTheme.textSecondary,
          lineHeight: "20px",
        }}
      >
        Žinutė
      </Text>
      <Section
        style={{
          backgroundColor: emailTheme.messageBg,
          border: `1px solid ${emailTheme.border}`,
          borderLeft: `3px solid ${emailTheme.accent}`,
          padding: "20px 22px",
        }}
      >
        <Text
          style={{
            margin: 0,
            fontSize: "16px",
            fontWeight: 400,
            color: emailTheme.text,
            lineHeight: "26px",
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
