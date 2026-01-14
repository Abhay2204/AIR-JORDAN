import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Reveal } from './Reveal';
import aboutImage1 from '../images/1.png';
import aboutImage2 from '../images/2.png';
import aboutImage3 from '../images/3.png';
import aboutImage4 from '../images/4.png';

const About = () => {
  return (
    <section id="about" className="relative py-16 md:py-24 lg:py-32 bg-[#0a0a0a] overflow-hidden">
        {/* Abstract Background */}
        <div className="absolute top-0 right-0 w-1/2 h-full bg-[#111] skew-x-12 transform translate-x-1/4 z-0 pointer-events-none hidden md:block" />
        
        <div className="container mx-auto px-6 md:px-12 relative z-10">
            <div className="flex flex-col lg:flex-row items-center gap-10 md:gap-16 lg:gap-20">
                
                {/* Image Grid */}
                <div className="w-full lg:w-1/2 grid grid-cols-2 gap-3 md:gap-6 relative">
                    {/* Decorative element */}
                    <div className="absolute -inset-2 md:-inset-4 border-2 border-[#ff0000]/20 z-0 transform rotate-2 rounded-2xl md:rounded-3xl hidden md:block" />
                    
                    <div className="space-y-3 md:space-y-6 mt-6 md:mt-12 relative z-10">
                        <Reveal variant="slide-right" delay={0.1} duration={1.2}>
                            <img 
                                src={aboutImage1} 
                                alt="Basketball hoop" 
                                className="rounded-xl md:rounded-2xl w-full h-40 sm:h-52 md:h-64 object-cover hover:scale-105 transition-transform duration-700 shadow-2xl"
                            />
                        </Reveal>
                        <Reveal variant="blur-in" delay={0.3} duration={1.2}>
                            <img 
                                src={aboutImage2} 
                                alt="Abstract court" 
                                className="rounded-xl md:rounded-2xl w-full h-32 sm:h-40 md:h-48 object-cover hover:scale-105 transition-transform duration-700 shadow-2xl"
                            />
                        </Reveal>
                    </div>
                    <div className="space-y-3 md:space-y-6 relative z-10">
                        <Reveal variant="slide-left" delay={0.2} duration={1.2}>
                            <img 
                                src={aboutImage3} 
                                alt="Sneaker detail" 
                                className="rounded-xl md:rounded-2xl w-full h-32 sm:h-40 md:h-48 object-cover hover:scale-105 transition-transform duration-700 shadow-2xl"
                            />
                        </Reveal>
                        <Reveal variant="zoom-in" delay={0.4} duration={1.2}>
                            <img 
                                src={aboutImage4} 
                                alt="Game action" 
                                className="rounded-xl md:rounded-2xl w-full h-40 sm:h-52 md:h-64 object-cover hover:scale-105 transition-transform duration-700 shadow-2xl"
                            />
                        </Reveal>
                    </div>
                </div>

                {/* Content */}
                <div className="w-full lg:w-1/2">
                    <Reveal variant="fade-down" duration={1}>
                        <h4 className="text-[#ff0000] font-bold tracking-widest text-xs md:text-sm mb-4 md:mb-6 flex items-center gap-3">
                            <span className="w-8 md:w-12 h-[2px] bg-[#ff0000]"></span>
                            THE LEGACY
                        </h4>
                    </Reveal>
                    <Reveal variant="slide-right" delay={0.1} duration={1.2}>
                        <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-anton text-white mb-6 md:mb-8 leading-[0.9]">
                            DEFYING <br />
                            <span className="text-outline text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-500">GRAVITY</span>
                        </h2>
                    </Reveal>
                    <Reveal variant="fade-up" delay={0.3} duration={1}>
                        <p className="text-gray-400 text-base md:text-lg lg:text-xl leading-relaxed mb-8 md:mb-10 border-l-4 border-gray-800 pl-4 md:pl-6">
                            Since 1984, Jordan Brand has been pushing the boundaries of athletic performance and style. What started as a single pair of sneakers has evolved into a global symbol of greatness.
                        </p>
                    </Reveal>
                    
                    <div className="grid grid-cols-2 gap-6 md:gap-10 mb-8 md:mb-10 border-t border-white/10 pt-6 md:pt-10">
                        <Reveal variant="zoom-in" delay={0.4} duration={0.8}>
                            <div>
                                <span className="block text-3xl md:text-4xl lg:text-5xl font-anton text-white mb-1 md:mb-2">35+</span>
                                <span className="text-[10px] md:text-xs text-gray-500 uppercase tracking-widest font-bold">Years of Innovation</span>
                            </div>
                        </Reveal>
                        <Reveal variant="zoom-in" delay={0.5} duration={0.8}>
                            <div>
                                <span className="block text-3xl md:text-4xl lg:text-5xl font-anton text-white mb-1 md:mb-2">6</span>
                                <span className="text-[10px] md:text-xs text-gray-500 uppercase tracking-widest font-bold">Championship Rings</span>
                            </div>
                        </Reveal>
                    </div>

                    <Reveal variant="slide-right" delay={0.6} duration={1}>
                        <button className="group flex items-center gap-2 md:gap-3 text-white font-bold text-sm md:text-lg hover:text-[#ff0000] transition-colors">
                            LEARN MORE
                            <ArrowRight size={20} className="transform group-hover:translate-x-2 transition-transform" />
                        </button>
                    </Reveal>
                </div>
            </div>
        </div>
    </section>
  );
};

export default About;
