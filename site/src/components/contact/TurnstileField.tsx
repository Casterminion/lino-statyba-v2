"use client";

import { Turnstile, type TurnstileInstance } from "@marsidev/react-turnstile";
import { forwardRef, useImperativeHandle, useRef } from "react";
import { getTurnstileSiteKey } from "@/lib/turnstile/config";

export type TurnstileFieldHandle = {
  execute: () => void;
  reset: () => void;
};

type TurnstileFieldProps = {
  onSuccess: (token: string) => void;
  onError: () => void;
  onExpire: () => void;
};

export const TurnstileField = forwardRef<TurnstileFieldHandle, TurnstileFieldProps>(
  function TurnstileField({ onSuccess, onError, onExpire }, ref) {
    const widgetRef = useRef<TurnstileInstance>(null);
    const siteKey = getTurnstileSiteKey();

    useImperativeHandle(ref, () => ({
      execute: () => {
        widgetRef.current?.execute();
      },
      reset: () => {
        widgetRef.current?.reset();
      },
    }));

    if (!siteKey) {
      return null;
    }

    return (
      <Turnstile
        ref={widgetRef}
        siteKey={siteKey}
        options={{
          execution: "execute",
          size: "invisible",
          action: "contact",
        }}
        onSuccess={onSuccess}
        onError={onError}
        onExpire={onExpire}
      />
    );
  },
);
