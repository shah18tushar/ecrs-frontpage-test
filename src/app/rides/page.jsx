'use client';
import React, { useState } from 'react';
import { Car, Users, DoorOpen, Zap, Settings, MapPin, CheckCircle, Star, Heart, Fuel } from 'lucide-react';
import { carData } from '@/data/carsData';
import { RidesCards } from '@/components/ui/RidesCards';
import { Tabs } from '@/components/ui/Tabs';
import Threads from '@/components/ui/Threads';
import SplitText from '@/components/ui/SplitText';
import CorporateMonthly from '@/components/ui/CorporateMonthly';
const RidesPage = () => {
  const [activeTab, setActiveTab] = useState('sedan');

  const tabs = [
    { id: 'sedan', name: 'Sedan', icon: Car },
    { id: 'muv', name: 'MUV', icon: Users },
    { id: 'premium', name: 'Premium', icon: Star },
    { id: 'luxury', name: 'Luxury', icon: Star },
    { id: 'bus', name: 'Bus', icon: Users },
    { id: 'e-vehicle', name: 'E-Vehicle', icon: Zap }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section - Structured like your working example */}
      <section className="relative w-full h-[40vh] mt-20 bg-white overflow-hidden flex items-center justify-center">
        {/* Threads Background - Same implementation as working example */}
        <div className="absolute inset-0 z-0">
          <Threads amplitude={1} distance={0} enableMouseInteraction={false} />
        </div>
        
        {/* Centered Content - Similar to your working example */}
        <div className="relative z-10 text-center px-6">
          <SplitText
            text="Choose Your Ride"
            className="text-3xl md:text-5xl font-bold mb-4"
            delay={100}
            duration={0.6}
            ease="power3.out"
            splitType="chars"
            from={{ opacity: 0, y: 40 }}
            to={{ opacity: 1, y: 0 }}
            threshold={0.1}
            rootMargin="-100px"
          />
          <p className="text-xl -mt-8 drop-shadow-md">
            Select from our premium fleet of vehicles
          </p>
        </div>
      </section>

      {/* Main Content - Unchanged from your original */}
      <div className="max-w-7xl mx-auto px-6 ">
        <Tabs tabs={tabs} activeTab={activeTab} setActiveTab={setActiveTab} />
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {carData[activeTab]?.map((car) => (
            <RidesCards key={car.id} car={car} />
          ))}
        </div>

        {(!carData[activeTab] || carData[activeTab].length === 0) && (
          <div className="text-center py-16">
            <Car className="mx-auto text-gray-400 mb-4" size={64} />
            <h3 className="text-2xl font-bold text-gray-600 mb-2">No vehicles available</h3>
            <p className="text-gray-500">Cars in this category will be available soon.</p>
          </div>
        )}
      </div>


        {/* Corporate Monthly */}
        <CorporateMonthly/>

    </div>
  );
};

export default RidesPage;