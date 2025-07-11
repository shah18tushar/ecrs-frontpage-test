"use client";

import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const VideoParallax = () => {
  const videoContainerRef = useRef(null);
  const contentRef = useRef(null);

  useEffect(() => {
    // Set up the parallax effect only for this component's video
    gsap.to(videoContainerRef.current, {
      scrollTrigger: {
        trigger: videoContainerRef.current,
        start: "top bottom",
        end: "bottom top",
        scrub: true,
      },
      yPercent: 30, // Adjust this for parallax movement amount
      ease: "none",
    });

    // Content animations
    gsap.from(contentRef.current.querySelectorAll(".fade-in"), {
      duration: 1.5,
      opacity: 0,
      y: 50,
      stagger: 0.2,
      ease: "power3.out",
      delay: 0.5,
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <section className="relative h-screen overflow-hidden">
      {/* Video container with absolute positioning (not fixed) */}
      <div
        ref={videoContainerRef}
        className="absolute top-0 left-0 w-full h-full z-0"
      >
        <video
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          className="w-full h-full object-cover brightness-[0.8]"
        >
          <source src="/herosectionvideo.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="absolute inset-0 bg-black/30" />
      </div>

      {/* Content container */}
      <div
        ref={contentRef}
        className="relative z-10 h-full flex flex-col justify-center px-6 sm:px-12 lg:px-24 text-white"
      >
        <div className="max-w-4xl space-y-6">
          <h1 className="text-4xl lg:text-5xl font-serif font-bold leading-tight fade-in">
            Discover the <span className="text-red-400">World on Wheels.</span>
          </h1>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12 fade-in">
            <div className=" p-6 backdrop-blur-xs border-l-4 border-gold-500">
              <h3 className="text-xl font-serif mb-3 text-gold-500">
                Luxury Fleet
              </h3>
              <p className="font-light">
                From Rolls-Royce to Bentley, experience automotive perfection
                with our hand-picked collection.
              </p>
            </div>
            <div className="p-6 backdrop-blur-xs border-l-4 border-gold-500">
              <h3 className="text-xl font-serif mb-3 text-gold-500">
                24/7 Service
              </h3>
              <p className="font-light">
                Our concierge team is available around the clock to ensure
                seamless luxury experiences.
              </p>
            </div>
            <div className="p-6 backdrop-blur-xs border-l-4 border-gold-500">
              <h3 className="text-xl font-serif mb-3 text-gold-500">
                Global Access
              </h3>
              <p className="font-light">
                Pick up in one city, drop off in another. Our network spans
                across major destinations.
              </p>
            </div>
          </div>

          <div className="flex flex-col justify-center sm:flex-row gap-4 mt-12 fade-in">
            <button className="border-2 border-white hover:border-gold-500 hover:text-gold-500 font-medium py-3 px-8 rounded-sm transition-all duration-300 transform hover:scale-105 flex items-center gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z"
                  clipRule="evenodd"
                />
              </svg>
              Instant Booking
            </button>
          </div>
        </div>

        {/* Luxury assurance badge */}
        <div className="absolute right-12 bottom-12 hidden lg:block fade-in">
          <div className="flex flex-col items-end">
            <span className="text-sm tracking-widest mb-1">TRUSTED BY</span>
            <div className="flex gap-4">
              <span className="text-xs opacity-80">FIVE-STAR HOTELS</span>
              <span className="text-xs opacity-80">CELEBRITIES</span>
              <span className="text-xs opacity-80">VIP CLIENTS</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoParallax;





















// "use client";

// import React, { useState } from "react";
// import CarCarousel from "@/components/ui/CarCarousel";
// import SplitText from "@/components/ui/SplitText";
// import MagnifierCursor from "./MagnifierCursor";

// export default function BookingForm() {
//   const [selectedType, setSelectedType] = useState("sedan");
//   const [form, setForm] = useState({
//     guestName: "",
//     email: "",
//     phone: "",
//     pickup: "",
//     drop: "",
//     date: "",
//     time: "",
//     carType: "sedan",
//   });

//   const handleFormChange = (e) => {
//     setForm({ ...form, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log("Booking submitted:", { ...form, selectedType });
//   };

//   return (
//     <section className="w-full px-4 py-16" id="scroll">
//       <div className="flex flex-col md:flex-row items-start gap-8 max-w-7xl mx-auto bg-white/50 backdrop-blur-md rounded-2xl shadow-xl border border-gray-200 p-6 md:p-0">
//         {/* Left: Car Carousel */}
//         <div className="flex-1 w-full">
//           <CarCarousel
//             selectedType={selectedType}
//             setSelectedType={setSelectedType}
//           />
//         </div>

//         {/* Right: Booking Form */}

//         <div className="flex-1 w-full flex justify-center items-center">
//           <form onSubmit={handleSubmit} className="p-4 w-full max-w-xl  ">
//             {/* Form Heading */}
//             <div className="text-start mb-2 inline-block">
//               {/* Animated heading */}

//                 <MagnifierCursor
//                   text="Book a Ride & Experience Unmatched Luxury & Comfort"
//                   className="text-lg font-medium text-gray-600"
//                   cursorSize={50}
//                 />

//             </div>

//             {/* Form Inputs */}
//             <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
//               {[
//                 {
//                   name: "guestName",
//                   label: "Guest Name",
//                   type: "text",
//                   placeholder: "John Doe",
//                   icon: "👤",
//                 },
//                 {
//                   name: "email",
//                   label: "Email Address",
//                   type: "email",
//                   placeholder: "john@example.com",
//                   icon: "✉️",
//                 },
//                 {
//                   name: "phone",
//                   label: "Phone Number",
//                   type: "tel",
//                   placeholder: "+91 98765 43210",
//                   icon: "📱",
//                 },
//                 {
//                   name: "pickup",
//                   label: "Pickup Location",
//                   type: "text",
//                   placeholder: "Airport / Hotel Address",
//                   icon: "📍",
//                 },
//                 {
//                   name: "drop",
//                   label: "Destination",
//                   type: "text",
//                   placeholder: "Exact Destination Address",
//                   icon: "🏁",
//                 },
//                 {
//                   name: "date",
//                   label: "Pickup Date",
//                   type: "date",
//                   icon: "📅",
//                 },
//                 {
//                   name: "time",
//                   label: "Pickup Time",
//                   type: "time",
//                   icon: "⏰",
//                 },
//               ].map(({ name, label, type, placeholder, icon }) => (
//                 <div key={name} className="relative w-full group">
//                   {/* <div className="absolute top-5 text-gray-400 group-focus-within:text-red-600 text-xs">
//                     {icon}
//                   </div> */}
//                   <input
//                     type={type}
//                     name={name}
//                     id={name}
//                     placeholder=" "
//                     value={form[name]}
//                     onChange={handleFormChange}
//                     className="peer w-full pl-8 pr-3 border-0 border-b border-gray-200 focus:border-red-600 focus:outline-none text-xs bg-transparent pt-7 pb-2 placeholder-transparent transition-all duration-200"
//                     required
//                   />
//                   <label
//                     htmlFor={name}
//                     className="absolute left-8 top-3 text-xs font-medium text-gray-500  tracking-wider transition-all duration-200
//               peer-placeholder-shown:top-5 peer-placeholder-shown:text-xs peer-placeholder-shown:text-gray-400 peer-placeholder-shown:normal-case
//               peer-focus:top-3 peer-focus:text-xs peer-focus:text-red-600 peer-focus:font-medium"
//                   >
//                     {label}
//                   </label>
//                 </div>
//               ))}

//               {/* Car Type Dropdown with floating label */}
//               <div className="relative w-full group">
//                 {/* <div className="absolute top-5 text-gray-400 group-focus-within:text-red-600 text-xs">
//                   🚗
//                 </div> */}
//                 <select
//                   id="carType"
//                   name="carType"
//                   value={form.carType}
//                   onChange={handleFormChange}
//                   required
//                   className="peer w-full pl-8 pr-8 appearance-none border-0 border-b border-gray-200 focus:border-red-600 focus:outline-none text-xs bg-transparent pt-7 pb-2"
//                 >
//                   <option value="sedan">Sedan</option>
//                   <option value="xuv">XUV</option>
//                   <option value="premium">Premium</option>
//                   <option value="bus">Bus</option>
//                 </select>
//                 <label
//                   htmlFor="carType"
//                   className="absolute left-8 top-3 text-xs font-medium text-gray-500 tracking-wider transition-all duration-200
//             peer-[value='']:top-5 peer-[value='']:text-xs peer-[value='']:text-gray-400 peer-[value='']:normal-case
//             peer-focus:top-3 peer-focus:text-xs peer-focus:text-red-600 peer-focus:font-medium"
//                 >
//                   Vehicle Selection
//                 </label>
//                 <div className="pointer-events-none absolute right-3 top-[1.8rem] text-gray-400 text-xs">
//                   ▼
//                 </div>
//               </div>
//             </div>

//             {/* Submit Button */}
//             <div className="pt-8 text-center">
//               <button
//                 type="submit"
//                 className="cursor-pointer btn-shadow-red text-xs mb-2"
//               >
//                 Confirm Booking
//               </button>
//             </div>
//           </form>
//         </div>
//       </div>
//     </section>
//   );
// }
