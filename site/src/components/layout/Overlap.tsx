import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

type OverlapProps = {
  className?: string;
  children?: ReactNode;
  layer?: ReactNode;
};

export function Overlap({ className, children, layer }: OverlapProps) {
  return (
    <div className={cn("relative", className)}>
      {children}
      {layer ? <div className="pointer-events-none absolute inset-0">{layer}</div> : null}
    </div>
  );
}
