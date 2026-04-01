export interface SEOMetadata {
  title: string;
  description: string;
  keywords?: string;
  canonical?: string;
  ogImage?: string;
  ogType?: string;
  ogImageAlt?: string;
  imageWidth?: string;
  imageHeight?: string;
}

export const generateSchemaMarkup = (metadata: SEOMetadata) => {
  const baseSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": metadata.title,
    "description": metadata.description,
    "url": metadata.canonical,
    "image": metadata.ogImage ? {
      "@type": "ImageObject",
      "url": metadata.ogImage,
      "width": metadata.imageWidth || "1200",
      "height": metadata.imageHeight || "630",
      "alt": metadata.ogImageAlt || metadata.title
    } : undefined,
    "publisher": {
      "@type": "Organization",
      "name": "BuildWell Africa",
      "logo": {
        "@type": "ImageObject",
        "url": "https://buildwellafrica.com/buildwell-logo.png"
      }
    },
    "mainEntity": {
      "@type": "Organization",
      "name": "BuildWell Africa",
      "@id": "https://buildwellafrica.com"
    }
  };

  return baseSchema;
};

export const updateMetaTags = (metadata: SEOMetadata) => {
  if (metadata.title) {
    document.title = metadata.title;
  }

  const updateOrCreateMeta = (selector: string, content: string) => {
    let element = document.querySelector(selector);
    if (!element) {
      element = document.createElement('meta');
      const attribute = selector.includes('property=') ? 'property' : 'name';
      const value = selector.match(/["']([^"']+)["']/)?.[1] || '';
      element.setAttribute(attribute, value);
      document.head.appendChild(element);
    }
    element.setAttribute('content', content);
  };

  if (metadata.description) {
    updateOrCreateMeta('meta[name="description"]', metadata.description);
    updateOrCreateMeta('meta[property="og:description"]', metadata.description);
    updateOrCreateMeta('meta[name="twitter:description"]', metadata.description);
  }

  if (metadata.keywords) {
    updateOrCreateMeta('meta[name="keywords"]', metadata.keywords);
  }

  if (metadata.title) {
    updateOrCreateMeta('meta[property="og:title"]', metadata.title);
    updateOrCreateMeta('meta[name="twitter:title"]', metadata.title);
  }

  if (metadata.canonical) {
    let canonical = document.querySelector('link[rel="canonical"]') as HTMLLinkElement;
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.rel = 'canonical';
      document.head.appendChild(canonical);
    }
    canonical.href = metadata.canonical;
    updateOrCreateMeta('meta[property="og:url"]', metadata.canonical);
  }

  if (metadata.ogImage) {
    updateOrCreateMeta('meta[property="og:image"]', metadata.ogImage);
    updateOrCreateMeta('meta[name="twitter:image"]', metadata.ogImage);
    if (metadata.ogImageAlt) {
      updateOrCreateMeta('meta[property="og:image:alt"]', metadata.ogImageAlt);
      updateOrCreateMeta('meta[name="twitter:image:alt"]', metadata.ogImageAlt);
    }
    if (metadata.imageWidth) {
      updateOrCreateMeta('meta[property="og:image:width"]', metadata.imageWidth);
    }
    if (metadata.imageHeight) {
      updateOrCreateMeta('meta[property="og:image:height"]', metadata.imageHeight);
    }
  }

  if (metadata.ogType) {
    updateOrCreateMeta('meta[property="og:type"]', metadata.ogType);
  }
};

export const seoPages = {
  home: {
    title: 'BuildWell Africa - Real Estate Investment, Construction & Global Trade Solutions in Nigeria & Africa',
    description: 'BuildWell Africa is a leading investment company in Nigeria specializing in real estate property sales, residential and commercial construction, import export services, and diversified business solutions. 15+ years proven track record in Lagos Nigeria and across Africa.',
    keywords: 'real estate investment Nigeria, property sales Lagos, construction company Nigeria, residential construction, commercial building projects, import export services Nigeria, international trade Africa, business solutions Nigeria, property investment Lagos, land acquisition Nigeria, BuildWell Africa',
    canonical: 'https://buildwellafrica.com/',
    ogImage: 'https://buildwellafrica.com/HERO.png',
    ogImageAlt: 'BuildWell Africa - Building value, creating opportunities across Nigeria and Africa',
    imageWidth: '1200',
    imageHeight: '630',
    ogType: 'website',
  },
  realEstate: {
    title: 'Real Estate Investment & Property Sales Nigeria - BuildWell Africa Lagos',
    description: 'Expert real estate investment and property sales services in Lagos Nigeria. Land acquisition, residential and commercial property transactions, portfolio diversification, and investment advisory. Secure profitable property opportunities with BuildWell Africa.',
    keywords: 'real estate investment Nigeria, property sales Lagos, land acquisition Nigeria, commercial property Lagos, residential property Nigeria, property investment Lagos, real estate advisory Nigeria, property development Lagos, property portfolio Nigeria, BuildWell Africa real estate',
    canonical: 'https://buildwellafrica.com/services/real-estate',
    ogImage: 'https://buildwellafrica.com/Real%20estate.webp',
    ogImageAlt: 'Real Estate Investment and Property Sales in Lagos Nigeria - BuildWell Africa',
    imageWidth: '1200',
    imageHeight: '630',
    ogType: 'article',
  },
  construction: {
    title: 'Construction Company Nigeria - Residential & Commercial Building Projects Lagos',
    description: 'Quality construction services in Nigeria. Residential construction, commercial building projects, renovations, remodeling, and infrastructure development. Expert project management and compliance with BuildWell Africa Lagos.',
    keywords: 'construction company Nigeria, residential construction Lagos, commercial building Nigeria, construction services Lagos, building projects Nigeria, renovation services Lagos, infrastructure development Nigeria, project management construction, quality construction Nigeria, BuildWell Africa construction',
    canonical: 'https://buildwellafrica.com/services/construction',
    ogImage: 'https://buildwellafrica.com/Constructio.jpg',
    ogImageAlt: 'Construction Company Nigeria - Residential and Commercial Building Projects Lagos',
    imageWidth: '1200',
    imageHeight: '630',
    ogType: 'article',
  },
  importExport: {
    title: 'Import Export Services Nigeria - International Trade Facilitation Africa',
    description: 'Professional import and export services in Nigeria. International trade facilitation, product sourcing, procurement, logistics coordination, customs compliance. Connect global markets efficiently with BuildWell Africa.',
    keywords: 'import export Nigeria, international trade Nigeria, trade facilitation Africa, product sourcing Nigeria, logistics Nigeria, customs compliance Nigeria, global trade Lagos, export services Nigeria, import services Lagos, supply chain Nigeria, BuildWell Africa trade',
    canonical: 'https://buildwellafrica.com/services/import-export',
    ogImage: 'https://buildwellafrica.com/Import.jpg',
    ogImageAlt: 'Import Export Services in Nigeria - International Trade Facilitation Africa',
    imageWidth: '1200',
    imageHeight: '630',
    ogType: 'article',
  },
  businessSolutions: {
    title: 'Business Solutions & Investment Partnerships Nigeria - BuildWell Africa',
    description: 'Comprehensive business solutions and investment partnerships in Nigeria. Business consulting, supply and distribution, multi-sector project development, strategic planning, and market expansion support across Africa.',
    keywords: 'business solutions Nigeria, investment partnerships Lagos, business consulting Nigeria, multi-sector development Africa, strategic planning Nigeria, market expansion Africa, business advisory Lagos, investment opportunities Nigeria, BuildWell Africa business',
    canonical: 'https://buildwellafrica.com/services/business-solutions',
    ogImage: 'https://buildwellafrica.com/Business.png',
    ogImageAlt: 'Business Solutions and Consulting in Nigeria - Investment Partnerships and Multi-Sector Development',
    imageWidth: '1200',
    imageHeight: '630',
    ogType: 'article',
  },
};
