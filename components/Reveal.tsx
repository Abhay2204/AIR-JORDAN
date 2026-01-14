import React, { useEffect, useRef, useState } from 'react';

type AnimationVariant = 
  | 'fade-up' 
  | 'fade-down' 
  | 'slide-left' 
  | 'slide-right' 
  | 'zoom-in' 
  | 'zoom-out'
  | 'blur-in';

interface RevealProps {
  children: React.ReactNode;
  className?: string;
  delay?: number; // Delay in seconds
  duration?: number; // Duration in seconds
  threshold?: number; // Intersection threshold
  variant?: AnimationVariant;
}

export const Reveal = ({ 
  children, 
  className = "", 
  delay = 0, 
  duration = 1,
  threshold = 0.2,
  variant = 'fade-up'
}: RevealProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect(); // Only animate once
        }
      },
      { 
        threshold: threshold,
        rootMargin: "0px 0px -100px 0px" 
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      observer.disconnect();
    };
  }, [threshold]);

  const getTransformClasses = () => {
    if (isVisible) return 'opacity-100 translate-x-0 translate-y-0 scale-100 blur-0';

    switch (variant) {
      case 'fade-up':
        return 'opacity-0 translate-y-24';
      case 'fade-down':
        return 'opacity-0 -translate-y-24';
      case 'slide-left':
        return 'opacity-0 -translate-x-24';
      case 'slide-right':
        return 'opacity-0 translate-x-24';
      case 'zoom-in':
        return 'opacity-0 scale-75';
      case 'zoom-out':
        return 'opacity-0 scale-110';
      case 'blur-in':
        return 'opacity-0 blur-sm scale-95';
      default:
        return 'opacity-0 translate-y-24';
    }
  };

  return (
    <div
      ref={ref}
      className={`${className} transition-all ease-[cubic-bezier(0.22,1,0.36,1)] transform will-change-transform ${getTransformClasses()}`}
      style={{ 
        transitionDuration: `${duration}s`, 
        transitionDelay: `${delay}s` 
      }}
    >
      {children}
    </div>
  );
};
