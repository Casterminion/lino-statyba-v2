"use client";

import { ContactModalProvider } from "@/providers/ContactModalProvider";
import { LenisProvider } from "@/providers/LenisProvider";
import CustomCursor from "./CustomCursor";

export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    <LenisProvider>
      <ContactModalProvider>
        <CustomCursor />
        {children}
      </ContactModalProvider>
    </LenisProvider>
  );
}
