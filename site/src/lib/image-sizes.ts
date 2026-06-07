/** Realistic `sizes` values — aligned to 1200px content width and layout breakpoints. */
export const IMAGE_SIZES = {
  hero: "100vw",
  galleryFeatured: "(min-width: 1440px) 1200px, 100vw",
  galleryThumb: "(min-width: 1440px) 400px, 33vw",
  serviceCard: "(min-width: 1440px) 380px, 100vw",
  projectCard: "(min-width: 1440px) 380px, (min-width: 810px) 50vw, 100vw",
  storyImage: "(min-width: 1440px) 580px, 100vw",
  partnerLogo: "168px",
  footerMapDesktop: "(min-width: 1440px) 560px, 50vw",
  footerMapMobile: "100vw",
  modalMain: "(min-width: 1440px) 1320px, 88vw",
  modalThumb: "52px",
  navLogoDesktop: "209px",
  navLogoMobile: "192px",
  footerLogo: "293px",
} as const;
