import React from 'react';
import { Helmet } from 'react-helmet-async';

interface SEOOptimizerProps {
  title: string;
  description: string;
  keywords?: string;
  image?: string;
  url?: string;
  type?: 'website' | 'article' | 'service';
  structuredData?: object;
}

export const SEOOptimizer: React.FC<SEOOptimizerProps> = ({
  title,
  description,
  keywords,
  image = '/assets/img/hero/hero_bg_1_1.jpg',
  url = 'https://car--repair-sheffield.netlify.app/',
  type = 'website',
  structuredData
}) => {
  const fullTitle = `${title} | Malen Car Repair Sheffield`;
  const fullUrl = url.startsWith('http') ? url : `https://car--repair-sheffield.netlify.app${url}`;
  const fullImage = image.startsWith('http') ? image : `https://car--repair-sheffield.netlify.app${image}`;

  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      {keywords && <meta name="keywords" content={keywords} />}
      <link rel="canonical" href={fullUrl} />

      {/* Open Graph */}
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={fullImage} />
      <meta property="og:url" content={fullUrl} />
      <meta property="og:type" content={type} />
      <meta property="og:site_name" content="Malen Car Repair" />
      <meta property="og:locale" content="en_GB" />

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={fullImage} />

      {/* Structured Data */}
      {structuredData && (
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      )}
    </Helmet>
  );
};

// Predefined structured data for different page types
export const structuredData = {
  service: (serviceName: string, description: string, price: string) => ({
    "@context": "https://schema.org",
    "@type": "Service",
    "name": serviceName,
    "description": description,
    "provider": {
      "@type": "AutoRepair",
      "name": "Malen Car Repair",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "123 Auto Street",
        "addressLocality": "Sheffield",
        "postalCode": "S1 1AA",
        "addressCountry": "GB"
      }
    },
    "offers": {
      "@type": "Offer",
      "price": price.replace('£', ''),
      "priceCurrency": "GBP"
    }
  }),

  contact: {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    "name": "Contact Malen Car Repair",
    "description": "Get in touch with our expert car repair team in Sheffield",
    "mainEntity": {
      "@type": "Organization",
      "name": "Malen Car Repair",
      "telephone": "+44-114-123-4567",
      "email": "info@malencarrepair.co.uk",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "123 Auto Street",
        "addressLocality": "Sheffield",
        "postalCode": "S1 1AA",
        "addressCountry": "GB"
      }
    }
  },

  about: {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    "name": "About Malen Car Repair",
    "description": "Learn about our professional car repair services and expert team in Sheffield",
    "mainEntity": {
      "@type": "Organization",
      "name": "Malen Car Repair",
      "description": "Professional car repair and automotive services in Sheffield",
      "foundingDate": "2010",
      "numberOfEmployees": "15",
      "award": [
        "Best Auto Repair Shop 2023",
        "Customer Service Excellence Award"
      ]
    }
  }
}; 