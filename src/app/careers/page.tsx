'use client';
import {  useState } from 'react';
import { formData } from "@/data/careerpagedata";
import SplitText from '@/components/ui/SplitText';
import Threads from '@/components/ui/Threads';
import CareersPosts from '@/components/ui/CareersPosts';
import CareersBanner from '@/components/ui/CareersBanner';

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
            <section className="relative w-full h-[350px] md:h-[300px] mt-6 overflow-hidden flex items-center justify-center bg-white">
                <div className=''>
                <div className="absolute inset-0 z-0">
                    <Threads amplitude={1} distance={0} enableMouseInteraction={false} />
                </div>
                <div className="relative z-10 text-center px-4" >
                    <SplitText
                        text="Job Openings"
                        className="text-5xl md:text-6xl font-bold text-gray-900"
                        delay={80}
                        duration={0.6}
                        ease="power3.out"
                        splitType="chars"
                        from={{ opacity: 0, y: 30 }}
                        to={{ opacity: 1, y: 0 }}
                        threshold={0.1} onLetterAnimationComplete={undefined} />
                    <p className="text-gray-600  max-w-xl mx-auto text-lg">
                        Join our growing team across 180+ cities. Choose your role and apply now!
                    </p>
                </div>
                </div>
            </section>

            {/* Careers Banner */}
            <CareersBanner />

            {/* Careers Post Section */}
            <CareersPosts />

            
        </div>
    );
}
