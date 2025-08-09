import BlogPost from "@/src/sections/BlogPost";
import { blogPosts } from "../../../src/data/blogs";
import React from "react";
import FloatingWhatsAppButton from "@/src/components/FloatingWhatsAppButton";
import Link from "next/link";

export function generateStaticParams() {
  return blogPosts.map((post) => ({
    id: post.id,
  }));
}

export async function generateMetadata({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const post = blogPosts.find((p) => p.id === id);

  if (!post) {
    return {
      title: 'Blog Post Not Found | South African IPTV Services',
      description: 'The requested blog post could not be found.',
    };
  }

  // Create SEO-optimized title with South African focus
  const optimizedTitle = `${post.title} | South African IPTV Services Blog - StreamPro SA`;
  const optimizedDescription = post.excerpt 
    ? `${post.excerpt} Learn more about IPTV services, DStv alternatives, and streaming solutions in South Africa.`
    : `${post.title} - Expert IPTV insights for South African users. Discover streaming solutions and DStv alternatives.`;

  return {
    title: optimizedTitle,
    description: optimizedDescription,
    keywords: [
      ...(post.tags || []),
      'IPTV South Africa',
      'South African streaming',
      'DStv alternatives SA',
      'IPTV blog SA',
      'streaming guides South Africa',
      'load shedding streaming',
      'IPTV providers SA',
    ],
    authors: [{ 
      name: post.author || 'StreamPro SA Team',
      url: 'https://southafricaniptvservices.co.za/about'
    }],
    creator: 'StreamPro IPTV South Africa',
    publisher: 'StreamPro IPTV SA',
    category: post.tags[0] || 'IPTV Technology',
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
      title: post.title,
      description: optimizedDescription,
      url: `https://southafricaniptvservices.co.za/blogs/${post.id}`,
      siteName: 'South African IPTV Services',
      type: 'article',
      locale: 'en_ZA',
      publishedTime: post.date || post.date,
      modifiedTime: post.date || post.date,
      section: 'IPTV Guides',
      tags: post.tags || [],
      authors: [post.author || 'StreamPro SA Team'],
      images: [
        {
          url: post.image,
          width: 1200,
          height: 630,
          alt: `${post.title} - South African IPTV Guide`,
          type: 'image/jpeg',
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: post.excerpt || post.title,
      images: [post.image],
      creator: '@StreamProSA',
      site: '@StreamProSA',
    },
    alternates: {
      canonical: `https://southafricaniptvservices.co.za/blogs/${post.id}`,
      languages: {
        'en-ZA': `https://southafricaniptvservices.co.za/blogs/${post.id}`,
        'af-ZA': `https://southafricaniptvservices.co.za/af/blogs/${post.id}`,
      },
    },
    other: {
      'geo.region': 'ZA',
      'geo.placename': 'South Africa',
      'article:author': post.author || 'StreamPro SA Team',
      'article:section': post.tags[0] || 'IPTV Technology',
      'article:tag': (post.tags || []).join(', '),
    },
  };
}

// Server Component – no "use client"
export default async function Page({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const post = blogPosts.find((p) => p.id === id);

  if (!post) {
    // Enhanced 404 with structured data
    const notFoundSchema = {
      '@context': 'https://schema.org',
      '@type': 'WebPage',
      name: 'Blog Post Not Found',
      description: 'The requested blog post could not be found.',
      url: `https://southafricaniptvservices.co.za/blogs/${id}`,
      mainEntity: {
        '@type': 'Thing',
        name: 'Error 404',
        description: 'Page not found'
      }
    };

    return (
      <>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(notFoundSchema) }}
        />
        <div className="container mx-auto px-4 py-16 text-center">
          <h1 className="text-4xl font-bold mb-4">Post Not Found</h1>
          <p className="text-lg text-gray-600 mb-8">
            The blog post you are looking for was not found. 
            Explore our other IPTV guides and South African streaming resources.
          </p>
          <Link
            href="/blogs" 
            className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700"
          >
            Back to Blog
          </Link>
        </div>
        <FloatingWhatsAppButton />
      </>
    );
  }

  // Enhanced Article Schema for South African context
  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    '@id': `https://southafricaniptvservices.co.za/blogs/${post.id}#article`,
    headline: post.title,
    description: post.excerpt || post.title,
    image: {
      '@type': 'ImageObject',
      url: post.image,
      width: 1200,
      height: 630,
      alt: `${post.title} - South African IPTV Guide`
    },
    datePublished: post.date || post.date,
    dateModified: post.date || post.date || new Date().toISOString(),
    author: {
      '@type': 'Person',
      name: post.author || 'StreamPro SA Team',
      url: 'https://southafricaniptvservices.co.za/about',
      jobTitle: 'IPTV Technology Expert',
      worksFor: {
        '@type': 'Organization',
        name: 'StreamPro IPTV South Africa'
      }
    },
    publisher: {
      '@type': 'Organization',
      '@id': 'https://southafricaniptvservices.co.za#organization',
      name: 'StreamPro IPTV South Africa',
      url: 'https://southafricaniptvservices.co.za',
      logo: {
        '@type': 'ImageObject',
        url: 'https://southafricaniptvservices.co.za/logo.png',
        width: 300,
        height: 100
      },
      address: {
        '@type': 'PostalAddress',
        addressCountry: 'ZA',
        addressRegion: 'Gauteng',
        addressLocality: 'Johannesburg'
      },
      contactPoint: {
        '@type': 'ContactPoint',
        telephone: '+27-11-123-4567',
        contactType: 'customer service',
        availableLanguage: ['en-ZA', 'af-ZA'],
        areaServed: 'ZA'
      }
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `https://southafricaniptvservices.co.za/blogs/${post.id}`,
      url: `https://southafricaniptvservices.co.za/blogs/${post.id}`,
      name: post.title,
      description: post.excerpt || post.title,
      inLanguage: 'en-ZA'
    },
    articleSection: post.tags[0] || 'IPTV Technology',
    articleBody: post.content || post.excerpt,

    keywords: (post.tags || []).join(', '),
    about: [
      {
        '@type': 'Thing',
        name: 'IPTV Services',
        description: 'Internet Protocol Television streaming services for South Africa'
      },
      {
        '@type': 'Place',
        name: 'South Africa',
        '@id': 'https://www.wikidata.org/wiki/Q258'
      }
    ],
    mentions: [
      {
        '@type': 'Organization',
        name: 'DStv',
        description: 'Traditional satellite TV service in South Africa'
      },
      {
        '@type': 'Thing',
        name: 'Load Shedding',
        description: 'Planned power outages in South Africa'
      }
    ],
    audience: {
      '@type': 'Audience',
      geographicArea: {
        '@type': 'Country',
        name: 'South Africa'
      },
      audienceType: 'South African IPTV users'
    },
    potentialAction: {
      '@type': 'ReadAction',
      target: `https://southafricaniptvservices.co.za/blogs/${post.id}`
    },
    inLanguage: 'en-ZA',
    copyrightHolder: {
      '@type': 'Organization',
      name: 'StreamPro IPTV South Africa'
    },
    copyrightYear: new Date().getFullYear(),
    isAccessibleForFree: true,
    genre: 'Technology',
    ...(post.tags && post.tags.length > 0 && {
      keywords: post.tags.join(', ')
    })
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
        item: 'https://southafricaniptvservices.co.za'
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'IPTV Blog',
        item: 'https://southafricaniptvservices.co.za/blogs'
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: post.title,
        item: `https://southafricaniptvservices.co.za/blogs/${post.id}`
      }
    ]
  };

  // Related Articles Schema (if you have related posts)
  const relatedArticles = blogPosts
    .filter(p => p.id !== post.id && p.tags.some(tag => post.tags.includes(tag)))
    .slice(0, 3);

  const collectionSchema = relatedArticles.length > 0 ? {
    '@context': 'https://schema.org',
    '@type': 'Collection',
    name: `Related'IPTV'} Articles`,
    description: `More articles about'IPTV'} for South African users`,
    hasPart: relatedArticles.map(relatedPost => ({
      '@type': 'BlogPosting',
      headline: relatedPost.title,
      url: `https://southafricaniptvservices.co.za/blogs/${relatedPost.id}`,
      image: relatedPost.image,
      author: {
        '@type': 'Person',
        name: relatedPost.author || 'StreamPro SA Team'
      }
    }))
  } : null;

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      {collectionSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(collectionSchema) }}
        />
      )}
      <BlogPost id={id} />
      <FloatingWhatsAppButton />
    </>
  );
}