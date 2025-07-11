Available round the clock for your convenience

'use client';

import { useGSAPSlideInFromLeft, useGSAPFadeInUp } from '@/utils/animations';
import { useEffect, useRef } from 'react';
import { usePathname } from 'next/navigation';

export default function Hero() {
  const videoContainerRef = useRef(null); 
  const contentRef = useRef(null); 
  const pathname = usePathname();

  const text =
    "Corporate Car Rental Services : A reliable travel partner for your";

    const text1 = "Safe & Pleasant Journey";

  // Initialize animations
  useGSAPSlideInFromLeft(0, 1.5, videoContainerRef);
  useGSAPFadeInUp(0.5, 1.2, contentRef);

  // Handle video reload
  useEffect(() => {
    const video = videoContainerRef.current?.querySelector('video');
    if (pathname === '/' && video) {
      video.load();
      video.play().catch(e => console.log("Autoplay prevented:", e));
    }
  }, [pathname]);

  return (
    <section className="relative h-[95vh] overflow-hidden" ref={videoContainerRef}>
      <video
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
       className="absolute top-0 left-0 w-full h-full object-cover z-0 rounded-b-none lg:rounded-b-[300px] brightness-75"
        key={pathname}
      >
        <source src="/herosectionvideo.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

   

      <div
        ref={contentRef}
        className="flex-col relative z-20 h-full flex items-center justify-center text-center text-white px-4 max-w-[700px] w-full mx-auto"
      >
        <h2 className="text-2xl sm:text-3xl font-bold leading-snug">
          Corporate Car Rental Services : A reliable travel partner for your
          {' '}
          <span className="text-red-500">Safe & Pleasant Journey</span>
        </h2>
        <h6 className="text-base sm:text-xl font-semibold mt-4">
          Economical | Efficient | Dependable
        </h6>

        <div className="mt-6 flex gap-4">
          <button className="px-6 py-2 rounded-lg font-semibold bg-transparent border border-white hover:bg-white hover:text-black hover:shadow-white/60 hover:shadow-lg transition-all duration-300 hover:scale-105">
            Contact Us
          </button>
        </div>
      </div>
    </section>
  );
}



