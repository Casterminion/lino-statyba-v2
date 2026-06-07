import type { ServicePageContent } from "./types";

/** Client-first layout — copy from inventory §3.3 (DIY bullet excluded). */
export const sandeliukaiServicePage: ServicePageContent = {
  slug: "karkasiniai-sandeliukai",
  title: "Karkasiniai sandėliukai - Lino Statyba",
  description:
    "Praktiški, greitai surenkami karkasiniai sandėliukai jūsų kiemui ar sodui — pagal individualius matmenis ir poreikius.",
  hero: {
    headline: "Karkasiniai sandėliukai",
    subhead:
      "Praktiška, greitai surenkama erdvė įrankiams, sodo technikai ir kitiems daiktams jūsų kieme.",
    imageId: "sandeliukas-palanga-cover",
    imageAlt: "Karkasinis sandėliukas",
    ctaLabel: "Gauti pasiūlymą",
  },
  storyBlocks: [
    {
      label: "Praktiška erdvė jūsų kieme",
      body: "Laikykite įrankius, sodo techniką ir malkas — lengvi, greitai surenkami ir funkcionalūs.",
      imageId: "sandeliukas-palanga-cover",
      imageAlt: "Karkasinis sandėliukas kieme",
    },
    {
      label: "Moderni išorės apdaila",
      body: "Medinė, skardinė ar kompozitinė apdaila — pasirenkame pagal jūsų sklypą ir poreikius.",
      imageId: "sandeliukas-kunigiskes-isore",
      imageAlt: "Karkasinio sandėliukas išorės apdaila",
    },
  ],
  processTitle: "Statybos procesas",
  processSteps: [
    {
      label: "Projektavimas",
      description: "Pritaikome pagal poreikius — lentynos, skyriai ar papildomi įėjimai.",
    },
    {
      label: "Gamyba",
      description: "Karkasas gaminamas iš 45×70 mm arba 45×95 mm C24 kalibruotos medienos.",
    },
    {
      label: "Montavimas",
      description: "Rėmas surenkamas ir tvirtinamas prie pamatų.",
    },
    {
      label: "Galutinis užbaigimas",
      description: "Užbaigiamas stogas, sienų danga, durys ir langai.",
    },
  ],
  faq: [
    {
      question: "Kokius sandėliukus gaminame?",
      answer:
        "Sodo sandėliukus įrankiams ir įrangai, malkines su ventiliacija ir sandėliukus su integruota pavėsine.",
    },
    {
      question: "Kiek trunka statyba?",
      answer: "Nedidelį karkasinį sandėliuką galima surinkti per kelias dienas.",
    },
    {
      question: "Ar galima perkelti ar išardyti?",
      answer: "Taip — sandėliukai lengvi, todėl juos galima išardyti ir perkelti.",
    },
    {
      question: "Ar gaminame pagal individualius matmenis?",
      answer: "Taip — pritaikome pagal poreikius: lentynos, skyriai ar papildomi įėjimai.",
    },
  ],
  cta: {
    headline: "Reikia daugiau vietos jūsų kieme?",
    subhead: "Pagaminsime sandėliuką pagal jūsų poreikius ir sklypo galimybes.",
    ctaLabel: "Gauti pasiūlymą",
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
      href: "/karkasines-pirtys",
      label: "KARKASINĖS PIRTYS",
      imageId: "pirtis-1",
      imageAlt: "Karkasinė pirtis",
    },
  ],
};
