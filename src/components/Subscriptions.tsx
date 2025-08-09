
import React from 'react';
import TrialButton from './TrialButton';

const Subscriptions = () => {
  const subscriptions = [
    {
      id: 1,
      title: "Basic SA",
      description: "Perfect for individuals exploring IPTV in South Africa",
      price: "R199",
      duration: "month",
      popular: false,
      features: [
        "5,000+ Live Channels including SABC & eTV",
        "Local SA Channels in HD Quality",
        "Basic Sports Package (Rugby & Cricket)",
        "2 Device Connections Simultaneously", 
        "10,000+ Movies & Series Library",
        "24/7 Customer Support in English & Afrikaans",
        "Mobile App for Android & iOS",
        "No Setup Fees or Contracts"
      ]
    },
    {
      id: 2,
      title: "Premium SA",
      description: "Most popular choice for South African families and households",
      price: "R349",
      duration: "month",
      popular: true,
      features: [
        "12,000+ Live Channels with Premium Content",
        "All SA Premium Channels (DStv Alternative)",
        "4K Ultra HD Streaming Quality",
        "5 Device Connections for Whole Family",
        "Complete Sports Package (SuperSport Alternative)",
        "20,000+ Movies & Series Collection",
        "Local SA Content (Afrikaans & Zulu Shows)",
        "Offline Download Feature for Mobile",
        "Priority Customer Support",
        "Free Setup & Installation Guide"
      ]
    },
    {
      id: 3,
      title: "Ultimate SA",
      description: "Complete entertainment solution for power users and businesses",
      price: "R499",
      duration: "month",
      popular: false,
      features: [
        "15,000+ Live Channels Worldwide",
        "All International Premium Channels",
        "8K Ready Streaming (Future-Proof)",
        "Unlimited Device Connections",
        "Premium Sports & Pay-Per-View Events",
        "30,000+ Movies & Series Library",
        "Advanced Parental Controls",
        "Multi-Language Support (11 SA Languages)",
        "Dedicated Account Manager",
        "Custom Channel Packages Available",
        "Business/Commercial Use License"
      ]
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-slate-950 via-slate-900 to-emerald-950" id="subscriptions">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-emerald-500/10 border border-emerald-500/20 rounded-full px-6 py-3 mb-8">
            <span className="text-emerald-300 font-medium">💰 Affordable Pricing for South Africa</span>
          </div>
          
          <h2 className="text-4xl lg:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-emerald-400 via-teal-400 to-cyan-400 bg-clip-text text-transparent">
              Choose Your Perfect Plan
            </span>
          </h2>
          
          <p className="text-xl text-slate-300 max-w-4xl mx-auto leading-relaxed">
            Competitive pricing designed for South African budgets and entertainment needs. 
            All plans include local SABC content, international channels, premium sports, and 24/7 support.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {subscriptions.map((plan) => (
            <div
              key={plan.id}
              className={`relative bg-gradient-to-b from-slate-800/40 to-slate-900/60 backdrop-blur-sm rounded-3xl shadow-2xl hover:shadow-emerald-500/10 transition-all duration-300 border-2 overflow-hidden group ${
                plan.popular 
                  ? 'border-emerald-500 transform scale-105 shadow-emerald-500/20' 
                  : 'border-slate-700/50 hover:border-emerald-500/30'
              }`}
            >
              {plan.popular && (
                <div className="absolute top-0 left-0 right-0 bg-gradient-to-r from-emerald-500 to-teal-500 text-white text-center py-3 font-bold">
                  🏆 Most Popular Choice in SA
                </div>
              )}
              
              <div className={`p-8 ${plan.popular ? 'pt-16' : ''}`}>
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-white mb-3">
                    {plan.title}
                  </h3>
                  <p className="text-slate-400 mb-6">
                    {plan.description}
                  </p>
                  <div className="mb-6">
                    <span className="text-5xl font-black text-emerald-400">{plan.price}</span>
                    <span className="text-slate-400 text-lg">/{plan.duration}</span>
                    <div className="text-sm text-slate-500 mt-1">South African Rand (ZAR)</div>
                  </div>
                </div>
                
                <ul className="space-y-4 mb-10">
                  {plan.features.map((feature, index) => (
                    <li key={index} className="flex items-start">
                      <div className="w-6 h-6 bg-emerald-500 rounded-full flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                        <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                          <path
                            fillRule="evenodd"
                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </div>
                      <span className="text-slate-300 text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
              
                <TrialButton 
                  text="Get Started Today" 
                  className={`w-full py-4 px-6 rounded-2xl font-bold text-lg transition-all duration-200 ${
                    plan.popular
                      ? 'bg-gradient-to-r from-emerald-500 to-teal-500 text-white hover:from-emerald-600 hover:to-teal-600 shadow-lg hover:shadow-emerald-500/25 transform hover:scale-105'
                      : 'bg-slate-700/50 text-slate-300 hover:bg-emerald-600 hover:text-white border border-slate-600 hover:border-emerald-500'
                  }`} 
                />
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <p className="text-slate-400 mb-4">🔒 All plans include 7-day free trial • No setup fees • Cancel anytime • Local SA support</p>
          <p className="text-sm text-slate-500">Prices in South African Rand (ZAR) • Payment via EFT, Card, or SnapScan</p>
          <div className="mt-6 flex justify-center space-x-4 text-slate-400">
            <span className="flex items-center">
              <svg className="w-4 h-4 mr-2 text-emerald-400" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
              </svg>
              30-Day Money Back Guarantee
            </span>
            <span className="flex items-center">
              <svg className="w-4 h-4 mr-2 text-emerald-400" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
              </svg>
              Local SA Customer Support
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Subscriptions;