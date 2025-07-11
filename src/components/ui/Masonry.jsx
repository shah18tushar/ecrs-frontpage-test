// import {
//   useEffect,
//   useLayoutEffect,
//   useMemo,
//   useRef,
//   useState,
// } from "react";
// import { gsap } from "gsap";

// const useMedia = (queries, values, defaultValue) => {
//   const get = () => {
//     if (typeof window === "undefined") return defaultValue; // ✅ Fix for SSR
//     const index = queries.findIndex((q) => window.matchMedia(q).matches);
//     return values[index] ?? defaultValue;
//   };

//   const [value, setValue] = useState(get);

//   useEffect(() => {
//     if (typeof window === "undefined") return;

//     const handler = () => setValue(get);
//     const mediaQueryLists = queries.map((q) => window.matchMedia(q));

//     mediaQueryLists.forEach((mql) => mql.addEventListener("change", handler));

//     return () => {
//       mediaQueryLists.forEach((mql) =>
//         mql.removeEventListener("change", handler)
//       );
//     };
//     // eslint-disable-next-line react-hooks/exhaustive-deps
//   }, [queries]);

//   return value;
// };

// const useMeasure = () => {
//   const ref = useRef(null);
//   const [size, setSize] = useState({ width: 0, height: 0 });

//   useLayoutEffect(() => {
//     if (!ref.current) return;
//     const ro = new ResizeObserver(([entry]) => {
//       const { width, height } = entry.contentRect;
//       setSize({ width, height });
//     });
//     ro.observe(ref.current);
//     return () => ro.disconnect();
//   }, []);

//   return [ref, size];
// };

// const preloadImages = async (urls) => {
//   await Promise.all(
//     urls.map(
//       (src) =>
//         new Promise((resolve) => {
//           const img = new Image();
//           img.src = src;
//           img.onload = img.onerror = () => resolve();
//         })
//     )
//   );
// };

// const Masonry = ({
//   items,
//   ease = "power3.out",
//   duration = 0.6,
//   stagger = 0.05,
//   animateFrom = "bottom",
//   scaleOnHover = true,
//   hoverScale = 0.95,
//   blurToFocus = true,
//   colorShiftOnHover = false,
//   className = "",
//   style = {},
// }) => {
//   const columns = useMedia(
//     [
//       "(min-width:1500px)",
//       "(min-width:1000px)",
//       "(min-width:600px)",
//       "(min-width:400px)",
//     ],
//     [5, 4, 3, 2],
//     1
//   );

//   const [containerRef, { width }] = useMeasure();
//   const [imagesReady, setImagesReady] = useState(false);

//   const getInitialPosition = (item) => {
//     const containerRect = containerRef.current?.getBoundingClientRect();
//     if (!containerRect) return { x: item.x, y: item.y };

//     let direction = animateFrom;
//     if (animateFrom === "random") {
//       const dirs = ["top", "bottom", "left", "right"];
//       direction = dirs[
//         Math.floor(Math.random() * dirs.length)
//       ];
//     }

//     switch (direction) {
//       case "top":
//         return { x: item.x, y: -200 };
//       case "bottom":
//         return { x: item.x, y: window.innerHeight + 200 };
//       case "left":
//         return { x: -200, y: item.y };
//       case "right":
//         return { x: window.innerWidth + 200, y: item.y };
//       case "center":
//         return {
//           x: containerRect.width / 2 - item.w / 2,
//           y: containerRect.height / 2 - item.h / 2,
//         };
//       default:
//         return { x: item.x, y: item.y + 100 };
//     }
//   };

//   useEffect(() => {
//     preloadImages(items.map((i) => i.img)).then(() => setImagesReady(true));
//   }, [items]);

//   const grid = useMemo(() => {
//     if (!width) return [];
//     const colHeights = new Array(columns).fill(0);
//     const gap = 16;
//     const totalGaps = (columns - 1) * gap;
//     const columnWidth = (width - totalGaps) / columns;

//     return items.map((child) => {
//       const col = colHeights.indexOf(Math.min(...colHeights));
//       const x = col * (columnWidth + gap);
//       const height = child.height / 2;
//       const y = colHeights[col];

//       colHeights[col] += height + gap;
//       return { ...child, x, y, w: columnWidth, h: height };
//     });
//   }, [columns, items, width]);

//   const hasMounted = useRef(false);

//   useLayoutEffect(() => {
//     if (!imagesReady) return;

//     grid.forEach((item, index) => {
//       const selector = `[data-key="${item.id}"]`;
//       const animProps = { x: item.x, y: item.y, width: item.w, height: item.h };

//       if (!hasMounted.current) {
//         const start = getInitialPosition(item);
//         gsap.fromTo(
//           selector,
//           {
//             opacity: 0,
//             x: start.x,
//             y: start.y,
//             width: item.w,
//             height: item.h,
//             ...(blurToFocus && { filter: "blur(10px)" }),
//           },
//           {
//             opacity: 1,
//             ...animProps,
//             ...(blurToFocus && { filter: "blur(0px)" }),
//             duration: 0.8,
//             ease: "power3.out",
//             delay: index * stagger,
//           }
//         );
//       } else {
//         gsap.to(selector, {
//           ...animProps,
//           duration,
//           ease,
//           overwrite: "auto",
//         });
//       }
//     });

//     hasMounted.current = true;
//     // eslint-disable-next-line react-hooks/exhaustive-deps
//   }, [grid, imagesReady, stagger, animateFrom, blurToFocus, duration, ease]);

//   const handleMouseEnter = (id, element) => {
//     if (scaleOnHover) {
//       gsap.to(`[data-key="${id}"]`, {
//         scale: hoverScale,
//         duration: 0.3,
//         ease: "power2.out"
//       });
//     }
//     if (colorShiftOnHover) {
//       const overlay = element.querySelector(".color-overlay");
//       if (overlay) gsap.to(overlay, { opacity: 0.3, duration: 0.3 });
//     }
//   };

//   const handleMouseLeave = (id, element) => {
//     if (scaleOnHover) {
//       gsap.to(`[data-key="${id}"]`, {
//         scale: 1,
//         duration: 0.3,
//         ease: "power2.out"
//       });
//     }
//     if (colorShiftOnHover) {
//       const overlay = element.querySelector(".color-overlay");
//       if (overlay) gsap.to(overlay, { opacity: 0, duration: 0.3 });
//     }
//   };

//   // Calculate container height to properly contain absolute positioned items
//   const containerHeight = useMemo(() => {
//     if (!grid.length) return 0;
//     return Math.max(...grid.map(item => item.y + item.h)) + 16; // Add gap at bottom
//   }, [grid]);

//   return (
//     <div 
//       ref={containerRef} 
//       className={`relative w-full ${className}`}
//       style={{ 
//         height: containerHeight,
//         zIndex: 1,
//         isolation: 'isolate', // Create new stacking context
//         ...style 
//       }}
//     >
//       {grid.map((item) => (
//         <div
//           key={item.id}
//           data-key={item.id}
//           className="absolute box-content cursor-pointer"
//           style={{ 
//             willChange: "transform, width, height, opacity",
//             zIndex: 1, // Ensure items stay within this stacking context
//           }}
//           onMouseEnter={(e) => handleMouseEnter(item.id, e.currentTarget)}
//           onMouseLeave={(e) => handleMouseLeave(item.id, e.currentTarget)}
//         >
//           <div
//             className="relative w-full h-full bg-cover bg-center rounded-[10px] shadow-[0px_10px_50px_-10px_rgba(0,0,0,0.2)] uppercase text-[10px] leading-[10px]"
//             style={{ backgroundImage: `url(${item.img})` }}
//           >
//             {colorShiftOnHover && (
//               <div className="color-overlay absolute inset-0 rounded-[10px] bg-gradient-to-tr from-pink-500/50 to-sky-500/50 opacity-0 pointer-events-none" />
//             )}
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default Masonry;










import { useEffect, useLayoutEffect, useMemo, useRef, useState } from "react";
import { gsap } from "gsap";

const useMedia = (queries, values, defaultValue) => {
  const get = () => {
    if (typeof window === "undefined") return defaultValue; // ✅ Fix for SSR
    const index = queries.findIndex((q) => window.matchMedia(q).matches);
    return values[index] ?? defaultValue;
  };

  const [value, setValue] = useState(get);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const handler = () => setValue(get);
    const mediaQueryLists = queries.map((q) => window.matchMedia(q));

    mediaQueryLists.forEach((mql) => mql.addEventListener("change", handler));

    return () => {
      mediaQueryLists.forEach((mql) =>
        mql.removeEventListener("change", handler)
      );
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [queries]);

  return value;
};

const useMeasure = () => {
  const ref = useRef(null);
  const [size, setSize] = useState({ width: 0, height: 0 });

  useLayoutEffect(() => {
    if (!ref.current) return;
    const ro = new ResizeObserver(([entry]) => {
      const { width, height } = entry.contentRect;
      setSize({ width, height });
    });
    ro.observe(ref.current);
    return () => ro.disconnect();
  }, []);

  return [ref, size];
};

const preloadImages = async (urls) => {
  await Promise.all(
    urls.map(
      (src) =>
        new Promise((resolve) => {
          const img = new Image();
          img.src = src;
          img.onload = img.onerror = () => resolve();
        })
    )
  );
};

const Masonry = ({
  items,
  ease = "power3.out",
  duration = 0.6,
  stagger = 0.05,
  animateFrom = "bottom",
  scaleOnHover = true,
  hoverScale = 0.95,
  blurToFocus = true,
  colorShiftOnHover = false,
  className = "",
  style = {},
}) => {
  const columns = useMedia(
    [
      "(min-width:1500px)",
      "(min-width:1000px)",
      "(min-width:600px)",
      "(min-width:400px)",
    ],
    [5, 4, 3, 2],
    1
  );

  const [containerRef, { width }] = useMeasure();
  const [imagesReady, setImagesReady] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  const getInitialPosition = (item) => {
    const containerRect = containerRef.current?.getBoundingClientRect();
    if (!containerRect) return { x: item.x, y: item.y };

    let direction = animateFrom;
    if (animateFrom === "random") {
      const dirs = ["top", "bottom", "left", "right"];
      direction = dirs[Math.floor(Math.random() * dirs.length)];
    }

    switch (direction) {
      case "top":
        return { x: item.x, y: -200 };
      case "bottom":
        return { x: item.x, y: window.innerHeight + 200 };
      case "left":
        return { x: -200, y: item.y };
      case "right":
        return { x: window.innerWidth + 200, y: item.y };
      case "center":
        return {
          x: containerRect.width / 2 - item.w / 2,
          y: containerRect.height / 2 - item.h / 2,
        };
      default:
        return { x: item.x, y: item.y + 100 };
    }
  };

  useEffect(() => {
    preloadImages(items.map((i) => i.img)).then(() => setImagesReady(true));
  }, [items]);

  const grid = useMemo(() => {
    if (!width) return [];
    const colHeights = new Array(columns).fill(0);
    const gap = 16;
    const totalGaps = (columns - 1) * gap;
    const columnWidth = (width - totalGaps) / columns;

    return items.map((child) => {
      const col = colHeights.indexOf(Math.min(...colHeights));
      const x = col * (columnWidth + gap);
      const height = child.height / 2;
      const y = colHeights[col];

      colHeights[col] += height + gap;
      return { ...child, x, y, w: columnWidth, h: height };
    });
  }, [columns, items, width]);

  const hasMounted = useRef(false);

  useLayoutEffect(() => {
    if (!imagesReady) return;

    grid.forEach((item, index) => {
      const selector = `[data-key="${item.id}"]`;
      const animProps = { x: item.x, y: item.y, width: item.w, height: item.h };

      if (!hasMounted.current) {
        const start = getInitialPosition(item);
        gsap.fromTo(
          selector,
          {
            opacity: 0,
            x: start.x,
            y: start.y,
            width: item.w,
            height: item.h,
            ...(blurToFocus && { filter: "blur(10px)" }),
          },
          {
            opacity: 1,
            ...animProps,
            ...(blurToFocus && { filter: "blur(0px)" }),
            duration: 0.8,
            ease: "power3.out",
            delay: index * stagger,
          }
        );
      } else {
        gsap.to(selector, {
          ...animProps,
          duration,
          ease,
          overwrite: "auto",
        });
      }
    });

    hasMounted.current = true;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [grid, imagesReady, stagger, animateFrom, blurToFocus, duration, ease]);

  const handleMouseEnter = (id, element) => {
    if (scaleOnHover) {
      gsap.to(`[data-key="${id}"]`, {
        scale: hoverScale,
        duration: 0.3,
        ease: "power2.out",
      });
    }
    if (colorShiftOnHover) {
      const overlay = element.querySelector(".color-overlay");
      if (overlay) gsap.to(overlay, { opacity: 0.3, duration: 0.3 });
    }
  };

  const handleMouseLeave = (id, element) => {
    if (scaleOnHover) {
      gsap.to(`[data-key="${id}"]`, {
        scale: 1,
        duration: 0.3,
        ease: "power2.out",
      });
    }
    if (colorShiftOnHover) {
      const overlay = element.querySelector(".color-overlay");
      if (overlay) gsap.to(overlay, { opacity: 0, duration: 0.3 });
    }
  };

  const handleImageClick = (item) => {
    setSelectedImage(item);
  };

  const closePopup = () => {
    setSelectedImage(null);
  };

  // Calculate container height to properly contain absolute positioned items
  const containerHeight = useMemo(() => {
    if (!grid.length) return 0;
    return Math.max(...grid.map((item) => item.y + item.h)) + 16; // Add gap at bottom
  }, [grid]);

  return (
    <>
      <div
        ref={containerRef}
        className={`relative w-full ${className}`}
        style={{
          height: containerHeight,
          zIndex: 1,
          isolation: "isolate", // Create new stacking context
          ...style,
        }}
      >
        {grid.map((item) => (
          <div
            key={item.id}
            data-key={item.id}
            className="absolute box-content cursor-pointer"
            style={{
              willChange: "transform, width, height, opacity",
              zIndex: 1, // Ensure items stay within this stacking context
            }}
            onMouseEnter={(e) => handleMouseEnter(item.id, e.currentTarget)}
            onMouseLeave={(e) => handleMouseLeave(item.id, e.currentTarget)}
            onClick={() => handleImageClick(item)}
          >
            <div
              className="relative w-full h-full bg-cover bg-center rounded-[10px] shadow-[0px_10px_50px_-10px_rgba(0,0,0,0.2)] uppercase text-[10px] leading-[10px]"
              style={{ backgroundImage: `url(${item.img})` }}
            >
              {colorShiftOnHover && (
                <div className="color-overlay absolute inset-0 rounded-[10px] bg-gradient-to-tr from-pink-500/50 to-sky-500/50 opacity-0 pointer-events-none" />
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Image Popup */}
      {selectedImage && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-70 backdrop-blur-md">
          <div className="relative max-w-[90vw] max-h-[90vh]">
            <button
              onClick={closePopup}
              className="absolute -top-10 -right-10 text-white text-2xl p-2 hover:text-gray-300"
            >
              ×
            </button>
            <img
              src={selectedImage.img}
              alt=""
              className="max-w-full max-h-[80vh] object-contain rounded-lg shadow-xl"
            />
          </div>
        </div>
      )}
    </>
  );
};
export default Masonry;