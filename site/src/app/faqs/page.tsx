import PageShell from "@/components/PageShell";
import Appear from "@/components/Appear";
import { faqs } from "@/lib/content";

export const metadata = {
  title: "FAQs | Lino Statyba",
  description: faqs.description,
};

export default function FaqsPage() {
  const items = faqs.paragraphs.filter((p) => p.length > 30 && p.length < 500);

  return (
    <PageShell title="FAQs" subtitle="Frequently asked questions about working with Vitruvius Built">
      <div className="divide-y divide-black/10">
        {items.slice(0, 12).map((item, i) => (
          <Appear key={i} delay={i * 0.04}>
            <details className="group py-6">
              <summary className="cursor-pointer font-serif text-lg list-none flex justify-between items-center" data-cursor-pointer>
                <span>{item.slice(0, 80)}{item.length > 80 ? "…" : ""}</span>
                <span className="text-xl group-open:rotate-45 transition-transform">+</span>
              </summary>
              <p className="mt-4 text-sm leading-relaxed text-black/70">{item}</p>
            </details>
          </Appear>
        ))}
      </div>
    </PageShell>
  );
}
