// "use client";

// import React, { useEffect, useRef, useState } from "react";
// import {
//   ChevronRight,
//   ChevronDown,
//   Car,
//   Sparkles,
// } from "lucide-react"

// const Hero = () => {
//   const [currentSlide, setCurrentSlide] = useState(0);
//   const [isVisible, setIsVisible] = useState(false);
//   const [selectedVehicle, setSelectedVehicle] = useState("");
//   const [isDropdownOpen, setIsDropdownOpen] = useState(false);
//   const heroRef = useRef(null);
//   const dropdownRef = useRef(null);

//   const heroSlides = [
//     {
//       image: "./hero.jpg",

//       // title: "Luxury Redefined",
//       title: "Corporate Car Rental Services -   Reliable Travel Partner",
//       subtitle: "Executive Car Rental Services",
//       description: "Experience Premium Car Rentals",
//     },
//     // {
//     //   image:
//     //     "https://images.unsplash.com/photo-1464851707681-f9d5fdaccea8?q=80&w=1233&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",

//     //   subtitle: "Executive Car Rental Services",
//     //   title: "A Reliable Travel Partner",
//     //   // title: "Sustainable Luxury",
//     //   description: "Experience Premium Car Rentals",
//     // },
//     // {
//     //   image:
//     //     "https://plus.unsplash.com/premium_photo-1683140916567-6d3cea90caf6?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//     //   title: "Discover the World on Wheels",
//     //   // title: "Widely Endorsed",
//     //   subtitle: "Executive Car Rental Services",
//     //   description: "Experience Premium Car Rentals",
//     // },
//   ];

//   const vehicleOptions = [
//     { value: "sedan", label: "Sedan", icon: <Car className="w-4 h-4" /> },
//     { value: "xuv", label: "XUV", icon: <Car className="w-4 h-4" /> },
//     {
//       value: "premium",
//       label: "Premium",
//       icon: <Sparkles className="w-4 h-4" />,
//     },
//     { value: "bus", label: "Bus", icon: <Car className="w-4 h-4" /> },
//   ];

//   useEffect(() => {
//     setIsVisible(true);
//     const timer = setInterval(() => {
//       setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
//     }, 5000);
//     return () => clearInterval(timer);
//   }, []);

//   useEffect(() => {
//     if (!isDropdownOpen) return;
//     function handleClickOutside(event) {
//       if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
//         setIsDropdownOpen(false);
//       }
//     }
//     document.addEventListener("mousedown", handleClickOutside);
//     return () => document.removeEventListener("mousedown", handleClickOutside);
//   }, [isDropdownOpen]);

//   return (
//     <div id="bookNow" className="relative lg:h-[100vh] overflow-hidden bg-gradient-to-br from-gray-900 via-black to-gray-900">
//       {/* Background Images with Parallax Effect */}
//       <div className="absolute inset-0">
//         {heroSlides.map((slide, index) => (
//           <div
//             key={index}
//             className={`absolute inset-0 transition-opacity duration-1000 ${
//               index === currentSlide ? "opacity-100" : "opacity-0"
//             }`}
//           >
//             {/* <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-black/30 to-transparent z-10" /> */}
//             <div className="absolute inset-0 z-20" />
//             <img
//               src={slide.image}
//               alt={slide.title}
//               className="w-full h-full object-cover scale-105 hover:scale-110 transition-transform duration-[3000ms] brightness-[0.9]"
//             />
//           </div>
//         ))}
//       </div>
//       {/* Main Content */}
//       <div className="relative z-40 min-h-screen flex items-center pt-20">
//         <div className="container mx-auto px-6 lg:px-8">
//           <div className="grid lg:grid-cols-2 gap-8 items-center">
//             {/* Left Content - Enhanced Luxury Text Section */}
//             <div className="space-y-8 relative">
//               {/* Floating Luxury Elements */}
//               <div className="absolute -top-10 -left-10 w-24 h-24 bg-red-500/10 rounded-full blur-xl animate-pulse" />
//               <div className="absolute bottom-0 -right-10 w-20 h-20 bg-red-500/5 rounded-full blur-lg animate-pulse delay-1000" />

//               {/* Badge */}

//               <div
//                 className={`inline-flex items-center gap-2 px-4 py-2 rounded-full bg-red-500/70 hover:bg-red-500/40 border border-red-500/30 backdrop-blur-sm text-white/70 text-base font-medium transform transition-all duration-700 ${
//                   isVisible
//                     ? "translate-y-0 opacity-100"
//                     : "translate-y-8 opacity-0"
//                 }`}
//               >
//                 <div className="w-2 h-2 bg-white/70 rounded-full animate-caret-blink mt-0.5" />
//                 {heroSlides[currentSlide].subtitle}
//               </div>

//               {/* Main Heading */}
//               <div className="space-y-6 relative z-10">
//                 <h1
//                   className={`text-5xl md:text-3xl font-bold text-white leading-tight transform transition-all duration-1000 delay-200 ${
//                     isVisible
//                       ? "translate-y-0 opacity-100"
//                       : "translate-y-12 opacity-0"
//                   }`}
//                 >
//                   <span className="inline-block">
//                     {heroSlides[currentSlide].title
//                       .split("   ")
//                       .map((word, index) => (
//                         <span
//                           key={index}
//                           className={`relative inline-block ${
//                             index === 1 ? "text-red-400" : ""
//                           }`}
//                         >
//                           {word}{" "}
//                           {index === 1 && (
//                             <span className="absolute -bottom-2 left-0 w-full h-0.5 bg-gradient-to-r from-red-500 to-transparent"></span>
//                           )}
//                         </span>
//                       ))}
//                   </span>
//                 </h1>

//                 {/* <p
//                   className={`text-xl font-semibold text-white leading-relaxed max-w-2xl transform transition-all duration-1000 delay-300 relative ${
//                     isVisible
//                       ? "translate-y-0 opacity-100"
//                       : "translate-y-8 opacity-0"
//                   }`}
//                 >
//                   <span className="absolute -left-6 top-0 h-full w-0.5 bg-gradient-to-b from-red-500/50 via-red-500/50  to-transparent"></span>
//                   {heroSlides[currentSlide].description}
//                 </p> */}
//               </div>

//               {/* CTA Buttons */}
//               <div
//                 className={`mt-8 flex gap-4 transform transition-all duration-1000 delay-400 ${
//                   isVisible
//                     ? "translate-y-0 opacity-100"
//                     : "translate-y-8 opacity-0"
//                 }`}
//               >
//                 <button className="relative px-8 py-3 rounded-lg font-semibold bg-transparent border border-white/40 text-white hover:bg-white/10 cursor-pointer hover:shadow-white/20 hover:shadow-lg transition-all duration-300 hover:scale-[1.02] group overflow-hidden">
//                   <span className="relative z-10 flex items-center gap-2">
//                     Contact Us
//                     <span className="group-hover:translate-x-1 transition-transform duration-300">
//                       <ChevronRight className="w-5 h-5" />
//                     </span>
//                   </span>
//                   <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 -translate-x-full group-hover:translate-x-full"></span>
//                 </button>
//               </div>
//             </div>

//             {/* Right Content - Booking Form (Kept as original) */}
//             <div
//               className={`lg:ml-8 mt-1 transform transition-all duration-1000 delay-1000 ${
//                 isVisible
//                   ? "translate-x-0 opacity-100"
//                   : "translate-x-12 opacity-0"
//               }`}
//             >
//               <div className="relative">
//                 {/* Floating Card */}
//                 <div className="bg-white/10 backdrop-blur-2xl rounded-2xl p-4 border border-white/40 shadow-2xl hover:shadow-red-500/20 max-w-md mx-auto">
//                   <div className="space-y-4">
//                     <div className="flex items-center gap-3">
//                       <div className="bg-red-600 p-2 rounded-full">
//                         <Car className="w-7 h-7 text-white" />
//                       </div>
//                       <div>
//                         <h3 className="text-sm font-semibold tracking-wide text-white">
//                           Book a Ride
//                         </h3>
//                         <p className="text-white/70 text-xs font-medium">
//                           Economical | Efficient | Dependable
//                         </p>
//                       </div>
//                     </div>

//                     <div className="space-y-3">
//                       <div className="grid grid-cols-2 gap-2">
//                         <div>
//                           <label className="block text-xs font-semibold text-white mb-1">
//                             Guest Name
//                           </label>
//                           <input
//                             type="text"
//                             className="w-full px-3 py-2 bg-white/5 border border-white/20 rounded-lg text-white text-xs focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
//                           />
//                         </div>
//                         <div>
//                           <label className="block text-xs font-semibold text-white mb-1">
//                             Surname
//                           </label>
//                           <input
//                             type="text"
//                             className="w-full px-3 py-2 bg-white/5 border border-white/20 rounded-lg text-white text-xs focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
//                           />
//                         </div>
//                       </div>

//                       <div className="grid grid-cols-2 gap-2">
//                         <div>
//                           <label className="block text-xs font-semibold text-white mb-1">
//                             Mobile Number
//                           </label>
//                           <input
//                             type="text"
//                             className="w-full px-3 py-2 bg-white/5 border border-white/20 rounded-lg text-white text-xs focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
//                           />
//                         </div>
//                         <div>
//                           <label className="block text-xs font-semibold text-white mb-1">
//                             Email ID
//                           </label>
//                           <input
//                             type="text"
//                             className="w-full px-3 py-2 bg-white/5 border border-white/20 rounded-lg text-white text-xs focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
//                           />
//                         </div>
//                       </div>

//                       <div className="grid grid-cols-2 gap-2">
//                         <div>
//                           <label className="block text-xs font-semibold text-white mb-1">
//                             From City
//                           </label>
//                           <input
//                             type="text"
//                             className="w-full px-3 py-2 bg-white/5 border border-white/20 rounded-lg text-white text-xs focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
//                           />
//                         </div>
//                         <div>
//                           <label className="block text-xs font-semibold text-white mb-1">
//                             To City
//                           </label>
//                           <input
//                             type="text"
//                             className="w-full px-3 py-2 bg-white/5 border border-white/20 rounded-lg text-white text-xs focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
//                           />
//                         </div>
//                       </div>

//                       <div className="grid grid-cols-2 gap-2">
//                         <div>
//                           <label className="block text-xs font-semibold text-white mb-1">
//                             Pickup Location
//                           </label>
//                           <input
//                             type="text"
//                             className="w-full px-3 py-2 bg-white/5 border border-white/20 rounded-lg text-white text-xs focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
//                           />
//                         </div>
//                         <div className="relative" ref={dropdownRef}>
//                           <label className="block text-xs font-semibold text-white mb-1">
//                             Vehicle Type
//                           </label>
//                           <div className="relative">
//                             <button
//                               type="button"
//                               onClick={() => setIsDropdownOpen(!isDropdownOpen)}
//                               className="w-full px-3 py-2 bg-white/5 border border-white/20 rounded-lg text-white text-xs focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent flex items-center justify-between"
//                             >
//                               <span
//                                 className={
//                                   selectedVehicle
//                                     ? "text-white"
//                                     : "text-gray-400"
//                                 }
//                               >
//                                 {selectedVehicle || "Select Vehicle"}
//                               </span>
//                               <ChevronDown
//                                 className={`w-3 h-3 transition-transform duration-200 ${
//                                   isDropdownOpen ? "rotate-180" : ""
//                                 }`}
//                               />
//                             </button>
//                             {isDropdownOpen && (
//                               <div className="absolute top-full left-0 right-0 mt-1 bg-red-600 border border-white/20 rounded-lg shadow-lg z-50">
//                                 {vehicleOptions.map((option) => (
//                                   <button
//                                     key={option.value}
//                                     type="button"
//                                     onClick={() => {
//                                       setSelectedVehicle(option.label);
//                                       setIsDropdownOpen(false);
//                                     }}
//                                     className="w-full px-3 py-2 text-xs text-left text-white font-medium    hover:bg-white hover:text-red-500 first:rounded-t-lg last:rounded-b-lg transition-colors duration-200"
//                                   >
//                                     {option.label}
//                                   </button>
//                                 ))}
//                               </div>
//                             )}
//                           </div>
//                         </div>
//                       </div>

//                       <div className="grid grid-cols-3 gap-2">
//                         <div>
//                           <label className="block text-xs font-semibold text-white mb-1">
//                             Pickup Time
//                           </label>
//                           <input
//                             type="time"
//                             className="w-full px-3 py-2 bg-white/5 border border-white/20 rounded-lg text-white text-xs focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
//                           />
//                         </div>
//                         <div>
//                           <label className="block text-xs font-semibold text-white mb-1">
//                             Journey Start Date
//                           </label>
//                           <input
//                             type="date"
//                             className="w-full px-3 py-2 bg-white/5 border border-white/20 rounded-lg text-white text-xs focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
//                           />
//                         </div>
//                         <div>
//                           <label className="block text-xs font-semibold text-white mb-1">
//                             Journey End Date
//                           </label>
//                           <input
//                             type="date"
//                             className="w-full px-3 py-2 bg-white/5 border border-white/20 rounded-lg text-white text-xs focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
//                           />
//                         </div>
//                       </div>

//                       {/* <div className="grid grid-cols-1">
//                         <div>
//                           <label className="block text-xs font-medium text-white mb-1">
//                             Time
//                           </label>
//                           <input
//                             type="time"
//                             className="w-full px-3 py-2 bg-white/5 border border-white/20 rounded-lg text-white text-xs focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
//                           />
//                         </div>
//                       </div> */}

//                       <div className="flex justify-center">
//                         <button className="btn-shadow-red text-xs font-semibold cursor-pointer">
//                           Submit Enquiry
//                         </button>
//                       </div>
//                     </div>
//                   </div>
//                 </div>

//                 {/* Floating Elements */}
//                 <div className="absolute -top-4 -right-4 w-16 h-16 bg-red-500/30 rounded-full blur-xl animate-pulse" />
//                 <div className="absolute -bottom-4 -left-4 w-12 h-12 bg-red-500/20 rounded-full blur-lg animate-pulse delay-1000" />
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Slide Indicators */}
//       <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-40">
//         <div className="flex gap-3">
//           {heroSlides.map((_, index) => (
//             <button
//               key={index}
//               onClick={() => setCurrentSlide(index)}
//               className={`w-3 h-3 rounded-full transition-all duration-300 ${
//                 index === currentSlide
//                   ? "bg-red-500 w-8"
//                   : "bg-white/30 hover:bg-white/50"
//               }`}
//             />
//           ))}
//         </div>
//       </div>

//       {/* Scroll Indicator */}
//       <div className="absolute bottom-8 right-8 z-50">
//         <div className="flex flex-col items-center gap-2 text-white/60">
//           <span className="text-sm font-medium rotate-90 origin-center">
//             Scroll
//           </span>
//           <div className="w-px h-12 bg-gradient-to-b from-white/60 to-transparent" />
//           <ChevronRight className="w-4 h-4 rotate-90" />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Hero;






"use client";

import React, { useEffect, useRef, useState } from "react";
import { ChevronRight, ChevronDown, Car, Sparkles } from "lucide-react";

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [selectedVehicle, setSelectedVehicle] = useState("");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const heroRef = useRef(null);
  const dropdownRef = useRef(null);
  const videoRef = useRef(null);

  const heroSlides = [
    {
      video: "./hero_video.mp4", // Update this with your video path
      title: "Corporate Car Rental Services -   Reliable Travel Partner",
      subtitle: "Executive Car Rental Services",
      description: "Experience Premium Car Rentals",
    },
  ];

  const vehicleOptions = [
    { value: "sedan", label: "Sedan", icon: <Car className="w-4 h-4" /> },
    { value: "xuv", label: "XUV", icon: <Car className="w-4 h-4" /> },
    {
      value: "premium",
      label: "Premium",
      icon: <Sparkles className="w-4 h-4" />,
    },
    { value: "bus", label: "Bus", icon: <Car className="w-4 h-4" /> },
  ];

  useEffect(() => {
    setIsVisible(true);
    // Since we only have one video, we don't need the slideshow timer
    // But keeping it in case you want to add more videos later
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    // Try to autoplay the video
    if (videoRef.current) {
      videoRef.current.play().catch((error) => {
        console.log("Autoplay prevented:", error);
        // You might want to add a play button overlay here
      });
    }
  }, []);

  useEffect(() => {
    if (!isDropdownOpen) return;
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isDropdownOpen]);

  return (
    <div
      id="bookNow"
      className="relative lg:h-[100vh] overflow-hidden bg-gradient-to-br from-gray-900 via-black to-gray-900"
    >
      {/* Video Background */}
      <div className="absolute inset-0">
        {heroSlides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentSlide ? "opacity-100" : "opacity-0"
            }`}
          >
            <div className="absolute inset-0 z-20" />
            <video
              ref={videoRef}
              src={slide.video}
              className="w-full h-full object-cover brightness-[0.9]"
              muted
              loop
              playsInline
            />
          </div>
        ))}
      </div>
      {/* Main Content */}
      <div className="relative z-40 min-h-screen flex items-center pt-20">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="flex items-center justify-end">
            

            {/* Right Content - Booking Form (Kept exactly as original) */}
            <div
              className={`lg:ml-8 mt-1 transform transition-all duration-1000 delay-1000 ${
                isVisible
                  ? "translate-x-0 opacity-100"
                  : "translate-x-12 opacity-0"
              }`}
            >
              <div className="relative">
                {/* Floating Card */}
                <div className="bg-white/10 backdrop-blur-2xl rounded-2xl p-4 border border-white/40 shadow-2xl hover:shadow-red-500/20 max-w-md mx-auto">
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <div className="bg-red-600 p-2 rounded-full">
                        <Car className="w-7 h-7 text-white" />
                      </div>
                      <div>
                        <h3 className="text-sm font-semibold tracking-wide text-white">
                          Book a Ride
                        </h3>
                        <p className="text-white/70 text-xs font-medium">
                          Economical | Efficient | Dependable
                        </p>
                      </div>
                    </div>

                    <div className="space-y-3">
                      <div className="grid grid-cols-2 gap-2">
                        <div>
                          <label className="block text-xs font-semibold text-white mb-1">
                            Guest Name
                          </label>
                          <input
                            type="text"
                            className="w-full px-3 py-2 bg-white/5 border border-white/20 rounded-lg text-white text-xs focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
                          />
                        </div>
                        <div>
                          <label className="block text-xs font-semibold text-white mb-1">
                            Surname
                          </label>
                          <input
                            type="text"
                            className="w-full px-3 py-2 bg-white/5 border border-white/20 rounded-lg text-white text-xs focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
                          />
                        </div>
                      </div>

                      <div className="grid grid-cols-2 gap-2">
                        <div>
                          <label className="block text-xs font-semibold text-white mb-1">
                            Mobile Number
                          </label>
                          <input
                            type="text"
                            className="w-full px-3 py-2 bg-white/5 border border-white/20 rounded-lg text-white text-xs focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
                          />
                        </div>
                        <div>
                          <label className="block text-xs font-semibold text-white mb-1">
                            Email ID
                          </label>
                          <input
                            type="text"
                            className="w-full px-3 py-2 bg-white/5 border border-white/20 rounded-lg text-white text-xs focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
                          />
                        </div>
                      </div>

                      <div className="grid grid-cols-2 gap-2">
                        <div>
                          <label className="block text-xs font-semibold text-white mb-1">
                            From City
                          </label>
                          <input
                            type="text"
                            className="w-full px-3 py-2 bg-white/5 border border-white/20 rounded-lg text-white text-xs focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
                          />
                        </div>
                        <div>
                          <label className="block text-xs font-semibold text-white mb-1">
                            To City
                          </label>
                          <input
                            type="text"
                            className="w-full px-3 py-2 bg-white/5 border border-white/20 rounded-lg text-white text-xs focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
                          />
                        </div>
                      </div>

                      <div className="grid grid-cols-2 gap-2">
                        <div>
                          <label className="block text-xs font-semibold text-white mb-1">
                            Pickup Location
                          </label>
                          <input
                            type="text"
                            className="w-full px-3 py-2 bg-white/5 border border-white/20 rounded-lg text-white text-xs focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
                          />
                        </div>
                        <div className="relative" ref={dropdownRef}>
                          <label className="block text-xs font-semibold text-white mb-1">
                            Vehicle Type
                          </label>
                          <div className="relative">
                            <button
                              type="button"
                              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                              className="w-full px-3 py-2 bg-white/5 border border-white/20 rounded-lg text-white text-xs focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent flex items-center justify-between"
                            >
                              <span
                                className={
                                  selectedVehicle
                                    ? "text-white"
                                    : "text-gray-400"
                                }
                              >
                                {selectedVehicle || "Select Vehicle"}
                              </span>
                              <ChevronDown
                                className={`w-3 h-3 transition-transform duration-200 ${
                                  isDropdownOpen ? "rotate-180" : ""
                                }`}
                              />
                            </button>
                            {isDropdownOpen && (
                              <div className="absolute top-full left-0 right-0 mt-1 bg-red-600 border border-white/20 rounded-lg shadow-lg z-50">
                                {vehicleOptions.map((option) => (
                                  <button
                                    key={option.value}
                                    type="button"
                                    onClick={() => {
                                      setSelectedVehicle(option.label);
                                      setIsDropdownOpen(false);
                                    }}
                                    className="w-full px-3 py-2 text-xs text-left text-white font-medium    hover:bg-white hover:text-red-500 first:rounded-t-lg last:rounded-b-lg transition-colors duration-200"
                                  >
                                    {option.label}
                                  </button>
                                ))}
                              </div>
                            )}
                          </div>
                        </div>
                      </div>

                      <div className="grid grid-cols-3 gap-2">
                        <div>
                          <label className="block text-xs font-semibold text-white mb-1">
                            Pickup Time
                          </label>
                          <input
                            type="time"
                            className="w-full px-3 py-2 bg-white/5 border border-white/20 rounded-lg text-white text-xs focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
                          />
                        </div>
                        <div>
                          <label className="block text-xs font-semibold text-white mb-1">
                            Journey Start Date
                          </label>
                          <input
                            type="date"
                            className="w-full px-3 py-2 bg-white/5 border border-white/20 rounded-lg text-white text-xs focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
                          />
                        </div>
                        <div>
                          <label className="block text-xs font-semibold text-white mb-1">
                            Journey End Date
                          </label>
                          <input
                            type="date"
                            className="w-full px-3 py-2 bg-white/5 border border-white/20 rounded-lg text-white text-xs focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
                          />
                        </div>
                      </div>

                      <div className="flex justify-center">
                        <button className="btn-shadow-red text-xs font-semibold cursor-pointer">
                          Submit Enquiry
                        </button>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Floating Elements */}
                <div className="absolute -top-4 -right-4 w-16 h-16 bg-red-500/30 rounded-full blur-xl animate-pulse" />
                <div className="absolute -bottom-4 -left-4 w-12 h-12 bg-red-500/20 rounded-full blur-lg animate-pulse delay-1000" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Slide Indicators - Removed since we only have one video */}
      {/* <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-40">
        <div className="flex gap-3">
          {heroSlides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentSlide
                  ? "bg-red-500 w-8"
                  : "bg-white/30 hover:bg-white/50"
              }`}
            />
          ))}
        </div>
      </div> */}

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-8 z-50">
        <div className="flex flex-col items-center gap-2 text-white/60">
          <span className="text-sm font-medium rotate-90 origin-center">
            Scroll
          </span>
          <div className="w-px h-12 bg-gradient-to-b from-white/60 to-transparent" />
          <ChevronRight className="w-4 h-4 rotate-90" />
        </div>
      </div>
    </div>
  );
};
export default Hero;