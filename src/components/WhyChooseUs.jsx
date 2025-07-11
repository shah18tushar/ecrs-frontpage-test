

// "use client";

// import React, { useEffect, useRef } from "react";
// import { Users, Award, ShieldCheck } from "lucide-react";
// import gsap from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";

// const WhyUsCard = () => {
//   const sectionRef = useRef(null);
//   const cardRefs = useRef([]);
//   const animationRef = useRef(null);
//   const floatAnimations = useRef([]);

//   const achievementsData = [
//     {
//       icon: <Users size={40} className="text-red-500" />,
//       count: "175+",
//       title: "Exclusive Corporate Clients",
//       description:
//         "Trusted by Fortune 175+ executives, celebrities, and royalty who expect nothing but perfection in their transportation.",
//       accentColor: "bg-gradient-to-br from-red-500 to-red-700",
//       shadowColor: "shadow-red-300",
//       borderColor: "border-red-200",
//     },
//     {
//       icon: <Award size={40} className="text-red-500" />,
//       count: "13+",
//       title: "Years of Excellence",
//       description:
//         "Nearly two decades of setting the standard for luxury mobility with impeccable service records by ECRS.",
//       accentColor: "bg-gradient-to-br from-red-500 to-red-700",
//       shadowColor: "shadow-red-300",
//       borderColor: "border-red-200",
//     },
//     {
//       icon: <ShieldCheck size={40} className="text-red-500" />,
//       count: "100%",
//       title: "Safety Record",
//       description:
//         "Flawless safety maintained by our professional chauffeurs with special forces training backgrounds.",
//       accentColor: "bg-gradient-to-br from-red-500 to-red-700",
//       shadowColor: "shadow-red-300",
//       borderColor: "border-red-200",
//     },
//   ];

//   return (
//     <section className="relative py-24 px-4  overflow-hidden">
//       <div className="max-w-6xl mx-auto relative z-10">
//         <div className="flex justify-center mb-10">
//           <div className="text-center max-w-2xl">
//             {/* <p className="text-red-500 font-medium  tracking-widest mb-3 text-sm uppercase">
//               Elite Standards
//             </p> */}
//             <h2 className="text-4xl md:text-3xl font-serif font-medium text-gray-900 mb-3">
//               Why Choose ECRS
//             </h2>
//             {/* <div className="w-28 h-0.5 bg-gradient-to-r from-transparent via-red-500 to-transparent mx-auto"></div> */}
//           </div>
//         </div>

//         <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//           {achievementsData.map((item, idx) => (
//             <div
//               className={`relative bg-white rounded-xl border ${item.borderColor} p-8 hover:bg-red-50 text-center transition-all duration-500 group overflow-hidden hover:${item.shadowColor} hover:shadow-xl`}
//               style={{
//                 boxShadow: "0 15px 40px -15px rgba(0,0,0,0.08)",
//                 transformStyle: "preserve-3d",
//               }}
//             >
//               {/* Luxury shine effect */}
//               <div className="absolute inset-0 overflow-hidden rounded-xl">
//                 <div
//                   className="absolute top-0 left-0 w-full h-full bg-[linear-gradient(120deg,transparent_0%,rgba(255,255,255,0.4)_50%,transparent_100%)] opacity-0 group-hover:opacity-100 transition-opacity duration-700"
//                   style={{ transform: "translateZ(20px)" }}
//                 ></div>
//               </div>

//               {/* Card content */}
//               <div
//                 className="relative z-10"
//                 style={{ transformStyle: "preserve-3d" }}
//               >
//                 <div className="flex justify-center mb-6">
//                   <div
//                     // className={`p-4 bg-white rounded-full border ${item.borderColor} group-hover:border-red-500 transition-all duration-500 shadow-sm`}
//                     style={{ transform: "translateZ(30px)" }}
//                   >
//                     {item.icon}
//                   </div>
//                 </div>
//                 <div
//                   className={`text-5xl font-serif font-medium mb-3 bg-clip-text text-transparent ${item.accentColor}`}
//                   style={{ transform: "translateZ(20px)" }}
//                 >
//                   {item.count}
//                 </div>
//                 <h3
//                   className="text-xl font-medium text-gray-900 mb-4"
//                   style={{ transform: "translateZ(15px)" }}
//                 >
//                   {item.title}
//                 </h3>
//                 <p
//                   className="text-gray-600 font-light text-sm leading-relaxed"
//                   style={{ transform: "translateZ(10px)" }}
//                 >
//                   {item.description}
//                 </p>
//               </div>

//               {/* Depth effect */}
//               <div className="absolute inset-0 rounded-xl overflow-hidden pointer-events-none">
//                 <div className="absolute inset-0 border border-transparent group-hover:border-red-500/30 transition-all duration-500 rounded-xl"></div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default WhyUsCard;






"use client";

import React from "react";
import { Car, BadgePercent, Headset } from "lucide-react";

const WhyUsCard = () => {
  const features = [
    {
      icon: <Car size={40} className="text-red-500" />,
      title: "Variety of Car Brands",
      description:
        "Lorem ipsum dolor sit amet, consectadipiscing elit. Aenean commodo ligula eget dolor.",
    },
    {
      icon: <BadgePercent size={40} className="text-red-500" />,
      title: "Best Rate Guarantee",
      description:
        "Lorem ipsum dolor sit amet, consectadipiscing elit. Aenean commodo ligula eget dolor.",
    },
    {
      icon: <Headset size={40} className="text-red-500" />,
      title: "Awesome Customer Support",
      description:
        "Lorem ipsum dolor sit amet, consectadipiscing elit. Aenean commodo ligula eget dolor.",
    },
  ];

  return (
    <section className="py-16 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-6">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Why Choose ECRS
          </h2>
          <p className="text-sm text-gray-600 max-w-2xl mx-auto">
            Explore our first class limousine & car rental services
          </p>
          <div className="w-20 h-1 bg-red-500 mx-auto mt-3"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white p-8  text-center "
            >
              <div className="flex justify-center mb-6">
                <div className="">{feature.icon}</div>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                {feature.title}
              </h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyUsCard;


















// 'use client';
// import React from 'react';
// import {CheckCircle, ShieldCheck, Timer} from 'lucide-react';
// import SpotlightCard from '@/components/ui/SpotlightCard';
// import SplitText from '@/components/ui/SplitText';

// const cardItems = [
//   {
//     icon: <ShieldCheck size={40} className="text-blue-400" />,
//     title: 'Safety First',
//     description: 'We ensure top-notch safety protocols in every ride.',
//   },
//   {
//     icon: <Timer size={40} className="text-green-400" />,
//     title: 'On-Time Service',
//     description: 'Punctual pickups and drop-offs, always on schedule.',
//   },
//   {
//     icon: <CheckCircle size={40} className="text-purple-400" />,
//     title: 'Trusted by Thousands',
//     description: 'Our service is loved and trusted across the region.',
//   },
// ];

// const WhyUsCard = () => {
//   return (
//     <div className="py-20 px-6 ">
//       <div className="flex justify-center mb-12">
//         <SplitText
//           text="Why Choose Us?"
//           className="text-4xl md:text-6xl font-bold  text-center"
//           delay={100}
//           duration={0.6}
//           ease="power3.out"
//           splitType="chars"
//           from={{opacity: 0, y: 40}}
//           to={{opacity: 1, y: 0}}
//           threshold={0.1}
//           rootMargin="-100px"
//           textAlign="center"
//         />
//       </div>

//       <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
//         {/* Left card (single stacked) */}
//         <FeatureCard {...cardItems[0]} className="h-full" />

//         {/* Right column with two stacked cards */}
//         <div className="flex flex-col gap-8">
//           <FeatureCard {...cardItems[1]} />
//           <FeatureCard {...cardItems[2]} />
//         </div>
//       </div>
//     </div>
//   );
// };

// const FeatureCard = ({icon, title, description, className = ''}) => (
//   <SpotlightCard
//     className={`bg-white text-black border border-white rounded-xl shadow-md p-6 text-center hover:shadow-lg transition-all duration-300 ${className}`}
//     spotlightColor="rgb(193, 0, 7)"
//   >
//     <div className="flex justify-center mb-4">{icon}</div>
//     <h3 className="text-xl font-semibold mb-2">{title}</h3>
//     <p className="text-gray-300">{description}</p>
//   </SpotlightCard>
// );

// export default WhyUsCard;
