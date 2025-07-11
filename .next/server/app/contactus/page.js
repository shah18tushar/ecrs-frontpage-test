(()=>{var e={};e.id=297,e.ids=[297],e.modules={478:(e,t,r)=>{"use strict";r.d(t,{A:()=>p});var n=r(687),s=r(3210),o=r(4184),l=r(6813),a=r(7827),i=r(5933),u=r(9040);let c=`
attribute vec2 position;
attribute vec2 uv;
varying vec2 vUv;
void main() {
  vUv = uv;
  gl_Position = vec4(position, 0.0, 1.0);
}
`,d=`
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
`,p=({color:e=[1,1,1],amplitude:t=1,distance:r=0,enableMouseInteraction:p=!1,...m})=>{let f=(0,s.useRef)(null),h=(0,s.useRef)();return(0,s.useEffect)(()=>{if(!f.current)return;let n=f.current,s=new o.A({alpha:!0}),m=s.gl;m.clearColor(0,0,0,0),m.enable(m.BLEND),m.blendFunc(m.SRC_ALPHA,m.ONE_MINUS_SRC_ALPHA),n.appendChild(m.canvas);let x=new l.l(m),g=new a.B(m,{vertex:c,fragment:d,uniforms:{iTime:{value:0},iResolution:{value:new i.Q(m.canvas.width,m.canvas.height,m.canvas.width/m.canvas.height)},uColor:{value:new i.Q(...e)},uAmplitude:{value:t},uDistance:{value:r},uMouse:{value:new Float32Array([.5,.5])}}}),v=new u.e(m,{geometry:x,program:g});function y(){let{clientWidth:e,clientHeight:t}=n;s.setSize(e,t),g.uniforms.iResolution.value.r=e,g.uniforms.iResolution.value.g=t,g.uniforms.iResolution.value.b=e/t}window.addEventListener("resize",y),y();let b=[.5,.5],_=[.5,.5];function P(e){let t=n.getBoundingClientRect();_=[(e.clientX-t.left)/t.width,1-(e.clientY-t.top)/t.height]}function w(){_=[.5,.5]}return p&&(n.addEventListener("mousemove",P),n.addEventListener("mouseleave",w)),h.current=requestAnimationFrame(function e(t){p?(b[0]+=.05*(_[0]-b[0]),b[1]+=.05*(_[1]-b[1]),g.uniforms.uMouse.value[0]=b[0],g.uniforms.uMouse.value[1]=b[1]):(g.uniforms.uMouse.value[0]=.5,g.uniforms.uMouse.value[1]=.5),g.uniforms.iTime.value=.001*t,s.render({scene:v}),h.current=requestAnimationFrame(e)}),()=>{h.current&&cancelAnimationFrame(h.current),window.removeEventListener("resize",y),p&&(n.removeEventListener("mousemove",P),n.removeEventListener("mouseleave",w)),n.contains(m.canvas)&&n.removeChild(m.canvas),m.getExtension("WEBGL_lose_context")?.loseContext()}},[e,t,r,p]),(0,n.jsx)("div",{ref:f,className:"w-full h-full relative",...m})}},846:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},1346:(e,t,r)=>{Promise.resolve().then(r.bind(r,8326))},1594:(e,t,r)=>{Promise.resolve().then(r.bind(r,7105))},1968:(e,t)=>{"use strict";function r(e){return e.split("/").map(e=>encodeURIComponent(e)).join("/")}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"encodeURIPath",{enumerable:!0,get:function(){return r}})},3033:e=>{"use strict";e.exports=require("next/dist/server/app-render/work-unit-async-storage.external.js")},3295:e=>{"use strict";e.exports=require("next/dist/server/app-render/after-task-async-storage.external.js")},3873:e=>{"use strict";e.exports=require("path")},4031:(e,t,r)=>{"use strict";var n=r(4452);function s(){}function o(){}o.resetWarningCache=s,e.exports=function(){function e(e,t,r,s,o,l){if(l!==n){var a=Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw a.name="Invariant Violation",a}}function t(){return e}e.isRequired=e;var r={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:o,resetWarningCache:s};return r.PropTypes=r,r}},4452:e=>{"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},4777:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"PreloadChunks",{enumerable:!0,get:function(){return a}});let n=r(687),s=r(1215),o=r(9294),l=r(1968);function a(e){let{moduleIds:t}=e,r=o.workAsyncStorage.getStore();if(void 0===r)return null;let a=[];if(r.reactLoadableManifest&&t){let e=r.reactLoadableManifest;for(let r of t){if(!e[r])continue;let t=e[r].files;a.push(...t)}}return 0===a.length?null:(0,n.jsx)(n.Fragment,{children:a.map(e=>{let t=r.assetPrefix+"/_next/"+(0,l.encodeURIPath)(e);return e.endsWith(".css")?(0,n.jsx)("link",{precedence:"dynamic",href:t,rel:"stylesheet",as:"style"},e):((0,s.preload)(t,{as:"script",fetchPriority:"low"}),null)})})}},4963:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return u}});let n=r(687),s=r(3210),o=r(6780),l=r(4777);function a(e){return{default:e&&"default"in e?e.default:e}}let i={loader:()=>Promise.resolve(a(()=>null)),loading:null,ssr:!0},u=function(e){let t={...i,...e},r=(0,s.lazy)(()=>t.loader().then(a)),u=t.loading;function c(e){let a=u?(0,n.jsx)(u,{isLoading:!0,pastDelay:!0,error:null}):null,i=!t.ssr||!!t.loading,c=i?s.Suspense:s.Fragment,d=t.ssr?(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(l.PreloadChunks,{moduleIds:t.modules}),(0,n.jsx)(r,{...e})]}):(0,n.jsx)(o.BailoutToCSR,{reason:"next/dynamic",children:(0,n.jsx)(r,{...e})});return(0,n.jsx)(c,{...i?{fallback:a}:{},children:d})}return c.displayName="LoadableComponent",c}},6180:(e,t,r)=>{"use strict";r.r(t),r.d(t,{GlobalError:()=>l.a,__next_app__:()=>d,pages:()=>c,routeModule:()=>p,tree:()=>u});var n=r(5239),s=r(8088),o=r(8170),l=r.n(o),a=r(893),i={};for(let e in a)0>["default","tree","pages","GlobalError","__next_app__","routeModule"].indexOf(e)&&(i[e]=()=>a[e]);r.d(t,i);let u={children:["",{children:["contactus",{children:["__PAGE__",{},{page:[()=>Promise.resolve().then(r.bind(r,7105)),"D:\\Tushar\\ecrs-frontage-test\\src\\app\\contactus\\page.jsx"]}]},{}]},{layout:[()=>Promise.resolve().then(r.bind(r,5535)),"D:\\Tushar\\ecrs-frontage-test\\src\\app\\layout.js"],"not-found":[()=>Promise.resolve().then(r.t.bind(r,7398,23)),"next/dist/client/components/not-found-error"],forbidden:[()=>Promise.resolve().then(r.t.bind(r,9999,23)),"next/dist/client/components/forbidden-error"],unauthorized:[()=>Promise.resolve().then(r.t.bind(r,5284,23)),"next/dist/client/components/unauthorized-error"]}]}.children,c=["D:\\Tushar\\ecrs-frontage-test\\src\\app\\contactus\\page.jsx"],d={require:r,loadChunk:()=>Promise.resolve()},p=new n.AppPageRouteModule({definition:{kind:s.RouteKind.APP_PAGE,page:"/contactus/page",pathname:"/contactus",bundlePath:"",filename:"",appPaths:[]},userland:{loaderTree:u}})},6780:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"BailoutToCSR",{enumerable:!0,get:function(){return s}});let n=r(1208);function s(e){let{reason:t,children:r}=e;throw Object.defineProperty(new n.BailoutToCSRError(t),"__NEXT_ERROR_CODE",{value:"E394",enumerable:!1,configurable:!0})}},7105:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>n});let n=(0,r(2907).registerClientReference)(function(){throw Error("Attempted to call the default export of \"D:\\\\Tushar\\\\ecrs-frontage-test\\\\src\\\\app\\\\contactus\\\\page.jsx\" from the server, but it's on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.")},"D:\\Tushar\\ecrs-frontage-test\\src\\app\\contactus\\page.jsx","default")},7955:(e,t,r)=>{e.exports=r(4031)()},8326:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>h});var n=r(687),s=r(3210),o=r(9587),l=r.n(o),a=r(8680),i=r(478),u=r(4780),c=r(7955),d=r.n(c);let p=({title:e,address:t,phones:r,emails:s,isSelected:o,onClick:l})=>(0,n.jsxs)("div",{onClick:l,className:(0,u.cn)("border rounded-xl p-4 shadow-sm cursor-pointer transition-all",o?"border-red-500 shadow-lg bg-red-50":"hover:shadow-md"),children:[(0,n.jsx)("h3",{className:"font-bold text-lg text-red-600",children:e}),(0,n.jsx)("p",{className:"mt-2 text-sm text-muted-foreground",children:t}),(0,n.jsxs)("div",{className:"mt-2 text-sm",children:[r.map((e,t)=>(0,n.jsxs)("p",{children:["\uD83D\uDCDE ",e]},t)),s.map((e,t)=>(0,n.jsxs)("p",{children:["✉️ ",e]},t))]})]});p.propTypes={title:d().string.isRequired,address:d().string.isRequired,phones:d().arrayOf(d().string).isRequired,emails:d().arrayOf(d().string).isRequired,isSelected:d().bool,onClick:d().func.isRequired};let m=[{title:"Corporate Office (Communication)",address:"Office No. 429 A/B & 430 A/B/C/D, 4th Floor, A Wing, Jai Ganesh Vision, Akurdi Pune. Pin code: 411035.",phones:["020-4691 9191","020-4691 9181","020-4691 9174"],emails:["sales@ecrspune.com","billing@ecrspune.com","accounts.mngr@ecrspune.com"],lat:18.646,lng:73.77},{title:"Branch Office - PCMC (Operations)",address:"Opp. Kunal Residency, Pawar Nagar, Near Aditya Birla Hospital, Chinchwad -Thergaon, Pune – 411 033.",phones:["020-67676060","+91 7507775790"],emails:["reservations@ecrspune.com"],lat:18.61,lng:73.762},{title:"Branch Office - Near Mumbai Airport",address:"1 Aerocity, Office No. 7022, 7th Floor , Sakinaka, Andheri East, Mumbai – 400072.",phones:["+91 7507774029","+91 7507774030"],emails:["booking.mumbai@ecrs.co.in"],lat:19.099,lng:72.887},{title:"Branch Office - Near Pune Airport",address:"Opp. SR No. 240 / A, Puru Housing Society, Five Nine Chowk, Pune – 411 032.",phones:["020-27401212","+91 9860444816"],emails:["booking@ecrspune.com"],lat:18.521,lng:73.855}],f=l()(async()=>{},{loadableGenerated:{modules:["app\\contactus\\page.jsx -> ./Map"]},ssr:!1});function h(){let[e,t]=(0,s.useState)(0),[r,o]=(0,s.useState)({name:"",phone:"",email:"",message:""}),l=e=>{o({...r,[e.target.name]:e.target.value})};return(0,n.jsxs)("div",{className:"text-black",children:[(0,n.jsxs)("section",{className:"relative w-full h-[350px] md:h-[270px] mt-20 overflow-hidden flex items-center justify-center bg-white",children:[(0,n.jsx)("div",{className:"absolute inset-0 z-0",children:(0,n.jsx)(i.A,{amplitude:1,distance:0,enableMouseInteraction:!0})}),(0,n.jsxs)("div",{className:"relative z-10 text-center px-4",children:[(0,n.jsx)(a.A,{text:"Contact Us",className:"text-5xl md:text-6xl font-bold text-gray-900",delay:80,duration:.6,ease:"power3.out",splitType:"chars",from:{opacity:0,y:30},to:{opacity:1,y:0},threshold:.1}),(0,n.jsx)("p",{className:"text-gray-600  max-w-xl mx-auto text-lg",children:"Reach out to us for inquiries, bookings, or support."})]})]}),(0,n.jsx)("section",{className:" px-4 md:px-8 lg:px-16 ",children:(0,n.jsxs)("div",{className:"max-w-screen-xl mx-auto",children:[(0,n.jsx)("div",{className:"grid gap-6 md:grid-cols-2 lg:grid-cols-4 mb-10",children:m.map((r,s)=>(0,n.jsx)(p,{title:r.title,address:r.address,phones:r.phones,emails:r.emails,isSelected:e===s,onClick:()=>t(s)},s))}),(0,n.jsx)("div",{className:"w-full h-[400px] rounded-lg overflow-hidden mb-12",children:(0,n.jsx)(f,{lat:m[e].lat,lng:m[e].lng})}),(0,n.jsxs)("div",{className:"bg-white border rounded-xl shadow-lg p-8 max-w-4xl mx-auto my-5",children:[(0,n.jsx)("h2",{className:"text-2xl md:text-3xl font-semibold mb-6 text-center",children:"Get in Touch"}),(0,n.jsxs)("form",{onSubmit:e=>{e.preventDefault(),console.log(r)},className:"grid grid-cols-1 md:grid-cols-2 gap-6",children:[(0,n.jsx)("input",{type:"text",name:"name",placeholder:"Full Name",value:r.name,onChange:l,required:!0,className:"w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm text-sm focus:outline-none focus:ring-2 focus:ring-red-500"}),(0,n.jsx)("input",{type:"tel",name:"phone",placeholder:"Phone Number",value:r.phone,onChange:l,required:!0,className:"w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm text-sm focus:outline-none focus:ring-2 focus:ring-red-500"}),(0,n.jsx)("input",{type:"email",name:"email",placeholder:"Email Address",value:r.email,onChange:l,required:!0,className:"w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm text-sm focus:outline-none focus:ring-2 focus:ring-red-500 md:col-span-2"}),(0,n.jsx)("textarea",{name:"message",placeholder:"Your Message",value:r.message,onChange:l,required:!0,rows:4,className:"w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm text-sm resize-none focus:outline-none focus:ring-2 focus:ring-red-500 md:col-span-2"}),(0,n.jsx)("div",{className:"md:col-span-2 flex justify-center",children:(0,n.jsx)("button",{type:"submit",className:"btn-shadow-red",children:"Send"})})]})]})]})})]})}},8680:(e,t,r)=>{"use strict";r.d(t,{A:()=>i});var n=r(687),s=r(3210),o=r(6208),l=r(5502),a=r(5346);o.os.registerPlugin(l.u,a.A);let i=({text:e,className:t="",delay:r=100,duration:i=.6,ease:u="power3.out",splitType:c="chars",from:d={opacity:0,y:40},to:p={opacity:1,y:0},threshold:m=.1,rootMargin:f="-100px",textAlign:h="center",onLetterAnimationComplete:x})=>{let g=(0,s.useRef)(null),v=(0,s.useRef)(!1);return(0,s.useEffect)(()=>{let e,t=g.current;if(!t||v.current)return;let n="lines"===c;n&&(t.style.position="relative");let s=new a.A(t,{type:c,absolute:n,linesClass:"split-line"});switch(c){case"lines":e=s.lines;break;case"words":e=s.words;break;case"words, chars":e=[...s.words,...s.chars];break;default:e=s.chars}e.forEach(e=>{e.style.willChange="transform, opacity"});let h=/^(-?\d+)px$/.exec(f),y=h?parseInt(h[1],10):0,b=y<0?`-=${Math.abs(y)}px`:`+=${y}px`,_=`top ${(1-m)*100}%${b}`,P=o.os.timeline({scrollTrigger:{trigger:t,start:_,toggleActions:"play none none none",once:!0},smoothChildTiming:!0,onComplete:()=>{v.current=!0,o.os.set(e,{...p,clearProps:"willChange",immediateRender:!0}),x?.()}});return P.set(e,{...d,immediateRender:!1,force3D:!0}),P.to(e,{...p,duration:i,ease:u,stagger:r/1e3,force3D:!0}),()=>{P.kill(),l.u.getAll().forEach(e=>e.kill()),o.os.killTweensOf(e),s.revert()}},[e,r,i,u,c,d,p,m,f,x,g]),(0,n.jsx)("p",{ref:g,className:`split-parent inline-block whitespace-normal ${t}`,style:{textAlign:h,wordWrap:"break-word",overflow:"visible",display:"inline-block",lineHeight:1.2,paddingBottom:"0.5em"},children:e})}},9121:e=>{"use strict";e.exports=require("next/dist/server/app-render/action-async-storage.external.js")},9294:e=>{"use strict";e.exports=require("next/dist/server/app-render/work-async-storage.external.js")},9587:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return s}});let n=r(4985)._(r(4963));function s(e,t){var r;let s={};"function"==typeof e&&(s.loader=e);let o={...s,...t};return(0,n.default)({...o,modules:null==(r=o.loadableGenerated)?void 0:r.modules})}("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)}};var t=require("../../webpack-runtime.js");t.C(e);var r=e=>t(t.s=e),n=t.X(0,[293,872,359],()=>r(6180));module.exports=n})();