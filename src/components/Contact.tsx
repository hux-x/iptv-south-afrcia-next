import React from 'react';
import ContactForm from './ContactForm'; 

export default function Contact() {
  return (
    <section className="py-20 bg-gradient-to-br from-slate-950 via-slate-900 to-emerald-950 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-20 -right-20 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-20 -left-20 w-96 h-96 bg-teal-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-emerald-500/10 border border-emerald-500/20 rounded-full px-6 py-3 mb-8">
            <span className="text-emerald-300 font-medium">🇿🇦 Local South African Support</span>
          </div>
          <h2 className="text-4xl lg:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-emerald-400 via-teal-400 to-cyan-400 bg-clip-text text-transparent">
              Get in Touch
            </span>
          </h2>
          <p className="text-xl text-slate-300 max-w-4xl mx-auto leading-relaxed">
            Have questions about our South African IPTV services? Our expert support team is here 
            to help you 24/7 with setup, DStv alternatives, and technical assistance.
          </p>
        </div>

        <div className="grid grid-cols-1 xl:grid-cols-2 gap-16">
          {/* Contact Information */}
          <div>
            <div className="bg-gradient-to-br from-slate-800/50 to-emerald-900/20 rounded-3xl shadow-2xl p-10 border border-emerald-500/20 backdrop-blur-sm">
              <div className="flex items-center mb-8">
                <div className="w-12 h-12 bg-gradient-to-br from-emerald-400 to-teal-500 rounded-xl flex items-center justify-center mr-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className="text-3xl font-bold text-emerald-300">Contact Information</h3>
              </div>

              <div className="space-y-8">
                {/* Email */}
                <div className="flex items-start group">
                  <div className="bg-gradient-to-br from-blue-500/20 to-cyan-500/20 p-4 rounded-2xl mr-6 border border-blue-500/20 group-hover:border-blue-400/40 transition-all duration-200">
                    <svg className="w-8 h-8 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div className="flex-1">
                    <div className="font-bold text-white text-lg mb-1">Email Support</div>
                    <div className="text-slate-300 text-lg mb-2">support@saiptvpro.co.za</div>
                    <div className="text-slate-400 text-sm">Response within 2 hours • Available in English & Afrikaans</div>
                  </div>
                </div>

                {/* WhatsApp */}
                <div className="flex items-start group">
                  <div className="bg-gradient-to-br from-green-500/20 to-emerald-500/20 p-4 rounded-2xl mr-6 border border-green-500/20 group-hover:border-green-400/40 transition-all duration-200">
                    <svg className="w-8 h-8 text-green-400" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
                    </svg>
                  </div>
                  <a
                    href="https://wa.me/27123456789"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 hover:bg-green-500/5 rounded-xl p-2 -m-2 transition-all duration-200"
                  >
                    <div className="font-bold text-white text-lg mb-1">WhatsApp Support</div>
                    <div className="text-slate-300 text-lg mb-2">+27 12 345 6789</div>
                    <div className="text-slate-400 text-sm">Instant replies • Setup assistance • Technical help</div>
                  </a>
                </div>

                {/* Phone */}
                <div className="flex items-start group">
                  <div className="bg-gradient-to-br from-purple-500/20 to-pink-500/20 p-4 rounded-2xl mr-6 border border-purple-500/20 group-hover:border-purple-400/40 transition-all duration-200">
                    <svg className="w-8 h-8 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div className="flex-1">
                    <div className="font-bold text-white text-lg mb-1">Phone Support</div>
                    <div className="text-slate-300 text-lg mb-2">+27 11 234 5678</div>
                    <div className="text-slate-400 text-sm">Call center hours: 08:00 - 22:00 (SAST) • Local rates apply</div>
                  </div>
                </div>

                {/* Support Hours */}
                <div className="flex items-start group">
                  <div className="bg-gradient-to-br from-amber-500/20 to-orange-500/20 p-4 rounded-2xl mr-6 border border-amber-500/20 group-hover:border-amber-400/40 transition-all duration-200">
                    <svg className="w-8 h-8 text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div className="flex-1">
                    <div className="font-bold text-white text-lg mb-1">24/7 Customer Support</div>
                    <div className="text-slate-300 text-lg mb-2">Always available to help</div>
                    <div className="text-slate-400 text-sm">Live chat, email, and emergency technical support</div>
                  </div>
                </div>
              </div>

              {/* Special Features */}
              <div className="mt-10 pt-8 border-t border-slate-700/50">
                <h4 className="text-lg font-bold text-white mb-4">🇿🇦 Local South African Benefits</h4>
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-emerald-500/10 rounded-lg p-3 border border-emerald-500/20">
                    <div className="text-emerald-400 font-semibold text-sm">Local Support Team</div>
                    <div className="text-slate-400 text-xs">Based in South Africa</div>
                  </div>
                  <div className="bg-teal-500/10 rounded-lg p-3 border border-teal-500/20">
                    <div className="text-teal-400 font-semibold text-sm">No International Charges</div>
                    <div className="text-slate-400 text-xs">Local phone rates</div>
                  </div>
                  <div className="bg-cyan-500/10 rounded-lg p-3 border border-cyan-500/20">
                    <div className="text-cyan-400 font-semibold text-sm">Multi-Language</div>
                    <div className="text-slate-400 text-xs">English & Afrikaans</div>
                  </div>
                  <div className="bg-blue-500/10 rounded-lg p-3 border border-blue-500/20">
                    <div className="text-blue-400 font-semibold text-sm">DStv Knowledge</div>
                    <div className="text-slate-400 text-xs">Expert comparisons</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <div className="bg-gradient-to-br from-slate-800/50 to-teal-900/20 rounded-3xl shadow-2xl p-10 border border-teal-500/20 backdrop-blur-sm">
              <div className="flex items-center mb-8">
                <div className="w-12 h-12 bg-gradient-to-br from-teal-400 to-emerald-500 rounded-xl flex items-center justify-center mr-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                  </svg>
                </div>
                <h3 className="text-3xl font-bold text-teal-300">Send us a Message</h3>
              </div>
              
              <div className="mb-6">
                <p className="text-slate-300 leading-relaxed">
                  Get personalized assistance with your IPTV needs. Whether you&#39;re looking for a DStv alternative, 
                  need help with setup, or have questions about our South African content packages, we&#39;re here to help.
                </p>
              </div>
              
              <ContactForm />
              
              {/* Quick Help Topics */}
              <div className="mt-8 pt-6 border-t border-slate-700/50">
                <h4 className="text-lg font-bold text-white mb-4">Popular Support Topics:</h4>
                <div className="flex flex-wrap gap-2">
                  {[
                    "DStv vs IPTV Comparison",
                    "Setup Guide",
                    "Channel Lists", 
                    "Sports Packages",
                    "Billing Questions",
                    "Technical Issues"
                  ].map((topic, index) => (
                    <span 
                      key={index}
                      className="bg-slate-700/50 hover:bg-teal-500/20 text-slate-300 hover:text-teal-300 text-xs px-3 py-1 rounded-full border border-slate-600 hover:border-teal-500/30 transition-all cursor-pointer"
                    >
                      {topic}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="mt-20">
          <div className="bg-gradient-to-r from-emerald-900/30 to-teal-900/30 rounded-3xl p-12 text-center border border-emerald-500/20 backdrop-blur-sm">
            <h3 className="text-3xl font-bold mb-4">
              <span className="bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent">
                Need Immediate Help?
              </span>
            </h3>
            <p className="text-slate-300 mb-8 max-w-2xl mx-auto text-lg">
              For urgent technical issues or immediate setup assistance, contact us directly via WhatsApp 
              for the fastest response time.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://wa.me/27123456789"
                target="_blank"
                rel="noopener noreferrer" 
                className="bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-2xl font-bold text-lg transition-all duration-200 shadow-lg hover:shadow-green-500/25 transform hover:scale-105 flex items-center justify-center"
              >
                <svg className="w-6 h-6 mr-2" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
                </svg>
                WhatsApp Now
              </a>
              <a 
                href="mailto:support@saiptvpro.co.za"
                className="border-2 border-emerald-400/50 text-emerald-300 px-8 py-4 rounded-2xl font-bold text-lg hover:bg-emerald-900/30 hover:border-emerald-400 transition-all duration-200"
              >
                Email Support
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}