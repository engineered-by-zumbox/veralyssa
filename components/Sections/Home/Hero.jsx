"use client";
import React, { useRef, useState, useEffect } from "react";
import { gsap } from "gsap";
import Button from "@/components/Button";

const Hero = () => {
  return (
    <section className="relative min-h-screen overflow-hidden">
      {/* Desktop Video */}
      <video
        autoPlay
        src="/videos/hero.mp4"
        loop
        muted
        playsInline
        preload="auto"
        className="absolute inset-0 w-full h-full object-cover object-center"
      />

      {/* Mobile Video
      <video
        autoPlay
        src="/hero99.mp4"
        loop
        muted
        playsInline
        preload="auto"
        className="absolute md:hidden inset-0 w-full h-full object-cover object-[70%_center]"
      /> */}

      {/* Content Overlay */}
      <div className="absolute inset-0 flex flex-col items-center justify-center gap-7 bg-black/40 md:gap-8 text-white z-40 px-4">
        <h1 className="text-center">
          Building Quality Structures With <br className="md:hidden" />
          <span className="md:inline-block mx-auto md:min-w-[400px] text-primary">
            <CubeAnimation />
          </span>
        </h1>
        <p className="max-w-[98%] md:max-w-[689px] mx-auto text-center">
          We help elite businesses and individuals create environments for
          high-end living by providing end-to-end luxury living solutions.
        </p>
        <div className="myFlex gap-4 md:gap-6">
          <Button
            cta="View our portfolio"
            className="bg-primary-100 text-white whitespace-nowrap"
            link="/contact"
          />
          <Button
            cta="Schedule a meeting"
            className="!h-[46px] ring-1 ring-primary text-primary whitespace-nowrap"
            link="/contact"
          />
        </div>
      </div>
    </section>
  );
};

const CubeAnimation = () => {
  const textParts = [
    "ATTENTION TO DETAILS",
    "LUXURY AND STYLES",
    "TIMELESS ELEGANCE",
  ];

  const cubeRef = useRef(null);
  const [index, setIndex] = useState(0);
  const [isRollingDown, setIsRollingDown] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      if (!isRollingDown) {
        gsap.to(cubeRef.current, {
          rotationX: (index + 1) * 90,
          duration: 1.2,
          ease: "power2.inOut",
        });

        if (index === textParts.length - 1) {
          setIsRollingDown(true);
        } else {
          setIndex((prev) => prev + 1);
        }
      } else {
        gsap.to(cubeRef.current, {
          rotationX: 90,
          duration: 2, // Smooth roll down
          ease: "power2.inOut",
        });
        setIsRollingDown(false);
        setIndex(0);
      }
    }, 2000);

    return () => clearInterval(interval);
  }, [index, isRollingDown]);

  return (
    <div className="cube-container">
      <div ref={cubeRef} className="cube">
        {textParts.map((text, i) => (
          <div
            key={i}
            className="face"
            style={{ backfaceVisibility: "hidden" }}
          >
            {text}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Hero;
