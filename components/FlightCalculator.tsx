
import React, { useState } from 'react';
import { Plane, ExternalLink, Luggage, User, MapPin } from 'lucide-react';
import { useLanguage } from './LanguageContext';
import FadeInSection from './FadeInSection';

const FlightCalculator: React.FC = () => {
  const { t } = useLanguage();
  const [origin, setOrigin] = useState('MOW');
  const [destination, setDestination] = useState('TLV');
  const [passengers, setPassengers] = useState(1);
  const [hasLuggage, setHasLuggage] = useState(true);
  const [isDirect, setIsDirect] = useState(false);

  // Approximate base prices in USD to TLV
  const basePrices: Record<string, number> = {
    MOW: 400, // Moscow
    MSQ: 450, // Minsk
    TBS: 200, // Tbilisi
    IST: 150, // Istanbul
    ATH: 120, // Athens
    WAW: 180, // Warsaw
    PRG: 200, // Prague
    BUD: 100, // Budapest
    RIX: 250, // Riga
    VNO: 250, // Vilnius
    RMO: 200, // Chisinau
    OTP: 150, // Bucharest
    TAS: 450, // Tashkent
  };

  const luggageCost = 50;
  const directFlightPremium = 1.3; // 30% more expensive

  const calculateTotal = () => {
    let base = basePrices[origin] || 300;
    
    // Adjust for other destinations
    if (destination === 'AMM') base += 50;
    if (destination === 'HFA') base += 20; 

    const luggage = hasLuggage ? luggageCost : 0;
    let total = (base + luggage) * passengers;
    
    if (isDirect) {
      total = total * directFlightPremium;
    }
    
    return Math.round(total);
  };

  // Helper to get next month's date for valid search links
  const getFutureDate = () => {
    const d = new Date();
    d.setDate(d.getDate() + 30); // 30 days from now
    const dd = String(d.getDate()).padStart(2, '0');
    const mm = String(d.getMonth() + 1).padStart(2, '0');
    const yyyy = d.getFullYear();
    return { 
      aviasales: `${dd}${mm}`, 
      iso: `${yyyy}-${mm}-${dd}`
    };
  };

  const aggregators = [
    { 
      name: 'Google Flights', 
      url: (org: string, dst: string, pax: number, direct: boolean) => {
        const stops = direct ? '&stops=0' : '';
        return `https://www.google.com/travel/flights?q=Flights%20to%20${dst}%20from%20${org}&curr=USD${stops}`;
      },
      color: 'bg-blue-600 hover:bg-blue-700'
    },
    {
       name: 'Momondo',
       url: (org: string, dst: string, pax: number, direct: boolean) => {
         const date = getFutureDate().iso;
         const stops = direct ? '?stops=0' : '';
         return `https://www.momondo.com/flight-search/${org}-${dst}/${date}${stops}`;
       },
       color: 'bg-fuchsia-700 hover:bg-fuchsia-800'
    },
    { 
      name: 'Aviasales', 
      // Format: ORIGIN + DDMM + DEST + PASSENGERS
      url: (org: string, dst: string, pax: number, direct: boolean) => {
        const date = getFutureDate().aviasales;
        // Aviasales web link usually allows filters after search, but deep link format is limited.
        return `https://www.aviasales.ru/search/${org}${date}${dst}${pax}`;
      },
      color: 'bg-orange-500 hover:bg-orange-600'
    },
    {
       name: 'Yandex Travel',
       url: (org: string, dst: string, pax: number, direct: boolean) => {
         const date = getFutureDate().iso;
         // Yandex params
         return `https://travel.yandex.ru/avia/flights/${org}-${dst}/?when=${date}&adults=${pax}&children=0&infants=0&klass=economy`;
       },
       color: 'bg-red-600 hover:bg-red-700'
    }
  ];

  return (
    <section id="flight-calculator" className="py-20 bg-white border-t border-gray-100">
      <div className="container mx-auto px-4 md:px-6">
        <FadeInSection>
          <div className="text-center mb-12">
             <div className="inline-flex items-center justify-center p-3 bg-primary-50 rounded-full text-primary-600 mb-4 shadow-sm">
              <Plane size={24} />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">{t.flight.title}</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              {t.flight.subtitle}
            </p>
          </div>
        </FadeInSection>

        <FadeInSection delay="200ms">
          <div className="max-w-4xl mx-auto bg-white rounded-3xl shadow-xl border border-gray-100 overflow-hidden">
            <div className="grid grid-cols-1 md:grid-cols-2">
              
              {/* Input Side */}
              <div className="p-8 bg-gray-50">
                 <div className="space-y-6">
                   <div>
                     <label className="block text-sm font-bold text-gray-700 mb-2">{t.flight.from}</label>
                     <select 
                      value={origin}
                      onChange={(e) => setOrigin(e.target.value)}
                      className="w-full p-3 rounded-xl border border-gray-200 focus:border-primary-500 focus:ring-2 focus:ring-primary-200 outline-none transition-all bg-white"
                     >
                       {Object.entries(t.flight.cities).map(([key, label]) => (
                          <option key={key} value={(label as string).match(/\((.*?)\)/)?.[1] || 'MOW'}>
                            {label as string}
                          </option>
                       ))}
                     </select>
                   </div>

                   <div>
                     <label className="block text-sm font-bold text-gray-700 mb-2">{t.flight.to}</label>
                     <select 
                      value={destination}
                      onChange={(e) => setDestination(e.target.value)}
                      className="w-full p-3 rounded-xl border border-gray-200 focus:border-primary-500 focus:ring-2 focus:ring-primary-200 outline-none transition-all bg-white"
                     >
                       {Object.entries(t.flight.destinations).map(([key, label]) => (
                          <option key={key} value={key}>
                            {label as string}
                          </option>
                       ))}
                     </select>
                   </div>

                   {/* Flight Type Toggle */}
                   <div className="bg-white p-1 rounded-xl border border-gray-200 flex">
                      <button
                        onClick={() => setIsDirect(false)}
                        className={`flex-1 py-2 rounded-lg text-sm font-bold transition-all ${!isDirect ? 'bg-primary-100 text-primary-700' : 'text-gray-500 hover:bg-gray-50'}`}
                      >
                        {t.flight.transfers}
                      </button>
                      <button
                        onClick={() => setIsDirect(true)}
                        className={`flex-1 py-2 rounded-lg text-sm font-bold transition-all ${isDirect ? 'bg-primary-100 text-primary-700' : 'text-gray-500 hover:bg-gray-50'}`}
                      >
                        {t.flight.direct}
                      </button>
                   </div>

                   <div>
                     <label className="block text-sm font-bold text-gray-700 mb-2">{t.flight.passengers}</label>
                     <div className="flex gap-2">
                       {[1, 2].map(num => (
                         <button
                          key={num}
                          onClick={() => setPassengers(num)}
                          className={`flex-1 py-3 rounded-xl font-bold flex items-center justify-center gap-2 transition-all ${
                            passengers === num 
                            ? 'bg-primary-600 text-white shadow-md' 
                            : 'bg-white text-gray-600 border border-gray-200 hover:bg-gray-100'
                          }`}
                         >
                           <User size={18} /> {num}
                         </button>
                       ))}
                     </div>
                   </div>

                   <div>
                     <label className="block text-sm font-bold text-gray-700 mb-2">{t.flight.luggage}</label>
                     <div className="flex gap-2">
                        <button
                          onClick={() => setHasLuggage(false)}
                          className={`flex-1 py-3 rounded-xl font-bold text-sm transition-all ${
                            !hasLuggage 
                            ? 'bg-primary-600 text-white shadow-md' 
                            : 'bg-white text-gray-600 border border-gray-200 hover:bg-gray-100'
                          }`}
                         >
                           {t.flight.noLuggage}
                         </button>
                         <button
                          onClick={() => setHasLuggage(true)}
                          className={`flex-1 py-3 rounded-xl font-bold text-sm flex items-center justify-center gap-2 transition-all ${
                            hasLuggage 
                            ? 'bg-primary-600 text-white shadow-md' 
                            : 'bg-white text-gray-600 border border-gray-200 hover:bg-gray-100'
                          }`}
                         >
                           <Luggage size={18} /> {t.flight.withLuggage}
                         </button>
                     </div>
                   </div>
                 </div>
              </div>

              {/* Output Side */}
              <div className="p-8 flex flex-col justify-center bg-white relative">
                 <div className="text-center mb-8">
                   <span className="text-gray-500 text-sm font-medium uppercase tracking-wider">{t.flight.estimated}</span>
                   <div className="text-5xl font-bold text-primary-600 mt-2">
                     ${calculateTotal()}
                   </div>
                   <p className="text-xs text-gray-400 mt-2">
                     *Avg. price for {passengers} pax {isDirect ? '(Direct)' : ''}
                   </p>
                 </div>
                 
                 <div className="space-y-3">
                   <p className="text-center text-sm font-bold text-gray-700 mb-2">{t.flight.checkOn}</p>
                   <div className="grid grid-cols-2 gap-3">
                     {aggregators.map((ag) => (
                       <a
                        key={ag.name}
                        href={ag.url(origin, destination, passengers, isDirect)}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`${ag.color} text-white py-2.5 px-4 rounded-lg text-sm font-bold text-center transition-transform hover:-translate-y-0.5 flex items-center justify-center gap-2`}
                       >
                         {ag.name} <ExternalLink size={14} />
                       </a>
                     ))}
                   </div>
                 </div>
              </div>

            </div>
          </div>
        </FadeInSection>
      </div>
    </section>
  );
};

export default FlightCalculator;
