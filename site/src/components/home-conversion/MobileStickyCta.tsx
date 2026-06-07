"use client";

import { MobileContactBar } from "@/components/nav/MobileContactBar";

export function MobileStickyCta() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-[9] wide:hidden desktop:hidden">
      <MobileContactBar className="border-t border-primary/6" />
    </div>
  );
}
