"use client";

import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Phone, ChevronRight, ShieldCheck, Clock, Car, User2, User } from "lucide-react";
import { Button } from "@/components/ui/button";

// Register ScrollTrigger plugin
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function CallToAction() {
  const sectionRef = useRef(null);
  const phoneIconRef = useRef(null);
  const headingRef = useRef(null);
  const subtextRef = useRef(null);
  const numberRef = useRef(null);
  const buttonRef = useRef(null);
  const featuresRef = useRef([]);
  const overlayRef = useRef(null);

  useEffect(() => {
    // Only run on client side
    if (typeof window === "undefined") return;

    let ctx = gsap.context(() => {
      // Master timeline for coordinated animations
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          toggleActions: "play none none none",
          markers: false, // Set to true for debugging
        },
      });

      // Material overlay animation
      gsap.from(overlayRef.current, {
        scaleX: 0,
        transformOrigin: "left center",
        duration: 1.2,
        ease: "power3.inOut",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top bottom",
          end: "top 80%",
          scrub: 1,
        },
      });

      // Phone icon animation (kept as original)
      tl.from(phoneIconRef.current, {
        scale: 0,
        rotate: -180,
        duration: 0.6,
        ease: "back.out(1.7)",
      });

      // Refined text animations
      tl.from(
        headingRef.current,
        {
          y: 30,
          opacity: 0,
          duration: 0.8,
          ease: "expo.out",
        },
        "-=0.3"
      )
        .from(
          subtextRef.current,
          {
            y: 20,
            opacity: 0,
            duration: 0.5,
            ease: "circ.out",
          },
          "-=0.4"
        )
        .from(
          numberRef.current,
          {
            y: 20,
            opacity: 0,
            duration: 0.6,
            ease: "power2.out",
          },
          "-=0.3"
        )
        .from(
          buttonRef.current,
          {
            y: 20,
            opacity: 0,
            duration: 0.6,
            ease: "elastic.out(1, 0.5)",
          },
          "-=0.2"
        )
        .from(
          featuresRef.current,
          {
            y: 30,
            opacity: 0,
            duration: 0.6,
            stagger: 0.15,
            ease: "back.out(1.2)",
          },
          "-=0.3"
        );

      // Continuous subtle phone icon pulse
      const pulseTl = gsap.timeline({ repeat: -1, repeatDelay: 3 });
      pulseTl
        .to(phoneIconRef.current, {
          scale: 1.05,
          boxShadow: "0 0 12px rgba(239, 68, 68, 0.5)",
          duration: 1.2,
          ease: "sine.inOut",
        })
        .to(phoneIconRef.current, {
          scale: 1,
          boxShadow: "0 0 0 rgba(239, 68, 68, 0)",
          duration: 1.8,
          ease: "sine.inOut",
        });

      // Button hover effects
      if (buttonRef.current) {
        const buttonEnter = () => {
          gsap.to(buttonRef.current, {
            y: -2,
            boxShadow: "0 10px 25px -5px rgba(239, 68, 68, 0.4)",
            duration: 0.3,
          });
        };

        const buttonLeave = () => {
          gsap.to(buttonRef.current, {
            y: 0,
            boxShadow: "0 4px 15px -3px rgba(239, 68, 68, 0.2)",
            duration: 0.4,
          });
        };

        buttonRef.current.addEventListener("mouseenter", buttonEnter);
        buttonRef.current.addEventListener("mouseleave", buttonLeave);

        return () => {
          buttonRef.current?.removeEventListener("mouseenter", buttonEnter);
          buttonRef.current?.removeEventListener("mouseleave", buttonLeave);
        };
      }
    }, sectionRef); // scope selector

    return () => ctx.revert(); // cleanup
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative max-w-7xl mx-auto overflow-hidden bg-gradient-to-br from-gray-900 via-black to-gray-900 py-8 px-6 rounded-2xl border border-gray-800 shadow-xl"
    >
      {/* Material overlay animation */}
      <div
        ref={overlayRef}
        className="absolute inset-0 bg-gray-950 z-0 origin-left scale-x-0"
      />

      {/* Subtle texture */}
      <div className="absolute inset-0 opacity-[35%] bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgdmlld0JveD0iMCAwIDYwIDYwIj48cmVjdCB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIGZpbGw9IiMwMDAiLz48cGF0aCBkPSJNMCAwTDYwIDYwTTYwIDBMMCA2MCIgc3Ryb2tlPSIjMzMzIiBzdHJva2Utd2lkdGg9IjEiLz48L3N2Zz4=')]" />

      {/* Glow effects */}
      <div className="absolute -right-10 -top-10 w-40 h-40 rounded-full bg-red-500 opacity-0 blur-2xl"></div>
      <div className="absolute left-20 -bottom-10 w-96 h-56 rounded-full bg-red-500 opacity-30 blur-3xl"></div>

      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 items-center gap-10 relative z-10">
        {/* Left Content */}
        <div className="space-y-8">
          <div ref={headingRef} className="space-y-4">
            <h2 className="text-2xl md:text-xl font-bold text-white leading-snug">
              Experience Premium Mobility With{" "}
              <span className="text-red-500 md:text-2xl tracking-wider">
                ECRS
              </span>
            </h2>
            <p className="text-gray-300 text-base md:text-sm max-w-lg">
              Our executive car rental service provides unparalleled comfort and
              style for your journeys, with 24/7 dedicated support for all your
              mobility needs.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {[
              {
                icon: <ShieldCheck className="w-5 h-5" />,
                text: "Fully Insured",
              },
              {
                icon: <Clock className="w-5 h-5" />,
                text: "24/7 Availability",
              },
              { icon: <Car className="w-5 h-5" />, text: "Premium Fleet" },
              {
                icon: <User className="w-5 h-5" />,
                text: "Personal Driver Options",
              },
            ].map((feature, i) => (
              <div
                key={i}
                ref={(el) => (featuresRef.current[i] = el)}
                className="flex items-center space-x-2 p-3 bg-gray-800/50 rounded-lg border border-gray-700/50 backdrop-blur-sm"
              >
                {feature.icon && (
                  <span className="text-red-500">{feature.icon}</span>
                )}
                <span className="text-sm text-gray-200 font-medium">
                  {feature.text}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Right Call Section */}
        <div className="flex flex-col items-start lg:items-end space-y-6">
          <div className="flex flex-col items-center lg:items-end">
            <div
              ref={phoneIconRef}
              className="flex items-center justify-center w-14 h-14 rounded-full bg-gradient-to-br from-red-600 to-red-800 mb-4 shadow-lg shadow-red-500/20"
            >
              <Phone className="text-white" size={20} />
            </div>

            <p
              ref={subtextRef}
              className="text-xs tracking-widest text-gray-400 uppercase font-medium"
            >
              Immediate Assistance
            </p>

            <p
              ref={numberRef}
              className="text-2xl md:text-3xl font-bold text-white tracking-tight my-2"
            >
              020-6767 6060
            </p>

            <p className="text-gray-400 text-sm mb-4">
              Your personal mobility assistant available 24/7
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}