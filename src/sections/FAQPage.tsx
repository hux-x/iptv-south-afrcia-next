// app/faq/page.tsx
import { faqs } from '../data/faqs';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import FAQAccordion from '../components/FAQAccordion';

const FAQPage = () => {
  const categories = ['All', ...Array.from(new Set(faqs.map(faq => faq.category)))];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-emerald-950 relative overflow-hidden">
      {/* Background Glow Elements */}
      <div className="absolute top-40 -left-32 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-40 -right-32 w-96 h-96 bg-teal-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      <div className="absolute top-1/3 left-1/2 transform -translate-x-1/2 w-[700px] h-[700px] bg-gradient-radial from-emerald-500/5 to-transparent rounded-full"></div>

      <Navbar />

      <div className="relative z-10 py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Page Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center bg-emerald-500/10 border border-emerald-500/20 rounded-full px-6 py-3 mb-8">
              <span className="w-2 h-2 bg-emerald-400 rounded-full mr-3 animate-pulse"></span>
              <span className="text-emerald-300 font-medium">Your IPTV Questions, Answered</span>
            </div>
            <h1 className="text-5xl lg:text-6xl font-black text-white leading-tight mb-6">
              Frequently Asked Questions
            </h1>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
              Get clear answers about our IPTV services, setup process, and support options.
            </p>
          </div>

          {/* FAQ Accordion */}
          <div className="bg-slate-900/60 backdrop-blur-md border border-emerald-500/20 rounded-3xl shadow-xl p-8">
            <FAQAccordion faqs={faqs} categories={categories} />
          </div>

          {/* Support CTA */}
          <div className="mt-16 text-center bg-gradient-to-br from-slate-900/90 to-emerald-900/90 backdrop-blur-md border border-emerald-500/30 rounded-3xl shadow-2xl p-10">
            <h3 className="text-3xl font-bold text-white mb-4">
              Still have questions?
            </h3>
            <p className="text-slate-300 mb-6">
              Our support team is available <span className="text-emerald-400 font-semibold">24/7</span> to help you.
            </p>
            <button className="bg-gradient-to-r from-emerald-500 to-teal-500 text-white px-10 py-4 rounded-2xl font-bold text-lg shadow-2xl hover:from-emerald-600 hover:to-teal-600 hover:shadow-emerald-500/25 transform hover:scale-105 transition-all duration-200">
              Contact Support
            </button>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default FAQPage;
