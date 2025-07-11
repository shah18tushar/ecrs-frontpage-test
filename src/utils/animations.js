import { useScroll, useTransform, useMotionValueEvent } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useLayoutEffect } from "react";

gsap.registerPlugin(ScrollTrigger);
/**
 * Hook to slide a component from the left on scroll.
 * @param offsetXRange Array of x translation values, e.g., [-100, 0]
 */
export const useGSAPSlideInLeft = (delay = 0, duration = 1) => {
  const ref = useRef(null);

  useLayoutEffect(() => {
    if (!ref.current) return;

    gsap.fromTo(
      ref.current,
      { x: -100, opacity: 0 },
      {
        x: 0,
        opacity: 1,
        duration,
        delay,
        ease: "power2.out",
        scrollTrigger: {
          trigger: ref.current,
          start: "top 80%",
        },
      }
    );
  }, [delay, duration]);

  return ref;
};

export const useGSAPSlideInRight = (delay = 0, duration = 1) => {
  const ref = useRef(null);

  useLayoutEffect(() => {
    if (!ref.current) return;

    gsap.fromTo(
      ref.current,
      { x: 100, opacity: 0 },
      {
        x: 0,
        opacity: 1,
        duration,
        delay,
        ease: "power2.out",
        scrollTrigger: {
          trigger: ref.current,
          start: "top 80%",
        },
      }
    );
  }, [delay, duration]);

  return ref;
};

export const useGSAPSlideInFromLeft = (delay = 0, duration = 1.5) => {
  const ref = useRef(null);

  useLayoutEffect(() => {
    if (!ref.current) return;

    gsap.fromTo(
      ref.current,
      { x: -200, opacity: 0 },
      {
        x: 0,
        opacity: 1,
        delay,
        duration,
        ease: "power2.out",
      }
    );
  }, [delay, duration]);

  return ref;
};

export const useGSAPFadeInUp = (delay = 0, duration = 1) => {
  const ref = useRef(null);

  useLayoutEffect(() => {
    if (!ref.current) return;

    gsap.fromTo(
      ref.current,
      { opacity: 0, y: 40 },
      {
        opacity: 1,
        y: 0,
        duration,
        delay,
        ease: "power2.out",
        scrollTrigger: {
          trigger: ref.current,
          start: "top 85%",
        },
      }
    );
  }, [delay, duration]);

  return ref;
};

export const useGSAPFadeIn = (delay = 0, duration = 1) => {
  const ref = useRef(null);

  useLayoutEffect(() => {
    if (!ref.current) return;

    gsap.fromTo(
      ref.current,
      { opacity: 0 },
      {
        opacity: 1,
        duration,
        delay,
        ease: "power2.out",
        scrollTrigger: {
          trigger: ref.current,
          start: "top 85%",
        },
      }
    );
  }, [delay, duration]);

  return ref;
};

export const useGSAPScaleIn = (delay = 0, duration = 0.8) => {
  const ref = useRef(null);

  useLayoutEffect(() => {
    if (!ref.current) return;

    gsap.fromTo(
      ref.current,
      { scale: 0.8, opacity: 0 },
      {
        scale: 1,
        opacity: 1,
        duration,
        delay,
        ease: "power2.out",
        scrollTrigger: {
          trigger: ref.current,
          start: "top 85%",
        },
      }
    );
  }, [delay, duration]);

  return ref;
};

// utils/animations.ts
export const useGSAPSlideDown = (ref, delay = 0, duration = 0.5) => {
  useLayoutEffect(() => {
    if (!ref.current) return;

    gsap.from(ref.current, {
      y: -100,
      opacity: 0,
      duration,
      delay,
      ease: "power2.out",
    });
  }, [ref, delay, duration]);
};

export const useGSAPParallaxSlideRight = (offset = 80, duration = 1) => {
  const ref = useRef(null);

  useLayoutEffect(() => {
    if (!ref.current) return;

    gsap.fromTo(
      ref.current,
      { x: offset, opacity: 0 },
      {
        x: 0,
        opacity: 1,
        duration,
        ease: "power2.out",
        scrollTrigger: {
          trigger: ref.current,
          start: "top 80%",
        },
      }
    );
  }, [offset, duration]);

  return ref;
};

export const useStaggerAnimation = (
  triggerRef,
  targetSelector,
  config = {}
) => {
  const containerRef = useRef(null);

  useLayoutEffect(() => {
    if (!containerRef.current || !triggerRef.current) return;

    const ctx = gsap.context(() => {
      gsap.from(containerRef.current.querySelectorAll(targetSelector), {
        y: config.y ?? 30,
        opacity: config.opacity ?? 0,
        stagger: config.stagger ?? 0.1,
        duration: config.duration ?? 0.5,
        ease: "power3.out",
        scrollTrigger: {
          trigger: triggerRef.current,
          start: "top 80%",
        },
      });
    }, triggerRef);

    return () => ctx.revert();
  }, []);

  return containerRef;
};
