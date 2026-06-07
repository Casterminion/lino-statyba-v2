import { getOverlapPanels } from "@/lib/content/home";
import { HomeSection } from "./HomeSection";
import { TrustIcon } from "./TrustIcon";
import { splitBulletForCard, splitIntoBullets } from "./utils";

export function ConversionTrust() {
  const panels = getOverlapPanels();
  const trustPanel = panels[1];
  const bullets = splitIntoBullets(trustPanel?.body ?? "", 6);

  return (
    <HomeSection id="trust" variant="light" className="bg-[#f7f5f2]">
      <div className="flex flex-col gap-8 wide:gap-10 desktop:gap-10">
        <h2 className="type-conversion-section-title text-primary">{trustPanel?.title}</h2>

        <ul className="grid grid-cols-1 gap-4 wide:grid-cols-2 wide:gap-5 desktop:grid-cols-2 desktop:gap-5">
          {bullets.map((bullet, index) => {
            const { title, text, icon } = splitBulletForCard(bullet, index);

            return (
              <li
                key={bullet}
                className="flex gap-4 rounded-xl border border-primary/8 bg-white p-5 wide:p-6 desktop:p-6"
              >
                <TrustIcon variant={icon} />
                <div className="flex min-w-0 flex-col gap-1.5">
                  <h3 className="type-conversion-card-title text-primary normal-case">{title}</h3>
                  <p className="type-conversion-trust-text text-text/70">{text}</p>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </HomeSection>
  );
}
