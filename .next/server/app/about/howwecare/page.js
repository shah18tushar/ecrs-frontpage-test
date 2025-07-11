(()=>{var e={};e.id=620,e.ids=[620],e.modules={478:(e,t,r)=>{"use strict";r.d(t,{A:()=>m});var s=r(687),a=r(3210),i=r(4184),n=r(6813),o=r(7827),l=r(5933),c=r(9040);let d=`
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
`,m=({color:e=[1,1,1],amplitude:t=1,distance:r=0,enableMouseInteraction:m=!1,...p})=>{let h=(0,a.useRef)(null),x=(0,a.useRef)();return(0,a.useEffect)(()=>{if(!h.current)return;let s=h.current,a=new i.A({alpha:!0}),p=a.gl;p.clearColor(0,0,0,0),p.enable(p.BLEND),p.blendFunc(p.SRC_ALPHA,p.ONE_MINUS_SRC_ALPHA),s.appendChild(p.canvas);let f=new n.l(p),v=new o.B(p,{vertex:d,fragment:u,uniforms:{iTime:{value:0},iResolution:{value:new l.Q(p.canvas.width,p.canvas.height,p.canvas.width/p.canvas.height)},uColor:{value:new l.Q(...e)},uAmplitude:{value:t},uDistance:{value:r},uMouse:{value:new Float32Array([.5,.5])}}}),y=new c.e(p,{geometry:f,program:v});function g(){let{clientWidth:e,clientHeight:t}=s;a.setSize(e,t),v.uniforms.iResolution.value.r=e,v.uniforms.iResolution.value.g=t,v.uniforms.iResolution.value.b=e/t}window.addEventListener("resize",g),g();let w=[.5,.5],b=[.5,.5];function _(e){let t=s.getBoundingClientRect();b=[(e.clientX-t.left)/t.width,1-(e.clientY-t.top)/t.height]}function P(){b=[.5,.5]}return m&&(s.addEventListener("mousemove",_),s.addEventListener("mouseleave",P)),x.current=requestAnimationFrame(function e(t){m?(w[0]+=.05*(b[0]-w[0]),w[1]+=.05*(b[1]-w[1]),v.uniforms.uMouse.value[0]=w[0],v.uniforms.uMouse.value[1]=w[1]):(v.uniforms.uMouse.value[0]=.5,v.uniforms.uMouse.value[1]=.5),v.uniforms.iTime.value=.001*t,a.render({scene:y}),x.current=requestAnimationFrame(e)}),()=>{x.current&&cancelAnimationFrame(x.current),window.removeEventListener("resize",g),m&&(s.removeEventListener("mousemove",_),s.removeEventListener("mouseleave",P)),s.contains(p.canvas)&&s.removeChild(p.canvas),p.getExtension("WEBGL_lose_context")?.loseContext()}},[e,t,r,m]),(0,s.jsx)("div",{ref:h,className:"w-full h-full relative",...p})}},846:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},1834:(e,t,r)=>{"use strict";r.r(t),r.d(t,{GlobalError:()=>n.a,__next_app__:()=>u,pages:()=>d,routeModule:()=>m,tree:()=>c});var s=r(5239),a=r(8088),i=r(8170),n=r.n(i),o=r(893),l={};for(let e in o)0>["default","tree","pages","GlobalError","__next_app__","routeModule"].indexOf(e)&&(l[e]=()=>o[e]);r.d(t,l);let c={children:["",{children:["about",{children:["howwecare",{children:["__PAGE__",{},{page:[()=>Promise.resolve().then(r.bind(r,7680)),"D:\\Tushar\\ecrs-frontage-test\\src\\app\\about\\howwecare\\page.jsx"]}]},{}]},{}]},{layout:[()=>Promise.resolve().then(r.bind(r,5535)),"D:\\Tushar\\ecrs-frontage-test\\src\\app\\layout.js"],"not-found":[()=>Promise.resolve().then(r.t.bind(r,7398,23)),"next/dist/client/components/not-found-error"],forbidden:[()=>Promise.resolve().then(r.t.bind(r,9999,23)),"next/dist/client/components/forbidden-error"],unauthorized:[()=>Promise.resolve().then(r.t.bind(r,5284,23)),"next/dist/client/components/unauthorized-error"]}]}.children,d=["D:\\Tushar\\ecrs-frontage-test\\src\\app\\about\\howwecare\\page.jsx"],u={require:r,loadChunk:()=>Promise.resolve()},m=new s.AppPageRouteModule({definition:{kind:a.RouteKind.APP_PAGE,page:"/about/howwecare/page",pathname:"/about/howwecare",bundlePath:"",filename:"",appPaths:[]},userland:{loaderTree:c}})},3033:e=>{"use strict";e.exports=require("next/dist/server/app-render/work-unit-async-storage.external.js")},3295:e=>{"use strict";e.exports=require("next/dist/server/app-render/after-task-async-storage.external.js")},3873:e=>{"use strict";e.exports=require("path")},4225:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>x});var s=r(687);r(3210);var a=r(8680),i=r(474),n=r(478),o=r(2688);let l=(0,o.A)("heart-handshake",[["path",{d:"M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z",key:"c3ymky"}],["path",{d:"M12 5 9.04 7.96a2.17 2.17 0 0 0 0 3.08c.82.82 2.13.85 3 .07l2.07-1.9a2.82 2.82 0 0 1 3.79 0l2.96 2.66",key:"4oyue0"}],["path",{d:"m18 15-2-2",key:"60u0ii"}],["path",{d:"m15 18-2-2",key:"6p76be"}]]);var c=r(8038);let d=(0,o.A)("wrench",[["path",{d:"M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z",key:"cbrjhi"}]]);var u=r(1312);let m=(0,o.A)("car-front",[["path",{d:"m21 8-2 2-1.5-3.7A2 2 0 0 0 15.646 5H8.4a2 2 0 0 0-1.903 1.257L5 10 3 8",key:"1imjwt"}],["path",{d:"M7 14h.01",key:"1qa3f1"}],["path",{d:"M17 14h.01",key:"7oqj8z"}],["rect",{width:"18",height:"8",x:"3",y:"10",rx:"2",key:"a7itu8"}],["path",{d:"M5 18v2",key:"ppbyun"}],["path",{d:"M19 18v2",key:"gy7782"}]]);var p=r(5336);let h=[{icon:(0,s.jsx)(l,{className:"text-red-600 w-6 h-6"}),title:"Customer-Centric Service",desc:"24/7 support, clean vehicles, and a dedicated trip manager to ensure a smooth experience."},{icon:(0,s.jsx)(c.A,{className:"text-red-600 w-6 h-6"}),title:"Guaranteed Safety",desc:"Vehicles are thoroughly sanitized, maintained, and checked before every trip."},{icon:(0,s.jsx)(d,{className:"text-red-600 w-6 h-6"}),title:"On-Road Support",desc:"Breakdown assistance within 60 minutes across service zones."},{icon:(0,s.jsx)(u.A,{className:"text-red-600 w-6 h-6"}),title:"Trained Drivers",desc:"Our drivers are trained, verified, and ready to assist with multilingual support."},{icon:(0,s.jsx)(m,{className:"text-red-600 w-6 h-6"}),title:"OEM Servicing Only",desc:"Cars serviced only through brand authorized centers like Hyundai, Maruti & Tata."},{icon:(0,s.jsx)(p.A,{className:"text-red-600 w-6 h-6"}),title:"Economical Costs",desc:"Best possible services at economical costs."},{icon:(0,s.jsx)(p.A,{className:"text-red-600 w-6 h-6"}),title:"PAN India Services",desc:"One point of contact for PAN India services."},{icon:(0,s.jsx)(p.A,{className:"text-red-600 w-6 h-6"}),title:"24x7 Operational Support",desc:"24 X 7 Operation support and vehicle checking system."},{icon:(0,s.jsx)(p.A,{className:"text-red-600 w-6 h-6"}),title:"Digitized Processes",desc:"Everything is computerized and software based."},{icon:(0,s.jsx)(p.A,{className:"text-red-600 w-6 h-6"}),title:"GPS & Panic Button",desc:"GPS and Panic button facility for passenger safety and security."},{icon:(0,s.jsx)(p.A,{className:"text-red-600 w-6 h-6"}),title:"Daily Feedback",desc:"Daily customer feedback collection and analysis."},{icon:(0,s.jsx)(p.A,{className:"text-red-600 w-6 h-6"}),title:"Quick Email Response",desc:"Response to emails within maximum 10 to 15 minutes."},{icon:(0,s.jsx)(p.A,{className:"text-red-600 w-6 h-6"}),title:"Emergency Support",desc:"Emergency vehicle support whenever required."},{icon:(0,s.jsx)(p.A,{className:"text-red-600 w-6 h-6"}),title:"Driver Training",desc:"Driver training conducted every fortnight."},{icon:(0,s.jsx)(p.A,{className:"text-red-600 w-6 h-6"}),title:"Dedicated Compliance Dept.",desc:"Separate department for vehicles and drivers compliance."},{icon:(0,s.jsx)(p.A,{className:"text-red-600 w-6 h-6"}),title:"Maintenance Dept.",desc:"Separate department for fleet maintenance."},{icon:(0,s.jsx)(p.A,{className:"text-red-600 w-6 h-6"}),title:"Private Garage Setup",desc:"Own garage setup near Aditya Birla Hospital, Chinchwad, Pune (10,000 sq. ft.)."},{icon:(0,s.jsx)(p.A,{className:"text-red-600 w-6 h-6"}),title:"Power Backup",desc:"24x7 electrical power backup system available."},{icon:(0,s.jsx)(p.A,{className:"text-red-600 w-6 h-6"}),title:"Transparent Billing",desc:"100% accurate and transparent billing process."},{icon:(0,s.jsx)(p.A,{className:"text-red-600 w-6 h-6"}),title:"All Vehicle Types Available",desc:"AC/Non-AC buses, sedans, MUVs, and premium cars available."},{icon:(0,s.jsx)(p.A,{className:"text-red-600 w-6 h-6"}),title:"Corporate-Only Focus",desc:"Serving over 200 corporate clients exclusively."},{icon:(0,s.jsx)(p.A,{className:"text-red-600 w-6 h-6"}),title:"Luxury Inclusions",desc:"Water bottles, newspapers, tissues complimentary in every car."},{icon:(0,s.jsx)(p.A,{className:"text-red-600 w-6 h-6"}),title:"Safety Essentials",desc:"Car freshener, first aid kit, extinguisher, umbrella, torch provided."},{icon:(0,s.jsx)(p.A,{className:"text-red-600 w-6 h-6"}),title:"Centrally Located",desc:"Office and facilities located at the heart of the city."},{icon:(0,s.jsx)(p.A,{className:"text-red-600 w-6 h-6"}),title:"Expert Drivers & Staff",desc:"Experienced staff and drivers with deep knowledge of local & Mumbai roads."}],x=()=>(0,s.jsxs)("div",{className:"text-black",children:[(0,s.jsxs)("section",{className:"relative w-full h-[350px] md:h-[370px] overflow-hidden flex items-center justify-center bg-white",children:[(0,s.jsx)("div",{className:"absolute inset-0 z-0",children:(0,s.jsx)(n.A,{amplitude:1,distance:0,enableMouseInteraction:!0})}),(0,s.jsxs)("div",{className:"relative z-10 text-center px-4 mt-20",children:[(0,s.jsx)(a.A,{text:"How We Care",className:"text-5xl md:text-6xl font-bold text-gray-900",delay:80,duration:.6,ease:"power3.out",splitType:"chars",from:{opacity:0,y:30},to:{opacity:1,y:0},threshold:.1}),(0,s.jsx)("p",{className:"text-gray-600 mt-4 max-w-xl mx-auto text-lg",children:"Experience the highest standards in car rental care with safety, hygiene, and customer-first service."})]})]}),(0,s.jsx)("div",{className:"bg-white p-6 mb-10  rounded-2xl shadow-lg text-center max-w-3xl mx-auto border-l-4 border-red-600",children:(0,s.jsx)("p",{className:"text-xl italic font-medium text-gray-800",children:"“Your Ride, Our Promise: We're Here to Make Every Journey Memorable.”"})}),(0,s.jsx)("section",{className:"px-6 md:px-16 max-w-7xl mx-auto",children:(0,s.jsx)("div",{className:"grid grid-cols-2 md:grid-cols-4 gap-4 mb-12",children:[1,2,3,4].map(e=>(0,s.jsx)("div",{className:"relative overflow-hidden rounded-xl shadow hover:scale-105 transition-transform",children:(0,s.jsx)(i.default,{src:`/HowWeCare/howwe${e}.jpg`,alt:`Care ${e}`,width:400,height:300,className:"w-full h-full object-cover"})},e))})}),(0,s.jsxs)("section",{className:"px-6 md:px-16 lg:px-24 py-10 max-w-7xl mx-auto",children:[(0,s.jsx)("h2",{className:"text-3xl md:text-4xl font-bold mb-8 text-center",children:"Why Choose ECRS ?"}),(0,s.jsx)("div",{className:"grid md:grid-cols-2 lg:grid-cols-3 gap-8",children:h.map((e,t)=>(0,s.jsxs)("div",{className:"bg-gray-50 border border-gray-200 hover:bg-red-50 hover:border-red-400 p-6 rounded-xl shadow hover:shadow-md transition duration-300",children:[(0,s.jsxs)("div",{className:"flex items-center gap-4 mb-4",children:[(0,s.jsx)("div",{className:"p-2",children:e.icon}),(0,s.jsx)("h3",{className:"text-xl font-semibold text-gray-800",children:e.title})]}),(0,s.jsx)("p",{className:"text-gray-600",children:e.desc})]},t))})]})]})},4426:(e,t,r)=>{Promise.resolve().then(r.bind(r,4225))},5336:(e,t,r)=>{"use strict";r.d(t,{A:()=>s});let s=(0,r(2688).A)("circle-check-big",[["path",{d:"M21.801 10A10 10 0 1 1 17 3.335",key:"yps3ct"}],["path",{d:"m9 11 3 3L22 4",key:"1pflzl"}]])},6274:(e,t,r)=>{Promise.resolve().then(r.bind(r,7680))},7680:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>s});let s=(0,r(2907).registerClientReference)(function(){throw Error("Attempted to call the default export of \"D:\\\\Tushar\\\\ecrs-frontage-test\\\\src\\\\app\\\\about\\\\howwecare\\\\page.jsx\" from the server, but it's on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.")},"D:\\Tushar\\ecrs-frontage-test\\src\\app\\about\\howwecare\\page.jsx","default")},8038:(e,t,r)=>{"use strict";r.d(t,{A:()=>s});let s=(0,r(2688).A)("shield-check",[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]])},8680:(e,t,r)=>{"use strict";r.d(t,{A:()=>l});var s=r(687),a=r(3210),i=r(6208),n=r(5502),o=r(5346);i.os.registerPlugin(n.u,o.A);let l=({text:e,className:t="",delay:r=100,duration:l=.6,ease:c="power3.out",splitType:d="chars",from:u={opacity:0,y:40},to:m={opacity:1,y:0},threshold:p=.1,rootMargin:h="-100px",textAlign:x="center",onLetterAnimationComplete:f})=>{let v=(0,a.useRef)(null),y=(0,a.useRef)(!1);return(0,a.useEffect)(()=>{let e,t=v.current;if(!t||y.current)return;let s="lines"===d;s&&(t.style.position="relative");let a=new o.A(t,{type:d,absolute:s,linesClass:"split-line"});switch(d){case"lines":e=a.lines;break;case"words":e=a.words;break;case"words, chars":e=[...a.words,...a.chars];break;default:e=a.chars}e.forEach(e=>{e.style.willChange="transform, opacity"});let x=/^(-?\d+)px$/.exec(h),g=x?parseInt(x[1],10):0,w=g<0?`-=${Math.abs(g)}px`:`+=${g}px`,b=`top ${(1-p)*100}%${w}`,_=i.os.timeline({scrollTrigger:{trigger:t,start:b,toggleActions:"play none none none",once:!0},smoothChildTiming:!0,onComplete:()=>{y.current=!0,i.os.set(e,{...m,clearProps:"willChange",immediateRender:!0}),f?.()}});return _.set(e,{...u,immediateRender:!1,force3D:!0}),_.to(e,{...m,duration:l,ease:c,stagger:r/1e3,force3D:!0}),()=>{_.kill(),n.u.getAll().forEach(e=>e.kill()),i.os.killTweensOf(e),a.revert()}},[e,r,l,c,d,u,m,p,h,f,v]),(0,s.jsx)("p",{ref:v,className:`split-parent inline-block whitespace-normal ${t}`,style:{textAlign:x,wordWrap:"break-word",overflow:"visible",display:"inline-block",lineHeight:1.2,paddingBottom:"0.5em"},children:e})}},9121:e=>{"use strict";e.exports=require("next/dist/server/app-render/action-async-storage.external.js")},9294:e=>{"use strict";e.exports=require("next/dist/server/app-render/work-async-storage.external.js")}};var t=require("../../../webpack-runtime.js");t.C(e);var r=e=>t(t.s=e),s=t.X(0,[293,872,474,359],()=>r(1834));module.exports=s})();