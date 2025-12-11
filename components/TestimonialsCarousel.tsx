
import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Quote, Star, FileText, Music } from 'lucide-react';
import { useLanguage } from './LanguageContext';
import { Testimonial } from '../types';
import FadeInSection from './FadeInSection';

const TestimonialsCarousel: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(1);
  const { t } = useLanguage();
  const testimonials: Testimonial[] = t.testimonials.items;

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setItemsPerPage(3);
      } else if (window.innerWidth >= 768) {
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
      prev + itemsPerPage >= testimonials.length ? 0 : prev + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => 
      prev === 0 ? Math.max(0, testimonials.length - itemsPerPage) : prev - 1
    );
  };

  return (
    <section id="testimonials" className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <FadeInSection>
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">{t.testimonials.title}</h2>
            <p className="text-gray-600">{t.testimonials.subtitle}</p>
          </div>
        </FadeInSection>

        <FadeInSection delay="200ms">
          <div className="relative max-w-7xl mx-auto">
            <div className="overflow-hidden py-4">
              <div 
                className="flex transition-transform duration-500 ease-in-out gap-6"
                style={{ transform: `translateX(-${currentIndex * (100 / itemsPerPage)}%)` }}
              >
                {testimonials.map((t, index) => (
                  <div 
                    key={index} 
                    className="flex-shrink-0 w-full md:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)]"
                    style={{ flexBasis: `${100 / itemsPerPage}%` }}
                  >
                    <div className="bg-gray-50 rounded-2xl p-8 relative h-full flex flex-col border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                      <Quote className="absolute top-6 right-6 text-primary-200 w-10 h-10" />
                      
                      {/* Header: Avatar + Name */}
                      <div className="flex items-center gap-4 mb-4">
                        <img 
                          src={t.avatar} 
                          alt={t.name} 
                          className="w-14 h-14 rounded-full object-cover border-2 border-primary-100 shrink-0" 
                        />
                        <div>
                          <h4 className="font-bold text-gray-900">{t.name}</h4>
                          <p className="text-sm text-primary-600">{t.role}</p>
                        </div>
                      </div>

                      {/* Content: Text */}
                      <div className="mb-4 flex-1">
                        <p className="text-gray-600 italic leading-relaxed">"{t.text}"</p>
                      </div>

                      {/* Media Attachments */}
                      <div className="space-y-3 mb-4">
                         {t.video && (
                           <div className="rounded-xl overflow-hidden shadow-sm border border-gray-200">
                             <video
                               src={t.video}
                               poster={t.avatar}
                               className="w-full h-40 object-cover"
                               controls
                               playsInline
                             />
                           </div>
                         )}

                         {t.audio && (
                           <div className="bg-white p-2 rounded-xl border border-gray-200 flex items-center gap-2 shadow-sm">
                             <div className="w-8 h-8 bg-primary-100 rounded-full flex items-center justify-center text-primary-600 shrink-0">
                               <Music size={16} />
                             </div>
                             <audio controls className="w-full h-8" src={t.audio} />
                           </div>
                         )}

                         {t.verificationDoc && (
                           <div className="rounded-xl overflow-hidden border border-gray-200 group relative cursor-pointer shadow-sm">
                             <img src={t.verificationDoc} alt="Document Proof" className="w-full h-40 object-cover" />
                             <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                               <span className="text-white text-xs font-bold px-2 py-1 border border-white rounded">Просмотр</span>
                             </div>
                             <div className="bg-gray-100 px-3 py-1.5 flex items-center gap-2 text-xs font-medium text-gray-600 border-t border-gray-200">
                               <FileText size={12} className="text-green-600" />
                               Подтверждение (Документ)
                             </div>
                           </div>
                         )}
                      </div>

                      {/* Footer: Stars */}
                      <div className="flex gap-1 mt-auto text-secondary-500">
                        {[...Array(5)].map((_, i) => <Star key={i} size={14} fill="currentColor" />)}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <button 
              onClick={prevSlide}
              className="absolute top-1/2 -left-4 md:-left-12 -translate-y-1/2 bg-white text-gray-800 p-3 rounded-full shadow-lg hover:bg-gray-50 transition-colors z-10 border border-gray-100"
              aria-label="Previous testimonial"
            >
              <ChevronLeft size={24} />
            </button>
            <button 
              onClick={nextSlide}
              className="absolute top-1/2 -right-4 md:-right-12 -translate-y-1/2 bg-white text-gray-800 p-3 rounded-full shadow-lg hover:bg-gray-50 transition-colors z-10 border border-gray-100"
              aria-label="Next testimonial"
            >
              <ChevronRight size={24} />
            </button>
          </div>
        </FadeInSection>
      </div>
    </section>
  );
};

export default TestimonialsCarousel;
