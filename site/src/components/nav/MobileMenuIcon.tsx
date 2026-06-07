"use client";

import { cn } from "@/lib/cn";

type MobileMenuIconProps = {
  open: boolean;
  onToggle: () => void;
};

export function MobileMenuIcon({ open, onToggle }: MobileMenuIconProps) {
  return (
    <button
      type="button"
      onClick={onToggle}
      aria-label={open ? "Close menu" : "Open menu"}
      aria-expanded={open}
      data-cursor-pointer
      className="relative flex h-11 w-11 shrink-0 cursor-pointer items-center justify-center rounded-lg"
    >
      <span className="flex h-[16px] w-[20px] flex-col justify-between">
        <span
          className={cn(
            "block h-[2px] w-full rounded-[1px] bg-primary transition-all duration-200",
            open && "translate-y-[7px] rotate-45",
          )}
        />
        <span
          className={cn(
            "block h-[2px] w-full rounded-[1px] bg-primary transition-all duration-200",
            open && "opacity-0",
          )}
        />
        <span
          className={cn(
            "block h-[2px] w-full rounded-[1px] bg-primary transition-all duration-200",
            open && "-translate-y-[7px] -rotate-45",
          )}
        />
      </span>
    </button>
  );
}
