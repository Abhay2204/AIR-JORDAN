import React from 'react';

export const SkeletonBlock = ({ className }: { className: string }) => (
  <div className={`animate-shimmer bg-[#1a1a1a] rounded ${className}`} />
);

export const SkeletonHero = () => {
  return (
    <div className="relative w-full h-screen min-h-[800px] overflow-hidden bg-[#0a0a0a] flex items-center">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-red-600/10 rounded-full blur-[150px]" />
      
      {/* Background text placeholder */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <SkeletonBlock className="h-[20vw] w-[80vw] opacity-10" />
      </div>

      {/* Side elements */}
      <div className="absolute left-6 top-1/2 -translate-y-1/2 hidden xl:flex flex-col gap-4 items-center">
        <div className="w-[1px] h-20 bg-white/10" />
        <SkeletonBlock className="h-24 w-3" />
        <div className="w-[1px] h-20 bg-white/10" />
      </div>

      <div className="absolute right-6 top-1/2 -translate-y-1/2 hidden xl:flex flex-col gap-4 items-center">
        <div className="w-[1px] h-20 bg-white/10" />
        <SkeletonBlock className="h-24 w-3" />
        <div className="w-[1px] h-20 bg-white/10" />
      </div>

      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
          
          {/* Left - Text Content */}
          <div className="lg:col-span-4 order-2 lg:order-1 space-y-6">
            <SkeletonBlock className="h-4 w-40" />
            <div className="space-y-2">
              <SkeletonBlock className="h-16 w-72" />
              <SkeletonBlock className="h-16 w-56" />
            </div>
            <div className="space-y-2 border-l-2 border-white/10 pl-4">
              <SkeletonBlock className="h-4 w-full max-w-sm" />
              <SkeletonBlock className="h-4 w-3/4" />
              <SkeletonBlock className="h-4 w-2/3" />
            </div>
            <div className="flex items-center gap-6">
              <SkeletonBlock className="h-14 w-40" />
              <div className="flex items-center gap-3">
                <SkeletonBlock className="h-12 w-12 rounded-full" />
                <SkeletonBlock className="h-4 w-24" />
              </div>
            </div>
            {/* Stats */}
            <div className="flex gap-8 pt-8 border-t border-white/10">
              <div className="space-y-2">
                <SkeletonBlock className="h-8 w-14" />
                <SkeletonBlock className="h-3 w-20" />
              </div>
              <div className="space-y-2">
                <SkeletonBlock className="h-8 w-8" />
                <SkeletonBlock className="h-3 w-24" />
              </div>
              <div className="space-y-2">
                <SkeletonBlock className="h-8 w-10" />
                <SkeletonBlock className="h-3 w-16" />
              </div>
            </div>
          </div>

          {/* Center - Shoe Image */}
          <div className="lg:col-span-4 order-1 lg:order-2 flex items-center justify-center relative py-8 lg:py-0">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-96 h-96 bg-red-500/10 rounded-full blur-[100px]" />
            </div>
            <SkeletonBlock className="w-[400px] h-[350px] -rotate-[25deg] rounded-3xl" />
            {/* Circular badge */}
            <div className="absolute -bottom-8 right-1/4 hidden lg:block">
              <SkeletonBlock className="w-24 h-24 rounded-full" />
            </div>
          </div>

          {/* Right - Product Card */}
          <div className="lg:col-span-4 order-3 flex justify-center lg:justify-end">
            <div className="bg-white/5 border border-white/10 p-6 rounded-2xl w-full max-w-sm space-y-6">
              <div className="flex justify-between items-start">
                <div className="space-y-2">
                  <SkeletonBlock className="h-3 w-20" />
                  <SkeletonBlock className="h-10 w-24" />
                  <SkeletonBlock className="h-3 w-16" />
                </div>
                <SkeletonBlock className="h-7 w-14 rounded" />
              </div>
              <SkeletonBlock className="h-14 w-full rounded-lg" />
              <div className="flex justify-center gap-4">
                <SkeletonBlock className="h-3 w-24" />
                <SkeletonBlock className="h-3 w-24" />
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
        <SkeletonBlock className="h-3 w-12" />
        <div className="w-[1px] h-8 bg-white/10" />
      </div>
    </div>
  );
};
