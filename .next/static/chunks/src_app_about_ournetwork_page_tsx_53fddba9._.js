(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push([typeof document === "object" ? document.currentScript : undefined, {

"[project]/src/app/about/ournetwork/page.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
// 'use client';
// import React from 'react';
// import networkData from '@/data/network';
// import SplitText from '@/components/ui/SplitText';
// import Threads from '@/components/ui/Threads';
// const OurNetworkPage = () => {
//     return (
//         <div className="text-black">
//             {/* Hero Section */}
//             <section className="relative w-full h-[350px] md:h-[370px] mt-20 overflow-hidden flex items-center justify-center bg-white">
//                 <div className="absolute inset-0 z-0">
//                     <Threads amplitude={1} distance={0} enableMouseInteraction={true} />
//                 </div>
//                 <div className="relative z-10 text-center px-4">
//                     <SplitText
//                         text="Our Network"
//                         className="text-5xl md:text-6xl font-bold text-gray-900"
//                         delay={80}
//                         duration={0.6}
//                         ease="power3.out"
//                         splitType="chars"
//                         from={{ opacity: 0, y: 30 }}
//                         to={{ opacity: 1, y: 0 }}
//                         threshold={0.1} onLetterAnimationComplete={undefined} />
//                     <p className="text-gray-600 mt-4 max-w-xl mx-auto text-lg">
//                         Explore the extensive reach of ECRS across India – 180+ cities and growing.
//                     </p>
//                 </div>
//             </section>
//             {/* State and Cities With Map */}
//             <section className=" px-6 md:px-16 lg:px-24 max-w-7xl mx-auto">
//                 <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
//                     {networkData.map((region, index) => (
//                         <div
//                             key={index}
//                             className="bg-white rounded-xl shadow border border-gray-200 p-6 hover:shadow-md transition"
//                         >
//                             <h3 className="text-xl font-semibold text-red-600 mb-3">
//                                 {region.state}
//                             </h3>
//                             <ul className="list-disc list-inside space-y-1 text-gray-700">
//                                 {region.cities.map((city, i) => (
//                                     <li key={i}>{city}</li>
//                                 ))}
//                             </ul>
//                         </div>
//                     ))}
//                 </div>
//             </section>
//         </div>
//     );
// };
// export default OurNetworkPage;
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/styled-jsx/style.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/components/AnimatePresence/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/gsap/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$map$2d$pin$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MapPin$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/map-pin.js [app-client] (ecmascript) <export default as MapPin>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRight$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chevron-right.js [app-client] (ecmascript) <export default as ChevronRight>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$search$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Search$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/search.js [app-client] (ecmascript) <export default as Search>");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
;
const OurNetworkPage = ()=>{
    _s();
    const [selectedState, setSelectedState] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [searchTerm, setSearchTerm] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const mapRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const blinkingDotsRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])([]);
    // Network data
    const networkData = {
        "Gujarat": [
            "Rajkot",
            "Gandhidham",
            "Jamnagar",
            "Bhuj",
            "Vadodara",
            "Bhavnagar",
            "Surat",
            "Ahmedabad",
            "Silvassa",
            "Vapi",
            "Sonmath"
        ],
        "Assam": [
            "Silchar",
            "Agartala",
            "Johrat",
            "Dibrugarh",
            "Tezpur",
            "Sivasagar",
            "Guwahati"
        ],
        "Chhattisgarh": [
            "Raipur",
            "Bhilai",
            "Bilaspur",
            "Korba"
        ],
        "Rajasthan": [
            "Bikaner",
            "Chittodgarh",
            "Hanumangarh",
            "Jaisalmer",
            "Ajmer",
            "Gulabpura",
            "Jodhpur",
            "Kota",
            "Jaipur",
            "Udaipur"
        ],
        "West Bengal": [
            "Siliguri",
            "Kolkata"
        ],
        "Odisha": [
            "Bhubaneswar"
        ],
        "Andhra Pradesh": [
            "Rajahmundry",
            "Kurnool",
            "Vijayawada",
            "Visakhapatnam"
        ],
        "Tamilnadu": [
            "Coimbatore",
            "Chennai",
            "Madurai",
            "Trichy",
            "Thanjavur",
            "Pondicherry",
            "Pudukkottai",
            "Karaikudi",
            "Theni",
            "Tiruvannamalai",
            "Thoothukudi",
            "Ramanathapuram",
            "Nagercoil",
            "Tirunelveli",
            "Cuddalore",
            "Neyveli",
            "Virudhachalam",
            "Viluppuram",
            "Kovilpatti",
            "Sivakasi",
            "Dindigul",
            "Salem",
            "Dharmapuri",
            "Krishnagiri",
            "Hosur",
            "Kanchipuram",
            "Karaikal",
            "Tiruchengode",
            "Udumalaipettai",
            "Pollachi",
            "Tiruppur",
            "Chidambaram",
            "Erode",
            "Karur",
            "Namakkal",
            "Vellore",
            "Rameswaram",
            "Velankanni",
            "Kodaikanal",
            "Ooty",
            "Palani",
            "Tiruchirappalli"
        ],
        "Hyderabad": [
            "Visakhapatnam",
            "Guntur",
            "Nellore",
            "Kurnool",
            "Kakinada",
            "Pudukkottai",
            "Karaikudi",
            "Theni"
        ],
        "Kerala": [
            "Kochi",
            "Thiruvananthapuram"
        ],
        "Uttarakhand": [
            "Dehradun"
        ],
        "Maharashtra": [
            "Nagpur",
            "Ahmednagar",
            "Mumbai",
            "Aurangabad",
            "Nashik",
            "Vapi",
            "Latur",
            "Nanded",
            "Sangli",
            "Amravati",
            "Dhule",
            "Jalgaon",
            "Kolhapur",
            "Solapur",
            "Baramati",
            "Jalna"
        ],
        "Uttar Pradesh": [
            "Kanpur",
            "Lucknow",
            "Ghaziabad",
            "Agra",
            "Noida",
            "Aligarh",
            "Azamgarh",
            "Bareilly",
            "Gorakhpur",
            "Hardoi",
            "Jaunpur",
            "Moradabad",
            "Muzaffarnagar",
            "Prayagraj",
            "Sitapur",
            "Varanasi",
            "Sultanpur",
            "Unnao"
        ],
        "Jharkhand": [
            "Jamshedpur",
            "Ranchi",
            "Dhanbad",
            "Bokaro"
        ],
        "Karnataka": [
            "Bangalore",
            "Hubli",
            "Dharwad",
            "Mysore",
            "Gulbarga",
            "Mangalore",
            "Belgaum",
            "Davanagere",
            "Bellary",
            "Bijapur",
            "Shimoga"
        ],
        "Punjab": [
            "Bathinda",
            "Amritsar",
            "Chandigarh",
            "Jalandhar",
            "Patiala",
            "Ludhiana",
            "Mohali",
            "Firozpur",
            "Batala",
            "Pathankot",
            "Moga"
        ],
        "Delhi": [
            "Delhi"
        ],
        "Haryana": [
            "Faridabad",
            "Gurugram",
            "Chandigarh",
            "Sonipat",
            "Panipath",
            "Ambala"
        ],
        "Bihar": [
            "Patna"
        ]
    };
    // City coordinates (approximate positions for major cities)
    const cityCoordinates = {
        "Mumbai": {
            x: 25,
            y: 45
        },
        "Delhi": {
            x: 35,
            y: 20
        },
        "Bangalore": {
            x: 32,
            y: 70
        },
        "Chennai": {
            x: 45,
            y: 75
        },
        "Kolkata": {
            x: 65,
            y: 40
        },
        "Hyderabad": {
            x: 42,
            y: 60
        },
        "Pune": {
            x: 28,
            y: 50
        },
        "Ahmedabad": {
            x: 20,
            y: 35
        },
        "Jaipur": {
            x: 30,
            y: 30
        },
        "Surat": {
            x: 22,
            y: 42
        },
        "Lucknow": {
            x: 45,
            y: 30
        },
        "Kanpur": {
            x: 42,
            y: 32
        },
        "Nagpur": {
            x: 42,
            y: 48
        },
        "Patna": {
            x: 60,
            y: 35
        },
        "Indore": {
            x: 32,
            y: 42
        },
        "Thane": {
            x: 26,
            y: 46
        },
        "Bhopal": {
            x: 35,
            y: 42
        },
        "Visakhapatnam": {
            x: 52,
            y: 62
        },
        "Vadodara": {
            x: 22,
            y: 40
        },
        "Ghaziabad": {
            x: 38,
            y: 22
        },
        "Ludhiana": {
            x: 32,
            y: 18
        },
        "Agra": {
            x: 40,
            y: 28
        },
        "Nashik": {
            x: 28,
            y: 48
        },
        "Faridabad": {
            x: 37,
            y: 23
        },
        "Meerut": {
            x: 38,
            y: 25
        },
        "Rajkot": {
            x: 18,
            y: 38
        },
        "Kalyan": {
            x: 27,
            y: 47
        },
        "Vasai": {
            x: 24,
            y: 47
        },
        "Varanasi": {
            x: 55,
            y: 35
        },
        "Srinagar": {
            x: 30,
            y: 10
        },
        "Aurangabad": {
            x: 32,
            y: 50
        },
        "Dhanbad": {
            x: 62,
            y: 38
        },
        "Amritsar": {
            x: 28,
            y: 15
        },
        "Navi Mumbai": {
            x: 26,
            y: 47
        },
        "Allahabad": {
            x: 50,
            y: 32
        },
        "Ranchi": {
            x: 60,
            y: 40
        },
        "Howrah": {
            x: 66,
            y: 41
        },
        "Coimbatore": {
            x: 35,
            y: 78
        },
        "Jabalpur": {
            x: 45,
            y: 42
        },
        "Gwalior": {
            x: 38,
            y: 35
        },
        "Vijayawada": {
            x: 45,
            y: 65
        },
        "Jodhpur": {
            x: 25,
            y: 28
        },
        "Madurai": {
            x: 40,
            y: 82
        },
        "Raipur": {
            x: 50,
            y: 45
        },
        "Kota": {
            x: 28,
            y: 32
        },
        "Chandigarh": {
            x: 33,
            y: 18
        },
        "Guwahati": {
            x: 75,
            y: 30
        },
        "Solapur": {
            x: 32,
            y: 55
        },
        "Hubballi": {
            x: 30,
            y: 68
        },
        "Tiruchirappalli": {
            x: 42,
            y: 78
        },
        "Bareilly": {
            x: 45,
            y: 25
        },
        "Mysore": {
            x: 33,
            y: 72
        },
        "Tiruppur": {
            x: 37,
            y: 80
        },
        "Gurgaon": {
            x: 35,
            y: 23
        },
        "Aligarh": {
            x: 42,
            y: 27
        },
        "Jalandhar": {
            x: 30,
            y: 17
        },
        "Bhubaneswar": {
            x: 60,
            y: 48
        },
        "Salem": {
            x: 38,
            y: 78
        },
        "Mira": {
            x: 25,
            y: 46
        },
        "Warangal": {
            x: 45,
            y: 60
        },
        "Thiruvananthapuram": {
            x: 35,
            y: 88
        },
        "Guntur": {
            x: 45,
            y: 68
        },
        "Bhiwandi": {
            x: 27,
            y: 47
        },
        "Saharanpur": {
            x: 38,
            y: 20
        },
        "Gorakhpur": {
            x: 55,
            y: 28
        },
        "Bikaner": {
            x: 22,
            y: 25
        },
        "Amravati": {
            x: 40,
            y: 48
        },
        "Noida": {
            x: 37,
            y: 22
        },
        "Jamshedpur": {
            x: 62,
            y: 40
        },
        "Bhilai": {
            x: 52,
            y: 45
        },
        "Cuttack": {
            x: 62,
            y: 48
        },
        "Firozabad": {
            x: 42,
            y: 28
        },
        "Kochi": {
            x: 33,
            y: 82
        },
        "Nellore": {
            x: 45,
            y: 70
        },
        "Bhavnagar": {
            x: 20,
            y: 42
        },
        "Dehradun": {
            x: 38,
            y: 18
        },
        "Durgapur": {
            x: 62,
            y: 38
        },
        "Asansol": {
            x: 60,
            y: 38
        },
        "Rourkela": {
            x: 58,
            y: 42
        },
        "Nanded": {
            x: 40,
            y: 52
        },
        "Kolhapur": {
            x: 30,
            y: 58
        },
        "Ajmer": {
            x: 27,
            y: 30
        },
        "Akola": {
            x: 40,
            y: 48
        },
        "Gulbarga": {
            x: 35,
            y: 62
        },
        "Jamnagar": {
            x: 16,
            y: 40
        },
        "Ujjain": {
            x: 32,
            y: 42
        },
        "Loni": {
            x: 38,
            y: 23
        },
        "Siliguri": {
            x: 65,
            y: 30
        },
        "Jhansi": {
            x: 42,
            y: 35
        },
        "Ulhasnagar": {
            x: 27,
            y: 47
        },
        "Jammu": {
            x: 32,
            y: 12
        },
        "Sangli": {
            x: 30,
            y: 58
        },
        "Mangalore": {
            x: 30,
            y: 75
        },
        "Erode": {
            x: 38,
            y: 80
        },
        "Belgaum": {
            x: 30,
            y: 65
        },
        "Ambattur": {
            x: 45,
            y: 75
        },
        "Tirunelveli": {
            x: 38,
            y: 88
        },
        "Malegaon": {
            x: 28,
            y: 48
        },
        "Gaya": {
            x: 60,
            y: 35
        },
        "Jalgaon": {
            x: 32,
            y: 48
        },
        "Udaipur": {
            x: 25,
            y: 32
        },
        "Maheshtala": {
            x: 66,
            y: 42
        }
    };
    // Filter states based on search
    const filteredStates = Object.keys(networkData).filter((state)=>state.toLowerCase().includes(searchTerm.toLowerCase()));
    // Get cities for display
    const getCitiesToDisplay = ()=>{
        if (selectedState) {
            return networkData[selectedState] || [];
        }
        return [];
    };
    // Initialize blinking animation
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "OurNetworkPage.useEffect": ()=>{
            const dots = blinkingDotsRef.current;
            dots.forEach({
                "OurNetworkPage.useEffect": (dot, index)=>{
                    if (dot) {
                        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["gsap"].to(dot, {
                            opacity: 0.3,
                            duration: 0.8,
                            repeat: -1,
                            yoyo: true,
                            delay: index * 0.2,
                            ease: "power2.inOut"
                        });
                    }
                }
            }["OurNetworkPage.useEffect"]);
        }
    }["OurNetworkPage.useEffect"], [
        selectedState
    ]);
    // Get coordinates for cities in selected state
    const getVisibleCityCoordinates = ()=>{
        if (!selectedState) return [];
        const cities = networkData[selectedState] || [];
        return cities.map((city)=>({
                name: city,
                coordinates: cityCoordinates[city]
            })).filter((city)=>city.coordinates);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "jsx-b3ae5821449b2e19" + " " + "text-black",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "jsx-b3ae5821449b2e19" + " " + "relative w-full h-[350px] md:h-[370px] mt-20 overflow-hidden flex items-center justify-center bg-white",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "jsx-b3ae5821449b2e19" + " " + "absolute inset-0 z-0",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "jsx-b3ae5821449b2e19" + " " + "w-full h-full bg-gradient-to-br from-gray-50 to-gray-100"
                        }, void 0, false, {
                            fileName: "[project]/src/app/about/ournetwork/page.tsx",
                            lineNumber: 249,
                            columnNumber: 21
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/app/about/ournetwork/page.tsx",
                        lineNumber: 247,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "jsx-b3ae5821449b2e19" + " " + "relative z-10 text-center px-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].h1, {
                                className: "text-5xl md:text-6xl font-bold text-gray-900",
                                initial: {
                                    opacity: 0,
                                    y: 30
                                },
                                animate: {
                                    opacity: 1,
                                    y: 0
                                },
                                transition: {
                                    duration: 0.6,
                                    ease: "easeOut"
                                },
                                children: "Our Network"
                            }, void 0, false, {
                                fileName: "[project]/src/app/about/ournetwork/page.tsx",
                                lineNumber: 252,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].p, {
                                className: "text-gray-600 mt-4 max-w-xl mx-auto text-lg",
                                initial: {
                                    opacity: 0,
                                    y: 20
                                },
                                animate: {
                                    opacity: 1,
                                    y: 0
                                },
                                transition: {
                                    duration: 0.6,
                                    delay: 0.2,
                                    ease: "easeOut"
                                },
                                children: "Explore the extensive reach of ECRS across India – 180+ cities and growing."
                            }, void 0, false, {
                                fileName: "[project]/src/app/about/ournetwork/page.tsx",
                                lineNumber: 260,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/about/ournetwork/page.tsx",
                        lineNumber: 251,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/about/ournetwork/page.tsx",
                lineNumber: 246,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "jsx-b3ae5821449b2e19" + " " + "py-16 bg-gradient-to-br from-gray-50 to-white",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "jsx-b3ae5821449b2e19" + " " + "max-w-7xl mx-auto px-4",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "jsx-b3ae5821449b2e19" + " " + "grid grid-cols-1 lg:grid-cols-12 gap-8 h-[800px]",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "jsx-b3ae5821449b2e19" + " " + "lg:col-span-3 bg-white rounded-2xl shadow-2xl p-6 border border-gray-100",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "jsx-b3ae5821449b2e19" + " " + "mb-6",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                className: "jsx-b3ae5821449b2e19" + " " + "text-2xl font-bold text-gray-900 mb-4",
                                                children: "States"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/about/ournetwork/page.tsx",
                                                lineNumber: 279,
                                                columnNumber: 33
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "jsx-b3ae5821449b2e19" + " " + "relative",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$search$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Search$3e$__["Search"], {
                                                        className: "absolute left-3 top-3 h-4 w-4 text-gray-400"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/about/ournetwork/page.tsx",
                                                        lineNumber: 281,
                                                        columnNumber: 37
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                        type: "text",
                                                        placeholder: "Search states...",
                                                        value: searchTerm,
                                                        onChange: (e)=>setSearchTerm(e.target.value),
                                                        className: "jsx-b3ae5821449b2e19" + " " + "w-full pl-10 pr-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent outline-none"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/about/ournetwork/page.tsx",
                                                        lineNumber: 282,
                                                        columnNumber: 37
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/about/ournetwork/page.tsx",
                                                lineNumber: 280,
                                                columnNumber: 33
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/about/ournetwork/page.tsx",
                                        lineNumber: 278,
                                        columnNumber: 29
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "jsx-b3ae5821449b2e19" + " " + "space-y-2 overflow-y-auto max-h-[600px] custom-scrollbar",
                                        children: filteredStates.map((state, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                                initial: {
                                                    opacity: 0,
                                                    x: -20
                                                },
                                                animate: {
                                                    opacity: 1,
                                                    x: 0
                                                },
                                                transition: {
                                                    duration: 0.4,
                                                    delay: index * 0.05
                                                },
                                                className: `p-4 rounded-xl cursor-pointer transition-all duration-300 group ${selectedState === state ? 'bg-red-500 text-white shadow-lg scale-105' : 'bg-gray-50 hover:bg-red-50 hover:shadow-md'}`,
                                                onClick: ()=>setSelectedState(selectedState === state ? null : state),
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "jsx-b3ae5821449b2e19" + " " + "flex items-center justify-between",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "jsx-b3ae5821449b2e19" + " " + "flex items-center space-x-3",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$map$2d$pin$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MapPin$3e$__["MapPin"], {
                                                                    className: `h-5 w-5 ${selectedState === state ? 'text-white' : 'text-red-500'}`
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/about/ournetwork/page.tsx",
                                                                    lineNumber: 308,
                                                                    columnNumber: 49
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "jsx-b3ae5821449b2e19" + " " + "font-semibold",
                                                                    children: state
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/about/ournetwork/page.tsx",
                                                                    lineNumber: 309,
                                                                    columnNumber: 49
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/app/about/ournetwork/page.tsx",
                                                            lineNumber: 307,
                                                            columnNumber: 45
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "jsx-b3ae5821449b2e19" + " " + "flex items-center space-x-2",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "jsx-b3ae5821449b2e19" + " " + `text-sm px-2 py-1 rounded-full ${selectedState === state ? 'bg-red-400 text-white' : 'bg-red-100 text-red-600'}`,
                                                                    children: networkData[state].length
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/about/ournetwork/page.tsx",
                                                                    lineNumber: 312,
                                                                    columnNumber: 49
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRight$3e$__["ChevronRight"], {
                                                                    className: `h-4 w-4 transition-transform ${selectedState === state ? 'rotate-90' : ''}`
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/about/ournetwork/page.tsx",
                                                                    lineNumber: 319,
                                                                    columnNumber: 49
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/app/about/ournetwork/page.tsx",
                                                            lineNumber: 311,
                                                            columnNumber: 45
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/about/ournetwork/page.tsx",
                                                    lineNumber: 306,
                                                    columnNumber: 41
                                                }, this)
                                            }, state, false, {
                                                fileName: "[project]/src/app/about/ournetwork/page.tsx",
                                                lineNumber: 294,
                                                columnNumber: 37
                                            }, this))
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/about/ournetwork/page.tsx",
                                        lineNumber: 292,
                                        columnNumber: 29
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/about/ournetwork/page.tsx",
                                lineNumber: 277,
                                columnNumber: 25
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "jsx-b3ae5821449b2e19" + " " + "lg:col-span-4 bg-white rounded-2xl shadow-2xl p-6 border border-gray-100",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "jsx-b3ae5821449b2e19" + " " + "mb-6",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                className: "jsx-b3ae5821449b2e19" + " " + "text-2xl font-bold text-gray-900",
                                                children: [
                                                    "Cities ",
                                                    selectedState && `in ${selectedState}`
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/about/ournetwork/page.tsx",
                                                lineNumber: 332,
                                                columnNumber: 33
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "jsx-b3ae5821449b2e19" + " " + "text-gray-600 mt-2",
                                                children: selectedState ? `${getCitiesToDisplay().length} cities available` : 'Select a state to view cities'
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/about/ournetwork/page.tsx",
                                                lineNumber: 335,
                                                columnNumber: 33
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/about/ournetwork/page.tsx",
                                        lineNumber: 331,
                                        columnNumber: 29
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "jsx-b3ae5821449b2e19" + " " + "overflow-y-auto max-h-[600px] custom-scrollbar",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AnimatePresence"], {
                                            mode: "wait",
                                            children: selectedState ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                                initial: {
                                                    opacity: 0,
                                                    y: 20
                                                },
                                                animate: {
                                                    opacity: 1,
                                                    y: 0
                                                },
                                                exit: {
                                                    opacity: 0,
                                                    y: -20
                                                },
                                                transition: {
                                                    duration: 0.3
                                                },
                                                className: "grid grid-cols-1 gap-3",
                                                children: getCitiesToDisplay().map((city, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                                        initial: {
                                                            opacity: 0,
                                                            scale: 0.9
                                                        },
                                                        animate: {
                                                            opacity: 1,
                                                            scale: 1
                                                        },
                                                        transition: {
                                                            duration: 0.3,
                                                            delay: index * 0.05
                                                        },
                                                        className: "p-3 bg-gray-50 rounded-lg hover:bg-red-50 hover:shadow-md transition-all duration-200 group cursor-pointer",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "jsx-b3ae5821449b2e19" + " " + "flex items-center space-x-3",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "jsx-b3ae5821449b2e19" + " " + "w-2 h-2 bg-red-500 rounded-full group-hover:animate-pulse"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/about/ournetwork/page.tsx",
                                                                    lineNumber: 360,
                                                                    columnNumber: 57
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "jsx-b3ae5821449b2e19" + " " + "font-medium text-gray-800 group-hover:text-red-600",
                                                                    children: city
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/about/ournetwork/page.tsx",
                                                                    lineNumber: 361,
                                                                    columnNumber: 57
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/app/about/ournetwork/page.tsx",
                                                            lineNumber: 359,
                                                            columnNumber: 53
                                                        }, this)
                                                    }, city, false, {
                                                        fileName: "[project]/src/app/about/ournetwork/page.tsx",
                                                        lineNumber: 352,
                                                        columnNumber: 49
                                                    }, this))
                                            }, selectedState, false, {
                                                fileName: "[project]/src/app/about/ournetwork/page.tsx",
                                                lineNumber: 343,
                                                columnNumber: 41
                                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                                initial: {
                                                    opacity: 0
                                                },
                                                animate: {
                                                    opacity: 1
                                                },
                                                className: "flex items-center justify-center h-40 text-gray-500",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "jsx-b3ae5821449b2e19" + " " + "text-center",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$map$2d$pin$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MapPin$3e$__["MapPin"], {
                                                            className: "h-12 w-12 mx-auto mb-4 text-gray-300"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/about/ournetwork/page.tsx",
                                                            lineNumber: 375,
                                                            columnNumber: 49
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "jsx-b3ae5821449b2e19",
                                                            children: "Select a state to view cities"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/about/ournetwork/page.tsx",
                                                            lineNumber: 376,
                                                            columnNumber: 49
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/about/ournetwork/page.tsx",
                                                    lineNumber: 374,
                                                    columnNumber: 45
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/about/ournetwork/page.tsx",
                                                lineNumber: 369,
                                                columnNumber: 41
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/about/ournetwork/page.tsx",
                                            lineNumber: 341,
                                            columnNumber: 33
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/about/ournetwork/page.tsx",
                                        lineNumber: 340,
                                        columnNumber: 29
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/about/ournetwork/page.tsx",
                                lineNumber: 330,
                                columnNumber: 25
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "jsx-b3ae5821449b2e19" + " " + "lg:col-span-5 bg-white rounded-2xl shadow-2xl p-6 border border-gray-100",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "jsx-b3ae5821449b2e19" + " " + "mb-6",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                className: "jsx-b3ae5821449b2e19" + " " + "text-2xl font-bold text-gray-900",
                                                children: "Network Map"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/about/ournetwork/page.tsx",
                                                lineNumber: 387,
                                                columnNumber: 33
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "jsx-b3ae5821449b2e19" + " " + "text-gray-600 mt-2",
                                                children: "Interactive map showing our presence across India"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/about/ournetwork/page.tsx",
                                                lineNumber: 388,
                                                columnNumber: 33
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/about/ournetwork/page.tsx",
                                        lineNumber: 386,
                                        columnNumber: 29
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "jsx-b3ae5821449b2e19" + " " + "relative h-[600px] bg-gradient-to-br from-blue-50 to-green-50 rounded-xl overflow-hidden",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                ref: mapRef,
                                                viewBox: "0 0 100 100",
                                                style: {
                                                    filter: 'drop-shadow(0 4px 6px rgba(0, 0, 0, 0.1))'
                                                },
                                                className: "jsx-b3ae5821449b2e19" + " " + "w-full h-full",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                        d: "M20 15 L25 10 L35 8 L45 10 L55 12 L65 15 L75 20 L80 30 L82 40 L80 50 L75 60 L70 70 L65 75 L60 80 L55 85 L50 88 L45 85 L40 82 L35 78 L30 75 L25 70 L20 65 L15 55 L12 45 L15 35 L18 25 Z",
                                                        fill: "rgba(239, 246, 255, 0.8)",
                                                        stroke: "rgba(59, 130, 246, 0.5)",
                                                        strokeWidth: "0.5",
                                                        className: "jsx-b3ae5821449b2e19"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/about/ournetwork/page.tsx",
                                                        lineNumber: 402,
                                                        columnNumber: 37
                                                    }, this),
                                                    getVisibleCityCoordinates().map((city, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("g", {
                                                            className: "jsx-b3ae5821449b2e19",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                                                                    ref: (el)=>{
                                                                        blinkingDotsRef.current[index] = el;
                                                                    },
                                                                    cx: city.coordinates.x,
                                                                    cy: city.coordinates.y,
                                                                    r: "1",
                                                                    fill: "#ef4444",
                                                                    className: "jsx-b3ae5821449b2e19" + " " + "animate-pulse"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/about/ournetwork/page.tsx",
                                                                    lineNumber: 412,
                                                                    columnNumber: 45
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                                                                    cx: city.coordinates.x,
                                                                    cy: city.coordinates.y,
                                                                    r: "2",
                                                                    fill: "rgba(239, 68, 68, 0.3)",
                                                                    className: "jsx-b3ae5821449b2e19" + " " + "animate-ping"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/about/ournetwork/page.tsx",
                                                                    lineNumber: 420,
                                                                    columnNumber: 45
                                                                }, this)
                                                            ]
                                                        }, `${city.name}-${index}`, true, {
                                                            fileName: "[project]/src/app/about/ournetwork/page.tsx",
                                                            lineNumber: 411,
                                                            columnNumber: 41
                                                        }, this))
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/about/ournetwork/page.tsx",
                                                lineNumber: 395,
                                                columnNumber: 33
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "jsx-b3ae5821449b2e19" + " " + "absolute bottom-4 left-4 right-4 bg-white bg-opacity-90 backdrop-blur-sm rounded-lg p-4",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "jsx-b3ae5821449b2e19" + " " + "flex items-center justify-between",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "jsx-b3ae5821449b2e19",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "jsx-b3ae5821449b2e19" + " " + "flex items-center space-x-2 mb-2",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            className: "jsx-b3ae5821449b2e19" + " " + "w-3 h-3 bg-red-500 rounded-full animate-pulse"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/app/about/ournetwork/page.tsx",
                                                                            lineNumber: 436,
                                                                            columnNumber: 49
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                            className: "jsx-b3ae5821449b2e19" + " " + "text-sm font-medium",
                                                                            children: "Active Locations"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/app/about/ournetwork/page.tsx",
                                                                            lineNumber: 437,
                                                                            columnNumber: 49
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/src/app/about/ournetwork/page.tsx",
                                                                    lineNumber: 435,
                                                                    columnNumber: 45
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                    className: "jsx-b3ae5821449b2e19" + " " + "text-xs text-gray-600",
                                                                    children: selectedState ? `Showing ${getVisibleCityCoordinates().length} cities in ${selectedState}` : 'Select a state to view locations'
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/about/ournetwork/page.tsx",
                                                                    lineNumber: 439,
                                                                    columnNumber: 45
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/app/about/ournetwork/page.tsx",
                                                            lineNumber: 434,
                                                            columnNumber: 41
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "jsx-b3ae5821449b2e19" + " " + "text-right",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "jsx-b3ae5821449b2e19" + " " + "text-2xl font-bold text-red-500",
                                                                    children: [
                                                                        Object.values(networkData).flat().length,
                                                                        "+"
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/src/app/about/ournetwork/page.tsx",
                                                                    lineNumber: 444,
                                                                    columnNumber: 45
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "jsx-b3ae5821449b2e19" + " " + "text-xs text-gray-600",
                                                                    children: "Total Cities"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/about/ournetwork/page.tsx",
                                                                    lineNumber: 447,
                                                                    columnNumber: 45
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/app/about/ournetwork/page.tsx",
                                                            lineNumber: 443,
                                                            columnNumber: 41
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/about/ournetwork/page.tsx",
                                                    lineNumber: 433,
                                                    columnNumber: 37
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/about/ournetwork/page.tsx",
                                                lineNumber: 432,
                                                columnNumber: 33
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/about/ournetwork/page.tsx",
                                        lineNumber: 393,
                                        columnNumber: 29
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/about/ournetwork/page.tsx",
                                lineNumber: 385,
                                columnNumber: 25
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/about/ournetwork/page.tsx",
                        lineNumber: 274,
                        columnNumber: 21
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/app/about/ournetwork/page.tsx",
                    lineNumber: 273,
                    columnNumber: 17
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/about/ournetwork/page.tsx",
                lineNumber: 272,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                id: "b3ae5821449b2e19",
                children: ".custom-scrollbar.jsx-b3ae5821449b2e19::-webkit-scrollbar{width:6px}.custom-scrollbar.jsx-b3ae5821449b2e19::-webkit-scrollbar-track{background:#f1f5f9;border-radius:10px}.custom-scrollbar.jsx-b3ae5821449b2e19::-webkit-scrollbar-thumb{background:#ef4444;border-radius:10px}.custom-scrollbar.jsx-b3ae5821449b2e19.jsx-b3ae5821449b2e19::-webkit-scrollbar-thumb:hover{background:#dc2626}"
            }, void 0, false, void 0, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/about/ournetwork/page.tsx",
        lineNumber: 244,
        columnNumber: 9
    }, this);
};
_s(OurNetworkPage, "1SM/0jf5ywtlnmRI+NDBmqzuwCA=");
_c = OurNetworkPage;
const __TURBOPACK__default__export__ = OurNetworkPage;
var _c;
__turbopack_context__.k.register(_c, "OurNetworkPage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
 // 'use client';
 // import React from 'react';
 // import SplitText from '@/components/ui/SplitText';
 // import Threads from '@/components/ui/Threads';
 // const OurNetworkPage = () => {
 //     return (
 //         <div className="text-black">
 //             {/* Hero Section */}
 //             <section className="relative w-full h-[350px] md:h-[370px] mt-20 overflow-hidden flex items-center justify-center bg-white">
 //                 <div className="absolute inset-0 z-0">
 //                     <Threads amplitude={1} distance={0} enableMouseInteraction={true} />
 //                 </div>
 //                 <div className="relative z-10 text-center px-4">
 //                     <SplitText
 //                         text="Our Network"
 //                         className="text-5xl md:text-6xl font-bold text-gray-900"
 //                         delay={80}
 //                         duration={0.6}
 //                         ease="power3.out"
 //                         splitType="chars"
 //                         from={{ opacity: 0, y: 30 }}
 //                         to={{ opacity: 1, y: 0 }}
 //                         threshold={0.1} onLetterAnimationComplete={undefined} />
 //                     <p className="text-gray-600 mt-4 max-w-xl mx-auto text-lg">
 //                         Explore the extensive reach of ECRS across India – 180+ cities and growing.
 //                     </p>
 //                 </div>
 //             </section>
 //             {/* State and Cities With Map */}
 //         </div>
 //     );
 // };
 // export default OurNetworkPage;
}}),
}]);

//# sourceMappingURL=src_app_about_ournetwork_page_tsx_53fddba9._.js.map