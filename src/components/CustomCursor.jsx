// src/components/CustomCursor.jsx
import { useEffect, useState, useRef } from "react";

const CustomCursor = () => {
  const dotRef = useRef(null);
  const outlineRef = useRef(null);
  const [isHovering, setIsHovering] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [isTouchDevice, setIsTouchDevice] = useState(true); // default true to avoid flash

  useEffect(() => {
    const coarse = window.matchMedia("(hover: none) and (pointer: coarse)").matches;
    const mobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
    setIsTouchDevice(coarse || mobile);
  }, []);

  useEffect(() => {
    if (isTouchDevice) return;

    const dot = dotRef.current;
    const outline = outlineRef.current;
    if (!dot || !outline) return;

    let mouseX = 0, mouseY = 0, outlineX = 0, outlineY = 0;
    let hovering = false;

    // The dot's transform (translate + scale) is written ENTIRELY here, never
    // via React's style prop — otherwise a re-render would overwrite the
    // translate with scale-only and snap the cursor to (0,0).
    const applyDot = () => {
      dot.style.transform = `translate(${mouseX - 4}px, ${mouseY - 4}px) scale(${hovering ? 1.6 : 1})`;
    };

    const handleMouseMove = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      applyDot();
      setIsVisible(true);
    };
    const handleMouseEnter = () => setIsVisible(true);
    const handleMouseLeave = () => setIsVisible(false);

    let rafId = null;
    const animateOutline = () => {
      outlineX += (mouseX - outlineX) * 0.15;
      outlineY += (mouseY - outlineY) * 0.15;
      outline.style.transform = `translate(${outlineX - 20}px, ${outlineY - 20}px)`;
      rafId = requestAnimationFrame(animateOutline);
    };

    const isInteractive = (t) =>
      !!(t && t.closest && t.closest("a, button, .cursor-pointer, [role='button'], input, select, textarea"));

    const handleMouseOver = (e) => {
      if (isInteractive(e.target)) {
        hovering = true;
        applyDot();
        setIsHovering(true);
      }
    };
    const handleMouseOut = (e) => {
      if (isInteractive(e.target)) {
        hovering = false;
        applyDot();
        setIsHovering(false);
      }
    };

    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseenter", handleMouseEnter);
    document.addEventListener("mouseleave", handleMouseLeave);
    document.addEventListener("mouseover", handleMouseOver);
    document.addEventListener("mouseout", handleMouseOut);

    rafId = requestAnimationFrame(animateOutline);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseenter", handleMouseEnter);
      document.removeEventListener("mouseleave", handleMouseLeave);
      document.removeEventListener("mouseover", handleMouseOver);
      document.removeEventListener("mouseout", handleMouseOut);
      if (rafId) cancelAnimationFrame(rafId);
    };
  }, [isTouchDevice]);

  if (isTouchDevice) return null;

  return (
    <>
      {/* dot: transform is fully imperative — only opacity is React-managed */}
      <div ref={dotRef} className="cursor-dot" style={{ opacity: isVisible ? 1 : 0 }} aria-hidden="true" />
      <div
        ref={outlineRef}
        className={`cursor-outline ${isHovering ? "hover" : ""}`}
        style={{ opacity: isVisible ? 1 : 0 }}
        aria-hidden="true"
      />
    </>
  );
};

export default CustomCursor;
