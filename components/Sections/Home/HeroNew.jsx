"use client";
import { playFair } from "@/app/layout";
import { buttonVariants } from "@/components/ui/button";
import Link from "next/link";
import React, { useState, useEffect } from "react";

const HeroNew = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  const images = ["/images/vera-hero1.jpg", "/images/vera-hero2.jpg"];

  const words = [
    "Luxury and Style.",
    "Attention to Details.",
    "Timeless Elegance.",
  ];
  const typingSpeed = 150;
  const deletingSpeed = 100;
  const wordPause = 2000;

  useEffect(() => {
    let timer;

    if (isDeleting) {
      if (displayText === "") {
        setIsDeleting(false);
        setCurrentWordIndex((prev) => (prev + 1) % words.length);
        // Change image when word is fully deleted
        setCurrentImageIndex((prev) => (prev + 1) % images.length);
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
  }, [displayText, isDeleting, currentWordIndex, currentImageIndex]);

  return (
    <div className="relative h-screen w-full overflow-hidden mt-[80px]">
      {/* Image carousel */}
      <div className="absolute inset-0">
        {images.map((src, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              currentImageIndex === index ? "opacity-100" : "opacity-0"
            }`}
          >
            <img
              src={src}
              alt={`Hero image ${index + 1}`}
              className="h-full w-full object-cover"
            />
          </div>
        ))}
      </div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/20" />

      {/* Content */}
      <div className="relative z-10 flex flex-col gap-10 h-full items-center justify-center">
        <h1 className="text-center text-white lg:!text-6xl">
          Building Quality Structures with <br />
          <span
            className={`${playFair.className} mt-3 inline-block min-w-[200px] !text-primary`}
          >
            {displayText}
            <span className="animate-blink">|</span>
          </span>
        </h1>
        <p className="max-w-[98%] md:max-w-[689px] md:text-lg mx-auto text-center text-white">
          We help elite businesses and individuals create environments for
          high-end living by providing end-to-end luxury living solutions.
        </p>
        <div className="md:space-x-5 max-md:flex flex-col max-md:w-full px-[3%] gap-5">
          <Link
            href="#"
            className={`max-md:!w-full ${buttonVariants({ variant: "default" })}`}
          >
            View Our Projects
          </Link>
          <Link
            href="#"
            className={`max-md:!w-full ${buttonVariants({ variant: "outline" })}`}
          >
            Schedule a Meeting
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HeroNew;
