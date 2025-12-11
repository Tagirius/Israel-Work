
import React, { useState, useEffect } from 'react';
import { DollarSign, Clock, Calendar } from 'lucide-react';
import { useLanguage } from './LanguageContext';
import FadeInSection from './FadeInSection';

const SalaryCalculator: React.FC = () => {
  const { t } = useLanguage();
  const [hourlyRate, setHourlyRate] = useState(40);
  const [hoursPerDay, setHoursPerDay] = useState(10);
  const [daysPerWeek, setDaysPerWeek] = useState(6);
  
  // Constants for conversion (approximate)
  const USD_RATE = 3.7; 
  
  const [monthlyNis, setMonthlyNis] = useState(0);
  const [monthlyUsd, setMonthlyUsd] = useState(0);

  useEffect(() => {
    // Average 4.3 weeks in a month
    const daily = hourlyRate * hoursPerDay;
    const weekly = daily * daysPerWeek;
    const monthly = weekly * 4.3;
    
    setMonthlyNis(Math.round(monthly));
    setMonthlyUsd(Math.round(monthly / USD_RATE));
  }, [hourlyRate, hoursPerDay, daysPerWeek]);

  return (
    <section id="calculator" className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-4xl mx-auto">
          <FadeInSection>
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">{t.calculator.title}</h2>
              <p className="text-gray-600">{t.calculator.subtitle}</p>
            </div>
          </FadeInSection>

          <FadeInSection delay="200ms">
            <div className="bg-gradient-to-br from-primary-900 to-primary-800 rounded-3xl p-6 md:p-10 shadow-2xl text-white">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                {/* Controls */}
                <div className="space-y-8">
                  {/* Hourly Rate */}
                  <div>
                    <div className="flex justify-between mb-2">
                      <label className="text-primary-100 font-medium flex items-center gap-2">
                        <DollarSign size={18} /> {t.calculator.hourlyRate}
                      </label>
                      <span className="text-2xl font-bold text-secondary-500">{hourlyRate} ₪</span>
                    </div>
                    <input 
                      type="range" 
                      min="30" 
                      max="80" 
                      step="1"
                      value={hourlyRate}
                      onChange={(e) => setHourlyRate(parseInt(e.target.value))}
                      className="w-full h-3 bg-primary-700 rounded-lg appearance-none cursor-pointer accent-secondary-500"
                    />
                    <div className="flex justify-between text-xs text-primary-300 mt-2">
                      <span>30 ₪</span>
                      <span>55 ₪</span>
                      <span>80 ₪</span>
                    </div>
                  </div>

                  {/* Hours per Day */}
                  <div>
                    <div className="flex justify-between mb-2">
                      <label className="text-primary-100 font-medium flex items-center gap-2">
                        <Clock size={18} /> {t.calculator.hoursPerDay}
                      </label>
                      <span className="text-xl font-bold">{hoursPerDay} {t.calculator.hours}</span>
                    </div>
                    <input 
                      type="range" 
                      min="8" 
                      max="14" 
                      step="1"
                      value={hoursPerDay}
                      onChange={(e) => setHoursPerDay(parseInt(e.target.value))}
                      className="w-full h-3 bg-primary-700 rounded-lg appearance-none cursor-pointer accent-secondary-500"
                    />
                    <div className="flex justify-between text-xs text-primary-300 mt-2">
                      <span>8 {t.calculator.hours}</span>
                      <span>11 {t.calculator.hours}</span>
                      <span>14 {t.calculator.hours}</span>
                    </div>
                  </div>

                  {/* Days per Week */}
                  <div>
                    <div className="flex justify-between mb-2">
                      <label className="text-primary-100 font-medium flex items-center gap-2">
                        <Calendar size={18} /> {t.calculator.daysPerWeek}
                      </label>
                      <span className="text-xl font-bold">{daysPerWeek} {t.calculator.days}</span>
                    </div>
                    <div className="flex gap-2">
                      {[5, 6].map((d) => (
                        <button
                          key={d}
                          onClick={() => setDaysPerWeek(d)}
                          className={`flex-1 py-3 rounded-xl font-bold transition-all ${
                            daysPerWeek === d 
                              ? 'bg-secondary-500 text-white shadow-lg transform scale-105' 
                              : 'bg-primary-700 text-primary-200 hover:bg-primary-600'
                          }`}
                        >
                          {d} {t.calculator.days}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Result */}
                <div className="flex flex-col justify-center items-center bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/10">
                  <h3 className="text-primary-200 text-lg mb-6 font-medium">{t.calculator.incomeTitle}</h3>
                  
                  <div className="text-center mb-8">
                    <div className="text-5xl md:text-6xl font-bold mb-2 tracking-tight">
                      {monthlyNis.toLocaleString()} <span className="text-3xl">₪</span>
                    </div>
                    <div className="text-primary-200 text-sm">{t.calculator.currencyNis}</div>
                  </div>

                  <div className="w-full h-px bg-primary-500/30 mb-8"></div>

                  <div className="text-center">
                    <div className="text-3xl md:text-4xl font-bold text-green-400 mb-1">
                      ≈ {monthlyUsd.toLocaleString()} $
                    </div>
                    <div className="text-primary-200 text-sm">{t.calculator.currencyUsd}</div>
                  </div>

                  <p className="mt-8 text-xs text-center text-primary-300">
                    {t.calculator.disclaimer}
                  </p>
                </div>
              </div>
            </div>
          </FadeInSection>
        </div>
      </div>
    </section>
  );
};

export default SalaryCalculator;
