import { ConversionGalleryPreview } from "./ConversionGalleryPreview";
import { ConversionHero } from "./ConversionHero";
import { ConversionPartneriai } from "./ConversionPartneriai";
import { ConversionPaslaugos } from "./ConversionPaslaugos";
import { MobileStickyCta } from "./MobileStickyCta";

/**
 * Phase 3.10 — Launch homepage.
 * Hero → Paslaugos → Galerija → Partneriai → Kontaktai.
 */
export function HomeConversionPage() {
  return (
    <>
      <main className="flex w-full flex-col pb-[calc(4.5rem+env(safe-area-inset-bottom))] wide:pb-0 desktop:pb-0">
        <ConversionHero />
        <ConversionPaslaugos />
        <ConversionGalleryPreview />
        <ConversionPartneriai />
      </main>
      <MobileStickyCta />
    </>
  );
}
