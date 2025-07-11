'use client';

import React, {useRef} from 'react';
import SplitText from '@/components/ui/SplitText';
import Threads from '@/components/ui/Threads';
import {useGSAPFadeInUp} from '@/utils/animations';
import AboutCompanySection from '@/components/ui/AboutCompanySection';
import ParallaxSection from '@/components/ui/ParallexSection';
import CallToAction from '@/components/CallToAction';
export default function AboutPage () {
  const refs = {
    title: useRef (null),
    company: useRef (null),
    stats: useRef (null),
  };

  Object.entries (refs).forEach (([_, ref], index) => {
    useGSAPFadeInUp (index * 0.2, 0.8, ref);
  });

  return (
    <div className="text-black">
      {/* Hero Section */}
      <section className="relative w-full h-[350px] md:h-[420px] overflow-hidden flex items-center justify-center bg-white">
        {/* Threads Background */}
        <div className="absolute inset-0 z-0">
          <Threads amplitude={1} distance={0} enableMouseInteraction={true} />
        </div>

        {/* SplitText Heading */}
        <div className="relative z-10 text-center px-4">
          <SplitText
            text="About Us"
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
            Get to know Executive Car Rental Services (ECRS) and our journey since 2010.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <div className="-mt-10 px-4 sm:px-6 lg:px-8 mb-20">
        <div className="max-w-4xl mx-auto">
          {/* Company Overview */}
          <section
            ref={refs.company}
            className="mb-16 bg-white p-8 rounded-xl shadow-sm border border-gray-100"
          >
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              Executive Car Rental Services
            </h2>
            <p className="text-sm font-medium uppercase text-red-600 mb-2">
              Economical | Efficient | Dependable
            </p>
            <p className="text-gray-700 text-lg leading-relaxed">
              M/S. Executive Car Rental Services (ECRS), operational since 2010, is a premium transportation company
              dedicated to providing top-quality vehicles and impeccable service to our clients. With presence in over
              <strong> 180+ cities</strong>
              , we are among the fastest-growing transport service providers in India.
              <br />
              <br />
              Our fleet includes luxury sedans, chauffeured SUVs, and MUVs — tailored to meet the diverse needs of
              corporate clients, events, airport transfers, and employee transportation services. We focus on safety,
              comfort, and a superior experience.
              <br />
              <br />
              Our branch offices are located in
              {' '}
              <strong>Viman Nagar</strong>
              ,
              {' '}
              <strong>Thergaon</strong>
              , and
              {' '}
              <strong>Akurdi</strong>
              {' '}
              (Pune, Maharashtra), situated at the heart of PMC and PCMC respectively.
            </p>
          </section>

          {/* Stats */}
          <section
            ref={refs.stats}
            className="grid grid-cols-2 md:grid-cols-4 gap-6"
          >
            {[
              {title: '24 / 7', desc: 'Hours of Work'},
              {title: '200+', desc: 'Corporate Clients'},
              {title: '180+', desc: 'Cities Presence'},
              {title: '13+', desc: 'Years Experience'},
            ].map ((stat, idx) => (
              <div
                key={idx}
                className="bg-white hover:bg-red-50 hover:border-red-400 text-center p-6 rounded-xl border shadow-sm hover:shadow-md transition duration-300"
              >
                <h3 className="text-3xl font-bold text-red-600 mb-2">
                  {stat.title}
                </h3>
                <p className="text-gray-700 font-medium">{stat.desc}</p>
              </div>
            ))}
          </section>
        </div>
      </div>
      <ParallaxSection />
      <AboutCompanySection />
      <CallToAction />
    </div>
  );
}
