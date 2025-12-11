
import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Check } from 'lucide-react';
import { SOCIAL_LINKS } from '../constants';
import { useLanguage } from './LanguageContext';
import { JobCategory } from '../types';
import FadeInSection from './FadeInSection';

const JobsCarousel: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(1);
  const { t } = useLanguage();
  const jobs: JobCategory[] = t.jobs.categories;

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setItemsPerPage(4);
      } else if (window.innerWidth >= 640) {
        setItemsPerPage(2);
      } else {
        setItemsPerPage(1);
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const nextSlide = () => {
    setCurrentIndex((prev) => 
      prev + itemsPerPage >= jobs.length ? 0 : prev + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => 
      prev === 0 ? Math.max(0, jobs.length - itemsPerPage) : prev - 1
    );
  };

  return (
    <section id="jobs" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <FadeInSection>
          <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-4">
            <div className="max-w-2xl">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">{t.jobs.title}</h2>
              <p className="text-gray-600">{t.jobs.subtitle}</p>
            </div>
            <div className="flex gap-2">
              <button 
                onClick={prevSlide}
                className="bg-white border border-gray-200 text-gray-800 p-3 rounded-full hover:bg-gray-100 transition-colors"
              >
                <ChevronLeft size={24} />
              </button>
              <button 
                onClick={nextSlide}
                className="bg-white border border-gray-200 text-gray-800 p-3 rounded-full hover:bg-gray-100 transition-colors"
              >
                <ChevronRight size={24} />
              </button>
            </div>
          </div>
        </FadeInSection>

        <FadeInSection delay="200ms">
          <div className="overflow-hidden">
            <div 
              className="flex transition-transform duration-500 ease-in-out gap-6"
              style={{ transform: `translateX(-${currentIndex * (100 / itemsPerPage)}%)` }}
            >
              {jobs.map((job, index) => (
                <div 
                  key={index} 
                  className="flex-shrink-0 w-full"
                  style={{ flexBasis: `calc(${100 / itemsPerPage}% - 18px)` }} 
                >
                  <div className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col h-full group border border-gray-100">
                    <div className="h-56 overflow-hidden relative">
                      <img src={job.image} alt={job.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                      <div className="absolute top-4 right-4 bg-white/95 backdrop-blur-sm px-3 py-1.5 rounded-full text-xs font-bold text-green-600 shadow-sm border border-green-100">
                        {job.salaryRange}
                      </div>
                    </div>
                    <div className="p-6 flex-1 flex flex-col">
                      <h3 className="text-xl font-bold mb-3">{job.title}</h3>
                      <ul className="space-y-2 mb-6 flex-1">
                        {job.requirements.map((req, i) => (
                          <li key={i} className="flex items-start gap-2 text-sm text-gray-600">
                            <Check size={16} className="text-secondary-500 mt-0.5 shrink-0" />
                            <span>{req}</span>
                          </li>
                        ))}
                      </ul>
                      <a 
                        href={SOCIAL_LINKS.telegramChannel} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="block w-full py-3 text-center border-2 border-primary-600 text-primary-600 rounded-xl hover:bg-primary-600 hover:text-white transition-colors font-bold"
                      >
                        {t.jobs.detailsBtn}
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </FadeInSection>
      </div>
    </section>
  );
};

export default JobsCarousel;
