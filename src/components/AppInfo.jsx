"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Smartphone, Download, X } from "lucide-react";
import MagnifierCursor from "./MagnifierCursor";
import AppModal from "./ui/AppModal"

export default function AppInfo() {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedApp, setSelectedApp] = useState(null);

  const apps = [
    { platform: "Android", type: "End User App" },
    { platform: "Android", type: "Driver App" },
    { platform: "iOS", type: "Driver App" },
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

  const text = "Mobile Applications";

  return (
    <section ref={sectionRef} className="py-10 relative">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row">
          {/* Left Section: Heading and Description */}
          <motion.div
            className="flex-1 text-center"
            initial={isMobileOrTablet ? {} : { opacity: 0, x: -50 }}
            animate={isMobileOrTablet ? {} : inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 1, ease: "easeInOut" }}
          >
            <h1 className="text-2xl md:text-2xl font-serif font-bold mb-4 text-red-500">
              <MagnifierCursor text={text} cursorSize={33} />
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
                    transition={{ delay: 0.5 * index, duration: 2 }}
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
                className="focus:outline-none cursor-pointer"
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
                className="focus:outline-none cursor-pointer"
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
            transition={{ duration: 1, ease: "easeInOut" }}
          >
            <div className="relative group">
              <motion.img
                src="/app.jpg"
                alt="ECRS Mobile Apps"
                className="w-full h-[20rem] object-contain"
                transition={{ duration: 0.3 }}
              />
            </div>
          </motion.div>
        </div>
      </div>

      <AppModal
        modalOpen={modalOpen}
        closeModal={closeModal}
        selectedApp={selectedApp}
        appLinks={appLinks}
      />
    </section>
  );
}