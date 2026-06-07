"use client";

import Link from "next/link";
import { useCallback, useEffect, useState, type FormEvent } from "react";
import { getHomeFooter } from "@/lib/content/home";
import { cn } from "@/lib/cn";
import { lenisPreventProps } from "@/lib/scroll/lenis-prevent";
import { useLenis } from "@/providers/LenisProvider";

type ContactModalProps = {
  isOpen: boolean;
  onClose: () => void;
};

const inputClassName =
  "h-[50px] w-full rounded-lg border border-primary/10 bg-white px-4 font-body text-[15px] text-primary outline-none transition-all duration-200 placeholder:text-primary/28 focus:border-secondary focus:ring-2 focus:ring-secondary/30";

export function ContactModal({ isOpen, onClose }: ContactModalProps) {
  const footer = getHomeFooter();
  const lenis = useLenis();
  const [submitted, setSubmitted] = useState(false);

  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    },
    [onClose],
  );

  useEffect(() => {
    if (!isOpen) {
      setSubmitted(false);
      return;
    }

    lenis?.stop();
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      lenis?.start();
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, handleKeyDown, lenis]);

  if (!isOpen) return null;

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);

    const name = String(data.get("vardas") ?? "").trim();
    const phone = String(data.get("telefonas") ?? "").trim();
    const email = String(data.get("elpastas") ?? "").trim();
    const message = String(data.get("zinute") ?? "").trim();

    const body = [
      `Vardas: ${name}`,
      `Telefonas: ${phone}`,
      email ? `El. paštas: ${email}` : null,
      message ? `Žinutė:\n${message}` : null,
    ]
      .filter(Boolean)
      .join("\n");

    const mailto = `mailto:${footer.email}?subject=${encodeURIComponent("Užklausa — Lino Statyba")}&body=${encodeURIComponent(body)}`;
    window.location.href = mailto;
    setSubmitted(true);
    form.reset();
  };

  return (
    <div
      {...lenisPreventProps()}
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
          {...lenisPreventProps()}
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
            />
          </label>

          {submitted ? (
            <p className="rounded-lg border border-secondary/30 bg-secondary/10 px-4 py-3 font-body text-[14px] text-primary">
              Ačiū! Jūsų el. pašto programa atsidarys su užpildyta žinute.
            </p>
          ) : null}

          <div className="flex flex-col gap-2">
            <button
              type="submit"
              className="inline-flex h-[52px] w-full items-center justify-center rounded-lg bg-secondary font-body text-[16px] font-semibold tracking-[-0.01em] text-primary transition-all duration-200 hover:bg-[#e8b05e] active:scale-[0.985] active:brightness-95"
            >
              Gauti pasiūlymą
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
