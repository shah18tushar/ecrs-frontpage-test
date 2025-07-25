"use client";

import React from "react";
import Image from "next/image";

const packages = [
  {
    title: "Executive Plan",
    price: "₹55,000/month",
    image: "/executive.jpg",
    features: [
      "5 Sedan Rentals",
      "Driver Included",
      "24/7 Support",
      "Priority Booking",
    ],
    popular: false,
  },
  {
    title: "Premium Plan",
    price: "₹1,20,000/month",
    image: "/premium.jpg",
    features: [
      "5 Luxury SUVs",
      "Dedicated Driver",
      "Airport Transfers",
      "Weekly Car Swap",
    ],
    popular: true,
  },
  {
    title: "Elite Enterprise",
    price: "₹2,50,000/month",
    image: "/elite.jpg",
    features: [
      "10 Premium Cars",
      "Chauffeur Service",
      "Corporate Branding",
      "Full Concierge Support",
    ],
    popular: false,
  },
];

const CorporateMonthly = () => {
  return (
    <div className="pt-10">
      <section className="relative bg-gray-950 overflow-hidden max-w-7xl mx-auto">

        <div className="max-w-6xl mx-auto relative z-10 py-14 px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-24">
            <h2 className="text-5xl font-semibold mb-3 tracking-tight uppercase font-serif text-red-500">
              Corporate Monthly Packages
            </h2>
            <p className="max-w-2xl mx-auto text-xl text-gray-300 font-light">
              Elevate your business travel with our exclusive monthly car rental
              plans tailored for corporate excellence.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
            {packages.map((pkg, index) => (
              <div
                key={index}
                className={`relative group ${
                  pkg.popular ? "md:-mt-4 md:mb-4" : ""
                }`}
              >
                {/* Popular badge */}
                {pkg.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20">
                    <div className="bg-gradient-to-r from-red-600 to-red-800 text-white text-xs font-bold px-4 py-2 rounded-full shadow-lg uppercase tracking-wider">
                      Most Popular
                    </div>
                  </div>
                )}

                <div
                  className={`relative h-full bg-gradient-to-b from-gray-900 to-black rounded-xl overflow-hidden border ${
                    pkg.popular
                      ? "border-red-500 shadow-2xl shadow-red-900/50"
                      : "border-gray-800"
                  } transition-all duration-500 group-hover:shadow-xl group-hover:shadow-red-900/30`}
                >
                  {/* Gold/red accent line */}
                  <div
                    className={`h-1 w-full ${
                      pkg.popular
                        ? "bg-gradient-to-r from-red-500 via-red-600 to-red-700"
                        : "bg-gradient-to-r from-gray-700 via-gray-800 to-black"
                    }`}
                  ></div>

                  <div className="p-8">
                    <h3
                      className={`text-2xl font-bold mb-2 font-serif ${
                        pkg.popular ? "text-white" : "text-gray-300"
                      }`}
                    >
                      {pkg.title}
                    </h3>
                    <p
                      className={`text-3xl font-bold mb-6 ${
                        pkg.popular ? "text-red-400" : "text-gray-400"
                      }`}
                    >
                      {pkg.price}
                    </p>

                    <div className="mb-8">
                      <ul className="space-y-4">
                        {pkg.features.map((feature, i) => (
                          <li key={i} className="flex items-start">
                            <svg
                              className="flex-shrink-0 w-5 h-5 text-red-500 mt-0.5 mr-3"
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
                              ></path>
                            </svg>
                            <span className="text-gray-300 font-light">
                              {feature}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <button
                      className={`w-full py-4 px-6 rounded-lg font-medium transition-all duration-300 ${
                        pkg.popular
                          ? "bg-gradient-to-r from-red-600 to-red-800 hover:from-red-700 hover:to-red-900 shadow-lg hover:shadow-xl hover:shadow-red-900/30"
                          : "bg-gray-800 hover:bg-gray-700 border border-gray-700 hover:border-gray-600"
                      }`}
                    >
                      Get This Plan
                    </button>
                  </div>

                  {/* Luxury corner accents */}
                  <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-red-500 rounded-tl-lg"></div>
                  <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-red-500 rounded-tr-lg"></div>
                  <div className="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 border-red-500 rounded-bl-lg"></div>
                  <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-red-500 rounded-br-lg"></div>
                </div>
              </div>
            ))}
          </div>

          {/* Luxury disclaimer */}
          <div className="mt-8 text-center">
            <p className="text-gray-500 text-sm italic">
              * All packages include premium insurance coverage and 24/7
              concierge service.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CorporateMonthly;