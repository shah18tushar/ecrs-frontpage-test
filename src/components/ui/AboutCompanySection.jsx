'use client';

import React from 'react';
import {Award, MapPin, Car, ShieldCheck, CheckCircle} from 'lucide-react';
import Image from 'next/image';

export default function AboutCompanySection () {
  return (
    <div className="px-6 md:px-16 lg:px-24 py-16 max-w-7xl mx-auto space-y-24">
      {/* Section 1: Four Info Blocks Around Logo */}
      <div className="relative text-center grid md:grid-cols-3 gap-6 items-center">
        {/* Left side text blocks */}
        <div className="space-y-8 text-left hidden md:block">
          <InfoBlock
            icon={<Award className="text-red-600 w-6 h-6" />}
            title="Established Excellence"
            desc="M/S. Executive Car Rental Services (ECRS) has been operational since 2010, showcasing a legacy of excellence in premium transportation services."
          />
          <InfoBlock
            icon={<MapPin className="text-red-600 w-6 h-6" />}
            title="Expansive Reach"
            desc="With a presence in over 100 cities across India, ECRS is one of the country’s fastest-growing transportation companies."
          />
        </div>

        {/* Center Logo */}
        <div className="flex flex-col items-center gap-4">
          <Image
            src="/ECRS_Logo.png" // Replace with your central logo
            alt="ECRS Logo"
            width={180}
            height={180}
            className="mx-auto"
          />
          <p className="text-sm font-medium">ISO 9001:2015 Certified</p>
        </div>

        {/* Right side text blocks */}
        <div className="space-y-8 text-left hidden md:block">
          <InfoBlock
            icon={<Car className="text-red-600 w-6 h-6" />}
            title="Luxurious Fleet"
            desc="ECRS offers a wide array of high-end vehicles, from luxury sedans to chauffeur-driven MUVs tailored to elite needs."
          />
          <InfoBlock
            icon={<ShieldCheck className="text-red-600 w-6 h-6" />}
            title="Commitment to Quality"
            desc="ECRS guarantees expert chauffeurs and top-tier service for seamless travel across India."
          />
        </div>
      </div>

      {/* Section 2: Center Quote */}
      <div className="bg-black py-8 px-6 text-center rounded-xl text-white text-xl font-medium italic relative">
        <div className="text-red-600 text-3xl mb-4">”</div>
        The organizers know that the Leadership does not only mean Dominance but
        also being Responsible and Being Owner of the work one does.
      </div>

      {/* Section 3: Our Servicer */}
      <div className="grid md:grid-cols-2 gap-8 items-center">
        <Image
          src="/about-us.jpg"
          alt="Handshake"
          width={500}
          height={400}
          className="rounded-xl shadow"
        />
        <div>
          <p className="text-sm text-red-600 font-semibold uppercase mb-1">
            About Us
          </p>
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Our Servicer
          </h2>
          <p className="text-gray-700 mb-4 leading-relaxed">
            Economical | Efficient | Dependable
          </p>
          <p className="text-gray-600 mb-6">
            At M/S Executive Car Rental Services, we conduct weekly staff
            meetings and emphasize continuous improvement through:
          </p>
          <ul className="space-y-3">
            {[
              "Customer requirements",
              "Quality objectives",
              "Statutory, legal and regulatory requirements",
              "Continuous improvement in goals",
            ].map((point, idx) => (
              <li key={idx} className="flex items-center gap-2 text-gray-700">
                <CheckCircle className="w-5 h-5 text-red-600" />
                {point}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

const InfoBlock = ({icon, title, desc}) => (
  <div className="flex items-start gap-3">
    <div className="p-2">{icon}</div>
    <div>
      <h4 className="text-lg font-semibold text-gray-800">{title}</h4>
      <p className="text-sm text-gray-600">{desc}</p>
    </div>
  </div>
);
