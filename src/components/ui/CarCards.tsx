// components/ui/CarCards.tsx
'use client';

import React from 'react';
import { Star, Fuel, Users, Settings } from 'lucide-react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

interface CarCardsProps {
  car: {
    id: number;
    name: string;
    rating: number;
    reviews: number;
    price: number;
    hourlyPrice: number;
    images: string[];
    specifications: {
      body: string;
      seating: string;
      engine: string;
      transmission: string;
      fuelType: string;
    };
  };
}

const CarCards: React.FC<CarCardsProps> = ({ car }) => {
  const router = useRouter();

  const handleViewDetails = () => {
    // Determine the category based on car specifications
    const category = car.specifications.body.toLowerCase().includes('sedan') ? 'sedan' :
      car.specifications.body.toLowerCase().includes('muv') ? 'muv' :
        car.specifications.body.toLowerCase().includes('premium') ? 'premium' :
          car.specifications.body.toLowerCase().includes('luxury') ? 'luxury' :
            car.specifications.body.toLowerCase().includes('bus') ? 'bus' :
              'e-vehicle';

    router.push(`/rides?category=${category}&carId=${car.id}`);
  };

  return (
    <div className="relative flex w-full max-w-xs flex-col rounded-xl bg-gradient-to-br from-white to-gray-50 bg-clip-border text-gray-700 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
      {/* Image */}
      <div className="relative mx-4 -mt-6 h-40 overflow-hidden rounded-xl bg-clip-border shadow-lg group">
        <Image
          src={car.images[0]}
          alt={car.name}
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/10 to-black/20 opacity-40" />
      </div>

      {/* Content */}
      <div className="p-6">
        <h5 className="mb-2 text-xl font-semibold text-gray-900">
          {car.name}
        </h5>

        <div className="flex items-center mb-3">
          <Star className="w-4 h-4 text-yellow-500 fill-yellow-500 mr-1" />
          <span className="text-sm">{car.rating} ({car.reviews} reviews)</span>
        </div>

        <ul className="text-xs text-gray-600 space-y-1 mb-4">
          <li className="flex items-center gap-1">
            <Users className="w-3 h-3" />
            <span>{car.specifications.seating}</span>
          </li>
          <li className="flex items-center gap-1">
            <Settings className="w-3 h-3" />
            <span>{car.specifications.transmission}</span>
          </li>
          <li className="flex items-center gap-1">
            <Fuel className="w-3 h-3" />
            <span>{car.specifications.fuelType}</span>
          </li>
        </ul>

        <div className="flex justify-between items-center mb-4">
          <div>
            <p className="text-xs text-gray-500">Starting from</p>
            <p className="text-lg font-bold">₹{car.price.toLocaleString()}</p>
          </div>
          <div className="text-right">
            <p className="text-xs text-gray-500">4 hrs package</p>
            <p className="text-md font-semibold">₹{car.hourlyPrice.toLocaleString()}</p>
          </div>
        </div>
      </div>

      {/* Button */}
      <div className='flex justify-center'>
      <div className="p-6 pt-0">
        <button
          onClick={handleViewDetails}
          className="cursor-pointer text-xs btn-shadow-red"
        >
          <span className="relative flex items-center gap-2">
            View Details
            <svg
              viewBox="0 0 24 24"
              stroke="currentColor"
              fill="none"
              className="w-5 h-5 transform transition-transform group-hover:translate-x-4"
            >
              <path
                d="M17 8l4 4m0 0l-4 4m4-4H3"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </span>
        </button>
      </div></div>
    </div>
  );
};

export default CarCards;