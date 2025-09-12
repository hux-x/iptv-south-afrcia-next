import React from 'react';
import Image from 'next/image';

const IPTVPanels = () => {
  const iptvPanels = [
    {
      id: 7,
      title: "DSTV Alternative",
      description: "Enjoy the full DSTV experience without the high monthly fees. All your favourite DSTV channels, movies, sports, and shows in one affordable IPTV package.",
      image: "data:image/jpeg;base64,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",
      features: [
        "Full DSTV bouquet channels",
        "SuperSport sports coverage",
        "M-Net movies & series",
        "Lifestyle and reality channels",
        "Kids entertainment (Cartoon Network, Boomerang)",
        "African Magic & Nollywood channels",
        "High-definition streaming quality"
      ]
    },
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
    },
  
  ];

  return (
    <section className="py-16 bg-gradient-to-br from-emerald-950 via-slate-900 to-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="inline-flex items-center bg-teal-500/10 border border-teal-500/20 rounded-full px-5 py-2.5 mb-6">
            <span className="text-teal-300 font-medium text-sm">🎯 Tailored for South African Viewers</span>
          </div>
          <h2 className="text-3xl lg:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-teal-400 via-emerald-400 to-cyan-400 bg-clip-text text-transparent">
              Services We Provide
            </span>
          </h2>
          <p className="text-lg text-slate-300 max-w-3xl mx-auto leading-relaxed">
            From local South African favourites to international blockbusters, sports, news, and DSTV alternatives — all in one IPTV service.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {iptvPanels.map((panel) => (
            <div 
              key={panel.id} 
              className="group bg-gradient-to-b from-slate-800/40 to-slate-900/60 rounded-2xl shadow-xl hover:shadow-teal-500/10 transition-all duration-500 border border-slate-700/50 hover:border-teal-500/30 backdrop-blur-sm overflow-hidden transform hover:-translate-y-2"
            >
              <div className="relative overflow-hidden">
                <Image
                  src={panel.image} 
                  alt={`${panel.title} - South African IPTV Content`}
                  width={400}
                  height={200}
                  className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent"></div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-teal-300 transition-colors">
                  {panel.title}
                </h3>
                <p className="text-slate-300 mb-4 leading-relaxed text-sm">
                  {panel.description}
                </p>
                
                <ul className="space-y-2">
                  {panel.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start text-xs text-slate-300 group-hover:text-slate-200 transition-colors">
                      <div className="w-4 h-4 bg-gradient-to-br from-teal-400 to-emerald-500 rounded-full flex items-center justify-center mr-2 mt-0.5 flex-shrink-0">
                        <svg className="w-2 h-2 text-white" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default IPTVPanels;
