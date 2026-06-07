import { cn } from "@/lib/cn";
import type { ReactNode } from "react";

type HomeSectionProps = {
  id: string;
  children: ReactNode;
  variant?: "light" | "dark";
  className?: string;
  containerClassName?: string;
};

/** Linear homepage section — tighter conversion spacing, no scroll choreography. */
export function HomeSection({
  id,
  children,
  variant = "light",
  className,
  containerClassName,
}: HomeSectionProps) {
  return (
    <section
      data-section={id}
      data-nav-surface={variant === "light" ? "solid" : "transparent"}
      className={cn(
        "w-full px-5 py-12 wide:px-10 wide:py-16 desktop:px-10 desktop:py-16",
        variant === "light" ? "bg-white text-text" : "bg-footer text-white",
        className,
      )}
    >
      <div className={cn("mx-auto w-full max-w-[1200px]", containerClassName)}>{children}</div>
    </section>
  );
}
