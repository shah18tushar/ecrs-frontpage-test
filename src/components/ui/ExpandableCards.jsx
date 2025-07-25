// "use client";
// import { useEffect, useState } from "react";

// const cards = [
//   {
//     title: "BMW",
//     image: "/Offer1.jpg",
//   },
//   {
//     title: "Lamborghini",
//     image: "/Offer2.jpg",
//   },
//   {
//     title: "Audi",
//     image:
//       "https://images.pexels.com/photos/4914160/pexels-photo-4914160.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
//   },
//   {
//     title: "Ford Mustang",
//     image:
//       "https://images.pexels.com/photos/14270754/pexels-photo-14270754.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
//   },
//   {
//     title: "Corvette",
//     image:
//       "https://images.pexels.com/photos/12226220/pexels-photo-12226220.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
//   },
// ];

// export default function ExpandableCards() {
//   const [activeIndex, setActiveIndex] = useState(0);

//   // Autoplay every 4 seconds
//   useEffect(() => {
//     const interval = setInterval(() => {
//       setActiveIndex((prev) => (prev + 1) % cards.length);
//     }, 8000);
//     return () => clearInterval(interval);
//   }, []);

//   return (
//     <div className="h-[90vh] flex items-center justify-center overflow-hidden">
//       <div className="flex w-[90vw]">
//         {cards.map((card, index) => (
//           <div
//             key={index}
//             onClick={() => setActiveIndex(index)}
//             className={`relative rounded-[50px] mx-1 cursor-pointer transition-all duration-[3000ms] ease-in-out overflow-hidden
//               ${
//                 activeIndex === index
//                   ? "flex-[5]"
//                   : "flex-[0.5] sm:flex-[0.5] transition-all duration-[3000ms]"
//               }
//               ${index > 2 ? "hidden max-[480px]:hidden sm:block" : "block"}
//             `}
//             style={{
//               backgroundImage: `url(${card.image})`,
//               backgroundSize: "auto 100%",
//               backgroundPosition: "center",
//               backgroundRepeat: "no-repeat",
//               height: "80vh",
//               width: "100%",
//             }}
//           >
//             <h3
//               className={`absolute bottom-5 left-1/2 transform -translate-x-1/2 text-white text-2xl font-semibold transition-opacity duration-700 ${
//                 activeIndex === index ? "opacity-100" : "opacity-0"
//               }`}
//             >
//               {card.title}
//             </h3>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }



"use client";
import { useEffect, useState } from "react";

const cards = [
  {
    title: "BMW",
    image: "/Offer1.jpg",
  },
  {
    title: "Lamborghini",
    image: "/Offer2.jpg",
  },
  {
    title: "Audi",
    image:
      "https://images.pexels.com/photos/4914160/pexels-photo-4914160.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  },
  {
    title: "Ford Mustang",
    image:
      "https://images.pexels.com/photos/14270754/pexels-photo-14270754.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  },
  {
    title: "Corvette",
    image:
      "https://images.pexels.com/photos/12226220/pexels-photo-12226220.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  },
];

export default function ExpandableCards() {
  const [activeIndex, setActiveIndex] = useState(0);

  // Autoplay every 8 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % cards.length);
    }, 8000);
    return () => clearInterval(interval);
  }, []);

  // Mobile slider navigation
  const goToPrev = () => {
    setActiveIndex((prev) => (prev === 0 ? cards.length - 1 : prev - 1));
  };

  const goToNext = () => {
    setActiveIndex((prev) => (prev + 1) % cards.length);
  };

  return (
    <>
      {/* Desktop/Laptop View (unchanged from your original) */}
      <div className="hidden md:block h-[90vh] flex items-center justify-center overflow-hidden">
        <div className="flex w-[90vw]">
          {cards.map((card, index) => (
            <div
              key={index}
              onClick={() => setActiveIndex(index)}
              className={`relative rounded-[50px] mx-1 cursor-pointer transition-all duration-[3000ms] ease-in-out overflow-hidden
                ${
                  activeIndex === index
                    ? "flex-[5]"
                    : "flex-[0.5] sm:flex-[0.5] transition-all duration-[3000ms]"
                }
                ${index > 2 ? "hidden max-[480px]:hidden sm:block" : "block"}
              `}
              style={{
                backgroundImage: `url(${card.image})`,
                backgroundSize: "auto 100%",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                height: "80vh",
                width: "100%",
              }}
            >
              <h3
                className={`absolute bottom-5 left-1/2 transform -translate-x-1/2 text-white text-2xl font-semibold transition-opacity duration-700 ${
                  activeIndex === index ? "opacity-100" : "opacity-0"
                }`}
              >
                {card.title}
              </h3>
            </div>
          ))}
        </div>
      </div>

      {/* Mobile/Tablet View (new slider implementation) */}
      <div className="md:hidden relative h-[60vh] w-full overflow-hidden">
        {/* Slider container */}
        <div
          className="flex h-full transition-transform duration-500 ease-out"
          style={{
            transform: `translateX(-${activeIndex * 100}%)`,
          }}
        >
          {cards.map((card, index) => (
            <div
              key={index}
              className="flex-shrink-0 w-full h-full relative"
              style={{
                backgroundImage: `url(${card.image})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
              }}
            >
              <h3 className="absolute bottom-5 left-1/2 transform -translate-x-1/2 text-white text-xl font-semibold">
                {card.title}
              </h3>
            </div>
          ))}
        </div>

        {/* Navigation arrows */}
        <button
          onClick={goToPrev}
          className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full"
        >
          &lt;
        </button>
        <button
          onClick={goToNext}
          className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full"
        >
          &gt;
        </button>

        {/* Dots indicator */}
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
          {cards.map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveIndex(index)}
              className={`w-2 h-2 rounded-full ${
                activeIndex === index ? "bg-white" : "bg-gray-400"
              }`}
            />
          ))}
        </div>
      </div>
    </>
  );
}