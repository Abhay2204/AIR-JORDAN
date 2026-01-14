import React, { useState } from 'react';
import { Search, ShoppingBag, User, Menu, X } from 'lucide-react';
import { NikeLogo, JordanLogo } from './Icons';
import { SkeletonBlock } from './Skeleton';

interface NavbarProps {
  isLoading: boolean;
  onOpenCart: () => void;
  cartCount?: number;
}

const Navbar: React.FC<NavbarProps> = ({ isLoading, onOpenCart, cartCount = 0 }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  if (isLoading) {
    return (
      <nav className="fixed top-0 w-full z-50 px-8 py-6 flex justify-between items-center backdrop-blur-sm bg-black/50 border-b border-white/5">
        <div className="flex gap-4">
          <SkeletonBlock className="w-8 h-8 rounded-full" />
          <SkeletonBlock className="w-12 h-8 rounded-full" />
        </div>
        <div className="hidden md:flex gap-8">
          {[1, 2, 3, 4, 5].map((i) => (
            <SkeletonBlock key={i} className="w-16 h-4" />
          ))}
        </div>
        <div className="flex gap-6">
          <SkeletonBlock className="w-6 h-6 rounded-full" />
          <SkeletonBlock className="w-6 h-6 rounded-full" />
        </div>
      </nav>
    );
  }

  const menuItems = [
    { label: 'HOME', href: '#' },
    { label: 'ABOUT', href: '#about' },
    { label: 'PRODUCTS', href: '#products' },
    { label: 'SALE', href: '#sale' },
    { label: 'CONTACT', href: '#contact' }
  ];

  return (
    <>
      <nav className="fixed top-0 left-0 w-full z-50 px-4 md:px-12 py-3 md:py-6 flex justify-between items-center backdrop-blur-md bg-black/80 border-b border-white/5 transition-all duration-500 animate-fade-in-down" style={{ maxWidth: '100vw' }}>
        {/* Logos */}
        <div className="flex items-center text-white">
          <JordanLogo className="w-6 h-6 md:w-8 md:h-8 hover:text-[#ff0000] transition-colors cursor-pointer" />
          <div className="h-4 w-[1px] bg-white/30 hidden sm:block mx-4" />
          <NikeLogo className="w-10 h-10 md:w-12 md:h-12 hover:text-[#ff0000] transition-colors cursor-pointer hidden sm:block" />
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-10">
          {menuItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="text-sm font-bold tracking-widest text-gray-300 hover:text-white relative group"
            >
              {item.label}
              <span className="absolute -bottom-2 left-0 w-0 h-[2px] bg-[#ff0000] transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
        </div>

        {/* Actions */}
        <div className="flex items-center gap-5 md:gap-6 text-white">
          {/* Mobile Menu Button */}
          <button 
            className="md:hidden hover:text-[#ff0000] transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Menu"
          >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
          
          {/* Desktop Search */}
          <button className="hidden md:block hover:text-[#ff0000] transition-colors">
              <Search size={20} strokeWidth={2} />
          </button>
          
          <button 
              onClick={onOpenCart}
              className="hover:text-[#ff0000] transition-colors relative"
              aria-label="Cart"
          >
              <ShoppingBag size={24} className="md:w-5 md:h-5" strokeWidth={2} />
              {cartCount > 0 && (
                <span className="absolute -top-2 -right-2 w-5 h-5 bg-[#ff0000] rounded-full text-[10px] font-bold flex items-center justify-center">
                  {cartCount > 9 ? '9+' : cartCount}
                </span>
              )}
          </button>
          <button className="hover:text-[#ff0000] transition-colors hidden sm:block">
              <User size={20} strokeWidth={2} />
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div 
        className={`fixed top-[58px] md:top-[73px] left-0 w-full bg-black/95 backdrop-blur-lg z-40 md:hidden transition-all duration-300 ease-in-out border-b border-white/10 ${
          isMobileMenuOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0 overflow-hidden'
        }`}
      >
        <div className="px-6 py-8 space-y-6">
          {menuItems.map((item, index) => (
            <a
              key={item.label}
              href={item.href}
              onClick={() => setIsMobileMenuOpen(false)}
              className="block text-lg font-bold tracking-widest text-gray-300 hover:text-white hover:translate-x-2 transition-all duration-300"
              style={{ 
                animation: isMobileMenuOpen ? `slideIn 0.3s ease-out ${index * 0.1}s forwards` : 'none',
                opacity: isMobileMenuOpen ? 1 : 0
              }}
            >
              <span className="flex items-center gap-3">
                <span className="w-2 h-2 bg-[#ff0000] rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
                {item.label}
              </span>
            </a>
          ))}
          
          {/* Mobile User Button */}
          <button className="flex items-center gap-3 text-lg font-bold tracking-widest text-gray-300 hover:text-white hover:translate-x-2 transition-all duration-300 sm:hidden">
            <User size={20} />
            <span>ACCOUNT</span>
          </button>
        </div>
      </div>

      <style>{`
        @keyframes slideIn {
          from {
            opacity: 0;
            transform: translateX(-20px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
      `}</style>
    </>
  );
};

export default Navbar;