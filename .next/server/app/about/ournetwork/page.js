(()=>{var e={};e.id=129,e.ids=[129],e.modules={478:(e,a,t)=>{"use strict";t.d(a,{A:()=>p});var r=t(687),i=t(3210),n=t(4184),o=t(6813),s=t(7827),l=t(5933),u=t(9040);let d=`
attribute vec2 position;
attribute vec2 uv;
varying vec2 vUv;
void main() {
  vUv = uv;
  gl_Position = vec4(position, 0.0, 1.0);
}
`,c=`
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
`,p=({color:e=[1,1,1],amplitude:a=1,distance:t=0,enableMouseInteraction:p=!1,...h})=>{let m=(0,i.useRef)(null),f=(0,i.useRef)();return(0,i.useEffect)(()=>{if(!m.current)return;let r=m.current,i=new n.A({alpha:!0}),h=i.gl;h.clearColor(0,0,0,0),h.enable(h.BLEND),h.blendFunc(h.SRC_ALPHA,h.ONE_MINUS_SRC_ALPHA),r.appendChild(h.canvas);let v=new o.l(h),g=new s.B(h,{vertex:d,fragment:c,uniforms:{iTime:{value:0},iResolution:{value:new l.Q(h.canvas.width,h.canvas.height,h.canvas.width/h.canvas.height)},uColor:{value:new l.Q(...e)},uAmplitude:{value:a},uDistance:{value:t},uMouse:{value:new Float32Array([.5,.5])}}}),x=new u.e(h,{geometry:v,program:g});function _(){let{clientWidth:e,clientHeight:a}=r;i.setSize(e,a),g.uniforms.iResolution.value.r=e,g.uniforms.iResolution.value.g=a,g.uniforms.iResolution.value.b=e/a}window.addEventListener("resize",_),_();let y=[.5,.5],b=[.5,.5];function P(e){let a=r.getBoundingClientRect();b=[(e.clientX-a.left)/a.width,1-(e.clientY-a.top)/a.height]}function w(){b=[.5,.5]}return p&&(r.addEventListener("mousemove",P),r.addEventListener("mouseleave",w)),f.current=requestAnimationFrame(function e(a){p?(y[0]+=.05*(b[0]-y[0]),y[1]+=.05*(b[1]-y[1]),g.uniforms.uMouse.value[0]=y[0],g.uniforms.uMouse.value[1]=y[1]):(g.uniforms.uMouse.value[0]=.5,g.uniforms.uMouse.value[1]=.5),g.uniforms.iTime.value=.001*a,i.render({scene:x}),f.current=requestAnimationFrame(e)}),()=>{f.current&&cancelAnimationFrame(f.current),window.removeEventListener("resize",_),p&&(r.removeEventListener("mousemove",P),r.removeEventListener("mouseleave",w)),r.contains(h.canvas)&&r.removeChild(h.canvas),h.getExtension("WEBGL_lose_context")?.loseContext()}},[e,a,t,p]),(0,r.jsx)("div",{ref:m,className:"w-full h-full relative",...h})}},846:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},1665:(e,a,t)=>{"use strict";t.r(a),t.d(a,{default:()=>r});let r=(0,t(2907).registerClientReference)(function(){throw Error("Attempted to call the default export of \"D:\\\\Tushar\\\\ecrs-frontage-test\\\\src\\\\app\\\\about\\\\ournetwork\\\\page.tsx\" from the server, but it's on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.")},"D:\\Tushar\\ecrs-frontage-test\\src\\app\\about\\ournetwork\\page.tsx","default")},3033:e=>{"use strict";e.exports=require("next/dist/server/app-render/work-unit-async-storage.external.js")},3133:(e,a,t)=>{Promise.resolve().then(t.bind(t,9694))},3295:e=>{"use strict";e.exports=require("next/dist/server/app-render/after-task-async-storage.external.js")},3873:e=>{"use strict";e.exports=require("path")},8596:(e,a,t)=>{"use strict";t.r(a),t.d(a,{GlobalError:()=>o.a,__next_app__:()=>c,pages:()=>d,routeModule:()=>p,tree:()=>u});var r=t(5239),i=t(8088),n=t(8170),o=t.n(n),s=t(893),l={};for(let e in s)0>["default","tree","pages","GlobalError","__next_app__","routeModule"].indexOf(e)&&(l[e]=()=>s[e]);t.d(a,l);let u={children:["",{children:["about",{children:["ournetwork",{children:["__PAGE__",{},{page:[()=>Promise.resolve().then(t.bind(t,1665)),"D:\\Tushar\\ecrs-frontage-test\\src\\app\\about\\ournetwork\\page.tsx"]}]},{}]},{}]},{layout:[()=>Promise.resolve().then(t.bind(t,5535)),"D:\\Tushar\\ecrs-frontage-test\\src\\app\\layout.js"],"not-found":[()=>Promise.resolve().then(t.t.bind(t,7398,23)),"next/dist/client/components/not-found-error"],forbidden:[()=>Promise.resolve().then(t.t.bind(t,9999,23)),"next/dist/client/components/forbidden-error"],unauthorized:[()=>Promise.resolve().then(t.t.bind(t,5284,23)),"next/dist/client/components/unauthorized-error"]}]}.children,d=["D:\\Tushar\\ecrs-frontage-test\\src\\app\\about\\ournetwork\\page.tsx"],c={require:t,loadChunk:()=>Promise.resolve()},p=new r.AppPageRouteModule({definition:{kind:i.RouteKind.APP_PAGE,page:"/about/ournetwork/page",pathname:"/about/ournetwork",bundlePath:"",filename:"",appPaths:[]},userland:{loaderTree:u}})},8680:(e,a,t)=>{"use strict";t.d(a,{A:()=>l});var r=t(687),i=t(3210),n=t(6208),o=t(5502),s=t(5346);n.os.registerPlugin(o.u,s.A);let l=({text:e,className:a="",delay:t=100,duration:l=.6,ease:u="power3.out",splitType:d="chars",from:c={opacity:0,y:40},to:p={opacity:1,y:0},threshold:h=.1,rootMargin:m="-100px",textAlign:f="center",onLetterAnimationComplete:v})=>{let g=(0,i.useRef)(null),x=(0,i.useRef)(!1);return(0,i.useEffect)(()=>{let e,a=g.current;if(!a||x.current)return;let r="lines"===d;r&&(a.style.position="relative");let i=new s.A(a,{type:d,absolute:r,linesClass:"split-line"});switch(d){case"lines":e=i.lines;break;case"words":e=i.words;break;case"words, chars":e=[...i.words,...i.chars];break;default:e=i.chars}e.forEach(e=>{e.style.willChange="transform, opacity"});let f=/^(-?\d+)px$/.exec(m),_=f?parseInt(f[1],10):0,y=_<0?`-=${Math.abs(_)}px`:`+=${_}px`,b=`top ${(1-h)*100}%${y}`,P=n.os.timeline({scrollTrigger:{trigger:a,start:b,toggleActions:"play none none none",once:!0},smoothChildTiming:!0,onComplete:()=>{x.current=!0,n.os.set(e,{...p,clearProps:"willChange",immediateRender:!0}),v?.()}});return P.set(e,{...c,immediateRender:!1,force3D:!0}),P.to(e,{...p,duration:l,ease:u,stagger:t/1e3,force3D:!0}),()=>{P.kill(),o.u.getAll().forEach(e=>e.kill()),n.os.killTweensOf(e),i.revert()}},[e,t,l,u,d,c,p,h,m,v,g]),(0,r.jsx)("p",{ref:g,className:`split-parent inline-block whitespace-normal ${a}`,style:{textAlign:f,wordWrap:"break-word",overflow:"visible",display:"inline-block",lineHeight:1.2,paddingBottom:"0.5em"},children:e})}},9121:e=>{"use strict";e.exports=require("next/dist/server/app-render/action-async-storage.external.js")},9165:(e,a,t)=>{Promise.resolve().then(t.bind(t,1665))},9294:e=>{"use strict";e.exports=require("next/dist/server/app-render/work-async-storage.external.js")},9694:(e,a,t)=>{"use strict";t.r(a),t.d(a,{default:()=>s});var r=t(687);t(3210);let i=[{state:"Gujarat",cities:["Rajkot","Gandhidham","Jamnagar","Bhuj","Vadodara","Bhavnagar","Surat","Ahmedabad","Silvassa","Vapi","Sonmath"]},{state:"Assam",cities:["Silchar","Agartala","Johrat","Dibrugarh","Tezpur","Sivasagar","Guwahati"]},{state:"Chhattisgarh",cities:["Raipur","Bhilai","Bilaspur","Korba"]},{state:"Rajasthan",cities:["Bikaner","Chittodgarh","Hanumangarh","Jaisalmer","Ajmer","Gulabpura","Jodhpur","Kota","Jaipur","Udaipur"]},{state:"West Bengal",cities:["Siliguri","Kolkata"]},{state:"Odisha",cities:["Bhubaneswar"]},{state:"Andhra Pradesh",cities:["Rajahmundry","Kurnool","Vijayawada","Visakhapatnam"]},{state:"Tamil Nadu",cities:["Coimbatore","Chennai","Madurai","Trichy","Thanjavur","Pondicherry","Pudukkottai","Karaikudi","Theni","Tiruvannamalai","Thoothukudi","Ramanathapuram","Nagercoil","Tirunelveli","Cuddalore","Neyveli","Virudhachalam","Viluppuram","Kovilpatti","Sivakasi","Dindigul","Salem","Dharmapuri","Krishnagiri","Hosur","Kanchipuram","Karaikal","Tiruchengode","Udumalaipettai","Pollachi","Tiruppur","Chidambaram","Erode","Karur","Namakkal","Vellore","Rameswaram","Velankanni","Kodaikanal","Ooty","Palani","Tiruchirappalli"]},{state:"Telangana",cities:["Hyderabad","Visakhapatnam","Guntur","Nellore","Kurnool","Kakinada","Pudukkottai","Karaikudi","Theni"]},{state:"Kerala",cities:["Kochi","Thiruvananthapuram"]},{state:"Uttarakhand",cities:["Dehradun"]},{state:"Maharashtra",cities:["Nagpur","Ahmednagar","Mumbai","Aurangabad","Nashik","Vapi","Latur","Nanded","Sangli","Amravati","Dhule","Jalgaon","Kolhapur","Solapur","Baramati","Jalna"]},{state:"Uttar Pradesh",cities:["Kanpur","Lucknow","Ghaziabad","Agra","Noida","Aligarh","Azamgarh","Bareilly","Gorakhpur","Hardoi","Jaunpur","Moradabad","Muzaffarnagar","Prayagraj","Sitapur","Varanasi","Sultanpur","Unnao"]},{state:"Jharkhand",cities:["Jamshedpur","Ranchi","Dhanbad","Bokaro"]},{state:"Karnataka",cities:["Bangalore","Hubli","Dharwad","Mysore","Gulbarga","Mangalore","Belgaum","Davanagere","Bellary","Bijapur","Shimoga"]},{state:"Punjab",cities:["Bathinda","Amritsar","Chandigarh","Jalandhar","Patiala","Ludhiana","Mohali","Firozpur","Batala","Pathankot","Moga"]},{state:"Delhi",cities:["Delhi"]},{state:"Haryana",cities:["Faridabad","Gurugram","Chandigarh","Sonipat","Panipath","Ambala"]},{state:"Bihar",cities:["Patna"]}];var n=t(8680),o=t(478);let s=()=>(0,r.jsxs)("div",{className:"text-black",children:[(0,r.jsxs)("section",{className:"relative w-full h-[350px] md:h-[370px] mt-20 overflow-hidden flex items-center justify-center bg-white",children:[(0,r.jsx)("div",{className:"absolute inset-0 z-0",children:(0,r.jsx)(o.A,{amplitude:1,distance:0,enableMouseInteraction:!0})}),(0,r.jsxs)("div",{className:"relative z-10 text-center px-4",children:[(0,r.jsx)(n.A,{text:"Our Network",className:"text-5xl md:text-6xl font-bold text-gray-900",delay:80,duration:.6,ease:"power3.out",splitType:"chars",from:{opacity:0,y:30},to:{opacity:1,y:0},threshold:.1,onLetterAnimationComplete:void 0}),(0,r.jsx)("p",{className:"text-gray-600 mt-4 max-w-xl mx-auto text-lg",children:"Explore the extensive reach of ECRS across India – 180+ cities and growing."})]})]}),(0,r.jsx)("section",{className:" px-6 md:px-16 lg:px-24 max-w-7xl mx-auto",children:(0,r.jsx)("div",{className:"grid md:grid-cols-2 lg:grid-cols-3 gap-10",children:i.map((e,a)=>(0,r.jsxs)("div",{className:"bg-white rounded-xl shadow border border-gray-200 p-6 hover:shadow-md transition",children:[(0,r.jsx)("h3",{className:"text-xl font-semibold text-red-600 mb-3",children:e.state}),(0,r.jsx)("ul",{className:"list-disc list-inside space-y-1 text-gray-700",children:e.cities.map((e,a)=>(0,r.jsx)("li",{children:e},a))})]},a))})})]})}};var a=require("../../../webpack-runtime.js");a.C(e);var t=e=>a(a.s=e),r=a.X(0,[293,872,359],()=>t(8596));module.exports=r})();