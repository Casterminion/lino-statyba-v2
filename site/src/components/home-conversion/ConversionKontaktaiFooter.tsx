import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";
import { ContactCtaButton } from "@/components/contact/ContactCtaButton";
import { FOOTER_SOCIAL } from "@/components/home-footer/constants";
import { BRAND } from "@/lib/brand";
import { getHomeFooter } from "@/lib/content/home";
import { FooterMapCard } from "./FooterMapCard";

const FOOTER_LOGO_SRC = "/media/lino-logo-footer-dark.png";

const COMPANY_STATEMENT = [
  "Karkasinių namų statyba nuo pamato iki rakto.",
  "A++ klasė. Sertifikuota mediena.",
  "Ekonomiška. Tvari. Patikima.",
] as const;

const FOOTER_GRID =
  "wide:grid-cols-[minmax(0,0.4fr)_minmax(0,0.6fr)] desktop:grid-cols-[minmax(0,0.4fr)_minmax(0,0.6fr)]";

function formatPhoneDisplay(phone: string): string {
  const digits = phone.replace(/\D/g, "");
  if (digits.length === 11 && digits.startsWith("370")) {
    return `+370 ${digits.slice(3, 6)} ${digits.slice(6, 8)} ${digits.slice(8)}`;
  }
  return phone;
}

function FooterContactIcon({ variant }: { variant: "phone" | "email" | "instagram" | "facebook" }) {
  const paths = {
    phone: (
      <path
        d="M6.6 10.8c1.5 3 4.2 5.7 7.2 7.2l2.4-2.4c.3-.3.8-.4 1.2-.3 1.3.4 2.7.7 4.1.7.7 0 1.2.5 1.2 1.2V20c0 .7-.5 1.2-1.2 1.2C9.2 21.2 2.8 14.8 2.8 6.6 2.8 5.9 3.3 5.4 4 5.4h3.3c.7 0 1.2.5 1.2 1.2 0 1.4.2 2.8.7 4.1.1.4 0 .9-.3 1.2l-2.3 2.9z"
        fill="currentColor"
      />
    ),
    email: (
      <path
        d="M4 6h16c1.1 0 2 .9 2 2v8c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V8c0-1.1.9-2 2-2zm0 2v.3l8 5 8-5V8H4zm16 8V10.7l-8 5-8-5V16h16z"
        fill="currentColor"
      />
    ),
    instagram: (
      <>
        <rect x="4" y="4" width="16" height="16" rx="4.5" fill="none" stroke="currentColor" strokeWidth="1.5" />
        <circle cx="12" cy="12" r="3.25" fill="none" stroke="currentColor" strokeWidth="1.5" />
        <circle cx="16.2" cy="7.8" r="0.9" fill="currentColor" />
      </>
    ),
    facebook: (
      <path
        d="M13.2 8.4H15.4V6H13.2c-1.9 0-3.1 1.1-3.1 2.7V11H8v2.2h2.1v6.8h2.2v-6.8h1.9l.3-2.2H12.3V8.7c0-.6.1-1 .9-1z"
        fill="currentColor"
      />
    ),
  };

  return (
    <span
      className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-secondary text-secondary"
      aria-hidden
    >
      <svg viewBox="0 0 24 24" className="h-[15px] w-[15px]">
        {paths[variant]}
      </svg>
    </span>
  );
}

type ContactCellProps = {
  label: string;
  href?: string;
  external?: boolean;
  children: ReactNode;
  icon: "phone" | "email" | "instagram" | "facebook";
  valueClassName?: string;
};

function ContactCell({ label, href, external, children, icon, valueClassName }: ContactCellProps) {
  const content = (
    <>
      <FooterContactIcon variant={icon} />
      <div className="min-w-0 flex flex-col gap-1 pt-0.5">
        <span className="font-body text-[10px] font-semibold tracking-[0.1em] text-white/45 uppercase">
          {label}
        </span>
        <span className={`font-body text-[14px] font-medium leading-[1.35] ${valueClassName ?? "text-white"}`}>
          {children}
        </span>
      </div>
    </>
  );

  const className = "flex items-start gap-3 no-underline transition-opacity hover:opacity-85";

  if (href) {
    return (
      <a
        href={href}
        className={className}
        {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      >
        {content}
      </a>
    );
  }

  return <div className={className}>{content}</div>;
}

function FooterLegalBar({
  copyright,
  privacyHref,
  privacyLabel,
}: {
  copyright: string;
  privacyHref: string;
  privacyLabel: string;
}) {
  return (
    <div
      className="grid grid-cols-[1fr_auto] items-center gap-4"
      data-footer-legal-bar
    >
      <div className="justify-self-start font-body text-[12px] font-medium leading-none text-white/50">
        <p>{copyright}</p>
      </div>

      <Link
        href={privacyHref}
        className="justify-self-end font-body text-[12px] font-medium leading-none whitespace-nowrap text-white/50 no-underline hover:opacity-80"
      >
        {privacyLabel}
      </Link>
    </div>
  );
}

export function ConversionKontaktaiFooter() {
  const footer = getHomeFooter();
  const phoneDisplay = formatPhoneDisplay(footer.phone);

  return (
    <footer
      data-section="kontaktai-footer"
      data-nav-surface="transparent"
      className="w-full bg-[#13213c] px-5 py-10 text-white wide:px-10 wide:py-12 desktop:px-10 desktop:py-12"
    >
      <div className="mx-auto flex w-full max-w-[1200px] flex-col gap-7">
        <div className={`grid grid-cols-1 items-stretch gap-8 ${FOOTER_GRID} wide:gap-10 desktop:gap-10`}>
          <div className="flex flex-col gap-5">
            <div className="flex flex-col gap-3.5">
              <Link href="/" className="relative block h-[84px] w-[293px] shrink-0 no-underline">
                <Image
                  src={FOOTER_LOGO_SRC}
                  alt={BRAND.name}
                  width={2128}
                  height={1132}
                  className="h-[84px] w-[293px] object-contain object-left"
                  sizes="293px"
                  quality={95}
                  unoptimized
                />
              </Link>

              <p className="max-w-[420px] font-body text-[13px] font-normal leading-[1.55] text-white">
                {COMPANY_STATEMENT.map((line) => (
                  <span key={line} className="block">
                    {line}
                  </span>
                ))}
              </p>
            </div>

            <div className="h-px w-full bg-white/10" aria-hidden />

            <div className="grid grid-cols-2 gap-x-8 gap-y-7">
              <ContactCell label="Telefonas" href={`tel:${footer.phone.replace(/\s/g, "")}`} icon="phone">
                {phoneDisplay}
              </ContactCell>
              <ContactCell label="El. paštas" href={`mailto:${footer.email}`} icon="email">
                {footer.email}
              </ContactCell>
              <ContactCell label="Instagram" href={FOOTER_SOCIAL.instagram} icon="instagram" external>
                @mblstatyba
              </ContactCell>
              <ContactCell label="Facebook" href={FOOTER_SOCIAL.facebook} icon="facebook" external>
                MBLinostatyba
              </ContactCell>
            </div>

            <ContactCtaButton className="flex w-full items-center justify-center rounded-md bg-secondary px-8 py-3.5 font-body text-[15px] font-semibold leading-none text-primary transition-all hover:brightness-105 wide:mt-10 desktop:mt-10">
              Aptarkime jūsų projektą
            </ContactCtaButton>
          </div>

          <div className="hidden h-full min-h-[420px] wide:block desktop:block">
            <FooterMapCard address={footer.address} variant="desktop" />
          </div>
        </div>

        <div className="wide:hidden desktop:hidden">
          <FooterMapCard address={footer.address} variant="mobile" />
        </div>

        <div className="h-px w-full bg-white/10" aria-hidden />

        <FooterLegalBar
          copyright={footer.copyright}
          privacyHref={footer.privacyHref}
          privacyLabel={footer.privacyLabel}
        />
      </div>
    </footer>
  );
}
