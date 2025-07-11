(()=>{var e={};e.id=498,e.ids=[498],e.modules={478:(e,t,r)=>{"use strict";r.d(t,{A:()=>m});var s=r(687),i=r(3210),l=r(4184),n=r(6813),a=r(7827),o=r(5933),c=r(9040);let d=`
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
`,m=({color:e=[1,1,1],amplitude:t=1,distance:r=0,enableMouseInteraction:m=!1,...p})=>{let x=(0,i.useRef)(null),f=(0,i.useRef)();return(0,i.useEffect)(()=>{if(!x.current)return;let s=x.current,i=new l.A({alpha:!0}),p=i.gl;p.clearColor(0,0,0,0),p.enable(p.BLEND),p.blendFunc(p.SRC_ALPHA,p.ONE_MINUS_SRC_ALPHA),s.appendChild(p.canvas);let h=new n.l(p),v=new a.B(p,{vertex:d,fragment:u,uniforms:{iTime:{value:0},iResolution:{value:new o.Q(p.canvas.width,p.canvas.height,p.canvas.width/p.canvas.height)},uColor:{value:new o.Q(...e)},uAmplitude:{value:t},uDistance:{value:r},uMouse:{value:new Float32Array([.5,.5])}}}),g=new c.e(p,{geometry:h,program:v});function b(){let{clientWidth:e,clientHeight:t}=s;i.setSize(e,t),v.uniforms.iResolution.value.r=e,v.uniforms.iResolution.value.g=t,v.uniforms.iResolution.value.b=e/t}window.addEventListener("resize",b),b();let y=[.5,.5],w=[.5,.5];function _(e){let t=s.getBoundingClientRect();w=[(e.clientX-t.left)/t.width,1-(e.clientY-t.top)/t.height]}function P(){w=[.5,.5]}return m&&(s.addEventListener("mousemove",_),s.addEventListener("mouseleave",P)),f.current=requestAnimationFrame(function e(t){m?(y[0]+=.05*(w[0]-y[0]),y[1]+=.05*(w[1]-y[1]),v.uniforms.uMouse.value[0]=y[0],v.uniforms.uMouse.value[1]=y[1]):(v.uniforms.uMouse.value[0]=.5,v.uniforms.uMouse.value[1]=.5),v.uniforms.iTime.value=.001*t,i.render({scene:g}),f.current=requestAnimationFrame(e)}),()=>{f.current&&cancelAnimationFrame(f.current),window.removeEventListener("resize",b),m&&(s.removeEventListener("mousemove",_),s.removeEventListener("mouseleave",P)),s.contains(p.canvas)&&s.removeChild(p.canvas),p.getExtension("WEBGL_lose_context")?.loseContext()}},[e,t,r,m]),(0,s.jsx)("div",{ref:x,className:"w-full h-full relative",...p})}},626:(e,t,r)=>{Promise.resolve().then(r.bind(r,5164))},846:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},1512:(e,t,r)=>{"use strict";r.r(t),r.d(t,{GlobalError:()=>n.a,__next_app__:()=>u,pages:()=>d,routeModule:()=>m,tree:()=>c});var s=r(5239),i=r(8088),l=r(8170),n=r.n(l),a=r(893),o={};for(let e in a)0>["default","tree","pages","GlobalError","__next_app__","routeModule"].indexOf(e)&&(o[e]=()=>a[e]);r.d(t,o);let c={children:["",{children:["about",{children:["howitworks",{children:["__PAGE__",{},{page:[()=>Promise.resolve().then(r.bind(r,5164)),"D:\\Tushar\\ecrs-frontage-test\\src\\app\\about\\howitworks\\page.jsx"]}]},{}]},{}]},{layout:[()=>Promise.resolve().then(r.bind(r,5535)),"D:\\Tushar\\ecrs-frontage-test\\src\\app\\layout.js"],"not-found":[()=>Promise.resolve().then(r.t.bind(r,7398,23)),"next/dist/client/components/not-found-error"],forbidden:[()=>Promise.resolve().then(r.t.bind(r,9999,23)),"next/dist/client/components/forbidden-error"],unauthorized:[()=>Promise.resolve().then(r.t.bind(r,5284,23)),"next/dist/client/components/unauthorized-error"]}]}.children,d=["D:\\Tushar\\ecrs-frontage-test\\src\\app\\about\\howitworks\\page.jsx"],u={require:r,loadChunk:()=>Promise.resolve()},m=new s.AppPageRouteModule({definition:{kind:i.RouteKind.APP_PAGE,page:"/about/howitworks/page",pathname:"/about/howitworks",bundlePath:"",filename:"",appPaths:[]},userland:{loaderTree:c}})},3033:e=>{"use strict";e.exports=require("next/dist/server/app-render/work-unit-async-storage.external.js")},3295:e=>{"use strict";e.exports=require("next/dist/server/app-render/after-task-async-storage.external.js")},3873:e=>{"use strict";e.exports=require("path")},5130:(e,t,r)=>{Promise.resolve().then(r.bind(r,8528))},5164:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>s});let s=(0,r(2907).registerClientReference)(function(){throw Error("Attempted to call the default export of \"D:\\\\Tushar\\\\ecrs-frontage-test\\\\src\\\\app\\\\about\\\\howitworks\\\\page.jsx\" from the server, but it's on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.")},"D:\\Tushar\\ecrs-frontage-test\\src\\app\\about\\howitworks\\page.jsx","default")},8528:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>m});var s=r(687),i=r(7102),l=r(3210),n=r(8680),a=r(478);let o=[{id:1,title:"Rate Approval",description:"We need your approval for rates before service begins for smooth billing and to avoid queries."},{id:2,title:"Booking Methods",description:"Use our online software or email reservations@ecrspune.com (accessible 24/7)."},{id:3,title:"Confirmation",description:"Immediate SMS/email confirmation within 10-15 minutes with booking details."},{id:4,title:"Driver Details",description:"Car and driver details sent via SMS one day prior by 2100Hrs."},{id:5,title:"Vehicle Check",description:"Security checks vehicle before dispatch and driver receives instructions."},{id:6,title:"Real-time Updates",description:"SMS notifications for vehicle reporting and pick-up completion."},{id:7,title:"Safety Protocol",description:"Drivers only take urgent calls with guest permission when safely parked."},{id:8,title:"Feedback System",description:"Feedback form on duty slip and follow-up call after journey."}],c={features:["100% accurate & transparent billing","All required details included (employee no, cost center, etc.)","Flexible bill submission (per request, weekly, or fortnightly)","Complete documentation with each bill","Soft copy of bill summary provided in advance","Monthly MIS reports available on request","15-day payment terms"],paymentMethods:["Cheque / DD","NEFT / RTGS","Credit/Debit Cards","PayTM","American Express"]},d=["Clear Vision and Goals","Quality Product or Service","Customer-Centric Approach","Effective Leadership","Talented Team","Adaptability and Innovation","Financial Management","Marketing and Branding","Strategic Partnerships","Continuous Evaluation"],u={supportText:"Any queries/complaints regarding car bookings will be attended 24/7 by our experienced operation support staff.",numbers:[{label:"Airport PRI Line",number:"020 27401212"},{label:"Airport Office",number:"0750 777 5790"},{label:"PCMC Office",number:"07875 405 405"},{label:"PCMC PRI",number:"020 - 6767 6060"}],email:"reservations@ecrspune.com"};function m(){let e={title:(0,l.useRef)(null),procedure:(0,l.useRef)(null),billing:(0,l.useRef)(null),success:(0,l.useRef)(null),contact:(0,l.useRef)(null)};return Object.entries(e).forEach(([e,t],r)=>{(0,i.xv)(.2*r,.8,t)}),(0,s.jsxs)("div",{className:"text-black",children:[(0,s.jsxs)("section",{className:"relative w-full h-[350px] md:h-[420px] overflow-hidden flex items-center justify-center bg-white",children:[(0,s.jsx)("div",{className:"absolute inset-0 z-0",children:(0,s.jsx)(a.A,{amplitude:1,distance:0,enableMouseInteraction:!0})}),(0,s.jsxs)("div",{className:"relative z-10 text-center px-4",children:[(0,s.jsx)(n.A,{text:"How It Works",className:"text-5xl md:text-6xl font-bold text-gray-900",delay:80,duration:.6,ease:"power3.out",splitType:"chars",from:{opacity:0,y:30},to:{opacity:1,y:0},threshold:.1}),(0,s.jsx)("p",{className:"text-gray-600 mt-4 max-w-xl mx-auto text-lg",children:"Step-by-step breakdown of our booking and billing process"})]})]}),(0,s.jsx)("div",{className:"-mt-9 px-4 sm:px-6 lg:px-8",children:(0,s.jsxs)("div",{className:"max-w-4xl mx-auto",children:[(0,s.jsxs)("section",{ref:e.procedure,className:"mb-16 bg-white p-8 rounded-xl shadow-sm border border-gray-100",children:[(0,s.jsxs)("h2",{className:"text-2xl font-bold text-gray-900 mb-6 flex items-center",children:[(0,s.jsx)("span",{className:"bg-blue-100 text-blue-600 p-2 rounded-full mr-3",children:"\uD83D\uDCD8"}),"Car Booking Procedure"]}),(0,s.jsx)("div",{className:"space-y-6",children:o.map(e=>(0,s.jsxs)("div",{className:"flex",children:[(0,s.jsx)("div",{className:"flex-shrink-0 mr-4",children:(0,s.jsx)("div",{className:"flex items-center justify-center h-8 w-8 rounded-full bg-green-100 text-green-600",children:e.id})}),(0,s.jsxs)("div",{children:[(0,s.jsx)("h3",{className:"font-medium text-gray-900",children:e.title}),(0,s.jsx)("p",{className:"text-gray-700",children:e.description})]})]},e.id))})]}),(0,s.jsxs)("section",{ref:e.billing,className:"mb-16 bg-white p-8 rounded-xl shadow-sm border border-gray-100",children:[(0,s.jsxs)("h2",{className:"text-2xl font-bold text-gray-900 mb-6 flex items-center",children:[(0,s.jsx)("span",{className:"bg-purple-100 text-purple-600 p-2 rounded-full mr-3",children:"\uD83D\uDCB3"}),"Billing & Accounts"]}),(0,s.jsxs)("div",{className:"grid md:grid-cols-2 gap-6",children:[(0,s.jsxs)("div",{children:[(0,s.jsx)("h3",{className:"font-medium text-gray-900 mb-3",children:"Our Billing Features:"}),(0,s.jsx)("ul",{className:"space-y-2",children:c.features.map((e,t)=>(0,s.jsxs)("li",{className:"flex items-start",children:[(0,s.jsx)("span",{className:"text-green-500 mr-2",children:"✓"}),(0,s.jsx)("span",{children:e})]},t))})]}),(0,s.jsxs)("div",{children:[(0,s.jsx)("h3",{className:"font-medium text-gray-900 mb-3",children:"Payment Methods:"}),(0,s.jsx)("div",{className:"flex flex-wrap gap-2",children:c.paymentMethods.map((e,t)=>(0,s.jsx)("span",{className:"bg-gray-100 px-3 py-1 rounded-full text-sm",children:e},t))})]})]})]}),(0,s.jsxs)("section",{ref:e.success,className:"mb-16 bg-white p-8 rounded-xl shadow-sm border border-gray-100",children:[(0,s.jsxs)("h2",{className:"text-2xl font-bold text-gray-900 mb-6 flex items-center",children:[(0,s.jsx)("span",{className:"bg-yellow-100 text-yellow-600 p-2 rounded-full mr-3",children:"\uD83D\uDE80"}),"Our Basic Steps Towards Success"]}),(0,s.jsx)("div",{className:"grid sm:grid-cols-2 gap-4",children:d.map((e,t)=>(0,s.jsxs)("div",{className:"flex items-start",children:[(0,s.jsx)("span",{className:"text-blue-500 mr-2",children:"▸"}),(0,s.jsx)("span",{children:e})]},t))})]}),(0,s.jsxs)("section",{ref:e.contact,className:"bg-blue-50 p-8 rounded-xl border border-blue-100",children:[(0,s.jsx)("h2",{className:"text-2xl font-bold text-gray-900 mb-4",children:"24/7 Support"}),(0,s.jsx)("p",{className:"text-gray-700 mb-6",children:u.supportText}),(0,s.jsxs)("div",{className:"grid md:grid-cols-2 gap-6",children:[(0,s.jsxs)("div",{children:[(0,s.jsx)("h3",{className:"font-medium text-gray-900 mb-3",children:"Contact Numbers"}),(0,s.jsx)("ul",{className:"space-y-2",children:u.numbers.map((e,t)=>(0,s.jsxs)("li",{className:"flex items-center",children:[(0,s.jsx)("span",{className:"text-blue-500 mr-2",children:"\uD83D\uDCDE"}),(0,s.jsxs)("span",{children:[e.label,": ",e.number]})]},t))})]}),(0,s.jsxs)("div",{className:"bg-white p-4 rounded-lg border border-gray-200",children:[(0,s.jsx)("h3",{className:"font-medium text-gray-900 mb-2",children:"Email Support"}),(0,s.jsx)("a",{href:`mailto:${u.email}`,className:"text-blue-600 hover:underline",children:u.email})]})]})]})]})})]})}},8680:(e,t,r)=>{"use strict";r.d(t,{A:()=>o});var s=r(687),i=r(3210),l=r(6208),n=r(5502),a=r(5346);l.os.registerPlugin(n.u,a.A);let o=({text:e,className:t="",delay:r=100,duration:o=.6,ease:c="power3.out",splitType:d="chars",from:u={opacity:0,y:40},to:m={opacity:1,y:0},threshold:p=.1,rootMargin:x="-100px",textAlign:f="center",onLetterAnimationComplete:h})=>{let v=(0,i.useRef)(null),g=(0,i.useRef)(!1);return(0,i.useEffect)(()=>{let e,t=v.current;if(!t||g.current)return;let s="lines"===d;s&&(t.style.position="relative");let i=new a.A(t,{type:d,absolute:s,linesClass:"split-line"});switch(d){case"lines":e=i.lines;break;case"words":e=i.words;break;case"words, chars":e=[...i.words,...i.chars];break;default:e=i.chars}e.forEach(e=>{e.style.willChange="transform, opacity"});let f=/^(-?\d+)px$/.exec(x),b=f?parseInt(f[1],10):0,y=b<0?`-=${Math.abs(b)}px`:`+=${b}px`,w=`top ${(1-p)*100}%${y}`,_=l.os.timeline({scrollTrigger:{trigger:t,start:w,toggleActions:"play none none none",once:!0},smoothChildTiming:!0,onComplete:()=>{g.current=!0,l.os.set(e,{...m,clearProps:"willChange",immediateRender:!0}),h?.()}});return _.set(e,{...u,immediateRender:!1,force3D:!0}),_.to(e,{...m,duration:o,ease:c,stagger:r/1e3,force3D:!0}),()=>{_.kill(),n.u.getAll().forEach(e=>e.kill()),l.os.killTweensOf(e),i.revert()}},[e,r,o,c,d,u,m,p,x,h,v]),(0,s.jsx)("p",{ref:v,className:`split-parent inline-block whitespace-normal ${t}`,style:{textAlign:f,wordWrap:"break-word",overflow:"visible",display:"inline-block",lineHeight:1.2,paddingBottom:"0.5em"},children:e})}},9121:e=>{"use strict";e.exports=require("next/dist/server/app-render/action-async-storage.external.js")},9294:e=>{"use strict";e.exports=require("next/dist/server/app-render/work-async-storage.external.js")}};var t=require("../../../webpack-runtime.js");t.C(e);var r=e=>t(t.s=e),s=t.X(0,[293,872,359],()=>r(1512));module.exports=s})();