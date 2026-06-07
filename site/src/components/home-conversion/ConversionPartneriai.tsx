import Image from "next/image";
import { PRESS_LOGOS_DESKTOP, type PressLogoSpec } from "@/components/home-footer/constants";
import { IMAGE_SIZES } from "@/lib/image-sizes";
import { HomeSection } from "./HomeSection";

const LOGO_CELL =
  "relative flex h-[72px] w-[138px] shrink-0 items-center justify-center wide:h-[82px] wide:w-[168px] desktop:h-[82px] desktop:w-[168px]";

/** JPG/PNG assets with baked-in light backgrounds — multiply hides them on white. */
const LIGHT_BG_LOGOS = new Set([
  "/media/lino-partners/medzio-bites-logo.webp",
  "/media/lino-partners/legnoline-logo.webp",
  "/media/lino-partners/reburnent.webp",
]);

const LOGO_MUTED =
  "opacity-70 grayscale transition-[transform,opacity,filter] duration-300 ease-out group-hover:scale-[1.06] group-hover:opacity-100 group-hover:grayscale-0";

function PartnerLogo({ logo }: { logo: PressLogoSpec }) {
  const blendOnWhite = LIGHT_BG_LOGOS.has(logo.path);
  const imageClassName = `${LOGO_MUTED} ${blendOnWhite ? "mix-blend-multiply group-hover:mix-blend-normal" : ""} ${logo.objectFit === "contain" ? "object-contain" : "object-cover"}`;

  const content = (
    <Image
      src={logo.path}
      alt={logo.alt}
      fill
      className={imageClassName}
      sizes={IMAGE_SIZES.partnerLogo}
    />
  );

  if (!logo.href) {
    return <div className={`${LOGO_CELL} group overflow-visible`}>{content}</div>;
  }

  return (
    <a
      href={logo.href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={logo.alt}
      className={`${LOGO_CELL} group overflow-visible no-underline`}
      data-cursor-pointer
    >
      {content}
    </a>
  );
}

/** Compact supplier strip — projects → logos → footer. */
export function ConversionPartneriai() {
  const logos = PRESS_LOGOS_DESKTOP;

  return (
    <HomeSection
      id="partneriai"
      className="border-t border-primary/8 !py-7 wide:!py-9 desktop:!py-9"
    >
      <div className="flex flex-col items-center gap-6 wide:gap-7 desktop:gap-7">
        <h2 className="type-conversion-section-title text-text">Mūsų partneriai</h2>

        <div className="flex flex-wrap items-center justify-center gap-x-7 gap-y-4 wide:gap-x-9 desktop:gap-x-9">
          {logos.map((logo) => (
            <PartnerLogo key={logo.path} logo={logo} />
          ))}
        </div>
      </div>
    </HomeSection>
  );
}
