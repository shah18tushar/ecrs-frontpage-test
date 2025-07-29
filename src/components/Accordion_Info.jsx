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
//     <section className="py-10 relative">
//       {/* Background Design */}
//       <div className="absolute inset-0 -z-10">
//         <div className="h-full w-full bg-gradient-to-t from-red-400 to-transparent rounded-full opacity-10" />
//       </div>

//       <div className="container mx-auto px-6">
//         {/* Heading Section */}
//         <div className="text-center mb-8">
//           <h1 className="text-lg md:text-xl lg:text-2xl font-medium text-red-500 tracking-wide">
//             <MagnifierCursor text={text} cursorSize={40} />
//           </h1>
//           <p className="text-gray-600 mt-1 text-xs">
//             Everything you need to know about ECRS Car Rentals
//           </p>
//         </div>

//         {/* Accordion Section */}
//         <div className="max-w-4xl mx-auto">
//           <Accordion type="single" collapsible className="space-y-4 ">
//             {/* Question 1 */}
//             <div>
//               <AccordionItem value="question1">
//                 <AccordionTrigger className="group flex items-center justify-between font-medium p-4 bg-white shadow-md rounded-lg transition-transform hover:scale-[1.02] text-sm cursor-pointer">
//                   What are your rental requirements?
//                 </AccordionTrigger>
//                 <AccordionContent className="p-4 bg-white rounded-b-lg shadow-lg text-gray-700">
//                   <p className="mb-2">
//                     <span className="font-semibold text-red-500">
//                       To rent a car with ECRS, you'll need:
//                     </span>
//                   </p>
//                   <ul className="list-disc pl-5 space-y-1">
//                     <li>
//                       Valid driver's license (minimum 1 year holding period)
//                     </li>
//                     <li>Credit card in the renter's name</li>
//                     <li>Proof of insurance (or purchase our coverage)</li>
//                     <li>
//                       Minimum age of 21 (additional fees may apply under 25)
//                     </li>
//                     <li>Secondary ID (passport or national ID card)</li>
//                   </ul>
//                 </AccordionContent>
//               </AccordionItem>
//             </div>

//             {/* Question 2 */}
//             <div>
//               <AccordionItem value="question2">
//                 <AccordionTrigger className="group flex items-center justify-between text-sm  font-medium p-4 bg-white shadow-md rounded-lg transition-transform hover:scale-[1.02] cursor-pointer">
//                   What is included in the rental price?
//                 </AccordionTrigger>
//                 <AccordionContent className="p-4 bg-white rounded-b-lg shadow-lg text-gray-700">
//                   <p className="mb-2">
//                     <span className="font-semibold text-red-500">
//                       Our standard rental includes:
//                     </span>
//                   </p>
//                   <ul className="list-disc pl-5 space-y-1">
//                     <li>Unlimited mileage (except for luxury vehicles)</li>
//                     <li>24/7 roadside assistance</li>
//                     <li>Basic insurance coverage (CDW with deductible)</li>
//                     <li>Vehicle maintenance and servicing</li>
//                     <li>24-hour customer support</li>
//                   </ul>
//                   <p className="mt-3">
//                     Additional options like GPS, child seats, or premium
//                     insurance can be added during booking.
//                   </p>
//                 </AccordionContent>
//               </AccordionItem>
//             </div>

//             {/* Question 3 */}
//             <div>
//               <AccordionItem value="question3">
//                 <AccordionTrigger className="group flex items-center justify-between text-sm font-medium p-4 bg-white shadow-md rounded-lg transition-transform hover:scale-[1.02] cursor-pointer">
//                   Can I modify or cancel my reservation?
//                 </AccordionTrigger>
//                 <AccordionContent className="p-4 bg-white rounded-b-lg shadow-lg text-gray-700">
//                   <p className="mb-2">
//                     <span className="font-semibold text-red-500">
//                       Reservation Changes:
//                     </span>
//                   </p>
//                   <p>
//                     Yes! You can modify or cancel your reservation up to 24
//                     hours before your scheduled pickup time without penalty.
//                     Changes can be made:
//                   </p>
//                   <ul className="list-disc pl-5 mt-2 space-y-1">
//                     <li>Through our website or mobile app</li>
//                     <li>By calling our customer service (+1 800-ECRS-CAR)</li>
//                     <li>Via email at support@ecrsrental.com</li>
//                   </ul>
//                   <p className="mt-3">
//                     Same-day cancellations may incur a fee equivalent to one
//                     day's rental rate.
//                   </p>
//                 </AccordionContent>
//               </AccordionItem>
//             </div>
//           </Accordion>
//         </div>
//       </div>
//     </section>
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
  const text = "FAQ's";
  
  return (
    <div id="faq">
      <section className="py-10 relative">
        {/* Background Design */}
        <div className="absolute inset-0 -z-10">
          <div className="h-full w-full bg-gradient-to-t from-red-400 via-red-100 to-white opacity-30 rounded-b-2xl" />
        </div>

        <div className="container mx-auto px-6">
          {/* Heading Section */}
          <div className="text-center mb-8">
            <h1 className="text-lg md:text-xl lg:text-2xl font-medium text-red-500 tracking-wide">
              <MagnifierCursor text={text} cursorSize={40} />
            </h1>
            <p className="text-gray-600 mt-1 text-xs">
              Everything you need to know about ECRS Car Rentals
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {/* First FAQ Section */}
            <div className="space-y-4">
              <Accordion type="single" collapsible className="space-y-4">
                {/* Question 1 */}
                <AccordionItem value="question1">
                  <AccordionTrigger className="group flex items-center justify-between font-medium p-4 bg-white shadow-md rounded-lg transition-transform hover:scale-[1.02] text-sm cursor-pointer">
                    What are your rental requirements?
                  </AccordionTrigger>
                  <AccordionContent className="p-4 bg-white rounded-b-lg shadow-lg text-gray-700">
                    <p className="mb-2">
                      <span className="font-semibold text-red-500">
                        To rent a car with ECRS, you'll need:
                      </span>
                    </p>
                    <ul className="list-disc pl-5 space-y-1">
                      <li>
                        Valid driver's license (minimum 1 year holding period)
                      </li>
                      <li>Credit card in the renter's name</li>
                      <li>Proof of insurance (or purchase our coverage)</li>
                      <li>
                        Minimum age of 21 (additional fees may apply under 25)
                      </li>
                      <li>Secondary ID (passport or national ID card)</li>
                    </ul>
                  </AccordionContent>
                </AccordionItem>

                {/* Question 2 */}
                <AccordionItem value="question2">
                  <AccordionTrigger className="group flex items-center justify-between text-sm  font-medium p-4 bg-white shadow-md rounded-lg transition-transform hover:scale-[1.02] cursor-pointer">
                    What is included in the rental price?
                  </AccordionTrigger>
                  <AccordionContent className="p-4 bg-white rounded-b-lg shadow-lg text-gray-700">
                    <p className="mb-2">
                      <span className="font-semibold text-red-500">
                        Our standard rental includes:
                      </span>
                    </p>
                    <ul className="list-disc pl-5 space-y-1">
                      <li>Unlimited mileage (except for luxury vehicles)</li>
                      <li>24/7 roadside assistance</li>
                      <li>Basic insurance coverage (CDW with deductible)</li>
                      <li>Vehicle maintenance and servicing</li>
                      <li>24-hour customer support</li>
                    </ul>
                    <p className="mt-3">
                      Additional options like GPS, child seats, or premium
                      insurance can be added during booking.
                    </p>
                  </AccordionContent>
                </AccordionItem>

                {/* Question 3 */}
                <AccordionItem value="question3">
                  <AccordionTrigger className="group flex items-center justify-between text-sm font-medium p-4 bg-white shadow-md rounded-lg transition-transform hover:scale-[1.02] cursor-pointer">
                    Can I modify or cancel my reservation?
                  </AccordionTrigger>
                  <AccordionContent className="p-4 bg-white rounded-b-lg shadow-lg text-gray-700">
                    <p className="mb-2">
                      <span className="font-semibold text-red-500">
                        Reservation Changes:
                      </span>
                    </p>
                    <p>
                      Yes! You can modify or cancel your reservation up to 24
                      hours before your scheduled pickup time without penalty.
                      Changes can be made:
                    </p>
                    <ul className="list-disc pl-5 mt-2 space-y-1">
                      <li>Through our website or mobile app</li>
                      <li>By calling our customer service (+1 800-ECRS-CAR)</li>
                      <li>Via email at support@ecrsrental.com</li>
                    </ul>
                    <p className="mt-3">
                      Same-day cancellations may incur a fee equivalent to one
                      day's rental rate.
                    </p>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>

            {/* Second FAQ Section */}
            <div className="space-y-4">
              <Accordion type="single" collapsible className="space-y-4">
                {/* Question 4 */}
                <AccordionItem value="question4">
                  <AccordionTrigger className="group flex items-center justify-between font-medium p-4 bg-white shadow-md rounded-lg transition-transform hover:scale-[1.02] text-sm cursor-pointer">
                    What is your fuel policy?
                  </AccordionTrigger>
                  <AccordionContent className="p-4 bg-white rounded-b-lg shadow-lg text-gray-700">
                    <p className="mb-2">
                      <span className="font-semibold text-red-500">
                        Our fuel policy options:
                      </span>
                    </p>
                    <ul className="list-disc pl-5 space-y-1">
                      <li>
                        <strong>Full-to-Full:</strong> Most economical option -
                        receive the car with a full tank and return it full
                      </li>
                      <li>
                        <strong>Pre-Purchase:</strong> Pay for a full tank
                        upfront at a discounted rate and return at any level
                      </li>
                      <li>
                        <strong>Pay-as-you-use:</strong> Pay for the exact fuel
                        used during your rental period
                      </li>
                    </ul>
                    <p className="mt-3">
                      Fuel service charges apply if the tank isn't returned at
                      the agreed level.
                    </p>
                  </AccordionContent>
                </AccordionItem>

                {/* Question 5 */}
                <AccordionItem value="question5">
                  <AccordionTrigger className="group flex items-center justify-between text-sm  font-medium p-4 bg-white shadow-md rounded-lg transition-transform hover:scale-[1.02] cursor-pointer">
                    What happens in case of an accident?
                  </AccordionTrigger>
                  <AccordionContent className="p-4 bg-white rounded-b-lg shadow-lg text-gray-700">
                    <p className="mb-2">
                      <span className="font-semibold text-red-500">
                        Accident Procedure:
                      </span>
                    </p>
                    <ol className="list-decimal pl-5 space-y-1">
                      <li>
                        Ensure everyone's safety and call emergency services if
                        needed
                      </li>
                      <li>Contact ECRS immediately at our 24/7 support line</li>
                      <li>Exchange information with other parties involved</li>
                      <li>
                        Take photos of the scene and all vehicles involved
                      </li>
                      <li>
                        File a police report (required for insurance claims)
                      </li>
                      <li>
                        Do not admit fault or sign any documents without ECRS
                        approval
                      </li>
                    </ol>
                    <p className="mt-3">
                      Our team will guide you through the next steps and arrange
                      for a replacement vehicle if needed.
                    </p>
                  </AccordionContent>
                </AccordionItem>

                {/* Question 6 */}
                <AccordionItem value="question6">
                  <AccordionTrigger className="group flex items-center justify-between text-sm font-medium p-4 bg-white shadow-md rounded-lg transition-transform hover:scale-[1.02] cursor-pointer">
                    Do you offer one-way rentals?
                  </AccordionTrigger>
                  <AccordionContent className="p-4 bg-white rounded-b-lg shadow-lg text-gray-700">
                    <p className="mb-2">
                      <span className="font-semibold text-red-500">
                        One-Way Rental Options:
                      </span>
                    </p>
                    <p>
                      Yes, we offer one-way rentals between most of our
                      locations with some restrictions:
                    </p>
                    <ul className="list-disc pl-5 mt-2 space-y-1">
                      <li>Available for rentals of 3+ days in most cases</li>
                      <li>Subject to a one-way fee based on distance</li>
                      <li>
                        Must be booked in advance (not available for walk-ins)
                      </li>
                      <li>Some vehicle classes may not be eligible</li>
                      <li>
                        Cross-border one-way rentals have additional
                        requirements
                      </li>
                    </ul>
                    <p className="mt-3">
                      Contact our reservations team for specific one-way rental
                      quotes and availability.
                    </p>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}





