"use client";

export default function GlobalError({
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <html lang="lt">
      <body className="flex min-h-screen flex-col items-center justify-center gap-4 bg-[#faf9f7] p-6 font-sans text-[#13213c]">
        <h2 className="text-xl font-semibold">Įvyko netikėta klaida</h2>
        <p className="max-w-md text-center text-sm text-[#13213c]/70">
          Pabandykite perkrauti puslapį. Jei problema kartojasi, susisiekite su mumis telefonu.
        </p>
        <button
          type="button"
          onClick={() => reset()}
          className="rounded-lg bg-[#e8b05e] px-5 py-2.5 text-sm font-semibold text-[#13213c]"
        >
          Bandyti dar kartą
        </button>
      </body>
    </html>
  );
}
