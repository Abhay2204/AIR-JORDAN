import React from 'react';
import { JordanLogo, NikeLogo } from './Icons';
import { Instagram as InstagramIcon, Twitter as TwitterIcon, Facebook as FacebookIcon, Youtube as YoutubeIcon } from 'lucide-react';
import { Reveal } from './Reveal';

const Footer = () => {
  return (
    <footer className="bg-black text-white pt-12 md:pt-20 pb-8 md:pb-10 border-t border-white/10 overflow-hidden">
      
      {/* Large Typography Reveal */}
      <div className="container mx-auto px-6 md:px-12 mb-10 md:mb-16">
        <Reveal variant="slide-right" duration={1.5}>
          <div className="overflow-hidden">
            <h2 className="text-[20vw] md:text-[15vw] lg:text-[12vw] font-anton text-white/5 leading-none tracking-tighter whitespace-nowrap">
              JUST DO IT
            </h2>
          </div>
        </Reveal>
      </div>

      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 mb-10 md:mb-16">
          
          {/* Brand */}
          <Reveal variant="fade-up" delay={0.1} duration={0.8}>
            <div className="space-y-4 md:space-y-6 col-span-2 md:col-span-1">
              <div className="flex items-center gap-4">
                <JordanLogo className="w-6 h-6 md:w-8 md:h-8 text-white" />
                <NikeLogo className="w-10 h-10 md:w-12 md:h-12 text-white" />
              </div>
              <p className="text-gray-500 text-xs md:text-sm leading-relaxed">
                The Jordan Brand is defined by greatness. We are a family who believes that with hard work and determination, anything is possible.
              </p>
            </div>
          </Reveal>

          {/* Links 1 */}
          <Reveal variant="fade-up" delay={0.2} duration={0.8}>
            <div>
              <h3 className="font-bold text-sm md:text-lg mb-4 md:mb-6">PRODUCTS</h3>
              <ul className="space-y-2 md:space-y-4 text-gray-500 text-xs md:text-sm">
                <li><a href="#" className="hover:text-white transition-colors hover:pl-2 duration-300">New Releases</a></li>
                <li><a href="#" className="hover:text-white transition-colors hover:pl-2 duration-300">Men's Shoes</a></li>
                <li><a href="#" className="hover:text-white transition-colors hover:pl-2 duration-300">Women's Shoes</a></li>
                <li><a href="#" className="hover:text-white transition-colors hover:pl-2 duration-300">Kids' Shoes</a></li>
                <li><a href="#" className="hover:text-white transition-colors hover:pl-2 duration-300">Sale</a></li>
              </ul>
            </div>
          </Reveal>

          {/* Links 2 */}
          <Reveal variant="fade-up" delay={0.3} duration={0.8}>
            <div>
              <h3 className="font-bold text-sm md:text-lg mb-4 md:mb-6">SUPPORT</h3>
              <ul className="space-y-2 md:space-y-4 text-gray-500 text-xs md:text-sm">
                <li><a href="#" className="hover:text-white transition-colors hover:pl-2 duration-300">Order Status</a></li>
                <li><a href="#" className="hover:text-white transition-colors hover:pl-2 duration-300">Shipping</a></li>
                <li><a href="#" className="hover:text-white transition-colors hover:pl-2 duration-300">Returns</a></li>
                <li><a href="#" className="hover:text-white transition-colors hover:pl-2 duration-300">Contact Us</a></li>
                <li><a href="#" className="hover:text-white transition-colors hover:pl-2 duration-300">Privacy</a></li>
              </ul>
            </div>
          </Reveal>

          {/* Social */}
          <Reveal variant="fade-up" delay={0.4} duration={0.8}>
            <div className="col-span-2 md:col-span-1">
              <h3 className="font-bold text-sm md:text-lg mb-4 md:mb-6">FOLLOW US</h3>
              <div className="flex gap-3 md:gap-4">
                <a href="#" className="w-8 h-8 md:w-10 md:h-10 bg-[#1f1f1f] rounded-full flex items-center justify-center hover:bg-[#ff0000] hover:scale-110 transition-all duration-300">
                  <InstagramIcon size={16} className="md:w-5 md:h-5" />
                </a>
                <a href="#" className="w-8 h-8 md:w-10 md:h-10 bg-[#1f1f1f] rounded-full flex items-center justify-center hover:bg-[#ff0000] hover:scale-110 transition-all duration-300">
                  <TwitterIcon size={16} className="md:w-5 md:h-5" />
                </a>
                <a href="#" className="w-8 h-8 md:w-10 md:h-10 bg-[#1f1f1f] rounded-full flex items-center justify-center hover:bg-[#ff0000] hover:scale-110 transition-all duration-300">
                  <FacebookIcon size={16} className="md:w-5 md:h-5" />
                </a>
                <a href="#" className="w-8 h-8 md:w-10 md:h-10 bg-[#1f1f1f] rounded-full flex items-center justify-center hover:bg-[#ff0000] hover:scale-110 transition-all duration-300">
                  <YoutubeIcon size={16} className="md:w-5 md:h-5" />
                </a>
              </div>
            </div>
          </Reveal>
        </div>

        {/* Bottom */}
        <Reveal variant="fade-up" delay={0.5} duration={0.8}>
          <div className="flex flex-col md:flex-row justify-between items-center border-t border-white/10 pt-6 md:pt-8 text-gray-600 text-[10px] md:text-xs gap-4">
            <p>&copy; 2025 Jordan Brand. All rights reserved.</p>
            <div className="flex gap-4 md:gap-6">
              <a href="#" className="hover:text-white transition-colors">Terms</a>
              <a href="#" className="hover:text-white transition-colors">Privacy</a>
              <a href="#" className="hover:text-white transition-colors">Cookies</a>
            </div>
          </div>
        </Reveal>
      </div>
    </footer>
  );
};

export default Footer;
