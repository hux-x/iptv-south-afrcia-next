import TrialButton from './TrialButton';

export default function Subscriptions() {
  const subscriptions = [
    {
      id: 1,
      title: "Basic SA",
      description: "Perfect for individuals exploring IPTV in South Africa",
      price: "R199",
      duration: "month",
      popular: false,
      features: [
        "5,000+ Live Channels incl. SABC & eTV",
        "Local SA Channels in HD",
        "Basic Sports (Rugby & Cricket)",
        "2 Device Connections",
        "10,000+ Movies & Series",
        "24/7 Support (English & Afrikaans)",
      ]
    },
    {
      id: 2,
      title: "Premium SA",
      description: "Most popular choice for South African families",
      price: "R349",
      duration: "month",
      popular: true,
      features: [
        "12,000+ Live Channels",
        "All SA Premium Channels",
        "4K Ultra HD Streaming",
        "5 Device Connections",
        "Complete Sports Package",
        "20,000+ Movies & Series",
      ]
    },
    {
      id: 3,
      title: "Ultimate SA",
      description: "Complete entertainment solution for power users",
      price: "R499",
      duration: "month",
      popular: false,
      features: [
        "15,000+ Live Channels Worldwide",
        "All International Premium",
        "8K Ready Streaming",
        "Unlimited Devices",
        "Premium Sports & PPV Events",
        "30,000+ Movies & Series",
      ]
    }
  ];

  return (
    <section className="py-16 bg-gradient-to-br from-slate-950 via-slate-900 to-emerald-950" id="subscriptions">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center bg-emerald-500/10 border border-emerald-500/20 rounded-full px-5 py-2 mb-6">
            <span className="text-emerald-300 font-medium">💰 Affordable Pricing for South Africa</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold mb-4 bg-gradient-to-r from-emerald-400 via-teal-400 to-cyan-400 bg-clip-text text-transparent">
            Choose Your Perfect Plan
          </h2>
          <p className="text-lg text-slate-300 max-w-3xl mx-auto">
            Competitive pricing designed for South African budgets and needs. 
            All plans include local content, premium sports, and 24/7 support.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {subscriptions.map((plan) => (
            <div
              key={plan.id}
              className={`relative bg-gradient-to-b from-slate-800/40 to-slate-900/60 rounded-2xl shadow-2xl border-2 overflow-hidden group transition-all duration-300 ${
                plan.popular
                  ? 'border-emerald-500 scale-105 shadow-emerald-500/20'
                  : 'border-slate-700/50 hover:border-emerald-500/30'
              }`}
            >
              {plan.popular && (
                <div className="absolute top-0 left-0 right-0 bg-gradient-to-r from-emerald-500 to-teal-500 text-white text-center py-2 font-bold text-sm">
                  🏆 Most Popular Choice
                </div>
              )}

              <div className={`p-6 ${plan.popular ? 'pt-12' : ''}`}>
                <div className="text-center mb-6">
                  <h3 className="text-xl font-bold text-white mb-2">{plan.title}</h3>
                  <p className="text-slate-400 mb-4 text-sm">{plan.description}</p>
                  <div>
                    <span className="text-4xl font-black text-emerald-400">{plan.price}</span>
                    <span className="text-slate-400 text-base">/{plan.duration}</span>
                  </div>
                </div>

                <ul className="space-y-3 mb-6">
                  {plan.features.map((feature, index) => (
                    <li key={index} className="flex items-start">
                      <div className="w-5 h-5 bg-emerald-500 rounded-full flex items-center justify-center mr-2 flex-shrink-0">
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
                  className={`w-full py-3 px-4 rounded-xl font-bold text-base transition-all duration-200 ${
                    plan.popular
                      ? 'bg-gradient-to-r from-emerald-500 to-teal-500 text-white hover:from-emerald-600 hover:to-teal-600 shadow-lg hover:shadow-emerald-500/25 hover:scale-105'
                      : 'bg-slate-700/50 text-slate-300 hover:bg-emerald-600 hover:text-white border border-slate-600 hover:border-emerald-500'
                  }`}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
