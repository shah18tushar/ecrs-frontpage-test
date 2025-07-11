'use client';
import { useRef, useState } from 'react';
import Image from 'next/image';
import { VendorForm } from '@/components/ui/VendorForm';
import { StaffForm } from '@/components/ui/StaffForm';
import { DriverForm } from '@/components/ui/DriverForm';
import { Tabs } from '@/components/ui/Tabs';
import { formData } from "@/data/careerpagedata";
import SplitText from '@/components/ui/SplitText';
import Threads from '@/components/ui/Threads';

export default function CareersPage() {
    const [activeTab, setActiveTab] = useState<'vendor' | 'staff' | 'driver'>('vendor');


    const tabs = Object.entries(formData).map(([id, { title, icon }]) => ({
        id,
        name: title,
        icon,
    }));


    return (
     
        <div className="text-black">
            {/* Hero Section with Threads */}
            <section className="relative w-full h-[350px] md:h-[300px] mt-20 overflow-hidden flex items-center justify-center bg-white">
                <div className="absolute inset-0 z-0">
                    <Threads amplitude={1} distance={0} enableMouseInteraction={true} />
                </div>
                <div className="relative z-10 text-center px-4" >
                    <SplitText
                        text="Careers at ECRS"
                        className="text-5xl md:text-6xl font-bold text-gray-900"
                        delay={80}
                        duration={0.6}
                        ease="power3.out"
                        splitType="chars"
                        from={{ opacity: 0, y: 30 }}
                        to={{ opacity: 1, y: 0 }}
                        threshold={0.1} onLetterAnimationComplete={undefined} />
                    <p className="text-gray-600 mt-4 max-w-xl mx-auto text-lg">
                        Join our growing team across 180+ cities. Choose your role and apply now!
                    </p>
                </div>
            </section>

            {/* Form & Tabs Section */}
            <div className=" px-4 sm:px-6 lg:px-8">
                <div className="max-w-4xl mx-auto">
                    {/* Tabs */}
                    <div className="mb-10">
                        <Tabs tabs={tabs} activeTab={activeTab} setActiveTab={setActiveTab} />
                    </div>

                    {/* Form Block */}
                    <section

                        className="bg-white p-8 rounded-xl shadow-sm border border-gray-100"
                    >
                        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                            Apply for {formData[activeTab].title}
                        </h2>
                        <p className="text-gray-600 mb-6">{formData[activeTab].description}</p>

                        {activeTab === 'vendor' && <VendorForm />}
                        {activeTab === 'staff' && <StaffForm />}
                        {activeTab === 'driver' && <DriverForm />}
                    </section>
                </div>
            </div>

        

        </div>

    );
}
