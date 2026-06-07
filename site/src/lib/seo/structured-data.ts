import { ORGANIZATION, SITE_NAME, SITE_URL } from "./config";

function postalAddress() {
  return {
    "@type": "PostalAddress",
    streetAddress: ORGANIZATION.address.streetAddress,
    addressLocality: ORGANIZATION.address.addressLocality,
    addressRegion: ORGANIZATION.address.addressRegion,
    postalCode: ORGANIZATION.address.postalCode,
    addressCountry: ORGANIZATION.address.addressCountry,
  };
}

export function organizationJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": `${SITE_URL}/#organization`,
    name: ORGANIZATION.name,
    legalName: ORGANIZATION.legalName,
    url: ORGANIZATION.url,
    logo: ORGANIZATION.logo,
    email: ORGANIZATION.email,
    telephone: ORGANIZATION.telephone,
    vatID: ORGANIZATION.vatId,
    identifier: ORGANIZATION.companyId,
    sameAs: ORGANIZATION.sameAs,
    address: postalAddress(),
  };
}

export function localBusinessJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": `${SITE_URL}/#localbusiness`,
    name: ORGANIZATION.name,
    url: ORGANIZATION.url,
    image: ORGANIZATION.logo,
    logo: ORGANIZATION.logo,
    email: ORGANIZATION.email,
    telephone: ORGANIZATION.telephone,
    priceRange: "$$",
    address: postalAddress(),
    geo: {
      "@type": "GeoCoordinates",
      latitude: ORGANIZATION.geo.latitude,
      longitude: ORGANIZATION.geo.longitude,
    },
    sameAs: ORGANIZATION.sameAs,
    parentOrganization: {
      "@id": `${SITE_URL}/#organization`,
    },
  };
}

export function websiteJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${SITE_URL}/#website`,
    name: SITE_NAME,
    url: SITE_URL,
    inLanguage: "lt-LT",
    publisher: {
      "@id": `${SITE_URL}/#organization`,
    },
  };
}

export function globalStructuredData() {
  return [organizationJsonLd(), localBusinessJsonLd(), websiteJsonLd()];
}
