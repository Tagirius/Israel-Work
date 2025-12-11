
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
    city: '',
    specialty: '',
    tripDate: '',
    workDuration: '',
    peopleCount: '',
    languages: '',
    skills: '',
    experienceAbroad: '',
    medicalIssues: '',
    hasBiometric: '',
    visitedBefore: '',
    hasRelatives: '',
    notes: ''
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
Город: ${formData.city || '-'}
Биометрический паспорт: ${formData.hasBiometric || '-'}
Были ли в Израиле: ${formData.visitedBefore || '-'}
Родственники в Израиле: ${formData.hasRelatives || '-'}
Языки: ${formData.languages || '-'}
Профессиональные навыки: ${formData.skills || '-'}
Опыт за границей: ${formData.experienceAbroad || '-'}
Мед. ограничения: ${formData.medicalIssues || '-'}
Дата поездки: ${formData.tripDate || '-'}
Срок работы: ${formData.workDuration || '-'}
Количество человек: ${formData.peopleCount || '-'}
Вакансия: ${formData.specialty || 'Не выбрано'}
Примечания: ${formData.notes || '-'}`;

    // Create WhatsApp URL
    const url = `https://wa.me/${targetPhone}?text=${encodeURIComponent(text)}`;

    // Open WhatsApp in a new tab
    window.open(url, '_blank');

    // Show success message
    setStatus(ApplicationStatus.SUCCESS);
    setFormData({ 
      name: '', phone: '', age: '', citizenship: '', city: '', specialty: '', 
      tripDate: '', workDuration: '', peopleCount: '', languages: '', skills: '', 
      experienceAbroad: '', medicalIssues: '', hasBiometric: '', visitedBefore: '', hasRelatives: '', notes: ''
    });
    
    // Hide success message after 5 seconds and show form again
    setTimeout(() => setStatus(ApplicationStatus.IDLE), 5000);
  };

  const jobCategories: JobCategory[] = t.jobs.categories || [];
  const citizenshipOptions: string[] = t.contact.citizenshipOptions || [];

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
          <div className="max-w-4xl mx-auto bg-white rounded-3xl shadow-xl overflow-hidden">
            
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
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Personal Info */}
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
                      <select
                        id="citizenship"
                        required
                        value={formData.citizenship}
                        onChange={(e) => setFormData({...formData, citizenship: e.target.value})}
                        className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-200 focus:border-primary-500 focus:bg-white focus:ring-2 focus:ring-primary-200 outline-none transition-all appearance-none"
                      >
                        <option value="">{t.contact.citizenshipPlace}</option>
                        {citizenshipOptions.map((opt, idx) => (
                          <option key={idx} value={opt}>{opt}</option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div>
                      <label htmlFor="city" className="block text-xs font-bold text-gray-600 uppercase mb-1">{t.contact.city}</label>
                      <input
                        type="text"
                        id="city"
                        value={formData.city}
                        onChange={(e) => setFormData({...formData, city: e.target.value})}
                        className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-200 focus:border-primary-500 focus:bg-white focus:ring-2 focus:ring-primary-200 outline-none transition-all"
                        placeholder={t.contact.cityPlace}
                      />
                    </div>
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
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
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
                    <div>
                      <label htmlFor="hasRelatives" className="block text-xs font-bold text-gray-600 uppercase mb-1">{t.contact.hasRelatives}</label>
                      <select
                        id="hasRelatives"
                        value={formData.hasRelatives}
                        onChange={(e) => setFormData({...formData, hasRelatives: e.target.value})}
                        className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-200 focus:border-primary-500 focus:bg-white focus:ring-2 focus:ring-primary-200 outline-none transition-all appearance-none"
                      >
                        <option value="">-</option>
                        <option value="Да">{t.contact.yes}</option>
                        <option value="Нет">{t.contact.no}</option>
                      </select>
                    </div>
                  </div>
                  
                  {/* Skills & Experience */}
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
                      <label htmlFor="experienceAbroad" className="block text-xs font-bold text-gray-600 uppercase mb-1">{t.contact.experienceAbroad}</label>
                      <input
                        type="text"
                        id="experienceAbroad"
                        value={formData.experienceAbroad}
                        onChange={(e) => setFormData({...formData, experienceAbroad: e.target.value})}
                        className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-200 focus:border-primary-500 focus:bg-white focus:ring-2 focus:ring-primary-200 outline-none transition-all"
                        placeholder={t.contact.experiencePlace}
                      />
                    </div>
                    <div>
                      <label htmlFor="medicalIssues" className="block text-xs font-bold text-gray-600 uppercase mb-1">{t.contact.medicalIssues}</label>
                      <input
                        type="text"
                        id="medicalIssues"
                        value={formData.medicalIssues}
                        onChange={(e) => setFormData({...formData, medicalIssues: e.target.value})}
                        className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-200 focus:border-primary-500 focus:bg-white focus:ring-2 focus:ring-primary-200 outline-none transition-all"
                        placeholder={t.contact.medicalPlace}
                      />
                    </div>
                  </div>

                  {/* Trip Details */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div>
                      <label htmlFor="tripDate" className="block text-xs font-bold text-gray-600 uppercase mb-1">{t.contact.tripDate}</label>
                      <input
                        type="text"
                        id="tripDate"
                        value={formData.tripDate}
                        onChange={(e) => setFormData({...formData, tripDate: e.target.value})}
                        className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-200 focus:border-primary-500 focus:bg-white focus:ring-2 focus:ring-primary-200 outline-none transition-all"
                        placeholder={t.contact.tripDatePlace}
                      />
                    </div>
                    <div>
                      <label htmlFor="workDuration" className="block text-xs font-bold text-gray-600 uppercase mb-1">{t.contact.workDuration}</label>
                      <input
                        type="text"
                        id="workDuration"
                        value={formData.workDuration}
                        onChange={(e) => setFormData({...formData, workDuration: e.target.value})}
                        className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-200 focus:border-primary-500 focus:bg-white focus:ring-2 focus:ring-primary-200 outline-none transition-all"
                        placeholder={t.contact.workDurationPlace}
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
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
                  </div>

                  <div>
                    <label htmlFor="notes" className="block text-xs font-bold text-gray-600 uppercase mb-1">{t.contact.notes}</label>
                    <textarea
                      id="notes"
                      value={formData.notes}
                      onChange={(e) => setFormData({...formData, notes: e.target.value})}
                      className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-200 focus:border-primary-500 focus:bg-white focus:ring-2 focus:ring-primary-200 outline-none transition-all min-h-[100px]"
                      placeholder={t.contact.notesPlace}
                    />
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
