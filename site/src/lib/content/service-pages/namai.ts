import type { ServicePageContent } from "./types";

/** Client-first layout — copy from inventory §3.1 + apie-mus dirbtuvės. */
export const namaiServicePage: ServicePageContent = {
  slug: "karkasiniu-skydiniu-namu-statyba",
  title: "Karkasinių – skydinių namų statyba - Lino Statyba",
  description:
    "A++ klasės karkasinius ir skydinius namus statome nuo pamato iki rakto — greitai, tiksliai ir energiją taupiai.",
  hero: {
    headline: "Karkasinių – skydinių namų statyba",
    subhead:
      "A++ klasės namai nuo pamato iki rakto — skydai gaminami dirbtuvėse, statyba vyksta greitai ir tiksliai.",
    imageId: "namu-misc-viber-20231107",
    imageAlt: "Baigtas karkasinis namas",
    ctaLabel: "Gauti pasiūlymą",
  },
  storyBlocks: [
    {
      label: "Greitesnis kelias į naujus namus",
      body: "Didelė dalis darbų atliekama dirbtuvėse — statyba vyksta greičiau ir tiksliau.",
      imageId: "karkasiniu-namu-statyba-01",
      imageAlt: "Skydų gamyba dirbtuvėse",
    },
    {
      label: "Nuo idėjos iki įsikėlimo",
      body: "Statome nuo pamato iki rakto — jums nereikia koordinuoti daugybės rangovų.",
      imageId: "karkasiniu-namu-statyba-03",
      imageAlt: "Karkasinio namo statyba",
    },
    {
      label: "Energiškai efektyvūs namai",
      body: "A++ klasės namai su puikia izoliacija — mažesnės šildymo sąnaudos ir didesnis komfortas.",
      imageId: "projektas-6-04",
      imageAlt: "Baigtas karkasinis namo projektas",
    },
  ],
  processTitle: "Statybos procesas",
  processSteps: [
    {
      label: "Projektavimas",
      description:
        "Ruošiamas individualus arba standartinis namo projektas.",
    },
    {
      label: "Gamyba",
      description:
        "Dirbtuvėse surenkami sienų skydai sausoje aplinkoje.",
    },
    {
      label: "Montavimas",
      description: "Skydai statomi ant paruoštų pamatų sklype.",
    },
    {
      label: "Įrengimas",
      description:
        "Atliekama apdaila ir sumontuojamos komunikacijos — namas paruoštas įsikėlimui.",
    },
  ],
  faq: [
    {
      question: "Kiek trunka statyba?",
      answer: "Dažniausiai 2–4 mėnesiai nuo projektavimo iki įkurtuvių.",
    },
    {
      question: "Ar reikia turėti projektą?",
      answer:
        "Pateikite norimo namo projektą, o mes parengsime projekto sąmatą. Neturintiems projekto, galime suteikti šią paslaugą.",
    },
    {
      question: "Kokius namus statote?",
      answer: "Gyvenamieji namai, vasarnamiai ir poilsio nameliai.",
    },
    {
      question: "Ar galima individuali architektūra?",
      answer:
        "Taip — ruošiamas individualus arba standartinis namo projektas.",
    },
  ],
  cta: {
    headline: "Planuojate savo naujus namus?",
    subhead: "Papasakokite savo viziją ir aptarkime tinkamiausią sprendimą.",
    ctaLabel: "Aptarkime jūsų projektą",
  },
  relatedTitle: "Kitos mūsų paslaugos",
  related: [
    {
      href: "/karkasines-pirtys",
      label: "KARKASINĖS PIRTYS",
      imageId: "pirtis-1",
      imageAlt: "Karkasinė pirtis",
    },
    {
      href: "/karkasiniai-sandeliukai",
      label: "KARKASINIAI SANDĖLIUKAI",
      imageId: "sandeliukas-palanga-cover",
      imageAlt: "Sandėliukas Palanga",
    },
  ],
};
