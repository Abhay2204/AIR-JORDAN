import React, { useState } from 'react';
import { X, ShoppingBag, Heart, Minus, Plus, Check } from 'lucide-react';
import { Product } from '../types';

interface ProductModalProps {
  product: Product | null;
  isOpen: boolean;
  onClose: () => void;
  onAddToCart: (product: Product, size: string, quantity: number) => void;
}

const SIZES = ['US 7', 'US 7.5', 'US 8', 'US 8.5', 'US 9', 'US 9.5', 'US 10', 'US 10.5', 'US 11', 'US 12'];

const ProductModal: React.FC<ProductModalProps> = ({ product, isOpen, onClose, onAddToCart }) => {
  const [selectedSize, setSelectedSize] = useState<string>('');
  const [quantity, setQuantity] = useState(1);
  const [added, setAdded] = useState(false);

  if (!product) return null;

  const handleAddToCart = () => {
    if (!selectedSize) return;
    onAddToCart(product, selectedSize, quantity);
    setAdded(true);
    setTimeout(() => {
      setAdded(false);
      onClose();
      setSelectedSize('');
      setQuantity(1);
    }, 1500);
  };

  const handleClose = () => {
    onClose();
    setSelectedSize('');
    setQuantity(1);
    setAdded(false);
  };

  return (
    <>
      {/* Backdrop */}
      <div 
        className={`fixed inset-0 bg-black/90 backdrop-blur-sm z-[80] transition-opacity duration-300 ${isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
        onClick={handleClose}
      />

      {/* Modal */}
      <div className={`fixed inset-0 md:inset-4 lg:inset-10 xl:inset-20 bg-[#111] z-[90] md:rounded-2xl overflow-hidden transform transition-all duration-500 ${isOpen ? 'scale-100 opacity-100' : 'scale-95 opacity-0 pointer-events-none'}`}>
        
        {/* Close Button */}
        <button 
          onClick={handleClose}
          className="absolute top-4 right-4 md:top-6 md:right-6 z-10 w-10 h-10 bg-white/10 rounded-full flex items-center justify-center text-white hover:bg-white/20 transition-colors"
        >
          <X size={20} />
        </button>

        <div className="h-full flex flex-col lg:flex-row overflow-y-auto lg:overflow-hidden">
          
          {/* Image Section */}
          <div className="lg:w-1/2 h-56 sm:h-64 lg:h-full bg-[#0a0a0a] relative flex items-center justify-center p-4 md:p-8 flex-shrink-0">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-64 md:w-96 h-64 md:h-96 bg-red-500/10 rounded-full blur-[100px]" />
            </div>
            <img 
              src={product.img} 
              alt={product.name}
              className="relative z-10 w-full max-w-xs md:max-w-md h-auto object-contain"
              onError={(e) => {
                const target = e.target as HTMLImageElement;
                target.style.display = 'none';
                const parent = target.parentElement;
                if (parent && !parent.querySelector('.error-message')) {
                  const errorDiv = document.createElement('div');
                  errorDiv.className = 'error-message text-white/50 text-center';
                  errorDiv.textContent = 'Image not available';
                  parent.appendChild(errorDiv);
                }
              }}
            />
            
            {/* Wishlist */}
            <button className="absolute top-4 left-4 md:top-6 md:left-6 w-10 h-10 bg-white/10 rounded-full flex items-center justify-center text-white hover:bg-[#ff0000] hover:text-white transition-colors">
              <Heart size={18} />
            </button>
          </div>

          {/* Details Section */}
          <div className="lg:w-1/2 p-6 md:p-8 lg:p-12 lg:overflow-y-auto flex flex-col">
            <div className="flex-1">
              <span className="text-[#ff0000] text-xs font-bold uppercase tracking-widest">{product.category}</span>
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-anton text-white mt-2 mb-4">{product.name}</h2>
              
              <div className="flex items-baseline gap-3 mb-4 md:mb-6">
                <span className="text-2xl md:text-3xl font-anton text-white">₹{product.price.toLocaleString('en-IN')}</span>
                <span className="text-gray-500 text-sm line-through">₹{Math.round(product.price * 1.2).toLocaleString('en-IN')}</span>
                <span className="text-green-500 text-xs font-bold">Save 17%</span>
              </div>

              <p className="text-gray-400 leading-relaxed mb-6 md:mb-8 text-sm md:text-base">
                {product.description || 'Experience unmatched performance with responsive Zoom Air cushioning and a lightweight, secure fit designed for players who want to elevate their game to the next level.'}
              </p>

              {/* Size Selection */}
              <div className="mb-6 md:mb-8">
                <div className="flex justify-between items-center mb-3 md:mb-4">
                  <span className="text-white font-bold text-sm uppercase tracking-wider">Select Size</span>
                  <a href="#" className="text-[#ff0000] text-xs hover:underline">Size Guide</a>
                </div>
                <div className="grid grid-cols-5 gap-2">
                  {SIZES.map(size => (
                    <button
                      key={size}
                      onClick={() => setSelectedSize(size)}
                      className={`py-2 md:py-3 text-xs md:text-sm font-bold rounded-lg transition-all ${
                        selectedSize === size 
                          ? 'bg-[#ff0000] text-white' 
                          : 'bg-[#1a1a1a] text-white hover:bg-[#252525] border border-white/10'
                      }`}
                    >
                      {size.replace('US ', '')}
                    </button>
                  ))}
                </div>
                {!selectedSize && (
                  <p className="text-red-400 text-xs mt-2">Please select a size</p>
                )}
              </div>

              {/* Quantity */}
              <div className="mb-6 md:mb-8">
                <span className="text-white font-bold text-sm uppercase tracking-wider block mb-3 md:mb-4">Quantity</span>
                <div className="flex items-center gap-4">
                  <div className="flex items-center bg-[#1a1a1a] rounded-lg border border-white/10">
                    <button 
                      onClick={() => setQuantity(q => Math.max(1, q - 1))}
                      className="p-2 md:p-3 text-gray-400 hover:text-white transition-colors"
                    >
                      <Minus size={18} />
                    </button>
                    <span className="w-10 md:w-12 text-center text-white font-bold">{quantity}</span>
                    <button 
                      onClick={() => setQuantity(q => q + 1)}
                      className="p-2 md:p-3 text-gray-400 hover:text-white transition-colors"
                    >
                      <Plus size={18} />
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Add to Cart Button */}
            <div className="space-y-3 md:space-y-4 pb-4 md:pb-0">
              <button 
                onClick={handleAddToCart}
                disabled={!selectedSize || added}
                className={`w-full py-3 md:py-4 rounded-lg font-bold text-base md:text-lg flex items-center justify-center gap-3 transition-all ${
                  added 
                    ? 'bg-green-600 text-white' 
                    : selectedSize 
                      ? 'bg-[#ff0000] hover:bg-red-700 text-white hover:scale-[1.02]' 
                      : 'bg-gray-700 text-gray-400 cursor-not-allowed'
                }`}
              >
                {added ? (
                  <>
                    <Check size={20} />
                    ADDED TO CART
                  </>
                ) : (
                  <>
                    <ShoppingBag size={20} />
                    ADD TO CART - ₹{(product.price * quantity).toLocaleString('en-IN')}
                  </>
                )}
              </button>
              
              <div className="flex justify-center gap-4 md:gap-6 text-gray-500 text-[10px] md:text-xs">
                <span>✓ Free Shipping</span>
                <span>✓ Easy Returns</span>
                <span>✓ Authentic</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductModal;
