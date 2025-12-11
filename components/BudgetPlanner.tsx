
import React, { useState, useEffect } from 'react';
import { DollarSign, Clock, Calendar, Plane, Luggage, User, Users, Utensils, ExternalLink, Calculator, ShoppingBasket, ChevronRight } from 'lucide-react';
import { useLanguage } from './LanguageContext';
import FadeInSection from './FadeInSection';

type Tab = 'salary' | 'flight' | 'food';

const BudgetPlanner: React.FC = () => {
  const { t } = useLanguage();
  const [activeTab, setActiveTab] = useState<Tab>('salary');

  return (
    <section id="budget" className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <FadeInSection>
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">{t.budget.title}</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              {t.budget.subtitle}
            </p>
          </div>
        </FadeInSection>

        <FadeInSection delay="200ms">
          <div className="max-w-5xl mx-auto bg-white rounded-3xl shadow-xl border border-gray-100 overflow-hidden">
            {/* Tabs */}
            <div className="flex border-b border-gray-100 overflow-x-auto">
              <button
                onClick={() => setActiveTab('salary')}
                className={`flex-1 py-4 px-6 text-sm md:text-base font-bold flex items-center justify-center gap-2 transition-all whitespace-nowrap ${
                  activeTab === 'salary' 
                    ? 'text-primary-600 bg-primary-50 border-b-2 border-primary-600' 
                    : 'text-gray-500 hover:text-gray-800 hover:bg-gray-50'
                }`}
              >
                <Calculator size={20} />
                {t.budget.tabs.salary}
              </button>
              
              <button
                onClick={() => setActiveTab('flight')}
                className={`flex-1 py-4 px-6 text-sm md:text-base font-bold flex items-center justify-center gap-2 transition-all whitespace-nowrap ${
                  activeTab === 'flight' 
                    ? 'text-primary-600 bg-primary-50 border-b-2 border-primary-600' 
                    : 'text-gray-500 hover:text-gray-800 hover:bg-gray-50'
                }`}
              >
                <Plane size={20} />
                {t.budget.tabs.flight}
              </button>

              <button
                onClick={() => setActiveTab('food')}
                className={`flex-1 py-4 px-6 text-sm md:text-base font-bold flex items-center justify-center gap-2 transition-all whitespace-nowrap ${
                  activeTab === 'food' 
                    ? 'text-primary-600 bg-primary-50 border-b-2 border-primary-600' 
                    : 'text-gray-500 hover:text-gray-800 hover:bg-gray-50'
                }`}
              >
                <Utensils size={20} />
                {t.budget.tabs.food}
              </button>
            </div>

            {/* Content Area */}
            <div className="p-6 md:p-10 min-h-[500px] bg-gray-50/50">
              {activeTab === 'salary' && <SalaryTab />}
              {activeTab === 'flight' && <FlightTab />}
              {activeTab === 'food' && <FoodTab />}
            </div>
          </div>
        </FadeInSection>
      </div>
    </section>
  );
};

// --- Sub-Components ---

const SalaryTab: React.FC = () => {
  const { t } = useLanguage();
  const [hourlyRate, setHourlyRate] = useState(40);
  const [hoursPerDay, setHoursPerDay] = useState(10);
  const [daysPerWeek, setDaysPerWeek] = useState(6);
  
  const USD_RATE = 3.7;
  const [monthlyNis, setMonthlyNis] = useState(0);
  const [monthlyUsd, setMonthlyUsd] = useState(0);

  useEffect(() => {
    const daily = hourlyRate * hoursPerDay;
    const weekly = daily * daysPerWeek;
    const monthly = weekly * 4.3;
    setMonthlyNis(Math.round(monthly));
    setMonthlyUsd(Math.round(monthly / USD_RATE));
  }, [hourlyRate, hoursPerDay, daysPerWeek]);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 animate-fade-in">
      <div className="space-y-8">
        <div>
          <div className="flex justify-between mb-2">
            <label className="text-gray-700 font-bold flex items-center gap-2">
              <DollarSign size={18} className="text-primary-600" /> {t.calculator.hourlyRate}
            </label>
            <span className="text-2xl font-bold text-primary-600">{hourlyRate} ₪</span>
          </div>
          <input 
            type="range" min="30" max="80" step="1" value={hourlyRate}
            onChange={(e) => setHourlyRate(parseInt(e.target.value))}
            className="w-full h-3 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-primary-600"
          />
        </div>

        <div>
          <div className="flex justify-between mb-2">
            <label className="text-gray-700 font-bold flex items-center gap-2">
              <Clock size={18} className="text-primary-600" /> {t.calculator.hoursPerDay}
            </label>
            <span className="text-xl font-bold text-gray-800">{hoursPerDay} {t.calculator.hours}</span>
          </div>
          <input 
            type="range" min="8" max="14" step="1" value={hoursPerDay}
            onChange={(e) => setHoursPerDay(parseInt(e.target.value))}
            className="w-full h-3 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-primary-600"
          />
        </div>

        <div>
          <div className="flex justify-between mb-2">
            <label className="text-gray-700 font-bold flex items-center gap-2">
              <Calendar size={18} className="text-primary-600" /> {t.calculator.daysPerWeek}
            </label>
            <span className="text-xl font-bold text-gray-800">{daysPerWeek} {t.calculator.days}</span>
          </div>
          <div className="flex gap-2">
            {[5, 6].map((d) => (
              <button
                key={d}
                onClick={() => setDaysPerWeek(d)}
                className={`flex-1 py-3 rounded-xl font-bold transition-all ${
                  daysPerWeek === d 
                    ? 'bg-primary-600 text-white shadow-lg' 
                    : 'bg-white text-gray-600 border border-gray-200 hover:bg-gray-100'
                }`}
              >
                {d} {t.calculator.days}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="flex flex-col justify-center items-center bg-white rounded-2xl p-8 border border-gray-100 shadow-sm">
        <h3 className="text-gray-500 text-lg mb-6 font-medium">{t.calculator.incomeTitle}</h3>
        <div className="text-center mb-8">
          <div className="text-5xl md:text-6xl font-bold mb-2 text-gray-900 tracking-tight">
            {monthlyNis.toLocaleString()} <span className="text-3xl text-gray-400">₪</span>
          </div>
          <div className="text-gray-400 text-sm">{t.calculator.currencyNis}</div>
        </div>
        <div className="w-full h-px bg-gray-100 mb-8"></div>
        <div className="text-center">
          <div className="text-3xl md:text-4xl font-bold text-green-600 mb-1">
            ≈ {monthlyUsd.toLocaleString()} $
          </div>
          <div className="text-gray-400 text-sm">{t.calculator.currencyUsd}</div>
        </div>
        <p className="mt-8 text-xs text-center text-gray-400 max-w-xs">
          {t.calculator.disclaimer}
        </p>
      </div>
    </div>
  );
};

const FoodTab: React.FC = () => {
  const { t } = useLanguage();
  const [menCount, setMenCount] = useState(1);
  const [womenCount, setWomenCount] = useState(0);
  const [lifestyle, setLifestyle] = useState<'economy' | 'standard' | 'premium'>('standard');
  
  const USD_RATE = 3.7;

  // Base costs per person/month in NIS
  // Men slightly higher than base average, women slightly lower based on avg caloric needs in budget models
  const costs = {
    economy: 1100, // Mostly home cooking, basics
    standard: 1650, // Balanced, some snacks
    premium: 2400  // Eating out, varied diet
  };

  const totalNis = Math.round(
      (menCount * costs[lifestyle] * 1.0) + 
      (womenCount * costs[lifestyle] * 0.9)
  );
  
  // Apply small discount for shared household if total people > 1
  const finalNis = (menCount + womenCount) > 1 ? Math.round(totalNis * 0.95) : totalNis;
  const totalUsd = Math.round(finalNis / USD_RATE);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 animate-fade-in">
       <div className="space-y-8">
         {/* Composition */}
         <div>
            <label className="block text-gray-700 font-bold mb-3 flex items-center gap-2">
               <Users size={18} className="text-primary-600" /> {t.budget.food.genderLabel}
            </label>
            <div className="grid grid-cols-2 gap-4">
                <div className="bg-white p-3 rounded-xl border border-gray-200">
                    <div className="text-xs font-bold text-gray-500 uppercase mb-2">{t.budget.food.men}</div>
                    <div className="flex items-center justify-between">
                        <button onClick={() => setMenCount(Math.max(0, menCount - 1))} className="w-8 h-8 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center font-bold text-gray-600">-</button>
                        <span className="text-xl font-bold text-primary-700">{menCount}</span>
                        <button onClick={() => setMenCount(Math.min(10, menCount + 1))} className="w-8 h-8 rounded-full bg-primary-50 hover:bg-primary-100 flex items-center justify-center font-bold text-primary-600">+</button>
                    </div>
                </div>
                <div className="bg-white p-3 rounded-xl border border-gray-200">
                    <div className="text-xs font-bold text-gray-500 uppercase mb-2">{t.budget.food.women}</div>
                    <div className="flex items-center justify-between">
                        <button onClick={() => setWomenCount(Math.max(0, womenCount - 1))} className="w-8 h-8 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center font-bold text-gray-600">-</button>
                        <span className="text-xl font-bold text-primary-700">{womenCount}</span>
                        <button onClick={() => setWomenCount(Math.min(10, womenCount + 1))} className="w-8 h-8 rounded-full bg-primary-50 hover:bg-primary-100 flex items-center justify-center font-bold text-primary-600">+</button>
                    </div>
                </div>
            </div>
         </div>

         {/* Lifestyle */}
         <div>
            <label className="block text-gray-700 font-bold mb-3 flex items-center gap-2">
               <Utensils size={18} className="text-primary-600" /> {t.budget.food.lifestyleLabel}
            </label>
            <div className="flex flex-col gap-3">
              {(['economy', 'standard', 'premium'] as const).map((type) => (
                <button
                  key={type}
                  onClick={() => setLifestyle(type)}
                  className={`w-full p-4 rounded-xl text-left border transition-all flex justify-between items-center ${
                    lifestyle === type
                      ? 'border-primary-600 bg-primary-50 ring-1 ring-primary-600'
                      : 'border-gray-200 bg-white hover:border-primary-300'
                  }`}
                >
                  <span className={`font-bold ${lifestyle === type ? 'text-primary-700' : 'text-gray-700'}`}>
                    {t.budget.food.types[type]}
                  </span>
                  {lifestyle === type && <div className="w-3 h-3 bg-primary-600 rounded-full"></div>}
                </button>
              ))}
            </div>
         </div>
       </div>

       {/* Result */}
       <div className="bg-white rounded-2xl p-8 border border-gray-100 shadow-sm flex flex-col">
          <h3 className="text-gray-500 text-lg mb-6 font-medium text-center">{t.budget.food.resultTitle}</h3>
          
          <div className="text-center mb-8">
            <div className="text-5xl font-bold mb-2 text-gray-900 tracking-tight">
              {finalNis.toLocaleString()} <span className="text-3xl text-gray-400">₪</span>
            </div>
            <div className="text-2xl font-bold text-green-600">
               ≈ {totalUsd.toLocaleString()} $
            </div>
          </div>

          <div className="bg-gray-50 rounded-xl p-5 mt-auto">
             <h4 className="font-bold text-gray-800 mb-3 flex items-center gap-2">
               <ShoppingBasket size={18} className="text-primary-600" /> {t.budget.food.basketIncludes}
             </h4>
             <ul className="space-y-2">
               {t.budget.food.basketItems.map((item: string, idx: number) => (
                 <li key={idx} className="flex items-center gap-2 text-sm text-gray-600">
                   <ChevronRight size={14} className="text-secondary-500" /> {item}
                 </li>
               ))}
             </ul>
          </div>
          
          <p className="mt-6 text-xs text-center text-gray-400">
            {t.budget.food.note}
          </p>
       </div>
    </div>
  );
};

const FlightTab: React.FC = () => {
  const { t } = useLanguage();
  const [origin, setOrigin] = useState('MOW');
  const [destination, setDestination] = useState('TLV');
  const [passengers, setPassengers] = useState(1);
  const [hasLuggage, setHasLuggage] = useState(true);
  const [isDirect, setIsDirect] = useState(false);
  const [departureTime, setDepartureTime] = useState<'soon' | 'week' | 'month'>('month');

  // Lowered base prices for Round Trip with Transfers (Economy)
  const basePrices: Record<string, number> = {
    MOW: 280, MSQ: 320, TBS: 180, IST: 130, ATH: 100, WAW: 150,
    PRG: 180, BUD: 90, RIX: 180, VNO: 180, RMO: 190, OTP: 120, TAS: 400,
  };

  const calculateTotal = () => {
    let base = basePrices[origin] || 250;
    if (destination === 'AMM') base += 50;
    if (destination === 'HFA') base += 20; 

    // Date multiplier
    let dateMultiplier = 1;
    if (departureTime === 'soon') dateMultiplier = 1.35; 
    if (departureTime === 'week') dateMultiplier = 1.15;
    
    // Apply date multiplier to base
    let ticketPrice = base * dateMultiplier;

    // Apply direct flight multiplier (Significantly higher due to limited routes to Israel)
    if (isDirect) ticketPrice = ticketPrice * 1.5;

    const luggage = hasLuggage ? 60 : 0; // Round trip luggage approx
    
    let total = (ticketPrice + luggage) * passengers;
    return Math.round(total);
  };

  const getFutureDates = () => {
    const start = new Date();
    
    if (departureTime === 'soon') {
      start.setDate(start.getDate() + 3);
    } else if (departureTime === 'week') {
      start.setDate(start.getDate() + 10);
    } else {
      start.setDate(start.getDate() + 30);
    }

    const end = new Date(start);
    end.setDate(end.getDate() + 7); // 7 days return difference
    
    const formatDateISO = (d: Date) => {
      const dd = String(d.getDate()).padStart(2, '0');
      const mm = String(d.getMonth() + 1).padStart(2, '0');
      const yyyy = d.getFullYear();
      return `${yyyy}-${mm}-${dd}`;
    };

    const formatDateCompact = (d: Date) => {
      const dd = String(d.getDate()).padStart(2, '0');
      const mm = String(d.getMonth() + 1).padStart(2, '0');
      return `${dd}${mm}`;
    };

    return { 
      isoStart: formatDateISO(start),
      isoEnd: formatDateISO(end),
      compactStart: formatDateCompact(start),
      compactEnd: formatDateCompact(end)
    };
  };

  const dates = getFutureDates();

  const aggregators = [
    { 
      name: 'Google Flights', 
      color: 'bg-blue-600', 
      // Query param for round trip: "from ORG to DST on DATE returning RETURN_DATE"
      url: (org: string, dst: string, pax: number, direct: boolean) => 
        `https://www.google.com/travel/flights?q=Flights%20from%20${org}%20to%20${dst}%20on%20${dates.isoStart}%20returning%20${dates.isoEnd}&curr=USD${direct ? '&stops=0' : ''}` 
    },
    { 
      name: 'Momondo', 
      color: 'bg-fuchsia-700', 
      // URL structure: origin-dest/start-date/end-date
      url: (org: string, dst: string, pax: number, direct: boolean) => 
        `https://www.momondo.com/flight-search/${org}-${dst}/${dates.isoStart}/${dates.isoEnd}${direct ? '?stops=0' : ''}` 
    },
    { 
      name: 'Aviasales', 
      color: 'bg-orange-500', 
      // URL structure: origin+start_compact+dest+end_compact+pax
      url: (org: string, dst: string, pax: number, direct: boolean) => 
        `https://www.aviasales.ru/search/${org}${dates.compactStart}${dst}${dates.compactEnd}${pax}` 
    },
    { 
      name: 'Yandex', 
      color: 'bg-red-600', 
      // Params: when, return_date
      url: (org: string, dst: string, pax: number, direct: boolean) => 
        `https://travel.yandex.ru/avia/flights/${org}-${dst}/?when=${dates.isoStart}&return_date=${dates.isoEnd}&adults=${pax}&klass=economy` 
    }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 animate-fade-in">
      <div className="space-y-6">
         <div className="grid grid-cols-2 gap-4">
           <div>
             <label className="block text-xs font-bold text-gray-500 uppercase mb-1">{t.flight.from}</label>
             <select value={origin} onChange={(e) => setOrigin(e.target.value)} className="w-full p-3 rounded-xl border border-gray-200 bg-white focus:border-primary-500 outline-none">
               {Object.entries(t.flight.cities).map(([key, label]) => (
                  <option key={key} value={(label as string).match(/\((.*?)\)/)?.[1] || 'MOW'}>{label as string}</option>
               ))}
             </select>
           </div>
           <div>
             <label className="block text-xs font-bold text-gray-500 uppercase mb-1">{t.flight.to}</label>
             <select value={destination} onChange={(e) => setDestination(e.target.value)} className="w-full p-3 rounded-xl border border-gray-200 bg-white focus:border-primary-500 outline-none">
               {Object.entries(t.flight.destinations).map(([key, label]) => (
                  <option key={key} value={key}>{label as string}</option>
               ))}
             </select>
           </div>
         </div>

         <div>
             <label className="block text-xs font-bold text-gray-500 uppercase mb-1">{t.flight.when}</label>
             <select value={departureTime} onChange={(e) => setDepartureTime(e.target.value as any)} className="w-full p-3 rounded-xl border border-gray-200 bg-white focus:border-primary-500 outline-none">
               <option value="soon">{t.flight.dates.soon}</option>
               <option value="week">{t.flight.dates.week}</option>
               <option value="month">{t.flight.dates.month}</option>
             </select>
         </div>

         <div className="flex bg-gray-100 p-1 rounded-xl">
            <button onClick={() => setIsDirect(false)} className={`flex-1 py-2 rounded-lg text-sm font-bold transition-all ${!isDirect ? 'bg-white shadow-sm text-gray-900' : 'text-gray-500'}`}>{t.flight.transfers}</button>
            <button onClick={() => setIsDirect(true)} className={`flex-1 py-2 rounded-lg text-sm font-bold transition-all ${isDirect ? 'bg-white shadow-sm text-gray-900' : 'text-gray-500'}`}>{t.flight.direct}</button>
         </div>

         <div className="grid grid-cols-2 gap-4">
           <div>
             <label className="block text-xs font-bold text-gray-500 uppercase mb-1">{t.flight.passengers}</label>
             <div className="flex gap-2">
               {[1, 2].map(num => (
                 <button key={num} onClick={() => setPassengers(num)} className={`flex-1 py-3 rounded-xl font-bold transition-all ${passengers === num ? 'bg-primary-600 text-white' : 'bg-white border border-gray-200 text-gray-600'}`}>
                   {num}
                 </button>
               ))}
             </div>
           </div>
           <div>
             <label className="block text-xs font-bold text-gray-500 uppercase mb-1">{t.flight.luggage}</label>
             <div className="flex gap-2">
                <button onClick={() => setHasLuggage(false)} className={`flex-1 py-3 rounded-xl font-bold transition-all ${!hasLuggage ? 'bg-primary-600 text-white' : 'bg-white border border-gray-200 text-gray-600'}`}>{t.flight.noLuggage}</button>
                <button onClick={() => setHasLuggage(true)} className={`flex-1 py-3 rounded-xl font-bold transition-all ${hasLuggage ? 'bg-primary-600 text-white' : 'bg-white border border-gray-200 text-gray-600'}`}>{t.flight.withLuggage}</button>
             </div>
           </div>
         </div>
      </div>

      <div className="flex flex-col justify-center bg-white rounded-2xl p-8 border border-gray-100 shadow-sm">
         <div className="text-center mb-6">
           <span className="text-gray-400 text-xs font-bold uppercase tracking-wider">{t.flight.estimated}</span>
           <div className="text-5xl font-bold text-primary-600 mt-2">${calculateTotal()}</div>
           <div className="text-xs text-gray-400 mt-2 font-medium">{t.flight.roundTripNote}</div>
         </div>
         <p className="text-center text-sm font-bold text-gray-700 mb-3">{t.flight.checkOn}</p>
         <div className="grid grid-cols-2 gap-3">
           {aggregators.map((ag) => (
             <a key={ag.name} href={ag.url(origin, destination, passengers, isDirect)} target="_blank" rel="noopener noreferrer" className={`${ag.color} text-white py-2.5 px-4 rounded-lg text-sm font-bold text-center hover:opacity-90 transition-opacity flex items-center justify-center gap-2`}>
               {ag.name} <ExternalLink size={14} />
             </a>
           ))}
         </div>
      </div>
    </div>
  );
};

export default BudgetPlanner;
