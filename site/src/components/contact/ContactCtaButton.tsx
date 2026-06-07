"use client";

import type { ButtonHTMLAttributes, ReactNode } from "react";
import { useContactModal } from "@/providers/ContactModalProvider";
import { cn } from "@/lib/cn";

type ContactCtaButtonProps = {
  children: ReactNode;
  className?: string;
  onActivate?: () => void;
} & Omit<ButtonHTMLAttributes<HTMLButtonElement>, "type" | "onClick">;

export function ContactCtaButton({
  children,
  className,
  onActivate,
  ...props
}: ContactCtaButtonProps) {
  const { openContactModal } = useContactModal();

  return (
    <button
      type="button"
      onClick={() => {
        openContactModal();
        onActivate?.();
      }}
      className={cn(className)}
      data-cursor-pointer
      {...props}
    >
      {children}
    </button>
  );
}
