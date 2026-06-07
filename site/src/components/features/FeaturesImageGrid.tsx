"use client";

import { cn } from "@/lib/cn";
import { getAsset, getAssetById } from "@/lib/assets";
import { getServiceCards } from "@/lib/content/home";
import { FeatureImageCard } from "./FeatureImageCard";
import {
  FEATURES_GRID,
  FEATURES_GRID_GAP,
  FEATURES_GRID_MAX,
  SERVICE_CARD_RENDER_LIMIT,
} from "./constants";

type FeaturesImageGridProps = {
  variant: "desktop" | "mobile";
};

const CARD_IMAGES = [
  () => getAssetById("feature-faqs-image") ?? getAsset("feature-image"),
  () => getAssetById("where-we-build-image") ?? getAsset("section-image"),
] as const;

/** Features grid — 2 visible service cards; third slot reserved for Karkasinės pirtys. */
export function FeaturesImageGrid({ variant }: FeaturesImageGridProps) {
  const cards = getServiceCards();
  const visibleCards = cards.slice(0, SERVICE_CARD_RENDER_LIMIT);
  const pendingCard = cards[SERVICE_CARD_RENDER_LIMIT];
  const isDesktop = variant === "desktop";

  return (
    <section
      data-framer-name="Features"
      data-section="features-grid"
      className="relative flex w-full justify-center bg-section"
      style={{
        padding: isDesktop ? FEATURES_GRID.paddingDesktop : FEATURES_GRID.paddingMobile,
        gap: FEATURES_GRID_GAP,
      }}
    >
      <div
        className={cn(
          "flex w-full",
          isDesktop ? "max-w-[960px] flex-row" : "flex-col",
        )}
        style={{ gap: FEATURES_GRID_GAP, maxWidth: FEATURES_GRID_MAX }}
      >
        {visibleCards.map((card, index) => {
          const image = CARD_IMAGES[index]?.() ?? getAsset("feature-image");
          return (
            <FeatureImageCard
              key={card.href}
              variant={variant}
              href={card.href}
              src={image?.path ?? "/media/lino/karkasiniu-namu-2.webp"}
              alt={card.alt ?? card.label}
              label={card.label}
              ctaLabel={card.cta}
              imageFit={isDesktop ? "cover" : "contain"}
            />
          );
        })}
        {pendingCard ? (
          <div data-service-card-slot="pirtys" className="hidden" aria-hidden />
        ) : null}
      </div>
    </section>
  );
}
