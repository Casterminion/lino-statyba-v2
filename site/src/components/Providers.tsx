"use client";

import dynamic from "next/dynamic";
import { ContactModalProvider } from "@/providers/ContactModalProvider";

const CustomCursor = dynamic(() => import("./CustomCursor"), { ssr: false });

export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ContactModalProvider>
      <CustomCursor />
      {children}
    </ContactModalProvider>
  );
}
