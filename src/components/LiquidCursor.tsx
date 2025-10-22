import { useEffect, useRef } from "react";

const LiquidCursor = () => {
  const cursorRef = useRef<HTMLDivElement>(null);
  const cursorDotRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const cursor = cursorRef.current;
    const cursorDot = cursorDotRef.current;
    if (!cursor || !cursorDot) return;

    let mouseX = 0;
    let mouseY = 0;
    let cursorX = 0;
    let cursorY = 0;
    let dotX = 0;
    let dotY = 0;

    const moveCursor = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    };

    const animateCursor = () => {
      // Smooth follow for main cursor
      cursorX += (mouseX - cursorX) * 0.1;
      cursorY += (mouseY - cursorY) * 0.1;
      
      // Faster follow for dot cursor
      dotX += (mouseX - dotX) * 0.3;
      dotY += (mouseY - dotY) * 0.3;

      cursor.style.transform = `translate3d(${cursorX}px, ${cursorY}px, 0)`;
      cursorDot.style.transform = `translate3d(${dotX}px, ${dotY}px, 0)`;

      requestAnimationFrame(animateCursor);
    };

    // Handle click effect
    const handleMouseDown = () => {
      if (cursor) {
        cursor.style.transform += " scale(0.8)";
        cursor.style.background = "rgba(255, 101, 0, 0.3)";
      }
    };

    const handleMouseUp = () => {
      if (cursor) {
        cursor.style.transform = cursor.style.transform.replace(" scale(0.8)", "");
        cursor.style.background = "rgba(255, 255, 255, 0.1)";
      }
    };

    // Handle hover effects
    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.tagName === 'A' || target.tagName === 'BUTTON' || target.onclick !== null) {
        cursor.style.width = "40px";
        cursor.style.height = "40px";
        cursor.style.background = "rgba(255, 101, 0, 0.2)";
        cursor.style.borderColor = "rgba(255, 101, 0, 0.5)";
      }
    };

    const handleMouseOut = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.tagName === 'A' || target.tagName === 'BUTTON' || target.onclick !== null) {
        cursor.style.width = "20px";
        cursor.style.height = "20px";
        cursor.style.background = "rgba(255, 255, 255, 0.1)";
        cursor.style.borderColor = "rgba(255, 255, 255, 0.3)";
      }
    };

    window.addEventListener("mousemove", moveCursor);
    window.addEventListener("mousedown", handleMouseDown);
    window.addEventListener("mouseup", handleMouseUp);
    window.addEventListener("mouseover", handleMouseOver);
    window.addEventListener("mouseout", handleMouseOut);

    animateCursor();

    return () => {
      window.removeEventListener("mousemove", moveCursor);
      window.removeEventListener("mousedown", handleMouseDown);
      window.removeEventListener("mouseup", handleMouseUp);
      window.removeEventListener("mouseover", handleMouseOver);
      window.removeEventListener("mouseout", handleMouseOut);
    };
  }, []);

  return (
    <>
      {/* Main Cursor */}
      <div
        ref={cursorRef}
        className="
          fixed top-0 left-0 z-[9999] pointer-events-none
          w-5 h-5
          rounded-full
          bg-white/10
          backdrop-blur-[2px]
          border border-white/30
          shadow-[0_0_10px_rgba(255,255,255,0.2)]
          transition-all duration-150 ease-out
          mix-blend-difference
          translate-x-[-50%] translate-y-[-50%]
          scale-100
        "
      ></div>
      
      {/* Dot Cursor */}
      <div
        ref={cursorDotRef}
        className="
          fixed top-0 left-0 z-[9999] pointer-events-none
          w-1 h-1
          rounded-full
          bg-white
          transition-transform duration-100 ease-linear
          translate-x-[-50%] translate-y-[-50%]
        "
      ></div>
    </>
  );
};

export default LiquidCursor;