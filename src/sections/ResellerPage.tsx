import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import TrialButton from '../components/TrialButton';

const Reseller = () => {
  const benefits = [
    {
      title: 'High Profit Margins in South Africa',
      description: 'Earn up to 50% profit on every IPTV subscription sold in South Africa. Our ZAR-based payment system makes it easy to manage your earnings.',
      icon: '💰',
    },
    {
      title: 'Local & Global Content',
      description: 'From SuperSport to SABC channels, plus global entertainment — all in one IPTV subscription.',
      icon: '📺',
    },
    {
      title: 'Complete Local Support',
      description: '24/7 technical support including South African time zone assistance and account managers.',
      icon: '🛠️',
    },
    {
      title: 'Marketing Tailored for South Africa',
      description: 'Advertising banners, videos, and sales scripts designed for the SA audience.',
      icon: '📈',
    },
    {
      title: 'Flexible ZAR Credit System',
      description: 'Buy credits in bulk in South African Rand (ZAR) with discounts for larger packages.',
      icon: '⚡',
    },
    {
      title: 'Training for SA Resellers',
      description: 'Step-by-step IPTV training with real-world examples from South African markets.',
      icon: '🎓',
    },
  ];

  const planLevels = [
    {
      id: 1,
      title: 'Starter Reseller SA',
      description: 'Perfect for individuals starting their IPTV business in South Africa.',
      features: [
        'Up to 50 active subscribers',
        'Basic marketing materials for SA',
        'Email support (business hours)',
        'Monthly billing in ZAR',
        'Access to reseller dashboard',
      ],
      cta: 'Start Small in SA'
    },
    {
      id: 2,
      title: 'Professional Reseller SA',
      description: 'Ideal for growing IPTV businesses with customers across Cape Town, Johannesburg, Durban, and beyond.',
      features: [
        'Up to 500 active subscribers',
        'Advanced SA marketing toolkit',
        'Priority email & chat support',
        'Weekly billing options',
        'Custom branding available',
        'Performance analytics',
      ],
      cta: 'Scale Across South Africa',
      popular: true
    },
    {
      id: 3,
      title: 'Enterprise Reseller SA',
      description: 'For large-scale IPTV operations with high volume needs in South Africa.',
      features: [
        'Unlimited subscribers',
        'Dedicated SA account manager',
        '24/7 phone support',
        'Custom ZAR billing solutions',
        'API access',
        'Advanced reporting',
        'Bulk activation tools',
      ],
      cta: 'Build Your IPTV Empire in SA'
    }
  ];

  const faq = [
    {
      q: 'Is IPTV legal in South Africa?',
      a: 'Yes, IPTV services are legal in South Africa as long as the content is licensed. Our platform operates within legal guidelines and provides licensed content from verified providers.'
    },
    {
      q: 'Will IPTV work with my South African internet connection?',
      a: 'Yes. Most IPTV channels work smoothly with internet speeds of 5 Mbps or higher. Fibre, LTE, and 5G connections in SA all work perfectly.'
    },
    {
      q: 'Does it include South African sports channels like SuperSport?',
      a: 'Yes, our packages include popular South African sports channels, including SuperSport, and coverage of PSL, Rugby, and Cricket.'
    },
    {
      q: 'Can I get paid in ZAR?',
      a: 'Absolutely. We offer ZAR payouts directly to your South African bank account.'
    },
  ];

  return (
    <div className="min-h-screen bg-gray-900">
      <Navbar />

      {/* Hero Section */}
      <div className="bg-gradient-to-br from-gray-800 to-gray-900 py-20 lg:py-28 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/patterns/grid.svg')] opacity-10 pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h1 className="text-4xl lg:text-6xl font-extrabold text-white mb-6 leading-tight">
            Become a Leading <span className="text-blue-400">IPTV Reseller</span> in South Africa
          </h1>
          <p className="text-lg lg:text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Join the fastest-growing IPTV reseller network in South Africa. Earn in ZAR, sell to your local community, and offer premium TV, movies, and sports.
          </p>
          <TrialButton 
            text='Start Your IPTV Business in South Africa' 
            className='bg-blue-600 text-white px-10 py-4 rounded-xl font-semibold text-lg shadow-lg hover:bg-blue-700 hover:shadow-xl transition-all'
          />
        </div>
      </div>

      {/* SA Market Insight */}
      <section className="py-20 bg-gray-800 border-b border-gray-700">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
            Why IPTV is Booming in South Africa
          </h2>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto mb-10">
            Rising DStv prices and increased internet speeds have made IPTV the preferred choice for South Africans looking for affordable, high-quality entertainment. From Cape Town to Johannesburg, customers are switching to IPTV for sports, movies, and global channels.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gray-900 p-6 rounded-xl border border-gray-700">
              <h3 className="text-xl font-semibold text-white mb-3">Affordable Alternative</h3>
              <p className="text-gray-300">Save up to 70% compared to traditional satellite TV services in South Africa.</p>
            </div>
            <div className="bg-gray-900 p-6 rounded-xl border border-gray-700">
              <h3 className="text-xl font-semibold text-white mb-3">Better Content</h3>
              <p className="text-gray-300">Access thousands of channels, including SA favourites like SuperSport, SABC, and Mzansi Magic.</p>
            </div>
            <div className="bg-gray-900 p-6 rounded-xl border border-gray-700">
              <h3 className="text-xl font-semibold text-white mb-3">Easy Payments</h3>
              <p className="text-gray-300">Customers can pay you directly in ZAR, via EFT, or mobile money services.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
              Why Choose Our IPTV Reseller Program in South Africa?
            </h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              From Durban to Pretoria, we provide everything you need to grow a successful IPTV business in South Africa.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {benefits.map((benefit, index) => (
              <div key={index} className="bg-gray-900 rounded-2xl shadow-lg p-8 text-center border border-gray-700 hover:border-blue-500 transition-all">
                <div className="text-5xl mb-5">{benefit.icon}</div>
                <h3 className="text-xl font-semibold text-white mb-3">{benefit.title}</h3>
                <p className="text-gray-300">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Plans Section */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
              IPTV Reseller Plans for South Africa
            </h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              Whether you’re just starting or scaling your IPTV business, we have a plan that works in South Africa.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {planLevels.map((plan) => (
              <div
                key={plan.id}
                className={`bg-gray-800 rounded-2xl shadow-lg hover:shadow-xl transition-all border-2 overflow-hidden ${
                  plan.popular ? 'border-blue-500 transform scale-105' : 'border-gray-700'
                }`}
              >
                {plan.popular && (
                  <div className="bg-blue-500 text-white text-center py-2 font-semibold">Most Popular in SA</div>
                )}
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.title}</h3>
                  <p className="text-gray-300 mb-6">{plan.description}</p>
                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, index) => (
                      <li key={index} className="flex items-start">
                        <svg
                          className="w-5 h-5 text-green-400 mr-3 mt-0.5 flex-shrink-0"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fillRule="evenodd"
                            d="M16.707 5.293a1 1 0 011.414 1.414l-8 8a1 1 0 01-1.414 0L4.293 10.707a1 1 0 011.414-1.414L8 11.586l7.293-7.293z"
                            clipRule="evenodd"
                          />
                        </svg>
                        <span className="text-gray-300">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <TrialButton 
                    text={plan.cta} 
                    className={`w-full py-3 px-6 rounded-lg font-semibold transition-colors ${
                      plan.popular
                        ? 'bg-blue-600 text-white hover:bg-blue-700'
                        : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
                    }`} 
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gray-800 border-t border-gray-700">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-10 text-center">
            IPTV Reseller South Africa – FAQs
          </h2>
          <div className="space-y-6">
            {faq.map((item, index) => (
              <div key={index} className="bg-gray-900 p-6 rounded-xl border border-gray-700">
                <h3 className="text-xl font-semibold text-white mb-2">{item.q}</h3>
                <p className="text-gray-300">{item.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Reseller;
