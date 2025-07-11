(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push([typeof document === "object" ? document.currentScript : undefined, {

"[project]/src/components/ui/Masonry.jsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
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
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/gsap/index.js [app-client] (ecmascript) <locals>");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature(), _s2 = __turbopack_context__.k.signature();
;
;
const useMedia = (queries, values, defaultValue)=>{
    _s();
    const get = ()=>{
        if ("TURBOPACK compile-time falsy", 0) {
            "TURBOPACK unreachable";
        } // ✅ Fix for SSR
        const index = queries.findIndex((q)=>window.matchMedia(q).matches);
        return values[index] ?? defaultValue;
    };
    const [value, setValue] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(get);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useMedia.useEffect": ()=>{
            if ("TURBOPACK compile-time falsy", 0) {
                "TURBOPACK unreachable";
            }
            const handler = {
                "useMedia.useEffect.handler": ()=>setValue(get)
            }["useMedia.useEffect.handler"];
            const mediaQueryLists = queries.map({
                "useMedia.useEffect.mediaQueryLists": (q)=>window.matchMedia(q)
            }["useMedia.useEffect.mediaQueryLists"]);
            mediaQueryLists.forEach({
                "useMedia.useEffect": (mql)=>mql.addEventListener("change", handler)
            }["useMedia.useEffect"]);
            return ({
                "useMedia.useEffect": ()=>{
                    mediaQueryLists.forEach({
                        "useMedia.useEffect": (mql)=>mql.removeEventListener("change", handler)
                    }["useMedia.useEffect"]);
                }
            })["useMedia.useEffect"];
        // eslint-disable-next-line react-hooks/exhaustive-deps
        }
    }["useMedia.useEffect"], [
        queries
    ]);
    return value;
};
_s(useMedia, "4cCov9cipuUFrtyheqn9gyzPGSg=");
const useMeasure = ()=>{
    _s1();
    const ref = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const [size, setSize] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        width: 0,
        height: 0
    });
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLayoutEffect"])({
        "useMeasure.useLayoutEffect": ()=>{
            if (!ref.current) return;
            const ro = new ResizeObserver({
                "useMeasure.useLayoutEffect": ([entry])=>{
                    const { width, height } = entry.contentRect;
                    setSize({
                        width,
                        height
                    });
                }
            }["useMeasure.useLayoutEffect"]);
            ro.observe(ref.current);
            return ({
                "useMeasure.useLayoutEffect": ()=>ro.disconnect()
            })["useMeasure.useLayoutEffect"];
        }
    }["useMeasure.useLayoutEffect"], []);
    return [
        ref,
        size
    ];
};
_s1(useMeasure, "GYjbSTsQ0vDlpjZVEQNK26QY9GU=");
const preloadImages = async (urls)=>{
    await Promise.all(urls.map((src)=>new Promise((resolve)=>{
            const img = new Image();
            img.src = src;
            img.onload = img.onerror = ()=>resolve();
        })));
};
const Masonry = ({ items, ease = "power3.out", duration = 0.6, stagger = 0.05, animateFrom = "bottom", scaleOnHover = true, hoverScale = 0.95, blurToFocus = true, colorShiftOnHover = false, className = "", style = {} })=>{
    _s2();
    const columns = useMedia([
        "(min-width:1500px)",
        "(min-width:1000px)",
        "(min-width:600px)",
        "(min-width:400px)"
    ], [
        5,
        4,
        3,
        2
    ], 1);
    const [containerRef, { width }] = useMeasure();
    const [imagesReady, setImagesReady] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [selectedImage, setSelectedImage] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const getInitialPosition = (item)=>{
        const containerRect = containerRef.current?.getBoundingClientRect();
        if (!containerRect) return {
            x: item.x,
            y: item.y
        };
        let direction = animateFrom;
        if (animateFrom === "random") {
            const dirs = [
                "top",
                "bottom",
                "left",
                "right"
            ];
            direction = dirs[Math.floor(Math.random() * dirs.length)];
        }
        switch(direction){
            case "top":
                return {
                    x: item.x,
                    y: -200
                };
            case "bottom":
                return {
                    x: item.x,
                    y: window.innerHeight + 200
                };
            case "left":
                return {
                    x: -200,
                    y: item.y
                };
            case "right":
                return {
                    x: window.innerWidth + 200,
                    y: item.y
                };
            case "center":
                return {
                    x: containerRect.width / 2 - item.w / 2,
                    y: containerRect.height / 2 - item.h / 2
                };
            default:
                return {
                    x: item.x,
                    y: item.y + 100
                };
        }
    };
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Masonry.useEffect": ()=>{
            preloadImages(items.map({
                "Masonry.useEffect": (i)=>i.img
            }["Masonry.useEffect"])).then({
                "Masonry.useEffect": ()=>setImagesReady(true)
            }["Masonry.useEffect"]);
        }
    }["Masonry.useEffect"], [
        items
    ]);
    const grid = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "Masonry.useMemo[grid]": ()=>{
            if (!width) return [];
            const colHeights = new Array(columns).fill(0);
            const gap = 16;
            const totalGaps = (columns - 1) * gap;
            const columnWidth = (width - totalGaps) / columns;
            return items.map({
                "Masonry.useMemo[grid]": (child)=>{
                    const col = colHeights.indexOf(Math.min(...colHeights));
                    const x = col * (columnWidth + gap);
                    const height = child.height / 2;
                    const y = colHeights[col];
                    colHeights[col] += height + gap;
                    return {
                        ...child,
                        x,
                        y,
                        w: columnWidth,
                        h: height
                    };
                }
            }["Masonry.useMemo[grid]"]);
        }
    }["Masonry.useMemo[grid]"], [
        columns,
        items,
        width
    ]);
    const hasMounted = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLayoutEffect"])({
        "Masonry.useLayoutEffect": ()=>{
            if (!imagesReady) return;
            grid.forEach({
                "Masonry.useLayoutEffect": (item, index)=>{
                    const selector = `[data-key="${item.id}"]`;
                    const animProps = {
                        x: item.x,
                        y: item.y,
                        width: item.w,
                        height: item.h
                    };
                    if (!hasMounted.current) {
                        const start = getInitialPosition(item);
                        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["gsap"].fromTo(selector, {
                            opacity: 0,
                            x: start.x,
                            y: start.y,
                            width: item.w,
                            height: item.h,
                            ...blurToFocus && {
                                filter: "blur(10px)"
                            }
                        }, {
                            opacity: 1,
                            ...animProps,
                            ...blurToFocus && {
                                filter: "blur(0px)"
                            },
                            duration: 0.8,
                            ease: "power3.out",
                            delay: index * stagger
                        });
                    } else {
                        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["gsap"].to(selector, {
                            ...animProps,
                            duration,
                            ease,
                            overwrite: "auto"
                        });
                    }
                }
            }["Masonry.useLayoutEffect"]);
            hasMounted.current = true;
        // eslint-disable-next-line react-hooks/exhaustive-deps
        }
    }["Masonry.useLayoutEffect"], [
        grid,
        imagesReady,
        stagger,
        animateFrom,
        blurToFocus,
        duration,
        ease
    ]);
    const handleMouseEnter = (id, element)=>{
        if (scaleOnHover) {
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["gsap"].to(`[data-key="${id}"]`, {
                scale: hoverScale,
                duration: 0.3,
                ease: "power2.out"
            });
        }
        if (colorShiftOnHover) {
            const overlay = element.querySelector(".color-overlay");
            if (overlay) __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["gsap"].to(overlay, {
                opacity: 0.3,
                duration: 0.3
            });
        }
    };
    const handleMouseLeave = (id, element)=>{
        if (scaleOnHover) {
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["gsap"].to(`[data-key="${id}"]`, {
                scale: 1,
                duration: 0.3,
                ease: "power2.out"
            });
        }
        if (colorShiftOnHover) {
            const overlay = element.querySelector(".color-overlay");
            if (overlay) __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["gsap"].to(overlay, {
                opacity: 0,
                duration: 0.3
            });
        }
    };
    const handleImageClick = (item)=>{
        setSelectedImage(item);
    };
    const closePopup = ()=>{
        setSelectedImage(null);
    };
    // Calculate container height to properly contain absolute positioned items
    const containerHeight = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "Masonry.useMemo[containerHeight]": ()=>{
            if (!grid.length) return 0;
            return Math.max(...grid.map({
                "Masonry.useMemo[containerHeight]": (item)=>item.y + item.h
            }["Masonry.useMemo[containerHeight]"])) + 16; // Add gap at bottom
        }
    }["Masonry.useMemo[containerHeight]"], [
        grid
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                ref: containerRef,
                className: `relative w-full ${className}`,
                style: {
                    height: containerHeight,
                    zIndex: 1,
                    isolation: "isolate",
                    ...style
                },
                children: grid.map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        "data-key": item.id,
                        className: "absolute box-content cursor-pointer",
                        style: {
                            willChange: "transform, width, height, opacity",
                            zIndex: 1
                        },
                        onMouseEnter: (e)=>handleMouseEnter(item.id, e.currentTarget),
                        onMouseLeave: (e)=>handleMouseLeave(item.id, e.currentTarget),
                        onClick: ()=>handleImageClick(item),
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "relative w-full h-full bg-cover bg-center rounded-[10px] shadow-[0px_10px_50px_-10px_rgba(0,0,0,0.2)] uppercase text-[10px] leading-[10px]",
                            style: {
                                backgroundImage: `url(${item.img})`
                            },
                            children: colorShiftOnHover && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "color-overlay absolute inset-0 rounded-[10px] bg-gradient-to-tr from-pink-500/50 to-sky-500/50 opacity-0 pointer-events-none"
                            }, void 0, false, {
                                fileName: "[project]/src/components/ui/Masonry.jsx",
                                lineNumber: 530,
                                columnNumber: 17
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/ui/Masonry.jsx",
                            lineNumber: 525,
                            columnNumber: 13
                        }, this)
                    }, item.id, false, {
                        fileName: "[project]/src/components/ui/Masonry.jsx",
                        lineNumber: 513,
                        columnNumber: 11
                    }, this))
            }, void 0, false, {
                fileName: "[project]/src/components/ui/Masonry.jsx",
                lineNumber: 502,
                columnNumber: 7
            }, this),
            selectedImage && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-70 backdrop-blur-md",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "relative max-w-[90vw] max-h-[90vh]",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: closePopup,
                            className: "absolute -top-10 -right-10 text-white text-2xl p-2 hover:text-gray-300",
                            children: "×"
                        }, void 0, false, {
                            fileName: "[project]/src/components/ui/Masonry.jsx",
                            lineNumber: 541,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                            src: selectedImage.img,
                            alt: "",
                            className: "max-w-full max-h-[80vh] object-contain rounded-lg shadow-xl"
                        }, void 0, false, {
                            fileName: "[project]/src/components/ui/Masonry.jsx",
                            lineNumber: 547,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/ui/Masonry.jsx",
                    lineNumber: 540,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/ui/Masonry.jsx",
                lineNumber: 539,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true);
};
_s2(Masonry, "i3eyMjoE4z782Hh3SyTb/CmEMpo=", false, function() {
    return [
        useMedia,
        useMeasure
    ];
});
_c = Masonry;
const __TURBOPACK__default__export__ = Masonry;
var _c;
__turbopack_context__.k.register(_c, "Masonry");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/data/gallery.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "items": (()=>items)
});
const items = [
    {
        id: "1",
        img: "/car-1.jpg",
        url: "https://example.com/one",
        height: 400
    },
    {
        id: "2",
        img: "/carpic3.jpg",
        url: "https://example.com/two",
        height: 250
    },
    {
        id: "3",
        img: "/car.jpg",
        url: "https://example.com/three",
        height: 600
    },
    {
        id: "4",
        img: "/carpic1.jpg",
        url: "https://example.com/four",
        height: 300
    },
    {
        id: "5",
        img: "/carpic2.jpg",
        url: "https://example.com/five",
        height: 250
    },
    {
        id: "6",
        img: "/carpic4.jpg",
        url: "https://example.com/six",
        height: 500
    }
];
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/components/ui/SplitText.jsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/gsap/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$ScrollTrigger$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/gsap/ScrollTrigger.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$SplitText$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/gsap/SplitText.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["gsap"].registerPlugin(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$ScrollTrigger$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ScrollTrigger"], __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$SplitText$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SplitText"]);
const SplitText = ({ text, className = "", delay = 100, duration = 0.6, ease = "power3.out", splitType = "chars", from = {
    opacity: 0,
    y: 40
}, to = {
    opacity: 1,
    y: 0
}, threshold = 0.1, rootMargin = "-100px", textAlign = "center", onLetterAnimationComplete })=>{
    _s();
    const ref = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const animationCompletedRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "SplitText.useEffect": ()=>{
            const el = ref.current;
            if (!el || animationCompletedRef.current) return;
            const absoluteLines = splitType === "lines";
            if (absoluteLines) el.style.position = "relative";
            const splitter = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$SplitText$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SplitText"](el, {
                type: splitType,
                absolute: absoluteLines,
                linesClass: "split-line"
            });
            let targets;
            switch(splitType){
                case "lines":
                    targets = splitter.lines;
                    break;
                case "words":
                    targets = splitter.words;
                    break;
                case "words, chars":
                    targets = [
                        ...splitter.words,
                        ...splitter.chars
                    ];
                    break;
                default:
                    targets = splitter.chars;
            }
            targets.forEach({
                "SplitText.useEffect": (t)=>{
                    t.style.willChange = "transform, opacity";
                }
            }["SplitText.useEffect"]);
            const startPct = (1 - threshold) * 100;
            const m = /^(-?\d+)px$/.exec(rootMargin);
            const raw = m ? parseInt(m[1], 10) : 0;
            const sign = raw < 0 ? `-=${Math.abs(raw)}px` : `+=${raw}px`;
            const start = `top ${startPct}%${sign}`;
            const tl = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["gsap"].timeline({
                scrollTrigger: {
                    trigger: el,
                    start,
                    toggleActions: "play none none none",
                    once: true
                },
                smoothChildTiming: true,
                onComplete: {
                    "SplitText.useEffect.tl": ()=>{
                        animationCompletedRef.current = true;
                        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["gsap"].set(targets, {
                            ...to,
                            clearProps: "willChange",
                            immediateRender: true
                        });
                        onLetterAnimationComplete?.();
                    }
                }["SplitText.useEffect.tl"]
            });
            tl.set(targets, {
                ...from,
                immediateRender: false,
                force3D: true
            });
            tl.to(targets, {
                ...to,
                duration,
                ease,
                stagger: delay / 1000,
                force3D: true
            });
            return ({
                "SplitText.useEffect": ()=>{
                    tl.kill();
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$ScrollTrigger$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ScrollTrigger"].getAll().forEach({
                        "SplitText.useEffect": (t)=>t.kill()
                    }["SplitText.useEffect"]);
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["gsap"].killTweensOf(targets);
                    splitter.revert();
                }
            })["SplitText.useEffect"];
        }
    }["SplitText.useEffect"], [
        text,
        delay,
        duration,
        ease,
        splitType,
        from,
        to,
        threshold,
        rootMargin,
        onLetterAnimationComplete,
        ref
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
        ref: ref,
        className: `split-parent inline-block whitespace-normal ${className}`,
        style: {
            textAlign,
            wordWrap: "break-word",
            overflow: "visible",
            display: "inline-block",
            lineHeight: 1.2,
            paddingBottom: "0.5em"
        },
        children: text
    }, void 0, false, {
        fileName: "[project]/src/components/ui/SplitText.jsx",
        lineNumber: 113,
        columnNumber: 5
    }, this);
};
_s(SplitText, "0rzbanzaLXZqpzK52RWHCr2wwp0=");
_c = SplitText;
const __TURBOPACK__default__export__ = SplitText;
var _c;
__turbopack_context__.k.register(_c, "SplitText");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/components/ui/Threads.jsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$ogl$2f$src$2f$core$2f$Renderer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/ogl/src/core/Renderer.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$ogl$2f$src$2f$core$2f$Program$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/ogl/src/core/Program.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$ogl$2f$src$2f$core$2f$Mesh$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/ogl/src/core/Mesh.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$ogl$2f$src$2f$extras$2f$Triangle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/ogl/src/extras/Triangle.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$ogl$2f$src$2f$math$2f$Color$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/ogl/src/math/Color.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
;
;
const vertexShader = `
attribute vec2 position;
attribute vec2 uv;
varying vec2 vUv;
void main() {
  vUv = uv;
  gl_Position = vec4(position, 0.0, 1.0);
}
`;
const fragmentShader = `
precision highp float;

uniform float iTime;
uniform vec3 iResolution;
uniform vec3 uColor;
uniform float uAmplitude;
uniform float uDistance;
uniform vec2 uMouse;

#define PI 3.1415926538

const int u_line_count = 40;
const float u_line_width = 7.0;
const float u_line_blur = 10.0;

float Perlin2D(vec2 P) {
    vec2 Pi = floor(P);
    vec4 Pf_Pfmin1 = P.xyxy - vec4(Pi, Pi + 1.0);
    vec4 Pt = vec4(Pi.xy, Pi.xy + 1.0);
    Pt = Pt - floor(Pt * (1.0 / 71.0)) * 71.0;
    Pt += vec2(26.0, 161.0).xyxy;
    Pt *= Pt;
    Pt = Pt.xzxz * Pt.yyww;
    vec4 hash_x = fract(Pt * (1.0 / 951.135664));
    vec4 hash_y = fract(Pt * (1.0 / 642.949883));
    vec4 grad_x = hash_x - 0.49999;
    vec4 grad_y = hash_y - 0.49999;
    vec4 grad_results = inversesqrt(grad_x * grad_x + grad_y * grad_y)
        * (grad_x * Pf_Pfmin1.xzxz + grad_y * Pf_Pfmin1.yyww);
    grad_results *= 1.4142135623730950;
    vec2 blend = Pf_Pfmin1.xy * Pf_Pfmin1.xy * Pf_Pfmin1.xy
               * (Pf_Pfmin1.xy * (Pf_Pfmin1.xy * 6.0 - 15.0) + 10.0);
    vec4 blend2 = vec4(blend, vec2(1.0 - blend));
    return dot(grad_results, blend2.zxzx * blend2.wwyy);
}

float pixel(float count, vec2 resolution) {
    return (1.0 / max(resolution.x, resolution.y)) * count;
}

float lineFn(vec2 st, float width, float perc, float offset, vec2 mouse, float time, float amplitude, float distance) {
    float split_offset = (perc * 0.4);
    float split_point = 0.1 + split_offset;

    float amplitude_normal = smoothstep(split_point, 0.7, st.x);
    float amplitude_strength = 0.5;
    float finalAmplitude = amplitude_normal * amplitude_strength
                           * amplitude * (1.0 + (mouse.y - 0.5) * 0.2);

    float time_scaled = time / 10.0 + (mouse.x - 0.5) * 1.0;
    float blur = smoothstep(split_point, split_point + 0.05, st.x) * perc;

    float xnoise = mix(
        Perlin2D(vec2(time_scaled, st.x + perc) * 2.5),
        Perlin2D(vec2(time_scaled, st.x + time_scaled) * 3.5) / 1.5,
        st.x * 0.3
    );

    float y = 0.5 + (perc - 0.5) * distance + xnoise / 2.0 * finalAmplitude;

    float line_start = smoothstep(
        y + (width / 2.0) + (u_line_blur * pixel(1.0, iResolution.xy) * blur),
        y,
        st.y
    );

    float line_end = smoothstep(
        y,
        y - (width / 2.0) - (u_line_blur * pixel(1.0, iResolution.xy) * blur),
        st.y
    );

    return clamp(
        (line_start - line_end) * (1.0 - smoothstep(0.0, 1.0, pow(perc, 0.3))),
        0.0,
        1.0
    );
}

void mainImage(out vec4 fragColor, in vec2 fragCoord) {
    vec2 uv = fragCoord / iResolution.xy;

    float line_strength = 1.0;
    for (int i = 0; i < u_line_count; i++) {
        float p = float(i) / float(u_line_count);
        line_strength *= (1.0 - lineFn(
            uv,
            u_line_width * pixel(1.0, iResolution.xy) * (1.0 - p),
            p,
            (PI * 1.0) * p,
            uMouse,
            iTime,
            uAmplitude,
            uDistance
        ));
    }

    float colorVal = 1.0 - line_strength;
    fragColor = vec4(uColor * colorVal, colorVal);
}

void main() {
    mainImage(gl_FragColor, gl_FragCoord.xy);
}
`;
const Threads = ({ color = [
    1,
    1,
    1
], amplitude = 1, distance = 0, enableMouseInteraction = false, ...rest })=>{
    _s();
    const containerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const animationFrameId = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])();
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Threads.useEffect": ()=>{
            if (!containerRef.current) return;
            const container = containerRef.current;
            const renderer = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$ogl$2f$src$2f$core$2f$Renderer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Renderer"]({
                alpha: true
            });
            const gl = renderer.gl;
            gl.clearColor(0, 0, 0, 0);
            gl.enable(gl.BLEND);
            gl.blendFunc(gl.SRC_ALPHA, gl.ONE_MINUS_SRC_ALPHA);
            container.appendChild(gl.canvas);
            const geometry = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$ogl$2f$src$2f$extras$2f$Triangle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Triangle"](gl);
            const program = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$ogl$2f$src$2f$core$2f$Program$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Program"](gl, {
                vertex: vertexShader,
                fragment: fragmentShader,
                uniforms: {
                    iTime: {
                        value: 0
                    },
                    iResolution: {
                        value: new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$ogl$2f$src$2f$math$2f$Color$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Color"](gl.canvas.width, gl.canvas.height, gl.canvas.width / gl.canvas.height)
                    },
                    uColor: {
                        value: new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$ogl$2f$src$2f$math$2f$Color$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Color"](...color)
                    },
                    uAmplitude: {
                        value: amplitude
                    },
                    uDistance: {
                        value: distance
                    },
                    uMouse: {
                        value: new Float32Array([
                            0.5,
                            0.5
                        ])
                    }
                }
            });
            const mesh = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$ogl$2f$src$2f$core$2f$Mesh$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Mesh"](gl, {
                geometry,
                program
            });
            function resize() {
                const { clientWidth, clientHeight } = container;
                renderer.setSize(clientWidth, clientHeight);
                program.uniforms.iResolution.value.r = clientWidth;
                program.uniforms.iResolution.value.g = clientHeight;
                program.uniforms.iResolution.value.b = clientWidth / clientHeight;
            }
            window.addEventListener("resize", resize);
            resize();
            let currentMouse = [
                0.5,
                0.5
            ];
            let targetMouse = [
                0.5,
                0.5
            ];
            function handleMouseMove(e) {
                const rect = container.getBoundingClientRect();
                const x = (e.clientX - rect.left) / rect.width;
                const y = 1.0 - (e.clientY - rect.top) / rect.height;
                targetMouse = [
                    x,
                    y
                ];
            }
            function handleMouseLeave() {
                targetMouse = [
                    0.5,
                    0.5
                ];
            }
            if (enableMouseInteraction) {
                container.addEventListener("mousemove", handleMouseMove);
                container.addEventListener("mouseleave", handleMouseLeave);
            }
            function update(t) {
                if (enableMouseInteraction) {
                    const smoothing = 0.05;
                    currentMouse[0] += smoothing * (targetMouse[0] - currentMouse[0]);
                    currentMouse[1] += smoothing * (targetMouse[1] - currentMouse[1]);
                    program.uniforms.uMouse.value[0] = currentMouse[0];
                    program.uniforms.uMouse.value[1] = currentMouse[1];
                } else {
                    program.uniforms.uMouse.value[0] = 0.5;
                    program.uniforms.uMouse.value[1] = 0.5;
                }
                program.uniforms.iTime.value = t * 0.001;
                renderer.render({
                    scene: mesh
                });
                animationFrameId.current = requestAnimationFrame(update);
            }
            animationFrameId.current = requestAnimationFrame(update);
            return ({
                "Threads.useEffect": ()=>{
                    if (animationFrameId.current) cancelAnimationFrame(animationFrameId.current);
                    window.removeEventListener("resize", resize);
                    if (enableMouseInteraction) {
                        container.removeEventListener("mousemove", handleMouseMove);
                        container.removeEventListener("mouseleave", handleMouseLeave);
                    }
                    if (container.contains(gl.canvas)) container.removeChild(gl.canvas);
                    gl.getExtension("WEBGL_lose_context")?.loseContext();
                }
            })["Threads.useEffect"];
        }
    }["Threads.useEffect"], [
        color,
        amplitude,
        distance,
        enableMouseInteraction
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: containerRef,
        className: "w-full h-full relative",
        ...rest
    }, void 0, false, {
        fileName: "[project]/src/components/ui/Threads.jsx",
        lineNumber: 223,
        columnNumber: 10
    }, this);
};
_s(Threads, "ajEYVWde01g5rLH4HHi9cEXT1ag=");
_c = Threads;
const __TURBOPACK__default__export__ = Threads;
var _c;
__turbopack_context__.k.register(_c, "Threads");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/app/gallery/page.jsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Masonry$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/Masonry.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$gallery$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/data/gallery.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$SplitText$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/SplitText.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Threads$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/Threads.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$animations$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/utils/animations.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
;
;
const GalleryPage = ()=>{
    _s();
    const titleRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$animations$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useGSAPFadeInUp"])(0, 0.8, titleRef);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "text-black",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "relative w-full h-[240px] md:h-[360px] -mt-6 overflow-hidden flex items-center justify-center bg-white",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute inset-0 z-0 scale-[1.3] mt-28 translate-y-[-10%]",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Threads$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            amplitude: 1,
                            distance: 0,
                            enableMouseInteraction: false
                        }, void 0, false, {
                            fileName: "[project]/src/app/gallery/page.jsx",
                            lineNumber: 24,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/app/gallery/page.jsx",
                        lineNumber: 23,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "relative z-10 text-center px-4",
                        ref: titleRef,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$SplitText$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                text: "Story Told Through Visuals",
                                className: "text-5xl md:text-3xl font-bold text-black",
                                delay: 80,
                                duration: 0.6,
                                ease: "power3.out",
                                splitType: "chars",
                                from: {
                                    opacity: 0,
                                    y: 30
                                },
                                to: {
                                    opacity: 1,
                                    y: 0
                                },
                                threshold: 0.1
                            }, void 0, false, {
                                fileName: "[project]/src/app/gallery/page.jsx",
                                lineNumber: 29,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-gray-600  max-w-2xl mx-auto text-lg",
                                children: "Browse through our vibrant gallery of visuals and videos, each telling a unique story."
                            }, void 0, false, {
                                fileName: "[project]/src/app/gallery/page.jsx",
                                lineNumber: 40,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/gallery/page.jsx",
                        lineNumber: 28,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/gallery/page.jsx",
                lineNumber: 17,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "px-4 md:px-8 lg:px-16 -mt-16",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Masonry$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    items: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$gallery$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["items"],
                    ease: "power3.out",
                    duration: 0.6,
                    stagger: 0.05,
                    animateFrom: "top",
                    scaleOnHover: true,
                    hoverScale: 0.95,
                    blurToFocus: true,
                    colorShiftOnHover: false,
                    className: "mb-20"
                }, void 0, false, {
                    fileName: "[project]/src/app/gallery/page.jsx",
                    lineNumber: 49,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/gallery/page.jsx",
                lineNumber: 48,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/gallery/page.jsx",
        lineNumber: 14,
        columnNumber: 5
    }, this);
};
_s(GalleryPage, "aXOzeyvhxCpvGVx7bcnBLD9N0aQ=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$animations$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useGSAPFadeInUp"]
    ];
});
_c = GalleryPage;
const __TURBOPACK__default__export__ = GalleryPage;
var _c;
__turbopack_context__.k.register(_c, "GalleryPage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
}]);

//# sourceMappingURL=src_4ab888ac._.js.map