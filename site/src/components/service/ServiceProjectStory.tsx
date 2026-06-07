import Image from "next/image";
import { HomeSection } from "@/components/home-conversion/HomeSection";
import { cn } from "@/lib/cn";
import { getGalleryItemById } from "@/lib/content/gallery";
import type { ServiceStoryBlock } from "@/lib/content/service-pages";
import { IMAGE_SIZES } from "@/lib/image-sizes";
import { imageBlurProps } from "@/lib/image-props";

type ServiceProjectStoryProps = {
  blocks: ServiceStoryBlock[];
};

function StoryBlock({
  block,
  imageOnLeft,
}: {
  block: ServiceStoryBlock;
  imageOnLeft: boolean;
}) {
  const image = getGalleryItemById(block.imageId);

  return (
    <article
      className={cn(
        "grid grid-cols-1 items-center gap-8 wide:grid-cols-2 wide:gap-12 desktop:grid-cols-2 desktop:gap-12",
        !imageOnLeft && "wide:[&>*:first-child]:order-2 desktop:[&>*:first-child]:order-2",
      )}
    >
      <div className="relative aspect-[4/3] overflow-hidden rounded-lg bg-primary/5">
        {image ? (
          <Image
            src={image.image}
            alt={block.imageAlt}
            fill
            className="object-cover object-center"
            sizes={IMAGE_SIZES.storyImage}
            {...imageBlurProps(image.image)}
          />
        ) : null}
      </div>

      <div className="flex flex-col gap-4">
        <h2 className="type-conversion-card-title text-text">{block.label}</h2>
        <p className="max-w-[480px] font-body text-[15px] font-normal leading-[1.5] tracking-[-0.01em] text-text/70">
          {block.body}
        </p>
      </div>
    </article>
  );
}

export function ServiceProjectStory({ blocks }: ServiceProjectStoryProps) {
  return (
    <HomeSection id="service-projects" className="!py-16 wide:!py-20 desktop:!py-20">
      <div className="flex flex-col gap-16 wide:gap-20 desktop:gap-20">
        {blocks.map((block, index) => (
          <StoryBlock key={block.label} block={block} imageOnLeft={index % 2 === 0} />
        ))}
      </div>
    </HomeSection>
  );
}
