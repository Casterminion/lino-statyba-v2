export type ContactFormPayload = {
  vardas: string;
  telefonas: string;
  elpastas?: string;
  zinute?: string;
  website: string;
};

export type ContactFormRequest = ContactFormPayload & {
  turnstileToken: string;
};

export type ContactSubmissionMeta = {
  submittedAt: string;
  submittedAtFormatted: string;
  ip: string;
  userAgent: string;
  deviceLabel: string;
};

export type ContactInquiryEmailProps = ContactFormPayload &
  ContactSubmissionMeta & {
    companyName: string;
    companyEmail: string;
    logoUrl: string;
    siteUrl: string;
  };

export type ContactApiSuccess = {
  ok: true;
};

export type ContactApiError = {
  ok: false;
  error: string;
  field?: keyof Omit<ContactFormPayload, "website">;
};

export type ContactFormStatus = "idle" | "loading" | "success" | "error";

export type ParseContactResult =
  | { ok: true; data: ContactFormPayload }
  | { ok: false; error: string; field?: keyof Omit<ContactFormPayload, "website"> };
