import FloatingWhatsAppButton from '@/src/components/FloatingWhatsAppButton';
import Home from '../src/sections/Index'
import React from 'react'

export const metadata = {
  title: 'Best IPTV South Africa 2024 - Premium IPTV Services | Beats DSTV Prices',
  description:
    'StreamPro SA offers premium IPTV services in South Africa with 15,000+ channels, 4K streaming, local SABC content, and 24/7 support. Save R6000+ vs DSTV Premium!',
  keywords: [
    'IPTV South Africa',
    'best IPTV service SA',
    'IPTV subscription South Africa',
    'DSTV alternative',
    'streaming service South Africa',
    'SABC live channels',
    'IPTV reseller SA',
    'cheap IPTV South Africa',
    'IPTV vs DSTV',
    'South African IPTV provider',
    'IPTV Cape Town',
    'IPTV Johannesburg',
    'IPTV Durban',
    'Mzansi IPTV',
    'load shedding IPTV',
    'fibre IPTV SA'
  ],
  authors: [{ name: 'StreamPro SA' }],
  metadataBase: new URL('https://southafricaniptvservices.co.za'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    url: 'https://southafricaniptvservices.co.za/',
    title: 'Best IPTV South Africa 2024 - Save R6000+ vs DSTV Premium',
    description:
      'Premium IPTV with 15,000+ channels including SABC, SuperSport, international content. 4K quality, works during load shedding. Best IPTV alternative to DSTV in SA.',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1721322800607-8c38375eef04?w=1200&h=630&fit=crop',
        width: 1200,
        height: 630,
        alt: 'StreamPro SA IPTV Service - Best DSTV Alternative',
      },
    ],
    locale: 'en_ZA',
    siteName: 'StreamPro SA IPTV Services',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Best IPTV South Africa 2024 - Save R6000+ vs DSTV Premium',
    description:
      'Premium IPTV with 15,000+ channels including SABC, SuperSport alternatives, 4K quality. Works during load shedding. Best value vs DSTV.',
    images: [
      'https://images.unsplash.com/photo-1721322800607-8c38375eef04?w=1200&h=630&fit=crop',
    ],
    site: '@StreamProSA',
  },
  other: {
    'geo.region': 'ZA',
    'geo.placename': 'South Africa',
    'geo.position': '-30.5595;22.9375',
    'ICBM': '-30.5595, 22.9375',
    'language': 'en-ZA',
    'country': 'South Africa',
    'target-audience': 'South African viewers, DSTV subscribers',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function page() {
  return (
    <>
      {/* Enhanced Structured Data for South African IPTV Service */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([
            {
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "StreamPro SA IPTV Services",
              "alternateName": "South African IPTV Services",
              "description": "Premium IPTV services in South Africa - Best alternative to DSTV with local and international channels",
              "url": "https://southafricaniptvservices.co.za/",
              "logo": "https://southafricaniptvservices.co.za/logo.png",
              "image": "https://images.unsplash.com/photo-1721322800607-8c38375eef04?w=1200&h=630&fit=crop",
              "contactPoint": [
                {
                  "@type": "ContactPoint",
                  "telephone": "+27-82-123-4567",
                  "contactType": "customer service",
                  "availableLanguage": ["English", "Afrikaans"],
                  "areaServed": "ZA",
                  "serviceType": "IPTV Support"
                }
              ],
              "address": {
                "@type": "PostalAddress",
                "addressCountry": "ZA",
                "addressRegion": "Gauteng"
              },
              "areaServed": [
                {
                  "@type": "Country",
                  "name": "South Africa"
                },
                {
                  "@type": "City",
                  "name": "Cape Town"
                },
                {
                  "@type": "City", 
                  "name": "Johannesburg"
                },
                {
                  "@type": "City",
                  "name": "Durban"
                },
                {
                  "@type": "City",
                  "name": "Pretoria"
                }
              ],
              "serviceType": "IPTV Service Provider",
              "priceRange": "R150-R650",
              "currenciesAccepted": "ZAR",
              "paymentAccepted": ["Cash", "Credit Card", "Bank Transfer", "EFT"],
              "sameAs": [
                "https://www.facebook.com/StreamProSA",
                "https://twitter.com/StreamProSA",
                "https://www.instagram.com/streamprosa"
              ]
            },
            {
              "@context": "https://schema.org",
              "@type": "Service",
              "name": "Premium IPTV Service South Africa",
              "description": "15,000+ live TV channels including SABC, international content, 4K streaming, works during load shedding",
              "provider": {
                "@type": "Organization",
                "name": "StreamPro SA"
              },
              "areaServed": "South Africa",
              "hasOfferCatalog": {
                "@type": "OfferCatalog",
                "name": "IPTV Service Packages",
                "itemListElement": [
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Basic IPTV Package"
                    },
                    "price": "199",
                    "priceCurrency": "ZAR",
                    "priceSpecification": {
                      "@type": "UnitPriceSpecification",
                      "price": "199",
                      "priceCurrency": "ZAR",
                      "unitText": "monthly"
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service", 
                      "name": "Premium IPTV Package"
                    },
                    "price": "399",
                    "priceCurrency": "ZAR",
                    "priceSpecification": {
                      "@type": "UnitPriceSpecification",
                      "price": "399", 
                      "priceCurrency": "ZAR",
                      "unitText": "monthly"
                    }
                  }
                ]
              }
            },
            {
              "@context": "https://schema.org",
              "@type": "WebSite",
              "name": "StreamPro SA IPTV Services",
              "url": "https://southafricaniptvservices.co.za/",
              "description": "Best IPTV service in South Africa - Premium streaming alternative to DSTV",
              "publisher": {
                "@type": "Organization",
                "name": "StreamPro SA"
              },
              "potentialAction": {
                "@type": "SearchAction",
                "target": "https://southafricaniptvservices.co.za/search?q={search_term_string}",
                "query-input": "required name=search_term_string"
              },
              "inLanguage": "en-ZA"
            },
            {
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              "name": "StreamPro SA IPTV Services",
              "@id": "https://southafricaniptvservices.co.za/",
              "url": "https://southafricaniptvservices.co.za/",
              "telephone": "+27-82-123-4567",
              "address": {
                "@type": "PostalAddress",
                "addressCountry": "ZA"
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": -30.5595,
                "longitude": 22.9375
              },
              "openingHoursSpecification": {
                "@type": "OpeningHoursSpecification",
                "dayOfWeek": [
                  "Monday",
                  "Tuesday", 
                  "Wednesday",
                  "Thursday",
                  "Friday",
                  "Saturday",
                  "Sunday"
                ],
                "opens": "08:00",
                "closes": "22:00"
              },
              "priceRange": "R150-R650",
              "currenciesAccepted": "ZAR",
              "paymentAccepted": ["Cash", "Credit Card", "EFT"],
              "hasOfferCatalog": {
                "@type": "OfferCatalog",
                "name": "IPTV Services"
              }
            },
            {
              "@context": "https://schema.org",
              "@type": "BreadcrumbList",
              "itemListElement": [
                {
                  "@type": "ListItem",
                  "position": 1,
                  "name": "Home",
                  "item": "https://southafricaniptvservices.co.za/"
                },
                {
                  "@type": "ListItem",
                  "position": 2,
                  "name": "IPTV Services",
                  "item": "https://southafricaniptvservices.co.za/services"
                },
                {
                  "@type": "ListItem",
                  "position": 3,
                  "name": "South Africa",
                  "item": "https://southafricaniptvservices.co.za/south-africa"
                }
              ]
            },
            {
              "@context": "https://schema.org",
              "@type": "FAQPage",
              "mainEntity": [
                {
                  "@type": "Question",
                  "name": "Is IPTV legal in South Africa?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Yes, IPTV services are legal in South Africa when they comply with ICASA regulations and properly license content. Choose providers that respect broadcasting rights and support local content creators."
                  }
                },
                {
                  "@type": "Question", 
                  "name": "How much data does IPTV use in South Africa?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "IPTV typically uses 1-3GB per hour for HD content and up to 7GB per hour for 4K. Most South African households need uncapped fibre or generous data packages for regular viewing."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Can I watch local SABC channels on IPTV?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Many legitimate IPTV providers in South Africa include SABC 1, 2, 3, and eTV channels in their packages, along with other local content and international channels."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Does IPTV work during load shedding?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "IPTV requires power for your router and streaming device. With a UPS system, you can continue watching during load shedding. Some services also offer mobile apps for viewing on cellular data."
                  }
                },
                {
                  "@type": "Question",
                  "name": "How does IPTV compare to DSTV pricing?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Premium IPTV services typically cost R200-600 per month compared to DSTV's R249-949 packages, potentially saving South African households R3000-6000 annually."
                  }
                }
              ]
            }
          ])
        }}
      />

      {/* Additional meta tags for better South African SEO */}
      <script
        dangerouslySetInnerHTML={{
          __html: `
            // South African specific tracking and optimization
            if (typeof gtag !== 'undefined') {
              gtag('config', 'GA_MEASUREMENT_ID', {
                'country': 'ZA',
                'language': 'en-za',
                'currency': 'ZAR'
              });
            }
          `
        }}
      />

      <Home/>
      <FloatingWhatsAppButton/>
    </>
  )
}