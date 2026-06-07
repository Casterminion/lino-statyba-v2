import { TrustIcon } from "./TrustIcon";

const WHY_ITEMS = [
  {
    icon: "experience" as const,
    title: "Patirtis",
    line: "Karkasinių ir skydinių namų statyba Lietuvoje.",
  },
  {
    icon: "precision" as const,
    title: "A++ sprendimai",
    line: "Energingai efektyvūs namai pagal šiuolaikinius standartus.",
  },
  {
    icon: "projects" as const,
    title: "Nuo pamato iki rakto",
    line: "Vienas rangovas visam statybos procesui.",
  },
  {
    icon: "value" as const,
    title: "Konkurencinga kaina",
    line: "Skaidri sąmata be paslėptų papildomų darbų.",
  },
] as const;

export function ConversionWhyLino() {
  return (
    <section
      data-section="why-lino"
      data-nav-surface="solid"
      className="w-full border-b border-primary/8 bg-[#f7f5f2] px-5 py-6 wide:px-10 wide:py-7 desktop:px-10 desktop:py-7"
    >
      <div className="mx-auto flex w-full max-w-[1200px] flex-col gap-5">
        <p className="font-body text-[13px] font-semibold tracking-[0.1em] text-primary/55 uppercase">
          Kodėl rinktis Lino?
        </p>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 wide:grid-cols-4 wide:gap-5 desktop:grid-cols-4 desktop:gap-5">
          {WHY_ITEMS.map((item) => (
            <article
              key={item.title}
              className="flex items-start gap-3 border-t border-primary/10 pt-4 wide:border-t-0 wide:pt-0 desktop:border-t-0 desktop:pt-0"
            >
              <TrustIcon variant={item.icon} />
              <div className="flex min-w-0 flex-col gap-1">
                <h3 className="type-conversion-card-title text-text">{item.title}</h3>
                <p className="type-conversion-trust-text text-text/70">{item.line}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
