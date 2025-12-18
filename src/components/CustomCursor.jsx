// src/components/CustomCursor.jsx
import { useEffect, useState, useRef } from "react";

const CustomCursor = () => {
  const dotRef = useRef(null);
  const outlineRef = useRef(null);
  const [isHovering, setIsHovering] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [isTouchDevice, setIsTouchDevice] = useState(true); // Default to true to prevent flash

  useEffect(() => {
    // Check if device has fine pointer (mouse) - runs once on mount
    const hasFingerPointer = window.matchMedia("(hover: none) and (pointer: coarse)").matches;
    const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
    setIsTouchDevice(hasFingerPointer || isMobile);
  }, []);

  useEffect(() => {
    // Don't run cursor logic on touch devices
    if (isTouchDevice) return;

    const dot = dotRef.current;
    const outline = outlineRef.current;
    if (!dot || !outline) return;

    let mouseX = 0;
    let mouseY = 0;
    let outlineX = 0;
    let outlineY = 0;

    const handleMouseMove = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;

      // Dot follows instantly
      dot.style.transform = `translate(${mouseX - 4}px, ${mouseY - 4}px)`;

      if (!isVisible) setIsVisible(true);
    };

    const handleMouseEnter = () => setIsVisible(true);
    const handleMouseLeave = () => setIsVisible(false);

    // Smooth outline follow
    const animateOutline = () => {
      outlineX += (mouseX - outlineX) * 0.15;
      outlineY += (mouseY - outlineY) * 0.15;

      outline.style.transform = `translate(${outlineX - 20}px, ${outlineY - 20}px)`;
      requestAnimationFrame(animateOutline);
    };

    // Detect hoverable elements
    const handleMouseOver = (e) => {
      const target = e.target;
      if (
        target.tagName === "BUTTON" ||
        target.tagName === "A" ||
        target.closest("button") ||
        target.closest("a") ||
        target.classList.contains("cursor-pointer") ||
        target.closest(".cursor-pointer")
      ) {
        setIsHovering(true);
      }
    };

    const handleMouseOut = (e) => {
      const target = e.target;
      if (
        target.tagName === "BUTTON" ||
        target.tagName === "A" ||
        target.closest("button") ||
        target.closest("a") ||
        target.classList.contains("cursor-pointer") ||
        target.closest(".cursor-pointer")
      ) {
        setIsHovering(false);
      }
    };

    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseenter", handleMouseEnter);
    document.addEventListener("mouseleave", handleMouseLeave);
    document.addEventListener("mouseover", handleMouseOver);
    document.addEventListener("mouseout", handleMouseOut);

    const animationId = requestAnimationFrame(animateOutline);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseenter", handleMouseEnter);
      document.removeEventListener("mouseleave", handleMouseLeave);
      document.removeEventListener("mouseover", handleMouseOver);
      document.removeEventListener("mouseout", handleMouseOut);
      cancelAnimationFrame(animationId);
    };
  }, [isTouchDevice, isVisible]);

  // Don't render on touch devices
  if (isTouchDevice) return null;

  return (
    <>
      <div
        ref={dotRef}
        className="cursor-dot"
        style={{
          opacity: isVisible ? 1 : 0,
          transform: isHovering ? "scale(1.5)" : "scale(1)",
        }}
      />
      <div
        ref={outlineRef}
        className={`cursor-outline ${isHovering ? "hover" : ""}`}
        style={{ opacity: isVisible ? 1 : 0 }}
      />
    </>
  );
};

export default CustomCursor;
