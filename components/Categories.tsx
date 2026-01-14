import React from 'react';
import { Reveal } from './Reveal';
import { ArrowRight } from 'lucide-react';

const CATEGORIES = [
  { id: 1, name: "MEN", subtitle: "Performance & Style", image: "/images/2.png", products: "240+ Products" },
  { id: 2, name: "WOMEN", subtitle: "Bold & Fearless", image: "/images/4.png", products: "180+ Products" },
  { id: 3, name: "KIDS", subtitle: "Future Legends", image: "https://images.unsplash.com/photo-1515955656352-a1fa3ffcd111?q=80&w=1000&auto=format&fit=crop", products: "120+ Products" }
];

const Categories = () => {
  return (
    <section className="py-16 md:py-24 bg-[#0a0a0a] relative overflow-hidden">
      {/* Background Text */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <span className="text-[20vw] font-anton text-white/[0.02] leading-none tracking-tighter whitespace-nowrap">
          SHOP
        </span>
      </div>

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 md:gap-6 mb-10 md:mb-16">
          <div>
            <Reveal variant="fade-down" duration={0.8}>
              <span className="text-[#ff0000] font-bold tracking-widest text-xs md:text-sm uppercase mb-2 md:mb-4 block">Shop By Category</span>
            </Reveal>
            <Reveal variant="slide-right" duration={1}>
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-anton text-white uppercase tracking-tight leading-none">
                Who are you <br className="hidden md:block" />
                <span className="text-outline">shopping for?</span>
              </h2>
            </Reveal>
          </div>
          <Reveal variant="fade-up" delay={0.3} duration={0.8}>
            <a href="#" className="text-white/60 hover:text-white transition-colors text-xs md:text-sm uppercase tracking-wider flex items-center gap-2 group">
              View All Categories 
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </a>
          </Reveal>
        </div>
        
        {/* Category Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
          {CATEGORIES.map((cat, idx) => (
            <Reveal 
              key={cat.id} 
              variant="fade-up" 
              delay={idx * 0.15} 
              duration={1}
              className="h-full"
            >
              <div className="relative h-[350px] sm:h-[450px] md:h-[550px] group cursor-pointer overflow-hidden rounded-xl md:rounded-2xl bg-[#111]">
                {/* Image */}
                <div className="absolute inset-0">
                  <img 
                    src={cat.image} 
                    alt={cat.name} 
                    className="w-full h-full object-cover transition-all duration-[1.2s] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-110 opacity-80 group-hover:opacity-100"
                  />
                </div>
                
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
                
                {/* Top Badge */}
                <div className="absolute top-6 left-6 right-6 flex justify-between items-start">
                  <span className="text-white/40 text-xs uppercase tracking-widest">{cat.products}</span>
                  <div className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 group-hover:rotate-45">
                    <ArrowRight size={18} className="text-white" />
                  </div>
                </div>
                
                {/* Content */}
                <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
                  {/* Red Line */}
                  <div className="w-10 md:w-12 h-1 bg-[#ff0000] mb-3 md:mb-4 transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
                  
                  <p className="text-white/50 text-xs md:text-sm uppercase tracking-wider mb-1 md:mb-2 transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                    {cat.subtitle}
                  </p>
                  
                  <h3 className="text-4xl sm:text-5xl md:text-6xl font-anton text-white tracking-tight mb-3 md:mb-4 transform group-hover:-translate-y-1 transition-transform duration-500">
                    {cat.name}
                  </h3>
                  
                  <div className="flex items-center gap-3 transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 delay-100">
                    <span className="text-white font-bold text-xs md:text-sm uppercase tracking-wider">Shop Now</span>
                    <ArrowRight size={16} className="text-[#ff0000]" />
                  </div>
                </div>

                {/* Border on hover */}
                <div className="absolute inset-0 border-2 border-transparent group-hover:border-[#ff0000]/30 rounded-2xl transition-colors duration-500" />
              </div>
            </Reveal>
          ))}
        </div>

        {/* Bottom Feature Tags */}
        <Reveal variant="fade-up" delay={0.6} duration={0.8}>
          <div className="flex flex-wrap justify-center gap-4 md:gap-6 mt-10 md:mt-16 text-white/40 text-xs md:text-sm">
            <span className="flex items-center gap-2 hover:text-white transition-colors cursor-pointer">
              <div className="w-1.5 h-1.5 rounded-full bg-[#ff0000]" />
              Free Shipping Over ₹5,000
            </span>
            <span className="flex items-center gap-2 hover:text-white transition-colors cursor-pointer">
              <div className="w-1.5 h-1.5 rounded-full bg-[#ff0000]" />
              Easy 30-Day Returns
            </span>
            <span className="flex items-center gap-2 hover:text-white transition-colors cursor-pointer">
              <div className="w-1.5 h-1.5 rounded-full bg-[#ff0000]" />
              100% Authentic Products
            </span>
          </div>
        </Reveal>
      </div>
    </section>
  );
};

export default Categories;
