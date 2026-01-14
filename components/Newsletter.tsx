import { Reveal } from './Reveal';
import { ArrowRight } from 'lucide-react';

const Newsletter = () => {
  return (
    <section className="py-8 md:py-12 bg-[#111] border-y border-white/10">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 md:gap-6">
          <Reveal variant="slide-right" duration={0.8}>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-anton text-white tracking-tight text-center md:text-left">
              JOIN THE <span className="text-outline">FLIGHT CLUB</span>
            </h2>
          </Reveal>
          
          <Reveal variant="fade-up" delay={0.2} duration={0.8}>
            <form className="flex w-full md:w-auto">
              <input 
                type="email" 
                placeholder="Enter your email" 
                className="bg-white/10 border border-white/20 px-4 md:px-6 py-3 text-white font-medium outline-none w-full md:w-72 text-sm md:text-base focus:border-white/40 transition-colors placeholder:text-white/40"
              />
              <button className="bg-white text-black px-4 md:px-6 py-3 font-bold hover:bg-gray-200 transition-colors flex items-center gap-2 whitespace-nowrap text-sm md:text-base">
                <span className="hidden sm:inline">SIGN UP</span>
                <ArrowRight size={16} />
              </button>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
