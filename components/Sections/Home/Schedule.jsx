"use client";
import ContactForm from "@/components/Forms/ContactForm";
import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Schedule = () => {
  const sectionRef = useRef(null);
  const headingRef = useRef(null);
  const textRef = useRef(null);
  const formRef = useRef(null);

  useEffect(() => {
    // Initial animation timeline
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 80%",
        end: "bottom 20%",
        // toggleActions: "play none none reverse"
      }
    });

    // Heading animation
    tl.fromTo(headingRef.current,
      { 
        y: 50, 
        opacity: 0,
        scale: 0.95
      },
      { 
        y: 0, 
        opacity: 1,
        scale: 1,
        duration: 0.8,
        ease: "power3.out"
      }
    )
    
    // Text animation
    .fromTo(textRef.current,
      { 
        y: 30, 
        opacity: 0 
      },
      { 
        y: 0, 
        opacity: 1, 
        duration: 0.6,
        ease: "power3.out"
      },
      "-=0.4"
    )
    
    // Form animation
    .fromTo(formRef.current,
      { 
        y: 50,
        opacity: 0,
      },
      { 
        y: 0,
        opacity: 1,
        duration: 1,
        ease: "power2.out"
      },
      "-=0.3"
    );

    // Add hover effect to form
    formRef.current && gsap.to(formRef.current, {
      scale: 1.002,
      duration: 0.3,
      ease: "power2.out",
      scrollTrigger: {
        trigger: formRef.current,
        start: "top center",
        end: "bottom center",
        toggleActions: "play reverse play reverse"
      }
    });

    // Cleanup
    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <section ref={sectionRef} id="contact" className="bg-[#F3F3F3]">
      <div className="myContainer">
        <h1 ref={headingRef} className="text-center">
          Schedule a Meeting <br className="md:hidden" /> With Us
        </h1>
        <p ref={textRef} className="max-w-[605px] text-center mx-auto text-myGray-500 mt-4">
          Let's discuss your vision for creating the perfect luxury space.{" "}
          <br className="max-md:hidden" />
          Let's Build Something Great Together.
        </p>
        <div ref={formRef}>
          <ContactForm />
        </div>
      </div>
    </section>
  );
};

export default Schedule;