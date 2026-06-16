import { Link, Text } from "@react-email/components";
import { emailTheme } from "../email-theme";

type ContactInfoCardProps = {
  label: string;
  value: string;
  href?: string;
};

export function ContactInfoCard({ label, value, href }: ContactInfoCardProps) {
  const valueStyle = {
    margin: "4px 0 0",
    fontSize: "18px",
    fontWeight: "bold" as const,
    color: href ? emailTheme.primary : emailTheme.text,
    lineHeight: "26px",
    wordBreak: "break-word" as const,
  };

  return (
    <tr>
      <td style={{ padding: `0 ${emailTheme.cellPadding} 16px` }}>
        <Text
          style={{
            margin: 0,
            fontSize: "13px",
            fontWeight: "normal",
            color: emailTheme.textMuted,
            lineHeight: "20px",
          }}
        >
          {label}
        </Text>
        {href ? (
          <Link href={href} style={{ ...valueStyle, textDecoration: "none" }}>
            {value}
          </Link>
        ) : (
          <Text style={valueStyle}>{value}</Text>
        )}
      </td>
    </tr>
  );
}
