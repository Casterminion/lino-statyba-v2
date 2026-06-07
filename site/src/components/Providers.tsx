"use client";

import { ContactModalProvider } from "@/providers/ContactModalProvider";
import { LenisProvider } from "@/providers/LenisProvider";
import { ScrollProgressProvider } from "@/providers/ScrollProgressProvider";
import CustomCursor from "./CustomCursor";

export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    <LenisProvider>
      <ScrollProgressProvider>
        <ContactModalProvider>
          <CustomCursor />
          {children}
        </ContactModalProvider>
      </ScrollProgressProvider>
    </LenisProvider>
  );
}
