/** cyZUy decorative line bands — mirror `.framer-teprji-container` (no video). */
export function HeroDecorativeBands() {
  const bar = (name: string) => (
    <div
      key={name}
      data-framer-name={name}
      className="relative h-full w-[20%] overflow-visible bg-primary"
    />
  );

  return (
    <section
      data-framer-name="1"
      className="relative flex h-full w-full flex-col items-center justify-center overflow-hidden"
      aria-hidden
    >
      <div
        data-framer-name="BG"
        className="absolute top-[-1px] bottom-[-1px] left-0 flex w-full flex-col items-end justify-end gap-0 overflow-visible p-0"
      >
        <div
          data-framer-name="Top"
          className="relative flex h-px w-full flex-1 flex-row items-center justify-center gap-0 overflow-visible p-0"
        >
          {["1", "2", "3", "4", "5"].map(bar)}
        </div>
        <div
          data-framer-name="Bottom"
          className="relative flex h-px w-full flex-1 flex-row items-end justify-end gap-0 overflow-visible p-0"
        >
          {["1", "2", "3", "4", "5"].map(bar)}
        </div>
      </div>
    </section>
  );
}
