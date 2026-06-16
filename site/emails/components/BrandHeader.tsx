import { Img, Section, Text } from "@react-email/components";
import { emailTheme } from "../email-theme";

type BrandHeaderProps = {
  logoUrl: string;
  companyName: string;
};

export function BrandHeader({ logoUrl, companyName }: BrandHeaderProps) {
  return (
    <Section
      style={{
        backgroundColor: emailTheme.primary,
        borderRadius: `${emailTheme.cardRadius}px ${emailTheme.cardRadius}px 0 0`,
        padding: "28px 24px 24px",
        textAlign: "center",
      }}
    >
      <Img
        src={logoUrl}
        alt={companyName}
        width={120}
        height={40}
        style={{
          display: "block",
          margin: "0 auto 16px",
          maxWidth: "120px",
          height: "auto",
        }}
      />
      <Text
        style={{
          margin: 0,
          fontSize: "22px",
          fontWeight: 700,
          letterSpacing: "0.12em",
          color: emailTheme.textOnDark,
          textTransform: "uppercase",
          lineHeight: "28px",
        }}
      >
        LINO STATYBA
      </Text>
      <Text
        style={{
          margin: "8px 0 0",
          fontSize: "14px",
          fontWeight: 400,
          color: emailTheme.textOnDarkMuted,
          lineHeight: "20px",
        }}
      >
        Nauja užklausa iš svetainės
      </Text>
      <Section
        style={{
          margin: "20px auto 0",
          width: "48px",
          height: "3px",
          backgroundColor: emailTheme.secondary,
          borderRadius: "2px",
        }}
      />
    </Section>
  );
}
