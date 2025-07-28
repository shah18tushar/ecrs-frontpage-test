// "use client";

// import React from "react";
// import { motion } from "framer-motion";
// import { useInView } from "react-intersection-observer";
// import { Smartphone, Download } from "lucide-react";

// export default function AppInfo() {
//   const apps = [
//     { platform: "Android", type: "Driver App" },
//     { platform: "iOS", type: "Driver App" },
//     { platform: "Android", type: "End User App" },
//     { platform: "iOS", type: "End User App" },
//     { platform: "Android", type: "Vendor App" },
//     { platform: "iOS", type: "Vendor App" },
//   ];

//   const { ref: sectionRef, inView } = useInView({
//     triggerOnce: true,
//     threshold: 0.2,
//   });

//   const isMobileOrTablet = window.matchMedia("(max-width: 1024px)").matches;

//   return (
//     <section ref={sectionRef} className="py-10">
//       <div className="container mx-auto px-4">
//         <div className="flex flex-col lg:flex-row">
//           {/* Left Section: Heading and Description */}
//           <motion.div
//             className="flex-1 text-center"
//             initial={isMobileOrTablet ? {} : { opacity: 0, x: -50 }}
//             animate={isMobileOrTablet ? {} : inView ? { opacity: 1, x: 0 } : {}}
//             transition={{ duration: 0.6, ease: "easeInOut" }}
//           >
//             <h1 className="text-2xl md:text-2xl font-serif font-bold mb-4 text-red-500">
//               ECRS Mobile Applications
//             </h1>
//             <p className="text-gray-600 text-sm md:text-base leading-relaxed mb-6">
//               Download our mobile apps for seamless car rental experience.
//               Available for drivers, customers, and vendors on both Android and
//               iOS platforms.
//             </p>

//             <div className="flex justify-center items-center">
//               <div
//                 id="app-list"
//                 className="mb-8 grid grid-cols-1 md:grid-cols-2 gap-x-8"
//               >
//                 {apps.map((app, index) => (
//                   <motion.div
//                     key={index}
//                     className="flex items-center mb-3 justify-center lg:justify-start"
//                     initial={isMobileOrTablet ? {} : { opacity: 0, x: -20 }}
//                     animate={
//                       isMobileOrTablet ? {} : inView ? { opacity: 1, x: 0 } : {}
//                     }
//                     transition={{ delay: 0.1 * index, duration: 0.5 }}
//                   >
//                     <Smartphone className="text-red-500 mr-3 w-5 h-5" />
//                     <span className="text-gray-700 text-sm md:text-base font-medium">
//                       {app.platform} {app.type}
//                     </span>
//                   </motion.div>
//                 ))}
//               </div>
//             </div>

//             <div className="flex gap-4 flex-wrap justify-center">
//               <a href="#" target="_blank" rel="noopener noreferrer">
//                 <motion.img
//                   src="/img2.jpg"
//                   alt="Get on Google Play"
//                   className="h-12"
//                   whileHover={{ scale: 1.05 }}
//                   transition={{ duration: 0.3 }}
//                 />
//               </a>
//               <a href="#" target="_blank" rel="noopener noreferrer">
//                 <motion.img
//                   src="/img3.jpg"
//                   alt="Download on the App Store"
//                   className="h-12"
//                   whileHover={{ scale: 1.05 }}
//                   transition={{ duration: 0.3 }}
//                 />
//               </a>
//             </div>
//           </motion.div>

//           {/* Right Section: Image */}
//           <motion.div
//             className="flex-1"
//             initial={isMobileOrTablet ? {} : { opacity: 0, x: 50 }}
//             animate={isMobileOrTablet ? {} : inView ? { opacity: 1, x: 0 } : {}}
//             transition={{ duration: 0.6, ease: "easeInOut" }}
//           >
//             <div className="relative group">
//               <motion.img
//                 src="/app.jpg" // Keep your existing image path here
//                 alt="ECRS Mobile Apps"
//                 className="w-full h-[20rem] object-contain"
//                 whileHover={{ scale: 1.02 }}
//                 transition={{ duration: 0.3 }}
//               />
//             </div>
//           </motion.div>
//         </div>
//       </div>
//     </section>
//   );
// }
    


"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Smartphone, Download, X } from "lucide-react";

export default function AppInfo() {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedApp, setSelectedApp] = useState(null);

  const apps = [
    { platform: "Android", type: "Driver App" },
    { platform: "iOS", type: "Driver App" },
    { platform: "Android", type: "End User App" },
    { platform: "iOS", type: "End User App" },
    { platform: "Android", type: "Vendor App" },
    { platform: "iOS", type: "Vendor App" },
  ];

  const appLinks = {
    android: {
      driver: "https://play.google.com/store/apps/details?id=com.ecrs.driver",
      user: "https://play.google.com/store/apps/details?id=com.ecrs.user",
      vendor: "https://play.google.com/store/apps/details?id=com.ecrs.vendor",
    },
    ios: {
      driver: "https://apps.apple.com/us/app/ecrs-driver/id123456789",
      user: "https://apps.apple.com/us/app/ecrs-user/id987654321",
      vendor: "https://apps.apple.com/us/app/ecrs-vendor/id567891234",
    },
  };

  const { ref: sectionRef, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const isMobileOrTablet =
    typeof window !== "undefined"
      ? window.matchMedia("(max-width: 1024px)").matches
      : false;

 const openModal = (appType) => {
   setSelectedApp(appType);
   setModalOpen(true);
 };

  const closeModal = () => {
    setModalOpen(false);
    setSelectedApp(null);
  };

  return (
    <section ref={sectionRef} className="py-10 relative">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row">
          {/* Left Section: Heading and Description */}
          <motion.div
            className="flex-1 text-center"
            initial={isMobileOrTablet ? {} : { opacity: 0, x: -50 }}
            animate={isMobileOrTablet ? {} : inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, ease: "easeInOut" }}
          >
            <h1 className="text-2xl md:text-2xl font-serif font-bold mb-4 text-red-500">
              ECRS Mobile Applications
            </h1>
            <p className="text-gray-600 text-sm md:text-base leading-relaxed mb-6">
              Download our mobile apps for seamless car rental experience.
              Available for drivers, customers, and vendors on both Android and
              iOS platforms.
            </p>

            <div className="flex justify-center items-center">
              <div
                id="app-list"
                className="mb-8 grid grid-cols-1 md:grid-cols-2 gap-x-8"
              >
                {apps.map((app, index) => (
                  <motion.div
                    key={index}
                    className="flex items-center mb-3 justify-center lg:justify-start"
                    initial={isMobileOrTablet ? {} : { opacity: 0, x: -20 }}
                    animate={
                      isMobileOrTablet ? {} : inView ? { opacity: 1, x: 0 } : {}
                    }
                    transition={{ delay: 0.1 * index, duration: 0.5 }}
                  >
                    <Smartphone className="text-red-500 mr-3 w-5 h-5" />
                    <span className="text-gray-700 text-sm md:text-base font-medium">
                      {app.platform} {app.type}
                    </span>
                  </motion.div>
                ))}
              </div>
            </div>

            <div className="flex gap-4 flex-wrap justify-center">
              <motion.button
                onClick={() => openModal("android")}
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
                className="focus:outline-none"
              >
                <img
                  src="/img2.jpg"
                  alt="Get on Google Play"
                  className="h-12"
                />
              </motion.button>
              <motion.button
                onClick={() => openModal("ios")}
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
                className="focus:outline-none"
              >
                <img
                  src="/img3.jpg"
                  alt="Download on the App Store"
                  className="h-12"
                />
              </motion.button>
            </div>
          </motion.div>

          {/* Right Section: Image */}
          <motion.div
            className="flex-1"
            initial={isMobileOrTablet ? {} : { opacity: 0, x: 50 }}
            animate={isMobileOrTablet ? {} : inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, ease: "easeInOut" }}
          >
            <div className="relative group">
              <motion.img
                src="/app.jpg"
                alt="ECRS Mobile Apps"
                className="w-full h-[20rem] object-contain"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              />
            </div>
          </motion.div>
        </div>
      </div>

      {/* Modal */}
      {modalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            className="bg-white rounded-lg p-6 max-w-md w-full max-h-[90vh] overflow-y-auto"
          >
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-bold text-red-500">
                {selectedApp === "android"
                  ? "Google Play Store"
                  : "Apple App Store"}{" "}
                Downloads
              </h2>
              <button
                onClick={closeModal}
                className="text-gray-500 hover:text-gray-700"
              >
                <X size={24} />
              </button>
            </div>

            <div className="space-y-6">
              <div className="border-b pb-4">
                <h3 className="font-semibold mb-2">Driver App</h3>
                <div className="flex flex-col md:flex-row items-center gap-4">
                  <div className="flex-1">
                    <a
                      href={
                        selectedApp === "android"
                          ? appLinks.android.driver
                          : appLinks.ios.driver
                      }
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center text-blue-600 hover:underline"
                    >
                      <Download className="mr-2" size={16} />
                      Download Driver App
                    </a>
                  </div>
                  <div className="bg-gray-100 p-2 rounded">
                    <img
                      src={
                        selectedApp === "android"
                          ? "QR.png"
                          : "/QR.png"
                      }
                      alt="Driver App QR Code"
                      className="w-24 h-24"
                    />
                  </div>
                </div>
              </div>

              <div className="border-b pb-4">
                <h3 className="font-semibold mb-2">End User App</h3>
                <div className="flex flex-col md:flex-row items-center gap-4">
                  <div className="flex-1">
                    <a
                      href={
                        selectedApp === "android"
                          ? appLinks.android.user
                          : appLinks.ios.user
                      }
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center text-blue-600 hover:underline"
                    >
                      <Download className="mr-2" size={16} />
                      Download User App
                    </a>
                  </div>
                  <div className="bg-gray-100 p-2 rounded">
                    <img
                      src={
                        selectedApp === "android"
                          ? "/android-user-qr.png"
                          : "/ios-user-qr.png"
                      }
                      alt="User App QR Code"
                      className="w-24 h-24"
                    />
                  </div>
                </div>
              </div>

              <div>
                <h3 className="font-semibold mb-2">Vendor App</h3>
                <div className="flex flex-col md:flex-row items-center gap-4">
                  <div className="flex-1">
                    <a
                      href={
                        selectedApp === "android"
                          ? appLinks.android.vendor
                          : appLinks.ios.vendor
                      }
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center text-blue-600 hover:underline"
                    >
                      <Download className="mr-2" size={16} />
                      Download Vendor App
                    </a>
                  </div>
                  <div className="bg-gray-100 p-2 rounded">
                    <img
                      src={
                        selectedApp === "android"
                          ? "/android-vendor-qr.png"
                          : "/ios-vendor-qr.png"
                      }
                      alt="Vendor App QR Code"
                      className="w-24 h-24"
                    />
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </section>
  );
}