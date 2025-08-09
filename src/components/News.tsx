import React from 'react';
import TrialButton from './TrialButton';
import Image from 'next/image';

const NewsPage = () => {
  const features = [
    { 
      icon: "📺", 
      title: "Live Coverage", 
      desc: "Breaking news and live events as they happen across SA",
      color: "from-red-500/10 to-pink-500/10 border-red-500/20"
    },
    { 
      icon: "⏪", 
      title: "Catch-Up TV", 
      desc: "Missed a bulletin? Watch any news program from the past week",
      color: "from-blue-500/10 to-cyan-500/10 border-blue-500/20"
    },
    { 
      icon: "🌍", 
      title: "Multi-Language", 
      desc: "News in English, Afrikaans, and other South African languages",
      color: "from-emerald-500/10 to-teal-500/10 border-emerald-500/20"
    },
    { 
      icon: "📱", 
      title: "Multi-Device", 
      desc: "Watch news on TV, phone, tablet, or laptop anywhere in SA",
      color: "from-purple-500/10 to-pink-500/10 border-purple-500/20"
    },
    { 
      icon: "🏛️", 
      title: "Parliament Live", 
      desc: "Live coverage of parliamentary sessions and government announcements",
      color: "from-amber-500/10 to-orange-500/10 border-amber-500/20"
    },
    { 
      icon: "💼", 
      title: "Business News", 
      desc: "JSE updates, rand exchange rates, and South African economic news",
      color: "from-green-500/10 to-emerald-500/10 border-green-500/20"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-emerald-950 text-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center bg-teal-500/10 border border-teal-500/20 rounded-full px-6 py-3 mb-8 animate-pulse">
            <span className="text-teal-300 font-medium">📺 24/7 News Coverage</span>
          </div>
          <h1 className="text-5xl lg:text-6xl font-extrabold mb-6">
            <span className="bg-gradient-to-r from-teal-400 via-emerald-400 to-cyan-400 bg-clip-text text-transparent">
              News Network SA
            </span>
          </h1>
          <p className="text-xl text-slate-300 max-w-4xl mx-auto leading-relaxed">
            Stay informed with 24/7 news coverage from trusted South African and global sources. 
            Complete access to SABC News, eNCA, News24, and international networks - your DStv News alternative.
          </p>
        </div>

        {/* Hero Section */}
        <div className="mb-24">
          <div className="bg-gradient-to-r from-slate-800/50 to-teal-900/30 rounded-3xl overflow-hidden mb-16 border border-teal-500/20 backdrop-blur-sm hover:border-teal-500/40 transition-all duration-300">
            <div className="lg:flex">
              <div className="lg:w-2/3 relative group">
                <Image
                  src="https://images.unsplash.com/photo-1495020689067-958852a7765e?w=1200&h=800&fit=crop&q=80"
                  alt="South African News Studio - SABC News Coverage"
                  width={1200}
                  height={800}
                  className="w-full h-full min-h-80 object-cover group-hover:scale-105 transition-transform duration-700"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-r from-black/50 to-transparent"></div>
                <div className="absolute bottom-6 left-6 right-6">
                  <div className="bg-red-500/90 backdrop-blur-sm rounded-lg p-4 animate-pulse">
                    <div className="flex items-center justify-between">
                      <span className="text-white font-bold text-lg">🔴 BREAKING: Parliament Live Coverage</span>
                      <span className="text-white/80 text-sm">SABC News</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="p-10 lg:w-1/3 flex flex-col justify-center">
                <h2 className="text-3xl font-bold text-teal-300 mb-6">Comprehensive News Coverage</h2>
                <p className="text-slate-300 mb-8 text-lg leading-relaxed">
                  Access live and on-demand news from leading South African networks including SABC News, eNCA, 
                  News24, and international sources like BBC and CNN - all in one place.
                </p>
                
                <TrialButton 
                  text='View News Channels' 
                  className='bg-gradient-to-r from-teal-500 to-emerald-500 text-white px-8 py-4 rounded-xl font-semibold hover:from-teal-600 hover:to-emerald-600 transition-all duration-200 shadow-lg hover:shadow-teal-500/25 transform hover:scale-105'
                />
              </div>
            </div>
          </div>

          {/* News Packages and Networks Grid */}
          <div className="grid grid-cols-1 xl:grid-cols-2 gap-12 mb-16">
            <div className="bg-gradient-to-br from-slate-800/40 to-teal-900/20 rounded-3xl p-10 border border-teal-500/20 backdrop-blur-sm hover:border-teal-500/40 transition-all duration-300">
              <div className="flex items-center mb-8">
                <div className="w-12 h-12 bg-gradient-to-br from-teal-400 to-emerald-500 rounded-xl flex items-center justify-center mr-4">
                  <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd"/>
                  </svg>
                </div>
                <h2 className="text-3xl font-bold text-teal-300">News Channel Packages</h2>
              </div>
              <div className="space-y-8">
                {[
                  { 
                    title: "SA News Basic", 
                    desc: "SABC News, eNCA, News24, and major South African networks",
                    highlight: "Local Focus",
                    price: "From R199/month"
                  },
                  { 
                    title: "Premium News SA", 
                    desc: "Includes business channels, CNBC Africa, and parliamentary coverage",
                    highlight: "Business & Politics",
                    price: "From R349/month"
                  },
                  { 
                    title: "Global News Package", 
                    desc: "BBC World News, CNN International, Al Jazeera, and regional African news",
                    highlight: "International",
                    price: "From R449/month"
                  },
                  { 
                    title: "Complete News Bundle", 
                    desc: "All news channels plus analysis, documentaries, and DStv News alternative",
                    highlight: "Everything",
                    price: "From R649/month"
                  }
                ].map((item, index) => (
                  <div key={index} className="border-l-4 border-teal-400 pl-6 bg-slate-800/30 rounded-r-xl p-4 hover:bg-slate-800/50 transition-all duration-300 group">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="text-xl font-bold text-white group-hover:text-teal-300 transition-colors">{item.title}</h3>
                      <span className="bg-teal-500/20 text-teal-300 text-xs px-3 py-1 rounded-full border border-teal-500/30">
                        {item.highlight}
                      </span>
                    </div>
                    <p className="text-slate-300 leading-relaxed mb-2">{item.desc}</p>
                    <p className="text-teal-400 font-semibold text-sm">{item.price}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-gradient-to-br from-slate-800/40 to-emerald-900/20 rounded-3xl p-10 border border-emerald-500/20 backdrop-blur-sm hover:border-emerald-500/40 transition-all duration-300">
              <div className="flex items-center mb-8">
                <div className="w-12 h-12 bg-gradient-to-br from-amber-400 to-orange-500 rounded-xl flex items-center justify-center mr-4">
                  <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd"/>
                  </svg>
                </div>
                <h2 className="text-3xl font-bold text-amber-300">Featured Networks</h2>
              </div>
              <div className="grid grid-cols-2 gap-4 mb-8">
                {[
                  { name: "SABC News", short: "SABC", color: "from-red-500 to-red-600" },
                  { name: "eNCA", short: "eNCA", color: "from-blue-500 to-blue-600" },
                  { name: "News24", short: "N24", color: "from-orange-500 to-orange-600" },
                  { name: "CNBC Africa", short: "CNBC", color: "from-green-500 to-green-600" },
                  { name: "BBC World", short: "BBC", color: "from-purple-500 to-purple-600" },
                  { name: "CNN Int'l", short: "CNN", color: "from-red-500 to-red-600" },
                  { name: "Al Jazeera", short: "AJ", color: "from-teal-500 to-teal-600" },
                  { name: "Sky News", short: "SKY", color: "from-blue-500 to-blue-600" }
                ].map((net, idx) => (
                  <div key={idx} className="bg-slate-800/50 p-4 rounded-xl flex items-center border border-slate-700/50 hover:border-teal-500/30 transition-all hover:scale-105 group">
                    <div className={`bg-gradient-to-r ${net.color} rounded-full w-12 h-12 flex items-center justify-center mr-3 text-white font-bold text-sm group-hover:scale-110 transition-transform`}>
                      {net.short}
                    </div>
                    <span className="text-slate-300 font-medium group-hover:text-white transition-colors">{net.name}</span>
                  </div>
                ))}
              </div>
              
              <div className="bg-gradient-to-r from-emerald-500/10 to-teal-500/10 rounded-xl p-4 border border-emerald-500/20 hover:border-emerald-500/40 transition-all duration-300">
                <p className="text-emerald-300 font-semibold text-sm mb-1">✨ DStv News Alternative</p>
                <p className="text-slate-300 text-sm">Get all your favorite news channels at a fraction of the DStv cost</p>
              </div>
            </div>
          </div>

          {/* Interactive Features Section - Now static */}
          <div className="bg-gradient-to-r from-emerald-900/30 via-slate-800/50 to-teal-900/30 rounded-3xl p-12 border border-emerald-500/30 backdrop-blur-sm mb-16">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-4">
                <span className="bg-gradient-to-r from-teal-400 to-emerald-400 bg-clip-text text-transparent">
                  News Features & Benefits
                </span>
              </h2>
              <p className="text-slate-300 text-lg">Everything you need to stay informed in South Africa</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {features.map((feature, i) => (
                <div 
                  key={i} 
                  className={`bg-gradient-to-br ${feature.color} border rounded-2xl p-6 transition-all duration-300 hover:scale-105`}
                >
                  <div className="flex items-start mb-4">
                    <div className="bg-slate-800/50 rounded-lg p-3 mr-4">
                      <span className="text-2xl">{feature.icon}</span>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold text-white mb-2">{feature.title}</h3>
                      <p className="text-slate-300 text-sm leading-relaxed">{feature.desc}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Statistics Section */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-16">
            {[
              { number: "50+", label: "News Channels", color: "text-teal-400" },
              { number: "24/7", label: "Live Coverage", color: "text-emerald-400" },
              { number: "11", label: "SA Languages", color: "text-cyan-400" },
              { number: "99.9%", label: "Uptime", color: "text-amber-400" }
            ].map((stat, i) => (
              <div key={i} className="bg-slate-800/30 rounded-2xl p-8 text-center border border-slate-700/30 hover:border-teal-500/30 transition-all duration-300 hover:scale-105">
                <div className={`text-4xl font-bold ${stat.color} mb-2`}>{stat.number}</div>
                <div className="text-slate-300 text-sm uppercase tracking-wide">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action Section */}
        <div className="bg-gradient-to-r from-slate-800/50 to-teal-900/30 rounded-3xl p-12 text-center border border-teal-500/20 backdrop-blur-sm">
          <h2 className="text-4xl font-bold text-teal-300 mb-6">Stay Informed 24/7</h2>
          <p className="text-xl text-slate-300 mb-8 max-w-3xl mx-auto leading-relaxed">
            Get unlimited access to the news that matters to you with our flexible packages. 
            Join thousands of South Africans who&#39;ve made the switch from DStv.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <TrialButton 
              text='Start Free Trial' 
              className='bg-gradient-to-r from-teal-500 to-emerald-500 text-white px-8 py-4 rounded-xl font-semibold hover:from-teal-600 hover:to-emerald-600 transition-all duration-200 shadow-lg hover:shadow-teal-500/25 transform hover:scale-105'
            />
            <TrialButton 
              text='View All Channels' 
              className='bg-transparent border-2 border-teal-500 text-teal-400 px-8 py-4 rounded-xl font-semibold hover:bg-teal-500/10 transition-all duration-200 transform hover:scale-105'
            />
          </div>
          <div className="mt-6 text-sm text-slate-400">
            ✅ No contract required • ✅ Cancel anytime • ✅ 7-day free trial
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsPage;