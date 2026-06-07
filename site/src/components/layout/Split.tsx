import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

type SplitProps = {
  className?: string;
  left?: ReactNode;
  right?: ReactNode;
  children?: ReactNode;
};

export function Split({ className, left, right, children }: SplitProps) {
  return (
    <div className={cn("grid grid-cols-1 wide:grid-cols-2 desktop:grid-cols-2 gap-stack-md", className)}>
      {left ? <div>{left}</div> : null}
      {right ? <div>{right}</div> : null}
      {children}
    </div>
  );
}
