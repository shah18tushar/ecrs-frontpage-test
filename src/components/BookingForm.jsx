"use client";

import React, { useRef } from "react";
import MagnifierCursor from "./MagnifierCursor";

const VideoParallax = () => {
  const videoContainerRef = useRef(null);
  const contentRef = useRef(null);

  const text = " Discover the";
  const text1 = "World on Wheels.";

  return (
    <section className="relative h-screen overflow-hidden">
      {/* Video container with absolute positioning (not fixed) */}
      <div
        ref={videoContainerRef}
        className="absolute top-0 left-0 w-full h-full z-0"
      >
        <video
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          className="w-full h-full object-cover brightness-[0.8]"
        >
          <source src="/herosectionvideo.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="absolute inset-0 bg-black/30" />
      </div>

      {/* Content container */}
      <div
        ref={contentRef}
        className="relative z-10 h-full flex flex-col justify-center px-6 sm:px-12 lg:px-24 text-white"
      >
        <div className="max-w-4xl space-y-6">
          <h1 className="text-4xl lg:text-5xl font-serif font-bold leading-tight">
            <MagnifierCursor text={text} cursorSize={65} />{" "}
            <span className="text-red-400">
              <MagnifierCursor text={text1} cursorSize={65} />
            </span>
          </h1>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            <div className=" p-6 border-l-4 border-gold-500">
              <h3 className="text-xl font-serif mb-3 text-gold-500">
                Luxury Fleet
              </h3>
              <p className="font-light">
                From Rolls-Royce to Bentley, experience automotive perfection
                with our hand-picked collection.
              </p>
            </div>
            <div className="p-6 border-l-4 border-gold-500">
              <h3 className="text-xl font-serif mb-3 text-gold-500">
                24/7 Service
              </h3>
              <p className="font-light">
                Our concierge team is available around the clock to ensure
                seamless luxury experiences.
              </p>
            </div>
            <div className="p-6 border-l-4 border-gold-500">
              <h3 className="text-xl font-serif mb-3 text-gold-500">
                Experienced Chauffeurs
              </h3>
              <p className="font-light">
                Pick up in one city, drop off in another. Our network spans
                across major destinations.
              </p>
            </div>
          </div>

          <div className="flex flex-col justify-center sm:flex-row gap-4 mt-12">
            <button className="border-2 border-white hover:border-gold-500 hover:text-gold-500 font-medium py-3 px-8 rounded-sm transition-all duration-300 transform hover:scale-105 flex items-center gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z"
                  clipRule="evenodd"
                />
              </svg>
              Instant Booking
            </button>
          </div>
        </div>

        {/* Luxury assurance badge */}
        <div className="absolute right-12 bottom-12 hidden lg:block">
          <div className="flex flex-col items-end">
            <span className="text-sm tracking-widest mb-1">TRUSTED BY</span>
            <div className="flex gap-4">
              <span className="text-xs opacity-80">FIVE-STAR HOTELS</span>
              <span className="text-xs opacity-80">CELEBRITIES</span>
              <span className="text-xs opacity-80">VIP CLIENTS</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoParallax;
