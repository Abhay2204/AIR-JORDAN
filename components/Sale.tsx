import { useState, useEffect } from 'react';
import { Reveal } from './Reveal';
import { ArrowRight } from 'lucide-react';

const Sale = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 5,
    hours: 12,
    minutes: 45,
    seconds: 30
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        let { days, hours, minutes, seconds } = prev;
        seconds--;
        if (seconds < 0) { seconds = 59; minutes--; }
        if (minutes < 0) { minutes = 59; hours--; }
        if (hours < 0) { hours = 23; days--; }
        if (days < 0) { days = 0; hours = 0; minutes = 0; seconds = 0; }
        return { days, hours, minutes, seconds };
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="sale" className="relative py-16 md:py-20 lg:py-24 bg-[#111] overflow-hidden">
        {/* Subtle Background */}
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-5" />
        
        {/* Background Text */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none overflow-hidden">
          <span className="text-[30vw] font-anton text-white/[0.02] leading-none tracking-tighter whitespace-nowrap">
            SALE
          </span>
        </div>

        <div className="container mx-auto px-6 md:px-12 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            
            {/* Badge */}
            <Reveal variant="fade-down" duration={0.8}>
              <span className="inline-block py-2 px-6 bg-[#ff0000] text-white text-xs font-bold tracking-[0.3em] uppercase mb-8">
                Limited Time Offer
              </span>
            </Reveal>
            
            {/* Main Heading */}
            <Reveal variant="zoom-in" duration={1} delay={0.2}>
              <h2 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-anton leading-[0.9] tracking-tight text-white mb-2">
                NEW YEAR
              </h2>
              <h2 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-anton leading-[0.9] tracking-tight text-outline mb-6 md:mb-8">
                MADNESS
              </h2>
            </Reveal>

            {/* Countdown Timer */}
            <Reveal variant="fade-up" delay={0.4} duration={0.8}>
              <p className="text-white/50 text-xs uppercase tracking-widest mb-3">Sale Ends In</p>
              <div className="flex justify-center gap-2 sm:gap-3 md:gap-6 mb-6 md:mb-8">
                {[
                  { value: timeLeft.days, label: 'Days' },
                  { value: timeLeft.hours, label: 'Hours' },
                  { value: timeLeft.minutes, label: 'Mins' },
                  { value: timeLeft.seconds, label: 'Secs' }
                ].map((item, idx) => (
                  <div key={idx} className="text-center">
                    <div className="bg-white/10 border border-white/20 text-white w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 flex items-center justify-center rounded-lg mb-1">
                      <span className="text-lg sm:text-xl md:text-3xl font-anton">{String(item.value).padStart(2, '0')}</span>
                    </div>
                    <span className="text-white/40 text-[10px] md:text-xs uppercase tracking-wider">{item.label}</span>
                  </div>
                ))}
              </div>
            </Reveal>
            
            {/* Description */}
            <Reveal variant="fade-up" delay={0.6} duration={1}>
              <p className="text-base md:text-lg text-white/60 max-w-md mx-auto mb-6 leading-relaxed">
                Get up to <span className="font-bold text-white">50% OFF</span> on selected Jordan performance shoes.
              </p>
            </Reveal>

            {/* CTA Button */}
            <Reveal variant="zoom-in" delay={0.8} duration={0.6}>
              <button className="bg-white text-black py-4 px-12 font-bold text-lg flex items-center justify-center gap-3 mx-auto hover:bg-gray-200 transition-all hover:scale-105 group">
                <span>SHOP THE SALE</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </Reveal>

          </div>
        </div>
    </section>
  );
};

export default Sale;
