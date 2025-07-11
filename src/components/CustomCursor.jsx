"use client";

import { useEffect, useRef, useState } from "react";
import { useCursor } from "./CursorProvider";

const getLetterSize = (char) => {
  if (!char.trim()) return 12; // for spaces
  if ("il.:,'".includes(char)) return 18; // thin letters
  if ("mwMW".includes(char)) return 36; // wide letters
  return 28; // normal letters
};

const getFontSize = (char) => {
  if (!char.trim()) return 0;
  if ("il.:,'".includes(char)) return 16;
  if ("mwMW".includes(char)) return 24;
  return 20;
};

const CustomCursor = () => {
  const cursorRef = useRef(null);
  const [cursorText, setCursorText] = useState("");
  const [active, setActive] = useState(false);
  const { magnifierActive } = useCursor();

  // 👇 Reset state when magnifier deactivates
  useEffect(() => {
    if (!magnifierActive) {
      setCursorText("");
      setActive(false);
    }
  }, [magnifierActive]);

  useEffect(() => {
    if (magnifierActive) return; // Don't attach listeners if magnifier is active

    const cursor = cursorRef.current;
    let mouseX = window.innerWidth / 2;
    let mouseY = window.innerHeight / 2;
    let currentX = mouseX;
    let currentY = mouseY;
    const speed = 0.12;

    const moveCursor = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    };

    const animate = () => {
      currentX += (mouseX - currentX) * speed;
      currentY += (mouseY - currentY) * speed;
      if (cursor) {
        const size = active ? getLetterSize(cursorText) : 12;
        cursor.style.transform = `translate3d(${currentX - size / 2}px, ${
          currentY - size / 2
        }px, 0)`;
      }
      requestAnimationFrame(animate);
    };

    const handleMouseOver = (e) => {
      const target = e.target.closest("[data-cursor-text]");
      if (target) {
        setCursorText(target.getAttribute("data-cursor-text"));
        setActive(true);
      }
    };
    const handleMouseOut = (e) => {
      if (e.target.closest("[data-cursor-text]")) {
        setCursorText("");
        setActive(false);
      }
    };

    document.addEventListener("mousemove", moveCursor);
    document.addEventListener("mouseover", handleMouseOver);
    document.addEventListener("mouseout", handleMouseOut);
    animate();

    return () => {
      document.removeEventListener("mousemove", moveCursor);
      document.removeEventListener("mouseover", handleMouseOver);
      document.removeEventListener("mouseout", handleMouseOut);
    };
  }, [active, cursorText, magnifierActive]);

  if (magnifierActive) return null;

  const size = active ? getLetterSize(cursorText) : 12;
  const fontSize = active ? getFontSize(cursorText) : 0;

  return (
    <div
      ref={cursorRef}
      className="custom-cursor"
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: size,
        height: size,
        borderRadius: "50%",
        background: "rgba(239,68,68,0.85)",
        border: "2px solid #fff8",
        boxShadow: "0 0 24px #ef4444cc, 0 0 48px #ef444444",
        pointerEvents: "none",
        zIndex: 9999,
        mixBlendMode: "multiply",
        color: "#fff",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontSize: fontSize,
        fontWeight: 600,
        transition:
          "width 0.18s cubic-bezier(0.23, 1, 0.32, 1), height 0.18s cubic-bezier(0.23, 1, 0.32, 1), font-size 0.18s, background 0.3s, box-shadow 0.3s, transform 0.18s cubic-bezier(0.23, 1, 0.32, 1)",
        backdropFilter: "blur(1.5px)",
        textAlign: "center",
        whiteSpace: "pre-line",
        userSelect: "none",
      }}
    >
      {cursorText.trim()}
    </div>
  );
};

export default CustomCursor;










