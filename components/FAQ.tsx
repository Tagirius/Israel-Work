import React, { useState } from 'react';
import { Plus, Minus, HelpCircle } from 'lucide-react';
import { useLanguage } from './LanguageContext';
import { FAQItem } from '../types';

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const { t } = useLanguage();
  const faqItems: FAQItem[] = t.faq.items;

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-20 bg-primary-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center p-3 bg-white rounded-full text-primary-600 mb-4 shadow-sm">
            <HelpCircle size={24} />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">{t.faq.title}</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            {t.faq.subtitle}
          </p>
        </div>

        <div className="max-w-3xl mx-auto space-y-4">
          {faqItems.map((item, index) => (
            <div 
              key={index} 
              className={`bg-white rounded-xl overflow-hidden transition-all duration-300 border ${
                openIndex === index ? 'border-primary-500 shadow-md' : 'border-gray-200 hover:border-primary-200'
              }`}
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-6 py-5 flex justify-between items-center text-left focus:outline-none"
              >
                <span className={`text-lg font-bold pr-4 ${openIndex === index ? 'text-primary-700' : 'text-gray-800'}`}>
                  {item.question}
                </span>
                <span className={`shrink-0 transition-transform duration-300 ${openIndex === index ? 'rotate-180 text-primary-600' : 'text-gray-400'}`}>
                  {openIndex === index ? <Minus size={20} /> : <Plus size={20} />}
                </span>
              </button>
              
              <div 
                className={`transition-all duration-300 ease-in-out overflow-hidden ${
                  openIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                <div className="px-6 pb-6 pt-0 text-gray-600 leading-relaxed border-t border-transparent">
                  {item.answer}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;