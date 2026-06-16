import { NextResponse } from "next/server";
import type { ContactApiError, ContactApiSuccess } from "@/lib/contact/types";
import { buildSubmissionMeta } from "@/lib/contact/format-submission-meta";
import { parseContactPayload } from "@/lib/contact/schema";
import { sendContactEmail } from "@/lib/contact/send-contact-email";

export async function POST(request: Request) {
  const ip =
    request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ??
    request.headers.get("x-real-ip") ??
    "unknown";

  const userAgent = request.headers.get("user-agent") ?? "unknown";

  let body: unknown;
  try {
    body = await request.json();
  } catch {
    const error: ContactApiError = {
      ok: false,
      error: "Neteisingi duomenys.",
    };
    return NextResponse.json<ContactApiError>(error, { status: 400 });
  }

  const parsed = parseContactPayload(body);
  if (!parsed.ok) {
    const error: ContactApiError = {
      ok: false,
      error: parsed.error,
      field: parsed.field,
    };
    return NextResponse.json<ContactApiError>(error, { status: 400 });
  }

  if (parsed.data.website.trim()) {
    const success: ContactApiSuccess = { ok: true };
    return NextResponse.json<ContactApiSuccess>(success, { status: 200 });
  }

  const meta = buildSubmissionMeta(ip, userAgent);

  try {
    await sendContactEmail(parsed.data, meta);
    const success: ContactApiSuccess = { ok: true };
    return NextResponse.json<ContactApiSuccess>(success, { status: 200 });
  } catch {
    const error: ContactApiError = {
      ok: false,
      error: "Nepavyko išsiųsti užklausos. Bandykite dar kartą vėliau.",
    };
    return NextResponse.json<ContactApiError>(error, { status: 500 });
  }
}

