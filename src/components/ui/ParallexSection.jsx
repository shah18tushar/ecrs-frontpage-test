// 'use client';

// import React from 'react';
// import Image from 'next/image';
// import {Users, MapPinned, BadgeCheck, XCircle} from 'lucide-react';

// const features = [
//   {
//     icon: <Users size={28} />,
//     title: 'First Class Services',
//     description: 'A large fleet of Cars / MUV & luxurious cars as well as all types of Buses etc.',
//   },
//   {
//     icon: <MapPinned size={28} />,
//     title: '24/7 Support',
//     description: 'Well-trained and uniformed Drivers equipped with mobile phones & Hands-free.',
//   },
//   {
//     icon: <BadgeCheck size={28} />,
//     title: 'Drivers : Routes & Regulations',
//     description: 'Drivers are thoroughly updated about their daily routes and legal, RTO and company requirements.',
//   },
//   {
//     icon: <XCircle size={28} />,
//     title: 'Airport Experts: Skilled Drivers',
//     description: 'Drivers are well acquainted with pick-up/drop routines for domestic and international airports in Mumbai. Also trained on guest house drop-offs.',
//   },
// ];

// export default function ParallaxSection () {
//   return (
//     <section
//       className="  relative bg-fixed bg-cover bg-center  py-24 px-6 md:px-16 lg:px-24 brightness-75"
//       style={{
//         backgroundImage: "url('/carpic3.jpg')",
//       }}
//     >

//       <div className="max-w-7xl mx-auto text-center mb-16">
//         <h2 className="text-3xl md:text-4xl font-bold">
//           To provide best quality services to our valued customers we are equipped with
//         </h2>
//       </div>

//       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
//         {features.map ((item, idx) => (
//           <div
//             key={idx}
//             className="bg-white/10 backdrop-blur-md p-6 rounded-xl text-left shadow-md"
//           >
//             <div className="bg-white text-black w-fit p-3 rounded-lg mb-4">
//               {item.icon}
//             </div>
//             <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
//             <p className="text-sm">{item.description}</p>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// }






"use client";

import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import { Users, MapPinned, BadgeCheck, XCircle } from "lucide-react";

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger);

const features = [
  {
    icon: <Users size={28} />,
    title: "First Class Services",
    description:
      "A large fleet of Cars / MUV & luxurious cars as well as all types of Buses etc.",
  },
  {
    icon: <MapPinned size={28} />,
    title: "24/7 Support",
    description:
      "Well-trained and uniformed Drivers equipped with mobile phones & Hands-free.",
  },
  {
    icon: <BadgeCheck size={28} />,
    title: "Drivers : Routes & Regulations",
    description:
      "Drivers are thoroughly updated about their daily routes and legal, RTO and company requirements.",
  },
  {
    icon: <XCircle size={28} />,
    title: "Airport Experts: Skilled Drivers",
    description:
      "Drivers are well acquainted with pick-up/drop routines for domestic and international airports in Mumbai. Also trained on guest house drop-offs.",
  },
];

export default function ParallaxSection() {
  const sectionRef = useRef(null);
  const headingRef = useRef(null);
  const featuresRef = useRef([]);

  useEffect(() => {
    // Background parallax effect
    gsap.to(sectionRef.current, {
      backgroundPosition: "50% 30%",
      ease: "none",
      scrollTrigger: {
        trigger: sectionRef.current,
        scrub: true,
      },
    });

    // Heading animation
    gsap.from(headingRef.current, {
      opacity: 0,
      y: 50,
      duration: 1,
      ease: "power3.out",
      scrollTrigger: {
        trigger: headingRef.current,
        start: "top 80%",
      },
    });

    // Features cards animation
    featuresRef.current.forEach((el, index) => {
      gsap.from(el, {
        opacity: 0,
        y: 80,
        duration: 0.8,
        delay: index * 0.15,
        ease: "back.out(1.7)",
        scrollTrigger: {
          trigger: el,
          start: "top 75%",
        },
      });
    });

    // Continuous subtle animation for feature cards
    featuresRef.current.forEach((el) => {
      gsap.to(el, {
        y: -5,
        duration: 2,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative bg-fixed bg-cover bg-center py-32 px-6 md:px-16 lg:px-24 overflow-hidden"
      // style={{
      //   backgroundImage:
      //     "linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url('/carpic3.jpg')",
      //   backgroundPosition: "50% 50%",
      // }}
      style={{
        backgroundImage:
          "linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url('/carpic3.jpg')",
        backgroundPosition: "50% 50%",
        backgroundSize: "cover",
        filter: "brightness(0.75)",
      }}
    >
      {/* Animated overlay for depth */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-transparent to-black/10 z-0"></div>

      {/* Subtle particle animation */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-white/10"
            style={{
              width: `${Math.random() * 4 + 1}px`,
              height: `${Math.random() * 4 + 1}px`,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animation: `float ${Math.random() * 10 + 10}s linear infinite`,
              animationDelay: `${Math.random() * 5}s`,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        <div ref={headingRef} className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            To provide{" "}
            <span className="text-gold-500">best quality services</span> to our
            valued customers
          </h2>
          <p className="text-xl text-white/80 max-w-4xl mx-auto">
            We are equipped with premium vehicles and professional staff to
            ensure your complete satisfaction
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((item, idx) => (
            <div
              key={idx}
              ref={(el) => (featuresRef.current[idx] = el)}
              className="bg-white/5 backdrop-blur-lg border border-white/10 p-8 rounded-2xl text-left shadow-xl hover:shadow-2xl transition-all duration-500 hover:bg-white/10 transform hover:-translate-y-2"
            >
              <div className="bg-gradient-to-br from-gold-500 to-gold-700 text-white w-fit p-4 rounded-xl mb-6 shadow-lg">
                {item.icon}
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">
                {item.title}
              </h3>
              <p className="text-white/80">{item.description}</p>
              <div className="absolute inset-0 border-2 border-transparent hover:border-gold-500 rounded-2xl pointer-events-none transition-all duration-300"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}