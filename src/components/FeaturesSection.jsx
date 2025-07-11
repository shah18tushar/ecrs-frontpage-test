"use client";

import React, { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { Star, Shield, Clock, MapPin, Brain, Crown } from "lucide-react";
import MagnifierCursor from "./MagnifierCursor";


const FeaturesComponent = () => {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, threshold: 0.1 });
  const [activeFeature, setActiveFeature] = useState(0);

  const text = "Premium Features Of ECRS";

  const features = [
    {
      icon: Star,
      title: "First Class Services",
      description:
        "Discover luxury with top-quality car rentals. Premium vehicles and exceptional service standards.",
      gradient: "from-red-500 to-red-600",
      position: "top-left",
    },
    {
      icon: Shield,
      title: "Quality at Minimum Expense",
      description:
        "Affordable luxury rentals without compromising on quality. Great cars at competitive prices.",
      gradient: "from-red-500 to-red-600",
      position: "top-right",
    },
    {
      icon: MapPin,
      title: "Pick-Up & Drop-Off",
      description:
        "Convenient location services. Get your rental where you need it, return it hassle-free.",
      gradient: "from-red-500 to-red-600",
      position: "middle-left",
    },
    {
      icon: Clock,
      title: "24/7 Support",
      description:
        "Round-the-clock assistance for all your rental needs. Emergency support always available.",
      gradient: "from-red-500 to-red-600",
      position: "middle-right",
    },
    {
      icon: Brain,
      title: "Smart Technology",
      description:
        "AI-powered systems with voice control and seamless smartphone connectivity.",
      gradient: "from-red-500 to-red-600",
      position: "bottom-left",
    },
    {
      icon: Crown,
      title: "Premium Comfort",
      description:
        "Luxury interiors with heated seats, climate control, and noise-canceling technology.",
      gradient: "from-red-500 to-red-600",
      position: "bottom-right",
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveFeature((prev) => (prev + 1) % features.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const getPositionClasses = (position) => {
    switch (position) {
      case "top-left":
        return "lg:col-start-1 lg:col-end-3 lg:row-start-1";
      case "top-right":
        return "lg:col-start-5 lg:col-end-7 lg:row-start-1";
      case "middle-left":
        return "lg:col-start-1 lg:col-end-3 lg:row-start-2";
      case "middle-right":
        return "lg:col-start-5 lg:col-end-7 lg:row-start-2";
      case "bottom-left":
        return "lg:col-start-1 lg:col-end-3 lg:row-start-3";
      case "bottom-right":
        return "lg:col-start-5 lg:col-end-7 lg:row-start-3";
      default:
        return "";
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 40, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 12,
      },
    },
  };

  const centralVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 120,
        damping: 15,
        delay: 0.5,
      },
    },
  };

  return (
    <div ref={containerRef} className="relative py-2 overflow-hidden">
      {/* Fixed container with proper padding */}
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-center mt-16 mb-6"
        >
          <div className="inline-flex items-center font-serif justify-center px-10 py-3 bg-gradient-to-r from-red-500/10 to-red-600/10 text-red-600 font-medium rounded-full border border-red-200 text-xl tracking-wider">
            <Crown className="w-5 h-5 mr-2" />
            <MagnifierCursor text={text} cursorSize={45} />
          </div>
          <h1 className="max-w-md mx-auto mt-4 text-xs tracking-wide font-semibold text-gray-600">
            Our Special Offerings: Here's What We Have! Check out the cool
            things we offer for your rental experience.
          </h1>
        </motion.div>

        {/* Central Layout Grid */}
        <div className="relative">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="grid grid-cols-1 lg:grid-cols-6 gap-6 lg:gap-8 items-center"
          >
            {/* Feature Items */}
            {features.map((feature, index) => {
              const Icon = feature.icon;
              const isActive = index === activeFeature;

              return (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className={`group cursor-pointer ${getPositionClasses(
                    feature.position
                  )}`}
                  onMouseEnter={() => setActiveFeature(index)}
                >
                  <div
                    className={`relative p-4 rounded-xl transition-all duration-1000 hover:scale-95 ${
                      isActive ? "bg-white " : "bg-white/80 hover:bg-white"
                    }`}
                  >
                    {/* Active Glow Effect */}
                    {isActive && (
                      <div className="absolute inset-0 bg-gradient-to-r from-red-500/5 to-red-600/5 rounded-xl"></div>
                    )}

                    <div className="relative text-center">
                      <div
                        className={`inline-flex items-center justify-center w-10 h-10 rounded-lg mb-1 transition-all duration-500 ${
                          isActive
                            ? `bg-gradient-to-r ${feature.gradient} shadow-lg`
                            : " "
                        }`}
                      >
                        <Icon
                          className={`w-5 h-5 transition-all duration-500 ${
                            isActive ? "text-white" : "text-red-500"
                          }`}
                        />
                      </div>

                      <h3
                        className={`text-sm font-semibold mb-2 transition-all duration-500 ${
                          isActive ? "text-red-600" : "text-gray-900"
                        }`}
                      >
                        {feature.title}
                      </h3>

                      <p className="text-xs text-gray-600 leading-relaxed">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              );
            })}

            {/* Central CTA - Adjusted to match feature card proportions */}
            <motion.div
              variants={centralVariants}
              className="lg:col-start-3 lg:col-end-5 lg:row-start-1 lg:row-end-4 flex items-center justify-center"
            >
              <div className="relative w-full">
                {/* Background Glow */}
                <div className="absolute inset-0 blur-md bg-gradient-to-r from-red-400 to-red-500 rounded-2xl opacity-20 scale-105"></div>

                {/* Main CTA Container - Adjusted padding and sizing */}
                <div className="relative bg-white/90 rounded-2xl p-6 shadow-2xl border border-red-100">
                  <div className="text-center">
                    {/* Active Feature Icon - Smaller to match proportions */}
                    <motion.div
                      key={activeFeature}
                      initial={{ scale: 0.8, opacity: 0, rotateY: 180 }}
                      animate={{ scale: 1, opacity: 1, rotateY: 0 }}
                      transition={{ duration: 0.6, ease: "easeOut" }}
                      className="mb-0"
                    >
                      <div
                        className={`inline-flex items-center justify-center w-10 h-10 rounded-lg mb-4 shadow-xl bg-gradient-to-r ${features[activeFeature].gradient}`}
                      >
                        {React.createElement(features[activeFeature].icon, {
                          className: "w-5 h-5 text-white",
                        })}
                      </div>
                    </motion.div>

                    <motion.div
                      key={`content-${activeFeature}`}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.2 }}
                    >
                      <h3 className="text-sm font-bold text-gray-900 mb-4">
                        {features[activeFeature].title}
                      </h3>
                      <p className="text-xs font-semibold text-gray-600 mb-6 leading-relaxed">
                        {features[activeFeature].description}
                      </p>
                    </motion.div>

                    {/* CTA Button - Adjusted size */}
                    <motion.button className="inline-flex items-center justify-center px-12 py-2 bg-gradient-to-r from-red-500 to-red-600 text-white font-semibold rounded-xl text-xs mb-4">
                      <Crown className="w-3 h-3 mr-2" />
                      <span className="mr-2 tracking-wider">ECRS</span>
                      <Crown className="w-3 h-3" />
                    </motion.button>

                    {/* Progress Dots */}
                    <div className="flex justify-center space-x-2">
                      {features.map((_, index) => (
                        <button
                          key={index}
                          onClick={() => setActiveFeature(index)}
                          className={`w-1.5 h-1.5 rounded-full transition-all duration-300 ${
                            index === activeFeature
                              ? "bg-red-500 scale-125"
                              : "bg-gray-300 hover:bg-gray-400"
                          }`}
                        />
                      ))}
                    </div>
                  </div>
                </div>

                {/* Floating Elements - Adjusted size */}
                <div className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full opacity-60 animate-pulse"></div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default FeaturesComponent;

// import React from 'react';
// import DotGrid from '@/components/ui/DotGrid';
// import SplitText from '@/components/ui/SplitText';

// export const features = [
//   {
//     id: 1,
//     title: 'Advanced Safety',
//     description: 'State-of-the-art safety features including collision detection, lane assist, and emergency braking systems.',
//     image: '/carpic1.jpg',
//   },
//   {
//     id: 2,
//     title: 'Smart Technology',
//     description: 'Integrated AI-powered infotainment system with voice control and seamless smartphone connectivity.',
//     image: '/carpic2.jpg',
//   },
//   {
//     id: 3,
//     title: 'Eco-Friendly',
//     description: 'Zero-emission electric powertrain with industry-leading battery efficiency and fast charging capabilities.',
//     image: '/carpic3.jpg',
//   },
//   {
//     id: 4,
//     title: 'Premium Comfort',
//     description: 'Luxury interior with heated seats, climate control, and noise-canceling technology.',
//     image: '/carpic4.jpg',
//   },
// ];

// const FeaturesSection = () => {
//   return (
//    <>
//   {/* Heading outside the dot background */}
//   <div className="mb-10 text-center">
//     <SplitText
//       text="Our Features"
//       className="text-3xl md:text-5xl font-bold"
//       delay={100}
//       duration={0.6}
//       ease="power3.out"
//       splitType="chars"
//       from={{ opacity: 0, y: 40 }}
//       to={{ opacity: 1, y: 0 }}
//       threshold={0.1}
//       rootMargin="-100px"
//     />
//   </div>

//   {/* Section with DotGrid and Cards */}
//   <section className="w-full relative py-16 px-4">
//     {/* DotGrid only behind this section */}
//     <div className="w-full h-full absolute top-0 left-0 z-10">
//       <DotGrid
//         dotSize={8}
//         gap={16}
//         baseColor="#FF0000"
//         activeColor="#000"
//         proximity={120}
//         shockRadius={200}
//         shockStrength={5}
//         resistance={700}
//         returnDuration={1.5}
//       />
//     </div>

//     {/* Cards Container */}
//     <div className="relative z-20 max-w-6xl mx-auto">
//       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
//         {features.map((feature) => (
//           <div
//             key={feature.id}
//             className="bg-white/10 backdrop-blur-sm rounded-xl border border-white/20 p-6 flex flex-col items-center text-center transition-all duration-300 hover:-translate-y-1 cursor-pointer h-[320px]"
//           >
//             <div className="w-16 h-16 rounded-full overflow-hidden mb-4 border border-white/30">
//               <img
//                 src={feature.image}
//                 alt={feature.title}
//                 className="w-full h-full object-cover"
//               />
//             </div>
//             <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
//             <p className="text-sm opacity-90 leading-relaxed">{feature.description}</p>
//           </div>
//         ))}
//       </div>
//     </div>
//   </section>
// </>

//   );
// };

// export default FeaturesSection;
