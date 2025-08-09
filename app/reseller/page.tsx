import FloatingWhatsAppButton from "@/src/components/FloatingWhatsAppButton";
import Reseller from "@/src/sections/ResellerPage";
import React from 'react'

export const metadata = {
  title: 'Become an IPTV Reseller South Africa | Start Your IPTV Business SA',
  description:
    'Start your IPTV business in South Africa with StreamPro SA\'s reseller program. Get bulk pricing, ZAR payments, full support, and white-label IPTV solutions. Beat DSTV competition!',
  keywords: [
    'IPTV reseller South Africa',
    'IPTV business SA',
    'IPTV reseller program',
    'white label IPTV SA',
    'IPTV subscription reseller',
    'South African IPTV reseller',
    'IPTV dealer SA',
    'IPTV franchise South Africa',
    'make money IPTV SA',
    'IPTV business opportunity',
    'bulk IPTV subscriptions',
    'IPTV reseller Cape Town',
    'IPTV reseller Johannesburg',
    'IPTV reseller Durban',
    'DSTV alternative business',
    'streaming business SA'
  ],
  authors: [{ name: 'StreamPro SA Reseller Team' }],
  metadataBase: new URL('https://southafricaniptvservices.co.za'),
  alternates: {
    canonical: '/reseller',
  },
  openGraph: {
    title: 'IPTV Reseller Program South Africa - Start Your Streaming Business',
    description:
      'Join StreamPro SA\'s profitable IPTV reseller program. Bulk pricing in ZAR, full training, marketing support. Tap into SA\'s growing demand for DSTV alternatives.',
    url: 'https://southafricaniptvservices.co.za/reseller',
    type: 'website',
    locale: 'en_ZA',
    siteName: 'StreamPro SA IPTV Services',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1649972904349-6e44c42644a7?w=1200&h=630&fit=crop',
        width: 1200,
        height: 630,
        alt: 'IPTV Reseller Program South Africa - StreamPro SA',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'IPTV Reseller Program SA - Start Your Streaming Business',
    description:
      'Profitable IPTV reseller opportunity in South Africa. Bulk pricing, ZAR payments, full support. Growing market with DSTV alternatives.',
    images: [
      'https://images.unsplash.com/photo-1649972904349-6e44c42644a7?w=1200&h=630&fit=crop',
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
    'target-audience': 'South African entrepreneurs, IPTV resellers',
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

export default function Page() {
  return (
    <>
      {/* Enhanced Structured Data for SA IPTV Reseller Program */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([
            {
              "@context": "https://schema.org",
              "@type": "BusinessOpportunity",
              "name": "StreamPro SA IPTV Reseller Program",
              "description": "Profitable IPTV reseller program in South Africa with bulk pricing, training, and marketing support",
              "url": "https://southafricaniptvservices.co.za/reseller",
              "image": "https://images.unsplash.com/photo-1649972904349-6e44c42644a7?w=1200&h=630&fit=crop",
              "provider": {
                "@type": "Organization",
                "name": "StreamPro SA",
                "url": "https://southafricaniptvservices.co.za",
                "logo": "https://southafricaniptvservices.co.za/logo.png",
                "contactPoint": {
                  "@type": "ContactPoint",
                  "telephone": "+27-82-123-4567",
                  "contactType": "sales",
                  "availableLanguage": ["English", "Afrikaans"],
                  "areaServed": "ZA"
                }
              },
              "areaServed": {
                "@type": "Country",
                "name": "South Africa"
              },
              "businessFunction": "Reseller Program",
              "category": "IPTV Services",
              "priceRange": "R50-R500",
              "currenciesAccepted": "ZAR",
              "paymentAccepted": ["Bank Transfer", "EFT", "Credit Card"],
              "offers": {
                "@type": "Offer",
                "name": "IPTV Reseller Package",
                "description": "Complete reseller package with bulk pricing and support",
                "price": "Contact for pricing",
                "priceCurrency": "ZAR",
                "availability": "https://schema.org/InStock",
                "validFrom": "2024-01-01"
              }
            },
            {
              "@context": "https://schema.org",
              "@type": "Service",
              "name": "IPTV Reseller Program South Africa",
              "description": "Comprehensive IPTV reseller program with training, marketing materials, and technical support for South African entrepreneurs",
              "provider": {
                "@type": "Organization",
                "name": "StreamPro SA"
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
                },
                {
                  "@type": "City",
                  "name": "Port Elizabeth"
                },
                {
                  "@type": "City",
                  "name": "Bloemfontein"
                }
              ],
              "serviceType": "Business Opportunity",
              "category": "IPTV Reseller Services",
              "hasOfferCatalog": {
                "@type": "OfferCatalog",
                "name": "Reseller Packages",
                "itemListElement": [
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Basic Reseller Package"
                    },
                    "description": "Entry-level reseller package for new IPTV businesses",
                    "price": "Contact for pricing",
                    "priceCurrency": "ZAR"
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Premium Reseller Package"
                    },
                    "description": "Advanced reseller package with white-label solutions",
                    "price": "Contact for pricing",
                    "priceCurrency": "ZAR"
                  }
                ]
              }
            },
            {
              "@context": "https://schema.org",
              "@type": "WebPage",
              "name": "IPTV Reseller Program South Africa",
              "url": "https://southafricaniptvservices.co.za/reseller",
              "description": "Start your IPTV business in South Africa with StreamPro SA's reseller program",
              "inLanguage": "en-ZA",
              "isPartOf": {
                "@type": "WebSite",
                "name": "StreamPro SA IPTV Services",
                "url": "https://southafricaniptvservices.co.za"
              },
              "breadcrumb": {
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
                    "name": "Reseller Program",
                    "item": "https://southafricaniptvservices.co.za/reseller"
                  }
                ]
              },
              "mainEntity": {
                "@type": "FAQPage",
                "mainEntity": [
                  {
                    "@type": "Question",
                    "name": "How much can I earn as an IPTV reseller in South Africa?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "IPTV resellers in South Africa can earn R500-R5000+ monthly depending on customer base and pricing strategy. With DSTV's high costs, there's strong demand for affordable alternatives."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "What support do you provide to South African resellers?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "We provide 24/7 technical support, marketing materials, training in English and Afrikaans, bulk pricing in ZAR, and assistance with local payment methods like EFT and bank transfers."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "Is IPTV reselling legal in South Africa?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "Yes, IPTV reselling is legal in South Africa when done with legitimate providers who comply with ICASA regulations and properly license content."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "How do I start an IPTV reseller business in SA?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "Contact us to join our reseller program. We'll provide training, marketing materials, competitive bulk pricing, and ongoing support to help you succeed in the South African market."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "What makes IPTV attractive to South African customers?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "IPTV offers significant savings vs DSTV (R4000-6000 annually), more international content, mobile viewing, no contracts, and works on multiple devices - appealing to cost-conscious SA consumers."
                    }
                  }
                ]
              }
            },
            {
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "StreamPro SA IPTV Reseller Program",
              "alternateName": "South African IPTV Business Opportunity",
              "url": "https://southafricaniptvservices.co.za/reseller",
              "logo": "https://southafricaniptvservices.co.za/reseller-logo.png",
              "description": "Leading IPTV reseller program in South Africa offering training, support, and profitable business opportunities",
              "foundingLocation": {
                "@type": "Country",
                "name": "South Africa"
              },
              "areaServed": {
                "@type": "Country",
                "name": "South Africa"
              },
              "knowsAbout": [
                "IPTV Technology",
                "South African Market", 
                "DSTV Alternatives",
                "Streaming Services",
                "Business Development",
                "Digital Marketing"
              ],
              "memberOf": {
                "@type": "Organization",
                "name": "South African IPTV Industry"
              },
              "contactPoint": [
                {
                  "@type": "ContactPoint",
                  "telephone": "+27-82-123-4567",
                  "contactType": "sales",
                  "availableLanguage": ["English", "Afrikaans"],
                  "areaServed": "ZA",
                  "hoursAvailable": {
                    "@type": "OpeningHoursSpecification",
                    "dayOfWeek": [
                      "Monday",
                      "Tuesday",
                      "Wednesday", 
                      "Thursday",
                      "Friday"
                    ],
                    "opens": "08:00",
                    "closes": "18:00"
                  }
                },
                {
                  "@type": "ContactPoint",
                  "contactType": "customer support",
                  "availableLanguage": ["English", "Afrikaans"],
                  "areaServed": "ZA",
                  "hoursAvailable": {
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
                  }
                }
              ],
              "sameAs": [
                "https://www.facebook.com/StreamProSAReseller",
                "https://twitter.com/StreamProSA", 
                "https://www.instagram.com/streamprosa",
                "https://www.linkedin.com/company/streamprosa"
              ]
            },
            {
              "@context": "https://schema.org",
              "@type": "Course",
              "name": "IPTV Reseller Training Program South Africa",
              "description": "Comprehensive training program for new IPTV resellers in South Africa covering technology, sales, and business development",
              "provider": {
                "@type": "Organization",
                "name": "StreamPro SA"
              },
              "courseMode": "Online and Phone Support",
              "inLanguage": ["en-ZA", "af-ZA"],
              "availableLanguage": ["English", "Afrikaans"],
              "educationalLevel": "Beginner to Advanced",
              "teaches": [
                "IPTV Technology Basics",
                "Customer Acquisition",
                "Technical Support",
                "Business Management",
                "Marketing Strategies",
                "South African Market Analysis"
              ],
              "coursePrerequisites": "Basic computer and internet knowledge",
              "timeRequired": "P1W",
              "offers": {
                "@type": "Offer",
                "price": "0",
                "priceCurrency": "ZAR",
                "availability": "https://schema.org/InStock",
                "description": "Free training included with reseller program"
              }
            }
          ])
        }}
      />

      {/* Additional tracking for South African market */}
      <script
        dangerouslySetInnerHTML={{
          __html: `
            // South African business opportunity tracking
            if (typeof gtag !== 'undefined') {
              gtag('config', 'GA_MEASUREMENT_ID', {
                'country': 'ZA',
                'language': 'en-za',
                'currency': 'ZAR',
                'custom_map': {
                  'custom_parameter_1': 'reseller_interest',
                  'custom_parameter_2': 'business_opportunity'
                }
              });
              
              // Track reseller page view
              gtag('event', 'page_view', {
                'page_title': 'IPTV Reseller Program SA',
                'page_location': 'https://southafricaniptvservices.co.za/reseller',
                'content_group1': 'Business Opportunity',
                'content_group2': 'Reseller Program',
                'country': 'South Africa'
              });
            }
          `
        }}
      />

      <Reseller/>
      <FloatingWhatsAppButton/>
    </>
  )
}