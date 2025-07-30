"use client";
import React, { useRef, useState } from "react";
import SplitText from "@/components/ui/SplitText";
import Threads from "@/components/ui/Threads";
import { useGSAPFadeInUp } from "@/utils/animations";
import { X } from "lucide-react";

const GalleryPage = () => {
  const titleRef = useRef(null);
  useGSAPFadeInUp(0, 0.8, titleRef);

  const branches = [
    "Akurdi Office",
    "Thergaon Office",
    "Airport Office",
    "Events",
  ];
  const [selectedBranch, setSelectedBranch] = useState("Akurdi Office");
  const [selectedImage, setSelectedImage] = useState(null);
  const modalRef = useRef(null);

  // Static image data for each branch
  const galleryData = {
    "akurdi office": [
      { url: "/akurdi1.jpg", name: "Main Entrance" },
      { url: "/akurdi2.jpg", name: "Billing Department" },
      { url: "/akurdi3.jpg", name: "Sales Department" },
      { url: "/akurdi4.jpg", name: "Business Development" },
      { url: "/akurdi5.jpg", name: "Accounts Department" },
      { url: "/akurdi6.jpg", name: "HR Department" },
      { url: "/akurdi7.jpg", name: "Billing Department" },
      { url: "/akurdi8.jpg", name: "Credit Control Department" },
      { url: "/akurdi9.jpg", name: "Sales Department" },
      { url: "/akurdi10.jpg", name: "Accounts Department" },
      { url: "/akurdi11.jpg", name: "Admin Department" },
      { url: "/akurdi12.jpg", name: "Conference Room" },
      { url: "/akurdi13.jpg", name: "MD" },
      { url: "/akurdi14.jpg", name: "MD Cabin" },
      {
        url: "/akurdi15.jpg",
        name: "Company Directors ",
      },
      { url: "/akurdi16.jpg", name: "Billing department side view" },
    ],
    "thergaon office": [
      { url: "/ther1.jpg", name: "Thergaon Office" },
      { url: "/ther2.jpg", name: "Thergaon Operations" },
      { url: "/ther3.jpg", name: "ECRS Drivers 1" },
      { url: "/ther4.jpg", name: "ECRS Drivers 2" },
      { url: "/ther5.jpg", name: "Thergaon Parking View 1" },
      { url: "/ther6.jpg", name: "Thergaon Parking View 2" },
      { url: "/ther7.jpg", name: "Thergaon Parking View 3" },
      { url: "/ther8.jpg", name: "Thergaon Parking View 4" },
      { url: "/ther9.jpg", name: "Thergaon Parking View 5" },
      { url: "/ther10.jpg", name: "Security Check 1" },
      { url: "/ther11.jpg", name: "Security Guard" },
      { url: "/ther12.jpg", name: "Garage View" },
      { url: "/ther13.jpg", name: "Garage View" },
      { url: "/ther14.jpg", name: "Garage View" },
      { url: "/ther15.jpg", name: "Garage View" },
      { url: "/ther16.jpg", name: "Garage View" },
      { url: "/ther17.jpg", name: "Security check" },
      { url: "/ther18.jpg", name: "Security check" },
      { url: "/ther19.jpg", name: "Security check" },
      { url: "/ther20.jpg", name: "Petrol Pump" },
      { url: "/ther21.jpg", name: "Security Cabin" },
    ],
    "airport office": [
      { url: "/air10.jpg", name: "Airport office" },
      { url: "/air1.jpg", name: "Airport operations" },
      { url: "/air2.jpg", name: "Airport operations side view" },
      { url: "/air3.jpg", name: "Airport booking department" },
      { url: "/air4.jpg", name: "Airport parking view 1" },
      { url: "/air5.jpg", name: "Airport parking view 2" },
      { url: "/air6.jpg", name: "Airport parking view 3" },
      { url: "/air7.jpg", name: "Car washing center" },
      { url: "/air8.jpg", name: "ECRS drivers" },
      { url: "/air9.jpg", name: "Operations staff" },
    ],
    events: [
      { url: "/event1.jpg", name: "Annual Day 2023" },
      { url: "/event2.jpg", name: "Team Outing" },
      { url: "/event3.jpg", name: "Conference 2023" },
      { url: "/event4.jpg", name: "Workshop" },
      { url: "/event5.jpg", name: "Award Ceremony" },
    ],
  };

  const filteredItems = galleryData[selectedBranch.toLowerCase()].map(
    (image, index) => ({
      id: `${selectedBranch.toLowerCase()}-${index}`,
      imageUrl: image.url,
      name: image.name,
      branch: selectedBranch,
    })
  );

  const closeModal = (e) => {
    if (modalRef.current && !modalRef.current.contains(e.target)) {
      setSelectedImage(null);
    }
  };

  return (
    <div className="text-black">
      {/* Hero Section */}
      <section className="relative w-full h-[240px] md:h-[260px] mt-9 overflow-hidden flex items-center justify-center bg-white">
        <div className="absolute inset-0 z-0 scale-[1.3] ">
          <Threads amplitude={1} distance={0} enableMouseInteraction={false} />
        </div>
        <div className="relative z-10 text-center px-4" ref={titleRef}>
          <SplitText
            text="Story Told Through Visuals"
            className="text-5xl md:text-3xl font-bold text-black"
            delay={80}
            duration={0.6}
            ease="power3.out"
            splitType="chars"
            from={{ opacity: 0, y: 30 }}
            to={{ opacity: 1, y: 0 }}
            threshold={0.1}
          />
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Browse through our vibrant gallery of visuals , each
            telling a unique story.
          </p>
        </div>
      </section>

      {/* Filter Section */}
      <div className="flex flex-wrap justify-center gap-3 px-4">
        {branches.map((branch) => (
          <button
            key={branch}
            onClick={() => setSelectedBranch(branch)}
            className={`px-4 py-2 rounded-md border text-sm font-medium transition-all cursor-pointer ${
              selectedBranch === branch
                ? "bg-red-600 text-white border-red-600"
                : "border-gray-300 text-gray-700 hover:bg-gray-100"
            }`}
          >
            {branch}
          </button>
        ))}
      </div>

      {/* Gallery Grid Section */}
      <section className="px-4 md:px-8 lg:px-16 mt-8 pb-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              className="relative group overflow-hidden rounded-lg shadow-md transition-all duration-300 hover:shadow-xl cursor-pointer "
              onClick={() => setSelectedImage(item)}
            >
              <img
                src={item.imageUrl}
                alt={item.name}
                className="w-full h-64 object-cover transition-transform duration-500  group-hover:scale-105"
              />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 to-transparent p-4">
                <h3 className="text-white font-medium text-center">
                  {item.name}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Image Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm transition-opacity duration-300"
          onClick={closeModal}
        >
          <div
            ref={modalRef}
            className="relative  max-h-[90vh] bg-white rounded-xl overflow-hidden shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="absolute top-4 right-4 z-50 p-2 bg-black/50 rounded-full text-white hover:bg-black/80 transition-colors cursor-pointer"
              onClick={() => setSelectedImage(null)}
            >
              <X size={24} />
            </button>

            <div className="flex flex-col h-full">
              <div className="flex-1 overflow-hidden flex items-center justify-center bg-gray-100">
                <img
                  src={selectedImage.imageUrl}
                  alt={selectedImage.name}
                  className="relative w-full max-h-[90vh] object-cover"
                />
                <div className="absolute bottom-5 left-5">
                  <div className=" bg-red-600 backdrop-blur-md rounded-4xl p-2">
                    <h3 className="text-base font-semibold text-white px-4">
                      {selectedImage.name}
                    </h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default GalleryPage;
