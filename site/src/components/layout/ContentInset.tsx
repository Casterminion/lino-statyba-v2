import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

type ContentInsetProps = {
  className?: string;
  children?: ReactNode;
};

export function ContentInset({ className, children }: ContentInsetProps) {
  return (
    <div
      className={cn(
        "pl-content-inset-mobile wide:pl-content-inset desktop:pl-content-inset",
        className,
      )}
    >
      {children}
    </div>
  );
}
