// "use client";

// import React from "react";
// import MagnifierCursor from "./MagnifierCursor";

// const PartnerWithUs = () => {
//       const text = "Why Join ECRS as a Vendor ?";

//   return (
//     <section className="relative py-16">
//       <div className="max-w-6xl mx-auto px-4">
//         <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
//           {/* Left Content */}
//           <div className="lg:w-1/2 text-center lg:text-left">
//             <h1 className="text-4xl md:text-2xl font-bold text-center text-gray-900 font-serif mb-2">
//               <MagnifierCursor text={text} cursorSize={40} />
//             </h1>
//             <div className="mb-4 flex justify-center">
//               <span className="inline-block px-3 py-1 text-xs font-semibold tracking-wider text-red-600 uppercase bg-red-100 rounded-full">
//                 Your Fleet - Our Platform - Unlimited Possibilities..!
//               </span>
//             </div>
//             <p className="text-sm text-gray-600 mb-6 max-w-lg text-center">
//               Partnering with ECRS opens the door to sustainable growth,
//               consistent business opportunities, and long-term success. As a
//               trusted name in the car rental industry, ECRS values strong
//               partnerships with reliable vendors and offers a platform where
//               your fleet and services can thrive.
//             </p>

//             <div className="flex justify-center">
//               <div className="hidden lg:block space-y-4">
//                 <div className="flex items-center space-x-4">
//                   <div className="flex-shrink-0 mt-1">
//                     <svg
//                       className="w-6 h-6 text-red-500"
//                       fill="none"
//                       stroke="currentColor"
//                       viewBox="0 0 24 24"
//                       xmlns="http://www.w3.org/2000/svg"
//                     >
//                       <path
//                         strokeLinecap="round"
//                         strokeLinejoin="round"
//                         strokeWidth="2"
//                         d="M5 13l4 4L19 7"
//                       ></path>
//                     </svg>
//                   </div>
//                   <div>
//                     <h3 className="text-sm font-medium text-gray-900">
//                       Consistent Bookings
//                     </h3>
//                     <p className="text-gray-500 font-medium text-xs mt-1">
//                       Gain access to large and growing customer base that
//                       ensures regular demand for your vehicles.
//                     </p>
//                   </div>
//                 </div>

//                 <div className="flex items-start space-x-4">
//                   <div className="flex-shrink-0 mt-1">
//                     <svg
//                       className="w-6 h-6 text-red-500"
//                       fill="none"
//                       stroke="currentColor"
//                       viewBox="0 0 24 24"
//                       xmlns="http://www.w3.org/2000/svg"
//                     >
//                       <path
//                         strokeLinecap="round"
//                         strokeLinejoin="round"
//                         strokeWidth="2"
//                         d="M5 13l4 4L19 7"
//                       ></path>
//                     </svg>
//                   </div>
//                   <div>
//                     <h3 className="text-sm font-medium text-gray-900">
//                       Timely Payments & Transparent Terms
//                     </h3>
//                     <p className="text-gray-500 font-medium text-xs mt-1">
//                       Transparent billing and prompt payments help maintain
//                       healthy cash flow for your operations.
//                     </p>
//                   </div>
//                 </div>

//                 <div className="flex items-start space-x-4">
//                   <div className="flex-shrink-0 mt-1">
//                     <svg
//                       className="w-6 h-6 text-red-500"
//                       fill="none"
//                       stroke="currentColor"
//                       viewBox="0 0 24 24"
//                       xmlns="http://www.w3.org/2000/svg"
//                     >
//                       <path
//                         strokeLinecap="round"
//                         strokeLinejoin="round"
//                         strokeWidth="2"
//                         d="M5 13l4 4L19 7"
//                       ></path>
//                     </svg>
//                   </div>
//                   <div>
//                     <h3 className="text-sm font-medium text-gray-900">
//                       Brand Association
//                     </h3>
//                     <p className="text-gray-500 font-medium text-xs mt-1">
//                       Work with a reputed brand and gain credibility and trust
//                       in the industry.
//                     </p>
//                   </div>
//                 </div>

//                 <div className="flex items-start space-x-4">
//                   <div className="flex-shrink-0 mt-1">
//                     <svg
//                       className="w-6 h-6 text-red-500"
//                       fill="none"
//                       stroke="currentColor"
//                       viewBox="0 0 24 24"
//                       xmlns="http://www.w3.org/2000/svg"
//                     >
//                       <path
//                         strokeLinecap="round"
//                         strokeLinejoin="round"
//                         strokeWidth="2"
//                         d="M5 13l4 4L19 7"
//                       ></path>
//                     </svg>
//                   </div>
//                   <div>
//                     <h3 className="text-sm font-medium text-gray-900">
//                       24/7 Assistance
//                     </h3>
//                     <p className="text-gray-500 font-medium text-xs mt-1">
//                       Dedicated vendor support to resolve queries and ensure
//                       smooth coordination.
//                     </p>
//                   </div>
//                 </div>

//                 <div className="flex items-start space-x-4">
//                   <div className="flex-shrink-0 mt-1">
//                     <svg
//                       className="w-6 h-6 text-red-500"
//                       fill="none"
//                       stroke="currentColor"
//                       viewBox="0 0 24 24"
//                       xmlns="http://www.w3.org/2000/svg"
//                     >
//                       <path
//                         strokeLinecap="round"
//                         strokeLinejoin="round"
//                         strokeWidth="2"
//                         d="M5 13l4 4L19 7"
//                       ></path>
//                     </svg>
//                   </div>
//                   <div>
//                     <h3 className="text-sm font-medium text-gray-900">
//                       Growth & Scaling Support
//                     </h3>
//                     <p className="text-gray-500 font-medium text-xs mt-1">
//                       We offer incentives and performance-based opportunities to
//                       help you scale your fleet and expand into new service
//                       zones.
//                     </p>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>

//           {/* Right Form */}
//           <div className="lg:w-1/2 w-full">
//             <div className="bg-gradient-to-b from-gray-200 via-gray-100 to-white rounded-xl shadow-2xl overflow-hidden border border-gray-200 transform transition-all hover:shadow-3xl">
//               {/* Premium red accent bar */}
//               <div className="p-0.5 bg-gradient-to-r from-red-500 via-red-600 to-red-500"></div>

//               <div className="px-8 py-8">
//                 <form className="space-y-6">
//                   <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//                     {/* Vendor Name */}
//                     <div className="relative">
//                       <label className="block text-sm font-semibold text-gray-700 mb-2">
//                         Vendor Name <span className="text-red-500">*</span>
//                       </label>
//                       <input
//                         type="text"
//                         className="w-full px-4 py-1.5 bg-white bg-opacity-70 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500 transition-all duration-300 placeholder-gray-500 shadow-sm hover:shadow-md"
//                         placeholder="Your Name"
//                       />
//                       <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none top-6">
//                         <svg
//                           className="h-5 w-5 text-gray-400"
//                           fill="none"
//                           viewBox="0 0 24 24"
//                           stroke="currentColor"
//                         >
//                           <path
//                             strokeLinecap="round"
//                             strokeLinejoin="round"
//                             strokeWidth={2}
//                             d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
//                           />
//                         </svg>
//                       </div>
//                     </div>

//                     {/* Contact Person Name */}
//                     <div className="relative">
//                       <label className="block text-sm font-semibold text-gray-700 mb-2">
//                         Contact Person Name{" "}
//                         <span className="text-red-500">*</span>
//                       </label>
//                       <input
//                         type="text"
//                         className="w-full px-4 py-1.5 bg-white bg-opacity-70 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500 transition-all duration-300 placeholder-gray-500 shadow-sm hover:shadow-md"
//                         placeholder="Your Name"
//                       />
//                       <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none top-6">
//                         <svg
//                           className="h-5 w-5 text-gray-400"
//                           fill="none"
//                           viewBox="0 0 24 24"
//                           stroke="currentColor"
//                         >
//                           <path
//                             strokeLinecap="round"
//                             strokeLinejoin="round"
//                             strokeWidth={2}
//                             d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
//                           />
//                         </svg>
//                       </div>
//                     </div>

//                     {/* Email */}
//                     <div className="relative">
//                       <label className="block text-sm font-semibold text-gray-700 mb-2">
//                         Email <span className="text-red-500">*</span>
//                       </label>
//                       <input
//                         type="email"
//                         className="w-full px-4 py-1.5 bg-white bg-opacity-70 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500 transition-all duration-300 placeholder-gray-500 shadow-sm hover:shadow-md"
//                         placeholder="Your Email"
//                       />
//                       <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none top-6">
//                         <svg
//                           className="h-5 w-5 text-gray-400"
//                           fill="none"
//                           viewBox="0 0 24 24"
//                           stroke="currentColor"
//                         >
//                           <path
//                             strokeLinecap="round"
//                             strokeLinejoin="round"
//                             strokeWidth={2}
//                             d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
//                           />
//                         </svg>
//                       </div>
//                     </div>

//                     {/* Mobile Number */}
//                     <div className="relative">
//                       <label className="block text-sm font-semibold text-gray-700 mb-2">
//                         Mobile Number <span className="text-red-500">*</span>
//                       </label>
//                       <input
//                         type="tel"
//                         className="w-full px-4 py-1.5 bg-white bg-opacity-70 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500 transition-all duration-300 placeholder-gray-500 shadow-sm hover:shadow-md"
//                         placeholder="+91 (___) ___-____"
//                       />
//                       <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none top-6">
//                         <svg
//                           className="h-5 w-5 text-gray-400"
//                           fill="none"
//                           viewBox="0 0 24 24"
//                           stroke="currentColor"
//                         >
//                           <path
//                             strokeLinecap="round"
//                             strokeLinejoin="round"
//                             strokeWidth={2}
//                             d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
//                           />
//                         </svg>
//                       </div>
//                     </div>

//                     {/* Vehicle Type */}
//                     <div className="relative">
//                       <label className="block text-sm font-semibold text-gray-700 mb-2">
//                         No. of vehicle available{" "}
//                         <span className="text-red-500">*</span>
//                       </label>
//                       <input
//                         type="text"
//                         className="w-full px-4 py-1.5 bg-white bg-opacity-70 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500 transition-all duration-300 placeholder-gray-500 shadow-sm hover:shadow-md"
//                         placeholder="Vehicle Name"
//                       />
//                       <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none top-6">
//                         <svg
//                           className="h-5 w-5 text-gray-400"
//                           fill="none"
//                           viewBox="0 0 24 24"
//                           stroke="currentColor"
//                         >
//                           <path
//                             strokeLinecap="round"
//                             strokeLinejoin="round"
//                             strokeWidth={2}
//                             d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
//                           />
//                         </svg>
//                       </div>
//                     </div>

//                     {/* Vehicle Type dropdown */}
//                     <div className="relative">
//                       <label className="block text-sm font-semibold text-gray-700 mb-2">
//                         Vehicle Types <span className="text-red-500">*</span>
//                       </label>
//                       <select className="w-full px-4 py-1.5 bg-white bg-opacity-70 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500 transition-all duration-300 appearance-none shadow-sm hover:shadow-md">
//                         <option value="">Select driver option</option>
//                         <option value="with_driver">Sedan</option>
//                         <option value="without_driver">SUV</option>
//                         <option value="without_driver">Premium</option>
//                         <option value="without_driver">Luxury</option>
//                         <option value="without_driver">Bus</option>
//                         <option value="without_driver">E - Vehicle</option>
//                       </select>
//                       <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none top-7">
//                         <svg
//                           className="h-5 w-5 text-gray-400"
//                           fill="none"
//                           viewBox="0 0 24 24"
//                           stroke="currentColor"
//                         >
//                           <path
//                             strokeLinecap="round"
//                             strokeLinejoin="round"
//                             strokeWidth={2}
//                             d="M19 9l-7 7-7-7"
//                           />
//                         </svg>
//                       </div>
//                     </div>

//                     {/* Vehicl Ownership */}
//                     <div className="relative">
//                       <label className="block text-sm font-semibold text-gray-700 mb-2">
//                         Vehicle Ownership{" "}
//                         <span className="text-red-500">*</span>
//                       </label>
//                       <select className="w-full px-4 py-1.5 bg-white bg-opacity-70 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500 transition-all duration-300 appearance-none shadow-sm hover:shadow-md">
//                         <option value="">Select Ownership </option>
//                         <option value="with_driver">Owned</option>
//                         <option value="without_driver">
//                           Attached (Market Vehicle)
//                         </option>
//                       </select>
//                       <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none top-7">
//                         <svg
//                           className="h-5 w-5 text-gray-400"
//                           fill="none"
//                           viewBox="0 0 24 24"
//                           stroke="currentColor"
//                         >
//                           <path
//                             strokeLinecap="round"
//                             strokeLinejoin="round"
//                             strokeWidth={2}
//                             d="M19 9l-7 7-7-7"
//                           />
//                         </svg>
//                       </div>
//                     </div>

//                     {/* Driver Availability */}
//                     <div className="relative">
//                       <label className="block text-sm font-semibold text-gray-700 mb-2">
//                         Driver Availability{" "}
//                         <span className="text-red-500">*</span>
//                       </label>
//                       <select className="w-full px-4 py-1.5 bg-white bg-opacity-70 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500 transition-all duration-300 appearance-none shadow-sm hover:shadow-md">
//                         <option value="">Select driver option</option>
//                         <option value="with_driver">With Driver</option>
//                         <option value="without_driver">Without Driver</option>
//                       </select>
//                       <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none top-7">
//                         <svg
//                           className="h-5 w-5 text-gray-400"
//                           fill="none"
//                           viewBox="0 0 24 24"
//                           stroke="currentColor"
//                         >
//                           <path
//                             strokeLinecap="round"
//                             strokeLinejoin="round"
//                             strokeWidth={2}
//                             d="M19 9l-7 7-7-7"
//                           />
//                         </svg>
//                       </div>
//                     </div>

//                     {/* City */}
//                     <div className="relative">
//                       <label className="block text-sm font-semibold text-gray-700 mb-2">
//                         City <span className="text-red-500">*</span>
//                       </label>
//                       <input
//                         type="text"
//                         className="w-full px-4 py-1.5 bg-white bg-opacity-70 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500 transition-all duration-300 placeholder-gray-500 shadow-sm hover:shadow-md"
//                         placeholder="Your City"
//                       />
//                       <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none top-5">
//                         <svg
//                           className="h-5 w-5 text-gray-400"
//                           fill="none"
//                           viewBox="0 0 24 24"
//                           stroke="currentColor"
//                         >
//                           <path
//                             strokeLinecap="round"
//                             strokeLinejoin="round"
//                             strokeWidth={2}
//                             d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
//                           />
//                           <path
//                             strokeLinecap="round"
//                             strokeLinejoin="round"
//                             strokeWidth={2}
//                             d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
//                           />
//                         </svg>
//                       </div>
//                     </div>

//                     {/* Address */}
//                     <div className="relative">
//                       <label className="block text-sm font-semibold text-gray-700 mb-2">
//                         Address <span className="text-red-500">*</span>
//                       </label>
//                       <input
//                         className="w-full px-4 py-1.5 bg-white bg-opacity-70 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500 transition-all duration-300 placeholder-gray-500 shadow-sm hover:shadow-md"
//                         placeholder="Address"
//                         // rows={1}
//                       />
//                       <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none top-5">
//                         <svg
//                           className="h-5 w-5 text-gray-400"
//                           fill="none"
//                           viewBox="0 0 24 24"
//                           stroke="currentColor"
//                         >
//                           <path
//                             strokeLinecap="round"
//                             strokeLinejoin="round"
//                             strokeWidth={2}
//                             d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
//                           />
//                         </svg>
//                       </div>
//                     </div>
//                   </div>

//                   {/* Submit Button */}
//                   <div className="flex justify-center">
//                     <button className="cursor-pointer btn-shadow-red ">
//                       Submit Enquiry
//                     </button>
//                   </div>
//                 </form>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default PartnerWithUs;




 
"use client";

import React from "react";
import MagnifierCursor from "./MagnifierCursor";

const PartnerWithUs = () => {
  const text = "Benefits of Joining ECRS as a Supplier";

  return (
    <section className="relative py-16">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          {/* Left Content */}
          <div className="lg:w-1/2 text-center lg:text-left">
            <h1 className="text-4xl md:text-2xl font-bold text-center text-gray-900 font-serif mb-2">
              <MagnifierCursor text={text} cursorSize={40} />
            </h1>
            <div className="mb-4 flex justify-center">
              <span className="inline-block px-3 py-1 text-xs font-semibold tracking-wider text-red-600 uppercase bg-red-100 rounded-full">
                Your Fleet - Our Platform - Unlimited Possibilities..!
              </span>
            </div>
            <p className="text-sm text-gray-600 mb-6 max-w-lg text-center">
              Partnering with ECRS opens the door to sustainable growth,
              consistent business opportunities, and long-term success. As a
              trusted name in the car rental industry, ECRS values strong
              partnerships with reliable supplier and offers a platform where
              your fleet and services can thrive.
            </p>

            <div className="flex justify-center">
              <div className="hidden lg:block space-y-4">
                <div className="flex items-center space-x-4">
                  <div className="flex-shrink-0 mt-1">
                    <svg
                      className="w-6 h-6 text-red-500"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-sm font-medium text-gray-900">
                      Consistent Bookings
                    </h3>
                    <p className="text-gray-500 font-medium text-xs mt-1">
                      Gain access to large and growing customer base that
                      ensures regular demand for your fleets.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 mt-1">
                    <svg
                      className="w-6 h-6 text-red-500"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-sm font-medium text-gray-900">
                      Timely Payments & Transparent Terms
                    </h3>
                    <p className="text-gray-500 font-medium text-xs mt-1">
                      Transparent billing and prompt payments help maintain
                      healthy cash flow for your operations.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 mt-1">
                    <svg
                      className="w-6 h-6 text-red-500"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-sm font-medium text-gray-900">
                      Brand Association
                    </h3>
                    <p className="text-gray-500 font-medium text-xs mt-1">
                      Work with a reputed brand and gain credibility and trust
                      in the industry.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 mt-1">
                    <svg
                      className="w-6 h-6 text-red-500"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-sm font-medium text-gray-900">
                      24/7 Assistance
                    </h3>
                    <p className="text-gray-500 font-medium text-xs mt-1">
                      Dedicated supplier support to address queries efficiently
                      and maintain hassle-free coordination
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Form */}
          <div className="lg:w-1/2 w-full">
            <div className="bg-gradient-to-b from-gray-200 via-gray-100 to-white rounded-xl shadow-2xl overflow-hidden border border-gray-200 transform transition-all hover:shadow-3xl">
              {/* Premium red accent bar */}
              <div className="p-0.5 bg-gradient-to-r from-red-500 via-red-600 to-red-500" />

              <div className="px-8 py-8">
                <form className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Vendor Name */}
                    <div className="relative">
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Vendor Name <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        className="w-full px-4 py-1.5 bg-white bg-opacity-70 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500 transition-all duration-300 placeholder-gray-500 shadow-sm hover:shadow-md"
                        placeholder="Your Name"
                      />
                      <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none top-6">
                        <svg
                          className="h-5 w-5 text-gray-400"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                          />
                        </svg>
                      </div>
                    </div>

                    {/* Contact Person Name */}
                    <div className="relative">
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Contact Person Name{" "}
                        <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        className="w-full px-4 py-1.5 bg-white bg-opacity-70 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500 transition-all duration-300 placeholder-gray-500 shadow-sm hover:shadow-md"
                        placeholder="Your Name"
                      />
                      <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none top-6">
                        <svg
                          className="h-5 w-5 text-gray-400"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                          />
                        </svg>
                      </div>
                    </div>

                    {/* Email */}
                    <div className="relative">
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Email <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="email"
                        className="w-full px-4 py-1.5 bg-white bg-opacity-70 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500 transition-all duration-300 placeholder-gray-500 shadow-sm hover:shadow-md"
                        placeholder="Your Email"
                      />
                      <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none top-6">
                        <svg
                          className="h-5 w-5 text-gray-400"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                          />
                        </svg>
                      </div>
                    </div>

                    {/* Mobile Number */}
                    <div className="relative">
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Mobile Number <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="tel"
                        className="w-full px-4 py-1.5 bg-white bg-opacity-70 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500 transition-all duration-300 placeholder-gray-500 shadow-sm hover:shadow-md"
                        placeholder="+91 (___) ___-____"
                      />
                      <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none top-6">
                        <svg
                          className="h-5 w-5 text-gray-400"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                          />
                        </svg>
                      </div>
                    </div>

                    {/* Vehicle Type */}
                    <div className="relative">
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        No. of vehicle available{" "}
                        <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        className="w-full px-4 py-1.5 bg-white bg-opacity-70 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500 transition-all duration-300 placeholder-gray-500 shadow-sm hover:shadow-md"
                        placeholder="Vehicle Name"
                      />
                      <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none top-6">
                        <svg
                          className="h-5 w-5 text-gray-400"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                          />
                        </svg>
                      </div>
                    </div>

                    {/* Vehicle Type dropdown */}
                    <div className="relative">
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Vehicle Types <span className="text-red-500">*</span>
                      </label>
                      <select className="w-full px-4 py-1.5 bg-white bg-opacity-70 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500 transition-all duration-300 appearance-none shadow-sm hover:shadow-md">
                        <option value="">Select driver option</option>
                        <option value="with_driver">Sedan</option>
                        <option value="without_driver">SUV</option>
                        <option value="without_driver">Premium</option>
                        <option value="without_driver">Luxury</option>
                        <option value="without_driver">Bus</option>
                        <option value="without_driver">E - Vehicle</option>
                      </select>
                      <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none top-7">
                        <svg
                          className="h-5 w-5 text-gray-400"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M19 9l-7 7-7-7"
                          />
                        </svg>
                      </div>
                    </div>

                    {/* Vehicl Ownership */}
                    <div className="relative">
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Vehicle Ownership{" "}
                        <span className="text-red-500">*</span>
                      </label>
                      <select className="w-full px-4 py-1.5 bg-white bg-opacity-70 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500 transition-all duration-300 appearance-none shadow-sm hover:shadow-md">
                        <option value="">Select Ownership </option>
                        <option value="with_driver">Owned</option>
                        <option value="without_driver">
                          Attached (Market Vehicle)
                        </option>
                      </select>
                      <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none top-7">
                        <svg
                          className="h-5 w-5 text-gray-400"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M19 9l-7 7-7-7"
                          />
                        </svg>
                      </div>
                    </div>

                    {/* Driver Availability */}
                    <div className="relative">
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Driver Availability{" "}
                        <span className="text-red-500">*</span>
                      </label>
                      <select className="w-full px-4 py-1.5 bg-white bg-opacity-70 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500 transition-all duration-300 appearance-none shadow-sm hover:shadow-md">
                        <option value="">Select driver option</option>
                        <option value="with_driver">With Driver</option>
                        <option value="without_driver">Without Driver</option>
                      </select>
                      <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none top-7">
                        <svg
                          className="h-5 w-5 text-gray-400"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M19 9l-7 7-7-7"
                          />
                        </svg>
                      </div>
                    </div>

                    {/* City */}
                    <div className="relative">
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        City <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        className="w-full px-4 py-1.5 bg-white bg-opacity-70 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500 transition-all duration-300 placeholder-gray-500 shadow-sm hover:shadow-md"
                        placeholder="Your City"
                      />
                      <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none top-5">
                        <svg
                          className="h-5 w-5 text-gray-400"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                          />
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                          />
                        </svg>
                      </div>
                    </div>

                    {/* Address */}
                    <div className="relative">
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Address <span className="text-red-500">*</span>
                      </label>
                      <input
                        className="w-full px-4 py-1.5 bg-white bg-opacity-70 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500 transition-all duration-300 placeholder-gray-500 shadow-sm hover:shadow-md"
                        placeholder="Address"
                        // rows={1}
                      />
                      <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none top-5">
                        <svg
                          className="h-5 w-5 text-gray-400"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                          />
                        </svg>
                      </div>
                    </div>
                  </div>

                  {/* Submit Button */}
                  <div className="flex justify-center">
                    <button className="cursor-pointer btn-shadow-red ">
                      Submit Enquiry
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PartnerWithUs;