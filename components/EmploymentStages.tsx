
import React from 'react';
import * as Icons from 'lucide-react';
import { useLanguage } from './LanguageContext';
import { Stage } from '../types';
import FadeInSection from './FadeInSection';

const EmploymentStages: React.FC = () => {
  const { t } = useLanguage();
  const stages: Stage[] = t.stages.items;

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <FadeInSection>
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">{t.stages.title}</h2>
            <p className="text-gray-600">{t.stages.subtitle}</p>
          </div>
        </FadeInSection>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 relative">
          {/* Connecting Line (Desktop) */}
          <div className="hidden lg:block absolute top-12 left-0 w-full h-0.5 bg-gray-100 -z-0"></div>

          {stages.map((stage, index) => {
            const IconComponent = (Icons as any)[stage.icon] || Icons.Circle;
            return (
              <FadeInSection key={index} delay={`${index * 150}ms`}>
                <div className="relative z-10 flex flex-col items-center text-center group">
                  <div className="w-24 h-24 bg-white rounded-full border-4 border-primary-50 flex items-center justify-center mb-6 group-hover:border-primary-100 transition-colors shadow-sm">
                    <div className="w-16 h-16 bg-primary-600 text-white rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                      <IconComponent size={32} />
                    </div>
                  </div>
                  <div className="bg-primary-50 text-primary-700 font-bold px-3 py-1 rounded-full text-xs mb-3">
                     {t.stages.label} {stage.number}
                  </div>
                  <h3 className="text-lg font-bold mb-3 text-gray-900">{stage.title}</h3>
                  <p className="text-sm text-gray-600 leading-relaxed max-w-[200px]">
                    {stage.description}
                  </p>
                </div>
              </FadeInSection>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default EmploymentStages;
