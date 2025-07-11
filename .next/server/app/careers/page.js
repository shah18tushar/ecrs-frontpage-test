(()=>{var e={};e.id=846,e.ids=[846],e.modules={478:(e,t,s)=>{"use strict";s.d(t,{A:()=>m});var l=s(687),r=s(3210),i=s(4184),a=s(6813),n=s(7827),o=s(5933),c=s(9040);let d=`
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
`,m=({color:e=[1,1,1],amplitude:t=1,distance:s=0,enableMouseInteraction:m=!1,...p})=>{let x=(0,r.useRef)(null),h=(0,r.useRef)();return(0,r.useEffect)(()=>{if(!x.current)return;let l=x.current,r=new i.A({alpha:!0}),p=r.gl;p.clearColor(0,0,0,0),p.enable(p.BLEND),p.blendFunc(p.SRC_ALPHA,p.ONE_MINUS_SRC_ALPHA),l.appendChild(p.canvas);let f=new a.l(p),v=new n.B(p,{vertex:d,fragment:u,uniforms:{iTime:{value:0},iResolution:{value:new o.Q(p.canvas.width,p.canvas.height,p.canvas.width/p.canvas.height)},uColor:{value:new o.Q(...e)},uAmplitude:{value:t},uDistance:{value:s},uMouse:{value:new Float32Array([.5,.5])}}}),b=new c.e(p,{geometry:f,program:v});function g(){let{clientWidth:e,clientHeight:t}=l;r.setSize(e,t),v.uniforms.iResolution.value.r=e,v.uniforms.iResolution.value.g=t,v.uniforms.iResolution.value.b=e/t}window.addEventListener("resize",g),g();let y=[.5,.5],j=[.5,.5];function _(e){let t=l.getBoundingClientRect();j=[(e.clientX-t.left)/t.width,1-(e.clientY-t.top)/t.height]}function N(){j=[.5,.5]}return m&&(l.addEventListener("mousemove",_),l.addEventListener("mouseleave",N)),h.current=requestAnimationFrame(function e(t){m?(y[0]+=.05*(j[0]-y[0]),y[1]+=.05*(j[1]-y[1]),v.uniforms.uMouse.value[0]=y[0],v.uniforms.uMouse.value[1]=y[1]):(v.uniforms.uMouse.value[0]=.5,v.uniforms.uMouse.value[1]=.5),v.uniforms.iTime.value=.001*t,r.render({scene:b}),h.current=requestAnimationFrame(e)}),()=>{h.current&&cancelAnimationFrame(h.current),window.removeEventListener("resize",g),m&&(l.removeEventListener("mousemove",_),l.removeEventListener("mouseleave",N)),l.contains(p.canvas)&&l.removeChild(p.canvas),p.getExtension("WEBGL_lose_context")?.loseContext()}},[e,t,s,m]),(0,l.jsx)("div",{ref:x,className:"w-full h-full relative",...p})}},612:(e,t,s)=>{"use strict";s.r(t),s.d(t,{default:()=>l});let l=(0,s(2907).registerClientReference)(function(){throw Error("Attempted to call the default export of \"D:\\\\Tushar\\\\ecrs-frontage-test\\\\src\\\\app\\\\careers\\\\page.tsx\" from the server, but it's on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.")},"D:\\Tushar\\ecrs-frontage-test\\src\\app\\careers\\page.tsx","default")},846:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},1305:(e,t,s)=>{Promise.resolve().then(s.bind(s,612))},3033:e=>{"use strict";e.exports=require("next/dist/server/app-render/work-unit-async-storage.external.js")},3295:e=>{"use strict";e.exports=require("next/dist/server/app-render/after-task-async-storage.external.js")},3873:e=>{"use strict";e.exports=require("path")},6600:(e,t,s)=>{"use strict";s.r(t),s.d(t,{GlobalError:()=>a.a,__next_app__:()=>u,pages:()=>d,routeModule:()=>m,tree:()=>c});var l=s(5239),r=s(8088),i=s(8170),a=s.n(i),n=s(893),o={};for(let e in n)0>["default","tree","pages","GlobalError","__next_app__","routeModule"].indexOf(e)&&(o[e]=()=>n[e]);s.d(t,o);let c={children:["",{children:["careers",{children:["__PAGE__",{},{page:[()=>Promise.resolve().then(s.bind(s,612)),"D:\\Tushar\\ecrs-frontage-test\\src\\app\\careers\\page.tsx"]}]},{}]},{layout:[()=>Promise.resolve().then(s.bind(s,5535)),"D:\\Tushar\\ecrs-frontage-test\\src\\app\\layout.js"],"not-found":[()=>Promise.resolve().then(s.t.bind(s,7398,23)),"next/dist/client/components/not-found-error"],forbidden:[()=>Promise.resolve().then(s.t.bind(s,9999,23)),"next/dist/client/components/forbidden-error"],unauthorized:[()=>Promise.resolve().then(s.t.bind(s,5284,23)),"next/dist/client/components/unauthorized-error"]}]}.children,d=["D:\\Tushar\\ecrs-frontage-test\\src\\app\\careers\\page.tsx"],u={require:s,loadChunk:()=>Promise.resolve()},m=new l.AppPageRouteModule({definition:{kind:r.RouteKind.APP_PAGE,page:"/careers/page",pathname:"/careers",bundlePath:"",filename:"",appPaths:[]},userland:{loaderTree:c}})},7145:(e,t,s)=>{"use strict";s.r(t),s.d(t,{default:()=>h});var l=s(687),r=s(3210);let i=()=>(0,l.jsxs)("form",{className:"space-y-4",children:[(0,l.jsxs)("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4",children:[(0,l.jsxs)("div",{children:[(0,l.jsx)("label",{className:"block font-semibold mb-1",children:"Company Name *"}),(0,l.jsx)("input",{type:"text",placeholder:"Enter Company Name",className:"input"})]}),(0,l.jsxs)("div",{children:[(0,l.jsx)("label",{className:"block font-semibold mb-1",children:"Contact Person *"}),(0,l.jsx)("input",{type:"text",placeholder:"Enter Contact Person",className:"input"})]}),(0,l.jsxs)("div",{children:[(0,l.jsx)("label",{className:"block font-semibold mb-1",children:"Email *"}),(0,l.jsx)("input",{type:"email",placeholder:"Enter Email",className:"input"})]}),(0,l.jsxs)("div",{children:[(0,l.jsx)("label",{className:"block font-semibold mb-1",children:"Phone Number *"}),(0,l.jsx)("input",{type:"tel",placeholder:"Enter Phone Number",className:"input"})]}),(0,l.jsxs)("div",{className:"col-span-2",children:[(0,l.jsx)("label",{className:"block font-semibold mb-1",children:"Upload Company Profile *"}),(0,l.jsx)("input",{type:"file",className:"input"})]}),(0,l.jsxs)("div",{className:"col-span-2",children:[(0,l.jsx)("label",{className:"block font-semibold mb-1",children:"Your Message"}),(0,l.jsx)("textarea",{placeholder:"Your Message",className:"input h-24"})]})]}),(0,l.jsxs)("button",{type:"submit",className:"btn-shadow-red",children:[(0,l.jsx)("span",{children:"\uD83D\uDCE8"})," Send"]})]}),a=()=>(0,l.jsxs)("form",{className:"space-y-4",children:[(0,l.jsxs)("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4",children:[(0,l.jsxs)("div",{children:[(0,l.jsx)("label",{className:"block font-semibold mb-1",children:"Full Name *"}),(0,l.jsx)("input",{type:"text",placeholder:"Enter Full Name",className:"input"})]}),(0,l.jsxs)("div",{children:[(0,l.jsx)("label",{className:"block font-semibold mb-1",children:"Mobile Number *"}),(0,l.jsx)("input",{type:"tel",placeholder:"Enter Mobile Number",className:"input"})]}),(0,l.jsxs)("div",{children:[(0,l.jsx)("label",{className:"block font-semibold mb-1",children:"Email *"}),(0,l.jsx)("input",{type:"email",placeholder:"Enter Email",className:"input"})]}),(0,l.jsxs)("div",{children:[(0,l.jsx)("label",{className:"block font-semibold mb-1",children:"Department *"}),(0,l.jsx)("input",{type:"text",placeholder:"Enter Department Name",className:"input"})]}),(0,l.jsxs)("div",{className:"col-span-2",children:[(0,l.jsx)("label",{className:"block font-semibold mb-1",children:"Upload Resume *"}),(0,l.jsx)("input",{type:"file",className:"input"})]}),(0,l.jsxs)("div",{className:"col-span-2",children:[(0,l.jsx)("label",{className:"block font-semibold mb-1",children:"Your Message"}),(0,l.jsx)("textarea",{placeholder:"Your Message",className:"input h-24"})]})]}),(0,l.jsxs)("button",{type:"submit",className:"bg-red-600 text-white px-6 py-2 rounded-md hover:bg-red-700 flex items-center gap-2",children:[(0,l.jsx)("span",{children:"\uD83D\uDCE8"})," Send"]})]}),n=()=>(0,l.jsxs)("form",{className:"space-y-4",children:[(0,l.jsxs)("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4",children:[(0,l.jsxs)("div",{children:[(0,l.jsx)("label",{className:"block font-semibold mb-1",children:"Full Name *"}),(0,l.jsx)("input",{type:"text",placeholder:"Enter Full Name",className:"input"})]}),(0,l.jsxs)("div",{children:[(0,l.jsx)("label",{className:"block font-semibold mb-1",children:"Enter Mobile Number *"}),(0,l.jsx)("input",{type:"tel",placeholder:"Enter Mobile Number",className:"input"})]}),(0,l.jsxs)("div",{children:[(0,l.jsx)("label",{className:"block font-semibold mb-1",children:"Enter Email *"}),(0,l.jsx)("input",{type:"email",placeholder:"Enter Email",className:"input"})]}),(0,l.jsxs)("div",{children:[(0,l.jsx)("label",{className:"block font-semibold mb-1",children:"Vehicle Type *"}),(0,l.jsx)("input",{type:"text",placeholder:"Enter Your Vehicle Type",className:"input"})]}),(0,l.jsxs)("div",{className:"col-span-2",children:[(0,l.jsx)("label",{className:"block font-semibold mb-1",children:"Choose File (License) *"}),(0,l.jsx)("input",{type:"file",className:"input"})]}),(0,l.jsxs)("div",{className:"col-span-2",children:[(0,l.jsx)("label",{className:"block font-semibold mb-1",children:"Your Message"}),(0,l.jsx)("textarea",{placeholder:"Your Message",className:"input h-24"})]})]}),(0,l.jsxs)("button",{type:"submit",className:"btn-shadow-red",children:[(0,l.jsx)("span",{children:"\uD83D\uDCE8"})," Send"]})]});var o=s(9533);let c=(0,s(2688).A)("briefcase",[["path",{d:"M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16",key:"jecpp"}],["rect",{width:"20",height:"14",x:"2",y:"6",rx:"2",key:"i6l2r4"}]]);var d=s(1312),u=s(4478);let m={vendor:{image:"/vendor.jpg",title:"Vendor Partnership",description:"Join our network of trusted vendors and grow your business with us.",icon:c},staff:{image:"/staff.jpg",title:"Staff Position",description:"Become part of our dedicated team and build your career with us.",icon:d.A},driver:{image:"/driver.jpg",title:"Driver Application",description:"Start your journey as a professional driver with our company.",icon:u.A}};var p=s(8680),x=s(478);function h(){let[e,t]=(0,r.useState)("vendor"),s=Object.entries(m).map(([e,{title:t,icon:s}])=>({id:e,name:t,icon:s}));return(0,l.jsxs)("div",{className:"text-black",children:[(0,l.jsxs)("section",{className:"relative w-full h-[350px] md:h-[300px] mt-20 overflow-hidden flex items-center justify-center bg-white",children:[(0,l.jsx)("div",{className:"absolute inset-0 z-0",children:(0,l.jsx)(x.A,{amplitude:1,distance:0,enableMouseInteraction:!0})}),(0,l.jsxs)("div",{className:"relative z-10 text-center px-4",children:[(0,l.jsx)(p.A,{text:"Careers at ECRS",className:"text-5xl md:text-6xl font-bold text-gray-900",delay:80,duration:.6,ease:"power3.out",splitType:"chars",from:{opacity:0,y:30},to:{opacity:1,y:0},threshold:.1,onLetterAnimationComplete:void 0}),(0,l.jsx)("p",{className:"text-gray-600 mt-4 max-w-xl mx-auto text-lg",children:"Join our growing team across 180+ cities. Choose your role and apply now!"})]})]}),(0,l.jsx)("div",{className:" px-4 sm:px-6 lg:px-8",children:(0,l.jsxs)("div",{className:"max-w-4xl mx-auto",children:[(0,l.jsx)("div",{className:"mb-10",children:(0,l.jsx)(o.t,{tabs:s,activeTab:e,setActiveTab:t})}),(0,l.jsxs)("section",{className:"bg-white p-8 rounded-xl shadow-sm border border-gray-100",children:[(0,l.jsxs)("h2",{className:"text-2xl md:text-3xl font-bold text-gray-900 mb-4",children:["Apply for ",m[e].title]}),(0,l.jsx)("p",{className:"text-gray-600 mb-6",children:m[e].description}),"vendor"===e&&(0,l.jsx)(i,{}),"staff"===e&&(0,l.jsx)(a,{}),"driver"===e&&(0,l.jsx)(n,{})]})]})})]})}},7753:(e,t,s)=>{Promise.resolve().then(s.bind(s,7145))},8680:(e,t,s)=>{"use strict";s.d(t,{A:()=>o});var l=s(687),r=s(3210),i=s(6208),a=s(5502),n=s(5346);i.os.registerPlugin(a.u,n.A);let o=({text:e,className:t="",delay:s=100,duration:o=.6,ease:c="power3.out",splitType:d="chars",from:u={opacity:0,y:40},to:m={opacity:1,y:0},threshold:p=.1,rootMargin:x="-100px",textAlign:h="center",onLetterAnimationComplete:f})=>{let v=(0,r.useRef)(null),b=(0,r.useRef)(!1);return(0,r.useEffect)(()=>{let e,t=v.current;if(!t||b.current)return;let l="lines"===d;l&&(t.style.position="relative");let r=new n.A(t,{type:d,absolute:l,linesClass:"split-line"});switch(d){case"lines":e=r.lines;break;case"words":e=r.words;break;case"words, chars":e=[...r.words,...r.chars];break;default:e=r.chars}e.forEach(e=>{e.style.willChange="transform, opacity"});let h=/^(-?\d+)px$/.exec(x),g=h?parseInt(h[1],10):0,y=g<0?`-=${Math.abs(g)}px`:`+=${g}px`,j=`top ${(1-p)*100}%${y}`,_=i.os.timeline({scrollTrigger:{trigger:t,start:j,toggleActions:"play none none none",once:!0},smoothChildTiming:!0,onComplete:()=>{b.current=!0,i.os.set(e,{...m,clearProps:"willChange",immediateRender:!0}),f?.()}});return _.set(e,{...u,immediateRender:!1,force3D:!0}),_.to(e,{...m,duration:o,ease:c,stagger:s/1e3,force3D:!0}),()=>{_.kill(),a.u.getAll().forEach(e=>e.kill()),i.os.killTweensOf(e),r.revert()}},[e,s,o,c,d,u,m,p,x,f,v]),(0,l.jsx)("p",{ref:v,className:`split-parent inline-block whitespace-normal ${t}`,style:{textAlign:h,wordWrap:"break-word",overflow:"visible",display:"inline-block",lineHeight:1.2,paddingBottom:"0.5em"},children:e})}},9121:e=>{"use strict";e.exports=require("next/dist/server/app-render/action-async-storage.external.js")},9294:e=>{"use strict";e.exports=require("next/dist/server/app-render/work-async-storage.external.js")},9533:(e,t,s)=>{"use strict";s.d(t,{t:()=>r});var l=s(687);s(3210);let r=({tabs:e,activeTab:t,setActiveTab:s})=>(0,l.jsx)("div",{className:"flex flex-wrap justify-around gap-2 mb-8 bg-white p-2 rounded-2xl shadow-lg",children:e.map(e=>(0,l.jsxs)("button",{onClick:()=>s(e.id),className:`flex items-center gap-2 px-6 py-3 rounded-xl font-semibold transition-all cursor-pointer ${t===e.id?"bg-gradient-to-r from-black to-red-800 cursor-pointer text-white shadow-lg":"text-gray-600 hover:bg-gray-100"}`,children:[(0,l.jsx)(e.icon,{size:18}),e.name]},e.id))})}};var t=require("../../webpack-runtime.js");t.C(e);var s=e=>t(t.s=e),l=t.X(0,[293,872,359],()=>s(6600));module.exports=l})();