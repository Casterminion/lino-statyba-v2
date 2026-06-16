import type { ContactFormPayload } from "@/lib/contact/types";

export type ContactSubmittedSummary = Pick<
  ContactFormPayload,
  "vardas" | "telefonas" | "elpastas" | "zinute"
>;

type ContactSuccessViewProps = {
  data: ContactSubmittedSummary;
  onClose: () => void;
};

function SummaryRow({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex flex-col gap-0.5">
      <dt className="font-body text-[12px] font-medium tracking-[0.02em] text-primary/45 uppercase">
        {label}
      </dt>
      <dd className="font-body text-[15px] leading-snug text-primary">{value}</dd>
    </div>
  );
}

export function ContactSuccessView({ data, onClose }: ContactSuccessViewProps) {
  return (
    <>
      <div className="border-b border-primary/8 px-6 pt-7 pb-7 wide:px-8 desktop:px-8">
        <p className="font-body text-[11px] font-semibold tracking-[0.14em] text-primary/45 uppercase">
          Susisiekite
        </p>
        <h2
          id="contact-success-title"
          className="mt-2.5 font-body text-[26px] font-semibold leading-[1.2] tracking-[-0.025em] text-primary wide:text-[28px] desktop:text-[28px]"
        >
          Užklausa išsiųsta
        </h2>
        <p className="mt-2 max-w-[440px] font-body text-[14px] leading-[1.55] text-primary/55">
          Ačiū! Jūsų užklausa išsiųsta. Susisieksime per 1 darbo dieną.
        </p>
      </div>

      <div className="px-6 py-6 wide:px-8 wide:py-7 desktop:px-8 desktop:py-7">
        <dl className="flex flex-col gap-4 rounded-lg border border-primary/8 bg-white px-4 py-4">
          <SummaryRow label="Vardas" value={data.vardas} />
          <SummaryRow label="Telefonas" value={data.telefonas} />
          {data.elpastas ? <SummaryRow label="El. paštas" value={data.elpastas} /> : null}
          {data.zinute ? <SummaryRow label="Žinutė" value={data.zinute} /> : null}
        </dl>

        <button
          type="button"
          onClick={onClose}
          className="mt-5 inline-flex h-[52px] w-full items-center justify-center rounded-lg bg-secondary font-body text-[16px] font-semibold tracking-[-0.01em] text-primary transition-all duration-200 hover:bg-[#e8b05e] active:scale-[0.985] active:brightness-95"
        >
          Uždaryti
        </button>
      </div>
    </>
  );
}
