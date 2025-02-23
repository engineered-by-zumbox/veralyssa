"use client";

import Button from "@/components/Button";
import React, { useState, useEffect, useRef } from "react";
import gsap from "gsap";
import { playFair } from "@/app/layout";
import { scheduleMeeting } from "@/constants";

const HeroNew = () => {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  // Refs for GSAP animations
  const headingRef = useRef(null);
  const paragraphRef = useRef(null);
  const buttonsRef = useRef(null);

  const words = [
    "Luxury and Style.",
    "Attention to Details.",
    "Timeless Elegance.",
  ];
  const typingSpeed = 150;
  const deletingSpeed = 100;
  const wordPause = 2000;

  useEffect(() => {
    const tl = gsap.timeline({ defaults: { ease: "power3.out" }, delay: 4 });

    tl.fromTo(".overlay", { opacity: 0 }, { opacity: 1, duration: 1 }, "-=1");

    tl.fromTo(
      headingRef.current,
      { y: 50, opacity: 0 },
      { y: 0, opacity: 1, duration: 1 },
      "-=0.5"
    );

    tl.fromTo(
      paragraphRef.current,
      { y: 30, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.8 },
      "-=0.7"
    );

    tl.fromTo(
      buttonsRef.current.children,
      { y: 20, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.6, stagger: 0.2 },
      "-=0.5"
    );
  }, []);

  useEffect(() => {
    let timer;

    if (isDeleting) {
      if (displayText === "") {
        setIsDeleting(false);
        setCurrentWordIndex((prev) => (prev + 1) % words.length);
      } else {
        timer = setTimeout(() => {
          setDisplayText(displayText.slice(0, -1));
        }, deletingSpeed);
      }
    } else {
      const currentWord = words[currentWordIndex];
      if (displayText === currentWord) {
        timer = setTimeout(() => {
          setIsDeleting(true);
        }, wordPause);
      } else {
        timer = setTimeout(() => {
          setDisplayText(currentWord.slice(0, displayText.length + 1));
        }, typingSpeed);
      }
    }

    return () => clearTimeout(timer);
  }, [displayText, isDeleting, currentWordIndex]);

  return (
    <div className="relative h-dvh w-full overflow-hidden">
      <img
        src="/images/hero.jpeg"
        alt="hero imgae"
        className="h-full w-full object-cover absolute top-0 bottom-0 right-0 left-0"
      />
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/30 overlay" />
      {/* Content */}
      <div className="relative z-10 flex flex-col gap-10 h-full items-center justify-center">
        <h1
          ref={headingRef}
          className="text-center text-4xl text-white lg:!text-6xl"
        >
          Building Quality <br className="md:hidden" /> Structures with{" "}
          <br className="max-md:hidden" />
          <span
            className={`${playFair.className} lg:mt-3 inline-block min-w-[200px] !text-primary`}
          >
            {displayText}
            <span className="animate-blink">|</span>
          </span>
        </h1>
        <p
          ref={paragraphRef}
          className="max-w-[98%] md:max-w-[689px] md:text-lg mx-auto text-center text-white"
        >
          We help elite businesses and individuals create environments for
          high-end living by providing end-to-end luxury living solutions.
        </p>
        <div
          ref={buttonsRef}
          className="md:space-x-5 max-md:flex flex-col max-md:w-full px-[3%] gap-5"
        >
          <Button
            cta="View Our Projects"
            className="bg-primary px-7 font-semibold text-white"
            link="/projects"
          />
          <Button
            cta="Schedule a Meeting"
            className="px-7 bg-white font-semibold text-primary"
            action={scheduleMeeting}
          />
        </div>
      </div>
    </div>
  );
};

export default HeroNew;
