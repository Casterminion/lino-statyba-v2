import type { ReactNode } from "react";
import Appear from "@/components/Appear";
import Link from "next/link";
import { COMPANY, PRIVACY_POLICY } from "@/lib/content/privacy-policy";

function Section({
  number,
  title,
  children,
  delay = 0,
}: {
  number: number;
  title: string;
  children: ReactNode;
  delay?: number;
}) {
  return (
    <Appear delay={delay}>
      <section>
        <h2 className="flex items-baseline gap-2.5">
          <span className="shrink-0 font-serif text-[1.375rem] leading-none text-primary/40 md:text-2xl">
            {number}.
          </span>
          <span className="font-body text-lg font-semibold leading-snug text-black md:text-[1.3125rem]">
            {title}
          </span>
        </h2>
        <div className="mt-5 space-y-4 font-body text-[15px] leading-[1.7] text-black/70 md:mt-6 md:text-[17px] md:leading-[1.75]">
          {children}
        </div>
      </section>
    </Appear>
  );
}

function BulletList({ items }: { items: readonly string[] }) {
  return (
    <ul className="list-disc space-y-1.5 pl-5">
      {items.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </ul>
  );
}

function ContactBlock() {
  return (
    <address className="space-y-1 not-italic">
      <p className="font-medium text-black">{COMPANY.name}</p>
      <p>Įmonės kodas: {COMPANY.code}</p>
      <p>PVM mokėtojo kodas: {COMPANY.vat}</p>
      <p>{COMPANY.address}</p>
      <p>
        <Link
          href={`tel:${COMPANY.phone.replace(/\s/g, "")}`}
          className="text-primary underline-offset-2 hover:underline"
        >
          {COMPANY.phone}
        </Link>
      </p>
      <p>
        <Link
          href={`mailto:${COMPANY.email}`}
          className="text-primary underline-offset-2 hover:underline"
        >
          {COMPANY.email}
        </Link>
      </p>
    </address>
  );
}

export function PrivacyPolicyPage() {
  return (
    <main className="bg-surface text-text">
      <article className="px-5 py-12 md:px-8 md:py-20">
        <div className="mx-auto max-w-[740px]">
          <Appear>
            <header>
              <h1 className="font-serif text-[2rem] leading-tight text-black md:text-[2.75rem]">
                {PRIVACY_POLICY.title}
              </h1>
              <p className="mt-3 font-body text-sm leading-normal text-black/50">
                Atnaujinta: {PRIVACY_POLICY.lastUpdated}
              </p>
              <div className="mt-8 h-px w-full bg-black/[0.08]" aria-hidden />
            </header>
          </Appear>

          <div className="mt-12 space-y-12">
            <Section number={1} title="Kas mes esame" delay={0.04}>
              <p>
                {COMPANY.name} — karkasinių namų statybos įmonė. Esame duomenų valdytojas, atsakingas už jūsų
                asmens duomenų tvarkymą šioje svetainėje.
              </p>
            </Section>

            <Section number={2} title="Kokius duomenis renkame" delay={0.08}>
              <BulletList
                items={[
                  "Vardas",
                  "Telefono numeris",
                  "El. pašto adresas",
                  "Informacija, kurią pateikiate užklausos formoje",
                ]}
              />
            </Section>

            <Section number={3} title="Kam naudojame duomenis" delay={0.12}>
              <BulletList
                items={[
                  "Atsakyti į užklausas",
                  "Parengti pasiūlymus",
                  "Teikti informaciją apie paslaugas",
                  "Užtikrinti svetainės veikimą",
                ]}
              />
            </Section>

            <Section number={4} title="Duomenų saugojimas" delay={0.16}>
              <p>
                Jūsų duomenis saugome tik tiek laiko, kiek reikia šiems tikslams įgyvendinti arba kol galioja
                teisiniai reikalavimai. Kai duomenys nebereikalingi — juos ištriname arba anonimizuojame.
              </p>
            </Section>

            <Section number={5} title="Duomenų perdavimas" delay={0.2}>
              <p>
                Jūsų asmens duomenų neparduodame ir neperduodame trečiosioms šalims komerciniais tikslais.
                Duomenis galime perduoti tik įstatymų numatytais atvejais arba kai to reikalauja valdžios
                institucijos.
              </p>
            </Section>

            <Section number={6} title="Jūsų teisės" delay={0.24}>
              <p>Turite teisę:</p>
              <BulletList
                items={[
                  "Gauti informaciją apie savo duomenis",
                  "Prašyti juos ištaisyti",
                  "Prašyti ištrinti",
                  "Apriboti duomenų tvarkymą",
                ]}
              />
              <p>
                Norėdami pasinaudoti šiomis teisėmis, rašykite:{" "}
                <Link
                  href={`mailto:${COMPANY.email}`}
                  className="font-medium text-primary underline-offset-2 hover:underline"
                >
                  {COMPANY.email}
                </Link>
              </p>
            </Section>

            <Section number={7} title="Slapukai (Cookies)" delay={0.28}>
              <p>
                Svetainė naudoja slapukus — mažus failus jūsų naršyklėje, kurie padeda svetainei veikti
                sklandžiai. Galite juos išjungti naršyklės nustatymuose.
              </p>
              <p>
                Svetainė gali naudoti techninius slapukus, reikalingus tinkamam svetainės veikimui.
              </p>
            </Section>

            <Section number={8} title="Kontaktai" delay={0.32}>
              <p>Jei turite klausimų dėl privatumo ar duomenų tvarkymo, susisiekite:</p>
              <ContactBlock />
            </Section>
          </div>
        </div>
      </article>
    </main>
  );
}
