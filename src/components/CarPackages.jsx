'use client';

import React, { useState } from 'react';
import SplitText from '@/components/ui/SplitText';
import { carData } from '@/data/carsData'; // Changed from carPackages to carData
import { useGSAPParallaxSlideRight } from '@/utils/animations';
import CarCards from '@/components/ui/CarCards';
import { Tabs } from '@/components/ui/Tabs';
import { Car, Users, Bus, Star, Zap } from "lucide-react";
import { useRouter } from 'next/navigation'; // Added for navigation 

const iconMap = {
  sedan: Car,
  muv: Users,
  premium: Star,
  bus: Bus,
  luxury: Car,
  "e-vehicle": Zap,
};

const CarPackages = () => {
  const router = useRouter(); // Added for navigation
  const ref = useGSAPParallaxSlideRight();
  const segments = Object.keys(carData); // Changed from carPackages to carData
  const [activeTab, setActiveTab] = useState(segments[0]);

  const tabs = segments.map(segment => ({
    id: segment,
    name: segment.charAt(0).toUpperCase() + segment.slice(1),
    icon: iconMap[segment] || Car,
  }));

  const handleViewDetails = (carId, category) => {
    router.push(`/rides?category=${category}&carId=${carId}`);
  };

  return (
    <section
      ref={ref}
      className="w-full px-4 py-16 flex items-center justify-center bg-white"
    >
      <div className="w-full max-w-6xl">
        <div className="text-center mb-10">
          <SplitText
            text="Car Rental Packages"
            className="text-3xl md:text-3xl font-semibold font-serif"
            delay={100}
            duration={0.6}
            ease="power3.out"
            splitType="chars"
            from={{ opacity: 0, y: 40 }}
            to={{ opacity: 1, y: 0 }}
            threshold={0.1}
            rootMargin="-100px"
          />
          <div className="w-32 h-0.5 bg-gradient-to-r from-transparent via-red-500 to-transparent mx-auto"></div>
          <p className="text-gray-600 text-sm md:text-base mt-4">
            Discover our premium collection of cars, tempo travellers, and buses
            for unmatched comfort and style!
          </p>
        </div>

        <Tabs tabs={tabs} activeTab={activeTab} setActiveTab={setActiveTab} />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 justify-center mt-14">
          {carData[activeTab]?.map((car) => (
            <CarCards
              key={car.id}
              car={car}
              onViewDetails={() => handleViewDetails(car.id, activeTab)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default CarPackages;