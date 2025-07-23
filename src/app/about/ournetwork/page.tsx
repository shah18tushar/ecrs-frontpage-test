'use client';
import React, { useState } from 'react';
import { MapPin, ChevronRight, Search } from 'lucide-react';
import SplitText from '@/components/ui/SplitText';
import Threads from '@/components/ui/Threads';
import Image from 'next/image';

const OurNetworkPage = () => {
    const [selectedState, setSelectedState] = useState(null);
    const [searchTerm, setSearchTerm] = useState('');

    // Network data with sample images for each state
    const networkData = {
        "Gujarat": {
            cities: ["Rajkot", "Gandhidham", "Jamnagar", "Bhuj", "Vadodara", "Bhavnagar", "Surat", "Ahmedabad", "Silvassa", "Vapi", "Sonmath"],
            image: "/Gujrat.jpg"
        },
        "Assam": {
            cities: ["Silchar", "Agartala", "Johrat", "Dibrugarh", "Tezpur", "Sivasagar", "Guwahati"],
            image: "/Gujrat.jpg"
        },
        // ... (rest of your state data remains the same)
    };

    // Handle state selection
    const handleStateSelect = (stateName) => {
        if (selectedState === stateName) {
            setSelectedState(null);
        } else {
            setSelectedState(stateName);
        }
    };

    // Filter states based on search
    const filteredStates = Object.keys(networkData).filter(state =>
        state.toLowerCase().includes(searchTerm.toLowerCase())
    );

    // Get cities for display
    const getCitiesToDisplay = () => {
        if (selectedState) {
            return networkData[selectedState].cities || [];
        }
        return [];
    };

    // Calculate total cities
    const totalCities = Object.values(networkData).reduce((total, state) => total + state.cities.length, 0);

    return (
        <div className="text-black">
            {/* Hero Section */}
            <section className="relative w-full h-[350px] md:h-[300px] mt-14 overflow-hidden flex items-center justify-center bg-white">
                <div className="absolute inset-0 z-0">
                    <Threads amplitude={1} distance={0} enableMouseInteraction={false} />
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
                        threshold={0.1} 
                        onLetterAnimationComplete={undefined} 
                    />
                    <p className="text-gray-600 max-w-xl mx-auto text-lg">
                        Explore the extensive reach of ECRS across India – 180+ cities and growing.
                    </p>
                </div>
            </section>

            {/* Network Statistics */}
            <div className="mb-12 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
                <div className="text-center p-6 bg-white rounded-xl shadow-lg border border-gray-100">
                    <div className="text-3xl font-bold text-red-600 mb-2">
                        {Object.keys(networkData).length}
                    </div>
                    <div className="text-gray-600 font-medium">States Covered</div>
                </div>
                <div className="text-center p-6 bg-white rounded-xl shadow-lg border border-gray-100">
                    <div className="text-3xl font-bold text-red-600 mb-2">
                        {totalCities}
                    </div>
                    <div className="text-gray-600 font-medium">Cities Connected</div>
                </div>
                <div className="text-center p-6 bg-white rounded-xl shadow-lg border border-gray-100">
                    <div className="text-3xl font-bold text-red-600 mb-2">
                        180+
                    </div>
                    <div className="text-gray-600 font-medium">Growing Network</div>
                </div>
            </div>

            {/* States and Cities Section */}
            <section>
                <div className="max-w-7xl mx-auto px-4">
                    <div className="flex gap-8">
                        {/* Left Section - States (w-1/4 and h-[450px]) */}
                        <div className="bg-white w-1/4 rounded-2xl shadow-2xl p-6 border h-[450px] border-gray-100 flex flex-col">
                            <div className="mb-6">
                                <h3 className="text-2xl font-bold text-gray-900 mb-4">States</h3>
                                <div className="relative">
                                    <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                                    <input
                                        type="text"
                                        placeholder="Search states..."
                                        value={searchTerm}
                                        onChange={(e) => setSearchTerm(e.target.value)}
                                        className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent outline-none"
                                    />
                                </div>
                            </div>
                            
                            <div className="flex-grow overflow-y-auto scrollbar-hide">
                                <div className="space-y-2">
                                    {filteredStates.map((state, index) => (
                                        <div
                                            key={state}
                                            className={`p-4 rounded-xl cursor-pointer transition-all duration-300 group transform hover:scale-105 ${
                                                selectedState === state
                                                    ? 'bg-red-500 text-white shadow-lg scale-105'
                                                    : 'bg-gray-50 hover:bg-red-50 hover:shadow-md'
                                            }`}
                                            onClick={() => handleStateSelect(state)}
                                            style={{
                                                animation: `fadeInUp 0.4s ease-out ${index * 0.05}s both`
                                            }}
                                        >
                                            <div className="flex items-center justify-between">
                                                <div className="flex items-center space-x-3">
                                                    <MapPin className={`h-5 w-5 ${selectedState === state ? 'text-white' : 'text-red-500'}`} />
                                                    <span className="font-semibold">{state}</span>
                                                </div>
                                                <div className="flex items-center space-x-2">
                                                    <span className={`text-sm px-2 py-1 rounded-full ${
                                                        selectedState === state 
                                                            ? 'bg-red-400 text-white' 
                                                            : 'bg-red-100 text-red-600'
                                                    }`}>
                                                        {networkData[state].cities.length}
                                                    </span>
                                                    <ChevronRight className={`h-4 w-4 transition-transform ${
                                                        selectedState === state ? 'rotate-90' : ''
                                                    }`} />
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Right Section - Cities and Image (w-3/4 and h-[450px]) */}
                        <div className="bg-white w-3/4 rounded-2xl shadow-2xl p-6 border h-[450px] border-gray-100">
                            {selectedState ? (
                                <div className="h-full flex flex-col">
                                    <div className="mb-4">
                                        <h3 className="text-2xl font-bold text-gray-900">
                                            Cities in {selectedState}
                                        </h3>
                                        <p className="text-gray-600">
                                            {getCitiesToDisplay().length} cities available
                                        </p>
                                    </div>
                                    
                                    <div className="flex-grow grid grid-cols-1 lg:grid-cols-2 gap-6">
                                        {/* Cities List - Takes left half */}
                                        <div className="overflow-y-auto scrollbar-hide pr-2">
                                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                                                {getCitiesToDisplay().map((city, index) => (
                                                    <div
                                                        key={city}
                                                        className="p-2"
                                                        style={{
                                                            animation: `fadeInScale 0.3s ease-out ${index * 0.2}s both`
                                                        }}
                                                    >
                                                        <div className="flex items-center space-x-3">
                                                            <div className="w-2 h-2 bg-red-500 rounded-full group-hover:animate-pulse"></div>
                                                            <span className="font-medium text-gray-800 group-hover:text-red-600">
                                                                {city}
                                                            </span>
                                                        </div>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                        
                                        {/* State Image - Takes right half */}
                                        <div className="hidden lg:block relative rounded-xl overflow-hidden shadow-lg">
                                            <Image
                                                src={networkData[selectedState].image || "/images/default-state.jpg"}
                                                alt={selectedState}
                                                fill
                                                className="object-cover"
                                                sizes="(max-width: 768px) 100vw, 50vw"
                                            />
                                            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                                            <div className="absolute bottom-0 left-0 p-6 text-white">
                                                {/* <h3 className="text-2xl font-bold">{selectedState}</h3> */}
                                                <p className="text-gray-200 font-medium">ECRS Network Available In {getCitiesToDisplay().length} Cities Of {selectedState}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ) : (
                                <div className="h-full flex items-center justify-center text-gray-500">
                                    <div className="text-center">
                                        <MapPin className="h-12 w-12 mx-auto mb-4 text-gray-300" />
                                        <p className="text-xl mb-2">Select a state to view cities</p>
                                        <p className="text-gray-400">Choose from the list on the left</p>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </section>

            {/* Add CSS animations */}
            <style jsx global>{`
                @keyframes fadeInUp {
                    from { opacity: 0; transform: translateY(10px); }
                    to { opacity: 1; transform: translateY(0); }
                }
                @keyframes fadeInScale {
                    from { opacity: 0; transform: scale(0.95); }
                    to { opacity: 1; transform: scale(1); }
                }
                .animate-fade-in {
                    animation: fadeInUp 0.6s ease-out forwards;
                }
                .animate-fade-in-delay {
                    animation: fadeInUp 0.6s ease-out 0.2s forwards;
                    opacity: 0;
                }
                .scrollbar-hide::-webkit-scrollbar {
                    display: none;
                }
                .scrollbar-hide {
                    -ms-overflow-style: none;
                    scrollbar-width: none;
                }
            `}</style>
        </div>
    );
};
export default OurNetworkPage;