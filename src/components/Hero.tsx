import React from 'react';
import Image from 'next/image';
import TrialButton from './TrialButton';
import './Hero.css'; // we'll put the animations here

const Hero = () => {
  return (
    <section className="relative min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-emerald-950 overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute top-20 -left-20 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-20 -right-20 w-96 h-96 bg-teal-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-radial from-emerald-500/5 to-transparent rounded-full"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16">
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-16 items-center min-h-[80vh]">
          {/* Text Content */}
          <div className="text-center xl:text-left">
            <div className="inline-flex items-center bg-emerald-500/10 border border-emerald-500/20 rounded-full px-6 py-3 mb-8">
              <span className="w-2 h-2 bg-emerald-400 rounded-full mr-3 animate-pulse"></span>
              <span className="text-emerald-300 font-medium">Now Available in South Africa</span>
            </div>
            
            <h1 className="text-5xl lg:text-7xl font-black mb-8 leading-tight">
              <span className="text-white">Premium IPTV for</span>
              <br />
              <span className="bg-gradient-to-r from-emerald-400 via-teal-400 to-cyan-400 bg-clip-text text-transparent">
                South Africa
              </span>
            </h1>
            
            <p className="text-xl lg:text-2xl text-slate-300 mb-12 max-w-2xl leading-relaxed">
              Experience next-generation entertainment with 4K streaming, local SA channels, 
              international content, and 24/7 access to over 15,000 channels and 30,000+ movies and series.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center xl:justify-start mb-16">
              <TrialButton 
                text="Start 7-Day Free Trial" 
                className="bg-gradient-to-r from-emerald-500 to-teal-500 text-white px-10 py-5 rounded-2xl font-bold text-lg shadow-2xl hover:from-emerald-600 hover:to-teal-600 hover:shadow-emerald-500/25 transform hover:scale-105 transition-all duration-200"
              />
              <a 
                href="#subscriptions" 
                className="border-2 border-emerald-400/50 text-emerald-300 px-10 py-5 rounded-2xl font-bold text-lg hover:bg-emerald-900/30 hover:border-emerald-400 transition-all duration-200 text-center"
              >
                View Pricing Plans
              </a>
            </div>

            {/* Enhanced Stats */}
            <div className="grid grid-cols-3 gap-8">
              {[
                { label: 'Live Channels', value: '15,000+', icon: '📺' },
                { label: 'Movies & Shows', value: '30,000+', icon: '🎬' },
                { label: 'Uptime Guarantee', value: '99.9%', icon: '⚡' },
              ].map(({ label, value, icon }) => (
                <div key={label} className="text-center group">
                  <div className="text-3xl mb-2">{icon}</div>
                  <div className="text-3xl lg:text-4xl font-bold text-white group-hover:text-emerald-400 transition-colors">
                    {value}
                  </div>
                  <div className="text-sm text-slate-400 mt-1">{label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Enhanced Image Section */}
          <div className="relative">
            <div className="relative group">
              {/* Main Image */}
              <div className="relative z-20">
                <Image
                  src="/IPTV.webp"
                  alt="South African IPTV Streaming Service - Premium Entertainment"
                  width={600}
                  height={400}
                  className="rounded-3xl shadow-2xl border border-emerald-500/20 w-full max-w-lg mx-auto transform group-hover:scale-105 transition-transform duration-300"
                  priority
                />
                
                {/* Floating Quality Badge */}
                <div className="absolute -bottom-8 -left-6 bg-gradient-to-r from-slate-900/90 to-emerald-900/90 backdrop-blur-md border border-emerald-500/30 p-6 rounded-2xl shadow-2xl animate-bounce-slow">
                  <div className="text-sm text-slate-400 mb-1">Streaming Quality</div>
                  <div className="text-3xl font-bold text-emerald-400">4K Ultra HD</div>
                  <div className="text-xs text-slate-500">Dolby Vision & Atmos</div>
                </div>
                
                {/* Floating Connection Status */}
                <div className="absolute -top-4 -right-6 bg-gradient-to-r from-slate-900/90 to-teal-900/90 backdrop-blur-md border border-teal-500/30 p-4 rounded-xl shadow-xl">
                  <div className="flex items-center">
                    <div className="w-3 h-3 bg-green-400 rounded-full mr-2 animate-pulse"></div>
                    <span className="text-green-400 font-semibold text-sm">Live in SA</span>
                  </div>
                  <div className="text-xs text-slate-400 mt-1">99.9% Uptime</div>
                </div>
              </div>
              
              {/* Background Glow */}
              <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/20 to-teal-500/20 rounded-3xl blur-3xl transform scale-110"></div>
            </div>
            
            {/* Floating Elements */}
            <div className="absolute top-10 right-10 w-20 h-20 bg-gradient-to-br from-emerald-400 to-teal-500 rounded-2xl opacity-20 animate-float"></div>
            <div className="absolute bottom-20 left-0 w-16 h-16 bg-gradient-to-br from-purple-400 to-pink-500 rounded-xl opacity-20 animate-float delay-1000"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
