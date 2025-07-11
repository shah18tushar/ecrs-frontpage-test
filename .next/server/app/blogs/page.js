(()=>{var e={};e.id=156,e.ids=[156],e.modules={478:(e,t,r)=>{"use strict";r.d(t,{A:()=>m});var s=r(687),i=r(3210),o=r(4184),n=r(6813),a=r(7827),l=r(5933),d=r(9040);let c=`
attribute vec2 position;
attribute vec2 uv;
varying vec2 vUv;
void main() {
  vUv = uv;
  gl_Position = vec4(position, 0.0, 1.0);
}
`,u=`
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
`,m=({color:e=[1,1,1],amplitude:t=1,distance:r=0,enableMouseInteraction:m=!1,...p})=>{let f=(0,i.useRef)(null),x=(0,i.useRef)();return(0,i.useEffect)(()=>{if(!f.current)return;let s=f.current,i=new o.A({alpha:!0}),p=i.gl;p.clearColor(0,0,0,0),p.enable(p.BLEND),p.blendFunc(p.SRC_ALPHA,p.ONE_MINUS_SRC_ALPHA),s.appendChild(p.canvas);let h=new n.l(p),v=new a.B(p,{vertex:c,fragment:u,uniforms:{iTime:{value:0},iResolution:{value:new l.Q(p.canvas.width,p.canvas.height,p.canvas.width/p.canvas.height)},uColor:{value:new l.Q(...e)},uAmplitude:{value:t},uDistance:{value:r},uMouse:{value:new Float32Array([.5,.5])}}}),g=new d.e(p,{geometry:h,program:v});function y(){let{clientWidth:e,clientHeight:t}=s;i.setSize(e,t),v.uniforms.iResolution.value.r=e,v.uniforms.iResolution.value.g=t,v.uniforms.iResolution.value.b=e/t}window.addEventListener("resize",y),y();let b=[.5,.5],_=[.5,.5];function w(e){let t=s.getBoundingClientRect();_=[(e.clientX-t.left)/t.width,1-(e.clientY-t.top)/t.height]}function P(){_=[.5,.5]}return m&&(s.addEventListener("mousemove",w),s.addEventListener("mouseleave",P)),x.current=requestAnimationFrame(function e(t){m?(b[0]+=.05*(_[0]-b[0]),b[1]+=.05*(_[1]-b[1]),v.uniforms.uMouse.value[0]=b[0],v.uniforms.uMouse.value[1]=b[1]):(v.uniforms.uMouse.value[0]=.5,v.uniforms.uMouse.value[1]=.5),v.uniforms.iTime.value=.001*t,i.render({scene:g}),x.current=requestAnimationFrame(e)}),()=>{x.current&&cancelAnimationFrame(x.current),window.removeEventListener("resize",y),m&&(s.removeEventListener("mousemove",w),s.removeEventListener("mouseleave",P)),s.contains(p.canvas)&&s.removeChild(p.canvas),p.getExtension("WEBGL_lose_context")?.loseContext()}},[e,t,r,m]),(0,s.jsx)("div",{ref:f,className:"w-full h-full relative",...p})}},493:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>s});let s=(0,r(2907).registerClientReference)(function(){throw Error("Attempted to call the default export of \"D:\\\\Tushar\\\\ecrs-frontage-test\\\\src\\\\app\\\\blogs\\\\page.tsx\" from the server, but it's on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.")},"D:\\Tushar\\ecrs-frontage-test\\src\\app\\blogs\\page.tsx","default")},846:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},1406:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>v});var s=r(687),i=r(3210),o=r.n(i),n=r(8680),a=r(478);let l=[{id:1,title:"Why Corporate Car Rentals Make Sense",description:"Discover how companies benefit from professional car rental services for their daily operations.",category:"Corporate"},{id:2,title:"5 Safety Measures We Take for Every Ride",description:"From GPS tracking to trained drivers, learn how we prioritize safety in every ride.",category:"Safety"},{id:3,title:"A Guide to Our Fleet: From Sedans to Buses",description:"Explore our diverse fleet of vehicles that meet every customer’s travel requirement.",category:"Fleet"},{id:4,title:"How to Book a Car Effortlessly with ECRS",description:"Step-by-step walkthrough of booking your next trip through our seamless platform.",category:"Booking"},{id:5,title:"Airport Transfers Made Easy",description:"Learn how we simplify airport pickups and drops for corporates and frequent travelers.",category:"Airport"}],d=["Corporate","Safety","Fleet","Booking","Airport"];var c=r(9533),u=r(2080);let m=(0,r(2688).A)("chevron-left",[["path",{d:"m15 18-6-6 6-6",key:"1wnfg3"}]]);var p=r(4952),f=r(9523),x=r(4780);function h({currentPage:e,totalPages:t,onPageChange:r,className:i}){let o=e>1,n=e<t;return(0,s.jsxs)("div",{className:(0,x.cn)("flex items-center justify-between",i),children:[(0,s.jsxs)("div",{className:"flex-1 flex justify-between sm:hidden",children:[(0,s.jsx)(f.$,{variant:"outline",onClick:()=>o&&r(e-1),disabled:!o,children:"Previous"}),(0,s.jsx)(f.$,{variant:"outline",onClick:()=>n&&r(e+1),disabled:!n,children:"Next"})]}),(0,s.jsxs)("div",{className:"hidden sm:flex sm:flex-1 sm:items-center sm:justify-between",children:[(0,s.jsx)("div",{children:(0,s.jsxs)("p",{className:"text-sm text-gray-700",children:["Page ",(0,s.jsx)("span",{className:"font-medium",children:e})," of"," ",(0,s.jsx)("span",{className:"font-medium",children:t})]})}),(0,s.jsx)("div",{children:(0,s.jsxs)("nav",{className:"isolate inline-flex -space-x-px rounded-md shadow-sm","aria-label":"Pagination",children:[(0,s.jsxs)(f.$,{variant:"outline",className:"rounded-r-none",onClick:()=>o&&r(e-1),disabled:!o,children:[(0,s.jsx)("span",{className:"sr-only",children:"Previous"}),(0,s.jsx)(m,{className:"h-4 w-4"})]}),Array.from({length:t},(e,t)=>t+1).map(t=>(0,s.jsx)(f.$,{variant:e===t?"default":"outline",className:(0,x.cn)("rounded-none border-l-0",1===t&&"border-l",e===t&&"bg-gray-900 text-white"),onClick:()=>r(t),children:t},t)),(0,s.jsxs)(f.$,{variant:"outline",className:"rounded-l-none",onClick:()=>n&&r(e+1),disabled:!n,children:[(0,s.jsx)("span",{className:"sr-only",children:"Next"}),(0,s.jsx)(p.A,{className:"h-4 w-4"})]})]})})]})]})}let v=()=>{let[e,t]=(0,i.useState)("All"),[r,m]=(0,i.useState)(1),p="All"===e?l:l.filter(t=>t.category===e),f=Math.ceil(p.length/5),x=p.slice((r-1)*5,5*r),v=["All",...d].map(e=>({id:e,name:e,icon:u.A}));return o().useEffect(()=>{m(1)},[e]),(0,s.jsxs)("div",{className:"text-black",children:[(0,s.jsxs)("section",{className:"relative w-full h-[350px] md:h-[300px] mt-20 overflow-hidden flex items-center justify-center bg-white",children:[(0,s.jsx)("div",{className:"absolute inset-0 z-0",children:(0,s.jsx)(a.A,{amplitude:1,distance:0,enableMouseInteraction:!0})}),(0,s.jsxs)("div",{className:"relative z-10 text-center px-4",children:[(0,s.jsx)(n.A,{text:"Latest Blog Updates",className:"text-4xl md:text-6xl font-bold text-gray-900",delay:80,duration:.6,ease:"power3.out",splitType:"chars",from:{opacity:0,y:30},to:{opacity:1,y:0},threshold:.1,onLetterAnimationComplete:void 0}),(0,s.jsx)("p",{className:"text-gray-600 mt-4 max-w-xl mx-auto text-lg",children:"Stay informed with our latest stories, updates, and insights."})]})]}),(0,s.jsxs)("section",{className:"px-6 md:px-16 lg:px-24 max-w-7xl mx-auto",children:[(0,s.jsx)(c.t,{tabs:v,activeTab:e,setActiveTab:t}),(0,s.jsx)("div",{className:"grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8",children:x.map(e=>(0,s.jsxs)("div",{className:"bg-white rounded-xl shadow-md p-6 border hover:shadow-lg transition flex flex-col",children:[(0,s.jsx)("div",{className:"mb-4 overflow-hidden rounded-lg h-48",children:(0,s.jsx)("img",{src:e.image,alt:e.title,className:"w-full h-full object-cover"})}),(0,s.jsx)("h3",{className:"text-xl font-bold text-gray-900 mb-2",children:e.title}),(0,s.jsx)("p",{className:"text-gray-600 mb-4",children:e.description}),(0,s.jsx)("button",{className:"mt-auto text-red-600 hover:underline font-medium",children:"Read More →"})]},e.id))}),f>1&&(0,s.jsx)(h,{currentPage:r,totalPages:f,onPageChange:e=>{m(e),window.scrollTo({top:0,behavior:"smooth"})},className:"mt-12"})]})]})}},2080:(e,t,r)=>{"use strict";r.d(t,{A:()=>s});let s=(0,r(2688).A)("book-open",[["path",{d:"M12 7v14",key:"1akyts"}],["path",{d:"M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z",key:"ruj8y"}]])},2587:(e,t,r)=>{Promise.resolve().then(r.bind(r,493))},3033:e=>{"use strict";e.exports=require("next/dist/server/app-render/work-unit-async-storage.external.js")},3203:(e,t,r)=>{Promise.resolve().then(r.bind(r,1406))},3295:e=>{"use strict";e.exports=require("next/dist/server/app-render/after-task-async-storage.external.js")},3873:e=>{"use strict";e.exports=require("path")},4628:(e,t,r)=>{"use strict";r.r(t),r.d(t,{GlobalError:()=>n.a,__next_app__:()=>u,pages:()=>c,routeModule:()=>m,tree:()=>d});var s=r(5239),i=r(8088),o=r(8170),n=r.n(o),a=r(893),l={};for(let e in a)0>["default","tree","pages","GlobalError","__next_app__","routeModule"].indexOf(e)&&(l[e]=()=>a[e]);r.d(t,l);let d={children:["",{children:["blogs",{children:["__PAGE__",{},{page:[()=>Promise.resolve().then(r.bind(r,493)),"D:\\Tushar\\ecrs-frontage-test\\src\\app\\blogs\\page.tsx"]}]},{}]},{layout:[()=>Promise.resolve().then(r.bind(r,5535)),"D:\\Tushar\\ecrs-frontage-test\\src\\app\\layout.js"],"not-found":[()=>Promise.resolve().then(r.t.bind(r,7398,23)),"next/dist/client/components/not-found-error"],forbidden:[()=>Promise.resolve().then(r.t.bind(r,9999,23)),"next/dist/client/components/forbidden-error"],unauthorized:[()=>Promise.resolve().then(r.t.bind(r,5284,23)),"next/dist/client/components/unauthorized-error"]}]}.children,c=["D:\\Tushar\\ecrs-frontage-test\\src\\app\\blogs\\page.tsx"],u={require:r,loadChunk:()=>Promise.resolve()},m=new s.AppPageRouteModule({definition:{kind:i.RouteKind.APP_PAGE,page:"/blogs/page",pathname:"/blogs",bundlePath:"",filename:"",appPaths:[]},userland:{loaderTree:d}})},8680:(e,t,r)=>{"use strict";r.d(t,{A:()=>l});var s=r(687),i=r(3210),o=r(6208),n=r(5502),a=r(5346);o.os.registerPlugin(n.u,a.A);let l=({text:e,className:t="",delay:r=100,duration:l=.6,ease:d="power3.out",splitType:c="chars",from:u={opacity:0,y:40},to:m={opacity:1,y:0},threshold:p=.1,rootMargin:f="-100px",textAlign:x="center",onLetterAnimationComplete:h})=>{let v=(0,i.useRef)(null),g=(0,i.useRef)(!1);return(0,i.useEffect)(()=>{let e,t=v.current;if(!t||g.current)return;let s="lines"===c;s&&(t.style.position="relative");let i=new a.A(t,{type:c,absolute:s,linesClass:"split-line"});switch(c){case"lines":e=i.lines;break;case"words":e=i.words;break;case"words, chars":e=[...i.words,...i.chars];break;default:e=i.chars}e.forEach(e=>{e.style.willChange="transform, opacity"});let x=/^(-?\d+)px$/.exec(f),y=x?parseInt(x[1],10):0,b=y<0?`-=${Math.abs(y)}px`:`+=${y}px`,_=`top ${(1-p)*100}%${b}`,w=o.os.timeline({scrollTrigger:{trigger:t,start:_,toggleActions:"play none none none",once:!0},smoothChildTiming:!0,onComplete:()=>{g.current=!0,o.os.set(e,{...m,clearProps:"willChange",immediateRender:!0}),h?.()}});return w.set(e,{...u,immediateRender:!1,force3D:!0}),w.to(e,{...m,duration:l,ease:d,stagger:r/1e3,force3D:!0}),()=>{w.kill(),n.u.getAll().forEach(e=>e.kill()),o.os.killTweensOf(e),i.revert()}},[e,r,l,d,c,u,m,p,f,h,v]),(0,s.jsx)("p",{ref:v,className:`split-parent inline-block whitespace-normal ${t}`,style:{textAlign:x,wordWrap:"break-word",overflow:"visible",display:"inline-block",lineHeight:1.2,paddingBottom:"0.5em"},children:e})}},9121:e=>{"use strict";e.exports=require("next/dist/server/app-render/action-async-storage.external.js")},9294:e=>{"use strict";e.exports=require("next/dist/server/app-render/work-async-storage.external.js")},9533:(e,t,r)=>{"use strict";r.d(t,{t:()=>i});var s=r(687);r(3210);let i=({tabs:e,activeTab:t,setActiveTab:r})=>(0,s.jsx)("div",{className:"flex flex-wrap justify-around gap-2 mb-8 bg-white p-2 rounded-2xl shadow-lg",children:e.map(e=>(0,s.jsxs)("button",{onClick:()=>r(e.id),className:`flex items-center gap-2 px-6 py-3 rounded-xl font-semibold transition-all cursor-pointer ${t===e.id?"bg-gradient-to-r from-black to-red-800 cursor-pointer text-white shadow-lg":"text-gray-600 hover:bg-gray-100"}`,children:[(0,s.jsx)(e.icon,{size:18}),e.name]},e.id))})}};var t=require("../../webpack-runtime.js");t.C(e);var r=e=>t(t.s=e),s=t.X(0,[293,872,359],()=>r(4628));module.exports=s})();