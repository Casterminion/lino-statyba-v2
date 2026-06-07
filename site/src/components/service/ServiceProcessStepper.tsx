import { HomeSection } from "@/components/home-conversion/HomeSection";
import type { ServiceProcessStep } from "@/lib/content/service-pages";

type ServiceProcessStepperProps = {
  title: string;
  steps: ServiceProcessStep[];
};

export function ServiceProcessStepper({ title, steps }: ServiceProcessStepperProps) {
  const columnClass =
    steps.length <= 4
      ? "wide:grid-cols-2 desktop:grid-cols-4"
      : "wide:grid-cols-3 desktop:grid-cols-3";

  return (
    <HomeSection id="service-process" className="border-t border-primary/8 bg-[#f7f5f2] !py-16 wide:!py-20 desktop:!py-20">
      <div className="flex flex-col gap-12 wide:gap-14 desktop:gap-14">
        <h2 className="type-conversion-section-title text-text">{title}</h2>

        <ol className={`grid grid-cols-1 gap-10 sm:grid-cols-2 ${columnClass}`}>
          {steps.map((step, index) => (
            <li key={step.label} className="flex flex-col gap-3">
              <span
                className="font-serif text-[48px] leading-none tracking-[-0.03em] text-primary/15 wide:text-[56px] desktop:text-[56px]"
                aria-hidden
              >
                {String(index + 1).padStart(2, "0")}
              </span>
              <h3 className="type-conversion-card-title text-text">{step.label}</h3>
              <p className="font-body text-[15px] leading-[1.5] text-text/65">{step.description}</p>
            </li>
          ))}
        </ol>
      </div>
    </HomeSection>
  );
}
