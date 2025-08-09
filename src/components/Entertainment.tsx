"use client";
import React from 'react';
import Image from 'next/image';

const EntertainmentPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-emerald-950 text-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <h1 className="text-5xl lg:text-6xl font-extrabold mb-6">
            <span className="bg-gradient-to-r from-emerald-400 via-teal-400 to-cyan-400 bg-clip-text text-transparent">
              Entertainment Hub
            </span>
          </h1>
          <p className="text-xl text-slate-300 max-w-4xl mx-auto leading-relaxed">
            Experience South Africa&apos;s premier IPTV service with unlimited access to local and international content, 
            featuring SABC, eTV, MultiChoice alternatives, and global entertainment tailored for Mzansi viewers.
          </p>
        </div>

        <div className="grid grid-cols-1 xl:grid-cols-2 gap-16 mb-24">
          <div className="bg-gradient-to-br from-slate-800/50 to-emerald-900/20 rounded-3xl p-10 border border-emerald-500/20 backdrop-blur-sm">
            <div className="flex items-center mb-8">
              <div className="w-12 h-12 bg-gradient-to-br from-emerald-400 to-teal-500 rounded-xl flex items-center justify-center mr-4">
                <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2 6a2 2 0 012-2h6l2 2h6a2 2 0 012 2v6a2 2 0 01-2 2H4a2 2 0 01-2-2V6zM5 8a1 1 0 000 2h8a1 1 0 100-2H5z"/>
                </svg>
              </div>
              <h2 className="text-3xl font-bold text-emerald-300">Featured This Week</h2>
            </div>
            
            <div className="relative mb-8 group">
              <Image
                src="https://images.unsplash.com/photo-1574375927938-d5a98e8ffe85"
                alt="South African Entertainment Content"
                className="rounded-2xl w-full h-72 object-cover border border-emerald-500/30"
                width={800}
                height={450}
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent rounded-2xl"></div>
              <div className="absolute bottom-4 left-4 right-4">
                <div className="bg-white/10 backdrop-blur-md rounded-lg p-4 border border-white/20">
                  <span className="text-emerald-300 font-semibold text-sm">NOW STREAMING</span>
                  <h3 className="text-white font-bold text-lg">Local & International Content</h3>
                </div>
              </div>
            </div>
            
            <p className="text-slate-300 text-lg leading-relaxed">
              Discover our curated selection of South African productions, Hollywood blockbusters, 
              Bollywood hits, and premium international series updated weekly for our South African audience.
            </p>
          </div>

          <div className="space-y-8">
            <div className="bg-gradient-to-br from-slate-800/40 to-teal-900/20 rounded-2xl p-8 border border-teal-500/20 backdrop-blur-sm hover:border-teal-400/30 transition-all duration-300">
              <div className="flex items-center mb-6">
                <div className="w-10 h-10 bg-gradient-to-br from-amber-400 to-orange-500 rounded-lg flex items-center justify-center mr-4">
                  <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z" clipRule="evenodd"/>
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-amber-300">Movie Collections</h3>
              </div>
              <ul className="space-y-4 text-slate-300">
                {[
                  'Latest Hollywood releases in 4K UHD',
                  'Award-winning South African cinema',
                  'Bollywood blockbusters with English subtitles',
                  'African film festival selections',
                  'Family-friendly animations & kids content'
                ].map((item, index) => (
                  <li key={index} className="flex items-start">
                    <span className="text-amber-400 mr-3 mt-1">★</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-gradient-to-br from-slate-800/40 to-cyan-900/20 rounded-2xl p-8 border border-cyan-500/20 backdrop-blur-sm hover:border-cyan-400/30 transition-all duration-300">
              <div className="flex items-center mb-6">
                <div className="w-10 h-10 bg-gradient-to-br from-purple-400 to-pink-500 rounded-lg flex items-center justify-center mr-4">
                  <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2 6a2 2 0 012-2h6l2 2h6a2 2 0 012 2v6a2 2 0 01-2 2H4a2 2 0 01-2-2V6z"/>
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-purple-300">TV Series & Live Channels</h3>
              </div>
              <ul className="space-y-4 text-slate-300">
                {[
                  'Complete seasons of SA soap operas (Generations, Isidingo)',
                  'International Netflix-style original series',
                  'Local South African productions & documentaries',
                  'Sports channels (SuperSport, ESPN alternatives)',
                  'News channels (SABC News, eNCA, News24, BBC)'
                ].map((item, index) => (
                  <li key={index} className="flex items-start">
                    <span className="text-purple-400 mr-3 mt-1">▶</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-r from-emerald-900/30 via-slate-800/50 to-teal-900/30 rounded-3xl p-12 border border-emerald-500/30 backdrop-blur-sm">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">
              <span className="bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent">
                Why Choose Our SA IPTV Service?
              </span>
            </h2>
            <p className="text-slate-300 text-lg max-w-2xl mx-auto">
              Designed specifically for South African viewers with local content, sports, and global entertainment
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: "🎬",
                title: "4K Ultra HD",
                description: "Crystal clear picture quality with Dolby Atmos surround sound",
                color: "from-blue-500 to-cyan-500"
              },
              {
                icon: "🚫",
                title: "Ad-Free Viewing",
                description: "Uninterrupted entertainment experience for the whole family",
                color: "from-emerald-500 to-teal-500"
              },
              {
                icon: "📱",
                title: "Multi-Device Access",
                description: "Watch on TV, smartphone, tablet, laptop, and smart TV",
                color: "from-purple-500 to-pink-500"
              },
              {
                icon: "🇿🇦",
                title: "SA-Focused Content",
                description: "Local channels, Springbok rugby, cricket, and regional programming",
                color: "from-amber-500 to-orange-500"
              }
            ].map((feature, index) => (
              <div key={index} className="text-center group">
                <div className={`w-16 h-16 mx-auto mb-6 bg-gradient-to-br ${feature.color} rounded-2xl flex items-center justify-center text-2xl transform group-hover:scale-110 transition-transform duration-200`}>
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
                <p className="text-slate-300 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default EntertainmentPage;