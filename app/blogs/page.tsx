import FloatingWhatsAppButton from '@/src/components/FloatingWhatsAppButton';
import Blogs from '../../src/sections/BlogsPage'
import React from 'react'
import { blogPosts } from '@/src/data/blogs';

export const metadata = {
  title: 'IPTV Blog & Resources | South African IPTV Services - StreamPro SA',
  description:
    'Discover comprehensive IPTV guides, streaming tutorials, and industry insights for South Africa. Learn about local IPTV services, DStv alternatives, load shedding solutions, and streaming technology trends.',
  keywords: [
    'IPTV blog South Africa',
    'IPTV tutorials SA',
    'South African IPTV',
    'streaming tips SA',
    'IPTV news',
    'DStv alternatives',
    'IPTV providers South Africa',
    'streaming guides SA',
    'IPTV setup South Africa',
    'cord cutting SA',
    'live TV streaming',
    'load shedding streaming',
    'streaming technology SA',
    'South African streaming',
    'IPTV Johannesburg',
    'IPTV Cape Town',
    'IPTV Durban',
    'IPTV Pretoria'
  ],
  authors: [{ name: 'StreamPro IPTV SA Team' }],
  creator: 'StreamPro IPTV South Africa',
  publisher: 'StreamPro IPTV SA',
  category: 'Technology',
  classification: 'IPTV and Streaming Services',
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
  openGraph: {
    title: 'IPTV Blog & Resources | South African IPTV Services - StreamPro SA',
    description:
      'Discover comprehensive IPTV guides, streaming tutorials, and industry insights for South Africa. Learn about DStv alternatives, load shedding streaming solutions, and local IPTV services.',
    url: 'https://watchiptvsouthafrica.co.za/blogs',
    siteName: 'South African IPTV Services',
    type: 'website',
    locale: 'en_ZA',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1721322800607-8c38375eef04?w=1200&h=630&fit=crop',
        width: 1200,
        height: 630,
        alt: 'IPTV Blog - South African Streaming Services and DStv Alternatives',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'IPTV Blog & Resources | South African IPTV Services',
    description: 'Comprehensive IPTV guides, DStv alternatives, and streaming solutions for South African users.',
    images: ['https://images.unsplash.com/photo-1721322800607-8c38375eef04?w=1200&h=630&fit=crop'],
    creator: '@StreamProSA',
    site: '@StreamProSA',
  },
  alternates: {
    canonical: 'https://watchiptvsouthafrica.co.zaa/blogs',
  },
  verification: {
    google: 'your-google-site-verification-code',
    yandex: 'your-yandex-verification-code',
    bing: 'your-bing-verification-code',
  },
  other: {
    'geo.region': 'ZA',
    'geo.placename': 'South Africa',
    'geo.position': '-25.7461;28.1881', // Pretoria coordinates
  },
};

export default function BlogPage() {
  const currentDate = new Date().toISOString();
  
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Blog',
    '@id': 'https://watchiptvsouthafrica.co.za/blogs#blog',
    name: 'StreamPro IPTV Blog - South African IPTV Services',
    headline: 'IPTV Blog & Resources | South African IPTV Services',
    description: 'Expert insights, technical guides, and industry trends for IPTV streaming technology in South Africa. DStv alternatives and load shedding streaming solutions.',
    url: 'https://watchiptvsouthafrica.co.za/blogs',
    inLanguage: 'en-ZA',
    dateModified: currentDate,
    datePublished: '2024-01-01T00:00:00+02:00',
    publisher: {
      '@type': 'Organization',
      '@id': 'https://watchiptvsouthafrica.co.za/#organization',
      name: 'StreamPro IPTV South Africa',
      url: 'https://watchiptvsouthafrica.co.za',
      logo: {
        '@type': 'ImageObject',
        url: 'https://watchiptvsouthafrica.co.za',
        width: 300,
        height: 100,
      },
      address: {
        '@type': 'PostalAddress',
        addressCountry: 'ZA',
        addressRegion: 'Gauteng',
        addressLocality: 'Johannesburg',
      },
      contactPoint: {
        '@type': 'ContactPoint',
        telephone: '+27-11-123-4567',
        contactType: 'customer service',
        availableLanguage: ['en-ZA', 'af-ZA'],
        areaServed: 'ZA',
      },
      sameAs: [
        'https://www.facebook.com/StreamProSA',
        'https://www.twitter.com/StreamProSA',
        'https://www.instagram.com/StreamProSA',
        'https://www.linkedin.com/company/streampro-sa',
      ],
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': 'https://watchiptvsouthafrica.co.za/blogs',
    },
    audience: {
      '@type': 'Audience',
      geographicArea: {
        '@type': 'Country',
        name: 'South Africa',
      },
    },
    about: [
      {
        '@type': 'Thing',
        name: 'IPTV Services',
        description: 'Internet Protocol Television streaming services',
      },
      {
        '@type': 'Thing',
        name: 'DStv Alternatives',
        description: 'Streaming alternatives to traditional satellite TV',
      },
      {
        '@type': 'Thing',
        name: 'Load Shedding Solutions',
        description: 'Streaming solutions during power outages',
      },
    ],
    keywords: 'IPTV South Africa, DStv alternatives, streaming SA, load shedding streaming, South African IPTV providers',
    blogPost: blogPosts.map((post) => ({
      '@type': 'BlogPosting',
      '@id': `https://watchiptvsouthafrica.co.za/blogs/${post.id}#blogpost`,
      headline: post.title,
      description: post.excerpt,
      url: `https://watchiptvsouthafrica.co.za/blogs/${post.id}`,
      datePublished: post.date || '2024-01-01T00:00:00+02:00',
      dateModified: post.date || currentDate,
      inLanguage: 'en-ZA',
      author: {
        '@type': 'Person',
        name: post.author || 'StreamPro SA Team',
        url: 'hhttps://watchiptvsouthafrica.co.za/about',
      },
      publisher: {
        '@id': 'https://watchiptvsouthafrica.co.za/#organization',
      },
      image: {
        '@type': 'ImageObject',
        url: post.image,
        width: 1200,
        height: 630,
      },
      mainEntityOfPage: {
        '@type': 'WebPage',
        '@id': `https://watchiptvsouthafrica.co.za/blogs/${post.id}`,
      },
      articleSection: 'IPTV Guides',
      wordCount:  800,
      audience: {
        '@type': 'Audience',
        geographicArea: {
          '@type': 'Country',
          name: 'South Africa',
        },
      },
    })),
  };

  // Breadcrumb Schema
  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: 'https://watchiptvsouthafrica.co.za',
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'IPTV Blog',
        item: 'https://watchiptvsouthafrica.co.za',
      },
    ],
  };

  // FAQ Schema for common IPTV questions in SA
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'Is IPTV legal in South Africa?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes, IPTV technology is legal in South Africa. However, it depends on the content being streamed and whether proper licensing agreements are in place.',
        },
      },
      {
        '@type': 'Question',
        name: 'Can IPTV work during load shedding?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'IPTV can work during load shedding if you have backup power solutions like UPS systems or generators to keep your internet connection and devices running.',
        },
      },
      {
        '@type': 'Question',
        name: 'What internet speed do I need for IPTV in South Africa?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'For standard definition, you need at least 3-4 Mbps. For HD content, 8-10 Mbps is recommended, and for 4K streaming, you need 25+ Mbps.',
        },
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <Blogs />
      <FloatingWhatsAppButton />
    </>
  );
}