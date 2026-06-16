import { Img, Section, Text } from "@react-email/components";
import { emailTheme } from "../email-theme";

type BrandHeaderProps = {
  logoUrl: string;
  companyName: string;
};

export function BrandHeader({ logoUrl, companyName }: BrandHeaderProps) {
  return (
    <Section style={{ padding: "40px 40px 0", textAlign: "center" }}>
      <Img
        src={logoUrl}
        alt={companyName}
        width={108}
        height={36}
        style={{
          display: "block",
          margin: "0 auto 32px",
          maxWidth: "108px",
          height: "auto",
        }}
      />
      <Text
        style={{
          margin: 0,
          fontSize: "24px",
          fontWeight: 600,
          letterSpacing: "-0.02em",
          color: emailTheme.text,
          lineHeight: "32px",
        }}
      >
        Nauja užklausa iš svetainės
      </Text>
      <Section
        style={{
          margin: "20px auto 0",
          width: "32px",
          height: "3px",
          backgroundColor: emailTheme.accent,
          borderRadius: "2px",
        }}
      />
    </Section>
  );
}
