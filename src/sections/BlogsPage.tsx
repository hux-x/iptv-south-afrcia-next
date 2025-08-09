import React from 'react';
import Link from 'next/link';
import { blogPosts } from '../data/blogs';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Image from 'next/image';

const Blogs = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-emerald-950">
      <Navbar />

      {/* Hero Section */}
      <div className="relative py-20 overflow-hidden">
        {/* Glow accents */}
        <div className="absolute top-20 -left-20 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 -right-20 w-96 h-96 bg-teal-500/10 rounded-full blur-3xl"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h1 className="text-4xl lg:text-5xl font-extrabold text-white mb-6 leading-tight">
            IPTV Blog & Resources for South Africa
          </h1>
          <p className="text-lg lg:text-xl text-slate-300 max-w-3xl mx-auto">
            Latest IPTV tips, guides, and updates tailored for South African viewers and resellers —
            from Cape Town’s waterfront to Johannesburg’s skyline.
          </p>
        </div>
      </div>

      {/* Blog Grid */}
      <div className="py-16 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {blogPosts.map((post) => (
              <article
                key={post.id}
                className="bg-slate-900 rounded-2xl shadow-lg hover:shadow-emerald-500/25 transition-all border border-emerald-500/20 hover:border-emerald-400 overflow-hidden group"
              >
                <Link href={`/blogs/${post.id}`} className="block">
                  <div className="overflow-hidden">
                    <Image
                      src={post.image}
                      alt={post.title}
                      className="w-full h-48 object-cover transform group-hover:scale-105 transition-transform duration-300"
                      width={400}
                      height={192}
                      priority={false}
                    />
                  </div>
                  <div className="p-6 flex flex-col justify-between h-full">
                    <div>
                      <div className="flex items-center text-sm text-slate-400 mb-3">
                        <span>{post.author}</span>
                        <span className="mx-2">•</span>
                        <span>{new Date(post.date).toLocaleDateString('en-ZA')}</span>
                      </div>
                      <h2 className="text-xl font-semibold text-white mb-3 line-clamp-2 group-hover:text-emerald-400 transition-colors">
                        {post.title}
                      </h2>
                      <p className="text-slate-300 mb-4 line-clamp-3">
                        {post.excerpt}
                      </p>
                    </div>

                    <div className="flex items-center justify-between mt-auto">
                      <div className="flex flex-wrap gap-2">
                        {post.tags.slice(0, 2).map((tag) => (
                          <span
                            key={tag}
                            className="bg-emerald-900/40 text-emerald-300 text-xs px-2 py-1 rounded"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                      <span className="text-emerald-400 font-medium group-hover:text-emerald-300 transition-colors">
                        Read More →
                      </span>
                    </div>
                  </div>
                </Link>
              </article>
            ))}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Blogs;
