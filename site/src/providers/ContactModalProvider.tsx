"use client";

import { createContext, useCallback, useContext, useMemo, useState } from "react";
import { ContactModal } from "@/components/contact/ContactModal";

type ContactModalContextValue = {
  openContactModal: () => void;
  closeContactModal: () => void;
  isOpen: boolean;
};

const ContactModalContext = createContext<ContactModalContextValue | null>(null);

export function ContactModalProvider({ children }: { children: React.ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);

  const openContactModal = useCallback(() => setIsOpen(true), []);
  const closeContactModal = useCallback(() => setIsOpen(false), []);

  const value = useMemo(
    () => ({ openContactModal, closeContactModal, isOpen }),
    [openContactModal, closeContactModal, isOpen],
  );

  return (
    <ContactModalContext.Provider value={value}>
      {children}
      <ContactModal isOpen={isOpen} onClose={closeContactModal} />
    </ContactModalContext.Provider>
  );
}

export function useContactModal() {
  const context = useContext(ContactModalContext);
  if (!context) {
    throw new Error("useContactModal must be used within ContactModalProvider");
  }
  return context;
}
