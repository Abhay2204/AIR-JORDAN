import React from 'react';
import { Reveal } from './Reveal';

const Innovation = () => {
  return (
    <section className="relative bg-[#050505] overflow-hidden">
      {/* Video Section */}
      <div className="relative h-[60vh] md:h-screen w-full">
        <video 
          autoPlay 
          loop 
          muted 
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="/images/shoevideo.mp4" type="video/mp4" />
        </video>
        
        {/* Video Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-[#050505]" />
        
        {/* Scroll Indicator */}
        <div className="absolute bottom-8 md:bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
          <span className="text-white/50 text-xs uppercase tracking-widest">Discover</span>
          <div className="w-[1px] h-8 md:h-12 bg-gradient-to-b from-white/50 to-transparent animate-pulse" />
        </div>
      </div>

      {/* Content Section - Overlays on video bottom */}
      <div className="relative z-10 -mt-16 md:-mt-32 pb-16 md:pb-32">
        <div className="container mx-auto px-6 md:px-12">
          
          {/* Header */}
          <div className="mb-12 md:mb-20">
            <Reveal variant="fade-down" duration={1.2}>
              <span className="text-[#ff0000] font-bold tracking-widest text-xs md:text-sm uppercase">Engineered for Flight</span>
            </Reveal>
            <div className="mt-4 overflow-hidden">
              <Reveal variant="slide-right" duration={1.5} delay={0.2}>
                <h2 className="text-4xl md:text-5xl lg:text-8xl font-anton text-white">
                  TECHNICAL <span className="text-outline">SUPERIORITY</span>
                </h2>
              </Reveal>
            </div>
          </div>

          {/* Feature Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            
            {/* Card 1 */}
            <Reveal variant="fade-up" delay={0.2} duration={1.2} className="h-full">
              <div className="group bg-gradient-to-b from-[#151515] to-[#0a0a0a] p-6 md:p-10 rounded-2xl md:rounded-3xl border border-white/5 hover:border-[#ff0000]/30 transition-all duration-500 h-full relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#ff0000]/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                <span className="text-[#ff0000] text-4xl md:text-6xl font-anton opacity-20 absolute top-4 md:top-6 right-4 md:right-6">01</span>
                
                <h3 className="text-2xl md:text-3xl font-anton text-white mb-3 md:mb-4 group-hover:text-[#ff0000] transition-colors">
                  FLIGHTWIRE CABLES
                </h3>
                <p className="text-gray-400 leading-relaxed text-sm md:text-lg">
                  Stitched into the side of the shoe, Flightwire cables loop upwards from the curved Flight Plate to help lock you down on the footbed during fast breaks.
                </p>
                
                <div className="mt-6 md:mt-8 pt-4 md:pt-6 border-t border-white/10">
                  <div className="flex items-center gap-4">
                    <div className="h-2 w-2 rounded-full bg-[#ff0000]" />
                    <span className="text-white/60 text-xs md:text-sm uppercase tracking-wider">Lockdown Fit</span>
                  </div>
                </div>
              </div>
            </Reveal>

            {/* Card 2 - Featured */}
            <Reveal variant="zoom-in" delay={0.4} duration={1.2} className="h-full md:col-span-2 lg:col-span-1">
              <div className="group bg-gradient-to-b from-[#1a1a1a] to-[#0f0f0f] p-6 md:p-10 rounded-2xl md:rounded-3xl border border-[#ff0000]/20 hover:border-[#ff0000]/50 transition-all duration-500 h-full relative overflow-hidden transform lg:-translate-y-6">
                <div className="absolute top-0 left-0 w-full h-1 bg-[#ff0000]" />
                
                <div className="absolute top-4 md:top-6 left-4 md:left-6 bg-[#ff0000] text-white text-[10px] md:text-xs font-bold px-2 md:px-3 py-1 rounded-full">
                  CORE TECH
                </div>
                
                <span className="text-[#ff0000] text-4xl md:text-6xl font-anton opacity-20 absolute top-4 md:top-6 right-4 md:right-6">02</span>
                
                <h3 className="text-2xl md:text-3xl font-anton text-white mb-3 md:mb-4 mt-6 md:mt-8 group-hover:text-[#ff0000] transition-colors">
                  ZOOM AIR UNIT
                </h3>
                <p className="text-gray-400 leading-relaxed text-sm md:text-lg">
                  A large Zoom Air unit located under the ball of your foot provides lightweight, responsive cushioning to help drive you down the court with explosive energy.
                </p>
                
                <div className="mt-6 md:mt-8 pt-4 md:pt-6 border-t border-white/10">
                  <div className="flex items-center gap-4">
                    <div className="h-2 w-2 rounded-full bg-[#ff0000]" />
                    <span className="text-white/60 text-xs md:text-sm uppercase tracking-wider">Max Responsiveness</span>
                  </div>
                </div>
              </div>
            </Reveal>

            {/* Card 3 */}
            <Reveal variant="fade-up" delay={0.6} duration={1.2} className="h-full">
              <div className="group bg-gradient-to-b from-[#151515] to-[#0a0a0a] p-6 md:p-10 rounded-2xl md:rounded-3xl border border-white/5 hover:border-[#ff0000]/30 transition-all duration-500 h-full relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#ff0000]/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                <span className="text-[#ff0000] text-4xl md:text-6xl font-anton opacity-20 absolute top-4 md:top-6 right-4 md:right-6">03</span>
                
                <h3 className="text-2xl md:text-3xl font-anton text-white mb-3 md:mb-4 group-hover:text-[#ff0000] transition-colors">
                  ECLIPSE PLATE 3.0
                </h3>
                <p className="text-gray-400 leading-relaxed text-sm md:text-lg">
                  The evolved Eclipse Plate provides lateral stability and support, reducing overall weight while exposing the Zoom Air unit for maximum responsiveness.
                </p>
                
                <div className="mt-6 md:mt-8 pt-4 md:pt-6 border-t border-white/10">
                  <div className="flex items-center gap-4">
                    <div className="h-2 w-2 rounded-full bg-[#ff0000]" />
                    <span className="text-white/60 text-xs md:text-sm uppercase tracking-wider">Lightweight Stability</span>
                  </div>
                </div>
              </div>
            </Reveal>

          </div>

          {/* Bottom Stats */}
          <Reveal variant="fade-up" delay={0.8} duration={1}>
            <div className="mt-12 md:mt-20 grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 border-t border-white/10 pt-8 md:pt-12">
              <div className="text-center">
                <span className="text-3xl md:text-4xl lg:text-5xl font-anton text-white">23%</span>
                <p className="text-gray-500 text-xs md:text-sm uppercase tracking-wider mt-1 md:mt-2">Lighter</p>
              </div>
              <div className="text-center">
                <span className="text-3xl md:text-4xl lg:text-5xl font-anton text-white">40%</span>
                <p className="text-gray-500 text-xs md:text-sm uppercase tracking-wider mt-1 md:mt-2">More Responsive</p>
              </div>
              <div className="text-center">
                <span className="text-3xl md:text-4xl lg:text-5xl font-anton text-[#ff0000]">2X</span>
                <p className="text-gray-500 text-xs md:text-sm uppercase tracking-wider mt-1 md:mt-2">Durability</p>
              </div>
              <div className="text-center">
                <span className="text-3xl md:text-4xl lg:text-5xl font-anton text-white">100%</span>
                <p className="text-gray-500 text-xs md:text-sm uppercase tracking-wider mt-1 md:mt-2">Performance</p>
              </div>
            </div>
          </Reveal>

        </div>
      </div>
    </section>
  );
};

export default Innovation;
