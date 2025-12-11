
import React from 'react';
import Header from './components/Header';
import AIConsultant from './components/AIConsultant';
import ContactForm from './components/ContactForm';
import FAQ from './components/FAQ';
import JobsCarousel from './components/JobsCarousel';
import EmploymentStages from './components/EmploymentStages';
import BudgetPlanner from './components/BudgetPlanner';
import FadeInSection from './components/FadeInSection';
import { SOCIAL_LINKS } from './constants';
import * as Icons from 'lucide-react';
import { Instagram, Send } from 'lucide-react';
import { LanguageProvider, useLanguage } from './components/LanguageContext';
import { ServiceItem } from './types';

// Separate component to use hook inside provider
const MainContent: React.FC = () => {
  const { t } = useLanguage();
  const services: ServiceItem[] = t.services.items;

  return (
    <div className="min-h-screen bg-gray-50 font-sans text-gray-800">
      <Header />
      
      {/* Hero Section */}
      <section id="hero" className="relative h-[85vh] flex items-center justify-center overflow-hidden">
        {/* Background Image with Overlay - TEL AVIV */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1544971587-b842c27f8e14?q=80&w=1920&auto=format&fit=crop" 
            alt="Tel Aviv Skyline" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary-900/95 to-primary-800/80" />
        </div>

        <div className="container mx-auto px-4 md:px-6 relative z-10 text-center md:text-left pt-24 md:pt-0">
          <div className="max-w-3xl">
            <FadeInSection>
              <div className="hidden md:inline-block px-4 py-1.5 bg-secondary-500 text-white text-xs font-bold rounded-full mb-6 uppercase tracking-wider">
                {t.hero.badge}
              </div>
              <h1 className="text-4xl md:text-6xl md:leading-tight font-extrabold text-white mb-6 drop-shadow-md">
                {t.hero.title}
              </h1>
              <p className="text-lg md:text-xl text-white/90 mb-8 max-w-xl leading-relaxed drop-shadow-sm font-medium">
                {t.hero.subtitle}
              </p>
              
              {/* Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <a 
                  href="#contact"
                  className="px-8 py-4 bg-white hover:bg-gray-100 text-primary-700 text-lg font-bold rounded-lg shadow-xl hover:shadow-2xl transition-all transform hover:-translate-y-1 text-center"
                >
                  {t.hero.btnConsult}
                </a>
                <a 
                  href={SOCIAL_LINKS.telegramChannel}
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="px-8 py-4 bg-blue-500 hover:bg-blue-600 border border-blue-400 text-white text-lg font-bold rounded-lg transition-all text-center flex items-center justify-center gap-2"
                >
                  <Send size={20} /> {t.hero.btnJobs}
                </a>
              </div>
            </FadeInSection>
            
            {/* Features */}
            <FadeInSection delay="300ms">
              <div className="mt-12 flex flex-wrap items-center gap-x-8 gap-y-4 text-white/90 text-sm font-medium">
                <div className="flex items-center gap-2">
                  <Icons.CheckCircle className="text-secondary-500 w-5 h-5" />
                  <span>{t.hero.features.insurance}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Icons.CheckCircle className="text-secondary-500 w-5 h-5" />
                  <span>{t.hero.features.legalization}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Icons.CheckCircle className="text-secondary-500 w-5 h-5" />
                  <span>{t.hero.features.transfer}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Icons.CheckCircle className="text-secondary-500 w-5 h-5" />
                  <span>{t.hero.features.support}</span>
                </div>
              </div>
            </FadeInSection>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <FadeInSection>
            <div className="text-center mb-16 max-w-2xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">{t.services.title}</h2>
              <p className="text-gray-600">{t.services.subtitle}</p>
            </div>
          </FadeInSection>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => {
              const IconComponent = (Icons as any)[service.icon] || Icons.HelpCircle;
              return (
                <FadeInSection key={index} delay={`${index * 150}ms`}>
                  <div className="bg-gray-50 rounded-2xl p-6 hover:shadow-lg transition-shadow border border-gray-100 group h-full">
                    <div className="w-14 h-14 bg-primary-100 text-primary-600 rounded-xl flex items-center justify-center mb-6 group-hover:bg-primary-600 group-hover:text-white transition-colors">
                      <IconComponent size={28} />
                    </div>
                    <h3 className="text-xl font-bold mb-3 text-gray-800">{service.title}</h3>
                    <p className="text-gray-600 leading-relaxed text-sm">
                      {service.description}
                    </p>
                  </div>
                </FadeInSection>
              );
            })}
          </div>
        </div>
      </section>

      {/* Jobs Carousel */}
      <JobsCarousel />

      {/* Combined Budget Planner (Replaces Salary & Flight Calculators) */}
      <BudgetPlanner />

      {/* Employment Stages - Moved before Contact Form */}
      <EmploymentStages />

      {/* Contact Form */}
      <ContactForm />

      {/* FAQ */}
      <FAQ />

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-300 py-12 border-t border-gray-800">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div className="col-span-1 md:col-span-1">
               <div className="flex flex-col gap-1 mb-4">
                  <span className="text-xl font-bold text-white tracking-widest">ISRAEL WORK</span>
                  <span className="text-xs text-primary-400 uppercase tracking-wider">Работа в Израиле</span>
              </div>
              <p className="text-sm text-gray-400 mb-6">
                {t.footer.desc}
              </p>
              <div className="flex gap-4">
                <a href={SOCIAL_LINKS.instagram} className="text-gray-400 hover:text-white transition-colors"><Instagram /></a>
                <a href={SOCIAL_LINKS.telegramChannel} className="text-gray-400 hover:text-white transition-colors"><Send /></a>
              </div>
            </div>
            
            <div>
              <h4 className="text-white font-semibold mb-4">{t.footer.contacts}</h4>
              <ul className="space-y-2 text-sm">
                <li className="flex items-center gap-2"><Icons.MapPin size={14} /> {t.contact.officeAddr}</li>
                <li className="flex items-center gap-2">
                  <Icons.Phone size={14} /> 
                  <a href={SOCIAL_LINKS.whatsapp} className="hover:text-white">{SOCIAL_LINKS.phoneDisplay}</a>
                </li>
              </ul>
            </div>

            <div className="col-span-1 md:col-span-2">
                <div className="p-6 bg-gray-800 rounded-xl">
                   <h4 className="text-white font-semibold mb-2">{t.footer.questions}</h4>
                   <p className="text-sm mb-4">{t.footer.questionsText}</p>
                   <a href={SOCIAL_LINKS.whatsapp} className="inline-block bg-green-600 text-white px-4 py-2 rounded-lg text-sm font-bold hover:bg-green-700 transition-colors">
                     {t.footer.writeMgr}
                   </a>
                </div>
            </div>
          </div>
          
          <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center text-sm">
            <p>{t.footer.rights}</p>
          </div>
        </div>
      </footer>

      <AIConsultant />
    </div>
  );
};

const App: React.FC = () => {
  return (
    <LanguageProvider>
      <MainContent />
    </LanguageProvider>
  );
};

export default App;
