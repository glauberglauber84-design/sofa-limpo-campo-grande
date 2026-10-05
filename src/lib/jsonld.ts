import { siteConfig } from '../config/siteConfig';

type JsonLd = Record<string, unknown>;

export function localBusinessJsonLd(): JsonLd {
  return {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    '@id': `${siteConfig.siteUrl}/#business`,
    name: siteConfig.nome,
    description: siteConfig.descricao,
    url: siteConfig.siteUrl,
    telephone: `+55${siteConfig.whatsapp}`,
    email: siteConfig.email,
    priceRange: '$$',
    image: `${siteConfig.siteUrl}/og-default.svg`,
    address: {
      '@type': 'PostalAddress',
      streetAddress: siteConfig.endereco.rua,
      addressLocality: siteConfig.endereco.cidade,
      addressRegion: siteConfig.endereco.estado,
      postalCode: siteConfig.endereco.cep,
      addressCountry: 'BR',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: siteConfig.geo.latitude,
      longitude: siteConfig.geo.longitude,
    },
    areaServed: {
      '@type': 'City',
      name: siteConfig.endereco.cidade,
    },
    openingHoursSpecification: siteConfig.horarioSchema.map((h) => ({
      '@type': 'OpeningHoursSpecification',
      description: h,
    })),
  };
}

export function websiteJsonLd(): JsonLd {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': `${siteConfig.siteUrl}/#website`,
    name: siteConfig.nome,
    url: siteConfig.siteUrl,
    inLanguage: 'pt-BR',
    publisher: {
      '@id': `${siteConfig.siteUrl}/#business`,
    },
  };
}

export function serviceJsonLd(servicoLabel: string, slug: string): JsonLd {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    '@id': `${siteConfig.siteUrl}/${slug}-campo-grande#service`,
    name: `${servicoLabel} em ${siteConfig.endereco.cidade}`,
    serviceType: servicoLabel,
    provider: { '@id': `${siteConfig.siteUrl}/#business` },
    areaServed: {
      '@type': 'City',
      name: siteConfig.endereco.cidade,
    },
    url: `${siteConfig.siteUrl}/${slug}-campo-grande`,
  };
}

export function breadcrumbJsonLd(items: { nome: string; url: string }[]): JsonLd {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((it, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: it.nome,
      item: it.url,
    })),
  };
}

export function faqJsonLd(
  faq: { pergunta: string; resposta: string }[]
): JsonLd | null {
  if (!faq.length) return null;
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faq.map((item) => ({
      '@type': 'Question',
      name: item.pergunta,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.resposta,
      },
    })),
  };
}

export function aboutPageJsonLd(): JsonLd {
  return {
    '@context': 'https://schema.org',
    '@type': 'AboutPage',
    url: `${siteConfig.siteUrl}/sobre`,
    name: `Sobre - ${siteConfig.nome}`,
    about: { '@id': `${siteConfig.siteUrl}/#business` },
  };
}
