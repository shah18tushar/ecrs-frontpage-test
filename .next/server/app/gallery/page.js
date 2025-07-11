(()=>{var e={};e.id=235,e.ids=[235],e.modules={478:(e,t,i)=>{"use strict";i.d(t,{A:()=>d});var r=i(687),o=i(3210),s=i(4184),l=i(6813),n=i(7827),a=i(5933),u=i(9040);let p=`
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
`,d=({color:e=[1,1,1],amplitude:t=1,distance:i=0,enableMouseInteraction:d=!1,...h})=>{let m=(0,o.useRef)(null),f=(0,o.useRef)();return(0,o.useEffect)(()=>{if(!m.current)return;let r=m.current,o=new s.A({alpha:!0}),h=o.gl;h.clearColor(0,0,0,0),h.enable(h.BLEND),h.blendFunc(h.SRC_ALPHA,h.ONE_MINUS_SRC_ALPHA),r.appendChild(h.canvas);let x=new l.l(h),g=new n.B(h,{vertex:p,fragment:c,uniforms:{iTime:{value:0},iResolution:{value:new a.Q(h.canvas.width,h.canvas.height,h.canvas.width/h.canvas.height)},uColor:{value:new a.Q(...e)},uAmplitude:{value:t},uDistance:{value:i},uMouse:{value:new Float32Array([.5,.5])}}}),v=new u.e(h,{geometry:x,program:g});function y(){let{clientWidth:e,clientHeight:t}=r;o.setSize(e,t),g.uniforms.iResolution.value.r=e,g.uniforms.iResolution.value.g=t,g.uniforms.iResolution.value.b=e/t}window.addEventListener("resize",y),y();let w=[.5,.5],_=[.5,.5];function b(e){let t=r.getBoundingClientRect();_=[(e.clientX-t.left)/t.width,1-(e.clientY-t.top)/t.height]}function P(){_=[.5,.5]}return d&&(r.addEventListener("mousemove",b),r.addEventListener("mouseleave",P)),f.current=requestAnimationFrame(function e(t){d?(w[0]+=.05*(_[0]-w[0]),w[1]+=.05*(_[1]-w[1]),g.uniforms.uMouse.value[0]=w[0],g.uniforms.uMouse.value[1]=w[1]):(g.uniforms.uMouse.value[0]=.5,g.uniforms.uMouse.value[1]=.5),g.uniforms.iTime.value=.001*t,o.render({scene:v}),f.current=requestAnimationFrame(e)}),()=>{f.current&&cancelAnimationFrame(f.current),window.removeEventListener("resize",y),d&&(r.removeEventListener("mousemove",b),r.removeEventListener("mouseleave",P)),r.contains(h.canvas)&&r.removeChild(h.canvas),h.getExtension("WEBGL_lose_context")?.loseContext()}},[e,t,i,d]),(0,r.jsx)("div",{ref:m,className:"w-full h-full relative",...h})}},846:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},928:(e,t,i)=>{Promise.resolve().then(i.bind(i,1206))},1200:(e,t,i)=>{Promise.resolve().then(i.bind(i,5915))},1206:(e,t,i)=>{"use strict";i.r(t),i.d(t,{default:()=>m});var r=i(687),o=i(3210),s=i(6208);let l=(e,t,i)=>{let[r,s]=(0,o.useState)(()=>i);return(0,o.useEffect)(()=>{},[e]),r},n=()=>{let e=(0,o.useRef)(null),[t,i]=(0,o.useState)({width:0,height:0});return(0,o.useLayoutEffect)(()=>{if(!e.current)return;let t=new ResizeObserver(([e])=>{let{width:t,height:r}=e.contentRect;i({width:t,height:r})});return t.observe(e.current),()=>t.disconnect()},[]),[e,t]},a=async e=>{await Promise.all(e.map(e=>new Promise(t=>{let i=new Image;i.src=e,i.onload=i.onerror=()=>t()})))},u=({items:e,ease:t="power3.out",duration:i=.6,stagger:u=.05,animateFrom:p="bottom",scaleOnHover:c=!0,hoverScale:d=.95,blurToFocus:h=!0,colorShiftOnHover:m=!1,className:f="",style:x={}})=>{let g=l(["(min-width:1500px)","(min-width:1000px)","(min-width:600px)","(min-width:400px)"],[5,4,3,2],1),[v,{width:y}]=n(),[w,_]=(0,o.useState)(!1),b=e=>{let t=v.current?.getBoundingClientRect();if(!t)return{x:e.x,y:e.y};let i=p;if("random"===p){let e=["top","bottom","left","right"];i=e[Math.floor(Math.random()*e.length)]}switch(i){case"top":return{x:e.x,y:-200};case"bottom":return{x:e.x,y:window.innerHeight+200};case"left":return{x:-200,y:e.y};case"right":return{x:window.innerWidth+200,y:e.y};case"center":return{x:t.width/2-e.w/2,y:t.height/2-e.h/2};default:return{x:e.x,y:e.y+100}}};(0,o.useEffect)(()=>{a(e.map(e=>e.img)).then(()=>_(!0))},[e]);let P=(0,o.useMemo)(()=>{if(!y)return[];let t=Array(g).fill(0),i=(y-(g-1)*16)/g;return e.map(e=>{let r=t.indexOf(Math.min(...t)),o=e.height/2,s=t[r];return t[r]+=o+16,{...e,x:r*(i+16),y:s,w:i,h:o}})},[g,e,y]),C=(0,o.useRef)(!1);(0,o.useLayoutEffect)(()=>{w&&(P.forEach((e,r)=>{let o=`[data-key="${e.id}"]`,l={x:e.x,y:e.y,width:e.w,height:e.h};if(C.current)s.os.to(o,{...l,duration:i,ease:t,overwrite:"auto"});else{let t=b(e);s.os.fromTo(o,{opacity:0,x:t.x,y:t.y,width:e.w,height:e.h,...h&&{filter:"blur(10px)"}},{opacity:1,...l,...h&&{filter:"blur(0px)"},duration:.8,ease:"power3.out",delay:r*u})}}),C.current=!0)},[P,w,u,p,h,i,t]);let j=(e,t)=>{if(c&&s.os.to(`[data-key="${e}"]`,{scale:d,duration:.3,ease:"power2.out"}),m){let e=t.querySelector(".color-overlay");e&&s.os.to(e,{opacity:.3,duration:.3})}},A=(e,t)=>{if(c&&s.os.to(`[data-key="${e}"]`,{scale:1,duration:.3,ease:"power2.out"}),m){let e=t.querySelector(".color-overlay");e&&s.os.to(e,{opacity:0,duration:.3})}},k=(0,o.useMemo)(()=>P.length?Math.max(...P.map(e=>e.y+e.h))+16:0,[P]);return(0,r.jsx)("div",{ref:v,className:`relative w-full ${f}`,style:{height:k,zIndex:1,isolation:"isolate",...x},children:P.map(e=>(0,r.jsx)("div",{"data-key":e.id,className:"absolute box-content cursor-pointer",style:{willChange:"transform, width, height, opacity",zIndex:1},onClick:()=>window.open(e.url,"_blank","noopener"),onMouseEnter:t=>j(e.id,t.currentTarget),onMouseLeave:t=>A(e.id,t.currentTarget),children:(0,r.jsx)("div",{className:"relative w-full h-full bg-cover bg-center rounded-[10px] shadow-[0px_10px_50px_-10px_rgba(0,0,0,0.2)] uppercase text-[10px] leading-[10px]",style:{backgroundImage:`url(${e.img})`},children:m&&(0,r.jsx)("div",{className:"color-overlay absolute inset-0 rounded-[10px] bg-gradient-to-tr from-pink-500/50 to-sky-500/50 opacity-0 pointer-events-none"})})},e.id))})},p=[{id:"1",img:"/car-1.jpg",url:"https://example.com/one",height:400},{id:"2",img:"https://picsum.photos/id/1011/600/750",url:"https://example.com/two",height:250},{id:"3",img:"https://picsum.photos/id/1020/600/800",url:"https://example.com/three",height:600},{id:"4",img:"https://picsum.photos/id/1041/600/700",url:"https://example.com/four",height:300},{id:"5",img:"https://picsum.photos/id/1050/600/400",url:"https://example.com/five",height:250},{id:"6",img:"https://picsum.photos/id/1062/600/900",url:"https://example.com/six",height:500},{id:"7",img:"https://picsum.photos/id/1074/600/600",url:"https://example.com/seven",height:320},{id:"8",img:"https://picsum.photos/id/1084/600/750",url:"https://example.com/eight",height:410},{id:"9",img:"https://picsum.photos/id/1099/600/680",url:"https://example.com/nine",height:290},{id:"10",img:"https://picsum.photos/id/110/600/500",url:"https://example.com/ten",height:275},{id:"11",img:"https://picsum.photos/id/111/600/650",url:"https://example.com/eleven",height:330},{id:"12",img:"https://picsum.photos/id/112/600/850",url:"https://example.com/twelve",height:480},{id:"13",img:"https://picsum.photos/id/113/600/550",url:"https://example.com/thirteen",height:300},{id:"14",img:"https://picsum.photos/id/114/600/950",url:"https://example.com/fourteen",height:570},{id:"15",img:"https://picsum.photos/id/115/600/720",url:"https://example.com/fifteen",height:360},{id:"16",img:"https://picsum.photos/id/116/600/480",url:"https://example.com/sixteen",height:220},{id:"17",img:"https://picsum.photos/id/117/600/610",url:"https://example.com/seventeen",height:350},{id:"18",img:"https://picsum.photos/id/118/600/530",url:"https://example.com/eighteen",height:275},{id:"19",img:"https://picsum.photos/id/119/600/570",url:"https://example.com/nineteen",height:290},{id:"20",img:"https://picsum.photos/id/120/600/800",url:"https://example.com/twenty",height:420},{id:"21",img:"https://picsum.photos/id/121/600/690",url:"https://example.com/twenty-one",height:350},{id:"22",img:"https://picsum.photos/id/122/600/700",url:"https://example.com/twenty-two",height:340},{id:"23",img:"https://picsum.photos/id/123/600/750",url:"https://example.com/twenty-three",height:360}];var c=i(8680),d=i(478),h=i(7102);let m=()=>{let e=(0,o.useRef)(null);return(0,h.xv)(0,.8,e),(0,r.jsxs)("div",{className:"text-black",children:[(0,r.jsxs)("section",{className:"relative w-full h-[240px] md:h-[360px] -mt-6 overflow-hidden flex items-center justify-center bg-white",children:[(0,r.jsx)("div",{className:"absolute inset-0 z-0 scale-[1.3] mt-28 translate-y-[-10%]",children:(0,r.jsx)(d.A,{amplitude:1,distance:0,enableMouseInteraction:!1})}),(0,r.jsxs)("div",{className:"relative z-10 text-center px-4",ref:e,children:[(0,r.jsx)(c.A,{text:"Story Told Through Visuals",className:"text-5xl md:text-3xl font-bold text-black",delay:80,duration:.6,ease:"power3.out",splitType:"chars",from:{opacity:0,y:30},to:{opacity:1,y:0},threshold:.1}),(0,r.jsx)("p",{className:"text-gray-600  max-w-2xl mx-auto text-lg",children:"Browse through our vibrant gallery of visuals and videos, each telling a unique story."})]})]}),(0,r.jsx)("section",{className:"px-4 md:px-8 lg:px-16 -mt-16",children:(0,r.jsx)(u,{items:p,ease:"power3.out",duration:.6,stagger:.05,animateFrom:"top",scaleOnHover:!0,hoverScale:.95,blurToFocus:!0,colorShiftOnHover:!1,className:"mb-20"})})]})}},1464:(e,t,i)=>{"use strict";i.r(t),i.d(t,{GlobalError:()=>l.a,__next_app__:()=>c,pages:()=>p,routeModule:()=>d,tree:()=>u});var r=i(5239),o=i(8088),s=i(8170),l=i.n(s),n=i(893),a={};for(let e in n)0>["default","tree","pages","GlobalError","__next_app__","routeModule"].indexOf(e)&&(a[e]=()=>n[e]);i.d(t,a);let u={children:["",{children:["gallery",{children:["__PAGE__",{},{page:[()=>Promise.resolve().then(i.bind(i,5915)),"D:\\Tushar\\ecrs-frontage-test\\src\\app\\gallery\\page.jsx"]}]},{}]},{layout:[()=>Promise.resolve().then(i.bind(i,5535)),"D:\\Tushar\\ecrs-frontage-test\\src\\app\\layout.js"],"not-found":[()=>Promise.resolve().then(i.t.bind(i,7398,23)),"next/dist/client/components/not-found-error"],forbidden:[()=>Promise.resolve().then(i.t.bind(i,9999,23)),"next/dist/client/components/forbidden-error"],unauthorized:[()=>Promise.resolve().then(i.t.bind(i,5284,23)),"next/dist/client/components/unauthorized-error"]}]}.children,p=["D:\\Tushar\\ecrs-frontage-test\\src\\app\\gallery\\page.jsx"],c={require:i,loadChunk:()=>Promise.resolve()},d=new r.AppPageRouteModule({definition:{kind:o.RouteKind.APP_PAGE,page:"/gallery/page",pathname:"/gallery",bundlePath:"",filename:"",appPaths:[]},userland:{loaderTree:u}})},3033:e=>{"use strict";e.exports=require("next/dist/server/app-render/work-unit-async-storage.external.js")},3295:e=>{"use strict";e.exports=require("next/dist/server/app-render/after-task-async-storage.external.js")},3873:e=>{"use strict";e.exports=require("path")},5915:(e,t,i)=>{"use strict";i.r(t),i.d(t,{default:()=>r});let r=(0,i(2907).registerClientReference)(function(){throw Error("Attempted to call the default export of \"D:\\\\Tushar\\\\ecrs-frontage-test\\\\src\\\\app\\\\gallery\\\\page.jsx\" from the server, but it's on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.")},"D:\\Tushar\\ecrs-frontage-test\\src\\app\\gallery\\page.jsx","default")},8680:(e,t,i)=>{"use strict";i.d(t,{A:()=>a});var r=i(687),o=i(3210),s=i(6208),l=i(5502),n=i(5346);s.os.registerPlugin(l.u,n.A);let a=({text:e,className:t="",delay:i=100,duration:a=.6,ease:u="power3.out",splitType:p="chars",from:c={opacity:0,y:40},to:d={opacity:1,y:0},threshold:h=.1,rootMargin:m="-100px",textAlign:f="center",onLetterAnimationComplete:x})=>{let g=(0,o.useRef)(null),v=(0,o.useRef)(!1);return(0,o.useEffect)(()=>{let e,t=g.current;if(!t||v.current)return;let r="lines"===p;r&&(t.style.position="relative");let o=new n.A(t,{type:p,absolute:r,linesClass:"split-line"});switch(p){case"lines":e=o.lines;break;case"words":e=o.words;break;case"words, chars":e=[...o.words,...o.chars];break;default:e=o.chars}e.forEach(e=>{e.style.willChange="transform, opacity"});let f=/^(-?\d+)px$/.exec(m),y=f?parseInt(f[1],10):0,w=y<0?`-=${Math.abs(y)}px`:`+=${y}px`,_=`top ${(1-h)*100}%${w}`,b=s.os.timeline({scrollTrigger:{trigger:t,start:_,toggleActions:"play none none none",once:!0},smoothChildTiming:!0,onComplete:()=>{v.current=!0,s.os.set(e,{...d,clearProps:"willChange",immediateRender:!0}),x?.()}});return b.set(e,{...c,immediateRender:!1,force3D:!0}),b.to(e,{...d,duration:a,ease:u,stagger:i/1e3,force3D:!0}),()=>{b.kill(),l.u.getAll().forEach(e=>e.kill()),s.os.killTweensOf(e),o.revert()}},[e,i,a,u,p,c,d,h,m,x,g]),(0,r.jsx)("p",{ref:g,className:`split-parent inline-block whitespace-normal ${t}`,style:{textAlign:f,wordWrap:"break-word",overflow:"visible",display:"inline-block",lineHeight:1.2,paddingBottom:"0.5em"},children:e})}},9121:e=>{"use strict";e.exports=require("next/dist/server/app-render/action-async-storage.external.js")},9294:e=>{"use strict";e.exports=require("next/dist/server/app-render/work-async-storage.external.js")}};var t=require("../../webpack-runtime.js");t.C(e);var i=e=>t(t.s=e),r=t.X(0,[293,872,359],()=>i(1464));module.exports=r})();