import { Text } from "@react-email/components";
import { emailTheme } from "../email-theme";

type MessageSectionProps = {
  message?: string;
};

export function MessageSection({ message }: MessageSectionProps) {
  const displayMessage = message?.trim() ? message : "—";

  return (
    <>
      <tr>
        <td style={{ padding: `8px ${emailTheme.cellPadding} 10px` }}>
          <Text
            style={{
              margin: 0,
              fontSize: "13px",
              fontWeight: "bold",
              color: emailTheme.textSecondary,
              lineHeight: "20px",
            }}
          >
            Žinutė
          </Text>
        </td>
      </tr>
      <tr>
        <td style={{ padding: `0 ${emailTheme.cellPadding} 4px` }}>
          <table
            width="100%"
            cellPadding={0}
            cellSpacing={0}
            role="presentation"
            style={{ borderCollapse: "collapse" }}
          >
            <tbody>
              <tr>
                <td
                  style={{
                    backgroundColor: emailTheme.messageBg,
                    border: `1px solid ${emailTheme.border}`,
                    borderLeft: `3px solid ${emailTheme.accent}`,
                    padding: "16px 18px",
                  }}
                >
                  <Text
                    style={{
                      margin: 0,
                      fontSize: "16px",
                      fontWeight: "normal",
                      color: emailTheme.text,
                      lineHeight: "26px",
                      whiteSpace: "pre-wrap",
                      wordBreak: "break-word",
                    }}
                  >
                    {displayMessage}
                  </Text>
                </td>
              </tr>
            </tbody>
          </table>
        </td>
      </tr>
    </>
  );
}
