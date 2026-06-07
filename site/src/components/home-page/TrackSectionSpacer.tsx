import type { ComponentPropsWithoutRef, ReactNode } from "react";
import { cn } from "@/lib/cn";

type TrackSectionSpacerProps = ComponentPropsWithoutRef<"div"> & {
  name: string;
  height: number;
  children?: ReactNode;
};

/** Explicit height placeholder for empty downstream sections — drives track scroll distance. */
export function TrackSectionSpacer({
  name,
  height,
  className,
  children,
  style,
  ...rest
}: TrackSectionSpacerProps) {
  return (
    <div
      data-section={name}
      data-track-spacer={name}
      className={cn("relative w-full shrink-0 overflow-hidden", className)}
      style={{ minHeight: height, ...style }}
      {...rest}
    >
      {children}
    </div>
  );
}
