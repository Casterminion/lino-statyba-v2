import type { ServicePageContent } from "./types";

/** Client-first layout — benefit-led copy aligned with sandėliukai reference. */
export const pirtysServicePage: ServicePageContent = {
  slug: "karkasines-pirtys",
  title: "Karkasinės pirtys - Lino Statyba",
  description:
    "Asmeninė poilsio erdvė jūsų kieme — pritaikoma pagal jūsų poreikius, sklypą ir gyvenimo būdą.",
  hero: {
    headline: "Karkasinės pirtys",
    subhead:
      "Asmeninė erdvė poilsiui, ramybei ir atsigavimui — jūsų kieme ar sode.",
    imageId: "pirtis-1",
    imageAlt: "Karkasinė pirtis",
    ctaLabel: "Gauti pasiūlymą",
  },
  storyBlocks: [
    {
      label: "Asmeninė poilsio erdvė",
      body: "Poilsis, privatumas, šeimos laikas ir atsigavimas po kasdienio tempo — viskas po ranka.",
      imageId: "pirtis-1",
      imageAlt: "Karkasinė pirtis kieme",
    },
    {
      label: "Pritaikoma jūsų poreikiams",
      body: "Dydį, išplanavimą ir apdailą pritaikome pagal jūsų sklypą ir gyvenimo būdą.",
      imageId: "baltramaicio-terasa-01",
      imageAlt: "Terasa kieme — pritaikoma erdvė",
    },
  ],
  processTitle: "Statybos procesas",
  processSteps: [
    {
      label: "Projektavimas",
      description: "Suplanuojame erdvę pagal jūsų poreikius ir sklypą.",
    },
    {
      label: "Karkaso gamyba",
      description: "Karkasas gaminamas dirbtuvėse — tiksliai ir greitai.",
    },
    {
      label: "Montavimas",
      description: "Surinkimas sklype per kelias dienas.",
    },
    {
      label: "Įrengimas",
      description: "Užbaigiame apdailą, izoliaciją ir krosnelę — galite naudotis.",
    },
  ],
  faq: [
    {
      question: "Kiek trunka statyba?",
      answer:
        "Pirtį galima pastatyti per kelias savaites, jei turite aiškų projektą ir tinkamai pasirengsite.",
    },
    {
      question: "Ar galima pritaikyti išplanavimą?",
      answer:
        "Taip — pritaikome dydį, kambarių skaičių ir erdvių išdėstymą pagal jūsų poreikius.",
    },
    {
      question: "Ar galima terasa?",
      answer:
        "Taip — galime suplanuoti terasą ar persirengimo kambarį kartu su pirtimi.",
    },
    {
      question: "Ar galima statyti mažame sklype?",
      answer:
        "Taip — kompaktiškas karkasas puikiai tinka riboto ploto sklypams.",
    },
  ],
  cta: {
    headline: "Planuojate savo pirtį?",
    subhead:
      "Papasakokite savo idėją ir aptarkime tinkamiausią sprendimą.",
    ctaLabel: "Aptarkime jūsų projektą",
  },
  relatedTitle: "Kitos mūsų paslaugos",
  related: [
    {
      href: "/karkasiniu-skydiniu-namu-statyba",
      label: "KARKASINIŲ – SKYDINIŲ NAMŲ STATYBA",
      imageId: "karkasiniu-namu-statyba-02",
      imageAlt: "Karkasinių namų statyba 2",
    },
    {
      href: "/karkasiniai-sandeliukai",
      label: "KARKASINIAI SANDĖLIUKAI",
      imageId: "sandeliukas-palanga-cover",
      imageAlt: "Sandėliukas Palanga",
    },
  ],
};
