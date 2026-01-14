import React from 'react';
import { Send, MapPin, Phone, Mail } from 'lucide-react';
import { Reveal } from './Reveal';

const Contact = () => {
  return (
    <section id="contact" className="py-16 md:py-24 bg-[#0a0a0a] relative overflow-hidden">
        {/* Decoration */}
        <div className="absolute bottom-0 left-0 w-48 md:w-64 h-48 md:h-64 bg-blue-600/10 rounded-full blur-[80px]" />
        <div className="absolute top-0 right-0 w-48 md:w-64 h-48 md:h-64 bg-red-600/10 rounded-full blur-[80px]" />

        <div className="container mx-auto px-6 md:px-12 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-16">
                
                {/* Info */}
                <div>
                    <Reveal>
                        <h2 className="text-3xl sm:text-4xl md:text-5xl font-anton text-white mb-4 md:mb-6">GET IN TOUCH</h2>
                    </Reveal>
                    <Reveal delay={0.1}>
                        <p className="text-gray-400 text-sm md:text-lg mb-8 md:mb-10 leading-relaxed">
                            Have questions about the latest drop? Need help with sizing? Our team of experts is here to assist you.
                        </p>
                    </Reveal>

                    <div className="space-y-6 md:space-y-8">
                        <Reveal delay={0.2}>
                            <div className="flex items-start gap-3 md:gap-4">
                                <div className="bg-[#1f1f1f] p-2.5 md:p-3 rounded-lg text-[#ff0000]">
                                    <MapPin size={20} className="md:w-6 md:h-6" />
                                </div>
                                <div>
                                    <h4 className="text-white font-bold mb-1 text-sm md:text-base">Visit Our Flagship</h4>
                                    <p className="text-gray-500 text-xs md:text-sm">123 Jumpman Blvd, Chicago, IL 60601</p>
                                </div>
                            </div>
                        </Reveal>

                        <Reveal delay={0.3}>
                            <div className="flex items-start gap-3 md:gap-4">
                                <div className="bg-[#1f1f1f] p-2.5 md:p-3 rounded-lg text-[#ff0000]">
                                    <Mail size={20} className="md:w-6 md:h-6" />
                                </div>
                                <div>
                                    <h4 className="text-white font-bold mb-1 text-sm md:text-base">Email Us</h4>
                                    <p className="text-gray-500 text-xs md:text-sm">support@jordanbrand.com</p>
                                </div>
                            </div>
                        </Reveal>

                        <Reveal delay={0.4}>
                            <div className="flex items-start gap-3 md:gap-4">
                                <div className="bg-[#1f1f1f] p-2.5 md:p-3 rounded-lg text-[#ff0000]">
                                    <Phone size={20} className="md:w-6 md:h-6" />
                                </div>
                                <div>
                                    <h4 className="text-white font-bold mb-1 text-sm md:text-base">Call Us</h4>
                                    <p className="text-gray-500 text-xs md:text-sm">+1 (800) 23-JUMP-23</p>
                                </div>
                            </div>
                        </Reveal>
                    </div>
                </div>

                {/* Form */}
                <Reveal delay={0.3} className="h-full">
                    <div className="bg-[#111] p-5 md:p-8 rounded-2xl md:rounded-3xl border border-white/5 shadow-2xl h-full">
                        <form className="space-y-4 md:space-y-6">
                            <div className="grid grid-cols-2 gap-3 md:gap-6">
                                <div className="space-y-1 md:space-y-2">
                                    <label className="text-[10px] md:text-xs font-bold text-gray-500 uppercase tracking-widest">First Name</label>
                                    <input type="text" className="w-full bg-[#0a0a0a] border border-gray-800 rounded p-2.5 md:p-3 text-white text-sm focus:outline-none focus:border-[#ff0000] transition-colors" placeholder="Michael" />
                                </div>
                                <div className="space-y-1 md:space-y-2">
                                    <label className="text-[10px] md:text-xs font-bold text-gray-500 uppercase tracking-widest">Last Name</label>
                                    <input type="text" className="w-full bg-[#0a0a0a] border border-gray-800 rounded p-2.5 md:p-3 text-white text-sm focus:outline-none focus:border-[#ff0000] transition-colors" placeholder="Jordan" />
                                </div>
                            </div>
                            
                            <div className="space-y-1 md:space-y-2">
                                <label className="text-[10px] md:text-xs font-bold text-gray-500 uppercase tracking-widest">Email Address</label>
                                <input type="email" className="w-full bg-[#0a0a0a] border border-gray-800 rounded p-2.5 md:p-3 text-white text-sm focus:outline-none focus:border-[#ff0000] transition-colors" placeholder="mike@bulls.com" />
                            </div>

                            <div className="space-y-1 md:space-y-2">
                                <label className="text-[10px] md:text-xs font-bold text-gray-500 uppercase tracking-widest">Message</label>
                                <textarea rows={3} className="w-full bg-[#0a0a0a] border border-gray-800 rounded p-2.5 md:p-3 text-white text-sm focus:outline-none focus:border-[#ff0000] transition-colors resize-none" placeholder="Tell us what you need..." />
                            </div>

                            <button type="button" className="w-full bg-[#ff0000] hover:bg-red-700 text-white font-bold py-3 md:py-4 rounded flex items-center justify-center gap-2 transition-colors text-sm md:text-base">
                                SEND MESSAGE
                                <Send size={16} className="md:w-[18px] md:h-[18px]" />
                            </button>
                        </form>
                    </div>
                </Reveal>
            </div>
        </div>
    </section>
  );
};

export default Contact;
