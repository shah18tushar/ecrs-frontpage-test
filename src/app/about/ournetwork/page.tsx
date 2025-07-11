'use client';
import React from 'react';
import networkData from '@/data/network';
import SplitText from '@/components/ui/SplitText';
import Threads from '@/components/ui/Threads';

const OurNetworkPage = () => {
    return (
        <div className="text-black">
            {/* Hero Section */}
            <section className="relative w-full h-[350px] md:h-[370px] mt-20 overflow-hidden flex items-center justify-center bg-white">
                <div className="absolute inset-0 z-0">
                    <Threads amplitude={1} distance={0} enableMouseInteraction={true} />
                </div>
                <div className="relative z-10 text-center px-4">
                    <SplitText
                        text="Our Network"
                        className="text-5xl md:text-6xl font-bold text-gray-900"
                        delay={80}
                        duration={0.6}
                        ease="power3.out"
                        splitType="chars"
                        from={{ opacity: 0, y: 30 }}
                        to={{ opacity: 1, y: 0 }}
                        threshold={0.1} onLetterAnimationComplete={undefined} />
                    <p className="text-gray-600 mt-4 max-w-xl mx-auto text-lg">
                        Explore the extensive reach of ECRS across India – 180+ cities and growing.
                    </p>
                </div>
            </section>

            {/* Cities Grid */}
            <section className=" px-6 md:px-16 lg:px-24 max-w-7xl mx-auto">
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
                    {networkData.map((region, index) => (
                        <div
                            key={index}
                            className="bg-white rounded-xl shadow border border-gray-200 p-6 hover:shadow-md transition"
                        >
                            <h3 className="text-xl font-semibold text-red-600 mb-3">
                                {region.state}
                            </h3>
                            <ul className="list-disc list-inside space-y-1 text-gray-700">
                                {region.cities.map((city, i) => (
                                    <li key={i}>{city}</li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
};

export default OurNetworkPage;
