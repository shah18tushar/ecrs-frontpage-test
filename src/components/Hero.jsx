// "use client";

// import React, { useEffect, useRef, useState } from "react";
// import {
//   ChevronRight,
//   ChevronDown,
//   Car,
// } from "lucide-react";

// const Hero = () => {
//   const [currentSlide, setCurrentSlide] = useState(0);
//   const [isVisible, setIsVisible] = useState(false);
//   const [selectedVehicle, setSelectedVehicle] = useState("");
//   const [isDropdownOpen, setIsDropdownOpen] = useState(false);
//   const heroRef = useRef(null);
//   const dropdownRef = useRef(null);

//   const heroSlides = [
//     {
//       image:
//         "https://images.unsplash.com/photo-1503376780353-7e6692767b70?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
//       title: "Luxury Redefined",
//       subtitle: "Experience Premium Car Rentals",
//       description:
//         "From Mercedes to BMW, discover our fleet of luxury vehicles designed for the most discerning travelers.",
//     },
//     {
//       image:
//         "https://images.unsplash.com/photo-1617531653332-bd46c24f2068?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
//       subtitle: "Electric Future",
//       title: "Sustainable Luxury",
//       description:
//         "Leading the way with our new electric vehicle fleet, combining luxury with environmental responsibility.",
//     },
//     {
//       image:
//         "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
//       subtitle: "Corporate Excellence",
//       title: "Widely Endorsed",
//       description:
//         "Professional transportation solutions tailored for businesses across Pune and Pan-India locations.",
//     },
//   ];

//   const vehicleOptions = [
//     { value: "sedan", label: "Sedan" },
//     { value: "xuv", label: "XUV" },
//     { value: "premium", label: "Premium" },
//     { value: "bus", label: "Bus" },
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
//     <div className="relative h-[99.9vh] overflow-hidden bg-gradient-to-br from-gray-900 via-black to-gray-900">
//       {/* Background Images with Parallax Effect */}
//       <div className="absolute inset-0">
//         {heroSlides.map((slide, index) => (
//           <div
//             key={index}
//             className={`absolute inset-0 transition-opacity duration-1000 ${
//               index === currentSlide ? "opacity-100" : "opacity-0"
//             }`}
//           >
//             <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/60 to-transparent z-10" />
//             <div className="absolute inset-0 z-20" />
//             <img
//               src={slide.image}
//               alt={slide.title}
//               className="w-full h-full object-cover scale-105 hover:scale-110 transition-transform duration-[3000ms]"
//             />
//           </div>
//         ))}
//       </div>
//       {/* Main Content */}
//       <div className="relative z-40 min-h-screen flex items-center pt-20">
//         <div className="container mx-auto px-6 lg:px-8">
//           <div className="grid lg:grid-cols-2 gap-8 items-center">
//             {/* Left Content */}
//             <div className="space-y-8">
//               {/* Badge */}
//               <div
//                 className={`inline-flex items-center gap-2 px-4 py-2 rounded-full bg-red-500/20 border border-red-500/30 backdrop-blur-sm text-red-400 text-sm font-medium transform transition-all duration-700 ${
//                   isVisible
//                     ? "translate-y-0 opacity-100"
//                     : "translate-y-8 opacity-0"
//                 }`}
//               >
//                 <div className="w-2 h-2 bg-red-600 rounded-full animate-pulse" />
//                 {heroSlides[currentSlide].subtitle}
//               </div>

//               {/* Main Heading */}
//               <div className="space-y-4">
//                 <h1
//                   className={`text-5xl md:text-5xl font-bold text-white leading-tight transform transition-all duration-1000 delay-200 ${
//                     isVisible
//                       ? "translate-y-0 opacity-100"
//                       : "translate-y-12 opacity-0"
//                   }`}
//                 >
//                   {heroSlides[currentSlide].title
//                     .split(" ")
//                     .map((word, index) => (
//                       <span
//                         key={index}
//                         className={index === 1 ? "text-red-500" : ""}
//                       >
//                         {word}{" "}
//                       </span>
//                     ))}
//                 </h1>

//                 <p
//                   className={`text-xl text-gray-300 leading-relaxed max-w-2xl transform transition-all duration-1000 delay-300 ${
//                     isVisible
//                       ? "translate-y-0 opacity-100"
//                       : "translate-y-8 opacity-0"
//                   }`}
//                 >
//                   {heroSlides[currentSlide].description}
//                 </p>
//               </div>

//               {/* CTA Buttons */}
//               <div className="mt-6 flex gap-4">
//                 <button className="px-6 py-2 rounded-lg font-semibold bg-transparent border border-white text-white hover:bg-white/80 cursor-pointer hover:text-black hover:shadow-white/60 hover:shadow-lg transition-all duration-300 hover:scale-105">
//                   Contact Us
//                 </button>
//               </div>
//             </div>

//             {/* Right Content - Floating Card */}
//             <div
//               className={`lg:ml-8 transform transition-all duration-1000 delay-500 ${
//                 isVisible
//                   ? "translate-x-0 opacity-100"
//                   : "translate-x-12 opacity-0"
//               }`}
//             >
//               <div className="relative">
//                 {/* Floating Card */}
//                 <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 border border-white/40 shadow-2xl hover:shadow-red-500/20 max-w-md mx-auto">
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
//                           <label className="block text-xs font-medium text-gray-300 mb-1">
//                             Guest Name
//                           </label>
//                           <input
//                             type="text"
//                             className="w-full px-3 py-2 bg-white/5 border border-white/20 rounded-lg text-white text-xs focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
//                           />
//                         </div>
//                         <div>
//                           <label className="block text-xs font-medium text-gray-300 mb-1">
//                             Email Address
//                           </label>
//                           <input
//                             type="text"
//                             className="w-full px-3 py-2 bg-white/5 border border-white/20 rounded-lg text-white text-xs focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
//                           />
//                         </div>
//                       </div>

//                       <div className="grid grid-cols-2 gap-2">
//                         <div>
//                           <label className="block text-xs font-medium text-gray-300 mb-1">
//                             Phone Number
//                           </label>
//                           <input
//                             type="text"
//                             className="w-full px-3 py-2 bg-white/5 border border-white/20 rounded-lg text-white text-xs focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
//                           />
//                         </div>
//                         <div>
//                           <label className="block text-xs font-medium text-gray-300 mb-1">
//                             Pickup Location
//                           </label>
//                           <input
//                             type="text"
//                             className="w-full px-3 py-2 bg-white/5 border border-white/20 rounded-lg text-white text-xs focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
//                           />
//                         </div>
//                       </div>

//                       <div className="grid grid-cols-2 gap-2">
//                         <div>
//                           <label className="block text-xs font-medium text-gray-300 mb-1">
//                             Destination
//                           </label>
//                           <input
//                             type="text"
//                             className="w-full px-3 py-2 bg-white/5 border border-white/20 rounded-lg text-white text-xs focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
//                           />
//                         </div>

//                         <div className="relative">
//                           <label className="block text-xs font-medium text-gray-300 mb-1">
//                             Vehicle Selection
//                           </label>
//                           <div className="relative" ref={dropdownRef}>
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
//                                     className="w-full px-3 py-2 text-xs text-left text-white hover:bg-white/10 first:rounded-t-lg last:rounded-b-lg transition-colors duration-200"
//                                   >
//                                     {option.label}
//                                   </button>
//                                 ))}
//                               </div>
//                             )}
//                           </div>
//                         </div>
//                       </div>

//                       <div className="grid grid-cols-2 gap-2">
//                         <div>
//                           <label className="block text-xs font-medium text-gray-300 mb-1">
//                             Date
//                           </label>
//                           <input
//                             type="date"
//                             className="w-full px-3 py-2 bg-white/5 border border-white/20 rounded-lg text-white text-xs focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
//                           />
//                         </div>
//                         <div>
//                           <label className="block text-xs font-medium text-gray-300 mb-1">
//                             Time
//                           </label>
//                           <input
//                             type="time"
//                             className="w-full px-3 py-2 bg-white/5 border border-white/20 rounded-lg text-white text-xs focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
//                           />
//                         </div>
//                       </div>

//                       <div className="flex justify-center">
//                         <button className="btn-shadow-red text-xs font-semibold cursor-pointer">
//                           Submit
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
//       <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-50">
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
import {
  ChevronRight,
  ChevronDown,
  Car,
  Sparkles,
  ShieldCheck,
  Clock,
  MapPin,
  Calendar,
  User,
  Phone,
  Mail,
} from "lucide-react";

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [selectedVehicle, setSelectedVehicle] = useState("");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const heroRef = useRef(null);
  const dropdownRef = useRef(null);

  const heroSlides = [
    {
      image:
        "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",

      // title: "Luxury Redefined",
      title: "Corporate Car Rental Services -   Reliable Travel Partner",
      subtitle: "Executive Car Rental Services",
      description: "Experience Premium Car Rentals",
    },
    // {
    //   image:
    //     "https://images.unsplash.com/photo-1464851707681-f9d5fdaccea8?q=80&w=1233&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",

    //   subtitle: "Executive Car Rental Services",
    //   title: "A Reliable Travel Partner",
    //   // title: "Sustainable Luxury",
    //   description: "Experience Premium Car Rentals",
    // },
    // {
    //   image:
    //     "https://plus.unsplash.com/premium_photo-1683140916567-6d3cea90caf6?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    //   title: "Discover the World on Wheels",
    //   // title: "Widely Endorsed",
    //   subtitle: "Executive Car Rental Services",
    //   description: "Experience Premium Car Rentals",
    // },
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
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 5000);
    return () => clearInterval(timer);
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
    <div className="relative h-[99.9vh] overflow-hidden bg-gradient-to-br from-gray-900 via-black to-gray-900">
      {/* Background Images with Parallax Effect */}
      <div className="absolute inset-0">
        {heroSlides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentSlide ? "opacity-100" : "opacity-0"
            }`}
          >
            {/* <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-black/30 to-transparent z-10" /> */}
            <div className="absolute inset-0 z-20" />
            <img
              src={slide.image}
              alt={slide.title}
              className="w-full h-full object-cover scale-105 hover:scale-110 transition-transform duration-[3000ms] brightness-[0.9]"
            />
          </div>
        ))}
      </div>
      {/* Main Content */}
      <div className="relative z-40 min-h-screen flex items-center pt-20">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            {/* Left Content - Enhanced Luxury Text Section */}
            <div className="space-y-8 relative">
              {/* Floating Luxury Elements */}
              <div className="absolute -top-10 -left-10 w-24 h-24 bg-red-500/10 rounded-full blur-xl animate-pulse" />
              <div className="absolute bottom-0 -right-10 w-20 h-20 bg-red-500/5 rounded-full blur-lg animate-pulse delay-1000" />

              {/* Badge */}

              <div
                className={`inline-flex items-center gap-2 px-4 py-2 rounded-full bg-red-500/20 border border-red-500/30 backdrop-blur-sm text-red-400 text-sm font-medium transform transition-all duration-700 ${
                  isVisible
                    ? "translate-y-0 opacity-100"
                    : "translate-y-8 opacity-0"
                }`}
              >
                <div className="w-2 h-2 bg-red-600 rounded-full animate-pulse" />
                {heroSlides[currentSlide].subtitle}
              </div>

              {/* Main Heading */}
              <div className="space-y-6 relative z-10">
                <h1
                  className={`text-5xl md:text-3xl font-bold text-white leading-tight transform transition-all duration-1000 delay-200 ${
                    isVisible
                      ? "translate-y-0 opacity-100"
                      : "translate-y-12 opacity-0"
                  }`}
                >
                  <span className="inline-block">
                    {heroSlides[currentSlide].title
                      .split("   ")
                      .map((word, index) => (
                        <span
                          key={index}
                          className={`relative inline-block ${
                            index === 1 ? "text-red-400" : ""
                          }`}
                        >
                          {word}{" "}
                          {index === 1 && (
                            <span className="absolute -bottom-2 left-0 w-full h-0.5 bg-gradient-to-r from-red-500 to-transparent"></span>
                          )}
                        </span>
                      ))}
                  </span>
                </h1>

                {/* <p
                  className={`text-xl font-semibold text-gray-300 leading-relaxed max-w-2xl transform transition-all duration-1000 delay-300 relative ${
                    isVisible
                      ? "translate-y-0 opacity-100"
                      : "translate-y-8 opacity-0"
                  }`}
                >
                  <span className="absolute -left-6 top-0 h-full w-0.5 bg-gradient-to-b from-red-500/50 via-red-500/50  to-transparent"></span>
                  {heroSlides[currentSlide].description}
                </p> */}
              </div>

              {/* CTA Buttons */}
              <div
                className={`mt-8 flex gap-4 transform transition-all duration-1000 delay-400 ${
                  isVisible
                    ? "translate-y-0 opacity-100"
                    : "translate-y-8 opacity-0"
                }`}
              >
                <button className="relative px-8 py-3 rounded-lg font-semibold bg-transparent border border-white/40 text-white hover:bg-white/10 cursor-pointer hover:shadow-white/20 hover:shadow-lg transition-all duration-300 hover:scale-[1.02] group overflow-hidden">
                  <span className="relative z-10 flex items-center gap-2">
                    Contact Us
                    <span className="group-hover:translate-x-1 transition-transform duration-300">
                      <ChevronRight className="w-5 h-5" />
                    </span>
                  </span>
                  <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 -translate-x-full group-hover:translate-x-full"></span>
                </button>
              </div>
            </div>

            {/* Right Content - Booking Form (Kept as original) */}
            <div
              className={`lg:ml-8 transform transition-all duration-1000 delay-500 ${
                isVisible
                  ? "translate-x-0 opacity-100"
                  : "translate-x-12 opacity-0"
              }`}
            >
              <div className="relative">
                {/* Floating Card */}
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 border border-white/40 shadow-2xl hover:shadow-red-500/20 max-w-md mx-auto">
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
                          <label className="block text-xs font-medium text-gray-300 mb-1">
                            Guest Name
                          </label>
                          <input
                            type="text"
                            className="w-full px-3 py-2 bg-white/5 border border-white/20 rounded-lg text-white text-xs focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
                          />
                        </div>
                        <div>
                          <label className="block text-xs font-medium text-gray-300 mb-1">
                            Email Address
                          </label>
                          <input
                            type="text"
                            className="w-full px-3 py-2 bg-white/5 border border-white/20 rounded-lg text-white text-xs focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
                          />
                        </div>
                      </div>

                      <div className="grid grid-cols-2 gap-2">
                        <div>
                          <label className="block text-xs font-medium text-gray-300 mb-1">
                            Phone Number
                          </label>
                          <input
                            type="text"
                            className="w-full px-3 py-2 bg-white/5 border border-white/20 rounded-lg text-white text-xs focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
                          />
                        </div>
                        <div>
                          <label className="block text-xs font-medium text-gray-300 mb-1">
                            Pickup Location
                          </label>
                          <input
                            type="text"
                            className="w-full px-3 py-2 bg-white/5 border border-white/20 rounded-lg text-white text-xs focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
                          />
                        </div>
                      </div>

                      <div className="grid grid-cols-2 gap-2">
                        <div>
                          <label className="block text-xs font-medium text-gray-300 mb-1">
                            Destination
                          </label>
                          <input
                            type="text"
                            className="w-full px-3 py-2 bg-white/5 border border-white/20 rounded-lg text-white text-xs focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
                          />
                        </div>

                        <div className="relative" ref={dropdownRef}>
                          <label className="block text-xs font-medium text-gray-300 mb-1">
                            Vehicle Selection
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
                                    className="w-full px-3 py-2 text-xs text-left text-white hover:bg-white/10 first:rounded-t-lg last:rounded-b-lg transition-colors duration-200"
                                  >
                                    {option.label}
                                  </button>
                                ))}
                              </div>
                            )}
                          </div>
                        </div>
                      </div>

                      <div className="grid grid-cols-2 gap-2">
                        <div>
                          <label className="block text-xs font-medium text-gray-300 mb-1">
                            Date
                          </label>
                          <input
                            type="date"
                            className="w-full px-3 py-2 bg-white/5 border border-white/20 rounded-lg text-white text-xs focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
                          />
                        </div>
                        <div>
                          <label className="block text-xs font-medium text-gray-300 mb-1">
                            Time
                          </label>
                          <input
                            type="time"
                            className="w-full px-3 py-2 bg-white/5 border border-white/20 rounded-lg text-white text-xs focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
                          />
                        </div>
                      </div>

                      <div className="flex justify-center">
                        <button className="btn-shadow-red text-xs font-semibold cursor-pointer">
                          Submit
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

      {/* Slide Indicators */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-50">
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
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 right-8 z-50">
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



















// "use client";

// import { useGSAPSlideInFromLeft, useGSAPFadeInUp } from "@/utils/animations";
// import { useEffect, useRef } from "react";
// import { usePathname } from "next/navigation";
// import { motion } from "framer-motion";
// import Link from "next/link";

// export default function Hero() {
//   const videoContainerRef = useRef(null);
//   const contentRef = useRef(null);
//   const pathname = usePathname();

//   // Initialize animations
//   useGSAPSlideInFromLeft(0, 1.5, videoContainerRef);
//   useGSAPFadeInUp(0.5, 1.2, contentRef);

//   // Handle video reload
//   useEffect(() => {
//     const video = videoContainerRef.current?.querySelector("video");
//     if (pathname === "/" && video) {
//       video.load();
//       video.play().catch((e) => console.log("Autoplay prevented:", e));
//     }
//   }, [pathname]);

//   return (
//     <section
//       id="hero"
//       className="relative h-[100vh] overflow-hidden"
//       ref={videoContainerRef}
//     >
      // <video
      //   autoPlay
      //   muted
      //   loop
      //   playsInline
      //   preload="auto"
      //   className="absolute top-0 left-0 w-full h-full object-cover z-0 brightness-100 "
      //   key={pathname}
      // >
      //   <source src="/herosectionvideo.mp4" type="video/mp4" />
      //   Your browser does not support the video tag.
      // </video>

//       <div
//         ref={contentRef}
//         className="flex-col relative z-20 h-full flex items-center justify-center text-center text-white/80 px-4 max-w-[700px] w-full mx-auto mt-14"
//       >
//         {/* Main Heading - LAST to animate (top of DOM, but appears last) */}
//         <motion.h2
//           initial={{ opacity: 0, y: 50 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{
//             duration: 1,
//             delay: 1.8, // Longest delay (appears last)
//             ease: [0.2, 0.8, 0.4, 1],
//           }}
//           className="text-2xl sm:text-3xl font-medium font-serif mb-8 leading-snug"
//         >
//           Corporate Car Rental Services a reliable travel partner for your{" "}
//           <motion.span
//             className="text-red-600 relative inline-block"
//             initial={{ opacity: 0, x: -20 }}
//             animate={{ opacity: 1, x: 0 }}
//             transition={{ delay: 2.2 }}
//           >
//             Safe & Pleasant Journey
//             <motion.span
//               className="absolute -bottom-1 left-0 w-full h-0.5 bg-red-600"
//               initial={{ scaleX: 0 }}
//               animate={{ scaleX: 1 }}
//               transition={{ delay: 2.4, duration: 0.8 }}
//             />
//           </motion.span>
//         </motion.h2>

//         {/* Elegant Feature Pills - THIRD to animate */}
//         {/* <motion.div
//           initial={{ opacity: 0, y: 20, scale: 0.98 }}
//           animate={{ opacity: 1, y: 0, scale: 1 }}
//           transition={{
//             duration: 0.8,
//             delay: 1.2, // After stats, before heading
//             ease: "easeOut",
//           }}
//           className="flex items-center justify-center gap-6 mb-6 text-base font-medium flex-wrap"
//         >
//           {["Economical", "Efficient", "Dependable"].map((feature, index) => (
//             <motion.div
//               key={feature}
//               initial={{ opacity: 0, y: 10 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ delay: 1.2 + index * 0.2 }}
//               className="flex items-center gap-2 px-4 py-2 backdrop-blur-md bg-white/5 rounded-full border border-white/10 hover:bg-white/10 transition-all duration-300"
//             >
//               <motion.div
//                 className="w-2 h-2 bg-red-500 rounded-full"
//                 animate={{
//                   scale: [1, 1.2, 1],
//                   opacity: [0.6, 1, 0.6],
//                 }}
//                 transition={{
//                   duration: 2,
//                   repeat: Infinity,
//                   delay: index * 0.3,
//                 }}
//               />
//               <span className="text-gray-800 font-serif tracking-wider">
//                 {feature}
//               </span>
//             </motion.div>
//           ))}
//         </motion.div> */}

//         {/* Sophisticated Statistics - SECOND to animate */}
//         {/* <motion.div
//           initial={{ opacity: 0, y: 30 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{
//             duration: 0.8,
//             delay: 0.6, // After CTA, before pills
//             ease: "easeOut",
//           }}
//           className="flex items-center justify-center gap-8 lg:gap-12 flex-wrap mt-4 mb-8"
//         >
//           {[
//             { value: "5000+", label: "Happy Clients" },
//             { value: "100+", label: "Premium Cars" },
//             { value: "24/7", label: "Support" },
//           ].map((stat, index) => (
//             <motion.div
//               key={stat.label}
//               initial={{ scale: 0.9 }}
//               animate={{ scale: 1 }}
//               transition={{
//                 delay: 0.6 + index * 0.15,
//                 duration: 0.5,
//               }}
//               className="text-center p-4 backdrop-blur-sm bg-white/5 rounded-lg border border-white/10 hover:bg-white/10 transition-all duration-300 hover:shadow-lg hover:shadow-red-500/10"
//             >
//               <div className="text-xl font-bold text-red-500 mb-1 font-serif">
//                 {stat.value}
//               </div>
//               <div className="text-xs text-gray-300 tracking-wider uppercase font-light">
//                 {stat.label}
//               </div>
//             </motion.div>
//           ))}
//         </motion.div> */}

//         {/* Premium Call-to-Action - FIRST to animate (bottom of DOM, but appears first) */}
//         <motion.div
//           initial={{ opacity: 0, y: 40, scale: 0.95 }}
//           animate={{ opacity: 1, y: 0, scale: 1 }}
//           transition={{
//             duration: 0.8,
//             ease: [0.2, 0.8, 0.4, 1],
//           }}
//           className="relative group mt-4"
//         >
//           {/* Button Glow Effect */}
//           <div className="absolute -inset-1 bg-gradient-to-r from-red-500 to-red-600 rounded-lg blur opacity-20 group-hover:opacity-40 transition duration-300 animate-pulse" />

//           <Link href="#scroll">
//             <button className="relative cursor-pointer px-8 py-4 rounded-lg font-semibold text-base bg-transparent border-2 border-white/20 backdrop-blur-sm hover:bg-white/70 hover:text-black hover:shadow-2xl hover:shadow-red-500/20 transition-all duration-500 hover:scale-105 hover:border-white group overflow-hidden">
//               {/* Button Inner Glow */}
//               <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent transform -skew-x-12 translate-x-full group-hover:translate-x-0 transition-transform duration-700" />

//               <span className="relative z-10 tracking-wider font-serif">
//                 Book a Ride
//               </span>

//               {/* Button Arrow */}
//               <motion.span
//                 className="relative z-10 ml-2 inline-block transition-transform duration-300 group-hover:translate-x-1"
//                 initial={{ opacity: 0, x: -10 }}
//                 animate={{ opacity: 1, x: 0 }}
//                 transition={{ duration: 0.5, delay: 1.5 }}
//               >
//                 →
//               </motion.span>
//             </button>
//           </Link>
//         </motion.div>
//       </div>
//     </section>
//   );
// }
