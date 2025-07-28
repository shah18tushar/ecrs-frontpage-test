import React, { useState, useEffect } from "react";
import {
  Users,
  MapPin,
  Clock,
  Award,
  Car,
} from "lucide-react";
import MagnifierCursor from "../MagnifierCursor";

const CareersBanner = () => {
  const [animatedNumbers, setAnimatedNumbers] = useState({
    positions: 0,
    employees: 0,
  });

  useEffect(() => {
    const animateNumbers = () => {
      const positionsTarget = 15;
      const employeesTarget = 500;

      let positionsCount = 0;
      let employeesCount = 0;

      const interval = setInterval(() => {
        if (positionsCount < positionsTarget) {
          positionsCount++;
          setAnimatedNumbers((prev) => ({
            ...prev,
            positions: positionsCount,
          }));
        }
        if (employeesCount < employeesTarget) {
          employeesCount += 10;
          setAnimatedNumbers((prev) => ({
            ...prev,
            employees: employeesCount,
          }));
        }

        if (
          positionsCount >= positionsTarget &&
          employeesCount >= employeesTarget
        ) {
          clearInterval(interval);
        }
      }, 80);
    };

    animateNumbers();
  }, []);

      const text = "Accelerate Your Career Path";
      const text1 = "With ECRS’s Visionary Team Culture";


  return (
    <div className="relative overflow-hidden transition-all duration-500 ease-out">
      {/* Main Banner Container */}
      <div className="relative bg-gradient-to-r from-red-500 via-red-400 to-red-400 mx-4 rounded-3xl shadow-2xl border border-red-300/20">
        {/* Content Container */}
        <div className="relative p-8 md:p-8">
          {/* Main Content */}
          <div className="grid lg:grid-cols-3 gap-8 items-center">
            {/* Left Content - Main Message */}
            <div className="lg:col-span-2">
              {/* Main Heading */}
              <h1 className="text-3xl md:text-4xl lg:text-3xl font-bold font-serif text-white mb-6 tracking-wide">
                <MagnifierCursor text={text} cursorSize={45} />
                <br />
                <span className="text-white">
                  <MagnifierCursor text={text1} cursorSize={45} />
                </span>
              </h1>

              {/* Subtext */}
              <p className="text-red-50/90 text-lg md:text-xl mb-8 font-medium max-w-2xl leading-relaxed">
                Join India's fastest-growing car rental company and accelerate
                your professional journey with unlimited opportunities.
              </p>

              {/* Key Benefits */}
              <div className="grid sm:grid-cols-2 gap-4 mb-8">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-white/20 rounded-lg flex items-center justify-center">
                    <Award className="w-4 h-4 text-white" />
                  </div>
                  <span className="text-white font-medium">
                    Competitive Packages
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-white/20 rounded-lg flex items-center justify-center">
                    <Users className="w-4 h-4 text-white" />
                  </div>
                  <span className="text-white font-medium">
                    Growth Opportunities
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-white/20 rounded-lg flex items-center justify-center">
                    <MapPin className="w-4 h-4 text-white" />
                  </div>
                  <span className="text-white font-medium">
                    Pan-India Locations
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-white/20 rounded-lg flex items-center justify-center">
                    <Clock className="w-4 h-4 text-white" />
                  </div>
                  <span className="text-white font-medium">
                    Flexible Work Culture
                  </span>
                </div>
              </div>

              <div className="text-white/80 text-sm mt-10 font-medium">
                📍 Hiring across Mumbai, Delhi, Bangalore, Pune & 15+ cities
              </div>
            </div>

            {/* Right Content - Stats & Info */}
            <div className="lg:col-span-1">
              <div className="bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 p-6">
                {/* Company Stats */}
                <div className="text-center mb-3">
                  <div className="text-4xl font-bold text-white mb-2 font-serif">
                    {animatedNumbers.employees}+
                  </div>
                  <div className="text-red-100 font-medium">Team Members</div>
                </div>

                {/* Departments Hiring */}
                <div className="space-y-3">
                  <h3 className="text-white font-semibold text-lg mb-2">
                    Departments Hiring:
                  </h3>

                  <div className="flex items-center justify-between py-2 px-3 bg-white/10 rounded-lg">
                    <span className="text-white font-medium">Operations</span>
                    <span className="text-green-300 text-sm font-semibold">
                      5 Positions
                    </span>
                  </div>

                  <div className="flex items-center justify-between py-2 px-3 bg-white/10 rounded-lg">
                    <span className="text-white font-medium">
                      Sales & Marketing
                    </span>
                    <span className="text-green-300 text-sm font-semibold">
                      4 Positions
                    </span>
                  </div>

                  <div className="flex items-center justify-between py-2 px-3 bg-white/10 rounded-lg">
                    <span className="text-white font-medium">Technology</span>
                    <span className="text-green-300 text-sm font-semibold">
                      3 Positions
                    </span>
                  </div>

                  <div className="flex items-center justify-between py-2 px-3 bg-white/10 rounded-lg">
                    <span className="text-white font-medium">
                      Customer Service
                    </span>
                    <span className="text-green-300 text-sm font-semibold">
                      3 Positions
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Luxury Corner Accents */}
        <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-white/50 to-transparent rounded-bl-full rounded-tr-3xl"></div>
      </div>
    </div>
  );
};

export default CareersBanner;