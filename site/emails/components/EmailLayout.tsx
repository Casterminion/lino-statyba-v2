import {
  Body,
  Container,
  Head,
  Html,
  Preview,
} from "@react-email/components";
import type { ReactNode } from "react";
import { emailTheme } from "../email-theme";

type EmailLayoutProps = {
  preview: string;
  children: ReactNode;
};

export function EmailLayout({ preview, children }: EmailLayoutProps) {
  return (
    <Html lang="lt">
      <Head />
      <Preview>{preview}</Preview>
      <Body
        style={{
          margin: 0,
          padding: 0,
          backgroundColor: emailTheme.background,
          fontFamily: emailTheme.fontFamily,
          WebkitTextSizeAdjust: "100%",
        }}
      >
        <Container
          style={{
            maxWidth: `${emailTheme.containerWidth}px`,
            margin: "0 auto",
            padding: "24px 16px",
          }}
        >
          {children}
        </Container>
      </Body>
    </Html>
  );
}
