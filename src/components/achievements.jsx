// "use client";

// import React from "react";
// import InfiniteScroll from "./ui/InfiniteScroll";

// const CoreValues = () => {

//    const items = [
//      {
//        content: (
//          <div className="bg-gradient-to-br from-red-500 via-red-600 to-red-700 text-white p-6 rounded-2xl shadow-2xl border border-red-400/30 backdrop-blur-sm">
//            <div className="text-2xl font-bold mb-2">Excellence</div>
//            <p className="text-sm opacity-90">
//              Delivering premium automotive experiences that exceed expectations
//            </p>
//          </div>
//        ),
//      },
//      {
//        content: (
//          <div className="bg-gradient-to-br from-red-600 via-red-500 to-red-700 text-white p-6 rounded-2xl shadow-2xl border border-red-400/30 backdrop-blur-sm">
//            <div className="text-2xl font-bold mb-2">Reliability</div>
//            <p className="text-sm opacity-90">
//              Meticulously maintained fleet ensuring seamless journeys
//            </p>
//          </div>
//        ),
//      },
//      {
//        content: (
//          <div className="bg-gradient-to-br from-red-700 via-red-600 to-red-500 text-white p-6 rounded-2xl shadow-2xl border border-red-400/30 backdrop-blur-sm">
//            <div className="text-2xl font-bold mb-2">Customer First</div>
//            <p className="text-sm opacity-90">
//              Your satisfaction drives every decision we make
//            </p>
//          </div>
//        ),
//      },
//      {
//        content: (
//          <div className="bg-gradient-to-br from-red-500 via-red-700 to-red-600 text-white p-6 rounded-2xl shadow-2xl border border-red-400/30 backdrop-blur-sm">
//            <div className="text-2xl font-bold mb-2">Innovation</div>
//            <p className="text-sm opacity-90">
//              Cutting-edge technology meets traditional automotive craftsmanship
//            </p>
//          </div>
//        ),
//      },
//      {
//        content: (
//          <div className="bg-gradient-to-br from-red-600 via-red-700 to-red-500 text-white p-6 rounded-2xl shadow-2xl border border-red-400/30 backdrop-blur-sm">
//            <div className="text-2xl font-bold mb-2"> Integrity</div>
//            <p className="text-sm opacity-90">
//              Transparent pricing, honest service, unwavering trust
//            </p>
//          </div>
//        ),
//      },
//      {
//        content: (
//          <div className="bg-gradient-to-br from-red-700 via-red-500 to-red-600 text-white p-6 rounded-2xl shadow-2xl border border-red-400/30 backdrop-blur-sm">
//            <div className="text-2xl font-bold mb-2">Luxury</div>
//            <p className="text-sm opacity-90">
//              Every vehicle curated for the discerning traveler
//            </p>
//          </div>
//        ),
//      },
//      {
//        content: (
//          <div className="bg-gradient-to-br from-red-500 via-red-600 to-red-700 text-white p-6 rounded-2xl shadow-2xl border border-red-400/30 backdrop-blur-sm">
//            <div className="text-2xl font-bold mb-2">Performance</div>
//            <p className="text-sm opacity-90">
//              High-performance vehicles for extraordinary experiences
//            </p>
//          </div>
//        ),
//      },
//      {
//        content: (
//          <div className="bg-gradient-to-br from-red-600 via-red-500 to-red-700 text-white p-6 rounded-2xl shadow-2xl border border-red-400/30 backdrop-blur-sm">
//            <div className="text-2xl font-bold mb-2">Safety</div>
//            <p className="text-sm opacity-90">
//              Rigorous safety standards protecting every journey
//            </p>
//          </div>
//        ),
//      },
//      {
//        content: (
//          <div className="bg-gradient-to-br from-red-700 via-red-600 to-red-500 text-white p-6 rounded-2xl shadow-2xl border border-red-400/30 backdrop-blur-sm">
//            <div className="text-2xl font-bold mb-2">Sustainability</div>
//            <p className="text-sm opacity-90">
//              Eco-conscious options for responsible luxury travel
//            </p>
//          </div>
//        ),
//      },
//      {
//        content: (
//          <div className="bg-gradient-to-br from-red-500 via-red-700 to-red-600 text-white p-6 rounded-2xl shadow-2xl border border-red-400/30 backdrop-blur-sm">
//            <div className="text-2xl font-bold mb-2">Support</div>
//            <p className="text-sm opacity-90">
//              24/7 premium support for uninterrupted service
//            </p>
//          </div>
//        ),
//      },
//      {
//        content: (
//          <div className="bg-gradient-to-br from-red-600 via-red-700 to-red-500 text-white p-6 rounded-2xl shadow-2xl border border-red-400/30 backdrop-blur-sm">
//            <div className="text-2xl font-bold mb-2">Precision</div>
//            <p className="text-sm opacity-90">
//              Attention to detail in every aspect of service delivery
//            </p>
//          </div>
//        ),
//      },
//      {
//        content: (
//          <div className="bg-gradient-to-br from-red-700 via-red-500 to-red-600 text-white p-6 rounded-2xl shadow-2xl border border-red-400/30 backdrop-blur-sm">
//            <div className="text-2xl font-bold mb-2">Evolution</div>
//            <p className="text-sm opacity-90">
//              Continuously evolving to set new industry standards
//            </p>
//          </div>
//        ),
//      },
//    ];

//   return (
//     <section className="py-10 bg-gradient-to-b from-black via-gray-950 to-black relative overflow-hidden">
//       {/* Premium background effects */}
//       <div className="absolute inset-0 bg-gradient-to-r from-red-500/5 via-transparent to-red-500/5"></div>
//       <div className="absolute top-0 left-1/4 w-96 h-96 bg-red-500/10 rounded-full blur-3xl"></div>
//       <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-red-600/10 rounded-full blur-3xl"></div>

//       <div className="container mx-auto px-6 relative z-10">
//         {/* Luxurious header */}
//         <div className="text-center mb-16">
//           <div className="inline-flex items-center gap-3 mb-6">
//             <div className="w-12 h-0.5 bg-gradient-to-r from-transparent to-red-500"></div>
//             <span className="text-red-500 font-medium text-sm tracking-widest uppercase">
//               Our Foundation
//             </span>
//             <div className="w-12 h-0.5 bg-gradient-to-l from-transparent to-red-500"></div>
//           </div>

//           <h2 className="text-5xl md:text-6xl font-bold font-serif text-white mb-6">
//             Core{" "}
//             <span className="bg-gradient-to-r from-red-500 to-red-600 bg-clip-text text-transparent">
//               Values
//             </span>
//           </h2>

//           <p className="text-gray-400 text-lg max-w-2xl mx-auto leading-relaxed">
//             The principles that drive our commitment to automotive excellence
//             and unparalleled customer experience
//           </p>
//         </div>

//         <div className="flex flex-col lg:flex-row items-center gap-16">
//           {/* Left Content - Premium brand story */}
//           <div className="w-full lg:w-1/2 space-y-8">
//             <div className="relative">
//               {/* Decorative elements */}
//               <div className="absolute -top-4 -left-4 w-20 h-20 bg-red-500/10 rounded-full blur-xl"></div>
//               <div className="absolute -bottom-4 -right-4 w-16 h-16 bg-red-600/10 rounded-full blur-lg"></div>

//               <div className="relative bg-gradient-to-br from-gray-900/80 to-black/80 backdrop-blur-sm border border-red-500/20 rounded-3xl p-8 shadow-2xl">
//                 <div className="flex items-center gap-4 mb-6">
//                   <div className="w-8 h-8 bg-gradient-to-br from-red-500 to-red-600 rounded-2xl flex items-center justify-center shadow-xl">
//                     <span className="text-white text-lg font-bold">E</span>
//                   </div>
//                   <div>
//                     <h3 className="text-xl font-bold text-white tracking-widest">
//                       ECRS
//                     </h3>
//                     <p className="text-red-400 text-sm font-medium">
//                       Economical | Efficient | Dependable
//                     </p>
//                   </div>
//                 </div>

//                 <p className="text-gray-300 leading-relaxed text-base mb-6">
//                   Where automotive passion meets uncompromising service
//                   excellence. Every vehicle in our curated fleet represents our
//                   dedication to providing extraordinary driving experiences.
//                 </p>

//                 <div className="grid grid-cols-2 gap-4 mb-6">
//                   <div className="text-center p-4 bg-red-500/10 rounded-xl border border-red-500/20">
//                     <div className="text-base font-semibold text-red-400">
//                       Accountability
//                     </div>
//                     <div className="text-xs text-gray-400 mt-1">
//                       We take responsibility for our actions and results
//                     </div>
//                   </div>
//                   <div className="text-center p-4 bg-red-500/10 rounded-xl border border-red-500/20">
//                     <div className="text-base font-semibold text-red-400">
//                       Excellence
//                     </div>
//                     <div className="text-xs text-gray-400 mt-1">
//                       We are dedicated to providing top-tier consultation
//                       services
//                     </div>
//                   </div>
//                   <div className="text-center p-4 bg-red-500/10 rounded-xl border border-red-500/20">
//                     <div className="text-base font-semibold text-red-400">
//                       Integrity
//                     </div>
//                     <div className="text-xs text-gray-400 mt-1">
//                       We maintain high ethical standards
//                     </div>
//                   </div>
//                   <div className="text-center p-4 bg-red-500/10 rounded-xl border border-red-500/20">
//                     <div className="text-base font-semibold text-red-400">
//                       24/7 Operational
//                     </div>
//                     <div className="text-xs text-gray-400 mt-1">
//                       Premium Support
//                     </div>
//                   </div>
//                 </div>

//                 <div className="flex items-center gap-3">
//                   <div className="flex -space-x-2">
//                     <div className="w-8 h-8 bg-gradient-to-r from-red-500 to-red-600 rounded-full border-2 border-black"></div>
//                     <div className="w-8 h-8 bg-gradient-to-r from-red-600 to-red-700 rounded-full border-2 border-black"></div>
//                     <div className="w-8 h-8 bg-gradient-to-r from-red-700 to-red-500 rounded-full border-2 border-black"></div>
//                   </div>
//                   <span className="text-gray-400 text-sm">
//                     Trusted by 500+ corporate clients across the India.
//                   </span>
//                 </div>
//               </div>
//             </div>
//           </div>

//           {/* Right Content - Enhanced infinite scroll */}
//           <div className="w-full lg:w-1/2">
//             <div className="relative">
//               {/* Decorative glow effects */}

//               <div className="relative " style={{ height: "450px" }}>
//                 <InfiniteScroll
//                   items={items}
//                   isTilted={true}
//                   tiltDirection="right"
//                   autoplay={true}
//                   autoplaySpeed={1}
//                   autoplayDirection="up"
//                   pauseOnHover={true}
//                   itemMinHeight={180}
//                   negativeMargin="-0.75em"
//                 />
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Bottom accent */}
//         <div className="mt-14 text-center">
//           <div className="inline-flex items-center gap-2 text-red-500">
//             <div className="w-2 h-2 bg-red-700 rounded-full"></div>
//             <span className="text-sm tracking-wide animate-pulse font-medium">
//               Driving Excellence Since 2009
//             </span>
//             <div className="w-2 h-2 bg-red-700 rounded-full"></div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default CoreValues;



"use client";

import React from "react";
import InfiniteScroll from "./ui/InfiniteScroll";

const CoreValues = () => {
  const items = [
    {
      content: (
        <div className="bg-gradient-to-br from-red-500 via-red-600 to-red-700 text-white p-6 rounded-2xl shadow-2xl border border-red-400/30 backdrop-blur-sm">
          <div className="text-2xl font-bold mb-2">Excellence</div>
          <p className="text-sm opacity-90">
            Delivering premium automotive experiences that exceed expectations
          </p>
        </div>
      ),
    },
    {
      content: (
        <div className="bg-gradient-to-br from-red-600 via-red-500 to-red-700 text-white p-6 rounded-2xl shadow-2xl border border-red-400/30 backdrop-blur-sm">
          <div className="text-2xl font-bold mb-2">Reliability</div>
          <p className="text-sm opacity-90">
            Meticulously maintained fleet ensuring seamless journeys
          </p>
        </div>
      ),
    },
    {
      content: (
        <div className="bg-gradient-to-br from-red-700 via-red-600 to-red-500 text-white p-6 rounded-2xl shadow-2xl border border-red-400/30 backdrop-blur-sm">
          <div className="text-2xl font-bold mb-2">Customer First</div>
          <p className="text-sm opacity-90">
            Your satisfaction drives every decision we make
          </p>
        </div>
      ),
    },
    {
      content: (
        <div className="bg-gradient-to-br from-red-500 via-red-700 to-red-600 text-white p-6 rounded-2xl shadow-2xl border border-red-400/30 backdrop-blur-sm">
          <div className="text-2xl font-bold mb-2">Innovation</div>
          <p className="text-sm opacity-90">
            Cutting-edge technology meets traditional automotive craftsmanship
          </p>
        </div>
      ),
    },
    {
      content: (
        <div className="bg-gradient-to-br from-red-600 via-red-700 to-red-500 text-white p-6 rounded-2xl shadow-2xl border border-red-400/30 backdrop-blur-sm">
          <div className="text-2xl font-bold mb-2"> Integrity</div>
          <p className="text-sm opacity-90">
            Transparent pricing, honest service, unwavering trust
          </p>
        </div>
      ),
    },
    {
      content: (
        <div className="bg-gradient-to-br from-red-700 via-red-500 to-red-600 text-white p-6 rounded-2xl shadow-2xl border border-red-400/30 backdrop-blur-sm">
          <div className="text-2xl font-bold mb-2">Luxury</div>
          <p className="text-sm opacity-90">
            Every vehicle curated for the discerning traveler
          </p>
        </div>
      ),
    },
    {
      content: (
        <div className="bg-gradient-to-br from-red-500 via-red-600 to-red-700 text-white p-6 rounded-2xl shadow-2xl border border-red-400/30 backdrop-blur-sm">
          <div className="text-2xl font-bold mb-2">Performance</div>
          <p className="text-sm opacity-90">
            High-performance vehicles for extraordinary experiences
          </p>
        </div>
      ),
    },
    {
      content: (
        <div className="bg-gradient-to-br from-red-600 via-red-500 to-red-700 text-white p-6 rounded-2xl shadow-2xl border border-red-400/30 backdrop-blur-sm">
          <div className="text-2xl font-bold mb-2">Safety</div>
          <p className="text-sm opacity-90">
            Rigorous safety standards protecting every journey
          </p>
        </div>
      ),
    },
    {
      content: (
        <div className="bg-gradient-to-br from-red-700 via-red-600 to-red-500 text-white p-6 rounded-2xl shadow-2xl border border-red-400/30 backdrop-blur-sm">
          <div className="text-2xl font-bold mb-2">Sustainability</div>
          <p className="text-sm opacity-90">
            Eco-conscious options for responsible luxury travel
          </p>
        </div>
      ),
    },
    {
      content: (
        <div className="bg-gradient-to-br from-red-500 via-red-700 to-red-600 text-white p-6 rounded-2xl shadow-2xl border border-red-400/30 backdrop-blur-sm">
          <div className="text-2xl font-bold mb-2">Support</div>
          <p className="text-sm opacity-90">
            24/7 premium support for uninterrupted service
          </p>
        </div>
      ),
    },
    {
      content: (
        <div className="bg-gradient-to-br from-red-600 via-red-700 to-red-500 text-white p-6 rounded-2xl shadow-2xl border border-red-400/30 backdrop-blur-sm">
          <div className="text-2xl font-bold mb-2">Precision</div>
          <p className="text-sm opacity-90">
            Attention to detail in every aspect of service delivery
          </p>
        </div>
      ),
    },
    {
      content: (
        <div className="bg-gradient-to-br from-red-700 via-red-500 to-red-600 text-white p-6 rounded-2xl shadow-2xl border border-red-400/30 backdrop-blur-sm">
          <div className="text-2xl font-bold mb-2">Evolution</div>
          <p className="text-sm opacity-90">
            Continuously evolving to set new industry standards
          </p>
        </div>
      ),
    },
  ];

  return (
    <section className="py-10 bg-gradient-to-b from-black via-gray-950 to-black relative overflow-hidden">
      {/* Premium background effects */}
      <div className="absolute inset-0 bg-gradient-to-r from-red-500/5 via-transparent to-red-500/5" />
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-red-500/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-red-600/10 rounded-full blur-3xl" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Luxurious header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-3 mb-6">
            <div className="w-12 h-0.5 bg-gradient-to-r from-transparent to-red-500" />
            <span className="text-red-500 font-medium text-sm tracking-widest uppercase">
              Our Foundation
            </span>
            <div className="w-12 h-0.5 bg-gradient-to-l from-transparent to-red-500" />
          </div>

          <h2 className="text-5xl md:text-6xl font-bold font-serif text-white mb-6">
            Core{" "}
            <span className="bg-gradient-to-r from-red-500 to-red-600 bg-clip-text text-transparent">
              Values
            </span>
          </h2>

          <p className="text-gray-400 text-lg max-w-2xl mx-auto leading-relaxed">
            The principles that drive our commitment to automotive excellence
            and unparalleled customer experience
          </p>
        </div>

        <div className="flex flex-col lg:flex-row items-center gap-16">
          {/* Left Content - Premium brand story */}
          <div className="w-full lg:w-1/2 space-y-8">
            <div className="relative">
              {/* Decorative elements */}
              <div className="absolute -top-4 -left-4 w-20 h-20 bg-red-500/10 rounded-full blur-xl" />
              <div className="absolute -bottom-4 -right-4 w-16 h-16 bg-red-600/10 rounded-full blur-lg" />

              <div className="relative bg-gradient-to-br from-gray-900/80 to-black/80 backdrop-blur-sm border border-red-500/20 rounded-3xl p-8 shadow-2xl">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-8 h-8 bg-gradient-to-br from-red-500 to-red-600 rounded-2xl flex items-center justify-center shadow-xl">
                    <span className="text-white text-lg font-bold">E</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white tracking-widest">
                      ECRS
                    </h3>
                    <p className="text-red-400 text-sm font-medium">
                      Driven by Values - Powered by Trust
                    </p>
                  </div>
                </div>

                <p className="text-gray-300 leading-relaxed text-sm mb-6">
                  At ECRS, our operations are built on a foundation of
                  Accountability, ensuring every commitment is met with
                  responsibility and transparency. We strive for Excellence in
                  every service we deliver, setting high standards in vehicle
                  quality, punctuality, and client satisfaction. Our unwavering
                  Integrity drives us to maintain honest relationships with
                  clients and partners alike. Backed by a 24/7 operational
                  framework, we ensure round-the-clock support and seamless
                  coordination for all your corporate mobility needs.
                </p>

                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="text-center p-4 bg-red-500/10 rounded-xl border border-red-500/20">
                    <div className="text-base font-semibold text-red-400">
                      Accountability
                    </div>
                    <div className="text-xs text-gray-400 mt-1">
                      We take responsibility for our actions and results
                    </div>
                  </div>
                  <div className="text-center p-4 bg-red-500/10 rounded-xl border border-red-500/20">
                    <div className="text-base font-semibold text-red-400">
                      Excellence
                    </div>
                    <div className="text-xs text-gray-400 mt-1">
                      We are dedicated to providing top-tier consultation
                      services
                    </div>
                  </div>
                  <div className="text-center p-4 bg-red-500/10 rounded-xl border border-red-500/20">
                    <div className="text-base font-semibold text-red-400">
                      Integrity
                    </div>
                    <div className="text-xs text-gray-400 mt-1">
                      We maintain high ethical standards
                    </div>
                  </div>
                  <div className="text-center p-4 bg-red-500/10 rounded-xl border border-red-500/20">
                    <div className="text-base font-semibold text-red-400">
                      24/7 Operational
                    </div>
                    <div className="text-xs text-gray-400 mt-1">
                      Premium Support
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="flex -space-x-2">
                    <div className="w-8 h-8 bg-gradient-to-r from-red-500 to-red-600 rounded-full border-2 border-black" />
                    <div className="w-8 h-8 bg-gradient-to-r from-red-600 to-red-700 rounded-full border-2 border-black" />
                    <div className="w-8 h-8 bg-gradient-to-r from-red-700 to-red-500 rounded-full border-2 border-black" />
                  </div>
                  <span className="text-gray-400 text-sm">
                    Trusted by 200+ corporate clients across the India.
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Content - Enhanced infinite scroll */}
          <div className="w-full lg:w-1/2">
            <div className="relative">
              {/* Decorative glow effects */}

              <div className="relative " style={{ height: "450px" }}>
                <InfiniteScroll
                  items={items}
                  isTilted={true}
                  tiltDirection="right"
                  autoplay={true}
                  autoplaySpeed={1}
                  autoplayDirection="up"
                  pauseOnHover={true}
                  itemMinHeight={180}
                  negativeMargin="-0.75em"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Bottom accent */}
        <div className="mt-14 text-center">
          <div className="inline-flex items-center gap-2 text-red-500">
            <div className="w-2 h-2 bg-red-700 rounded-full" />
            <span className="text-sm tracking-wide animate-pulse font-medium">
              Driving Excellence Since 2010
            </span>
            <div className="w-2 h-2 bg-red-700 rounded-full" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default CoreValues;