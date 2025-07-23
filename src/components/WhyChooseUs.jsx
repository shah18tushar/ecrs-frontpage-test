"use client";

import React from "react";
import { Car, BadgePercent, Headset, MapPin, Clock, Cpu, Users, ShieldCheck, PieChart } from "lucide-react";
import MagnifierCursor from "./MagnifierCursor";


const WhyUsCard = () => {

    const text = " Why Choose ECRS..?";

      const features = [
        {
          icon: <MapPin className="w-6 h-6 text-red-500" />,
          title: "Pan-India Presence",
          description:
            "Operations in 180+ cities, ensuring seamless service across the country.",
        },
        {
          icon: <Clock className="w-6 h-6 text-red-500" />,
          title: "Experience & Expertise",
          description:
            "Over 13 years in the travel industry, specializing in corporate transport solutions.",
        },
        {
          icon: <Car className="w-6 h-6 text-red-500" />,
          title: "Own Fleet & Infrastructure",
          description:
            "In-house fleet, 40,000 sq. ft. parking per branch, dedicated service and fuel stations for uninterrupted service.",
        },
        {
          icon: <Cpu className="w-6 h-6 text-red-500" />,
          title: "Advanced Technology",
          description:
            "Booking Application, Real-time GPS tracking, client dashboards, and trip monitoring for safety and transparency.",
        },
        {
          icon: <Headset className="w-6 h-6 text-red-500" />,
          title: "24/7 Operations Support",
          description:
            "Round-the-clock assistance with a dedicated Key Account Manager and emergency response readiness.",
        },
        {
          icon: <Users className="w-6 h-6 text-red-500" />,
          title: "Driver Excellence",
          description:
            "Well-trained chauffeurs with regular briefings, background checks, and on-site accommodations.",
        },
        {
          icon: <ShieldCheck className="w-6 h-6 text-red-500" />,
          title: "Compliance & Security",
          description:
            "ISO 27001 certified with full fleet and documentation compliance for peace of mind.",
        },
        {
          icon: <PieChart className="w-6 h-6 text-red-500" />,
          title: "Flexible Services",
          description:
            "ETS, spot rentals, monthly, short-term, and long-term plans, customized & tailored to corporate needs.",
        },
        // {
        //   icon: <BadgePercent className="w-6 h-6 text-red-500" />,
        //   title: "Cost Efficiency",
        //   description:
        //     "Solutions designed to reduce organizational travel costs while improving satisfaction and productivity.",
        // },
      ];

  return (
    <section className="py-16 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="flex justify-center mb-10">
          <div className="text-center max-w-2xl">
            <p className="text-red-500 font-medium  tracking-widest mb-3 text-sm uppercase">
              Elite Standards
            </p>
            <h2 className="text-4xl md:text-3xl font-serif font-medium text-gray-900 mb-3">
              <MagnifierCursor text={text} cursorSize={45} />
            </h2>
            <div className="w-28 h-0.5 bg-gradient-to-r from-transparent via-red-500 to-transparent mx-auto"></div>

            <p className="text-gray-700 text-sm mt-4">
              Trusted by Corporate Industry across India for delivering
              reliable, efficient, and safe transportation solutions.{" "}
            </p>
            <p className="text-gray-700 text-sm">
              ECRS (Executive Car Rental Services) is trusted by leading
              corporations across India for delivering reliable, efficient, and
              safe transportation solutions. Here’s why clients choose us.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-0">
          {features.map((feature, index) => (
            <div key={index} className="bg-white p-8 text-center ">
              <div className="flex justify-center mb-6">
                <div className="">{feature.icon}</div>
              </div>
              <h3 className="text-base font-semibold text-gray-900 mb-4">
                {feature.title}
              </h3>
              <p className="text-gray-600 text-sm font-medium">
                {feature.description}
              </p>
              
            </div>
            
          ))}
        </div>
        <div className="mt-6 text-center">
          <p className="text-gray-600 italic max-w-3xl mx-auto font-medium">
            ECRS (Executive Car Rental Services) is trusted by leading
            corporations across India for delivering reliable, efficient, and
            safe transportation solutions.
          </p>
        </div>
      </div>
    </section>
  );
};

export default WhyUsCard;







// "use client";

// import React from "react";
// import {
//   MapPin,
//   Clock,
//   ShieldCheck,
//   Cpu,
//   Zap,
//   Users,
//   FileCheck,
//   PieChart,
//   Car,
//   Headset,
//   BadgePercent,
// } from "lucide-react";
// import MagnifierCursor from "./MagnifierCursor";

// const WhyUsCard = () => {
//   const text = " Why Choose ECRS..?";
//   const features = [
//     {
//       icon: <MapPin className="w-6 h-6 text-red-500" />,
//       title: "Pan-India Presence",
//       description:
//         "Operations in 180+ cities, ensuring seamless service across the country.",
//     },
//     {
//       icon: <Clock className="w-6 h-6 text-red-500" />,
//       title: "Experience & Expertise",
//       description:
//         "Over 13 years in the travel industry, specializing in corporate transport solutions.",
//     },
//     {
//       icon: <Car className="w-6 h-6 text-red-500" />,
//       title: "Own Fleet & Infrastructure",
//       description:
//         "In-house fleet, 40,000 sq. ft. parking per branch, dedicated service and fuel stations for uninterrupted service.",
//     },
//     {
//       icon: <Cpu className="w-6 h-6 text-red-500" />,
//       title: "Advanced Technology",
//       description:
//         "Booking Application, Real-time GPS tracking, client dashboards, and trip monitoring for safety and transparency.",
//     },
//     {
//       icon: <Headset className="w-6 h-6 text-red-500" />,
//       title: "24/7 Operations Support",
//       description:
//         "Round-the-clock assistance with a dedicated Key Account Manager and emergency response readiness.",
//     },
//     {
//       icon: <Users className="w-6 h-6 text-red-500" />,
//       title: "Driver Excellence",
//       description:
//         "Well-trained chauffeurs with regular briefings, background checks, and on-site accommodations.",
//     },
//     {
//       icon: <ShieldCheck className="w-6 h-6 text-red-500" />,
//       title: "Compliance & Security",
//       description:
//         "ISO 27001 certified with full fleet and documentation compliance for peace of mind.",
//     },
//     {
//       icon: <PieChart className="w-6 h-6 text-red-500" />,
//       title: "Flexible Services",
//       description:
//         "ETS, spot rentals, monthly, short-term, and long-term plans, customized & tailored to corporate needs.",
//     },
//     {
//       icon: <BadgePercent className="w-6 h-6 text-red-500" />,
//       title: "Cost Efficiency",
//       description:
//         "Solutions designed to reduce organizational travel costs while improving satisfaction and productivity.",
//     },
//   ];

//   return (
//     <section className="py-20 px-4 bg-white">
//       <div className="max-w-7xl mx-auto">
//         <div className="flex justify-center mb-16">
//           <div className="text-center max-w-3xl">
//             <p className="text-red-500 font-medium tracking-widest mb-3 text-sm uppercase">
//               Elite Standards
//             </p>
//             <h2 className="text-4xl md:text-5xl font-serif font-medium text-gray-900 mb-4">
//               <MagnifierCursor text={text} cursorSize={45} />
//             </h2>
//             <div className="w-32 h-1 bg-gradient-to-r from-transparent via-red-500 to-transparent mx-auto mb-6"></div>

//             <p className="text-gray-700 text-lg mt-6 leading-relaxed">
//               Trusted by Corporate Industry across India for delivering
//               reliable, efficient, and safe transportation solutions.
//             </p>
//           </div>
//         </div>

//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//           {features.map((feature, index) => (
//             <div
//               key={index}
//               className="group relative bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl border border-gray-100 hover:border-red-100"
//             >
//               <div className="p-8">
//                 <div className="w-14 h-14 rounded-full bg-red-50 flex items-center justify-center mb-6 group-hover:bg-red-100 transition-colors duration-300">
//                   {feature.icon}
//                 </div>
//                 <h3 className="text-xl font-semibold text-gray-900 mb-3">
//                   {feature.title}
//                 </h3>
//                 <p className="text-gray-600 leading-relaxed">
//                   {feature.description}
//                 </p>
//               </div>
//               <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-red-400 to-red-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
//             </div>
//           ))}
//         </div>

//         <div className="mt-16 text-center">
//           <p className="text-gray-600 italic max-w-3xl mx-auto">
//             ECRS (Executive Car Rental Services) is trusted by leading
//             corporations across India for delivering reliable, efficient, and
//             safe transportation solutions.
//           </p>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default WhyUsCard;