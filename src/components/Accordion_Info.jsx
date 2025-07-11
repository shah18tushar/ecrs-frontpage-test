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

  const text =  "FAQ's"


  return (
    <section className="pb-12 relative">
      {/* Background Design */}
      <div className="absolute inset-0 -z-10">
        <div className="h-full w-full bg-gradient-to-t from-red-400 to-transparent rounded-full opacity-10" />
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

        {/* Accordion Section */}
        <div className="max-w-4xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4 ">
            {/* Question 1 */}
            <div>
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
            </div>

            {/* Question 2 */}
            <div>
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
            </div>

            {/* Question 3 */}
            <div>
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
            </div>

            {/* Question 4 */}
            {/* <div>
              <AccordionItem value="question4">
                <AccordionTrigger className="group flex items-center justify-between text-sm  font-medium p-4 bg-white shadow-md rounded-lg transition-transform hover:scale-[1.02] cursor-pointer">
                  What happens if I return the car late?
                </AccordionTrigger>
                <AccordionContent className="p-4 bg-white rounded-b-lg shadow-lg text-gray-700">
                  <p className="mb-2">
                    <span className="font-semibold text-red-500">
                      Late Return Policy:
                    </span>
                  </p>
                  <p>
                    We understand travel plans can change. Our grace period is
                    59 minutes after your scheduled return time. After that:
                  </p>
                  <ul className="list-disc pl-5 mt-2 space-y-1">
                    <li>1-3 hours late: 50% of daily rate</li>
                    <li>3-6 hours late: 75% of daily rate</li>
                    <li>Over 6 hours: Full additional day charge</li>
                  </ul>
                  <p className="mt-3">
                    Please contact us if you anticipate being late - we may be
                    able to extend your rental period if the vehicle isn't
                    reserved.
                  </p>
                </AccordionContent>
              </AccordionItem>
            </div> */}

            {/* Question 5 */}
            {/* <div className="cursor-pointer">
              <AccordionItem value="question5">
                <AccordionTrigger className="group flex items-center justify-between text-sm  font-medium p-4 bg-white shadow-md rounded-lg transition-transform hover:scale-[1.02] cursor-pointer">
                  Do you offer one-way rentals?
                </AccordionTrigger>
                <AccordionContent className="p-4 bg-white rounded-b-lg shadow-lg text-gray-700">
                  <p className="mb-2">
                    <span className="font-semibold text-red-500">
                      One-Way Rental Options:
                    </span>
                  </p>
                  <p>
                    Yes, we offer one-way rentals between most of our locations
                    with some restrictions:
                  </p>
                  <ul className="list-disc pl-5 mt-2 space-y-1">
                    <li>Available for rentals of 3+ days</li>
                    <li>Subject to availability and drop-off fees</li>
                    <li>
                      Interstate one-way rentals may have additional
                      requirements
                    </li>
                    <li>Special rates apply for weekend returns</li>
                  </ul>
                  <p className="mt-3">
                    Contact our reservation team for specific one-way rental
                    quotes and availability.
                  </p>
                </AccordionContent>
              </AccordionItem>
            </div> */}
          </Accordion>
        </div>
      </div>
    </section>
  );
}