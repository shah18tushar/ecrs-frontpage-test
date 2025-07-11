(()=>{var e={};e.id=106,e.ids=[106],e.modules={478:(e,s,t)=>{"use strict";t.d(s,{A:()=>p});var i=t(687),a=t(3210),r=t(4184),o=t(6813),l=t(7827),n=t(5933),c=t(9040);let d=`
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
`,p=({color:e=[1,1,1],amplitude:s=1,distance:t=0,enableMouseInteraction:p=!1,...m})=>{let h=(0,a.useRef)(null),f=(0,a.useRef)();return(0,a.useEffect)(()=>{if(!h.current)return;let i=h.current,a=new r.A({alpha:!0}),m=a.gl;m.clearColor(0,0,0,0),m.enable(m.BLEND),m.blendFunc(m.SRC_ALPHA,m.ONE_MINUS_SRC_ALPHA),i.appendChild(m.canvas);let x=new o.l(m),g=new l.B(m,{vertex:d,fragment:u,uniforms:{iTime:{value:0},iResolution:{value:new n.Q(m.canvas.width,m.canvas.height,m.canvas.width/m.canvas.height)},uColor:{value:new n.Q(...e)},uAmplitude:{value:s},uDistance:{value:t},uMouse:{value:new Float32Array([.5,.5])}}}),v=new c.e(m,{geometry:x,program:g});function y(){let{clientWidth:e,clientHeight:s}=i;a.setSize(e,s),g.uniforms.iResolution.value.r=e,g.uniforms.iResolution.value.g=s,g.uniforms.iResolution.value.b=e/s}window.addEventListener("resize",y),y();let b=[.5,.5],w=[.5,.5];function j(e){let s=i.getBoundingClientRect();w=[(e.clientX-s.left)/s.width,1-(e.clientY-s.top)/s.height]}function P(){w=[.5,.5]}return p&&(i.addEventListener("mousemove",j),i.addEventListener("mouseleave",P)),f.current=requestAnimationFrame(function e(s){p?(b[0]+=.05*(w[0]-b[0]),b[1]+=.05*(w[1]-b[1]),g.uniforms.uMouse.value[0]=b[0],g.uniforms.uMouse.value[1]=b[1]):(g.uniforms.uMouse.value[0]=.5,g.uniforms.uMouse.value[1]=.5),g.uniforms.iTime.value=.001*s,a.render({scene:v}),f.current=requestAnimationFrame(e)}),()=>{f.current&&cancelAnimationFrame(f.current),window.removeEventListener("resize",y),p&&(i.removeEventListener("mousemove",j),i.removeEventListener("mouseleave",P)),i.contains(m.canvas)&&i.removeChild(m.canvas),m.getExtension("WEBGL_lose_context")?.loseContext()}},[e,s,t,p]),(0,i.jsx)("div",{ref:h,className:"w-full h-full relative",...m})}},589:(e,s,t)=>{"use strict";t.d(s,{p:()=>i});let i={sedan:[{id:1,name:"Swift Dzire",rating:4.8,reviews:124,price:2499,hourlyPrice:999,images:["https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2?w=600&h=400&fit=crop","https://images.unsplash.com/photo-1494976388531-d1058494cdd8?w=600&h=400&fit=crop","https://images.unsplash.com/photo-1571607388263-1044f9ea01dd?w=600&h=400&fit=crop"],specifications:{body:"Sedan",seating:"4+1 seats",doors:"4 doors",engine:"1248 cc",transmission:"Manual & Auto",fuelType:"Petrol & CNG",ac:"AC & Non-AC"},features:["4 Hrs / 40 Kms included","8 Hrs / 80 Kms included","Pune airport pickup/drop","Mumbai airport pickup/drop","Outstation available"]},{id:2,name:"Honda City",rating:4.7,reviews:89,price:2799,hourlyPrice:1199,images:["https://images.unsplash.com/photo-1580273916550-e323be2ae537?w=600&h=400&fit=crop","https://images.unsplash.com/photo-1494976388531-d1058494cdd8?w=600&h=400&fit=crop"],specifications:{body:"Sedan",seating:"4+1 seats",doors:"4 doors",engine:"1498 cc",transmission:"Manual & CVT",fuelType:"Petrol",ac:"AC"},features:["4 Hrs / 40 Kms included","8 Hrs / 80 Kms included","Airport pickup/drop","Premium interiors","Outstation available"]}],muv:[{id:3,name:"Innova Crysta",rating:4.9,reviews:156,price:3999,hourlyPrice:1699,images:["https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?w=600&h=400&fit=crop","https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&h=400&fit=crop"],specifications:{body:"MUV",seating:"6+1 seats",doors:"4 doors",engine:"2393 cc",transmission:"Manual & Automatic",fuelType:"Diesel",ac:"AC"},features:["4 Hrs / 40 Kms included","8 Hrs / 80 Kms included","Airport pickup/drop","Spacious interiors","Long distance comfort"]},{id:4,name:"Ertiga",rating:4.6,reviews:92,price:3299,hourlyPrice:1399,images:["https://images.unsplash.com/photo-1493238792000-8113da705763?w=600&h=400&fit=crop","https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&h=400&fit=crop"],specifications:{body:"MUV",seating:"6+1 seats",doors:"4 doors",engine:"1462 cc",transmission:"Manual & Auto",fuelType:"Petrol & CNG",ac:"AC"},features:["4 Hrs / 40 Kms included","Family friendly","Airport pickup/drop","Fuel efficient","Outstation available"]}],bus:[{id:5,name:"Tempo Traveller",rating:4.5,reviews:78,price:5999,hourlyPrice:2499,images:["https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?w=600&h=400&fit=crop","https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=600&h=400&fit=crop"],specifications:{body:"Bus",seating:"12+1 seats",doors:"2 doors",engine:"2596 cc",transmission:"Manual",fuelType:"Diesel",ac:"AC"},features:["Group travel ready","Luggage space","Airport pickup/drop","Interstate travel","Professional driver"]}],luxury:[{id:6,name:"BMW 3 Series",rating:4.9,reviews:45,price:8999,hourlyPrice:3999,images:["https://images.unsplash.com/photo-1555215695-3004980ad54e?w=600&h=400&fit=crop","https://images.unsplash.com/photo-1563720223185-11003d516935?w=600&h=400&fit=crop"],specifications:{body:"Luxury Sedan",seating:"4+1 seats",doors:"4 doors",engine:"1998 cc",transmission:"Automatic",fuelType:"Petrol",ac:"Climate Control"},features:["Premium luxury experience","Professional chauffeur","Airport VIP service","Corporate events","Wedding specials"]}],premium:[{id:7,name:"Mercedes E-Class",rating:5,reviews:32,price:12999,hourlyPrice:5999,images:["https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?w=600&h=400&fit=crop","https://images.unsplash.com/photo-1563720223185-11003d516935?w=600&h=400&fit=crop"],specifications:{body:"Premium Sedan",seating:"4+1 seats",doors:"4 doors",engine:"1991 cc",transmission:"Automatic",fuelType:"Petrol",ac:"Climate Control"},features:["Ultra-premium experience","Executive chauffeur","VIP airport service","Corporate meetings","Special occasions"]}],"e-vehicle":[{id:8,name:"Nexon EV",rating:4.4,reviews:67,price:3499,hourlyPrice:1499,images:["https://images.unsplash.com/photo-1593941707882-a5bac6861d75?w=600&h=400&fit=crop","https://images.unsplash.com/photo-1571607388263-1044f9ea01dd?w=600&h=400&fit=crop"],specifications:{body:"Electric SUV",seating:"4+1 seats",doors:"4 doors",engine:"Electric Motor",transmission:"Automatic",fuelType:"Electric",ac:"AC"},features:["Zero emissions","Silent operation","Fast charging capable","Eco-friendly travel","Modern tech features"]}]}},647:(e,s,t)=>{Promise.resolve().then(t.bind(t,4698))},814:(e,s,t)=>{"use strict";t.r(s),t.d(s,{GlobalError:()=>o.a,__next_app__:()=>u,pages:()=>d,routeModule:()=>p,tree:()=>c});var i=t(5239),a=t(8088),r=t(8170),o=t.n(r),l=t(893),n={};for(let e in l)0>["default","tree","pages","GlobalError","__next_app__","routeModule"].indexOf(e)&&(n[e]=()=>l[e]);t.d(s,n);let c={children:["",{children:["rides",{children:["__PAGE__",{},{page:[()=>Promise.resolve().then(t.bind(t,4698)),"D:\\Tushar\\ecrs-frontage-test\\src\\app\\rides\\page.jsx"]}]},{}]},{layout:[()=>Promise.resolve().then(t.bind(t,5535)),"D:\\Tushar\\ecrs-frontage-test\\src\\app\\layout.js"],"not-found":[()=>Promise.resolve().then(t.t.bind(t,7398,23)),"next/dist/client/components/not-found-error"],forbidden:[()=>Promise.resolve().then(t.t.bind(t,9999,23)),"next/dist/client/components/forbidden-error"],unauthorized:[()=>Promise.resolve().then(t.t.bind(t,5284,23)),"next/dist/client/components/unauthorized-error"]}]}.children,d=["D:\\Tushar\\ecrs-frontage-test\\src\\app\\rides\\page.jsx"],u={require:t,loadChunk:()=>Promise.resolve()},p=new i.AppPageRouteModule({definition:{kind:a.RouteKind.APP_PAGE,page:"/rides/page",pathname:"/rides",bundlePath:"",filename:"",appPaths:[]},userland:{loaderTree:c}})},846:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},3033:e=>{"use strict";e.exports=require("next/dist/server/app-render/work-unit-async-storage.external.js")},3295:e=>{"use strict";e.exports=require("next/dist/server/app-render/after-task-async-storage.external.js")},3873:e=>{"use strict";e.exports=require("path")},3916:(e,s,t)=>{"use strict";t.r(s),t.d(s,{default:()=>v});var i=t(687),a=t(3210),r=t(4478),o=t(1312),l=t(4398),n=t(5583),c=t(589);let d=(0,t(2688).A)("heart",[["path",{d:"M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z",key:"c3ymky"}]]);var u=t(4027),p=t(4338),m=t(5336);let h=({car:e})=>{let[s,t]=(0,a.useState)(0),[l,c]=(0,a.useState)(!1);return(0,i.jsxs)("div",{className:"bg-white border-2 border-gray-100 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 w-full",children:[(0,i.jsx)("div",{className:"bg-gradient-to-r from-black to-red-800 px-6 py-4 rounded-t-2xl",children:(0,i.jsxs)("div",{className:"flex justify-between items-start",children:[(0,i.jsx)("div",{children:(0,i.jsx)("h3",{className:"text-xl font-bold text-white mb-1",children:e.name})}),(0,i.jsx)("button",{onClick:()=>c(!l),className:"p-2 bg-white/20 rounded-full hover:bg-white/30 transition-colors",children:(0,i.jsx)(d,{size:18,className:`${l?"fill-red-400 text-red-400":"text-white"}`})})]})}),(0,i.jsxs)("div",{className:"p-6",children:[(0,i.jsxs)("div",{className:"mb-6",children:[(0,i.jsxs)("div",{className:"relative",children:[(0,i.jsx)("img",{src:e.images[s],alt:e.name,className:"w-full h-56 object-cover rounded-xl"}),(0,i.jsx)("div",{className:"absolute top-3 right-3 bg-red-600 text-white px-2 py-1 rounded-full text-xs font-semibold",children:"Available"})]}),e.images.length>1&&(0,i.jsx)("div",{className:"flex gap-2 mt-3 justify-center",children:e.images.map((e,a)=>(0,i.jsx)("button",{onClick:()=>t(a),className:`w-12 h-10 rounded-lg overflow-hidden border-2 transition-all ${s===a?"border-red-600 scale-105":"border-gray-200 hover:border-gray-300"}`,children:(0,i.jsx)("img",{src:e,alt:`View ${a+1}`,className:"w-full h-full object-cover"})},a))})]}),(0,i.jsxs)("div",{className:"mb-6",children:[(0,i.jsxs)("h4",{className:"font-bold text-gray-800 mb-3 flex items-center gap-2",children:[(0,i.jsx)(u.A,{className:"text-red-600",size:16}),"Specifications"]}),(0,i.jsxs)("div",{className:"grid grid-cols-2 gap-2 text-sm",children:[(0,i.jsxs)("div",{className:"flex items-center gap-2 p-2 bg-gray-50 rounded-lg",children:[(0,i.jsx)(r.A,{className:"text-red-600",size:14}),(0,i.jsx)("span",{className:"text-gray-600",children:"Body:"}),(0,i.jsx)("span",{className:"font-medium",children:e.specifications.body})]}),(0,i.jsxs)("div",{className:"flex items-center gap-2 p-2 bg-gray-50 rounded-lg",children:[(0,i.jsx)(o.A,{className:"text-red-600",size:14}),(0,i.jsx)("span",{className:"text-gray-600",children:"Seats:"}),(0,i.jsx)("span",{className:"font-medium",children:e.specifications.seating})]}),(0,i.jsxs)("div",{className:"flex items-center gap-2 p-2 bg-gray-50 rounded-lg",children:[(0,i.jsx)(n.A,{className:"text-red-600",size:14}),(0,i.jsx)("span",{className:"text-gray-600",children:"Engine:"}),(0,i.jsx)("span",{className:"font-medium",children:e.specifications.engine})]}),(0,i.jsxs)("div",{className:"flex items-center gap-2 p-2 bg-gray-50 rounded-lg",children:[(0,i.jsx)(p.A,{className:"text-red-600",size:14}),(0,i.jsx)("span",{className:"text-gray-600",children:"Fuel:"}),(0,i.jsx)("span",{className:"font-medium",children:e.specifications.fuelType})]})]})]}),(0,i.jsxs)("div",{className:"mb-6",children:[(0,i.jsxs)("h4",{className:"font-bold text-gray-800 mb-3 flex items-center gap-2",children:[(0,i.jsx)(m.A,{className:"text-red-600",size:16}),"Features"]}),(0,i.jsx)("div",{className:"space-y-2",children:e.features.slice(0,3).map((e,s)=>(0,i.jsxs)("div",{className:"flex items-center gap-2 text-sm",children:[(0,i.jsx)(m.A,{className:"text-red-600 flex-shrink-0",size:12}),(0,i.jsx)("span",{className:"text-gray-700",children:e})]},s))})]}),(0,i.jsxs)("div",{className:"bg-gradient-to-r from-black to-red-800 p-4 rounded-xl text-white",children:[(0,i.jsxs)("div",{className:"flex justify-between items-center mb-3",children:[(0,i.jsxs)("div",{children:[(0,i.jsx)("p",{className:"text-gray-300 text-xs",children:"Starting from"}),(0,i.jsxs)("p",{className:"text-xl font-bold",children:["₹",e.price.toLocaleString()]}),(0,i.jsx)("p",{className:"text-gray-300 text-xs",children:"per day"})]}),(0,i.jsxs)("div",{className:"text-right",children:[(0,i.jsx)("p",{className:"text-gray-300 text-xs",children:"4 hrs package"}),(0,i.jsxs)("p",{className:"text-lg font-semibold",children:["₹",e.hourlyPrice.toLocaleString()]})]})]}),(0,i.jsxs)("button",{className:"btn-shadow-red",children:[(0,i.jsx)(r.A,{size:16}),"Book Now"]})]})]})]})};var f=t(9533),x=t(478),g=t(8680);let v=()=>{let[e,s]=(0,a.useState)("sedan"),t=[{id:"sedan",name:"Sedan",icon:r.A},{id:"muv",name:"MUV",icon:o.A},{id:"bus",name:"Bus",icon:o.A},{id:"luxury",name:"Luxury",icon:l.A},{id:"premium",name:"Premium",icon:l.A},{id:"e-vehicle",name:"E-Vehicle",icon:n.A}];return(0,i.jsxs)("div",{className:"min-h-screen",children:[(0,i.jsxs)("section",{className:"relative w-full h-[40vh] mt-20 bg-white overflow-hidden flex items-center justify-center",children:[(0,i.jsx)("div",{className:"absolute inset-0 z-0",children:(0,i.jsx)(x.A,{amplitude:1,distance:0,enableMouseInteraction:!1})}),(0,i.jsxs)("div",{className:"relative z-10 text-center px-6",children:[(0,i.jsx)(g.A,{text:"Choose Your Ride",className:"text-3xl md:text-5xl font-bold mb-4",delay:100,duration:.6,ease:"power3.out",splitType:"chars",from:{opacity:0,y:40},to:{opacity:1,y:0},threshold:.1,rootMargin:"-100px"}),(0,i.jsx)("p",{className:"text-xl -mt-8 drop-shadow-md",children:"Select from our premium fleet of vehicles"})]})]}),(0,i.jsxs)("div",{className:"max-w-7xl mx-auto px-6 ",children:[(0,i.jsx)(f.t,{tabs:t,activeTab:e,setActiveTab:s}),(0,i.jsx)("div",{className:"grid grid-cols-1 lg:grid-cols-2 gap-8",children:c.p[e]?.map(e=>(0,i.jsx)(h,{car:e},e.id))}),(!c.p[e]||0===c.p[e].length)&&(0,i.jsxs)("div",{className:"text-center py-16",children:[(0,i.jsx)(r.A,{className:"mx-auto text-gray-400 mb-4",size:64}),(0,i.jsx)("h3",{className:"text-2xl font-bold text-gray-600 mb-2",children:"No vehicles available"}),(0,i.jsx)("p",{className:"text-gray-500",children:"Cars in this category will be available soon."})]})]})]})}},4027:(e,s,t)=>{"use strict";t.d(s,{A:()=>i});let i=(0,t(2688).A)("settings",[["path",{d:"M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z",key:"1qme2f"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]])},4338:(e,s,t)=>{"use strict";t.d(s,{A:()=>i});let i=(0,t(2688).A)("fuel",[["line",{x1:"3",x2:"15",y1:"22",y2:"22",key:"xegly4"}],["line",{x1:"4",x2:"14",y1:"9",y2:"9",key:"xcnuvu"}],["path",{d:"M14 22V4a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v18",key:"16j0yd"}],["path",{d:"M14 13h2a2 2 0 0 1 2 2v2a2 2 0 0 0 2 2a2 2 0 0 0 2-2V9.83a2 2 0 0 0-.59-1.42L18 5",key:"7cu91f"}]])},4398:(e,s,t)=>{"use strict";t.d(s,{A:()=>i});let i=(0,t(2688).A)("star",[["path",{d:"M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z",key:"r04s7s"}]])},4698:(e,s,t)=>{"use strict";t.r(s),t.d(s,{default:()=>i});let i=(0,t(2907).registerClientReference)(function(){throw Error("Attempted to call the default export of \"D:\\\\Tushar\\\\ecrs-frontage-test\\\\src\\\\app\\\\rides\\\\page.jsx\" from the server, but it's on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.")},"D:\\Tushar\\ecrs-frontage-test\\src\\app\\rides\\page.jsx","default")},5336:(e,s,t)=>{"use strict";t.d(s,{A:()=>i});let i=(0,t(2688).A)("circle-check-big",[["path",{d:"M21.801 10A10 10 0 1 1 17 3.335",key:"yps3ct"}],["path",{d:"m9 11 3 3L22 4",key:"1pflzl"}]])},5583:(e,s,t)=>{"use strict";t.d(s,{A:()=>i});let i=(0,t(2688).A)("zap",[["path",{d:"M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z",key:"1xq2db"}]])},8680:(e,s,t)=>{"use strict";t.d(s,{A:()=>n});var i=t(687),a=t(3210),r=t(6208),o=t(5502),l=t(5346);r.os.registerPlugin(o.u,l.A);let n=({text:e,className:s="",delay:t=100,duration:n=.6,ease:c="power3.out",splitType:d="chars",from:u={opacity:0,y:40},to:p={opacity:1,y:0},threshold:m=.1,rootMargin:h="-100px",textAlign:f="center",onLetterAnimationComplete:x})=>{let g=(0,a.useRef)(null),v=(0,a.useRef)(!1);return(0,a.useEffect)(()=>{let e,s=g.current;if(!s||v.current)return;let i="lines"===d;i&&(s.style.position="relative");let a=new l.A(s,{type:d,absolute:i,linesClass:"split-line"});switch(d){case"lines":e=a.lines;break;case"words":e=a.words;break;case"words, chars":e=[...a.words,...a.chars];break;default:e=a.chars}e.forEach(e=>{e.style.willChange="transform, opacity"});let f=/^(-?\d+)px$/.exec(h),y=f?parseInt(f[1],10):0,b=y<0?`-=${Math.abs(y)}px`:`+=${y}px`,w=`top ${(1-m)*100}%${b}`,j=r.os.timeline({scrollTrigger:{trigger:s,start:w,toggleActions:"play none none none",once:!0},smoothChildTiming:!0,onComplete:()=>{v.current=!0,r.os.set(e,{...p,clearProps:"willChange",immediateRender:!0}),x?.()}});return j.set(e,{...u,immediateRender:!1,force3D:!0}),j.to(e,{...p,duration:n,ease:c,stagger:t/1e3,force3D:!0}),()=>{j.kill(),o.u.getAll().forEach(e=>e.kill()),r.os.killTweensOf(e),a.revert()}},[e,t,n,c,d,u,p,m,h,x,g]),(0,i.jsx)("p",{ref:g,className:`split-parent inline-block whitespace-normal ${s}`,style:{textAlign:f,wordWrap:"break-word",overflow:"visible",display:"inline-block",lineHeight:1.2,paddingBottom:"0.5em"},children:e})}},9023:(e,s,t)=>{Promise.resolve().then(t.bind(t,3916))},9121:e=>{"use strict";e.exports=require("next/dist/server/app-render/action-async-storage.external.js")},9294:e=>{"use strict";e.exports=require("next/dist/server/app-render/work-async-storage.external.js")},9533:(e,s,t)=>{"use strict";t.d(s,{t:()=>a});var i=t(687);t(3210);let a=({tabs:e,activeTab:s,setActiveTab:t})=>(0,i.jsx)("div",{className:"flex flex-wrap justify-around gap-2 mb-8 bg-white p-2 rounded-2xl shadow-lg",children:e.map(e=>(0,i.jsxs)("button",{onClick:()=>t(e.id),className:`flex items-center gap-2 px-6 py-3 rounded-xl font-semibold transition-all cursor-pointer ${s===e.id?"bg-gradient-to-r from-black to-red-800 cursor-pointer text-white shadow-lg":"text-gray-600 hover:bg-gray-100"}`,children:[(0,i.jsx)(e.icon,{size:18}),e.name]},e.id))})}};var s=require("../../webpack-runtime.js");s.C(e);var t=e=>s(s.s=e),i=s.X(0,[293,872,359],()=>t(814));module.exports=i})();