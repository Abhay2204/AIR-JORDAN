import React from 'react';
import { ShoppingBag, Heart } from 'lucide-react';
import { Reveal } from './Reveal';
import { useProductModal } from '../App';
import { Product } from '../types';

const PRODUCTS: Product[] = [
    { id: 1, name: "Air Jordan XXXVI", price: 17999, category: "Men's Basketball", img: "https://images.unsplash.com/photo-1600185365926-3a2ce3cdb9eb?auto=format&fit=crop&q=80&w=500", description: "The Air Jordan XXXVI is built for explosive players who want lightweight responsiveness. Featuring a new leno-weave upper and Zoom Air stacked cushioning." },
    { id: 2, name: "Jordan 'Why Not?'", price: 14999, category: "Men's Shoe", img: "https://images.unsplash.com/photo-1597045566677-8cf032ed6634?auto=format&fit=crop&q=80&w=500", description: "Russell Westbrook's signature shoe delivers the energy return and support needed for his explosive style of play. Built for those who play without limits." },
    { id: 3, name: "Jordan Delta 2", price: 12999, category: "Lifestyle", img: "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?auto=format&fit=crop&q=80&w=500", description: "The Jordan Delta 2 combines heritage style with modern comfort. React foam cushioning and a mixed-material upper create a versatile everyday sneaker." },
    { id: 4, name: "Air Jordan 1 Low", price: 9999, category: "Men's Shoe", img: "https://images.unsplash.com/photo-1552346154-21d32810aba3?auto=format&fit=crop&q=80&w=500", description: "The Air Jordan 1 Low offers iconic style in a sleek low-top silhouette. Premium leather and classic colorways make it a timeless addition to any collection." },
];

const FeaturedProducts = () => {
  const { openProductModal } = useProductModal();

  return (
    <section id="products" className="py-16 md:py-24 lg:py-32 bg-[#0f0f0f]">
        <div className="container mx-auto px-6 md:px-12">
            <div className="flex flex-col md:flex-row md:justify-between md:items-end gap-4 mb-10 md:mb-16">
                <Reveal variant="slide-right">
                    <div>
                        <h2 className="text-4xl sm:text-5xl md:text-7xl font-anton text-white mb-2">TRENDING NOW</h2>
                        <p className="text-gray-500 text-sm md:text-lg">The latest drops from the Jumpman.</p>
                    </div>
                </Reveal>
                <Reveal variant="fade-up" delay={0.3} className="hidden md:block">
                    <a href="#" className="text-[#ff0000] font-bold hover:text-white transition-colors tracking-widest text-sm border-b-2 border-[#ff0000] pb-1">VIEW ALL PRODUCTS</a>
                </Reveal>
            </div>

            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8">
                {PRODUCTS.map((product, index) => (
                    <Reveal key={product.id} variant="fade-up" delay={index * 0.15} duration={0.8} className="h-full">
                        <div 
                          className="group relative bg-[#1a1a1a] rounded-xl md:rounded-2xl overflow-hidden shadow-lg border border-white/5 hover:border-[#ff0000]/50 transition-colors h-full flex flex-col cursor-pointer"
                          onClick={() => openProductModal(product)}
                        >
                            {/* Image Container */}
                            <div className="relative h-48 sm:h-64 md:h-80 overflow-hidden bg-gray-800">
                                <img 
                                    src={product.img} 
                                    alt={product.name} 
                                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)]"
                                />
                                <button 
                                  className="absolute top-2 right-2 md:top-4 md:right-4 bg-black/40 backdrop-blur-md p-2 md:p-3 rounded-full text-white hover:bg-[#ff0000] hover:scale-110 transition-all duration-300 opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0"
                                  onClick={(e) => {
                                    e.stopPropagation();
                                  }}
                                >
                                    <Heart size={16} className="md:w-5 md:h-5" />
                                </button>
                                
                                {/* Quick Add Overlay */}
                                <div className="absolute inset-x-0 bottom-0 p-2 md:p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]">
                                    <button 
                                      className="w-full bg-white text-black font-bold py-2 md:py-4 rounded-lg md:rounded-xl flex items-center justify-center gap-2 hover:bg-gray-100 shadow-xl text-xs md:text-base"
                                      onClick={(e) => {
                                        e.stopPropagation();
                                        openProductModal(product);
                                      }}
                                    >
                                        <ShoppingBag size={14} className="md:w-[18px] md:h-[18px]" /> <span className="hidden sm:inline">QUICK VIEW</span><span className="sm:hidden">VIEW</span>
                                    </button>
                                </div>
                            </div>

                            {/* Details */}
                            <div className="p-3 md:p-6 flex-1 flex flex-col justify-between bg-gradient-to-b from-[#1a1a1a] to-[#151515]">
                                <div>
                                    <span className="text-[10px] md:text-xs text-[#cd7f32] font-bold uppercase tracking-widest">{product.category}</span>
                                    <h3 className="text-white font-bold text-sm md:text-xl mt-1 md:mt-2 mb-1 md:mb-2 group-hover:text-[#ff0000] transition-colors line-clamp-2">{product.name}</h3>
                                </div>
                                <p className="text-gray-400 font-anton text-sm md:text-lg tracking-wide">₹{product.price.toLocaleString('en-IN')}</p>
                            </div>
                        </div>
                    </Reveal>
                ))}
            </div>

            <Reveal variant="fade-up" className="mt-16 text-center md:hidden">
                <a href="#" className="text-[#ff0000] font-bold tracking-widest border-b-2 border-[#ff0000] pb-1">VIEW ALL PRODUCTS</a>
            </Reveal>
        </div>
    </section>
  );
};

export default FeaturedProducts;
