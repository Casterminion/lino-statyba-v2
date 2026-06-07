import Image from "next/image";

type FooterMapCardProps = {
  address: string;
  variant?: "desktop" | "mobile";
};

const MAP_PREVIEW_SRC = "/media/footer-map-preview.webp";

function googleMapsHref(address: string): string {
  return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(address)}`;
}

function formatMapTooltipLines(address: string): string[] {
  if (!address) return [];

  const parts = address.split(",").map((part) => part.trim()).filter(Boolean);
  if (parts.length >= 3) {
    return [parts[0]!, parts[1]!, parts[2]!.replace(/^\d+\s+/, "")];
  }
  return parts.length > 0 ? parts : [address];
}

const mapCardClassName =
  "group relative block w-full overflow-hidden rounded-xl border border-primary/10 bg-[#f4f7fb] shadow-[0_8px_30px_rgba(19,33,60,0.1)]";

/** Map preview card — self-hosted OSM snapshot; click opens Google Maps. */
export function FooterMapCard({ address, variant = "desktop" }: FooterMapCardProps) {
  const isMobile = variant === "mobile";
  const addressLines = formatMapTooltipLines(address);

  return (
    <div
      data-footer-map-card
      className={isMobile ? `${mapCardClassName} h-[320px]` : `${mapCardClassName} h-full min-h-[320px]`}
    >
      <Image
        src={MAP_PREVIEW_SRC}
        alt=""
        fill
        className="object-cover object-center"
        sizes={isMobile ? "100vw" : "(min-width: 1440px) 560px, 50vw"}
        priority={false}
      />

      <span className="pointer-events-none absolute bottom-2 left-2 z-[1] rounded bg-white/85 px-1.5 py-0.5 font-body text-[9px] leading-none text-primary/45">
        © OpenStreetMap
      </span>

      <div className="pointer-events-none absolute right-[4%] top-[24%] z-[3] w-[min(260px,44%)]">
        <div className="relative rounded-lg border border-primary/10 bg-white px-4 py-3.5 shadow-[0_8px_24px_rgba(19,33,60,0.12)]">
          <span
            className="absolute top-1/2 -left-2.5 h-0 w-0 -translate-y-1/2 border-y-[9px] border-r-[10px] border-y-transparent border-r-white"
            aria-hidden
          />
          <div className="flex items-start gap-3">
            <svg viewBox="0 0 24 24" className="mt-0.5 h-4 w-4 shrink-0 text-primary" aria-hidden>
              <path
                d="M12 2C8.1 2 5 5.1 5 9c0 5.2 7 13 7 13s7-7.8 7-13c0-3.9-3.1-7-7-7zm0 9.5c-1.4 0-2.5-1.1-2.5-2.5S10.6 6.5 12 6.5s2.5 1.1 2.5 2.5S13.4 11.5 12 11.5z"
                fill="currentColor"
              />
            </svg>
            <div className="flex min-w-0 flex-col gap-0.5">
              {addressLines.map((line) => (
                <span
                  key={line}
                  className="font-body text-[13px] font-medium leading-[1.4] text-primary"
                >
                  {line}
                </span>
              ))}
            </div>
          </div>
          <span className="mt-2.5 block font-body text-[12px] font-semibold text-primary">
            Atidaryti žemėlapyje →
          </span>
        </div>
      </div>

      <a
        href={googleMapsHref(address)}
        target="_blank"
        rel="noopener noreferrer"
        className="absolute inset-0 z-[2]"
        aria-label={`Atidaryti žemėlapyje: ${address}`}
        data-cursor-pointer
      />
    </div>
  );
}
