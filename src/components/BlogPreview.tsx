
import React from 'react';
import Link from 'next/link';
import { blogPosts } from '../data/blogs';
import Image from 'next/image';

const BlogPreview = () => {
  const recentPosts = blogPosts.slice(0, 3);
  
  return (
    <section className="py-20 bg-gradient-to-br from-emerald-950 via-slate-900 to-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-emerald-500/10 border border-emerald-500/20 rounded-full px-6 py-3 mb-8">
            <span className="text-emerald-300 font-medium">📚 Latest IPTV Insights</span>
          </div>
          <h2 className="text-4xl lg:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-emerald-400 via-teal-400 to-cyan-400 bg-clip-text text-transparent">
              Latest from Our Blog
            </span>
          </h2>
          <p className="text-xl text-slate-300 max-w-4xl mx-auto leading-relaxed">
            Stay updated with the latest South African IPTV news, setup guides, DStv alternatives, 
            and industry insights from our expert team.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {recentPosts.map((post, index) => (
            <article 
              key={post.id} 
              className="group bg-gradient-to-b from-slate-800/40 to-slate-900/60 rounded-3xl shadow-2xl hover:shadow-emerald-500/10 transition-all duration-500 border border-slate-700/50 hover:border-emerald-500/30 backdrop-blur-sm overflow-hidden transform hover:-translate-y-2"
            >
              <div className="relative overflow-hidden">
                <Image
                  src={post.image} 
                  alt={`${post.title} - South African IPTV Blog`}
                  className="w-full h-56 object-cover transition-transform duration-500 group-hover:scale-110"
                  width={600}
                  height={224}
                  priority={index === 0}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent"></div>
                <div className="absolute top-4 left-4">
                  <div className="bg-emerald-500/90 backdrop-blur-sm rounded-lg px-3 py-1 text-white font-semibold text-sm">
                    New Post
                  </div>
                </div>
              </div>
              
              <div className="p-8">
                <div className="flex items-center text-sm text-slate-400 mb-4">
                  <div className="flex items-center mr-4">
                    <div className="w-8 h-8 bg-gradient-to-br from-emerald-400 to-teal-500 rounded-full flex items-center justify-center mr-2">
                      <span className="text-white font-bold text-xs">{post.author.charAt(0)}</span>
                    </div>
                    <span className="text-slate-300">{post.author}</span>
                  </div>
                  <span className="text-slate-500">•</span>
                  <span className="ml-2">{new Date(post.date).toLocaleDateString('en-ZA')}</span>
                </div>
                
                <h3 className="text-xl font-bold text-white mb-4 line-clamp-2 group-hover:text-emerald-300 transition-colors">
                  {post.title}
                </h3>
                
                <p className="text-slate-300 mb-6 line-clamp-3 leading-relaxed">
                  {post.excerpt}
                </p>
                
                <div className="flex items-center justify-between">
                  <div className="flex flex-wrap gap-2">
                    {post.tags.slice(0, 2).map((tag) => (
                      <span 
                        key={tag} 
                        className="bg-emerald-500/10 text-emerald-300 text-xs px-3 py-1 rounded-full border border-emerald-500/20 font-medium"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <Link 
                    href={`/blogs/${post.id}`}
                    className="text-emerald-400 font-semibold hover:text-emerald-300 transition-colors flex items-center group/link"
                  >
                    Read More 
                    <svg className="w-4 h-4 ml-1 transform group-hover/link:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m-12-4h16" />
                    </svg>
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
        
        <div className="text-center">
          <Link 
            href="/blogs"
            className="bg-gradient-to-r from-emerald-500 to-teal-500 text-white px-10 py-4 rounded-2xl font-bold text-lg shadow-2xl hover:from-emerald-600 hover:to-teal-600 hover:shadow-emerald-500/25 transform hover:scale-105 transition-all duration-200 inline-flex items-center"
          >
            View All IPTV Articles
            <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </Link>
        </div>

        {/* Featured Topics */}
        <div className="mt-20">
          <div className="bg-gradient-to-r from-slate-800/50 to-emerald-900/30 rounded-3xl p-12 border border-emerald-500/20 backdrop-blur-sm">
            <div className="text-center mb-12">
              <h3 className="text-3xl font-bold mb-4">
                <span className="bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent">
                  Popular IPTV Topics
                </span>
              </h3>
              <p className="text-slate-300 text-lg">Explore our most read articles about IPTV in South Africa</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  title: "DStv vs IPTV",
                  description: "Compare costs and features",
                  icon: "💰",
                  color: "from-amber-500/10 to-orange-500/10 border-amber-500/20"
                },
                {
                  title: "Setup Guides", 
                  description: "Easy installation tutorials",
                  icon: "⚙️",
                  color: "from-blue-500/10 to-cyan-500/10 border-blue-500/20"
                },
                {
                  title: "Channel Lists",
                  description: "What channels are available",
                  icon: "📺",
                  color: "from-emerald-500/10 to-teal-500/10 border-emerald-500/20"
                },
                {
                  title: "Sports Coverage",
                  description: "Rugby, cricket, football guides",
                  icon: "🏆",
                  color: "from-purple-500/10 to-pink-500/10 border-purple-500/20"
                }
              ].map((topic, index) => (
                <div key={index} className={`bg-gradient-to-br ${topic.color} backdrop-blur-sm rounded-2xl p-6 border transition-all duration-200 hover:scale-105 cursor-pointer`}>
                  <div className="text-center">
                    <div className="text-4xl mb-3">{topic.icon}</div>
                    <h4 className="text-lg font-bold text-white mb-2">{topic.title}</h4>
                    <p className="text-slate-400 text-sm">{topic.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogPreview;