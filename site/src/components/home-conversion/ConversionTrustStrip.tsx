const TRUST_FACTS = [
  "A++ energinė klasė",
  "Sertifikuota mediena",
  "Projektai visoje Lietuvoje",
  "Nuo pamato iki rakto",
] as const;

export function ConversionTrustStrip() {
  return (
    <section
      data-section="trust-strip"
      data-nav-surface="solid"
      className="w-full border-b border-primary/8 bg-white px-5 py-3.5 wide:px-10 desktop:px-10"
    >
      <ul className="mx-auto flex w-full max-w-[1200px] flex-wrap items-center justify-center gap-x-3 gap-y-2 wide:gap-x-0 desktop:gap-x-0">
        {TRUST_FACTS.map((label, index) => (
          <li key={label} className="flex items-center">
            <span className="font-body text-[13px] font-medium text-primary/85 wide:text-[14px] desktop:text-[14px]">
              {label}
            </span>
            {index < TRUST_FACTS.length - 1 ? (
              <span
                className="mx-3 hidden h-3 w-px bg-primary/15 wide:inline desktop:inline"
                aria-hidden
              />
            ) : null}
          </li>
        ))}
      </ul>
    </section>
  );
}
