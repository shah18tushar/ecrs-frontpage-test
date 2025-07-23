'use client';

import React, {useRef} from 'react';
import SplitText from '@/components/ui/SplitText';
import Threads from '@/components/ui/Threads';
import {useGSAPFadeInUp} from '@/utils/animations';
import AboutCompanySection from '@/components/ui/AboutCompanySection';
import ParallaxSection from '@/components/ui/ParallexSection';
import CallToAction from '@/components/CallToAction';
import { Fuel, HandMetal, LucideBriefcase, LucideCar, LucideCheck, LucideCheckCircle, LucideClipboardList, LucideMonitorCheck, LucideShieldCheck, LucideTarget, LucideTrendingUp, LucideUserCheck } from 'lucide-react';
import MagnifierCursor from '@/components/MagnifierCursor';
export default function AboutPage () {
  const refs = {
    title: useRef (null),
    company: useRef (null),
    stats: useRef (null),
  };

  Object.entries (refs).forEach (([_, ref], index) => {
    useGSAPFadeInUp (index * 0.2, 0.8, ref);
  });

   const text = "About Executive Car Rental Services";
   const text1 = "Our Vision & Mission";

  return (
    <div className="text-black">
      {/* Hero Section */}
      <section className="relative w-full h-[350px] md:h-[320px] overflow-hidden flex items-center justify-center bg-white">
        {/* Threads Background */}
        <div className="absolute inset-0 z-0">
          <Threads amplitude={1} distance={0} enableMouseInteraction={true} />
        </div>

        {/* SplitText Heading */}
        <div className="relative z-10 text-center px-4 mt-16">
          <SplitText
            text="About Us"
            className="text-5xl md:text-6xl font-bold text-gray-900"
            delay={80}
            duration={0.6}
            ease="power3.out"
            splitType="chars"
            from={{ opacity: 0, y: 30 }}
            to={{ opacity: 1, y: 0 }}
            threshold={0.1}
          />
          <p className="text-gray-600 mt-0 max-w-xl mx-auto text-lg">
            Get to know Executive Car Rental Services (ECRS) and our journey
            since 2010.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <div className="-mt-0 px-4 sm:px-6 lg:px-8 mb-20">
        <div className="max-w-7xl mx-auto">
          {/* Company Overview */}
          <section ref={refs.company} className="mb-16 bg-white p-8">
            <div className="max-w-5xl mx-auto">
              <p className="text-red-500 font-medium text-center tracking-widest mb-3 text-sm uppercase">
                Chauffeured Car Services
              </p>

              <h2 className="text-3xl md:text-3xl font-bold text-center font-serif text-gray-900 mb-6">
                <MagnifierCursor text={text} cursorSize={45} />
                <div className="w-72 mt-2 h-0.5 bg-gradient-to-r from-transparent via-red-500 to-transparent mx-auto"></div>
              </h2>
              {/* Founded & Growth */}
              <div className="mb-14">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-red-50 rounded-full flex items-center justify-center mr-4">
                    <LucideTrendingUp className="w-6 h-6 text-red-500" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-800">
                    Founded Date & Where we stand now
                  </h3>
                </div>
                <p className="text-gray-700 leading-relaxed">
                  Executive car rental services company Founded in 2010 in Pune,
                  a leading provider of executive and corporate car rental
                  services across India. With over a decade of experience, we
                  specialize in delivering reliable, comfortable, and
                  professional transportation solutions tailored for business
                  travelers, corporate events, employee transportation service,
                  short-tearm and long-term mobility needs. Our fleet includes a
                  wide range of premium vehicles, driven by trained chauffeurs,
                  ensuring punctuality, safety, and seamless service at every
                  step. With a strong presence in over 180+ cities across India,
                  we are trusted by 200 + corporates, executives, and travel
                  managers for our consistency, scalability, and commitment to
                  excellence.
                </p>
                <div className="mt-4 grid grid-cols-2 md:grid-cols-5 gap-4">
                  <div className="bg-red-50 p-3 rounded-lg border border-red-400">
                    <p className="text-red-500 font-bold text-xl text-center">
                      180+
                    </p>
                    <p className="text-gray-600 text-sm text-center font-medium">
                      Cities Across India
                    </p>
                  </div>
                  <div className="bg-red-50 p-3 rounded-lg border border-red-400">
                    <p className="text-red-500 font-bold text-center text-xl">
                      200+
                    </p>
                    <p className="text-gray-600 text-sm text-center font-medium">
                      Corporate Clients
                    </p>
                  </div>
                  <div className="bg-red-50 p-3 rounded-lg border border-red-400">
                    <p className="text-red-500 font-bold text-xl text-center">
                      40,000+
                    </p>
                    <p className="text-gray-600 text-sm text-center font-medium">
                      Sq. Ft Parking Area
                    </p>
                  </div>
                  <div className="bg-red-50 p-3 rounded-lg border border-red-400">
                    <p className="text-red-500 font-bold text-xl text-center">
                      24 / 7
                    </p>
                    <p className="text-gray-600 text-sm text-center font-medium">
                      Operational
                    </p>
                  </div>
                  <div className="bg-red-50 p-2 rounded-lg border border-red-400">
                    <p className="text-red-500 font-bold text-xl text-center">
                      13+
                    </p>
                    <p className="text-gray-600 text-sm text-center font-medium">
                      Years in the travel industry
                    </p>
                  </div>
                </div>
              </div>

              {/* Technology & Security */}
              <div className="mb-14">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-red-50 rounded-full flex items-center justify-center mr-4">
                    <LucideShieldCheck className="w-6 h-6 text-red-500" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-800">
                    Technology & Security
                  </h3>
                </div>
                <p className="text-gray-700 leading-relaxed mb-3">
                  We leverage cutting-edge software and security systems to
                  deliver safe, efficient, and technology-driven mobility
                  solutions.
                </p>
                <div className="bg-gray-50 p-4 rounded-lg border-l-4 border-red-500">
                  <p className="text-gray-700 font-medium">
                    <LucideCheckCircle className="inline w-5 h-5 text-red-500 mr-2" />
                    Our systems follow ISO 27001 standards to maintain strict
                    data and information security protocols
                  </p>
                </div>
              </div>

              {/* Services & Support */}
              <div className="mb-14">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-red-50 rounded-full flex items-center justify-center mr-4">
                    <LucideBriefcase className="w-6 h-6 text-red-500" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-800">
                    Services & Support
                  </h3>
                </div>
                <p className="text-gray-700 leading-relaxed mb-4">
                  As a leading provider in the car rental industry, we offer
                  comprehensive solutions including:
                </p>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="flex items-start">
                    <LucideCheck className="w-5 h-5 text-red-500 mt-1 mr-2 flex-shrink-0" />
                    <p>Employee Transportation Services (ETS)</p>
                  </div>
                  <div className="flex items-start">
                    <LucideCheck className="w-5 h-5 text-red-500 mt-1 mr-2 flex-shrink-0" />
                    <p>Spot rentals & corporate monthly rentals</p>
                  </div>
                  <div className="flex items-start">
                    <LucideCheck className="w-5 h-5 text-red-500 mt-1 mr-2 flex-shrink-0" />
                    <p>Short-term and long-term rental plans</p>
                  </div>
                  <div className="flex items-start">
                    <LucideCheck className="w-5 h-5 text-red-500 mt-1 mr-2 flex-shrink-0" />
                    <p>Dedicated Key Account Manager (CRM Team)</p>
                  </div>
                </div>
                <div className="mt-4 bg-red-50 p-4 rounded-lg">
                  <p className="text-gray-700">
                    <LucideMonitorCheck className="inline w-5 h-5 text-red-500 mr-2" />
                    Our fleet is continuously monitored by operations team using
                    real-time GPS tracking for enhanced safety and efficiency
                  </p>
                </div>
              </div>

              {/* Fleet & Compliance */}
              <div className="mb-14">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-red-50 rounded-full flex items-center justify-center mr-4">
                    <LucideCar className="w-6 h-6 text-red-500" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-800">
                    Fleet & Compliance
                  </h3>
                </div>
                <p className="text-gray-700 leading-relaxed mb-4">
                  We maintain strict fleet compliance to ensure safety,
                  reliability, and regulatory adherence across all operations.
                  Our vehicles are regularly inspected and maintained according
                  to manufacturer standards and government regulations.
                </p>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-gray-800 mb-2 flex items-center">
                      <LucideClipboardList className="w-5 h-5 text-red-500 mr-2" />
                      Vehicle Compliance
                    </h4>
                    <p className="text-gray-700 text-sm">
                      Up-to-date documentation including permits, insurance,
                      fitness certificates, and pollution control checks
                    </p>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-gray-800 mb-2 flex items-center">
                      <LucideUserCheck className="w-5 h-5 text-red-500 mr-2" />
                      Driver Compliance
                    </h4>
                    <p className="text-gray-700 text-sm">
                      Valid licenses, background verification, and regular
                      training aligned with industry and legal standards
                    </p>
                  </div>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg border-l-4 border-red-500 mt-4">
                  <p className="text-gray-700 font-medium">
                    <LucideCheckCircle className="inline w-5 h-5 text-red-500 mr-2" />
                    Our commitment to fleet compliance not only guarantees
                    operational excellence but also delivers peace of mind to
                    our clients.
                  </p>
                </div>
              </div>

              {/* Parking area / Service station / fuel stations  */}

              <div className="mb-14">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-red-50 rounded-full flex items-center justify-center mr-4">
                    <Fuel className="w-6 h-6 text-red-500" />
                  </div>

                  <h3 className="text-xl font-semibold text-gray-800">
                    Parking area / Service station / Fuel stations
                  </h3>
                </div>
                <p className="text-gray-700 leading-relaxed mb-3">
                  Every branch office dedicated parking facility aproximetly
                  40,000 sq. ft area. , featuring dedicated parking, an in-house
                  fleet maintenance station, and on-site fuel stations —
                  ensuring operational efficiency and uninterrupted service.
                </p>
              </div>

              {/* Driver Training And Accomodation */}

              <div className="mb-12">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-red-50 rounded-full flex items-center justify-center mr-4">
                    <HandMetal className="w-6 h-6 text-red-500" />
                  </div>

                  <h3 className="text-xl font-semibold text-gray-800">
                    Driver Training / Accomodations / Briefings
                  </h3>
                </div>
                <p className="text-gray-700 leading-relaxed mb-3">
                  Our drivers undergo comprehensive training, daily briefings,
                  and continuous skill development. We also offer
                  well-maintained accommodation facilities to ensure their
                  comfort and readiness, contributing to safe and reliable
                  service delivery.
                </p>
              </div>

              {/* Mission & Vision */}
              <div className="relative bg-gradient-to-br from-red-50 to-white p-12 rounded-3xl max-w-5xl mx-auto shadow-[0_15px_60px_rgba(239,68,68,0.15)] overflow-hidden border border-red-100">
                {/* Decorative blurred glow circles */}
                <div className="absolute -top-12 -left-12 w-60 h-60 bg-red-400 rounded-full blur-[100px] opacity-60 z-0"></div>
                <div className="absolute -bottom-12 -right-12 w-60 h-60 bg-red-400 rounded-full blur-[100px] opacity-50 z-0"></div>

                {/* Foreground Content */}
                <div className="relative z-10 text-center">
                  {/* Icon with subtle glowing ring */}
                  <div className="flex justify-center">
                    <div className="relative">
                      <div className="absolute inset-0 w-full h-full animate-ping-slow rounded-full bg-red-100 opacity-20"></div>
                    </div>
                  </div>

                  {/* Heading */}
                  <h3 className="text-3xl font-extrabold tracking-wider font-serif text-red-600 mb-4">
                    <MagnifierCursor text={text1} cursorSize={40} />
                  </h3>

                  {/* Content */}
                  <p className="text-gray-700 text-lg leading-relaxed font-medium max-w-3xl mx-auto">
                    "We help organizations optimize their travel operations by
                    offering economical solutions, ensuring high customer
                    satisfaction, and improving time management. Our reliable
                    services reduce logistical burdens, enhance employee
                    productivity, and provide seamless travel experiences — all
                    while maintaining cost control and operational efficiency."
                  </p>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
      <ParallaxSection />
      <AboutCompanySection />
      <CallToAction />
    </div>
  );
}
