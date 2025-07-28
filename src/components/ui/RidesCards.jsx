'use client';
import React, {useState} from 'react';
import {
  Car,
  Users,
  DoorOpen,
  Zap,
  Settings,
  MapPin,
  CheckCircle,
  Star,
  Heart,
  Fuel,
} from 'lucide-react';

export const RidesCards = ({car}) => {
  const [selectedImage, setSelectedImage] = useState (0);
  const [liked, setLiked] = useState (false);

  return (
    <div className="bg-gray-100 border border-red-600 rounded-2xl shadow-lg hover:shadow-2xl w-full">
      {/* Header */}
      <div
        className="bg-gradient-to-r from-red-500 via-black to-red-500 px-6 py-4 rounded-t-2xl"
      >
        <div className="flex justify-center items-start">4
          <div>
            <h3 className="text-xl font-bold text-white mb-1">{car.name}</h3>
          </div>
          {/* <button
            onClick={() => setLiked(!liked)}
            className="p-2 bg-white/20 rounded-full hover:bg-white/30 transition-colors"
          >
            <Heart
              size={18}
              className={`${
                liked ? "fill-red-400 text-red-400" : "text-white"
              }`}
            />
          </button> */}
        </div>
      </div>

      <div className="p-6">
        {/* Image Section */}
        <div className="mb-6">
          <div className="relative">
            <img
              src={car.images[selectedImage]}
              alt={car.name}
              className="w-full h-56 object-cover rounded-xl"
            />
            <div className="absolute top-3 right-3 bg-red-600 text-white px-2 py-1 rounded-full text-xs font-semibold">
              Available
            </div>
          </div>

          {car.images.length > 1 && (
            <div className="flex gap-2 mt-3 justify-center">
              {car.images.map((img, idx) => (
                <button
                  key={idx}
                  onClick={() => setSelectedImage(idx)}
                  className={`w-12 h-10 rounded-lg overflow-hidden border-2 transition-all ${
                    selectedImage === idx
                      ? "border-red-600 scale-105"
                      : "border-gray-200 hover:border-gray-300"
                  }`}
                >
                  <img
                    src={img}
                    alt={`View ${idx + 1}`}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Specifications */}
        <div className="mb-6">
          <h4 className="font-bold text-gray-800 mb-3 flex items-center gap-2">
            <Settings className="text-red-600" size={16} />
            Specifications
          </h4>
          <div className="grid grid-cols-2 gap-2 text-sm">
            <div className="flex items-center gap-2 p-2 bg-gray-50 rounded-lg">
              <Car className="text-red-600" size={14} />
              <span className="text-gray-600">Body:</span>
              <span className="font-medium">{car.specifications.body}</span>
            </div>
            <div className="flex items-center gap-2 p-2 bg-gray-50 rounded-lg">
              <Users className="text-red-600" size={14} />
              <span className="text-gray-600">Seats:</span>
              <span className="font-medium">{car.specifications.seating}</span>
            </div>
            <div className="flex items-center gap-2 p-2 bg-gray-50 rounded-lg">
              <Zap className="text-red-600" size={14} />
              <span className="text-gray-600">Engine:</span>
              <span className="font-medium">{car.specifications.engine}</span>
            </div>
            <div className="flex items-center gap-2 p-2 bg-gray-50 rounded-lg">
              <Fuel className="text-red-600" size={14} />
              <span className="text-gray-600">Fuel:</span>
              <span className="font-medium">{car.specifications.fuelType}</span>
            </div>
          </div>
        </div>

        {/* Features */}
        <div className="mb-6">
          <h4 className="font-bold text-gray-800 mb-3 flex items-center gap-2">
            <CheckCircle className="text-red-600" size={16} />
            Features
          </h4>
          <div className="space-y-2">
            {car.features.slice(0, 3).map((feature, idx) => (
              <div key={idx} className="flex items-center gap-2 text-sm">
                <CheckCircle className="text-red-600 flex-shrink-0" size={12} />
                <span className="text-gray-700">{feature}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="flex justify-center">
          <button className="btn-shadow-red gap-2 text-xs cursor-pointer">
            <Car size={16} />
            Book Now
          </button>
        </div>

        {/* Pricing & Action */}
        {/* <div className="bg-gradient-to-r from-black to-red-800 p-4 rounded-xl text-white">
          <div className="flex justify-between items-center mb-3">
            <div>
              <p className="text-gray-300 text-xs">Starting from</p>
              <p className="text-xl font-bold">
                ₹{car.price.toLocaleString ()}
              </p>
              <p className="text-gray-300 text-xs">per day</p>
            </div>
            <div className="text-right">
              <p className="text-gray-300 text-xs">4 hrs package</p>
              <p className="text-lg font-semibold">
                ₹{car.hourlyPrice.toLocaleString ()}
              </p>
            </div>
          </div>
          <button className="btn-shadow-red gap-2 text-xs cursor-pointer">
            <Car size={16} />
            Book Now
          </button>
        </div> */}
      </div>
    </div>
  );
};
