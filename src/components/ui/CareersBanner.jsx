// import React, { useState, useEffect } from "react";
// import {
//   Users,
//   MapPin,
//   Clock,
//   Award,
//   Car,
// } from "lucide-react";
// import MagnifierCursor from "../MagnifierCursor";
// import BlurText from "./BlurText";


// const CareersBanner = () => {
//   const [animatedNumbers, setAnimatedNumbers] = useState({
//     positions: 0,
//     employees: 0,
//   });

//   useEffect(() => {
//     const animateNumbers = () => {
//       const positionsTarget = 15;
//       const employeesTarget = 500;

//       let positionsCount = 0;
//       let employeesCount = 0;

//       const interval = setInterval(() => {
//         if (positionsCount < positionsTarget) {
//           positionsCount++;
//           setAnimatedNumbers((prev) => ({
//             ...prev,
//             positions: positionsCount,
//           }));
//         }
//         if (employeesCount < employeesTarget) {
//           employeesCount += 10;
//           setAnimatedNumbers((prev) => ({
//             ...prev,
//             employees: employeesCount,
//           }));
//         }

//         if (
//           positionsCount >= positionsTarget &&
//           employeesCount >= employeesTarget
//         ) {
//           clearInterval(interval);
//         }
//       }, 80);
//     };

//     animateNumbers();
//   }, []);

//       const text = "Accelerate Your Career Path";
//       const text1 = "With ECRS’s Visionary Team Culture";


//   return (
//     <div className="relative overflow-hidden transition-all duration-500 ease-out">
//       {/* Main Banner Container */}
//       <div className="relative bg-gradient-to-r from-red-500 via-red-500 to-red-500 mx-4 rounded-3xl shadow-2xl border border-red-300/20">
//         {/* Content Container */}
//         <div className="relative p-8 md:p-8">
//           {/* Main Content */}
//           <div className="grid lg:grid-cols-3 gap-8 items-center">
//             {/* Left Content - Main Message */}
//             <div className="lg:col-span-2">
//               {/* Main Heading */}
//               <h1 className="text-3xl md:text-4xl lg:text-3xl font-bold font-serif text-white mb-6 tracking-wide">
//                 {/* <MagnifierCursor text={text} cursorSize={45} /> */}
                // <span>
                //   <BlurText
                //     text="Accelerate Your Career Path"
                //     delay={150}
                //     animateBy="letters"
                //     direction="down"
                //   />
                // </span>

                // <span className="text-white">
                //   {/* <MagnifierCursor text={text1} cursorSize={45} /> */}
                //   <BlurText
                //     text="With ECRS’s Visionary Team Culture"
                //     delay={150}
                //     animateBy="letters"
                //     direction="top"
                //   />
                // </span>
//               </h1>

//               {/* Subtext */}
//               <p className="text-red-50/90 text-lg md:text-xl mb-8 font-medium max-w-2xl leading-relaxed">
//                 Join India's fastest-growing car rental company and accelerate
//                 your professional journey with unlimited opportunities.
//               </p>

//               {/* Key Benefits */}
//               <div className="grid sm:grid-cols-2 gap-4 mb-8">
//                 <div className="flex items-center gap-3">
//                   <div className="w-8 h-8 bg-white/20 rounded-lg flex items-center justify-center">
//                     <Award className="w-4 h-4 text-white" />
//                   </div>
//                   <span className="text-white font-medium">
//                     Competitive Packages
//                   </span>
//                 </div>
//                 <div className="flex items-center gap-3">
//                   <div className="w-8 h-8 bg-white/20 rounded-lg flex items-center justify-center">
//                     <Users className="w-4 h-4 text-white" />
//                   </div>
//                   <span className="text-white font-medium">
//                     Growth Opportunities
//                   </span>
//                 </div>
//                 <div className="flex items-center gap-3">
//                   <div className="w-8 h-8 bg-white/20 rounded-lg flex items-center justify-center">
//                     <MapPin className="w-4 h-4 text-white" />
//                   </div>
//                   <span className="text-white font-medium">
//                     Pan-India Locations
//                   </span>
//                 </div>
//                 <div className="flex items-center gap-3">
//                   <div className="w-8 h-8 bg-white/20 rounded-lg flex items-center justify-center">
//                     <Clock className="w-4 h-4 text-white" />
//                   </div>
//                   <span className="text-white font-medium">
//                     Flexible Work Culture
//                   </span>
//                 </div>
//               </div>

//               <div className="text-white/80 text-sm mt-10 font-medium">
//                 📍 Hiring across Mumbai, Delhi, Bangalore, Pune & 15+ cities
//               </div>
//             </div>

//             {/* Right Content - Stats & Info */}
//             <div className="lg:col-span-1">
//               <div className="bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 p-6">
//                 {/* Company Stats */}
//                 <div className="text-center mb-3">
//                   <div className="text-4xl font-bold text-white mb-2 font-serif">
//                     {animatedNumbers.employees}+
//                   </div>
//                   <div className="text-red-100 font-medium">Team Members</div>
//                 </div>

//                 {/* Departments Hiring */}
//                 <div className="space-y-3">
//                   <h3 className="text-white font-semibold text-lg mb-2">
//                     Departments Hiring:
//                   </h3>

//                   <div className="flex items-center justify-between py-2 px-3 bg-white/10 rounded-lg">
//                     <span className="text-white font-medium">Operations</span>
//                     <span className="text-green-300 text-sm font-semibold">
//                       5 Positions
//                     </span>
//                   </div>

//                   <div className="flex items-center justify-between py-2 px-3 bg-white/10 rounded-lg">
//                     <span className="text-white font-medium">
//                       Sales & Marketing
//                     </span>
//                     <span className="text-green-300 text-sm font-semibold">
//                       4 Positions
//                     </span>
//                   </div>

//                   <div className="flex items-center justify-between py-2 px-3 bg-white/10 rounded-lg">
//                     <span className="text-white font-medium">Technology</span>
//                     <span className="text-green-300 text-sm font-semibold">
//                       3 Positions
//                     </span>
//                   </div>

//                   <div className="flex items-center justify-between py-2 px-3 bg-white/10 rounded-lg">
//                     <span className="text-white font-medium">
//                       Customer Service
//                     </span>
//                     <span className="text-green-300 text-sm font-semibold">
//                       3 Positions
//                     </span>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//         {/* Luxury Corner Accents */}
//         <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-white/50 to-transparent rounded-bl-full rounded-tr-3xl"></div>
//       </div>
//     </div>
//   );
// };

// export default CareersBanner;








import React, { useState, useEffect } from "react";
import {
  Users,
  MapPin,
  Clock,
  Award,
  Car,
  ArrowRight,
  Sparkles,
  TrendingUp,
  Shield,
  Globe,
  Briefcase,
  Star,
  Diamond,
  Crown,
} from "lucide-react";
import BlurText from "./BlurText";


// Mock MagnifierCursor component for demo
const MagnifierCursor = ({ text, cursorSize }) => {
  return <span className="inline-block">{text}</span>;
};

const CareersBanner = () => {
  const [animatedNumbers, setAnimatedNumbers] = useState({
    positions: 0,
    employees: 0,
    experience: 0,
    growth: 0,
  });

  const [isVisible, setIsVisible] = useState(false);
  const [currentStats, setCurrentStats] = useState(0);
  const [hoveredBenefit, setHoveredBenefit] = useState(null);
  const [hoveredDept, setHoveredDept] = useState(null);

  useEffect(() => {
    setIsVisible(true);

    const animateNumbers = () => {
      const targets = {
        positions: 15,
        employees: 500,
        experience: 10,
        growth: 300,
      };

      let counts = { positions: 0, employees: 0, experience: 0, growth: 0 };

      const interval = setInterval(() => {
        let allComplete = true;

        Object.keys(targets).forEach((key) => {
          if (counts[key] < targets[key]) {
            allComplete = false;
            const increment =
              key === "employees" ? 10 : key === "growth" ? 5 : 1;
            counts[key] = Math.min(counts[key] + increment, targets[key]);
          }
        });

        setAnimatedNumbers({ ...counts });

        if (allComplete) {
          clearInterval(interval);
        }
      }, 80);
    };

    const timer = setTimeout(animateNumbers, 800);
    return () => clearTimeout(timer);
  }, []);

  // Cycle through different stats
  useEffect(() => {
    const statsInterval = setInterval(() => {
      setCurrentStats((prev) => (prev + 1) % 3);
    }, 4000);

    return () => clearInterval(statsInterval);
  }, []);

  const text = "Accelerate Your Career Path";
  const text1 = "With ECRS's Visionary Team Culture";

  const benefits = [
    {
      icon: Award,
      text: "Competitive Packages",
      desc: "Industry-leading compensation",
      accent: "text-yellow-300",
    },
    {
      icon: TrendingUp,
      text: "Growth Opportunities",
      desc: "Fast-track career progression",
      accent: "text-green-300",
    },
    {
      icon: Globe,
      text: "Pan-India Locations",
      desc: "15+ major cities coverage",
      accent: "text-blue-300",
    },
    {
      icon: Shield,
      text: "Flexible Work Culture",
      desc: "Premium benefits & wellness",
      accent: "text-purple-300",
    },
  ];

  const departments = [
    {
      name: "Operations",
      positions: 5,
    },
    {
      name: "Sales & Marketing",
      positions: 4,
    },
    {
      name: "Technology",
      positions: 3,
    },
    {
      name: "Customer Service",
      positions: 3,
    },
  ];

  const floatingStats = [
    {
      value: `${animatedNumbers.employees}+`,
      label: "Team Members",
      icon: Users,
    },
    {
      value: `${animatedNumbers.experience}+`,
      label: "Years Experience",
      icon: Award,
    },
    {
      value: `${animatedNumbers.growth}%`,
      label: "Growth Rate",
      icon: TrendingUp,
    },
  ];

  const CurrentIcon = floatingStats[currentStats].icon;

  return (
    <div
      className={`relative overflow-hidden transition-all duration-1000 ease-in ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      }`}
    >
      {/* Main Container */}
      <div className="relative mx-4">
        {/* Main Banner */}
        <div className="relative bg-gradient-to-br from-black via-red-600 to-red-700 rounded-3xl overflow-hidden">
          {/* Subtle Pattern Overlay */}
          <div className="absolute inset-0 opacity-5">
            <div
              className="absolute inset-0"
              style={{
                backgroundImage: `radial-gradient(circle at 30% 30%, white 1px, transparent 1px)`,
                backgroundSize: "40px 40px",
              }}
            ></div>
          </div>

          {/* Gradient Overlays */}
          <div className="absolute inset-0 bg-gradient-to-r from-black opacity-15"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-red-900 opacity-20"></div>

          {/* Content Container */}
          <div className="relative p-8 md:p-6">
            {/* Main Content Grid - Using original 3-column layout */}
            <div className="grid lg:grid-cols-3 gap-8 items-center">
              {/* Left Content - Main Message */}
              <div className="lg:col-span-2">
                {/* Main Heading - Original sizes */}
                <div className="max-w-2xl mx-auto">
                  <p className="text-3xl md:text-4xl lg:text-3xl font-bold text-center font-serif text-white/80 mb-6 tracking-wide">
                    <div className="max-w-xl mx-auto">
                      <BlurText
                        text="Accelerate Your Career Path"
                        delay={80}
                        animateBy="letters"
                        direction="down"
                        className="text-center ml-4"
                      />
                    </div>

                    {/* <MagnifierCursor text={text1} cursorSize={45} /> */}
                    <BlurText
                      text="With ECRS’s Visionary Team Culture"
                      delay={80}
                      animateBy="letters"
                      direction="top"
                      className="text-center"
                    />
                  </p>
                </div>

                {/* Subtext - Original size */}
                <p className="text-white/80 text-opacity-90 text-center text-lg md:text-xl mb-8 font-medium max-w-2xl leading-relaxed">
                  Join India's fastest-growing car rental company and accelerate
                  your professional journey with unlimited opportunities.
                </p>

                <div className="grid sm:grid-cols-2 gap-6 mb-6 ml-6">
                  {benefits.map((benefit, index) => {
                    const IconComponent = benefit.icon;
                    return (
                      <div
                        key={index}
                        className="group flex items-center gap-4 p-2 transition-transform duration-300"
                      >
                        <div className="w-12 h-12 flex items-center justify-center rounded-xl">
                          <IconComponent className="w-7 h-7 text-white/80" />
                        </div>
                        <div>
                          <div className="text-white/80 font-bold text-lg mb-1">
                            {benefit.text}
                          </div>
                          <div className="text-white/80 text-sm font-medium">
                            {benefit.desc}
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>

                {/* Location Info */}
                <div className="max-w-xl mx-auto bg-gradient-to-r from-red-900 via-black to-red-900 bg-opacity-50 backdrop-blur-sm border-2 border-red-300 rounded-2xl px-8 py-6 shadow-xl">
                  <div className="flex items-center justify-center gap-3">
                    <span className="text-white font-medium text-sm">
                      📍 Hiring across Mumbai, Delhi, Bangalore, Pune & 15+
                      cities
                    </span>
                  </div>
                </div>
              </div>

              {/* Right Content - Enhanced Visibility */}
              <div className="lg:col-span-1">
                <div className="bg-gradient-to-b from-black to-red-900  border-2 border-white/70 border-opacity-30 rounded-2xl p-6 shadow-2xl">
                  {/* Company Stats */}
                  <div className="text-center mb-6">
                    <div className="text-4xl font-bold text-white/80 mb-2 font-serif">
                      {floatingStats[currentStats].value}
                    </div>
                    <div className="text-white/80 font-medium flex items-center justify-center gap-2">
                      <CurrentIcon className="w-4 h-4 text-green-400" />
                      {floatingStats[currentStats].label}
                    </div>
                  </div>

                  {/* Departments Hiring */}
                  <div className="space-y-3">
                    <h3 className="text-white/80 font-semibold text-lg mb-4 flex items-center justify-center gap-2">
                      {/* <Briefcase className="w-5 h-5 text-green-400" /> */}
                      Departments Hiring
                    </h3>

                    {departments.map((dept, index) => (
                      <div
                        key={index}
                        className={`group relative overflow-hidden bg-black bg-opacity-15 backdrop-blur-sm border ${
                          hoveredDept === index
                            ? "border-white border-opacity-50"
                            : "border-white border-opacity-25"
                        } rounded-xl p-4 hover:bg-opacity-20 transition-all duration-300 `}
                        onMouseEnter={() => setHoveredDept(index)}
                        onMouseLeave={() => setHoveredDept(null)}
                      >
                        <div className="flex items-center justify-between">
                          <span className="text-white/80 font-semibold text-base">
                            {dept.name}
                          </span>
                          <div className="flex items-center gap-2">
                            <span className="text-white text-sm font-bold bg-green-500 bg-opacity-20 px-2 py-1 rounded-lg">
                              {dept.positions} Positions
                            </span>
                          </div>
                        </div>
                      </div>
                    ))}

                    {/* Total Summary */}
                    {/* <div className="mt-3 p-3 bg-black bg-opacity-20 border border-white border-opacity-40 rounded-xl">
                      <div className="text-center flex items-center justify-between px-2">
                        <div className="text-white/80 text-sm font-semibold">
                          TOTAL OPENINGS
                        </div>
                        <div className="text-2xl font-bold text-white/80 mb-1">
                          {animatedNumbers.positions}+
                        </div>
                      </div>
                    </div> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CareersBanner;