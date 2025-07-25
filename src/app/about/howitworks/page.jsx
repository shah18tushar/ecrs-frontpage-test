// 'use client';

// import {useGSAPFadeInUp} from '@/utils/animations';
// import {useRef} from 'react';
// import SplitText from '@/components/ui/SplitText';
// import Threads from '@/components/ui/Threads';
// import {
//   bookingProcedure,
//   billingInfo,
//   successPrinciples,
//   contactInfo,
// } from '@/data/howitworks';
// import ExpandableCards from '@/components/ui/ExpandableCards';
// import MagnifierCursor from '@/components/MagnifierCursor';

// export default function HowWeWork () {
//   const refs = {
//     title: useRef (null),
//     procedure: useRef (null),
//     billing: useRef (null),
//     success: useRef (null),
//     contact: useRef (null),
//   };

//   // Apply animations
//   Object.entries (refs).forEach (([_, ref], index) => {
//     useGSAPFadeInUp (index * 0.2, 0.8, ref);
//   });

//   const text = "Today's Car Rental And Van Rental Offers...!";
//   const text1 = " Affordable rates on reliable rentals — updated daily for your convenience.";

//   return (
//     <div className="text-black">
//       {/* Hero Section with Threads + SplitText */}
//       <section className="relative w-full h-[350px] md:h-[300px] mt-10 overflow-hidden flex items-center justify-center bg-white">
//         <div className="absolute inset-0 z-0">
//           <Threads amplitude={1} distance={0} enableMouseInteraction={false} />
//         </div>
//         <div className="relative z-10 text-center px-4">
//           <SplitText
//             text="How It Works"
//             className="text-5xl md:text-6xl font-bold text-gray-900"
//             delay={80}
//             duration={0.6}
//             ease="power3.out"
//             splitType="chars"
//             from={{ opacity: 0, y: 30 }}
//             to={{ opacity: 1, y: 0 }}
//             threshold={0.1}
//           />
//           <p className="text-gray-600 -mt-4 max-w-xl mx-auto text-lg">
//             A clear walkthrough of our booking and billing journey
//           </p>
//           <p className="text-gray-600 max-w-xl mx-auto text-base mt-1">
//             A step-by-step guide to help you understand our simple and efficient
//             process
//           </p>
//         </div>
//       </section>

//       {/* Main Content */}

//       <div className="pb-20">
//         <p className="text-4xl font-bold text-center font-serif text-gray-700">
//           <MagnifierCursor text={text} cursorSize={45} />
//         </p>
//         <p className="text-xl font-light  text-center mt-3 text-red-700 tracking-wide italic">
//           <MagnifierCursor text={text1} cursorSize={40} />
//         </p>

//         <div className="pt-10">
//           <ExpandableCards />
//         </div>
//       </div>
//     </div>
//   );
// }




"use client";

import { useGSAPFadeInUp } from "@/utils/animations";
import { useRef } from "react";
import SplitText from "@/components/ui/SplitText";
import Threads from "@/components/ui/Threads";
import {
  bookingProcedure,
  billingInfo,
  successPrinciples,
  contactInfo,
} from "@/data/howitworks";
import ExpandableCards from "@/components/ui/ExpandableCards";
import MagnifierCursor from "@/components/MagnifierCursor";
import BookingProcess from "@/components/ui/BookingProcess";

export default function HowWeWork() {
  const refs = {
    title: useRef(null),
    procedure: useRef(null),
    billing: useRef(null),
    success: useRef(null),
    contact: useRef(null),
  };

  Object.entries(refs).forEach(([_, ref], index) => {
    useGSAPFadeInUp(index * 0.2, 0.8, ref);
  });

  const text = "Today's Car Rental And Van Rental Offers...!";
  
  return (
    <div className="text-black">
      {/* Hero Section */}
      <section className="relative w-full h-[280px] sm:h-[320px] md:h-[350px] mt-8 overflow-hidden flex items-center justify-center bg-white">
        <div className="absolute inset-0 z-0">
          <Threads amplitude={1} distance={0} enableMouseInteraction={false} />
        </div>
        <div className="relative z-10 text-center px-4 sm:px-6 md:px-8">
          <SplitText
            text="How It Works"
            className="text-[clamp(1.75rem,5vw,3.5rem)] font-bold text-gray-900"
            delay={80}
            duration={0.6}
            ease="power3.out"
            splitType="chars"
            from={{ opacity: 0, y: 30 }}
            to={{ opacity: 1, y: 0 }}
            threshold={0.1}
          />
          <p className="text-gray-600 mt-1 text-sm sm:text-base max-w-xl mx-auto">
            A clear walkthrough of our booking and billing journey
          </p>
          <p className="text-gray-600 mt-1 text-sm sm:text-base max-w-xl mx-auto">
            A step-by-step guide to help you understand our simple and efficient
            process
          </p>
        </div>
      </section>

      {/* Main Content */}
      <div className="pb-16 px-4 sm:px-6 md:px-10">
        <p className="text-base md:text-4xl font-bold text-center font-serif text-gray-700">
          <MagnifierCursor text={text} cursorSize={45} />
        </p>
        <p className="text-sm md:w-full max-w-xl mx-auto md:text-xl font-light text-center mt-3 text-red-600 tracking-wide italic">
          Affordable rates on reliable rentals — updated daily for your
          convenience.
        </p>
        <div className="pt-10">
          <ExpandableCards />
        </div>
      </div>

      {/* Stack Component */}

      <div className="">
        <BookingProcess />
      </div>
    </div>
  );
}
