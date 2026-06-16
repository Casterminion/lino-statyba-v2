"use client";

import { Turnstile, type TurnstileInstance } from "@marsidev/react-turnstile";
import { forwardRef, useImperativeHandle, useRef } from "react";
import { getTurnstileSiteKey } from "@/lib/turnstile/config";

export type TurnstileFieldHandle = {
  getResponse: () => string | undefined;
  reset: () => void;
};

type TurnstileFieldProps = {
  onToken: (token: string) => void;
  onClear: () => void;
};

export const TurnstileField = forwardRef<TurnstileFieldHandle, TurnstileFieldProps>(
  function TurnstileField({ onToken, onClear }, ref) {
    const widgetRef = useRef<TurnstileInstance>(null);
    const siteKey = getTurnstileSiteKey();

    useImperativeHandle(ref, () => ({
      getResponse: () => widgetRef.current?.getResponse(),
      reset: () => {
        onClear();
        widgetRef.current?.reset();
      },
    }));

    if (!siteKey) {
      return null;
    }

    return (
      <div className="flex min-h-[65px] w-full justify-center">
        <Turnstile
          ref={widgetRef}
          siteKey={siteKey}
          options={{
            action: "contact",
            appearance: "always",
            execution: "render",
            size: "normal",
            theme: "light",
          }}
          onSuccess={onToken}
          onExpire={onClear}
          onError={onClear}
          onTimeout={onClear}
        />
      </div>
    );
  },
);
