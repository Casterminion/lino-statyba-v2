import { ReactNode } from "react";
import Appear from "./Appear";

/** Inner pages only — not for homepage replication (use `components/sections/`). */
export default function PageShell({
  title,
  subtitle,
  children,
}: {
  title: string;
  subtitle?: string;
  children: ReactNode;
}) {
  return (
    <main className="bg-surface pt-nav text-text">
      <section className="px-6 py-20 md:px-10 md:py-28">
        <div className="mx-auto max-w-[900px]">
          <Appear>
            <h1 className="font-serif text-4xl leading-tight md:text-6xl">{title}</h1>
            {subtitle && <p className="mt-6 text-lg text-black/60">{subtitle}</p>}
          </Appear>
          <div className="mt-12 space-y-8">{children}</div>
        </div>
      </section>
    </main>
  );
}
