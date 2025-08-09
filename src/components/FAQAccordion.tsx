'use client';
import React, { useState } from 'react';

interface FAQ {
  id: string;
  question: string;
  answer: string;
  category: string;
}

interface Props {
  faqs: FAQ[];
  categories: string[];
}

const FAQAccordion: React.FC<Props> = ({ faqs, categories }) => {
  const [openItems, setOpenItems] = useState<string[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const filteredFAQs =
    selectedCategory === 'All'
      ? faqs
      : faqs.filter((faq) => faq.category === selectedCategory);

  const toggleItem = (id: string) => {
    setOpenItems((prev) =>
      prev.includes(id)
        ? prev.filter((item) => item !== id)
        : [...prev, id]
    );
  };

  return (
    <>
      {/* Category Filter */}
      <div className="mb-8">
        <div className="flex flex-wrap gap-3 justify-center">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-5 py-2.5 rounded-full font-medium transition-all border backdrop-blur-md ${
                selectedCategory === category
                  ? 'bg-gradient-to-r from-emerald-500 to-teal-500 text-white shadow-lg shadow-emerald-500/30 scale-105'
                  : 'bg-slate-900/50 border-emerald-500/20 text-slate-300 hover:bg-emerald-500/10 hover:text-emerald-300 hover:scale-105'
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      {/* FAQ Accordion */}
      <div className="space-y-5">
        {filteredFAQs.map((faq) => (
          <div
            key={faq.id}
            className="bg-slate-900/60 backdrop-blur-md rounded-2xl border border-emerald-500/20 shadow-lg hover:border-emerald-400/30 transition-all duration-200"
          >
            <button
              onClick={() => toggleItem(faq.id)}
              className="w-full px-6 py-5 text-left flex items-center justify-between group"
            >
              <span className="font-semibold text-white pr-4 group-hover:text-emerald-300 transition-colors">
                {faq.question}
              </span>
              <svg
                className={`w-5 h-5 text-emerald-400 transform transition-transform duration-300 ${
                  openItems.includes(faq.id) ? 'rotate-180' : ''
                }`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>

            {openItems.includes(faq.id) && (
              <div className="px-6 pb-5">
                <div className="pt-3 border-t border-emerald-500/20">
                  <p className="text-slate-300 leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </>
  );
};

export default FAQAccordion;
