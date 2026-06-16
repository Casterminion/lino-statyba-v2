"use client";

import { ContactModalProvider } from "@/providers/ContactModalProvider";

export default function Providers({ children }: { children: React.ReactNode }) {
  return <ContactModalProvider>{children}</ContactModalProvider>;
}
