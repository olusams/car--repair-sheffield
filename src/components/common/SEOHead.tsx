import React from 'react';
import { Helmet } from 'react-helmet-async';
import { siteConfig } from '../../data/siteConfig';

interface SEOHeadProps {
  title?: string;
  description?: string;
  keywords?: string;
  image?: string;
  url?: string;
  type?: 'website' | 'article' | 'service';
  author?: string;
  publishedTime?: string;
  modifiedTime?: string;
  section?: string;
  tags?: string[];
  structuredData?: object;
}

const SEOHead: React.FC<SEOHeadProps> = ({
  title = siteConfig.seo.title,
  description = siteConfig.seo.description,
  keywords = siteConfig.seo.keywords.join(', '),
  image = siteConfig.seo.ogImage,
  url = window.location.href,
  type = 'website',
  author = siteConfig.seo.author,
  publishedTime,
  modifiedTime,
  section,
  tags = siteConfig.seo.keywords,
  structuredData
}) => {
  const siteName = siteConfig.business.name;
  const fullTitle = title.includes(siteName) ? title : `${title} | ${siteName}`;
  
  // Default structured data for auto repair business
  const defaultStructuredData = {
    "@context": "https://schema.org",
    "@type": "AutoRepair",
    "name": siteConfig.business.name,
    "description": description,
    "url": "https://autofixpro.co.uk",
    "logo": "https://autofixpro.co.uk/assets/img/logo-blue.svg",
    "image": image,
    "telephone": siteConfig.contact.phone,
    "address": {
      "@type": "PostalAddress",
      "streetAddress": siteConfig.contact.address.street,
      "addressLocality": siteConfig.contact.address.city,
      "addressRegion": siteConfig.contact.address.state,
      "postalCode": siteConfig.contact.address.zip,
      "addressCountry": siteConfig.contact.address.country
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 53.3811,
      "longitude": -1.4701
    },
    "openingHours": [
      "Mo-Fr 07:30-18:00",
      "Sa 08:00-16:00"
    ],
    "priceRange": "££",
    "paymentAccepted": ["Cash", "Credit Card", "Debit Card"],
    "currenciesAccepted": "GBP",
    "areaServed": {
      "@type": "City",
      "name": "Sheffield"
    },
    "serviceArea": {
      "@type": "GeoCircle",
      "geoMidpoint": {
        "@type": "GeoCoordinates",
        "latitude": 53.3811,
        "longitude": -1.4701
      },
      "geoRadius": "50000"
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Auto Repair Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Engine Repair",
            "description": "Complete engine diagnostics and repair services"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Brake Service",
            "description": "Comprehensive brake system maintenance and repair"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Oil Change",
            "description": "Quick and reliable oil change service"
          }
        }
      ]
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.8",
      "reviewCount": "127",
      "bestRating": "5",
      "worstRating": "1"
    },
    "review": [
      {
        "@type": "Review",
        "reviewRating": {
          "@type": "Rating",
          "ratingValue": "5",
          "bestRating": "5"
        },
        "author": {
          "@type": "Person",
          "name": "Sarah Johnson"
        },
        "reviewBody": "Excellent service and professional staff. Highly recommended!"
      }
    ]
  };

  const finalStructuredData = structuredData || defaultStructuredData;

  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content={author} />
      <meta name="robots" content="index, follow" />
      <meta name="language" content="English" />
      <meta name="revisit-after" content="7 days" />
      
      {/* Canonical URL */}
      <link rel="canonical" href={url} />
      
      {/* Open Graph Meta Tags */}
      <meta property="og:type" content={type} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:url" content={url} />
      <meta property="og:site_name" content={siteName} />
      <meta property="og:locale" content="en_GB" />
      
      {/* Twitter Card Meta Tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
      <meta name="twitter:site" content="@autofixpro" />
      <meta name="twitter:creator" content="@autofixpro" />
      
      {/* Additional Open Graph Tags for Articles */}
      {type === 'article' && (
        <>
          {publishedTime && <meta property="article:published_time" content={publishedTime} />}
          {modifiedTime && <meta property="article:modified_time" content={modifiedTime} />}
          {author && <meta property="article:author" content={author} />}
          {section && <meta property="article:section" content={section} />}
          {tags.map((tag, index) => (
            <meta key={index} property="article:tag" content={tag} />
          ))}
        </>
      )}
      
      {/* Viewport and Mobile Optimization */}
      <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=5.0" />
      <meta name="theme-color" content="#3b82f6" />
      <meta name="msapplication-TileColor" content="#3b82f6" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="default" />
      <meta name="apple-mobile-web-app-title" content={siteName} />
      
      {/* Favicon and App Icons */}
      <link rel="icon" type="image/svg+xml" href="/assets/img/favicons/favicon.svg" />
      <link rel="icon" type="image/png" sizes="32x32" href="/assets/img/favicons/favicon-32x32.png" />
      <link rel="icon" type="image/png" sizes="16x16" href="/assets/img/favicons/favicon-16x16.png" />
      <link rel="apple-touch-icon" sizes="180x180" href="/assets/img/favicons/apple-touch-icon.png" />
      <link rel="manifest" href="/site.webmanifest" />
      
      {/* Preconnect to External Domains */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      
      {/* DNS Prefetch */}
      <link rel="dns-prefetch" href="//www.google-analytics.com" />
      <link rel="dns-prefetch" href="//www.googletagmanager.com" />
      
      {/* Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify(finalStructuredData)}
      </script>
      
      {/* Additional Meta Tags for Auto Repair Business */}
      <meta name="business:contact_data:street_address" content={siteConfig.contact.address.street} />
      <meta name="business:contact_data:locality" content={siteConfig.contact.address.city} />
      <meta name="business:contact_data:region" content={siteConfig.contact.address.state} />
      <meta name="business:contact_data:postal_code" content={siteConfig.contact.address.zip} />
      <meta name="business:contact_data:country_name" content={siteConfig.contact.address.country} />
      <meta name="business:contact_data:phone_number" content={siteConfig.contact.phone} />
      <meta name="business:contact_data:email" content={siteConfig.contact.email} />
      <meta name="business:contact_data:website" content="https://autofixpro.co.uk" />
      
      {/* Service Hours */}
      <meta name="business:service_area:business_type" content="Auto Repair" />
      <meta name="business:service_area:service_radius" content="50 miles" />
      
      {/* Local Business Schema */}
      <meta name="geo.region" content="GB-SYK" />
      <meta name="geo.placename" content="Sheffield" />
      <meta name="geo.position" content="53.3811;-1.4701" />
      <meta name="ICBM" content="53.3811, -1.4701" />
    </Helmet>
  );
};

export default SEOHead; 