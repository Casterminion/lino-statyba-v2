import { Resend } from "resend";
import type {
  ContactFormPayload,
  ContactInquiryEmailProps,
  ContactSubmissionMeta,
} from "./types";
import { buildContactPlainText } from "./build-plain-text";
import { ContactInquiryEmail } from "../../../emails/ContactInquiryEmail";
import { BRAND } from "@/lib/brand";
import { COMPANY } from "@/lib/content/privacy-policy";
import { SITE_URL } from "@/lib/seo/config";

export async function sendContactEmail(
  payload: ContactFormPayload,
  meta: ContactSubmissionMeta,
): Promise<void> {
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    throw new Error("RESEND_API_KEY is not set.");
  }

  const from = process.env.CONTACT_FROM_EMAIL;
  if (!from) {
    throw new Error("CONTACT_FROM_EMAIL is not set.");
  }

  const to = process.env.CONTACT_TO_EMAIL;
  if (!to) {
    throw new Error("CONTACT_TO_EMAIL is not set.");
  }

  const siteUrl = SITE_URL;
  const logoUrl = `${siteUrl}${BRAND.logo.color}`;

  const props: ContactInquiryEmailProps = {
    ...payload,
    ...meta,
    companyName: BRAND.name,
    companyEmail: COMPANY.email,
    logoUrl,
    siteUrl,
  };

  const resend = new Resend(apiKey);

  const { error } = await resend.emails.send({
    from,
    to: [to],
    replyTo: payload.elpastas ?? undefined,
    subject: `Užklausa — ${payload.vardas} — Lino Statyba`,
    react: ContactInquiryEmail(props),
    text: buildContactPlainText(props),
  });

  if (error) {
    const message =
      typeof error.message === "string" ? error.message : "El. laiško siuntimas nepavyko.";
    throw new Error(message);
  }
}

