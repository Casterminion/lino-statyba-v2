"use client";

import Link from "next/link";
import { useCallback, useEffect, useState, type FormEvent } from "react";
import { getHomeFooter } from "@/lib/content/home";
import { cn } from "@/lib/cn";
import { setOverlayOpen } from "@/lib/overlay-open";
import type { ContactApiError, ContactApiSuccess, ContactFormPayload, ContactFormStatus } from "@/lib/contact/types";

type ContactModalProps = {
  isOpen: boolean;
  onClose: () => void;
};

const inputClassName =
  "h-[50px] w-full rounded-lg border border-primary/10 bg-white px-4 font-body text-[15px] text-primary outline-none transition-all duration-200 placeholder:text-primary/28 focus:border-secondary focus:ring-2 focus:ring-secondary/30";

export function ContactModal({ isOpen, onClose }: ContactModalProps) {
  const footer = getHomeFooter();
  const [status, setStatus] = useState<ContactFormStatus>("idle");
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    },
    [onClose],
  );

  useEffect(() => {
    if (!isOpen) {
      setStatus("idle");
      setErrorMessage(null);
      return;
    }

    setOverlayOpen(true);
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      setOverlayOpen(false);
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, handleKeyDown]);

  if (!isOpen) return null;

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);

    const vardas = String(formData.get("vardas") ?? "").trim();
    const telefonas = String(formData.get("telefonas") ?? "").trim();
    const elpastasRaw = String(formData.get("elpastas") ?? "").trim();
    const zinuteRaw = String(formData.get("zinute") ?? "").trim();
    const website = String(formData.get("website") ?? "").trim();

    const payload: ContactFormPayload = {
      vardas,
      telefonas,
      website,
      ...(elpastasRaw ? { elpastas: elpastasRaw } : {}),
      ...(zinuteRaw ? { zinute: zinuteRaw } : {}),
    };

    setStatus("loading");
    setErrorMessage(null);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      let json: unknown = null;
      try {
        json = await res.json();
      } catch {
        json = null;
      }

      const isSuccess = (value: unknown): value is ContactApiSuccess => {
        return typeof value === "object" && value !== null && (value as ContactApiSuccess).ok === true;
      };

      const isError = (value: unknown): value is ContactApiError => {
        return typeof value === "object" && value !== null && (value as ContactApiError).ok === false;
      };

      if (res.ok && isSuccess(json)) {
        setStatus("success");
        setErrorMessage(null);
        form.reset();
        return;
      }

      const serverError = isError(json) ? json.error : null;
      setStatus("error");
      setErrorMessage(
        serverError ??
          "Nepavyko išsiųsti užklausos. Bandykite dar kartą vėliau.",
      );
    } catch {
      setStatus("error");
      setErrorMessage(
        "Nepavyko išsiųsti užklausos. Patikrinkite interneto ryšį ir bandykite dar kartą.",
      );
    }
  };

  return (
    <div
      className="fixed inset-0 z-overlay overflow-y-auto overscroll-y-contain bg-[#0f1a30]/75 p-4 backdrop-blur-[2px]"
      role="dialog"
      aria-modal="true"
      aria-labelledby="contact-modal-title"
      onClick={onClose}
    >
      <button
        type="button"
        onClick={onClose}
        className="fixed top-4 right-4 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-white/10 font-body text-2xl text-white transition-colors hover:bg-white/20"
        aria-label="Uždaryti"
      >
        ×
      </button>

      <div className="flex min-h-full items-center justify-center">
        <div
          className="relative my-auto w-full max-w-[600px] rounded-2xl bg-[#faf9f7] shadow-[0_24px_64px_rgba(19,33,60,0.28)]"
          onClick={(e) => e.stopPropagation()}
        >
        <div className="border-b border-primary/8 px-6 pt-7 pb-7 wide:px-8 desktop:px-8">
          <p className="font-body text-[11px] font-semibold tracking-[0.14em] text-primary/45 uppercase">
            Susisiekite
          </p>
          <h2
            id="contact-modal-title"
            className="mt-2.5 font-body text-[26px] font-semibold leading-[1.2] tracking-[-0.025em] text-primary wide:text-[28px] desktop:text-[28px]"
          >
            Gauti pasiūlymą
          </h2>
          <p className="mt-2 max-w-[440px] font-body text-[14px] leading-[1.55] text-primary/55">
            Palikite kontaktus ir susisieksime su jumis per 1 darbo dieną.
          </p>
        </div>

        <form
          className="flex flex-col gap-5 px-6 py-6 wide:px-8 wide:py-7 desktop:px-8 desktop:py-7"
          onSubmit={handleSubmit}
        >
          <input
            type="text"
            name="website"
            tabIndex={-1}
            autoComplete="off"
            aria-hidden="true"
            className="absolute -left-[9999px] h-0 w-0 opacity-0"
            disabled={status === "loading"}
          />

          {status === "error" && errorMessage ? (
            <p
              role="alert"
              className="rounded-lg border border-red-300/50 bg-red-50 px-4 py-3 font-body text-[14px] text-red-800"
            >
              {errorMessage}
            </p>
          ) : null}

          <label className="flex flex-col gap-1.5">
            <span className="font-body text-[13px] font-medium text-primary">
              Vardas <span className="text-primary/45">*</span>
            </span>
            <input
              name="vardas"
              type="text"
              required
              autoComplete="name"
              className={inputClassName}
              placeholder="Jūsų vardas"
              disabled={status === "loading"}
            />
          </label>

          <label className="flex flex-col gap-1.5">
            <span className="font-body text-[13px] font-medium text-primary">
              Telefonas <span className="text-primary/45">*</span>
            </span>
            <input
              name="telefonas"
              type="tel"
              required
              autoComplete="tel"
              defaultValue="+370 "
              className={inputClassName}
              placeholder="6XX XXXXX"
              disabled={status === "loading"}
            />
          </label>

          <label className="flex flex-col gap-1.5">
            <span className="font-body text-[13px] font-medium text-primary">El. paštas</span>
            <input
              name="elpastas"
              type="email"
              autoComplete="email"
              className={inputClassName}
              placeholder="vardas@pastas.lt"
              disabled={status === "loading"}
            />
          </label>

          <label className="flex flex-col gap-1.5">
            <span className="font-body text-[13px] font-medium text-primary">Žinutė</span>
            <textarea
              name="zinute"
              rows={3}
              className={cn(
                inputClassName,
                "h-auto min-h-[96px] resize-y py-3.5",
              )}
              placeholder="Trumpai aprašykite, kuo galime padėti..."
              disabled={status === "loading"}
            />
          </label>

          {status === "success" ? (
            <p className="rounded-lg border border-secondary/30 bg-secondary/10 px-4 py-3 font-body text-[14px] text-primary">
              Ačiū! Jūsų užklausa išsiųsta. Susisieksime per 1 darbo dieną.
            </p>
          ) : null}

          <div className="flex flex-col gap-2">
            <button
              type="submit"
              disabled={status === "loading" || status === "success"}
              aria-busy={status === "loading"}
              className="inline-flex h-[52px] w-full items-center justify-center rounded-lg bg-secondary font-body text-[16px] font-semibold tracking-[-0.01em] text-primary transition-all duration-200 hover:bg-[#e8b05e] active:scale-[0.985] active:brightness-95 disabled:cursor-not-allowed disabled:opacity-60"
            >
              {status === "loading" ? "Siunčiama..." : "Gauti pasiūlymą"}
            </button>
            <p className="text-center font-body text-[12px] leading-snug text-primary/35">
              Išsiųsdami formą sutinkate su{" "}
              <Link
                href={footer.privacyHref}
                className="text-primary/40 underline-offset-2 transition-colors hover:text-primary/50 hover:underline"
              >
                privatumo politika
              </Link>
              .
            </p>
          </div>
        </form>
        </div>
      </div>
    </div>
  );
}
