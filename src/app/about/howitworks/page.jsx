'use client';

import {useGSAPFadeInUp} from '@/utils/animations';
import {useRef} from 'react';
import SplitText from '@/components/ui/SplitText';
import Threads from '@/components/ui/Threads';
import {
  bookingProcedure,
  billingInfo,
  successPrinciples,
  contactInfo,
} from '@/data/howitworks';

export default function HowWeWork () {
  const refs = {
    title: useRef (null),
    procedure: useRef (null),
    billing: useRef (null),
    success: useRef (null),
    contact: useRef (null),
  };

  // Apply animations
  Object.entries (refs).forEach (([_, ref], index) => {
    useGSAPFadeInUp (index * 0.2, 0.8, ref);
  });

  return (
    <div className="text-black">
      {/* Hero Section with Threads + SplitText */}
      <section className="relative w-full h-[350px] md:h-[420px] overflow-hidden flex items-center justify-center bg-white">
        <div className="absolute inset-0 z-0">
          <Threads amplitude={1} distance={0} enableMouseInteraction={true} />
        </div>
        <div className="relative z-10 text-center px-4">
          <SplitText
            text="How It Works"
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
            Step-by-step breakdown of our booking and billing process
          </p>
        </div>
      </section>

      {/* Main Content */}
      <div className="-mt-9 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">

          {/* Booking Procedure */}
          <section
            ref={refs.procedure}
            className="mb-16 bg-white p-8 rounded-xl shadow-sm border border-gray-100"
          >
            <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
              <span className="bg-blue-100 text-blue-600 p-2 rounded-full mr-3">
                📘
              </span>
              Car Booking Procedure
            </h2>

            <div className="space-y-6">
              {bookingProcedure.map (step => (
                <div key={step.id} className="flex">
                  <div className="flex-shrink-0 mr-4">
                    <div className="flex items-center justify-center h-8 w-8 rounded-full bg-green-100 text-green-600">
                      {step.id}
                    </div>
                  </div>
                  <div>
                    <h3 className="font-medium text-gray-900">{step.title}</h3>
                    <p className="text-gray-700">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Billing Section */}
          <section
            ref={refs.billing}
            className="mb-16 bg-white p-8 rounded-xl shadow-sm border border-gray-100"
          >
            <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
              <span className="bg-purple-100 text-purple-600 p-2 rounded-full mr-3">
                💳
              </span>
              Billing & Accounts
            </h2>

            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-medium text-gray-900 mb-3">
                  Our Billing Features:
                </h3>
                <ul className="space-y-2">
                  {billingInfo.features.map ((feature, index) => (
                    <li key={index} className="flex items-start">
                      <span className="text-green-500 mr-2">✓</span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="font-medium text-gray-900 mb-3">
                  Payment Methods:
                </h3>
                <div className="flex flex-wrap gap-2">
                  {billingInfo.paymentMethods.map ((method, index) => (
                    <span
                      key={index}
                      className="bg-gray-100 px-3 py-1 rounded-full text-sm"
                    >
                      {method}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* Success Principles */}
          <section
            ref={refs.success}
            className="mb-16 bg-white p-8 rounded-xl shadow-sm border border-gray-100"
          >
            <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
              <span className="bg-yellow-100 text-yellow-600 p-2 rounded-full mr-3">
                🚀
              </span>
              Our Basic Steps Towards Success
            </h2>

            <div className="grid sm:grid-cols-2 gap-4">
              {successPrinciples.map ((principle, index) => (
                <div key={index} className="flex items-start">
                  <span className="text-blue-500 mr-2">▸</span>
                  <span>{principle}</span>
                </div>
              ))}
            </div>
          </section>

          {/* Contact Section */}
          <section
            ref={refs.contact}
            className="bg-blue-50 p-8 rounded-xl border border-blue-100"
          >
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              24/7 Support
            </h2>
            <p className="text-gray-700 mb-6">{contactInfo.supportText}</p>

            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-medium text-gray-900 mb-3">
                  Contact Numbers
                </h3>
                <ul className="space-y-2">
                  {contactInfo.numbers.map ((contact, index) => (
                    <li key={index} className="flex items-center">
                      <span className="text-blue-500 mr-2">📞</span>
                      <span>
                        {contact.label}: {contact.number}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-white p-4 rounded-lg border border-gray-200">
                <h3 className="font-medium text-gray-900 mb-2">
                  Email Support
                </h3>
                <a
                  href={`mailto:${contactInfo.email}`}
                  className="text-blue-600 hover:underline"
                >
                  {contactInfo.email}
                </a>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
