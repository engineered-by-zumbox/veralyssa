"use client";

import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";

const PageLoader = () => {
  const containerRef = useRef(null);
  const logoRef = useRef(null);
  const overlayRef = useRef(null);

  const [loading, setLoading] = useState(true);

  // Prevent body scroll while loading
  useEffect(() => {
    document.body.style.overflow = loading ? "hidden" : "auto";
    return () => {
      document.body.style.overflow = "auto"; // Cleanup in case of unmount
    };
  }, [loading]);

  useEffect(() => {
    const tl = gsap.timeline({
      onComplete: () => setLoading(false),
    });

    // Initial state
    gsap.set(logoRef.current, { opacity: 0, scale: 0.8 });

    // Animation sequence
    tl.to(logoRef.current, {
      opacity: 1,
      scale: 1,
      duration: 1,
      ease: "elastic.out(1, 0.5)",
    })
      .to(logoRef.current, {
        opacity: 0,
        scale: 1.2,
        duration: 0.8,
        ease: "power3.in",
        delay: 0.5,
      })
      .to(overlayRef.current, {
        yPercent: -100,
        duration: 1,
        ease: "power4.inOut",
      });

    return () => {
      tl.kill(); // Cleanup animation
    };
  }, []);

  // 🚦 Conditional rendering to remove the loader from the DOM
  if (!loading) return null;

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 z-[9999] h-dvh flex items-center justify-center"
    >
      <div ref={overlayRef} className="absolute inset-0 bg-white" />
      <div ref={logoRef} className="relative z-10 w-[300px] h-32">
        <img
          src="/images/vera-logo.png"
          alt="logo"
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  );
};

export default PageLoader;
