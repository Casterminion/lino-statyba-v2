import { Column, Link, Row, Section, Text } from "@react-email/components";
import { EmailIcon } from "./EmailIcon";
import { emailTheme } from "../email-theme";

type ContactInfoCardProps = {
  icon: "user" | "phone" | "mail";
  label: string;
  value: string;
  href?: string;
  isLast?: boolean;
};

export function ContactInfoCard({
  icon,
  label,
  value,
  href,
  isLast = false,
}: ContactInfoCardProps) {
  return (
    <Section style={{ marginBottom: isLast ? 0 : "20px" }}>
      <Row>
        <Column style={{ width: "48px", verticalAlign: "top" }}>
          <EmailIcon name={icon} />
        </Column>
        <Column style={{ verticalAlign: "top", paddingLeft: "4px" }}>
          <Text
            style={{
              margin: "0 0 2px",
              fontSize: "12px",
              fontWeight: 500,
              color: emailTheme.textMuted,
              lineHeight: "16px",
            }}
          >
            {label}
          </Text>
          {href ? (
            <Link
              href={href}
              style={{
                margin: 0,
                fontSize: "16px",
                fontWeight: 500,
                color: emailTheme.primary,
                textDecoration: "none",
                lineHeight: "24px",
                wordBreak: "break-word",
              }}
            >
              {value}
            </Link>
          ) : (
            <Text
              style={{
                margin: 0,
                fontSize: "16px",
                fontWeight: 500,
                color: emailTheme.text,
                lineHeight: "24px",
                wordBreak: "break-word",
              }}
            >
              {value}
            </Text>
          )}
        </Column>
      </Row>
    </Section>
  );
}
