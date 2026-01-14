import React from 'react';
import { X, Trash2, ArrowRight, Plus, Minus } from 'lucide-react';
import { CartItem } from '../types';

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  cartItems: CartItem[];
  onRemove: (id: number) => void;
  onUpdateQuantity: (id: number, change: number) => void;
}

const CartDrawer: React.FC<CartDrawerProps> = ({ isOpen, onClose, cartItems, onRemove, onUpdateQuantity }) => {
  const subtotal = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <>
      {/* Backdrop */}
      <div 
        className={`fixed inset-0 bg-black/80 backdrop-blur-sm z-[60] transition-opacity duration-300 ${isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
        onClick={onClose}
      />

      {/* Drawer */}
      <div className={`fixed top-0 right-0 h-full w-full max-w-md bg-[#111] z-[70] shadow-2xl transform transition-transform duration-300 ease-out border-l border-white/10 flex flex-col ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        
        {/* Header */}
        <div className="p-6 border-b border-white/10 flex justify-between items-center bg-[#1a1a1a]">
            <h2 className="text-xl font-bold text-white flex items-center gap-2">
                YOUR CART 
                <span className="text-[#ff0000] text-sm font-normal">({totalItems})</span>
            </h2>
            <button onClick={onClose} className="text-gray-400 hover:text-white transition-colors">
                <X size={24} />
            </button>
        </div>

        {/* Items */}
        <div className="flex-1 overflow-y-auto p-6 space-y-6">
            {cartItems.length === 0 ? (
              <div className="text-center py-12">
                <p className="text-gray-500 mb-4">Your cart is empty</p>
                <button 
                  onClick={onClose}
                  className="text-[#ff0000] font-bold text-sm hover:underline"
                >
                  Continue Shopping
                </button>
              </div>
            ) : (
              cartItems.map(item => (
                <div key={`${item.id}-${item.size}`} className="flex gap-4 bg-[#0a0a0a] p-3 rounded-lg border border-white/5">
                    <div className="w-20 h-20 bg-gray-800 rounded overflow-hidden flex-shrink-0">
                        <img src={item.img} alt={item.name} className="w-full h-full object-cover" />
                    </div>
                    <div className="flex-1 flex flex-col justify-between">
                        <div>
                            <h3 className="text-white font-bold text-sm">{item.name}</h3>
                            <p className="text-gray-500 text-xs mt-1">Size: {item.size}</p>
                        </div>
                        <div className="flex justify-between items-center mt-2">
                            <span className="text-white font-bold">₹{(item.price * item.quantity).toLocaleString('en-IN')}</span>
                            <div className="flex items-center gap-3">
                              <div className="flex items-center gap-2 bg-[#1a1a1a] rounded">
                                <button 
                                  onClick={() => onUpdateQuantity(item.id, -1)}
                                  className="p-1.5 text-gray-400 hover:text-white transition-colors"
                                >
                                  <Minus size={14} />
                                </button>
                                <span className="text-white text-sm w-6 text-center">{item.quantity}</span>
                                <button 
                                  onClick={() => onUpdateQuantity(item.id, 1)}
                                  className="p-1.5 text-gray-400 hover:text-white transition-colors"
                                >
                                  <Plus size={14} />
                                </button>
                              </div>
                              <button 
                                onClick={() => onRemove(item.id)}
                                className="text-gray-500 hover:text-red-500 transition-colors"
                              >
                                <Trash2 size={16} />
                              </button>
                            </div>
                        </div>
                    </div>
                </div>
              ))
            )}
        </div>

        {/* Footer */}
        <div className="p-6 border-t border-white/10 bg-[#1a1a1a]">
            <div className="flex justify-between items-center mb-4">
                <span className="text-gray-400">Subtotal</span>
                <span className="text-white font-bold text-xl">₹{subtotal.toLocaleString('en-IN')}</span>
            </div>
            <p className="text-xs text-gray-500 mb-6 text-center">Shipping & taxes calculated at checkout</p>
            <button 
              className="w-full bg-[#ff0000] hover:bg-red-700 text-white font-bold py-4 rounded flex items-center justify-center gap-2 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              disabled={cartItems.length === 0}
            >
                CHECKOUT
                <ArrowRight size={18} />
            </button>
        </div>
      </div>
    </>
  );
};

export default CartDrawer;
