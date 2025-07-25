import React from "react";
import { MarqueeDemo } from "./ui/Marquee";
import MagnifierCursor from "./MagnifierCursor";

const Testimonials = () => {

    const text = "What Our Premium Clients Say";

  return (
    <div className="relative pt-16 overflow-hidden">
      {/* Premium Header Section */}
      <div className="relative z-10 text-center">
        {/* Luxury Badge */}
        <p className="text-red-500 font-medium tracking-widest mb-6 text-sm uppercase">
          Client Excellence
        </p>

        {/* Main Heading */}
        <h2 className="text-5xl md:text-4xl font-bold mb-4 font-serif text-gray-800">
          <MagnifierCursor text={text} cursorSize={50} />
        </h2>

        {/* Subtitle */}
        <p className="text-xl text-red-500 max-w-3xl mx-auto leading-relaxed font-medium">
          <span className="italic font-serif">
            {" "}
            Where luxury meets legacy — a statement of distinction.
          </span>
          <span className="text-black font-light">
            {" "}
            Discover why our esteemed clientele entrust{" "}
            <span className="text-red-500 font-medium font-serif tracking-wide italic">
              ECRS
            </span>{" "}
            with their most sophisticated journeys.
          </span>
        </p>
      </div>

      {/* Premium Stats Section */}
      {/* <div className="relative z-10 mt-10 mb-6">
        <div className="max-w-4xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { number: "10K+", label: "Satisfied Clients", icon: "⭐" },
              { number: "98%", label: "Client Retention", icon: "🏆" },
              { number: "500+", label: "Corporate Clients", icon: "💎" },
            ].map((stat, index) => (
              <div key={index} className="text-center group">
                <div className="p-2">
                  <div className="text-lg mb-2">{stat.icon}</div>
                  <div className="text-xl font-bold text-red-600 mb-1">
                    {stat.number}
                  </div>
                  <div className="text-gray-600 text-xs font-semibold tracking-wide leading-relaxed">{stat.label}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div> */}

      {/* Main Marquee Container */}
      <div className="max-w-7xl mx-auto px-4 py-6">
        {/* Marquee Content */}
        <div className="p-6">
          <MarqueeDemo />
        </div>
      </div>
      {/* Decorative Elements */}
      {/* <div className="flex items-center justify-center mt-6 space-x-4 mb-2">
        <div className="h-px bg-gradient-to-r from-transparent via-red-500 to-transparent w-48" />
        <div className="w-3 h-3 border-2 border-red-500 rotate-45 bg-white" />
        <div className="h-px bg-gradient-to-r from-transparent via-red-500 to-transparent w-48" />
      </div> */}
    </div>
  );
};

export default Testimonials;