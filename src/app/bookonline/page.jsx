'use client';

import Image from 'next/image';
import {Button} from '@/components/ui/button';
import {CalendarIcon, User, Building2} from 'lucide-react';
import {Tabs} from '@/components/ui/Tabs';
import SplitText from '@/components/ui/SplitText';
import React, {useState} from 'react';

export default function BookOnline () {
  const [activeTab, setActiveTab] = useState ('personal');

  return (
    <div className="min-h-screen bg-muted flex flex-col items-center px-4 py-28">
      <SplitText
        text="Book Online"
        className="text-4xl md:text-5xl font-bold text-gray-900 mb-10"
        delay={80}
        duration={0.6}
        ease="power3.out"
        splitType="chars"
        from={{ opacity: 0, y: 30 }}
        to={{ opacity: 1, y: 0 }}
        threshold={0.1}
      />

      <div className="bg-white rounded-xl shadow-lg max-w-6xl w-full grid grid-cols-1 lg:grid-cols-2 overflow-hidden">
        {/* Left Image */}
        <div className="hidden lg:block">
          <Image
            src="https://images.unsplash.com/photo-1423666639041-f56000c27a9a?q=80&w=1174&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Cars"
            width={800}
            height={600}
            className="h-full w-full object-cover"
          />
        </div>

        {/* Right Form */}
        <div className="p-6 sm:p-10 w-full">
          <Tabs
            tabs={[
              { id: "corporate", name: "Corporate", icon: Building2 },
              { id: "personal", name: "Personal", icon: User },
            ]}
            activeTab={activeTab}
            setActiveTab={setActiveTab}
          />

          {activeTab === "personal" && (
            <form className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
              {/* Personal Form */}
              <input
                type="text"
                placeholder="Full Name"
                className="input w-full"
              />
              <input
                type="text"
                placeholder="Contact Number"
                className="input w-full"
              />
              <input
                type="email"
                placeholder="Email"
                className="input w-full"
              />
              <input
                type="text"
                placeholder="Select Car"
                className="input w-full"
              />
              <input
                type="text"
                placeholder="Pick Up Location"
                className="input w-full"
              />
              <input
                type="text"
                placeholder="Drop Location"
                className="input w-full"
              />

              {/* Group Date and Time */}
              <div className="col-span-2 flex flex-col md:flex-row gap-4">
                <input type="date" className="input w-full md:w-1/2" />
                <input type="time" className="input w-full md:w-1/2" />
              </div>

              {/* Duration */}
              <div className="col-span-2">
                <input
                  type="text"
                  placeholder="Select Duration"
                  className="input w-full"
                />
              </div>

              <div className="col-span-2">
                <textarea
                  rows={2}
                  placeholder="Special Requirement"
                  className="input w-full"
                />
              </div>

              <div className="col-span-2 text-center">
                <button className="btn-shadow-red text-xs cursor-pointer">
                  <span className="flex items-center gap-2">
                    Submit Enquiry
                  </span>
                </button>
              </div>
            </form>
          )}

          {activeTab === "corporate" && (
            <form className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
              {/* Corporate Form */}
              <input
                type="text"
                placeholder="Company Name"
                className="input w-full"
              />
              <input
                type="email"
                placeholder="Official Email"
                className="input w-full"
              />
              <input
                type="text"
                placeholder="Pickup Location"
                className="input w-full"
              />
              <input
                type="text"
                placeholder="Drop Location"
                className="input w-full"
              />

              {/* Group Date and Time */}
              <div className="col-span-2 flex flex-col md:flex-row gap-4">
                <input type="date" className="input w-full md:w-1/2" />
                <input type="time" className="input w-full md:w-1/2" />
              </div>

              {/* Duration */}
              <div className="col-span-2">
                <input
                  type="text"
                  placeholder="Select Duration"
                  className="input w-full"
                />
              </div>

              <div className="col-span-2">
                <textarea
                  rows={2}
                  placeholder="Special Requirements"
                  className="input w-full"
                />
              </div>

              <div className="col-span-2 text-center">
                <buttom className="btn-shadow-red text-xs cursor-pointer">
                  <span className="flex items-center gap-2">
                    Submit Enquiry
                  </span>
                </buttom>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
