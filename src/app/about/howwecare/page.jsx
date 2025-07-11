'use client';

import React from 'react';
import SplitText from '@/components/ui/SplitText';
import Image from 'next/image';
import Threads from '@/components/ui/Threads';
import {benefits} from '@/data/benefits';

const Page = () => {
  return (
    <div className="text-black">
      {/* Hero Section with SplitText */}
      <section className="relative w-full h-[350px] md:h-[370px] overflow-hidden flex items-center justify-center bg-white">
        {/* Threads background */}
        <div className="absolute inset-0 z-0">
          <Threads amplitude={1} distance={0} enableMouseInteraction={true} />
        </div>

        {/* SplitText title in foreground */}
        <div className="relative z-10 text-center px-4 mt-20">
          <SplitText
            text="How We Care"
            className="text-5xl md:text-6xl font-bold text-gray-900"
            delay={80}
            duration={0.6}
            ease="power3.out"
            splitType="chars"
            from={{opacity: 0, y: 30}}
            to={{opacity: 1, y: 0}}
            threshold={0.1}
          />
          <p className="text-gray-600 mt-4 max-w-xl mx-auto text-lg">
            Experience the highest standards in car rental care with safety, hygiene, and customer-first service.
          </p>
        </div>
      </section>

      <div className="bg-white p-6 mb-10  rounded-2xl shadow-lg text-center max-w-3xl mx-auto border-l-4 border-red-600">
          <p className="text-xl italic font-medium text-gray-800">
            “Your Ride, Our Promise: We're Here to Make Every Journey Memorable.”
          </p>
        </div>

      {/* Image Section */}
      <section className="px-6 md:px-16 max-w-7xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
          {[1, 2, 3, 4].map (i => (
            <div
              key={i}
              className="relative overflow-hidden rounded-xl shadow hover:scale-105 transition-transform"
            >
              <Image
                src={`/HowWeCare/howwe${i}.jpg`}
                alt={`Care ${i}`}
                width={400}
                height={300}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>

        
      </section>

      {/* Benefits Cards */}
      <section className="px-6 md:px-16 lg:px-24 py-10 max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
          Why Choose ECRS ?
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map ((item, index) => (
            <div
              key={index}
              className="bg-gray-50 border border-gray-200 hover:bg-red-50 hover:border-red-400 p-6 rounded-xl shadow hover:shadow-md transition duration-300"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="p-2">{item.icon}</div>
                <h3 className="text-xl font-semibold text-gray-800">
                  {item.title}
                </h3>
              </div>
              <p className="text-gray-600">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Page;
