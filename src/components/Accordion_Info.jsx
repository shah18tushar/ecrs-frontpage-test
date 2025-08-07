// "use client";

// import React from "react";
// import {
//   Accordion,
//   AccordionContent,
//   AccordionItem,
//   AccordionTrigger,
// } from "@/components/ui/accordion";
// import MagnifierCursor from "./MagnifierCursor";

// export default function Accordion_Info() {
//   const text = "FAQ's";
  
//   return (
//     <div id="faq">
//       <section className="py-10 relative">
//         {/* Background Design */}
//         <div className="absolute inset-0 -z-10">
//           <div className="h-full w-full bg-gradient-to-t from-red-600 via-red-400 to-white opacity-30 rounded-b-2xl" />
//         </div>

//         <div className="container mx-auto px-6">
//           {/* Heading Section */}
//           <div className="text-center mb-8">
//             <h1 className="text-lg md:text-xl lg:text-2xl font-medium text-red-500 tracking-wide">
//               <MagnifierCursor text={text} cursorSize={40} />
//             </h1>
//             <p className="text-gray-600 mt-1 text-xs">
//               Everything you need to know about ECRS Car Rentals
//             </p>
//           </div>

//           <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
//             {/* First FAQ Section */}
//             <div className="space-y-4">
//               <Accordion type="single" collapsible className="space-y-4">
//                 {/* Question 1 */}
//                 <AccordionItem value="question1">
//                   <AccordionTrigger className="group flex items-center justify-between font-medium p-4 bg-white shadow-md rounded-lg transition-transform hover:scale-[1.02] text-sm cursor-pointer">
//                     What are your rental requirements?
//                   </AccordionTrigger>
//                   <AccordionContent className="p-4 bg-white rounded-b-lg shadow-lg text-gray-700">
//                     <p className="mb-2">
//                       <span className="font-semibold text-red-500">
//                         To rent a car with ECRS, you'll need:
//                       </span>
//                     </p>
//                     <ul className="list-disc pl-5 space-y-1">
//                       <li>
//                         Valid driver's license (minimum 1 year holding period)
//                       </li>
//                       <li>Credit card in the renter's name</li>
//                       <li>Proof of insurance (or purchase our coverage)</li>
//                       <li>
//                         Minimum age of 21 (additional fees may apply under 25)
//                       </li>
//                       <li>Secondary ID (passport or national ID card)</li>
//                     </ul>
//                   </AccordionContent>
//                 </AccordionItem>

//                 {/* Question 2 */}
//                 <AccordionItem value="question2">
//                   <AccordionTrigger className="group flex items-center justify-between text-sm  font-medium p-4 bg-white shadow-md rounded-lg transition-transform hover:scale-[1.02] cursor-pointer">
//                     What is included in the rental price?
//                   </AccordionTrigger>
//                   <AccordionContent className="p-4 bg-white rounded-b-lg shadow-lg text-gray-700">
//                     <p className="mb-2">
//                       <span className="font-semibold text-red-500">
//                         Our standard rental includes:
//                       </span>
//                     </p>
//                     <ul className="list-disc pl-5 space-y-1">
//                       <li>Unlimited mileage (except for luxury vehicles)</li>
//                       <li>24/7 roadside assistance</li>
//                       <li>Basic insurance coverage (CDW with deductible)</li>
//                       <li>Vehicle maintenance and servicing</li>
//                       <li>24-hour customer support</li>
//                     </ul>
//                     <p className="mt-3">
//                       Additional options like GPS, child seats, or premium
//                       insurance can be added during booking.
//                     </p>
//                   </AccordionContent>
//                 </AccordionItem>

//                 {/* Question 3 */}
//                 <AccordionItem value="question3">
//                   <AccordionTrigger className="group flex items-center justify-between text-sm font-medium p-4 bg-white shadow-md rounded-lg transition-transform hover:scale-[1.02] cursor-pointer">
//                     Can I modify or cancel my reservation?
//                   </AccordionTrigger>
//                   <AccordionContent className="p-4 bg-white rounded-b-lg shadow-lg text-gray-700">
//                     <p className="mb-2">
//                       <span className="font-semibold text-red-500">
//                         Reservation Changes:
//                       </span>
//                     </p>
//                     <p>
//                       Yes! You can modify or cancel your reservation up to 24
//                       hours before your scheduled pickup time without penalty.
//                       Changes can be made:
//                     </p>
//                     <ul className="list-disc pl-5 mt-2 space-y-1">
//                       <li>Through our website or mobile app</li>
//                       <li>By calling our customer service (+1 800-ECRS-CAR)</li>
//                       <li>Via email at support@ecrsrental.com</li>
//                     </ul>
//                     <p className="mt-3">
//                       Same-day cancellations may incur a fee equivalent to one
//                       day's rental rate.
//                     </p>
//                   </AccordionContent>
//                 </AccordionItem>
//               </Accordion>
//             </div>

//             {/* Second FAQ Section */}
//             <div className="space-y-4">
//               <Accordion type="single" collapsible className="space-y-4">
//                 {/* Question 4 */}
//                 <AccordionItem value="question4">
//                   <AccordionTrigger className="group flex items-center justify-between font-medium p-4 bg-white shadow-md rounded-lg transition-transform hover:scale-[1.02] text-sm cursor-pointer">
//                     What is your fuel policy?
//                   </AccordionTrigger>
//                   <AccordionContent className="p-4 bg-white rounded-b-lg shadow-lg text-gray-700">
//                     <p className="mb-2">
//                       <span className="font-semibold text-red-500">
//                         Our fuel policy options:
//                       </span>
//                     </p>
//                     <ul className="list-disc pl-5 space-y-1">
//                       <li>
//                         <strong>Full-to-Full:</strong> Most economical option -
//                         receive the car with a full tank and return it full
//                       </li>
//                       <li>
//                         <strong>Pre-Purchase:</strong> Pay for a full tank
//                         upfront at a discounted rate and return at any level
//                       </li>
//                       <li>
//                         <strong>Pay-as-you-use:</strong> Pay for the exact fuel
//                         used during your rental period
//                       </li>
//                     </ul>
//                     <p className="mt-3">
//                       Fuel service charges apply if the tank isn't returned at
//                       the agreed level.
//                     </p>
//                   </AccordionContent>
//                 </AccordionItem>

//                 {/* Question 5 */}
//                 <AccordionItem value="question5">
//                   <AccordionTrigger className="group flex items-center justify-between text-sm  font-medium p-4 bg-white shadow-md rounded-lg transition-transform hover:scale-[1.02] cursor-pointer">
//                     What happens in case of an accident?
//                   </AccordionTrigger>
//                   <AccordionContent className="p-4 bg-white rounded-b-lg shadow-lg text-gray-700">
//                     <p className="mb-2">
//                       <span className="font-semibold text-red-500">
//                         Accident Procedure:
//                       </span>
//                     </p>
//                     <ol className="list-decimal pl-5 space-y-1">
//                       <li>
//                         Ensure everyone's safety and call emergency services if
//                         needed
//                       </li>
//                       <li>Contact ECRS immediately at our 24/7 support line</li>
//                       <li>Exchange information with other parties involved</li>
//                       <li>
//                         Take photos of the scene and all vehicles involved
//                       </li>
//                       <li>
//                         File a police report (required for insurance claims)
//                       </li>
//                       <li>
//                         Do not admit fault or sign any documents without ECRS
//                         approval
//                       </li>
//                     </ol>
//                     <p className="mt-3">
//                       Our team will guide you through the next steps and arrange
//                       for a replacement vehicle if needed.
//                     </p>
//                   </AccordionContent>
//                 </AccordionItem>

//                 {/* Question 6 */}
//                 <AccordionItem value="question6">
//                   <AccordionTrigger className="group flex items-center justify-between text-sm font-medium p-4 bg-white shadow-md rounded-lg transition-transform hover:scale-[1.02] cursor-pointer">
//                     Do you offer one-way rentals?
//                   </AccordionTrigger>
//                   <AccordionContent className="p-4 bg-white rounded-b-lg shadow-lg text-gray-700">
//                     <p className="mb-2">
//                       <span className="font-semibold text-red-500">
//                         One-Way Rental Options:
//                       </span>
//                     </p>
//                     <p>
//                       Yes, we offer one-way rentals between most of our
//                       locations with some restrictions:
//                     </p>
//                     <ul className="list-disc pl-5 mt-2 space-y-1">
//                       <li>Available for rentals of 3+ days in most cases</li>
//                       <li>Subject to a one-way fee based on distance</li>
//                       <li>
//                         Must be booked in advance (not available for walk-ins)
//                       </li>
//                       <li>Some vehicle classes may not be eligible</li>
//                       <li>
//                         Cross-border one-way rentals have additional
//                         requirements
//                       </li>
//                     </ul>
//                     <p className="mt-3">
//                       Contact our reservations team for specific one-way rental
//                       quotes and availability.
//                     </p>
//                   </AccordionContent>
//                 </AccordionItem>
//               </Accordion>
//             </div>
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// }

























"use client";

import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import MagnifierCursor from "./MagnifierCursor";

export default function Accordion_Info() {
  const text = "Frequently Asked Questions";

  return (
    <div
      id="faq"
      className="relative bg-gradient-to-br from-gray-800 via-gray-700 to-gray-800 text-white py-20 "
    >
      <div className="container mx-auto px-6 lg:px-12">
        {/* Premium Heading Section */}
        <div className="text-center mb-16">
          <h1 className="text-3xl md:text-4xl lg:text-4xl font-serif font-bold text-white mb-3">
            <MagnifierCursor text={text} cursorSize={50} />
          </h1>
          <div className="w-56 h-[2.6px] bg-gradient-to-r from-red-600 via-amber-500 to-red-600 mx-auto rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* First FAQ Section */}
          <div className="space-y-6">
            <Accordion type="single" collapsible className="space-y-6">
              {/* Question 1 */}
              <AccordionItem value="question1" className="border-none">
                <AccordionTrigger className="group flex items-center justify-between font-medium p-6 bg-gradient-to-b from-gray-800/70 to-gray-900/70 backdrop-blur-lg text-base text-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 ease-[cubic-bezier(0.87,0,0.13,1)]">
                  <span className="text-left pr-4">
                    What are your rental requirements?
                  </span>
                  <div className="relative w-6 h-6 flex items-center justify-center">
                    <div className="absolute w-full h-0.5 bg-white rounded-full transition-all duration-300 group-data-[state=open]:rotate-180"></div>
                    <div className="absolute w-full h-0.5 bg-white rounded-full transition-all duration-300 group-data-[state=open]:opacity-0 group-data-[state=open]:rotate-90"></div>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="overflow-hidden data-[state=open]:animate-accordion-down data-[state=closed]:animate-accordion-up">
                  <div className="p-6 bg-gradient-to-b from-gray-800/80 to-gray-900/80 backdrop-blur-lg rounded-xl text-gray-100 border-b-2 border-red-500/60">
                    <p className="mb-4">
                      <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-amber-400">
                        To rent a car with ECRS, you'll need
                      </span>
                    </p>
                    <ul className="list-none space-y-3">
                      {[
                        "Valid driver's license (minimum 1 year holding period)",
                        "Credit card in the renter's name",
                        "Proof of insurance (or purchase our coverage)",
                        "Minimum age of 21 (additional fees may apply under 25)",
                        "Secondary ID (passport or national ID card)",
                      ].map((item, index) => (
                        <li key={index} className="flex items-start">
                          <span className="flex-shrink-0 w-2 h-2 bg-red-500 rounded-full mt-2 mr-3 shadow-[0_0_8px_rgba(245,158,11,0.5)]"></span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </AccordionContent>
              </AccordionItem>

              {/* Question 2 */}
              <AccordionItem value="question2" className="border-none">
                <AccordionTrigger className="group flex items-center justify-between font-medium p-6 bg-gradient-to-b from-gray-800/70 to-gray-900/70 backdrop-blur-lg text-base text-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 ease-[cubic-bezier(0.87,0,0.13,1)]">
                  <span className="text-left pr-4">
                    What is included in the rental price?
                  </span>
                  <div className="relative w-6 h-6 flex items-center justify-center">
                    <div className="absolute w-full h-0.5 bg-white rounded-full transition-all duration-300 group-data-[state=open]:rotate-180"></div>
                    <div className="absolute w-full h-0.5 bg-white rounded-full transition-all duration-300 group-data-[state=open]:opacity-0 group-data-[state=open]:rotate-90"></div>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="overflow-hidden data-[state=open]:animate-accordion-down data-[state=closed]:animate-accordion-up">
                  <div className="p-6 bg-gradient-to-b from-gray-800/80 to-gray-900/80 backdrop-blur-lg rounded-xl text-gray-100 border-b-2 border-red-500/60">
                    <p className="mb-4">
                      <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-amber-400">
                        To rent a car with ECRS, you'll need
                      </span>
                    </p>
                    <ul className="list-none space-y-3">
                      {[
                        "Valid driver's license (minimum 1 year holding period)",
                        "Credit card in the renter's name",
                        "Proof of insurance (or purchase our coverage)",
                        "Minimum age of 21 (additional fees may apply under 25)",
                        "Secondary ID (passport or national ID card)",
                      ].map((item, index) => (
                        <li key={index} className="flex items-start">
                          <span className="flex-shrink-0 w-2 h-2 bg-red-500 rounded-full mt-2 mr-3 shadow-[0_0_8px_rgba(245,158,11,0.5)]"></span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </AccordionContent>
              </AccordionItem>

              {/* Question 3 */}
              <AccordionItem value="question3" className="border-none">
                <AccordionTrigger className="group flex items-center justify-between font-medium p-6 bg-gradient-to-b from-gray-800/70 to-gray-900/70 backdrop-blur-lg text-base text-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 ease-[cubic-bezier(0.87,0,0.13,1)]">
                  <span className="text-left pr-4">
                    Can I modify or cancel my reservation?
                  </span>
                  <div className="relative w-6 h-6 flex items-center justify-center">
                    <div className="absolute w-full h-0.5 bg-white rounded-full transition-all duration-300 group-data-[state=open]:rotate-180"></div>
                    <div className="absolute w-full h-0.5 bg-white rounded-full transition-all duration-300 group-data-[state=open]:opacity-0 group-data-[state=open]:rotate-90"></div>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="overflow-hidden data-[state=open]:animate-accordion-down data-[state=closed]:animate-accordion-up">
                  <div className="p-6 bg-gradient-to-b from-gray-800/80 to-gray-900/80 backdrop-blur-lg rounded-xl text-gray-100 border-b-2 border-red-500/60">
                    <p className="mb-4">
                      <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-amber-400">
                        To rent a car with ECRS, you'll need
                      </span>
                    </p>
                    <ul className="list-none space-y-3">
                      {[
                        "Valid driver's license (minimum 1 year holding period)",
                        "Credit card in the renter's name",
                        "Proof of insurance (or purchase our coverage)",
                        "Minimum age of 21 (additional fees may apply under 25)",
                        "Secondary ID (passport or national ID card)",
                      ].map((item, index) => (
                        <li key={index} className="flex items-start">
                          <span className="flex-shrink-0 w-2 h-2 bg-red-500 rounded-full mt-2 mr-3 shadow-[0_0_8px_rgba(245,158,11,0.5)]"></span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>

          {/* Second FAQ Section */}
          <div className="space-y-6">
            <Accordion type="single" collapsible className="space-y-6">
              {/* Question 4 */}
              <AccordionItem value="question4" className="border-none">
                <AccordionTrigger className="group flex items-center justify-between font-medium p-6 bg-gradient-to-b from-gray-800/70 to-gray-900/70 backdrop-blur-lg text-base text-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 ease-[cubic-bezier(0.87,0,0.13,1)]">
                  <span className="text-left pr-4">
                    What is your fuel policy?
                  </span>
                  <div className="relative w-6 h-6 flex items-center justify-center">
                    <div className="absolute w-full h-0.5 bg-white rounded-full transition-all duration-300 group-data-[state=open]:rotate-180"></div>
                    <div className="absolute w-full h-0.5 bg-white rounded-full transition-all duration-300 group-data-[state=open]:opacity-0 group-data-[state=open]:rotate-90"></div>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="overflow-hidden data-[state=open]:animate-accordion-down data-[state=closed]:animate-accordion-up">
                  <div className="p-6 bg-gradient-to-b from-gray-800/80 to-gray-900/80 backdrop-blur-lg rounded-xl text-gray-100 border-b-2 border-red-500/60">
                    <p className="mb-4">
                      <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-amber-400">
                        To rent a car with ECRS, you'll need
                      </span>
                    </p>
                    <ul className="list-none space-y-3">
                      {[
                        "Valid driver's license (minimum 1 year holding period)",
                        "Credit card in the renter's name",
                        "Proof of insurance (or purchase our coverage)",
                        "Minimum age of 21 (additional fees may apply under 25)",
                        "Secondary ID (passport or national ID card)",
                      ].map((item, index) => (
                        <li key={index} className="flex items-start">
                          <span className="flex-shrink-0 w-2 h-2 bg-red-500 rounded-full mt-2 mr-3 shadow-[0_0_8px_rgba(245,158,11,0.5)]"></span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </AccordionContent>
              </AccordionItem>

              {/* Question 5 */}
              <AccordionItem value="question5" className="border-none">
                <AccordionTrigger className="group flex items-center justify-between font-medium p-6 bg-gradient-to-b from-gray-800/70 to-gray-900/70 backdrop-blur-lg text-base text-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 ease-[cubic-bezier(0.87,0,0.13,1)]">
                  <span className="text-left pr-4">
                    What happens in case of an accident?
                  </span>
                  <div className="relative w-6 h-6 flex items-center justify-center">
                    <div className="absolute w-full h-0.5 bg-white rounded-full transition-all duration-300 group-data-[state=open]:rotate-180"></div>
                    <div className="absolute w-full h-0.5 bg-white rounded-full transition-all duration-300 group-data-[state=open]:opacity-0 group-data-[state=open]:rotate-90"></div>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="overflow-hidden data-[state=open]:animate-accordion-down data-[state=closed]:animate-accordion-up">
                  <div className="p-6 bg-gradient-to-b from-gray-800/80 to-gray-900/80 backdrop-blur-lg rounded-xl text-gray-100 border-b-2 border-red-500/60">
                    <p className="mb-4">
                      <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-amber-400">
                        To rent a car with ECRS, you'll need
                      </span>
                    </p>
                    <ul className="list-none space-y-3">
                      {[
                        "Valid driver's license (minimum 1 year holding period)",
                        "Credit card in the renter's name",
                        "Proof of insurance (or purchase our coverage)",
                        "Minimum age of 21 (additional fees may apply under 25)",
                        "Secondary ID (passport or national ID card)",
                      ].map((item, index) => (
                        <li key={index} className="flex items-start">
                          <span className="flex-shrink-0 w-2 h-2 bg-red-500 rounded-full mt-2 mr-3 shadow-[0_0_8px_rgba(245,158,11,0.5)]"></span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </AccordionContent>
              </AccordionItem>

              {/* Question 6 */}
              <AccordionItem value="question6" className="border-none">
                <AccordionTrigger className="group flex items-center justify-between font-medium p-6 bg-gradient-to-b from-gray-800/70 to-gray-900/70 backdrop-blur-lg text-base text-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 ease-[cubic-bezier(0.87,0,0.13,1)]">
                  <span className="text-left pr-4">
                    Do you offer one-way rentals?
                  </span>
                  <div className="relative w-6 h-6 flex items-center justify-center">
                    <div className="absolute w-full h-0.5 bg-white rounded-full transition-all duration-300 group-data-[state=open]:rotate-180"></div>
                    <div className="absolute w-full h-0.5 bg-white rounded-full transition-all duration-300 group-data-[state=open]:opacity-0 group-data-[state=open]:rotate-90"></div>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="overflow-hidden data-[state=open]:animate-accordion-down data-[state=closed]:animate-accordion-up">
                  <div className="p-6 bg-gradient-to-b from-gray-800/80 to-gray-900/80 backdrop-blur-lg rounded-xl text-gray-100 border-b-2 border-red-500/60">
                    <p className="mb-4">
                      <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-amber-400">
                        To rent a car with ECRS, you'll need
                      </span>
                    </p>
                    <ul className="list-none space-y-3">
                      {[
                        "Valid driver's license (minimum 1 year holding period)",
                        "Credit card in the renter's name",
                        "Proof of insurance (or purchase our coverage)",
                        "Minimum age of 21 (additional fees may apply under 25)",
                        "Secondary ID (passport or national ID card)",
                      ].map((item, index) => (
                        <li key={index} className="flex items-start">
                          <span className="flex-shrink-0 w-2 h-2 bg-red-500 rounded-full mt-2 mr-3 shadow-[0_0_8px_rgba(245,158,11,0.5)]"></span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </div>

      {/* Custom Animations */}
      <style jsx global>{`
        @keyframes pulse-slow {
          0%,
          100% {
            opacity: 0.8;
          }
          50% {
            opacity: 0.4;
          }
        }
        @keyframes float {
          0% {
            transform: translateY(0) translateX(0);
            opacity: 0;
          }
          10% {
            opacity: 0.5;
          }
          90% {
            opacity: 0.5;
          }
          100% {
            transform: translateY(-100vh) translateX(20px);
            opacity: 0;
          }
        }
        .animate-pulse-slow {
          animation: pulse-slow 8s ease-in-out infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        @keyframes accordion-down {
          from {
            height: 0;
          }
          to {
            height: var(--radix-accordion-content-height);
          }
        }
        @keyframes accordion-up {
          from {
            height: var(--radix-accordion-content-height);
          }
          to {
            height: 0;
          }
        }
      `}</style>
    </div>
  );
}

































// "use client";

// import React from "react";
// import {
//   Accordion,
//   AccordionContent,
//   AccordionItem,
//   AccordionTrigger,
// } from "@/components/ui/accordion";
// import MagnifierCursor from "./MagnifierCursor";

// export default function Accordion_Info() {
//   const text = "Frequently Ask Questions..!";

//   return (
   
//       <div
//         id="faq"
//         className="relative bg-gradient-to-b from-gray-950 to-black text-white py-10 overflow-hidden"
//       >
//         {/* Background Design with Subtle Animation */}
//         <div className="absolute inset-0 -z-10">
//           <div className="h-full w-full bg-gradient-to-br from-red-700/25 via-red-600/20 to-black/90 opacity-80" />
//           <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(239,68,68,0.5),transparent_70%)] animate-pulse-slow" />
//           <div className='absolute inset-0 bg-[url(&apos;data:image/svg+xml,%3Csvg width="80" height="80" viewBox="0 0 80 80" xmlns="http://www.w3.org/2000/svg"%3E%3Cpath fill="none" stroke="rgba(245,158,11,0.15)" stroke-width="0.8" d="M0 80L80 0M40 80L80 40M0 40L40 0"/%3E%3C/svg%3E&apos;)]' />
//         </div>

//         <div className="container mx-auto px-6 lg:px-12">
//           {/* Heading Section */}
//           <div className="text-center mb-6">
//             <h1 className="text-2xl md:text-3xl font-serif font-semibold text-red-600 tracking-tight">
//               <MagnifierCursor text={text} cursorSize={40} />
//             </h1>
//             {/* <p className="text-amber-200 mt-4 text-base md:text-lg font-light max-w-2xl mx-auto italic">
//             Experience unparalleled luxury with ECRS Car Rentals’ expertly
//             curated insights.
//           </p> */}
//           </div>

//           <div className="grid md:grid-cols-2 gap-10 max-w-5xl mx-auto">
//             {/* First FAQ Section */}
//             <div className="space-y-8">
//               <Accordion type="single" collapsible className="space-y-8">
//                 {/* Question 1 */}
//                 <AccordionItem value="question1" className="border-none">
//                   <AccordionTrigger className="group flex items-center justify-between font-semibold p-6 bg-gray-900/80 backdrop-blur-xl text-lg text-white rounded-2xl shadow-2xl hover:bg-gradient-to-r hover:from-red-600/40 hover:to-red-500/40 transition-all duration-500 ease-in-out transform hover:scale-[1.03] hover:shadow-[0_8px_32px_rgba(239,68,68,0.3)]">
//                     What are your rental requirements?
//                   </AccordionTrigger>
//                   <AccordionContent className="p-6 bg-gray-900/90 backdrop-blur-xl rounded-2xl shadow-inner text-gray-100 border-t-2 border-red-500/50">
//                     <p className="mb-4">
//                       <span className="font-bold text-red-400">
//                         To rent a car with ECRS, you'll need:
//                       </span>
//                     </p>
//                     <ul className="list-none pl-6 space-y-4">
//                       <li className="flex items-center">
//                         <span className="w-3 h-3 bg-amber-400 rounded-full mr-4 shadow-[0_0_8px_rgba(245,158,11,0.5)]"></span>
//                         Valid driver's license (minimum 1 year holding period)
//                       </li>
//                       <li className="flex items-center">
//                         <span className="w-3 h-3 bg-amber-400 rounded-full mr-4 shadow-[0_0_8px_rgba(245,158,11,0.5)]"></span>
//                         Credit card in the renter's name
//                       </li>
//                       <li className="flex items-center">
//                         <span className="w-3 h-3 bg-amber-400 rounded-full mr-4 shadow-[0_0_8px_rgba(245,158,11,0.5)]"></span>
//                         Proof of insurance (or purchase our coverage)
//                       </li>
//                       <li className="flex items-center">
//                         <span className="w-3 h-3 bg-amber-400 rounded-full mr-4 shadow-[0_0_8px_rgba(245,158,11,0.5)]"></span>
//                         Minimum age of 21 (additional fees may apply under 25)
//                       </li>
//                       <li className="flex items-center">
//                         <span className="w-3 h-3 bg-amber-400 rounded-full mr-4 shadow-[0_0_8px_rgba(245,158,11,0.5)]"></span>
//                         Secondary ID (passport or national ID card)
//                       </li>
//                     </ul>
//                   </AccordionContent>
//                 </AccordionItem>

//                 {/* Question 2 */}
//                 <AccordionItem value="question2" className="border-none">
//                   <AccordionTrigger className="group flex items-center justify-between font-semibold p-6 bg-gray-900/80 backdrop-blur-xl text-lg text-white rounded-2xl shadow-2xl hover:bg-gradient-to-r hover:from-red-600/40 hover:to-red-500/40 transition-all duration-500 ease-in-out transform hover:scale-[1.03] hover:shadow-[0_8px_32px_rgba(239,68,68,0.3)]">
//                     What is included in the rental price?
//                   </AccordionTrigger>
//                   <AccordionContent className="p-6 bg-gray-900/90 backdrop-blur-xl rounded-2xl shadow-inner text-gray-100 border-t-2 border-red-500/50">
//                     <p className="mb-4">
//                       <span className="font-bold text-red-400">
//                         Our standard rental includes:
//                       </span>
//                     </p>
//                     <ul className="list-none pl-6 space-y-4">
//                       <li className="flex items-center">
//                         <span className="w-3 h-3 bg-amber-400 rounded-full mr-4 shadow-[0_0_8px_rgba(245,158,11,0.5)]"></span>
//                         Unlimited mileage (except for luxury vehicles)
//                       </li>
//                       <li className="flex items-center">
//                         <span className="w-3 h-3 bg-amber-400 rounded-full mr-4 shadow-[0_0_8px_rgba(245,158,11,0.5)]"></span>
//                         24/7 roadside assistance
//                       </li>
//                       <li className="flex items-center">
//                         <span className="w-3 h-3 bg-amber-400 rounded-full mr-4 shadow-[0_0_8px_rgba(245,158,11,0.5)]"></span>
//                         Basic insurance coverage (CDW with deductible)
//                       </li>
//                       <li className="flex items-center">
//                         <span className="w-3 h-3 bg-amber-400 rounded-full mr-4 shadow-[0_0_8px_rgba(245,158,11,0.5)]"></span>
//                         Vehicle maintenance and servicing
//                       </li>
//                       <li className="flex items-center">
//                         <span className="w-3 h-3 bg-amber-400 rounded-full mr-4 shadow-[0_0_8px_rgba(245,158,11,0.5)]"></span>
//                         24-hour customer support
//                       </li>
//                     </ul>
//                     <p className="mt-4">
//                       Additional options like GPS, child seats, or premium
//                       insurance can be added during booking.
//                     </p>
//                   </AccordionContent>
//                 </AccordionItem>

//                 {/* Question 3 */}
//                 <AccordionItem value="question3" className="border-none">
//                   <AccordionTrigger className="group flex items-center justify-between font-semibold p-6 bg-gray-900/80 backdrop-blur-xl text-lg text-white rounded-2xl shadow-2xl hover:bg-gradient-to-r hover:from-red-600/40 hover:to-red-500/40 transition-all duration-500 ease-in-out transform hover:scale-[1.03] hover:shadow-[0_8px_32px_rgba(239,68,68,0.3)]">
//                     Can I modify or cancel my reservation?
//                   </AccordionTrigger>
//                   <AccordionContent className="p-6 bg-gray-900/90 backdrop-blur-xl rounded-2xl shadow-inner text-gray-100 border-t-2 border-red-500/50">
//                     <p className="mb-4">
//                       <span className="font-bold text-red-400">
//                         Reservation Changes:
//                       </span>
//                     </p>
//                     <p>
//                       Yes! You can modify or cancel your reservation up to 24
//                       hours before your scheduled pickup time without penalty.
//                       Changes can be made:
//                     </p>
//                     <ul className="list-none pl-6 mt-2 space-y-4">
//                       <li className="flex items-center">
//                         <span className="w-3 h-3 bg-amber-400 rounded-full mr-4 shadow-[0_0_8px_rgba(245,158,11,0.5)]"></span>
//                         Through our website or mobile app
//                       </li>
//                       <li className="flex items-center">
//                         <span className="w-3 h-3 bg-amber-400 rounded-full mr-4 shadow-[0_0_8px_rgba(245,158,11,0.5)]"></span>
//                         By calling our customer service (+1 800-ECRS-CAR)
//                       </li>
//                       <li className="flex items-center">
//                         <span className="w-3 h-3 bg-amber-400 rounded-full mr-4 shadow-[0_0_8px_rgba(245,158,11,0.5)]"></span>
//                         Via email at support@ecrsrental.com
//                       </li>
//                     </ul>
//                     <p className="mt-4">
//                       Same-day cancellations may incur a fee equivalent to one
//                       day's rental rate.
//                     </p>
//                   </AccordionContent>
//                 </AccordionItem>
//               </Accordion>
//             </div>

//             {/* Second FAQ Section */}
//             <div className="space-y-8">
//               <Accordion type="single" collapsible className="space-y-8">
//                 {/* Question 4 */}
//                 <AccordionItem value="question4" className="border-none">
//                   <AccordionTrigger className="group flex items-center justify-between font-semibold p-6 bg-gray-900/80 backdrop-blur-xl text-base text-white rounded-2xl shadow-2xl hover:bg-gradient-to-r hover:from-red-600/40 hover:to-red-500/40 transition-all duration-500 ease-in-out transform hover:scale-[1.03] hover:shadow-[0_8px_32px_rgba(239,68,68,0.3)]">
//                     What is your fuel policy?
//                   </AccordionTrigger>
//                   <AccordionContent className="p-6 bg-gray-900/90 backdrop-blur-xl rounded-2xl shadow-inner text-gray-100 border-t-2 border-red-500/50">
//                     <p className="mb-4">
//                       <span className="font-bold text-red-400">
//                         Our fuel policy options:
//                       </span>
//                     </p>
//                     <ul className="list-none pl-6 space-y-4">
//                       <li className="flex items-center">
//                         <span className="w-2 h-2 bg-red-500  rounded-full mr-4 shadow-[0_0_8px_rgba(245,158,11,0.5)]"></span>
//                         Full-to-Full : Most economical option - receive the car
//                         with a full tank and return it full
//                       </li>
//                       <li className="flex items-center">
//                         <span className="w-2 h-2 bg-red-500  rounded-full mr-4 shadow-[0_0_8px_rgba(245,158,11,0.5)]"></span>
//                         Pre-Purchase : Pay for a full tank upfront at a
//                         discounted rate and return at any level
//                       </li>
//                       <li className="flex items-center">
//                         <span className="w-2 h-2 bg-red-500 rounded-full mr-4 shadow-[0_0_8px_rgba(245,158,11,0.5)]"></span>
//                         Pay-as-you-use : Pay for the exact fuel used during your
//                         rental period
//                       </li>
//                     </ul>
//                     <p className="mt-4">
//                       Fuel service charges apply if the tank isn't returned at
//                       the agreed level.
//                     </p>
//                   </AccordionContent>
//                 </AccordionItem>

//                 {/* Question 5 */}
//                 <AccordionItem value="question5" className="border-none">
//                   <AccordionTrigger className="group flex items-center justify-between font-semibold p-6 bg-gray-900/80 backdrop-blur-xl text-lg text-white rounded-2xl shadow-2xl hover:bg-gradient-to-r hover:from-red-600/40 hover:to-red-500/40 transition-all duration-500 ease-in-out transform hover:scale-[1.03] hover:shadow-[0_8px_32px_rgba(239,68,68,0.3)]">
//                     What happens in case of an accident?
//                   </AccordionTrigger>
//                   <AccordionContent className="p-6 bg-gray-900/90 backdrop-blur-xl rounded-2xl shadow-inner text-gray-100 border-t-2 border-red-500/50">
//                     <p className="mb-4">
//                       <span className="font-bold text-red-400">
//                         Accident Procedure:
//                       </span>
//                     </p>
//                     <ol className="list-none pl-6 space-y-4">
//                       <li className="flex items-center">
//                         <span className="w-3 h-3 bg-amber-400 rounded-full mr-4 shadow-[0_0_8px_rgba(245,158,11,0.5)]"></span>
//                         Ensure everyone's safety and call emergency services if
//                         needed
//                       </li>
//                       <li className="flex items-center">
//                         <span className="w-3 h-3 bg-amber-400 rounded-full mr-4 shadow-[0_0_8px_rgba(245,158,11,0.5)]"></span>
//                         Contact ECRS immediately at our 24/7 support line
//                       </li>
//                       <li className="flex items-center">
//                         <span className="w-3 h-3 bg-amber-400 rounded-full mr-4 shadow-[0_0_8px_rgba(245,158,11,0.5)]"></span>
//                         Exchange information with other parties involved
//                       </li>
//                       <li className="flex items-center">
//                         <span className="w-3 h-3 bg-amber-400 rounded-full mr-4 shadow-[0_0_8px_rgba(245,158,11,0.5)]"></span>
//                         Take photos of the scene and all vehicles involved
//                       </li>
//                       <li className="flex items-center">
//                         <span className="w-3 h-3 bg-amber-400 rounded-full mr-4 shadow-[0_0_8px_rgba(245,158,11,0.5)]"></span>
//                         File a police report (required for insurance claims)
//                       </li>
//                       <li className="flex items-center">
//                         <span className="w-3 h-3 bg-amber-400 rounded-full mr-4 shadow-[0_0_8px_rgba(245,158,11,0.5)]"></span>
//                         Do not admit fault or sign any documents without ECRS
//                         approval
//                       </li>
//                     </ol>
//                     <p className="mt-4">
//                       Our team will guide you through the next steps and arrange
//                       for a replacement vehicle if needed.
//                     </p>
//                   </AccordionContent>
//                 </AccordionItem>

//                 {/* Question 6 */}
//                 <AccordionItem value="question6" className="border-none">
//                   <AccordionTrigger className="group flex items-center justify-between font-semibold p-6 bg-gray-900/80 backdrop-blur-xl text-lg text-white rounded-2xl shadow-2xl hover:bg-gradient-to-r hover:from-red-600/40 hover:to-red-500/40 transition-all duration-500 ease-in-out transform hover:scale-[1.03] hover:shadow-[0_8px_32px_rgba(239,68,68,0.3)]">
//                     Do you offer one-way rentals?
//                   </AccordionTrigger>
//                   <AccordionContent className="p-6 bg-gray-900/90 backdrop-blur-xl rounded-2xl shadow-inner text-gray-100 border-t-2 border-red-500/50">
//                     <p className="mb-4">
//                       <span className="font-bold text-red-400">
//                         One-Way Rental Options:
//                       </span>
//                     </p>
//                     <p>
//                       Yes, we offer one-way rentals between most of our
//                       locations with some restrictions:
//                     </p>
//                     <ul className="list-none pl-6 mt-2 space-y-4">
//                       <li className="flex items-center">
//                         <span className="w-3 h-3 bg-amber-400 rounded-full mr-4 shadow-[0_0_8px_rgba(245,158,11,0.5)]"></span>
//                         Available for rentals of 3+ days in most cases
//                       </li>
//                       <li className="flex items-center">
//                         <span className="w-3 h-3 bg-amber-400 rounded-full mr-4 shadow-[0_0_8px_rgba(245,158,11,0.5)]"></span>
//                         Subject to a one-way fee based on distance
//                       </li>
//                       <li className="flex items-center">
//                         <span className="w-3 h-3 bg-amber-400 rounded-full mr-4 shadow-[0_0_8px_rgba(245,158,11,0.5)]"></span>
//                         Must be booked in advance (not available for walk-ins)
//                       </li>
//                       <li className="flex items-center">
//                         <span className="w-3 h-3 bg-amber-400 rounded-full mr-4 shadow-[0_0_8px_rgba(245,158,11,0.5)]"></span>
//                         Some vehicle classes may not be eligible
//                       </li>
//                       <li className="flex items-center">
//                         <span className="w-3 h-3 bg-amber-400 rounded-full mr-4 shadow-[0_0_8px_rgba(245,158,11,0.5)]"></span>
//                         Cross-border one-way rentals have additional
//                         requirements
//                       </li>
//                     </ul>
//                     <p className="mt-4">
//                       Contact our reservations team for specific one-way rental
//                       quotes and availability.
//                     </p>
//                   </AccordionContent>
//                 </AccordionItem>
//               </Accordion>
//             </div>
//           </div>
//         </div>

//         {/* Custom Tailwind Animation */}
//         <style jsx>{`
//           @keyframes pulse-slow {
//             0%,
//             100% {
//               opacity: 0.6;
//             }
//             50% {
//               opacity: 0.3;
//             }
//           }
//           .animate-pulse-slow {
//             animation: pulse-slow 10s ease-in-out infinite;
//           }
//         `}</style>
//       </div>
   
//   );
// }