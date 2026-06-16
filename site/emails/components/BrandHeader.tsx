import { Img, Text } from "@react-email/components";
import { emailTheme } from "../email-theme";

type BrandHeaderProps = {
  logoUrl: string;
  companyName: string;
  submittedAtFormatted: string;
};

export function BrandHeader({
  logoUrl,
  companyName,
  submittedAtFormatted,
}: BrandHeaderProps) {
  return (
    <tr>
      <td style={{ padding: `${emailTheme.cellPadding} ${emailTheme.cellPadding} 20px` }}>
        <Text
          style={{
            margin: "0 0 16px",
            fontSize: "20px",
            fontWeight: "bold",
            color: emailTheme.primary,
            lineHeight: "28px",
          }}
        >
          Nauja užklausa iš svetainės
        </Text>

        <Img
          src={logoUrl}
          alt={companyName}
          width={120}
          height={40}
          style={{
            display: "block",
            margin: "0 0 10px",
            maxWidth: "120px",
            height: "auto",
          }}
        />

        <Text
          style={{
            margin: 0,
            fontSize: "13px",
            color: emailTheme.textMuted,
            lineHeight: "20px",
          }}
        >
          {submittedAtFormatted}
        </Text>
      </td>
    </tr>
  );
}
