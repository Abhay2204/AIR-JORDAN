import React from 'react';
import { Search, ShoppingBag, User, Menu } from 'lucide-react';
import { NikeLogo, JordanLogo } from './Icons';
import { SkeletonBlock } from './Skeleton';

interface NavbarProps {
  isLoading: boolean;
  onOpenCart: () => void;
  cartCount?: number;
}

const Navbar: React.FC<NavbarProps> = ({ isLoading, onOpenCart, cartCount = 0 }) => {
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
    <nav className="fixed top-0 w-full z-50 px-6 md:px-12 py-6 flex justify-between items-center backdrop-blur-md bg-black/80 border-b border-white/5 transition-all duration-500 animate-fade-in-down">
      {/* Logos */}
      <div className="flex items-center gap-6 text-white">
        <JordanLogo className="w-8 h-8 hover:text-[#ff0000] transition-colors cursor-pointer" />
        <div className="h-4 w-[1px] bg-white/30 hidden sm:block" />
        <NikeLogo className="w-12 h-12 hover:text-[#ff0000] transition-colors cursor-pointer hidden sm:block" />
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
      <div className="flex items-center gap-6 text-white">
        <button className="hover:text-[#ff0000] transition-colors">
            <Search size={20} strokeWidth={2} />
        </button>
        <button 
            onClick={onOpenCart}
            className="hover:text-[#ff0000] transition-colors relative"
        >
            <ShoppingBag size={20} strokeWidth={2} />
            {cartCount > 0 && (
              <span className="absolute -top-2 -right-2 w-5 h-5 bg-[#ff0000] rounded-full text-xs font-bold flex items-center justify-center">
                {cartCount > 9 ? '9+' : cartCount}
              </span>
            )}
        </button>
        <button className="hover:text-[#ff0000] transition-colors hidden sm:block">
            <User size={20} strokeWidth={2} />
        </button>
        <button className="md:hidden hover:text-[#ff0000]">
            <Menu size={24} />
        </button>
      </div>
    </nav>
  );
};

export default Navbar;