"use client";

import React from "react";
import { motion } from "framer-motion";
import { Download, X } from "lucide-react";

const AppModal = ({ modalOpen, closeModal, selectedApp, appLinks }) => {
  if (!modalOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-md flex items-center justify-center z-50 p-4">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.9 }}
        className="bg-white rounded-xl shadow-2xl p-8 max-w-md w-full max-h-[90vh] overflow-y-auto border border-gray-100"
      >
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-lg font-semibold font-serif text-red-500">
            {selectedApp === "android"
              ? "Google Play Store"
              : "Apple App Store"}{" "}
          </h2>
          <button
            onClick={closeModal}
            className="text-red-500 hover:text-red-600 transition-colors duration-200 cursor-pointer"
          >
            <X size={20} />
          </button>
        </div>

        <div className="space-y-6">
          <div className="border-b border-gray-300 pb-5">
            <div className="flex flex-col md:flex-row items-center gap-5">
              <div className="flex-1">
                <h3 className="font-medium text-sm text-gray-700 mb-5 uppercase tracking-wider">
                  End User App
                </h3>
                <a
                  href={
                    selectedApp === "android"
                      ? appLinks.android.user
                      : appLinks.ios.user
                  }
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center text-sm text-gray-700 hover:text-gray-500 transition-colors duration-200 font-medium"
                >
                  <Download className="mr-2" size={14} />
                  Download User App
                </a>
              </div>
              <div className="bg-gray-50 p-1 rounded-lg border border-gray-800">
                <img
                  src={selectedApp === "android" ? "QR.png" : "/QR.png"}
                  alt="User App QR Code"
                  className="w-16 h-16 object-contain"
                />
              </div>
            </div>
          </div>
          <div className="border-b border-gray-300 pb-5">
            <div className="flex flex-col md:flex-row items-center gap-5">
              <div className="flex-1">
                <h3 className="font-medium text-sm text-gray-700 mb-5 uppercase tracking-wider">
                  Driver App
                </h3>
                <a
                  href={
                    selectedApp === "android"
                      ? appLinks.android.driver
                      : appLinks.ios.driver
                  }
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center text-sm text-gray-700 hover:text-gray-500 transition-colors duration-200 font-medium"
                >
                  <Download className="mr-2" size={14} />
                  Download Driver App
                </a>
              </div>
              <div className="bg-gray-50 p-1 rounded-lg border border-gray-800">
                <img
                  src={selectedApp === "android" ? "QR.png" : "/QR.png"}
                  alt="Driver App QR Code"
                  className="w-16 h-16 object-contain"
                />
              </div>
            </div>
          </div>

          <div className="pb-2">
            <div className="flex flex-col md:flex-row items-center gap-5">
              <div className="flex-1">
                <h3 className="font-medium text-sm text-gray-700 mb-5 uppercase tracking-wider">
                  Vendor App
                </h3>
                <a
                  href={
                    selectedApp === "android"
                      ? appLinks.android.vendor
                      : appLinks.ios.vendor
                  }
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center text-sm text-gray-700 hover:text-gray-500 transition-colors duration-200 font-medium"
                >
                  <Download className="mr-2" size={14} />
                  Download Vendor App
                </a>
              </div>
              <div className="bg-gray-50 p-1 rounded-lg border border-gray-800">
                <img
                  src={selectedApp === "android" ? "QR.png" : "/QR.png"}
                  alt="Vendor App QR Code"
                  className="w-16 h-16 object-contain"
                />
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};
export default AppModal;