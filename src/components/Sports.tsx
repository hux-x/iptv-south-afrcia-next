
import React from 'react';
import Image from 'next/image';
import TrialButton from './TrialButton';

const SportsPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-emerald-950 text-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <div className="inline-flex items-center bg-emerald-500/10 border border-emerald-500/20 rounded-full px-6 py-3 mb-8">
            <span className="text-emerald-300 font-medium">🏆 Premium Sports Experience</span>
          </div>
          <h1 className="text-5xl lg:text-6xl font-extrabold mb-6">
            <span className="bg-gradient-to-r from-emerald-400 via-teal-400 to-cyan-400 bg-clip-text text-transparent">
              Sports Central SA
            </span>
          </h1>
          <p className="text-xl text-slate-300 max-w-4xl mx-auto leading-relaxed">
            Comprehensive sports coverage for every South African fan - from Springboks rugby to PSL football, 
            Proteas cricket, and international tournaments. Your ultimate DStv Sports alternative.
          </p>
        </div>

        <div className="mb-24">
          <div className="bg-gradient-to-r from-slate-800/50 to-emerald-900/30 rounded-3xl overflow-hidden mb-16 border border-emerald-500/20 backdrop-blur-sm">
            <div className="lg:flex">
              <div className="lg:w-2/3 relative">
                <Image
                  src="https://images.unsplash.com/photo-1540747913346-19e32dc3e97e"
                  alt="Live Sports Broadcasting - South African Sports Coverage"
                  className="w-full h-full min-h-80 object-cover"
                  width={800}
                  height={400}
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-r from-black/40 to-transparent"></div>
                <div className="absolute bottom-6 left-6">
                  <div className="bg-emerald-500/90 backdrop-blur-sm rounded-lg px-4 py-2">
                    <span className="text-white font-bold">🔴 LIVE: Springboks vs All Blacks</span>
                  </div>
                </div>
              </div>
              <div className="p-10 lg:w-1/3 flex flex-col justify-center">
                <h2 className="text-3xl font-bold text-emerald-300 mb-6">Your Sports Destination</h2>
                <p className="text-slate-300 mb-8 text-lg leading-relaxed">
                  Access all the sports action you love with our premium DStv SuperSport alternative. 
                  From local PSL matches to international tournaments, we&#39;ve got every game covered.
                </p>
                <TrialButton 
                  text="Explore Sports Packages" 
                  className="bg-gradient-to-r from-emerald-500 to-teal-500 text-white px-8 py-4 rounded-xl font-semibold hover:from-emerald-600 hover:to-teal-600 transition-all duration-200 shadow-lg hover:shadow-emerald-500/25"
                />
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 xl:grid-cols-2 gap-12 mb-16">
            <div className="bg-gradient-to-br from-slate-800/40 to-emerald-900/20 rounded-3xl p-10 border border-emerald-500/20 backdrop-blur-sm">
              <div className="flex items-center mb-8">
                <div className="w-12 h-12 bg-gradient-to-br from-emerald-400 to-teal-500 rounded-xl flex items-center justify-center mr-4">
                  <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                  </svg>
                </div>
                <h2 className="text-3xl font-bold text-emerald-300">What You&#39;ll Get</h2>
              </div>
              <ul className="space-y-5 text-slate-300">
                <li className="flex items-start">
                  <span className="text-emerald-400 mr-4 text-2xl flex-shrink-0">✓</span>
                  <span className="text-lg">Live coverage of all major South African sports leagues (PSL, Currie Cup, Mzansi Super League)</span>
                </li>
                <li className="flex items-start">
                  <span className="text-emerald-400 mr-4 text-2xl flex-shrink-0">✓</span>
                  <span className="text-lg">Exclusive Springboks rugby and Proteas cricket matches with expert commentary</span>
                </li>
                <li className="flex items-start">
                  <span className="text-emerald-400 mr-4 text-2xl flex-shrink-0">✓</span>
                  <span className="text-lg">International sports: Premier League, Champions League, Formula 1, and tennis majors</span>
                </li>
                <li className="flex items-start">
                  <span className="text-emerald-400 mr-4 text-2xl flex-shrink-0">✓</span>
                  <span className="text-lg">On-demand replays, highlights, and extended match analysis</span>
                </li>
                <li className="flex items-start">
                  <span className="text-emerald-400 mr-4 text-2xl flex-shrink-0">✓</span>
                  <span className="text-lg">DStv SuperSport alternative with better value and no contracts</span>
                </li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-slate-800/40 to-teal-900/20 rounded-3xl p-10 border border-teal-500/20 backdrop-blur-sm">
              <div className="flex items-center mb-8">
                <div className="w-12 h-12 bg-gradient-to-br from-amber-400 to-orange-500 rounded-xl flex items-center justify-center mr-4">
                  <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                  </svg>
                </div>
                <h2 className="text-3xl font-bold text-amber-300">Premium Features</h2>
              </div>
              <div className="grid grid-cols-2 gap-6">
                <div className="bg-gradient-to-br from-blue-500/10 to-cyan-500/10 p-6 rounded-2xl border border-blue-500/20">
                  <div className="text-blue-400 text-3xl mb-3">4K</div>
                  <p className="text-slate-300 font-medium">Ultra HD broadcast for Premier League and rugby</p>
                </div>
                <div className="bg-gradient-to-br from-emerald-500/10 to-teal-500/10 p-6 rounded-2xl border border-emerald-500/20">
                  <div className="text-emerald-400 text-3xl mb-3">🎙️</div>
                  <p className="text-slate-300 font-medium">Expert Afrikaans & English commentary</p>
                </div>
                <div className="bg-gradient-to-br from-purple-500/10 to-pink-500/10 p-6 rounded-2xl border border-purple-500/20">
                  <div className="text-purple-400 text-3xl mb-3">📊</div>
                  <p className="text-slate-300 font-medium">Advanced stats and real-time match data</p>
                </div>
                <div className="bg-gradient-to-br from-amber-500/10 to-orange-500/10 p-6 rounded-2xl border border-amber-500/20">
                  <div className="text-amber-400 text-3xl mb-3">📱</div>
                  <p className="text-slate-300 font-medium">Watch on any device, anywhere in SA</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-r from-emerald-900/30 via-slate-800/50 to-teal-900/30 rounded-3xl p-12 border border-emerald-500/30 backdrop-blur-sm">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-4">
                <span className="bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent">
                  Popular Sports in South Africa
                </span>
              </h2>
              <p className="text-slate-300 text-lg">Complete coverage of every sport that matters to South Africans</p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8">
              {[
                { emoji: "🏉", name: "Rugby", desc: "Springboks & Currie Cup" },
                { emoji: "🏏", name: "Cricket", desc: "Proteas & CSA League" },
                { emoji: "⚽", name: "Football", desc: "PSL & Premier League" },
                { emoji: "🏎️", name: "Formula 1", desc: "Live races & highlights" },
                { emoji: "🎾", name: "Tennis", desc: "Grand Slams & ATP" },
                { emoji: "🥊", name: "Boxing", desc: "Local & international bouts" }
              ].map((sport, index) => (
                <div key={index} className="text-center group">
                  <div className="bg-gradient-to-br from-emerald-500/20 to-teal-500/20 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-200 border border-emerald-500/30">
                    <span className="text-4xl">{sport.emoji}</span>
                  </div>
                  <h3 className="font-bold text-white mb-2">{sport.name}</h3>
                  <p className="text-sm text-slate-400">{sport.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-r from-slate-800/50 to-emerald-900/30 rounded-3xl p-12 text-center border border-emerald-500/20 backdrop-blur-sm">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-4xl font-bold mb-6">
              <span className="bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent">
                Never Miss a Game Again
              </span>
            </h2>
            <p className="text-slate-300 mb-8 text-xl leading-relaxed">
              Get unlimited access to all your favorite South African and international sports with our comprehensive packages. 
              Perfect for casual fans and die-hard supporters - better value than DStv with no long-term contracts.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <TrialButton 
                text="Start 7-Day Sports Trial" 
                className="bg-gradient-to-r from-emerald-500 to-teal-500 text-white px-10 py-5 rounded-2xl font-bold text-lg shadow-2xl hover:from-emerald-600 hover:to-teal-600 hover:shadow-emerald-500/25 transform hover:scale-105 transition-all duration-200"
              />
              <a 
                href="#subscriptions" 
                className="border-2 border-emerald-400/50 text-emerald-300 px-10 py-5 rounded-2xl font-bold text-lg hover:bg-emerald-900/30 hover:border-emerald-400 transition-all duration-200"
              >
                View Sports Packages
              </a>
            </div>
            <div className="mt-8 flex justify-center items-center space-x-8 text-slate-400">
              <span className="flex items-center">
                <svg className="w-5 h-5 mr-2 text-emerald-400" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                </svg>
                No Contracts
              </span>
              <span className="flex items-center">
                <svg className="w-5 h-5 mr-2 text-emerald-400" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                </svg>
                Cancel Anytime
              </span>
              <span className="flex items-center">
                <svg className="w-5 h-5 mr-2 text-emerald-400" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                </svg>
                Better Value than DStv
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SportsPage;