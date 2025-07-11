"use client";

import { useRef, useState, useEffect } from "react";
import { useCursor } from "./CursorProvider";   // <-- Import the context hook
 

const MagnifierCursor = ({
  text,
  className = "",
  cursorSize = 70, // You can override this per usage
  style = {},
}) => {
  const containerRef = useRef(null);
  const [showCursor, setShowCursor] = useState(false);
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });
  const { setMagnifierActive } = useCursor(); // <-- Use the context

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const handleMouseMove = (e) => {
      const rect = container.getBoundingClientRect();
      setCursorPos({
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      });
      setShowCursor(true);
      setMagnifierActive(true); // Activate magnifier in context
    };

    const handleMouseLeave = () => {
      setShowCursor(false);
      setMagnifierActive(false); // Deactivate magnifier in context
    };

    container.addEventListener("mousemove", handleMouseMove);
    container.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      container.removeEventListener("mousemove", handleMouseMove);
      container.removeEventListener("mouseleave", handleMouseLeave);
      setMagnifierActive(false); // Clean up on unmount
    };
  }, [setMagnifierActive]);

  return (
    <span
      ref={containerRef}
      className={`relative inline-block select-none ${className}`}
      //   style={style}
      style={{ whiteSpace: "nowrap", ...style }}
    >
      {/* Main text (inherits all parent styles) */}
      <span style={{ color: "inherit" }}>{text}</span>
      {/* Magnifier cursor */}
      {showCursor && (
        <span
          style={{
            pointerEvents: "none",
            position: "absolute",
            top: cursorPos.y - cursorSize / 2,
            left: cursorPos.x - cursorSize / 2,
            width: cursorSize,
            height: cursorSize,
            borderRadius: "50%",
            background: "#111",
            boxShadow: "0 0 32px #0008",
            zIndex: 50,
            overflow: "hidden",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            transition: "background 0.2s, box-shadow 0.2s",
          }}
        >
          <span
            style={{
              color: "#fff",
              font: "inherit",
              pointerEvents: "none",
              position: "absolute",
              left: -cursorPos.x + cursorSize / 2,
              top: -cursorPos.y + cursorSize / 2,
              whiteSpace: "pre",
              userSelect: "none",
            }}
          >
            {text}
          </span>
        </span>
      )}
    </span>
  );
};

export default MagnifierCursor;














