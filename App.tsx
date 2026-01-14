import React, { useState, useEffect, createContext, useContext } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Innovation from './components/Innovation';
import Categories from './components/Categories';
import About from './components/About';
import FeaturedProducts from './components/FeaturedProducts';
import Sale from './components/Sale';
import Newsletter from './components/Newsletter';
import Contact from './components/Contact';
import Footer from './components/Footer';
import CartDrawer from './components/CartDrawer';
import ProductModal from './components/ProductModal';
import { SkeletonHero } from './components/Skeleton';
import { Product, CartItem } from './types';

// Cart Context
interface CartContextType {
  cartItems: CartItem[];
  addToCart: (product: Product, size: string, quantity: number) => void;
  removeFromCart: (id: number) => void;
  updateQuantity: (id: number, change: number) => void;
  cartCount: number;
}

export const CartContext = createContext<CartContextType | null>(null);

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) throw new Error('useCart must be used within CartProvider');
  return context;
};

// Product Modal Context
interface ProductModalContextType {
  openProductModal: (product: Product) => void;
}

export const ProductModalContext = createContext<ProductModalContextType | null>(null);

export const useProductModal = () => {
  const context = useContext(ProductModalContext);
  if (!context) throw new Error('useProductModal must be used within ProductModalProvider');
  return context;
};

const App: React.FC = () => {
  const [loading, setLoading] = useState(true);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  
  // Product Modal State
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [isProductModalOpen, setIsProductModalOpen] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  // Cart Functions
  const addToCart = (product: Product, size: string, quantity: number) => {
    setCartItems(items => {
      const existingItem = items.find(item => item.id === product.id && item.size === size);
      if (existingItem) {
        return items.map(item => 
          item.id === product.id && item.size === size 
            ? { ...item, quantity: item.quantity + quantity }
            : item
        );
      }
      return [...items, {
        id: product.id,
        name: product.name,
        price: product.price,
        size,
        img: product.img,
        quantity
      }];
    });
  };

  const removeFromCart = (id: number) => {
    setCartItems(items => items.filter(item => item.id !== id));
  };

  const updateQuantity = (id: number, change: number) => {
    setCartItems(items => 
      items.map(item => {
        if (item.id === id) {
          const newQuantity = item.quantity + change;
          if (newQuantity < 1) return item;
          return { ...item, quantity: newQuantity };
        }
        return item;
      })
    );
  };

  const cartCount = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  // Product Modal Functions
  const openProductModal = (product: Product) => {
    setSelectedProduct(product);
    setIsProductModalOpen(true);
  };

  const closeProductModal = () => {
    setIsProductModalOpen(false);
    setTimeout(() => setSelectedProduct(null), 300);
  };

  const handleAddToCartFromModal = (product: Product, size: string, quantity: number) => {
    addToCart(product, size, quantity);
  };

  return (
    <CartContext.Provider value={{ cartItems, addToCart, removeFromCart, updateQuantity, cartCount }}>
      <ProductModalContext.Provider value={{ openProductModal }}>
        <div className="min-h-screen bg-[#0a0a0a] text-white selection:bg-[#ff0000] selection:text-white overflow-x-hidden max-w-full">
          <Navbar isLoading={loading} onOpenCart={() => setIsCartOpen(true)} cartCount={cartCount} />
          
          <CartDrawer 
            isOpen={isCartOpen} 
            onClose={() => setIsCartOpen(false)}
            cartItems={cartItems}
            onRemove={removeFromCart}
            onUpdateQuantity={updateQuantity}
          />

          <ProductModal 
            product={selectedProduct}
            isOpen={isProductModalOpen}
            onClose={closeProductModal}
            onAddToCart={handleAddToCartFromModal}
          />

          <main>
            {loading ? (
              <SkeletonHero />
            ) : (
              <div className="animate-fade-in">
                <Hero />
                <Innovation />
                <Categories />
                <Sale />
                <FeaturedProducts />
                <About />
                <Newsletter />
                <Contact />
                <Footer />
              </div>
            )}
          </main>

          <style>{`
            @keyframes fadeIn {
                from { opacity: 0; transform: scale(0.98); }
                to { opacity: 1; transform: scale(1); }
            }
            .animate-fade-in {
                animation: fadeIn 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards;
            }
            @keyframes fadeInDown {
                from { opacity: 0; transform: translateY(-20px); }
                to { opacity: 1; transform: translateY(0); }
            }
            .animate-fade-in-down {
                animation: fadeInDown 0.6s ease-out forwards;
            }
            .text-outline-black {
              -webkit-text-stroke: 1px black;
              color: transparent;
            }
            .ease-cubic-out {
              transition-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
            }
          `}</style>
        </div>
      </ProductModalContext.Provider>
    </CartContext.Provider>
  );
};

export default App;
