"use client";

import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

// Register ScrollTrigger plugin
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

const AnimatedTitle = ({ 
  title, 
  className = "", 
  tag: Tag = "h2",
  delay = 0,
  duration = 0.8,
  y = 50,
  scrub = false,
  markers = false,
  start = "top 80%",
  toggleActions = "play none none reverse"
}) => {
  const titleRef = useRef(null);

  useEffect(() => {
    const el = titleRef.current;
    
    const anim = gsap.fromTo(el,
      {
        y: y,
        opacity: 0
      },
      {
        y: 0,
        opacity: 1,
        duration: duration,
        delay: delay,
        ease: "power3.out",
        scrollTrigger: {
          trigger: el,
          start: start,
          markers: markers,
          toggleActions: toggleActions,
          scrub: scrub
        }
      }
    );

    return () => {
      // Cleanup animation and ScrollTrigger
      anim.kill();
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, [delay, duration, y, scrub, markers, start, toggleActions]);

  return (
    <Tag 
      ref={titleRef} 
      className={`opacity-0 ${className}`}
    >
      {title}
    </Tag>
  );
};

export default AnimatedTitle;