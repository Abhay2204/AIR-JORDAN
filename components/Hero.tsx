import React, { useState, useEffect } from 'react';
import { ArrowRight, ShoppingBag, Star } from 'lucide-react';
import heroShoeImage from '../images/heroshoe.png';

const Hero: React.FC = () => {
  const [animationStage, setAnimationStage] = useState(0);

  useEffect(() => {
    // Stage 0: Initial (nothing visible)
    // Stage 1: Shoe and background text slide in from left
    // Stage 2: Background text fades out
    // Stage 3: UI elements fade in
    const timers = [
      setTimeout(() => setAnimationStage(1), 100),
      setTimeout(() => setAnimationStage(2), 1200),
      setTimeout(() => setAnimationStage(3), 1800),
    ];
    return () => timers.forEach(clearTimeout);
  }, []);

  const baseImage = heroShoeImage;

  return (
    <section className="relative w-full min-h-screen md:h-screen md:min-h-[800px] bg-[#0a0a0a] overflow-hidden flex items-center pt-20 pb-8 md:pt-0 md:pb-0">
      
      {/* Gradient Overlays */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className={`absolute top-0 left-0 w-full h-full bg-gradient-to-br from-red-900/20 via-transparent to-transparent transition-opacity duration-1000 ${animationStage >= 3 ? 'opacity-100' : 'opacity-0'}`} />
        <div className={`absolute bottom-0 right-0 w-1/2 h-1/2 bg-gradient-to-tl from-red-600/10 via-transparent to-transparent transition-opacity duration-1000 ${animationStage >= 3 ? 'opacity-100' : 'opacity-0'}`} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-red-600/10 rounded-full blur-[150px]" />
      </div>

      {/* Decorative Lines - Fade in at stage 3 */}
      <div className={`absolute inset-0 z-0 pointer-events-none overflow-hidden transition-opacity duration-1000 ${animationStage >= 3 ? 'opacity-100' : 'opacity-0'}`}>
        <div className="absolute top-20 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent" />
        <div className="absolute bottom-32 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-red-500/20 to-transparent" />
        <div className="absolute top-0 left-1/4 w-[1px] h-full bg-gradient-to-b from-transparent via-white/5 to-transparent" />
        <div className="absolute top-0 right-1/4 w-[1px] h-full bg-gradient-to-b from-transparent via-white/5 to-transparent" />
      </div>

      {/* Large Background Typography - Slides in then fades */}
      <div className="absolute inset-0 flex items-center justify-center z-0 pointer-events-none select-none overflow-hidden">
        <span 
          className={`text-[25vw] font-anton text-white leading-none tracking-tighter whitespace-nowrap transition-all duration-1000 ease-out
            ${animationStage === 0 ? '-translate-x-full opacity-0' : ''}
            ${animationStage === 1 ? 'translate-x-0 opacity-10' : ''}
            ${animationStage >= 2 ? 'translate-x-0 opacity-[0.03]' : ''}
          `}
        >
          JUMPMAN
        </span>
      </div>

      {/* Side Text - Fade in at stage 3 */}
      <div className={`absolute left-6 top-1/2 -translate-y-1/2 z-10 hidden xl:block transition-all duration-700 ${animationStage >= 3 ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-4'}`}>
        <div className="flex flex-col gap-4 items-center">
          <div className="w-[1px] h-20 bg-gradient-to-b from-transparent via-red-500 to-transparent" />
          <span className="text-white/40 text-xs tracking-[0.3em] uppercase rotate-180" style={{ writingMode: 'vertical-rl' }}>
            Since 1984
          </span>
          <div className="w-[1px] h-20 bg-gradient-to-b from-transparent via-white/20 to-transparent" />
        </div>
      </div>

      {/* Right Side Text - Fade in at stage 3 */}
      <div className={`absolute right-6 top-1/2 -translate-y-1/2 z-10 hidden xl:block transition-all duration-700 delay-100 ${animationStage >= 3 ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-4'}`}>
        <div className="flex flex-col gap-4 items-center">
          <div className="w-[1px] h-20 bg-gradient-to-b from-transparent via-white/20 to-transparent" />
          <span className="text-white/40 text-xs tracking-[0.3em] uppercase" style={{ writingMode: 'vertical-rl' }}>
            Legendary
          </span>
          <div className="w-[1px] h-20 bg-gradient-to-b from-transparent via-red-500 to-transparent" />
        </div>
      </div>

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
          
          {/* Left Side: Text Content - Fade in at stage 3 */}
          <div className={`lg:col-span-4 order-2 lg:order-1 transition-all duration-700 text-center lg:text-left ${animationStage >= 3 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <div className="flex items-center gap-2 mb-4 justify-center lg:justify-start">
              <Star className="w-4 h-4 text-[#cd7f32] fill-[#cd7f32]" />
              <span className="text-[#cd7f32] font-bold tracking-widest text-xs uppercase">Premium Collection</span>
            </div>
            
            <h1 className="text-4xl sm:text-5xl md:text-7xl font-anton text-white italic tracking-tighter leading-[0.9] mb-2">
              AIR JORDAN
            </h1>
            <h2 className="text-4xl sm:text-5xl md:text-7xl font-anton text-outline tracking-tighter leading-[0.9] mb-4 md:mb-6">
              2021 PF
            </h2>
            
            <p className="text-gray-400 text-sm leading-relaxed mb-6 md:mb-8 border-l-2 border-[#ff0000] pl-4 max-w-sm mx-auto lg:mx-0 text-left">
              The Jordan Jumpman 2021 PF features responsive Zoom Air cushioning and a lightweight, secure fit for players who want to level up their game.
            </p>

            <div className="flex items-center gap-4 md:gap-6 justify-center lg:justify-start">
              <button className="bg-white text-black font-bold py-3 px-6 md:py-4 md:px-8 flex items-center gap-3 hover:bg-gray-200 transition-all hover:scale-105 text-sm md:text-base">
                <span>SHOP NOW</span>
                <ArrowRight size={18} />
              </button>
              <div className="hidden sm:flex items-center gap-3">
                <div className="w-10 h-10 md:w-12 md:h-12 rounded-full border border-white/20 flex items-center justify-center hover:border-red-500 transition-colors cursor-pointer">
                  <span className="text-white text-xs">▶</span>
                </div>
                <span className="text-white/60 text-sm">Watch Video</span>
              </div>
            </div>

            {/* Stats */}
            <div className="flex gap-6 md:gap-8 mt-8 md:mt-10 pt-6 md:pt-8 border-t border-white/10 justify-center lg:justify-start">
              <div className="text-center lg:text-left">
                <span className="text-2xl md:text-3xl font-anton text-white">35+</span>
                <p className="text-gray-500 text-[10px] md:text-xs uppercase tracking-wider mt-1">Years Legacy</p>
              </div>
              <div className="text-center lg:text-left">
                <span className="text-2xl md:text-3xl font-anton text-white">6</span>
                <p className="text-gray-500 text-[10px] md:text-xs uppercase tracking-wider mt-1">Championships</p>
              </div>
              <div className="text-center lg:text-left">
                <span className="text-2xl md:text-3xl font-anton text-[#ff0000]">#1</span>
                <p className="text-gray-500 text-[10px] md:text-xs uppercase tracking-wider mt-1">Brand</p>
              </div>
            </div>
          </div>

          {/* Center: Hero Image - Slides in from left */}
          <div className="lg:col-span-4 order-1 lg:order-2 flex items-center justify-center relative py-4 md:py-8 lg:py-0">
            {/* Glow behind shoe */}
            <div className={`absolute inset-0 flex items-center justify-center transition-opacity duration-1000 ${animationStage >= 2 ? 'opacity-100' : 'opacity-0'}`}>
              <div className="w-64 md:w-96 h-64 md:h-96 bg-red-500/20 rounded-full blur-[100px]" />
            </div>
            
            <img 
              src={baseImage}
              alt="Jordan Jumpman 2021 PF"
              className={`
                relative z-10 w-full md:w-[140%] max-w-xs md:max-w-none h-auto object-contain
                drop-shadow-[0_30px_60px_rgba(255,0,0,0.3)]
                transition-all duration-1000 ease-out
                ${animationStage === 0 ? '-translate-x-full rotate-0 opacity-0' : ''}
                ${animationStage >= 1 ? 'translate-x-0 -rotate-[25deg] opacity-100' : ''}
              `}
              style={{ transitionTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)' }}
            />
            
            {/* Circular Badge - Fade in at stage 3 */}
            <div className={`absolute -bottom-8 right-1/4 animate-spin-slow z-20 hidden lg:block transition-opacity duration-700 ${animationStage >= 3 ? 'opacity-100' : 'opacity-0'}`}>
              <svg viewBox="0 0 100 100" width="100" height="100">
                <path id="circlePath" d="M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0" fill="transparent" />
                <text fill="white" fontSize="11" fontWeight="bold" letterSpacing="3">
                  <textPath href="#circlePath">
                    • LEGENDARY • PERFORMANCE •
                  </textPath>
                </text>
              </svg>
            </div>
          </div>

          {/* Right Side: Product Card - Fade in at stage 3 */}
          <div className={`lg:col-span-4 order-3 flex justify-center lg:justify-end transition-all duration-700 delay-200 ${animationStage >= 3 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <div className="backdrop-blur-xl bg-white/5 border border-white/10 p-4 md:p-6 rounded-2xl shadow-2xl w-full max-w-sm relative overflow-hidden">
              {/* Card Glow */}
              <div className="absolute -top-20 -right-20 w-40 h-40 bg-red-500/20 rounded-full blur-[60px]" />
              
              <div className="relative z-10">
                <div className="flex justify-between items-start mb-4 md:mb-6">
                  <div>
                    <h3 className="text-gray-400 text-xs font-bold uppercase tracking-wider">Starting at</h3>
                    <div className="flex items-baseline gap-2 mt-1">
                      <span className="text-3xl md:text-4xl font-anton text-white">₹12,999</span>
                      <span className="text-xs md:text-sm text-gray-500 line-through">₹15,999</span>
                    </div>
                    <span className="text-green-500 text-xs font-bold">Save 19%</span>
                  </div>
                  <div className="bg-[#ff0000] text-white text-xs font-bold px-2 md:px-3 py-1 md:py-1.5 rounded">
                    SALE
                  </div>
                </div>

                <button className="w-full bg-[#ff0000] hover:bg-red-700 text-white font-bold py-3 md:py-4 rounded-lg flex items-center justify-center gap-2 transition-all hover:scale-[1.02] group text-sm md:text-base">
                  <ShoppingBag size={18} />
                  <span>ADD TO CART</span>
                </button>

                <div className="flex items-center justify-center gap-3 md:gap-4 mt-3 md:mt-4 text-gray-500 text-[10px] md:text-xs">
                  <span>✓ Free Shipping</span>
                  <span>✓ Easy Returns</span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Bottom Scroll Indicator - Fade in at stage 3 */}
      <div className={`absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 transition-all duration-700 delay-300 ${animationStage >= 3 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
        <span className="text-white/40 text-xs uppercase tracking-widest">Scroll</span>
        <div className="w-[1px] h-8 bg-gradient-to-b from-white/40 to-transparent animate-pulse" />
      </div>

      <style>{`
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        .animate-spin-slow {
          animation: spin-slow 10s linear infinite;
        }
      `}</style>
    </section>
  );
};

export default Hero;
