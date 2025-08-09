
import React from 'react';
import Image from 'next/image';

const IPTVPanels = () => {
  const iptvPanels = [
    {
      id: 1,
      title: "Local SA Channels",
      description: "Complete access to all South African broadcasting channels including SABC 1, 2, 3, eTV, Kyknet, and regional community channels with Afrikaans and Zulu content.",
      image: "https://images.unsplash.com/photo-1522869635100-9f4c5e86aa37",
      features: [
        "All SABC channels in HD quality",
        "eTV and M-Net programming", 
        "kykNET & Afrikaans content",
        "Regional language channels (Zulu, Xhosa)",
        "Local news and weather updates",
        "Educational and documentary programming"
      ]
    },
    {
      id: 2,
      title: "Sports Excellence",
      description: "Never miss a game with comprehensive sports coverage including Springboks rugby, Proteas cricket, Kaizer Chiefs, Orlando Pirates, and international tournaments.",
      image: "https://images.unsplash.com/photo-1431324155629-1a6deb1dec8d",
      features: [
        "Live SuperSport channels alternative",
        "Springboks rugby matches (SARU)",
        "Proteas cricket & domestic leagues",
        "PSL football (Chiefs, Pirates, Sundowns)",
        "International football (Premier League, La Liga)",
        "Formula 1, MotoGP, and motorsports",
        "Tennis, golf, and Olympic coverage"
      ]
    },
    {
      id: 3,
      title: "International Movies",
      description: "Vast collection of Hollywood blockbusters, Bollywood hits, African cinema, and international films with multiple language options and subtitles.",
      image: "https://images.unsplash.com/photo-1489599511331-a8693a6b3c72",
      features: [
        "Latest Hollywood releases in 4K",
        "Bollywood movies with English subtitles",
        "African cinema and Nollywood films",
        "Classic movie collections",
        "Family-friendly animations",
        "Documentary and biographical films",
        "Multi-language audio tracks"
      ]
    },
    {
      id: 4,
      title: "Kids & Family",
      description: "Safe, educational, and entertaining content for children with popular cartoons, educational shows, and family-friendly programming in multiple South African languages.",
      image: "https://images.unsplash.com/photo-1596464716127-f2a82984de30",
      features: [
        "Disney Channel and Nickelodeon content",
        "Educational shows in local languages",
        "Popular cartoons and animations",
        "Parental control features",
        "Age-appropriate content filtering",
        "Local South African kids shows",
        "Interactive learning content"
      ]
    },
    {
      id: 5,
      title: "News & Current Affairs",
      description: "Stay informed with comprehensive news coverage from local South African networks and international sources, available in multiple languages.",
      image: "https://images.unsplash.com/photo-1504711434969-e33886168f5c",
      features: [
        "SABC News and current affairs",
        "eNCA and News24 live streams",
        "BBC World News and CNN International",
        "Local regional news channels",
        "Business and financial news (CNBC Africa)",
        "Weather and traffic updates",
        "Parliamentary and government coverage"
      ]
    },
    {
      id: 6,
      title: "Premium Series",
      description: "Access to premium TV series, local South African productions, international drama series, and exclusive content from major streaming platforms.",
      image: "https://images.unsplash.com/photo-1574375927938-d5a98e8ffe85",
      features: [
        "Local SA series (Generations, Isidingo)",
        "International drama series",
        "Netflix-style original productions",
        "British and European series",
        "Korean dramas with subtitles",
        "Reality TV and lifestyle shows",
        "Complete season collections"
      ]
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-emerald-950 via-slate-900 to-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-teal-500/10 border border-teal-500/20 rounded-full px-6 py-3 mb-8">
            <span className="text-teal-300 font-medium">🎯 Tailored for South African Viewers</span>
          </div>
          
          <h2 className="text-4xl lg:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-teal-400 via-emerald-400 to-cyan-400 bg-clip-text text-transparent">
              Services We Provide
            </span>
          </h2>
          
          <p className="text-xl text-slate-300 max-w-4xl mx-auto leading-relaxed">
            All your entertainment needs are covered with our comprehensive IPTV service. From local South African content 
            to international programming, sports, movies, and news - we&#39;ve got Mzansi covered.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {iptvPanels.map((panel) => (
            <div 
              key={panel.id} 
              className="group bg-gradient-to-b from-slate-800/40 to-slate-900/60 rounded-3xl shadow-2xl hover:shadow-teal-500/10 transition-all duration-500 border border-slate-700/50 hover:border-teal-500/30 backdrop-blur-sm overflow-hidden transform hover:-translate-y-2"
            >
              <div className="relative overflow-hidden">
                <Image
                  src={panel.image} 
                  alt={`${panel.title} - South African IPTV Content`}
                  width={400}
                  height={240}
                  className="w-full h-60 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent"></div>
                <div className="absolute bottom-4 left-4">
                  <div className="bg-gradient-to-r from-teal-500/80 to-emerald-500/80 backdrop-blur-sm rounded-lg px-3 py-1 text-white font-semibold text-sm">
                    {panel.title}
                  </div>
                </div>
              </div>
              
              <div className="p-8">
                <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-teal-300 transition-colors">
                  {panel.title}
                </h3>
                <p className="text-slate-300 mb-6 leading-relaxed">
                  {panel.description}
                </p>
                
                <ul className="space-y-3">
                  {panel.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start text-sm text-slate-300 group-hover:text-slate-200 transition-colors">
                      <div className="w-5 h-5 bg-gradient-to-br from-teal-400 to-emerald-500 rounded-full flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                        <svg className="w-2.5 h-2.5 text-white" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <div className="mt-6 pt-6 border-t border-slate-700/50">
                  <div className="flex items-center justify-between">
                    <span className="text-slate-400 text-sm">Available 24/7</span>
                    <div className="flex items-center">
                      <div className="w-2 h-2 bg-emerald-400 rounded-full mr-2 animate-pulse"></div>
                      <span className="text-emerald-400 font-semibold text-sm">Live Now</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-slate-800/50 to-emerald-900/30 rounded-2xl p-8 border border-emerald-500/20 backdrop-blur-sm">
            <h3 className="text-2xl font-bold text-white mb-4">
              Why South Africans Choose Our IPTV Service
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
              <div className="text-center">
                <div className="text-3xl mb-2">🇿🇦</div>
                <h4 className="font-semibold text-emerald-300 mb-2">Local Content Focus</h4>
                <p className="text-slate-400 text-sm">Designed specifically for South African viewers with local channels and content</p>
              </div>
              <div className="text-center">
                <div className="text-3xl mb-2">💰</div>
                <h4 className="font-semibold text-teal-300 mb-2">Affordable Pricing</h4>
                <p className="text-slate-400 text-sm">Competitive ZAR pricing that fits South African budgets and offers great value</p>
              </div>
              <div className="text-center">
                <div className="text-3xl mb-2">🛠️</div>
                <h4 className="font-semibold text-cyan-300 mb-2">Local Support</h4>
                <p className="text-slate-400 text-sm">24/7 customer support in English and Afrikaans with local understanding</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IPTVPanels;