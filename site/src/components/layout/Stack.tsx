import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

type StackProps = {
  gap?: "sm" | "md";
  className?: string;
  children?: ReactNode;
};

export function Stack({ gap = "md", className, children }: StackProps) {
  return (
    <div
      className={cn(
        "flex flex-col",
        gap === "sm" ? "gap-stack-sm" : "gap-stack-md",
        className,
      )}
    >
      {children}
    </div>
  );
}
