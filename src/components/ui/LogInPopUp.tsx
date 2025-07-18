'use client';

import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

interface LoginPopupProps {
  onClose: () => void;
}

const LogInPopUp = ({ onClose }: LoginPopupProps) => {
  const loginOptions = [
    { role: "User", icon: "👤" },
    { role: "Guest", icon: "👋" },
    { role: "Vendor", icon: "🏢" },
    { role: "Driver", icon: "🚗" },
    { role: "Corp-Admin", icon: "👔" },
  ];

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/30 backdrop-blur-sm"
          onClick={onClose}
        />

        {/* Popup */}
        <motion.div
          initial={{ scale: 0.95, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.95, opacity: 0 }}
          transition={{ type: "spring", damping: 25, stiffness: 400 }}
          className="relative z-10 w-full max-w-sm"
        >
          <div className="relative bg-white rounded-xl overflow-hidden shadow-xl border border-gray-100">
            {/* Header */}
            <div className="bg-gradient-to-r from-red-500 to-red-600 px-6 py-4 text-white/90">
              <div className="flex justify-between items-center">
                <h2 className="text-base font-semibold tracking-wide">ECRS PORTAL</h2>
                <button
                  onClick={onClose}
                  className="p-1 rounded-full hover:bg-white/20 transition-colors focus:outline-none focus:ring-2 focus:ring-white/50 cursor-pointer"
                  aria-label="Close login popup"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>
            </div>

            {/* Content */}
            <div className="py-2">
              <div className="relative h-80 w-full flex flex-col">
                {/* Central "Log In As" text */}
                <motion.div 
                  initial={{ scale: 0.9 }}
                  animate={{ scale: 1 }}
                  className=" text-center"
                >
                  <div className="text-base font-medium text-gray-800 mb-1">Please Select Your Login Role</div>
                   <div className="w-28 h-0.5 bg-gradient-to-r from-transparent via-red-500 to-transparent mx-auto"></div>
                </motion.div>

                {/* Circular role buttons */}
                <div className="relative w-64 h-64">
                  {loginOptions.map((option, index) => {
                    const angle = (index * 72) * (Math.PI / 180);
                    const radius = 100;
                    const x = Math.sin(angle) * radius;
                    const y = -Math.cos(angle) * radius;
                    
                    return (
                      <motion.button
                        key={option.role}
                        initial={{ opacity: 0, x: 0, y: 0 }}
                        animate={{ opacity: 1, x, y }}
                        transition={{ 
                          delay: index * 0.1, 
                          type: "spring", 
                          stiffness: 300 
                        }}
                        className={`absolute ml-6 left-1/2 top-1/2 flex flex-col items-center justify-center w-20 h-20 rounded-full border-[1px] border-gray-200 bg-white shadow-sm cursor-pointer
                          hover:border-red-400 hover:bg-red-50 hover:shadow-2xl transition-all duration-300`}
                        style={{
                          transform: `translate(calc(-50% + ${x}px), calc(-50% + ${y}px))`,
                        }}
                      >
                        <span className="text-xl mb-1">{option.icon}</span>
                        <span className="text-xs font-medium text-gray-700 group-hover:text-red-600">
                          {option.role}
                        </span>
                      </motion.button>
                    );
                  })}
                </div>
              </div>

              <div className="mt-4 mb-2">
                <p className="text-center text-sm text-gray-600">
                  Need help?{" "}
                  <button className="font-medium text-red-600 hover:text-red-700 hover:underline">
                    Contact support
                  </button>
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};

export default LogInPopUp;