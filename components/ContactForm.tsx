
import React, { useState } from 'react';
import { Send, CheckCircle } from 'lucide-react';
import { ApplicationStatus, JobCategory } from '../types';
import { useLanguage } from './LanguageContext';
import FadeInSection from './FadeInSection';

const ContactForm: React.FC = () => {
  const { t } = useLanguage();
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    age: '',
    citizenship: '',
    specialty: '',
    tripDate: '',
    peopleCount: '',
    languages: '',
    skills: '',
    hasBiometric: '',
    visitedBefore: ''
  });
  const [status, setStatus] = useState<ApplicationStatus>(ApplicationStatus.IDLE);
  
  // WhatsApp number from requirements
  const targetPhone = "972555077625";

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Construct the message with Russian labels as requested
    const text = `Имя: ${formData.name || '-'}
Телефон: ${formData.phone || '-'}
Возраст: ${formData.age || '-'}
Гражданство: ${formData.citizenship || '-'}
Биометрический паспорт: ${formData.hasBiometric || '-'}
Были ли в Израиле: ${formData.visitedBefore || '-'}
Языки: ${formData.languages || '-'}
Профессиональные навыки: ${formData.skills || '-'}
Дата поездки: ${formData.tripDate || '-'}
Количество человек: ${formData.peopleCount || '-'}
Вакансия: ${formData.specialty || 'Не выбрано'}`;

    // Create WhatsApp URL
    const url = `https://wa.me/${targetPhone}?text=${encodeURIComponent(text)}`;

    // Open WhatsApp in a new tab
    window.open(url, '_blank');

    // Show success message
    setStatus(ApplicationStatus.SUCCESS);
    setFormData({ 
      name: '', phone: '', age: '', citizenship: '', specialty: '', 
      tripDate: '', peopleCount: '', languages: '', skills: '', hasBiometric: '', visitedBefore: ''
    });
    
    // Hide success message after 5 seconds and show form again
    setTimeout(() => setStatus(ApplicationStatus.IDLE), 5000);
  };

  const jobCategories: JobCategory[] = t.jobs.categories || [];

  return (
    <section id="contact" className="py-20 bg-primary-50 relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        
        {/* Section Header */}
        <FadeInSection>
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">{t.contact.title}</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              {t.contact.subtitle}
            </p>
          </div>
        </FadeInSection>

        <FadeInSection delay="200ms">
          <div className="max-w-3xl mx-auto bg-white rounded-3xl shadow-xl overflow-hidden">
            
            {/* Form Side */}
            <div className="p-8 md:p-12">
              {status === ApplicationStatus.SUCCESS ? (
                <div className="h-full flex flex-col items-center justify-center text-center space-y-4 animate-fade-in py-10">
                  <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center">
                    <CheckCircle size={32} />
                  </div>
                  <h4 className="text-2xl font-bold text-gray-800">{t.contact.successTitle}</h4>
                  <p className="text-gray-600 text-lg">{t.contact.successText}</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div>
                      <label htmlFor="name" className="block text-xs font-bold text-gray-600 uppercase mb-1">{t.contact.name}</label>
                      <input
                        type="text"
                        id="name"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({...formData, name: e.target.value})}
                        className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-200 focus:border-primary-500 focus:bg-white focus:ring-2 focus:ring-primary-200 outline-none transition-all"
                        placeholder={t.contact.namePlace}
                      />
                    </div>
                    <div>
                      <label htmlFor="phone" className="block text-xs font-bold text-gray-600 uppercase mb-1">{t.contact.phone}</label>
                      <input
                        type="tel"
                        id="phone"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({...formData, phone: e.target.value})}
                        className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-200 focus:border-primary-500 focus:bg-white focus:ring-2 focus:ring-primary-200 outline-none transition-all"
                        placeholder={t.contact.phonePlace}
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div>
                      <label htmlFor="age" className="block text-xs font-bold text-gray-600 uppercase mb-1">{t.contact.age}</label>
                      <input
                        type="number"
                        id="age"
                        required
                        value={formData.age}
                        onChange={(e) => setFormData({...formData, age: e.target.value})}
                        className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-200 focus:border-primary-500 focus:bg-white focus:ring-2 focus:ring-primary-200 outline-none transition-all"
                        placeholder={t.contact.agePlace}
                      />
                    </div>
                    <div>
                      <label htmlFor="citizenship" className="block text-xs font-bold text-gray-600 uppercase mb-1">{t.contact.citizenship}</label>
                      <input
                        type="text"
                        id="citizenship"
                        required
                        value={formData.citizenship}
                        onChange={(e) => setFormData({...formData, citizenship: e.target.value})}
                        className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-200 focus:border-primary-500 focus:bg-white focus:ring-2 focus:ring-primary-200 outline-none transition-all"
                        placeholder={t.contact.citizenshipPlace}
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div>
                      <label htmlFor="hasBiometric" className="block text-xs font-bold text-gray-600 uppercase mb-1">{t.contact.biometric}</label>
                      <select
                        id="hasBiometric"
                        required
                        value={formData.hasBiometric}
                        onChange={(e) => setFormData({...formData, hasBiometric: e.target.value})}
                        className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-200 focus:border-primary-500 focus:bg-white focus:ring-2 focus:ring-primary-200 outline-none transition-all appearance-none"
                      >
                        <option value="">-</option>
                        <option value="Да">{t.contact.yes}</option>
                        <option value="Нет">{t.contact.no}</option>
                      </select>
                    </div>
                    <div>
                      <label htmlFor="visitedBefore" className="block text-xs font-bold text-gray-600 uppercase mb-1">{t.contact.visited}</label>
                      <select
                        id="visitedBefore"
                        required
                        value={formData.visitedBefore}
                        onChange={(e) => setFormData({...formData, visitedBefore: e.target.value})}
                        className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-200 focus:border-primary-500 focus:bg-white focus:ring-2 focus:ring-primary-200 outline-none transition-all appearance-none"
                      >
                        <option value="">-</option>
                        <option value="Да">{t.contact.yes}</option>
                        <option value="Нет">{t.contact.no}</option>
                      </select>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div>
                      <label htmlFor="languages" className="block text-xs font-bold text-gray-600 uppercase mb-1">{t.contact.languages}</label>
                      <input
                        type="text"
                        id="languages"
                        value={formData.languages}
                        onChange={(e) => setFormData({...formData, languages: e.target.value})}
                        className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-200 focus:border-primary-500 focus:bg-white focus:ring-2 focus:ring-primary-200 outline-none transition-all"
                        placeholder={t.contact.languagesPlace}
                      />
                    </div>
                    <div>
                      <label htmlFor="skills" className="block text-xs font-bold text-gray-600 uppercase mb-1">{t.contact.skills}</label>
                      <input
                        type="text"
                        id="skills"
                        value={formData.skills}
                        onChange={(e) => setFormData({...formData, skills: e.target.value})}
                        className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-200 focus:border-primary-500 focus:bg-white focus:ring-2 focus:ring-primary-200 outline-none transition-all"
                        placeholder={t.contact.skillsPlace}
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div>
                      <label htmlFor="tripDate" className="block text-xs font-bold text-gray-600 uppercase mb-1">{t.contact.tripDate}</label>
                      <input
                        type="date"
                        id="tripDate"
                        value={formData.tripDate}
                        onChange={(e) => setFormData({...formData, tripDate: e.target.value})}
                        className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-200 focus:border-primary-500 focus:bg-white focus:ring-2 focus:ring-primary-200 outline-none transition-all"
                        placeholder={t.contact.tripDatePlace}
                      />
                    </div>
                    <div>
                      <label htmlFor="peopleCount" className="block text-xs font-bold text-gray-600 uppercase mb-1">{t.contact.peopleCount}</label>
                      <input
                        type="number"
                        id="peopleCount"
                        value={formData.peopleCount}
                        onChange={(e) => setFormData({...formData, peopleCount: e.target.value})}
                        className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-200 focus:border-primary-500 focus:bg-white focus:ring-2 focus:ring-primary-200 outline-none transition-all"
                        placeholder={t.contact.peopleCountPlace}
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="specialty" className="block text-xs font-bold text-gray-600 uppercase mb-1">{t.contact.job}</label>
                    <select
                      id="specialty"
                      value={formData.specialty}
                      onChange={(e) => setFormData({...formData, specialty: e.target.value})}
                      className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-200 focus:border-primary-500 focus:bg-white focus:ring-2 focus:ring-primary-200 outline-none transition-all appearance-none"
                    >
                      <option value="">{t.contact.jobPlace}</option>
                      {jobCategories.map((job, idx) => (
                        <option key={idx} value={job.title}>{job.title}</option>
                      ))}
                      <option value="Other">Other / Другое</option>
                    </select>
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-green-500 hover:bg-green-600 text-white font-bold py-4 rounded-xl shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1 flex items-center justify-center gap-2"
                  >
                     <span>{t.contact.btnSubmit}</span>
                     <Send className="w-5 h-5" />
                  </button>
                  
                  <p className="text-xs text-center text-gray-400">
                    {t.contact.disclaimer}
                  </p>
                </form>
              )}
            </div>
          </div>
        </FadeInSection>
      </div>
    </section>
  );
};

export default ContactForm;
