"use client";

import React, { useEffect, useRef, useState } from "react";
import { Car, ChevronDown, Sparkles, X } from "lucide-react";
import BlurText from "./BlurText";

const BookRideForm = () => {
  const [selectedVehicle, setSelectedVehicle] = useState("");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

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
    <div className="relative">
      {/* Floating Card */}
      <div className="relative bg-white/10 backdrop-blur-2xl rounded-2xl p-4 border border-white/60 shadow-2xl shadow-red-500/40 max-w-md mx-auto">
        <div className="space-y-4">
          <div className="flex items-center gap-3">
            <div className="bg-red-600 p-2 rounded-full">
              <Car className="w-7 h-7 text-white" />
            </div>
            <div>
              <h3 className="text-sm font-semibold tracking-wide text-white">
                Book a Ride
              </h3>
              <BlurText
                text="Economical | Efficient | Dependable"
                delay={200}
                animateBy="words"
                direction="down"
                className="text-white/70 text-xs font-medium"
              />
              {/* <p className="text-white/70 text-xs font-medium">
                Economical | Efficient | Dependable
              </p> */}
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
                        selectedVehicle ? "text-white" : "text-gray-400"
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
  );
};

const BookRideModal = ({ show, onClose }) => {
  if (!show) return null;

  return (
    <>
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/50 backdrop-blur-lg z-40"
        onClick={onClose}
      />

      {/* Modal */}
      <div className="fixed inset-0 flex items-center justify-center z-50">
        <div className="relative">
          {/* Close Button - now positioned at the modal level */}
          <button
            onClick={onClose}
            className="absolute -right-2 -top-2 z-50 bg-red-600/80 hover:bg-red-600 text-white rounded-full p-1 transition-colors duration-200 cursor-pointer"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
          <BookRideForm />
        </div>
      </div>
    </>
  );
};
export default BookRideModal;