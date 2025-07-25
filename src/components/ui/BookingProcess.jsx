"use client";

import React, { useState } from "react";
import {
  Search,
  Calendar,
  CreditCard,
  CheckCircle,
  Smartphone,
  Laptop,
  Monitor,
  Download,
  Globe,
  ArrowRight,
  ShieldAlert,
} from "lucide-react";

import MagnifierCursor from "@/components/MagnifierCursor";
import { motion } from "framer-motion";
import Link from "next/link";



const BookingProcess = () => {
  const [activeTab, setActiveTab] = useState("mobile");
  const [hoveredStep, setHoveredStep] = useState(null);

  const mobileSteps = [
    {
      id: 1,
      title: "Download & Open App",
      description:
        "Download our exclusive luxury car app from the App Store or Google Play. Experience a sleek, intuitive interface designed for effortless, high-end bookings on the go.",
      icon: Smartphone,
      image:
        "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&h=600&fit=crop&crop=center",
    },
    {
      id: 2,
      title: "Search on Mobile",
      description:
        "Our concierge-level search helps you find the perfect vehicle with elegant filters and premium recommendations.",
      icon: Search,
      image:
        "https://images.unsplash.com/photo-1551650975-87deedd944c3?w=800&h=600&fit=crop&crop=center",
    },
    {
      id: 3,
      title: "Select Dates & Times",
      description:
        "Our gold-standard calendar interface makes scheduling your luxury experience effortless and precise.",
      icon: Calendar,
      image:
        "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=800&h=600&fit=crop&crop=center",
    },
    {
      id: 4,
      title: "Mobile Payment",
      description:
        "Platinum-level security with fingerprint/face ID verification for your peace of mind.",
      icon: CreditCard,
      image:
        "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800&h=600&fit=crop&crop=center",
    },
    {
      id: 5,
      title: "Mobile Check-in",
      description:
        "VIP digital key access with personalized welcome messages and premium support available 24/7.",
      icon: CheckCircle,
      image:
        "https://images.unsplash.com/photo-1559526324-4b87b5e36e44?w=800&h=600&fit=crop&crop=center",
    },
  ];

  const laptopSteps = [
    {
      id: 1,
      title: "Visit Our Website",
      description:
        "Our elite web portal offers unparalleled access to our luxury fleet with crystal-clear imagery and specifications.",
      icon: Monitor,
      image:
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop&crop=center",
    },
    {
      id: 2,
      title: "Advanced Search",
      description:
        "Executive-level search tools with side-by-side comparison of premium vehicles and concierge chat support.",
      icon: Search,
      image:
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop&crop=center",
    },
    {
      id: 3,
      title: "Detailed Planning",
      description:
        "First-class itinerary planning with our premium calendar and route optimization for your luxury experience.",
      icon: Calendar,
      image:
        "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=800&h=600&fit=crop&crop=center",
    },
    {
      id: 4,
      title: "Secure Desktop Payment",
      description:
        "Bank-level encryption with multiple currency support for our international clientele.",
      icon: CreditCard,
      image:
        "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=600&fit=crop&crop=center",
    },
    {
      id: 5,
      title: "Digital Documentation",
      description:
        "Elegant digital contracts with e-signature support and personal account manager assignment.",
      icon: CheckCircle,
      image:
        "https://images.unsplash.com/photo-1586953208448-b95a79798f07?w=800&h=600&fit=crop&crop=center",
    },
  ];

  const currentSteps = activeTab === "mobile" ? mobileSteps : laptopSteps;

      const text = "Car Booking Procedure";


  return (
    <div className="">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        {/* Premium Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-4xl font-bold text-gray-700 mb-3 font-serif tracking-wide">
            <MagnifierCursor text={text} cursorSize={45} />
          </h2>
          <p className="text-lg text-red-600 max-w-2xl font-light italic tracking-wide mx-auto leading-relaxed">
            Book your luxury car effortlessly via mobile or laptop—anytime,
            anywhere—with a seamless, secure, and premium booking experience.
          </p>
        </div>

        {/* Luxury Platform Toggle */}
        <div className="flex justify-center mb-10">
          <div className="bg-white rounded-full shadow-lg border border-gray-100">
            <div className="flex space-x-1">
              <button
                onClick={() => setActiveTab("mobile")}
                className={`flex items-center space-x-3 px-8 py-4 rounded-full font-medium transition-all duration-300 ${
                  activeTab === "mobile"
                    ? "bg-red-500 text-white shadow-lg"
                    : "bg-transparent text-gray-600 hover:bg-gray-50"
                }`}
              >
                <Smartphone className="w-5 h-5" />
                <span>Mobile App</span>
              </button>
              <button
                onClick={() => setActiveTab("laptop")}
                className={`flex items-center space-x-3 px-8 py-4 rounded-full font-medium transition-all duration-300 ${
                  activeTab === "laptop"
                    ? "bg-red-500 text-white shadow-lg"
                    : "bg-transparent text-gray-600 hover:bg-gray-50"
                }`}
              >
                <Laptop className="w-5 h-5" />
                <span>Desktop Experience</span>
              </button>
            </div>
          </div>
        </div>

        {/* Luxury Platform Description */}
        {/* <div className="text-center mb-20" key={activeTab}>
          <div className="max-w-4xl mx-auto">
            {activeTab === "mobile" ? (
              <div className="bg-white p-8 rounded-xl border border-gray-200 shadow-sm">
                <div className="flex flex-col items-center">
                  <div className="w-20 h-20 bg-red-100 rounded-full flex items-center justify-center mb-6">
                    <Smartphone className="w-10 h-10 text-red-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4 font-serif">
                    Premium Mobile Experience
                  </h3>
                  <p className="text-gray-600 max-w-2xl leading-relaxed">
                    Our award-winning mobile app delivers white-glove service
                    with biometric authentication, real-time concierge support,
                    and exclusive mobile-only benefits for our valued clients.
                  </p>
                </div>
              </div>
            ) : (
              <div className="bg-white p-8 rounded-xl border border-gray-200 shadow-sm">
                <div className="flex flex-col items-center">
                  <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mb-6">
                    <Monitor className="w-10 h-10 text-blue-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4 font-serif">
                    Executive Desktop Experience
                  </h3>
                  <p className="text-gray-600 max-w-2xl leading-relaxed">
                    Our desktop portal offers unparalleled access to our full
                    luxury fleet with high-resolution imagery, detailed
                    specifications, and exclusive booking perks for discerning
                    clients.
                  </p>
                </div>
              </div>
            )}
          </div>
        </div> */}

        {/* Luxury Process Cards */}
        <div className="space-y-8 lg:space-y-12">
          {currentSteps.map((step, index) => (
            <div
              key={`${activeTab}-${step.id}`}
              className={`transition-all duration-300 ${
                hoveredStep === step.id ? "" : ""
              }`}
              onMouseEnter={() => setHoveredStep(step.id)}
              onMouseLeave={() => setHoveredStep(null)}
            >
              <div
                className={`bg-white rounded-xl shadow-md overflow-hidden border border-gray-100 transition-all duration-300 ${
                  hoveredStep === step.id ? "shadow-xl border-red-100" : ""
                }`}
              >
                <div className="flex flex-col lg:flex-row">
                  {/* Content Section */}
                  <div className="flex-1 p-10 lg:p-12">
                    <div className="flex items-start space-x-6">
                      {/* Content */}
                      <div className="flex-1">
                        <div className="flex items-center space-x-4 mb-6">
                          <div className="">
                            <step.icon className="w-8 h-8 text-red-600" />
                          </div>
                          <h3 className="text-2xl lg:text-xl font-medium text-gray-900">
                            {step.title}
                          </h3>
                        </div>
                        <p className="text-gray-600 text-lg font-medium leading-relaxed mb-6">
                          {step.description}
                        </p>

                        {/* Platform Badge */}
                        <div className="flex items-center space-x-4">
                          {/* <span
                            className={`inline-flex items-center px-4 py-2 rounded-full text-sm font-medium ${
                              activeTab === "mobile"
                                ? "bg-green-50 text-green-800 border border-green-100"
                                : "bg-blue-50 text-blue-800 border border-blue-100"
                            }`}
                          >
                            {activeTab === "mobile" ? (
                              <>
                                <Smartphone className="w-4 h-4 mr-2" />
                                Mobile Exclusive
                              </>
                            ) : (
                              <>
                                <Monitor className="w-4 h-4 mr-2" />
                                Desktop Enhanced
                              </>
                            )}
                          </span> */}

                          {/* Progress Indicator */}
                          <div className="flex items-center space-x-2">
                            <div className="flex space-x-1">
                              {currentSteps.map((_, i) => (
                                <div
                                  key={i}
                                  className={`h-2 rounded-full transition-all duration-300 ${
                                    i <= index
                                      ? "bg-gradient-to-r from-red-600 to-red-800"
                                      : "bg-gray-200"
                                  }`}
                                  style={{
                                    width: i <= index ? "24px" : "12px",
                                  }}
                                />
                              ))}
                            </div>
                            <span className="text-sm text-gray-500">
                              Step {step.id} of {currentSteps.length}
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Image Section */}
                  <div className="lg:w-[28rem] h-64 lg:h-auto relative overflow-hidden border-l border-gray-100">
                    <img
                      src={step.image}
                      alt={step.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-l from-black/10 to-transparent" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="p-8">
          <div className="flex flex-col items-center">
            <div className="w-20 h-20 rounded-full flex items-center justify-center mb-0">
              <ShieldAlert className="w-10 h-10 text-red-600" />
            </div>
            <h3 className="text-3xl font-bold text-gray-700 mb-4 font-serif">
              For Emergency Requirement
            </h3>
            <p className="text-gray-600 max-w-2xl mx-auto text-center font-medium leading-relaxed">
              You can do the bookings through phone calls in emergency OR when
              you are out of office, for which we will send the approval request
              from our end.
            </p>
          </div>
        </div>

        {/* Luxury Call to Action */}
        <div className="text-center">
          <div className="mb-10">
            <p className="text-gray-600 max-w-2xl mx-auto">
              Choose your preferred booking method and enjoy our white-glove
              service
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">

            <button className="bg-red-500 text-white px-10 py-5 hover:scale-90 rounded-full font-semibold text-lg transition-all duration-300 shadow-lg hover:shadow-xl flex items-center space-x-3">
              <Download className="w-5 h-5" />
              <span>Download App</span>
              <ArrowRight className="w-5 h-5 ml-2" />
            </button>
            <button className="bg-gray-800 hover:scale-90 text-white px-10 py-5 rounded-full font-semibold text-lg transition-all duration-300 shadow-lg hover:shadow-xl flex items-center space-x-3">
              <Globe className="w-5 h-5" />
              <span>Book Online</span>
              <ArrowRight className="w-5 h-5 ml-2" />
            </button>
          </div>
          <p className="text-gray-500 mt-8 text-sm font-medium">
            VIP support available 24/7 for all our premium clients
          </p>
        </div>
      </div>
    </div>
  );
};

export default BookingProcess;