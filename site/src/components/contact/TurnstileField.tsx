"use client";

import { Turnstile, type TurnstileInstance } from "@marsidev/react-turnstile";
import { forwardRef, useImperativeHandle, useRef } from "react";
import { getTurnstileSiteKey } from "@/lib/turnstile/config";

export type TurnstileFieldHandle = {
  execute: () => void;
  reset: () => void;
  getResponsePromise: (timeout?: number) => Promise<string>;
};

export const TurnstileField = forwardRef<TurnstileFieldHandle>(function TurnstileField(
  _props,
  ref,
) {
  const widgetRef = useRef<TurnstileInstance>(null);
  const siteKey = getTurnstileSiteKey();

  useImperativeHandle(ref, () => ({
    execute: () => {
      widgetRef.current?.execute();
    },
    reset: () => {
      widgetRef.current?.reset();
    },
    getResponsePromise: (timeout?: number) => {
      const promise = widgetRef.current?.getResponsePromise(timeout);
      if (!promise) {
        return Promise.reject(new Error("Turnstile widget unavailable"));
      }
      return promise;
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
        appearance: "execute",
        size: "invisible",
        action: "contact",
      }}
    />
  );
});
