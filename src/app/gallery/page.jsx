'use client';
import React, {useRef} from 'react';
import Masonry from '@/components/ui/Masonry';
import {items} from '@/data/gallery';
import SplitText from '@/components/ui/SplitText';
import Threads from '@/components/ui/Threads';
import {useGSAPFadeInUp} from '@/utils/animations';

const GalleryPage = () => {
  const titleRef = useRef (null);
  useGSAPFadeInUp (0, 0.8, titleRef);

  return (
    <div className="text-black">
      {/* Hero Section with Threads */}
      {/* <section className="relative w-full h-[350px] md:h-[420px] overflow-hidden flex items-center justify-center bg-white"> */}
      <section className="relative w-full h-[240px] md:h-[360px] -mt-6 overflow-hidden flex items-center justify-center bg-white">
        {/* Threads background */}
        {/* <div className="absolute mt-16 inset-0 z-0">
          <Threads amplitude={1} distance={0} enableMouseInteraction={true} />
        </div> */}

        <div className="absolute inset-0 z-0 scale-[1.3] mt-28 translate-y-[-10%]">
          <Threads amplitude={1} distance={0} enableMouseInteraction={false} />
        </div>

        {/* SplitText Heading */}
        <div className="relative z-10 text-center px-4" ref={titleRef}>
          <SplitText
            text="Story Told Through Visuals"
            className="text-5xl md:text-3xl font-bold text-black"
            delay={80}
            duration={0.6}
            ease="power3.out"
            splitType="chars"
            from={{ opacity: 0, y: 30 }}
            to={{ opacity: 1, y: 0 }}
            threshold={0.1}
          />
          <p className="text-gray-600  max-w-2xl mx-auto text-lg">
            Browse through our vibrant gallery of visuals and videos, each
            telling a unique story.
          </p>
        </div>
      </section>

      {/* Masonry Grid Section */}
      <section className="px-4 md:px-8 lg:px-16 -mt-16">
        <Masonry
          items={items}
          ease="power3.out"
          duration={0.6}
          stagger={0.05}
          animateFrom="top"
          scaleOnHover={true}
          hoverScale={0.95}
          blurToFocus={true}
          colorShiftOnHover={false}
          className="mb-20"
        />
      </section>
    </div>
  );
};

export default GalleryPage;



