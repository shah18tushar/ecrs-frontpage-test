(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push([typeof document === "object" ? document.currentScript : undefined, {

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
// <section className="relative w-full h-[350px] md:h-[370px] mt-20 overflow-hidden flex items-center justify-center bg-white">
//     <div className="absolute inset-0 z-0">
//         <Threads amplitude={1} distance={0} enableMouseInteraction={true} />
//     </div>
//     <div className="relative z-10 text-center px-4">
//         <SplitText
//             text="Our Network"
//             className="text-5xl md:text-6xl font-bold text-gray-900"
//             delay={80}
//             duration={0.6}
//             ease="power3.out"
//             splitType="chars"
//             from={{ opacity: 0, y: 30 }}
//             to={{ opacity: 1, y: 0 }}
//             threshold={0.1} onLetterAnimationComplete={undefined} />
//         <p className="text-gray-600 mt-4 max-w-xl mx-auto text-lg">
//             Explore the extensive reach of ECRS across India – 180+ cities and growing.
//         </p>
//     </div>
// </section>
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
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$map$2d$pin$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MapPin$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/map-pin.js [app-client] (ecmascript) <export default as MapPin>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRight$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chevron-right.js [app-client] (ecmascript) <export default as ChevronRight>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$search$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Search$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/search.js [app-client] (ecmascript) <export default as Search>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$zoom$2d$out$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ZoomOut$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/zoom-out.js [app-client] (ecmascript) <export default as ZoomOut>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$SplitText$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/SplitText.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Threads$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/Threads.jsx [app-client] (ecmascript)");
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
    const [mapScale, setMapScale] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(1);
    const [mapTranslate, setMapTranslate] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        x: 0,
        y: 0
    });
    const [isAnimating, setIsAnimating] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const mapRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const svgContainerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const blinkingDotsRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])([]);
    // Network data with exact coordinates (same as before)
    const networkData = {
        "Gujarat": [
            {
                name: "Rajkot",
                lat: 22.3039,
                lng: 70.8022
            },
            {
                name: "Gandhidham",
                lat: 23.0800,
                lng: 70.1333
            },
            {
                name: "Jamnagar",
                lat: 22.4707,
                lng: 70.0577
            },
            {
                name: "Bhuj",
                lat: 23.2420,
                lng: 69.6669
            },
            {
                name: "Vadodara",
                lat: 22.3072,
                lng: 73.1812
            },
            {
                name: "Bhavnagar",
                lat: 21.7645,
                lng: 72.1519
            },
            {
                name: "Surat",
                lat: 21.1702,
                lng: 72.8311
            },
            {
                name: "Ahmedabad",
                lat: 23.0225,
                lng: 72.5714
            },
            {
                name: "Silvassa",
                lat: 20.2738,
                lng: 72.9960
            },
            {
                name: "Vapi",
                lat: 20.3712,
                lng: 72.9049
            },
            {
                name: "Sonmath",
                lat: 20.8880,
                lng: 70.4017
            }
        ],
        "Assam": [
            {
                name: "Silchar",
                lat: 24.8333,
                lng: 92.7789
            },
            {
                name: "Agartala",
                lat: 23.8315,
                lng: 91.2868
            },
            {
                name: "Johrat",
                lat: 26.7460,
                lng: 94.2036
            },
            {
                name: "Dibrugarh",
                lat: 27.4728,
                lng: 94.9120
            },
            {
                name: "Tezpur",
                lat: 26.6330,
                lng: 92.8000
            },
            {
                name: "Sivasagar",
                lat: 26.9708,
                lng: 94.6378
            },
            {
                name: "Guwahati",
                lat: 26.1445,
                lng: 91.7362
            }
        ],
        "Chhattisgarh": [
            {
                name: "Raipur",
                lat: 21.2514,
                lng: 81.6296
            },
            {
                name: "Bhilai",
                lat: 21.1938,
                lng: 81.3509
            },
            {
                name: "Bilaspur",
                lat: 22.0797,
                lng: 82.1391
            },
            {
                name: "Korba",
                lat: 22.3595,
                lng: 82.7501
            }
        ],
        "Rajasthan": [
            {
                name: "Bikaner",
                lat: 28.0229,
                lng: 73.3119
            },
            {
                name: "Chittodgarh",
                lat: 24.8829,
                lng: 74.6230
            },
            {
                name: "Hanumangarh",
                lat: 29.5814,
                lng: 74.2700
            },
            {
                name: "Jaisalmer",
                lat: 26.9157,
                lng: 70.9083
            },
            {
                name: "Ajmer",
                lat: 26.4499,
                lng: 74.6399
            },
            {
                name: "Gulabpura",
                lat: 25.9100,
                lng: 74.6500
            },
            {
                name: "Jodhpur",
                lat: 26.2389,
                lng: 73.0243
            },
            {
                name: "Kota",
                lat: 25.2138,
                lng: 75.8648
            },
            {
                name: "Jaipur",
                lat: 26.9124,
                lng: 75.7873
            },
            {
                name: "Udaipur",
                lat: 24.5854,
                lng: 73.7125
            }
        ],
        "West Bengal": [
            {
                name: "Siliguri",
                lat: 26.7271,
                lng: 88.3953
            },
            {
                name: "Kolkata",
                lat: 22.5726,
                lng: 88.3639
            }
        ],
        "Odisha": [
            {
                name: "Bhubaneswar",
                lat: 20.2961,
                lng: 85.8245
            }
        ],
        "Andhra Pradesh": [
            {
                name: "Rajahmundry",
                lat: 17.0005,
                lng: 81.8040
            },
            {
                name: "Kurnool",
                lat: 15.8281,
                lng: 78.0373
            },
            {
                name: "Vijayawada",
                lat: 16.5062,
                lng: 80.6480
            },
            {
                name: "Visakhapatnam",
                lat: 17.6868,
                lng: 83.2185
            }
        ],
        "Tamilnadu": [
            {
                name: "Coimbatore",
                lat: 11.0168,
                lng: 76.9558
            },
            {
                name: "Chennai",
                lat: 13.0827,
                lng: 80.2707
            },
            {
                name: "Madurai",
                lat: 9.9252,
                lng: 78.1198
            },
            {
                name: "Trichy",
                lat: 10.7905,
                lng: 78.7047
            },
            {
                name: "Thanjavur",
                lat: 10.7870,
                lng: 79.1378
            },
            {
                name: "Pondicherry",
                lat: 11.9416,
                lng: 79.8083
            },
            {
                name: "Salem",
                lat: 11.6643,
                lng: 78.1460
            },
            {
                name: "Erode",
                lat: 11.3410,
                lng: 77.7172
            },
            {
                name: "Tiruppur",
                lat: 11.1085,
                lng: 77.3411
            },
            {
                name: "Vellore",
                lat: 12.9165,
                lng: 79.1325
            }
        ],
        "Telangana": [
            {
                name: "Hyderabad",
                lat: 17.3850,
                lng: 78.4867
            },
            {
                name: "Warangal",
                lat: 17.9689,
                lng: 79.5941
            },
            {
                name: "Nizamabad",
                lat: 18.6725,
                lng: 78.0941
            }
        ],
        "Kerala": [
            {
                name: "Kochi",
                lat: 9.9312,
                lng: 76.2673
            },
            {
                name: "Thiruvananthapuram",
                lat: 8.5241,
                lng: 76.9366
            }
        ],
        "Uttarakhand": [
            {
                name: "Dehradun",
                lat: 30.3165,
                lng: 78.0322
            }
        ],
        "Maharashtra": [
            {
                name: "Nagpur",
                lat: 21.1458,
                lng: 79.0882
            },
            {
                name: "Ahmednagar",
                lat: 19.0948,
                lng: 74.7480
            },
            {
                name: "Mumbai",
                lat: 19.0760,
                lng: 72.8777
            },
            {
                name: "Aurangabad",
                lat: 19.8762,
                lng: 75.3433
            },
            {
                name: "Nashik",
                lat: 19.9975,
                lng: 73.7898
            },
            {
                name: "Latur",
                lat: 18.4088,
                lng: 76.5604
            },
            {
                name: "Nanded",
                lat: 19.1383,
                lng: 77.3210
            },
            {
                name: "Sangli",
                lat: 16.8524,
                lng: 74.5815
            },
            {
                name: "Amravati",
                lat: 20.9374,
                lng: 77.7796
            },
            {
                name: "Kolhapur",
                lat: 16.7050,
                lng: 74.2433
            },
            {
                name: "Solapur",
                lat: 17.6599,
                lng: 75.9064
            },
            {
                name: "Pune",
                lat: 18.5204,
                lng: 73.8567
            }
        ],
        "Uttar Pradesh": [
            {
                name: "Kanpur",
                lat: 26.4499,
                lng: 80.3319
            },
            {
                name: "Lucknow",
                lat: 26.8467,
                lng: 80.9462
            },
            {
                name: "Ghaziabad",
                lat: 28.6692,
                lng: 77.4538
            },
            {
                name: "Agra",
                lat: 27.1767,
                lng: 78.0081
            },
            {
                name: "Noida",
                lat: 28.5355,
                lng: 77.3910
            },
            {
                name: "Aligarh",
                lat: 27.8974,
                lng: 78.0880
            },
            {
                name: "Varanasi",
                lat: 25.3176,
                lng: 82.9739
            },
            {
                name: "Meerut",
                lat: 28.9845,
                lng: 77.7064
            },
            {
                name: "Allahabad",
                lat: 25.4358,
                lng: 81.8463
            }
        ],
        "Jharkhand": [
            {
                name: "Jamshedpur",
                lat: 22.8046,
                lng: 86.2029
            },
            {
                name: "Ranchi",
                lat: 23.3441,
                lng: 85.3096
            },
            {
                name: "Dhanbad",
                lat: 23.7957,
                lng: 86.4304
            },
            {
                name: "Bokaro",
                lat: 23.6693,
                lng: 85.9547
            }
        ],
        "Karnataka": [
            {
                name: "Bangalore",
                lat: 12.9716,
                lng: 77.5946
            },
            {
                name: "Hubli",
                lat: 15.3647,
                lng: 75.1240
            },
            {
                name: "Mysore",
                lat: 12.2958,
                lng: 76.6394
            },
            {
                name: "Mangalore",
                lat: 12.9141,
                lng: 74.8560
            },
            {
                name: "Belgaum",
                lat: 15.8497,
                lng: 74.4977
            }
        ],
        "Punjab": [
            {
                name: "Bathinda",
                lat: 30.2110,
                lng: 74.9455
            },
            {
                name: "Amritsar",
                lat: 31.6340,
                lng: 74.8723
            },
            {
                name: "Chandigarh",
                lat: 30.7333,
                lng: 76.7794
            },
            {
                name: "Jalandhar",
                lat: 31.3260,
                lng: 75.5762
            },
            {
                name: "Ludhiana",
                lat: 30.9010,
                lng: 75.8573
            },
            {
                name: "Mohali",
                lat: 30.7046,
                lng: 76.7179
            }
        ],
        "Delhi": [
            {
                name: "Delhi",
                lat: 28.7041,
                lng: 77.1025
            }
        ],
        "Haryana": [
            {
                name: "Faridabad",
                lat: 28.4089,
                lng: 77.3178
            },
            {
                name: "Gurugram",
                lat: 28.4595,
                lng: 77.0266
            },
            {
                name: "Sonipat",
                lat: 28.9931,
                lng: 77.0151
            },
            {
                name: "Panipat",
                lat: 29.3909,
                lng: 76.9635
            },
            {
                name: "Ambala",
                lat: 30.3782,
                lng: 76.7767
            }
        ],
        "Bihar": [
            {
                name: "Patna",
                lat: 25.5941,
                lng: 85.1376
            }
        ]
    };
    // State boundaries with more accurate paths
    const stateBoundaries = {
        "Gujarat": "M 68.2 20.1 L 74.4 20.1 L 74.4 24.7 L 72.5 24.7 L 72.5 23.0 L 70.0 23.0 L 70.0 21.5 L 68.2 21.5 Z",
        "Maharashtra": "M 72.6 16.0 L 80.9 16.0 L 80.9 21.1 L 78.5 21.1 L 78.5 19.5 L 76.0 19.5 L 76.0 17.8 L 72.6 17.8 Z",
        "Rajasthan": "M 69.5 23.0 L 78.2 23.0 L 78.2 30.2 L 73.5 30.2 L 73.5 27.5 L 69.5 27.5 Z",
        "Uttar Pradesh": "M 77.1 24.0 L 84.6 24.0 L 84.6 30.4 L 80.0 30.4 L 80.0 27.0 L 77.1 27.0 Z",
        "Karnataka": "M 74.1 11.6 L 78.6 11.6 L 78.6 18.5 L 76.0 18.5 L 76.0 15.0 L 74.1 15.0 Z",
        "Tamilnadu": "M 76.2 8.1 L 80.3 8.1 L 80.3 13.5 L 78.0 13.5 L 78.0 10.5 L 76.2 10.5 Z",
        "Andhra Pradesh": "M 77.0 12.6 L 84.8 12.6 L 84.8 19.9 L 80.5 19.9 L 80.5 16.0 L 77.0 16.0 Z",
        "West Bengal": "M 85.8 21.5 L 89.9 21.5 L 89.9 27.6 L 87.5 27.6 L 87.5 24.5 L 85.8 24.5 Z",
        "Telangana": "M 77.2 15.9 L 81.0 15.9 L 81.0 19.9 L 79.0 19.9 L 79.0 17.5 L 77.2 17.5 Z",
        // Add more states with better paths
        "Punjab": "M 73.0 30.5 L 76.5 30.5 L 76.5 33.0 L 73.0 33.0 Z",
        "Haryana": "M 75.0 27.5 L 77.5 27.5 L 77.5 30.5 L 75.0 30.5 Z",
        "Delhi": "M 76.0 28.0 L 76.5 28.0 L 76.5 28.5 L 76.0 28.5 Z",
        "Uttarakhand": "M 77.0 26.0 L 79.0 26.0 L 79.0 28.0 L 77.0 28.0 Z",
        "Bihar": "M 83.0 25.0 L 86.0 25.0 L 86.0 27.5 L 83.0 27.5 Z",
        "Jharkhand": "M 83.0 22.0 L 86.0 22.0 L 86.0 25.0 L 83.0 25.0 Z",
        "Odisha": "M 83.0 19.0 L 87.0 19.0 L 87.0 22.0 L 83.0 22.0 Z",
        "Chhattisgarh": "M 79.0 19.0 L 83.0 19.0 L 83.0 22.0 L 79.0 22.0 Z",
        "Madhya Pradesh": "M 73.0 19.0 L 79.0 19.0 L 79.0 24.0 L 73.0 24.0 Z",
        "Kerala": "M 75.0 8.0 L 78.0 8.0 L 78.0 11.0 L 75.0 11.0 Z",
        "Assam": "M 88.0 22.0 L 92.0 22.0 L 92.0 26.0 L 88.0 26.0 Z"
    };
    // Convert lat/lng to SVG coordinates with better projection
    const convertToSVG = (lat, lng)=>{
        // Adjusted bounding box for better coverage
        const minLng = 68.1;
        const maxLng = 97.4;
        const minLat = 6.7;
        const maxLat = 37.1;
        // Normalize coordinates
        const x = (lng - minLng) / (maxLng - minLng) * 800;
        const y = (maxLat - lat) / (maxLat - minLat) * 600;
        return {
            x,
            y
        };
    };
    // Get state center with padding calculation
    const getStateCenter = (stateName)=>{
        const cities = networkData[stateName];
        if (!cities || cities.length === 0) return {
            x: 400,
            y: 300,
            scale: 1
        };
        // Calculate bounding box
        const lats = cities.map((city)=>city.lat);
        const lngs = cities.map((city)=>city.lng);
        const minLat = Math.min(...lats);
        const maxLat = Math.max(...lats);
        const minLng = Math.min(...lngs);
        const maxLng = Math.max(...lngs);
        // Convert to SVG coordinates
        const topLeft = convertToSVG(maxLat, minLng);
        const bottomRight = convertToSVG(minLat, maxLng);
        // Calculate center
        const centerX = (topLeft.x + bottomRight.x) / 2;
        const centerY = (topLeft.y + bottomRight.y) / 2;
        // Calculate required scale to fit the state in view
        const width = bottomRight.x - topLeft.x;
        const height = bottomRight.y - topLeft.y;
        const viewportWidth = 800 * 0.8; // 80% of SVG width
        const viewportHeight = 600 * 0.8; // 80% of SVG height
        const scaleX = viewportWidth / width;
        const scaleY = viewportHeight / height;
        const scale = Math.min(scaleX, scaleY, 3); // Limit max zoom to 3x
        return {
            x: centerX,
            y: centerY,
            scale
        };
    };
    // Animate to state with smooth transition
    const animateToState = (stateName)=>{
        setIsAnimating(true);
        if (!stateName) {
            // Reset to full view
            setMapScale(1);
            setMapTranslate({
                x: 0,
                y: 0
            });
            setIsAnimating(false);
            return;
        }
        const { x, y, scale } = getStateCenter(stateName);
        // Calculate translation to center the state
        const svgWidth = 800;
        const svgHeight = 600;
        const translateX = svgWidth / 2 - x * scale;
        const translateY = svgHeight / 2 - y * scale;
        // Apply animation
        setMapScale(scale);
        setMapTranslate({
            x: translateX,
            y: translateY
        });
        // Reset animation flag after transition
        setTimeout(()=>setIsAnimating(false), 600);
    };
    // Handle state selection with animation
    const handleStateSelect = (stateName)=>{
        if (isAnimating) return;
        if (selectedState === stateName) {
            // Reset zoom
            setSelectedState(null);
            animateToState(null);
        } else {
            setSelectedState(stateName);
            animateToState(stateName);
        }
    };
    // Initialize blinking animation with better timing
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "OurNetworkPage.useEffect": ()=>{
            const dots = blinkingDotsRef.current;
            const interval = setInterval({
                "OurNetworkPage.useEffect.interval": ()=>{
                    dots.forEach({
                        "OurNetworkPage.useEffect.interval": (dot, index)=>{
                            if (dot) {
                                // Toggle visibility for blinking effect
                                dot.style.opacity = dot.style.opacity === '0.5' ? '1' : '0.5';
                            }
                        }
                    }["OurNetworkPage.useEffect.interval"]);
                }
            }["OurNetworkPage.useEffect.interval"], 800); // Blink every 800ms
            return ({
                "OurNetworkPage.useEffect": ()=>clearInterval(interval)
            })["OurNetworkPage.useEffect"];
        }
    }["OurNetworkPage.useEffect"], [
        selectedState
    ]);
    // Handle pan and zoom interactions
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "OurNetworkPage.useEffect": ()=>{
            const svgElement = svgContainerRef.current;
            if (!svgElement) return;
            let isDragging = false;
            let startPos = {
                x: 0,
                y: 0
            };
            const handleMouseDown = {
                "OurNetworkPage.useEffect.handleMouseDown": (e)=>{
                    isDragging = true;
                    startPos = {
                        x: e.clientX - mapTranslate.x,
                        y: e.clientY - mapTranslate.y
                    };
                }
            }["OurNetworkPage.useEffect.handleMouseDown"];
            const handleMouseMove = {
                "OurNetworkPage.useEffect.handleMouseMove": (e)=>{
                    if (!isDragging || isAnimating) return;
                    setMapTranslate({
                        x: e.clientX - startPos.x,
                        y: e.clientY - startPos.y
                    });
                }
            }["OurNetworkPage.useEffect.handleMouseMove"];
            const handleMouseUp = {
                "OurNetworkPage.useEffect.handleMouseUp": ()=>{
                    isDragging = false;
                }
            }["OurNetworkPage.useEffect.handleMouseUp"];
            const handleWheel = {
                "OurNetworkPage.useEffect.handleWheel": (e)=>{
                    e.preventDefault();
                    if (isAnimating) return;
                    const delta = -e.deltaY;
                    const scaleFactor = 0.01;
                    const newScale = Math.min(Math.max(0.5, mapScale + delta * scaleFactor), 3);
                    // Adjust translation to zoom toward mouse position
                    const rect = svgElement.getBoundingClientRect();
                    const mouseX = e.clientX - rect.left;
                    const mouseY = e.clientY - rect.top;
                    const scaleChange = newScale / mapScale;
                    setMapTranslate({
                        x: mouseX - scaleChange * (mouseX - mapTranslate.x),
                        y: mouseY - scaleChange * (mouseY - mapTranslate.y)
                    });
                    setMapScale(newScale);
                }
            }["OurNetworkPage.useEffect.handleWheel"];
            svgElement.addEventListener('mousedown', handleMouseDown);
            svgElement.addEventListener('mousemove', handleMouseMove);
            svgElement.addEventListener('mouseup', handleMouseUp);
            svgElement.addEventListener('mouseleave', handleMouseUp);
            svgElement.addEventListener('wheel', handleWheel);
            return ({
                "OurNetworkPage.useEffect": ()=>{
                    svgElement.removeEventListener('mousedown', handleMouseDown);
                    svgElement.removeEventListener('mousemove', handleMouseMove);
                    svgElement.removeEventListener('mouseup', handleMouseUp);
                    svgElement.removeEventListener('mouseleave', handleMouseUp);
                    svgElement.removeEventListener('wheel', handleWheel);
                }
            })["OurNetworkPage.useEffect"];
        }
    }["OurNetworkPage.useEffect"], [
        mapTranslate,
        mapScale,
        isAnimating
    ]);
    // Filter states based on search
    const filteredStates = Object.keys(networkData).filter((state)=>state.toLowerCase().includes(searchTerm.toLowerCase()));
    // Get cities for display
    const getCitiesToDisplay = ()=>{
        if (selectedState) {
            return networkData[selectedState] || [];
        }
        return [];
    };
    // Calculate total cities
    const totalCities = Object.values(networkData).flat().length;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "jsx-a86873d392219b89" + " " + "text-black",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "jsx-a86873d392219b89" + " " + "relative w-full h-[350px] md:h-[370px] mt-20 overflow-hidden flex items-center justify-center bg-white",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "jsx-a86873d392219b89" + " " + "absolute inset-0 z-0",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Threads$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            amplitude: 1,
                            distance: 0,
                            enableMouseInteraction: true
                        }, void 0, false, {
                            fileName: "[project]/src/app/about/ournetwork/page.tsx",
                            lineNumber: 439,
                            columnNumber: 21
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/app/about/ournetwork/page.tsx",
                        lineNumber: 438,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "jsx-a86873d392219b89" + " " + "relative z-10 text-center px-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$SplitText$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                text: "Our Network",
                                className: "text-5xl md:text-6xl font-bold text-gray-900",
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
                                threshold: 0.1,
                                onLetterAnimationComplete: undefined
                            }, void 0, false, {
                                fileName: "[project]/src/app/about/ournetwork/page.tsx",
                                lineNumber: 442,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "jsx-a86873d392219b89" + " " + "text-gray-600 mt-4 max-w-xl mx-auto text-lg",
                                children: "Explore the extensive reach of ECRS across India – 180+ cities and growing."
                            }, void 0, false, {
                                fileName: "[project]/src/app/about/ournetwork/page.tsx",
                                lineNumber: 452,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/about/ournetwork/page.tsx",
                        lineNumber: 441,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/about/ournetwork/page.tsx",
                lineNumber: 437,
                columnNumber: 14
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "jsx-a86873d392219b89" + " " + "py-16 bg-gradient-to-br from-gray-50 to-white",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "jsx-a86873d392219b89" + " " + "max-w-7xl mx-auto px-4",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "jsx-a86873d392219b89" + " " + "grid grid-cols-1 lg:grid-cols-12 gap-8 h-[800px]",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "jsx-a86873d392219b89" + " " + "lg:col-span-3 bg-white rounded-2xl shadow-2xl p-6 border border-gray-100",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "jsx-a86873d392219b89" + " " + "mb-6",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                className: "jsx-a86873d392219b89" + " " + "text-2xl font-bold text-gray-900 mb-4",
                                                children: "States"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/about/ournetwork/page.tsx",
                                                lineNumber: 466,
                                                columnNumber: 33
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "jsx-a86873d392219b89" + " " + "relative",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$search$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Search$3e$__["Search"], {
                                                        className: "absolute left-3 top-3 h-4 w-4 text-gray-400"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/about/ournetwork/page.tsx",
                                                        lineNumber: 468,
                                                        columnNumber: 37
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                        type: "text",
                                                        placeholder: "Search states...",
                                                        value: searchTerm,
                                                        onChange: (e)=>setSearchTerm(e.target.value),
                                                        className: "jsx-a86873d392219b89" + " " + "w-full pl-10 pr-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent outline-none"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/about/ournetwork/page.tsx",
                                                        lineNumber: 469,
                                                        columnNumber: 37
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/about/ournetwork/page.tsx",
                                                lineNumber: 467,
                                                columnNumber: 33
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/about/ournetwork/page.tsx",
                                        lineNumber: 465,
                                        columnNumber: 29
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "jsx-a86873d392219b89" + " " + "space-y-2 overflow-y-auto max-h-[600px] scrollbar-hide",
                                        children: filteredStates.map((state, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                onClick: ()=>handleStateSelect(state),
                                                style: {
                                                    animation: `fadeInUp 0.4s ease-out ${index * 0.05}s both`
                                                },
                                                className: "jsx-a86873d392219b89" + " " + `p-4 rounded-xl cursor-pointer transition-all duration-300 group transform hover:scale-105 ${selectedState === state ? 'bg-red-500 text-white shadow-lg scale-105' : 'bg-gray-50 hover:bg-red-50 hover:shadow-md'}`,
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "jsx-a86873d392219b89" + " " + "flex items-center justify-between",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "jsx-a86873d392219b89" + " " + "flex items-center space-x-3",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$map$2d$pin$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MapPin$3e$__["MapPin"], {
                                                                    className: `h-5 w-5 ${selectedState === state ? 'text-white' : 'text-red-500'}`
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/about/ournetwork/page.tsx",
                                                                    lineNumber: 495,
                                                                    columnNumber: 49
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "jsx-a86873d392219b89" + " " + "font-semibold",
                                                                    children: state
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/about/ournetwork/page.tsx",
                                                                    lineNumber: 496,
                                                                    columnNumber: 49
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/app/about/ournetwork/page.tsx",
                                                            lineNumber: 494,
                                                            columnNumber: 45
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "jsx-a86873d392219b89" + " " + "flex items-center space-x-2",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "jsx-a86873d392219b89" + " " + `text-sm px-2 py-1 rounded-full ${selectedState === state ? 'bg-red-400 text-white' : 'bg-red-100 text-red-600'}`,
                                                                    children: networkData[state].length
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/about/ournetwork/page.tsx",
                                                                    lineNumber: 499,
                                                                    columnNumber: 49
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRight$3e$__["ChevronRight"], {
                                                                    className: `h-4 w-4 transition-transform ${selectedState === state ? 'rotate-90' : ''}`
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/about/ournetwork/page.tsx",
                                                                    lineNumber: 506,
                                                                    columnNumber: 49
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/app/about/ournetwork/page.tsx",
                                                            lineNumber: 498,
                                                            columnNumber: 45
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/about/ournetwork/page.tsx",
                                                    lineNumber: 493,
                                                    columnNumber: 41
                                                }, this)
                                            }, state, false, {
                                                fileName: "[project]/src/app/about/ournetwork/page.tsx",
                                                lineNumber: 481,
                                                columnNumber: 37
                                            }, this))
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/about/ournetwork/page.tsx",
                                        lineNumber: 479,
                                        columnNumber: 29
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/about/ournetwork/page.tsx",
                                lineNumber: 464,
                                columnNumber: 24
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "jsx-a86873d392219b89" + " " + "lg:col-span-4 bg-white rounded-2xl shadow-2xl p-6 border border-gray-100",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "jsx-a86873d392219b89" + " " + "mb-6",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                className: "jsx-a86873d392219b89" + " " + "text-2xl font-bold text-gray-900",
                                                children: [
                                                    "Cities ",
                                                    selectedState && `in ${selectedState}`
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/about/ournetwork/page.tsx",
                                                lineNumber: 519,
                                                columnNumber: 33
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "jsx-a86873d392219b89" + " " + "text-gray-600 mt-2",
                                                children: selectedState ? `${getCitiesToDisplay().length} cities available` : 'Select a state to view cities'
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/about/ournetwork/page.tsx",
                                                lineNumber: 522,
                                                columnNumber: 33
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/about/ournetwork/page.tsx",
                                        lineNumber: 518,
                                        columnNumber: 29
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "jsx-a86873d392219b89" + " " + "overflow-y-auto max-h-[600px] scrollbar-hide",
                                        children: selectedState ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "jsx-a86873d392219b89" + " " + "grid grid-cols-1 gap-3",
                                            children: getCitiesToDisplay().map((city, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    style: {
                                                        animation: `fadeInScale 0.3s ease-out ${index * 0.05}s both`
                                                    },
                                                    className: "jsx-a86873d392219b89" + " " + "p-3 bg-gray-50 rounded-lg hover:bg-red-50 hover:shadow-md transition-all duration-200 group cursor-pointer transform hover:scale-105",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "jsx-a86873d392219b89" + " " + "flex items-center space-x-3",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "jsx-a86873d392219b89" + " " + "w-2 h-2 bg-red-500 rounded-full group-hover:animate-pulse"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/about/ournetwork/page.tsx",
                                                                lineNumber: 539,
                                                                columnNumber: 53
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "jsx-a86873d392219b89" + " " + "font-medium text-gray-800 group-hover:text-red-600",
                                                                children: city.name
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/about/ournetwork/page.tsx",
                                                                lineNumber: 540,
                                                                columnNumber: 53
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/about/ournetwork/page.tsx",
                                                        lineNumber: 538,
                                                        columnNumber: 49
                                                    }, this)
                                                }, city.name, false, {
                                                    fileName: "[project]/src/app/about/ournetwork/page.tsx",
                                                    lineNumber: 531,
                                                    columnNumber: 45
                                                }, this))
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/about/ournetwork/page.tsx",
                                            lineNumber: 529,
                                            columnNumber: 37
                                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "jsx-a86873d392219b89" + " " + "flex items-center justify-center h-40 text-gray-500",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "jsx-a86873d392219b89" + " " + "text-center",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$map$2d$pin$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MapPin$3e$__["MapPin"], {
                                                        className: "h-12 w-12 mx-auto mb-4 text-gray-300"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/about/ournetwork/page.tsx",
                                                        lineNumber: 550,
                                                        columnNumber: 45
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "jsx-a86873d392219b89",
                                                        children: "Select a state to view cities"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/about/ournetwork/page.tsx",
                                                        lineNumber: 551,
                                                        columnNumber: 45
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/about/ournetwork/page.tsx",
                                                lineNumber: 549,
                                                columnNumber: 41
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/about/ournetwork/page.tsx",
                                            lineNumber: 548,
                                            columnNumber: 37
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/about/ournetwork/page.tsx",
                                        lineNumber: 527,
                                        columnNumber: 29
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/about/ournetwork/page.tsx",
                                lineNumber: 517,
                                columnNumber: 25
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "jsx-a86873d392219b89" + " " + "lg:col-span-5 bg-white rounded-2xl shadow-2xl p-6 border border-gray-100",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "jsx-a86873d392219b89" + " " + "mb-6 flex items-center justify-between",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "jsx-a86873d392219b89",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                        className: "jsx-a86873d392219b89" + " " + "text-2xl font-bold text-gray-900",
                                                        children: "Network Map"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/about/ournetwork/page.tsx",
                                                        lineNumber: 562,
                                                        columnNumber: 37
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "jsx-a86873d392219b89" + " " + "text-gray-600 mt-2",
                                                        children: selectedState ? `Focused on ${selectedState}` : 'Interactive map of India'
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/about/ournetwork/page.tsx",
                                                        lineNumber: 563,
                                                        columnNumber: 37
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/about/ournetwork/page.tsx",
                                                lineNumber: 561,
                                                columnNumber: 33
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "jsx-a86873d392219b89" + " " + "flex space-x-2",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    onClick: ()=>{
                                                        setSelectedState(null);
                                                        setMapScale(1);
                                                        setMapTranslate({
                                                            x: 0,
                                                            y: 0
                                                        });
                                                    },
                                                    className: "jsx-a86873d392219b89" + " " + "p-2 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$zoom$2d$out$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ZoomOut$3e$__["ZoomOut"], {
                                                        className: "h-4 w-4"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/about/ournetwork/page.tsx",
                                                        lineNumber: 576,
                                                        columnNumber: 41
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/about/ournetwork/page.tsx",
                                                    lineNumber: 568,
                                                    columnNumber: 37
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/about/ournetwork/page.tsx",
                                                lineNumber: 567,
                                                columnNumber: 33
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/about/ournetwork/page.tsx",
                                        lineNumber: 560,
                                        columnNumber: 29
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "jsx-a86873d392219b89" + " " + "relative h-[600px] bg-gradient-to-br from-blue-50 to-green-50 rounded-xl overflow-hidden",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                ref: mapRef,
                                                viewBox: "0 0 800 600",
                                                style: {
                                                    transform: `scale(${mapScale}) translate(${mapTranslate.x}px, ${mapTranslate.y}px)`,
                                                    transition: 'transform 0.6s ease-out'
                                                },
                                                className: "jsx-a86873d392219b89" + " " + "w-full h-full cursor-move",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                        d: "M 158 110 L 170 95 L 200 85 L 240 90 L 280 95 L 320 105 L 360 120 L 400 135 L 440 150 L 480 165 L 520 175 L 560 190 L 600 210 L 640 235 L 680 265 L 720 300 L 750 340 L 770 380 L 780 420 L 775 460 L 765 500 L 750 535 L 730 565 L 700 590 L 665 605 L 625 615 L 585 620 L 545 615 L 505 605 L 465 590 L 425 570 L 385 545 L 345 515 L 305 480 L 265 440 L 225 395 L 185 345 L 155 290 L 135 230 L 125 170 L 135 115 L 150 110 Z",
                                                        fill: "rgba(255, 255, 255, 0.9)",
                                                        stroke: "rgba(59, 130, 246, 0.6)",
                                                        strokeWidth: "2",
                                                        className: "jsx-a86873d392219b89" + " " + "drop-shadow-lg"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/about/ournetwork/page.tsx",
                                                        lineNumber: 592,
                                                        columnNumber: 37
                                                    }, this),
                                                    selectedState && stateBoundaries[selectedState] && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                        d: stateBoundaries[selectedState],
                                                        fill: "rgba(239, 68, 68, 0.1)",
                                                        stroke: "rgba(239, 68, 68, 0.5)",
                                                        strokeWidth: "2",
                                                        className: "jsx-a86873d392219b89" + " " + "animate-pulse"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/about/ournetwork/page.tsx",
                                                        lineNumber: 602,
                                                        columnNumber: 41
                                                    }, this),
                                                    selectedState && networkData[selectedState] && networkData[selectedState].map((city, index)=>{
                                                        const coords = convertToSVG(city.lat, city.lng);
                                                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("g", {
                                                            className: "jsx-a86873d392219b89",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                                                                    cx: coords.x,
                                                                    cy: coords.y,
                                                                    r: "8",
                                                                    fill: "rgba(239, 68, 68, 0.2)",
                                                                    className: "jsx-a86873d392219b89" + " " + "animate-ping"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/about/ournetwork/page.tsx",
                                                                    lineNumber: 616,
                                                                    columnNumber: 49
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                                                                    ref: (el)=>{
                                                                        blinkingDotsRef.current[index] = el;
                                                                    },
                                                                    cx: coords.x,
                                                                    cy: coords.y,
                                                                    r: "4",
                                                                    fill: "#ef4444",
                                                                    className: "jsx-a86873d392219b89" + " " + "cursor-pointer hover:r-6 transition-all"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/about/ournetwork/page.tsx",
                                                                    lineNumber: 623,
                                                                    columnNumber: 49
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                                                                    x: coords.x,
                                                                    y: coords.y - 15,
                                                                    textAnchor: "middle",
                                                                    style: {
                                                                        fontSize: '10px'
                                                                    },
                                                                    className: "jsx-a86873d392219b89" + " " + "text-xs font-medium fill-gray-700",
                                                                    children: city.name
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/about/ournetwork/page.tsx",
                                                                    lineNumber: 631,
                                                                    columnNumber: 49
                                                                }, this)
                                                            ]
                                                        }, `${city.name}-${index}`, true, {
                                                            fileName: "[project]/src/app/about/ournetwork/page.tsx",
                                                            lineNumber: 615,
                                                            columnNumber: 45
                                                        }, this);
                                                    }),
                                                    !selectedState && Object.values(networkData).flat().map((city, index)=>{
                                                        const coords = convertToSVG(city.lat, city.lng);
                                                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                                                            cx: coords.x,
                                                            cy: coords.y,
                                                            r: "2",
                                                            fill: "#ef4444",
                                                            opacity: "0.6",
                                                            className: "jsx-a86873d392219b89" + " " + "hover:opacity-100 transition-opacity"
                                                        }, `${city.name}-${index}`, false, {
                                                            fileName: "[project]/src/app/about/ournetwork/page.tsx",
                                                            lineNumber: 648,
                                                            columnNumber: 45
                                                        }, this);
                                                    })
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/about/ournetwork/page.tsx",
                                                lineNumber: 582,
                                                columnNumber: 33
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "jsx-a86873d392219b89" + " " + "absolute bottom-4 left-4 right-4 bg-white bg-opacity-95 backdrop-blur-sm rounded-lg p-4 shadow-lg",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "jsx-a86873d392219b89" + " " + "flex items-center justify-between",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "jsx-a86873d392219b89",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "jsx-a86873d392219b89" + " " + "flex items-center space-x-2 mb-2",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            className: "jsx-a86873d392219b89" + " " + "w-3 h-3 bg-red-500 rounded-full animate-pulse"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/app/about/ournetwork/page.tsx",
                                                                            lineNumber: 666,
                                                                            columnNumber: 49
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                            className: "jsx-a86873d392219b89" + " " + "text-sm font-medium",
                                                                            children: selectedState ? `${selectedState} Locations` : 'All Network Locations'
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/app/about/ournetwork/page.tsx",
                                                                            lineNumber: 667,
                                                                            columnNumber: 49
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/src/app/about/ournetwork/page.tsx",
                                                                    lineNumber: 665,
                                                                    columnNumber: 45
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                    className: "jsx-a86873d392219b89" + " " + "text-xs text-gray-600",
                                                                    children: selectedState ? `${networkData[selectedState].length} cities in ${selectedState}` : `${totalCities} cities across India`
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/about/ournetwork/page.tsx",
                                                                    lineNumber: 671,
                                                                    columnNumber: 45
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/app/about/ournetwork/page.tsx",
                                                            lineNumber: 664,
                                                            columnNumber: 41
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "jsx-a86873d392219b89" + " " + "text-right",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "jsx-a86873d392219b89" + " " + "text-sm font-bold text-red-600",
                                                                    children: Object.keys(networkData).length
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/about/ournetwork/page.tsx",
                                                                    lineNumber: 679,
                                                                    columnNumber: 45
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "jsx-a86873d392219b89" + " " + "text-xs text-gray-500",
                                                                    children: "States"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/about/ournetwork/page.tsx",
                                                                    lineNumber: 682,
                                                                    columnNumber: 45
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/app/about/ournetwork/page.tsx",
                                                            lineNumber: 678,
                                                            columnNumber: 41
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/about/ournetwork/page.tsx",
                                                    lineNumber: 663,
                                                    columnNumber: 37
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/about/ournetwork/page.tsx",
                                                lineNumber: 662,
                                                columnNumber: 33
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/about/ournetwork/page.tsx",
                                        lineNumber: 581,
                                        columnNumber: 29
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/about/ournetwork/page.tsx",
                                lineNumber: 559,
                                columnNumber: 25
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/about/ournetwork/page.tsx",
                        lineNumber: 461,
                        columnNumber: 21
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/app/about/ournetwork/page.tsx",
                    lineNumber: 460,
                    columnNumber: 17
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/about/ournetwork/page.tsx",
                lineNumber: 459,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "jsx-a86873d392219b89" + " " + "py-16 bg-white"
            }, void 0, false, {
                fileName: "[project]/src/app/about/ournetwork/page.tsx",
                lineNumber: 693,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                id: "a86873d392219b89",
                children: "@keyframes fadeInUp{0%{opacity:0;transform:translateY(10px)}to{opacity:1;transform:translateY(0)}}@keyframes fadeInScale{0%{opacity:0;transform:scale(.95)}to{opacity:1;transform:scale(1)}}.animate-fade-in{animation:.6s ease-out forwards fadeInUp}.animate-fade-in-delay{opacity:0;animation:.6s ease-out .2s forwards fadeInUp}.scrollbar-hide::-webkit-scrollbar{display:none}.scrollbar-hide{-ms-overflow-style:none;scrollbar-width:none}"
            }, void 0, false, void 0, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/about/ournetwork/page.tsx",
        lineNumber: 435,
        columnNumber: 9
    }, this);
};
_s(OurNetworkPage, "hcX43oa83UvY5pSLhCoJQHdklyE=");
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

//# sourceMappingURL=src_edd9bb06._.js.map