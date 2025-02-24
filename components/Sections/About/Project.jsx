"use client";

import Button from "@/components/Button";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

const Project = ({ projects }) => {
  const sectionRef = useRef(null);
  const headingRef = useRef(null);
  const textRef = useRef(null);
  const projectsRef = useRef([]);

  useEffect(() => {
    // Initial animation timeline
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 80%",
        end: "bottom 20%",
        // toggleActions: "play none none reverse"
      },
    });

    // Animate heading and text
    tl.fromTo(
      headingRef.current,
      { y: 50, opacity: 0 },
      { y: 0, opacity: 1, duration: 1, ease: "power3.out" }
    ).fromTo(
      textRef.current,
      { y: 30, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.8, ease: "power3.out" },
      "-=0.6"
    );

    // Staggered animation for project cards
    tl.fromTo(
      projectsRef.current,
      {
        y: 100,
        opacity: 0,
        scale: 0.95,
      },
      {
        y: 0,
        opacity: 1,
        scale: 1,
        duration: 0.8,
        stagger: 0.2,
        ease: "power3.out",
      },
      "-=0.4"
    );

    // Hover animations for each project
    projectsRef.current.forEach((project) => {
      const overlay = project.querySelector(".project-overlay");
      const content = project.querySelector(".project-content");

      // Create hover animation timeline
      const hoverTl = gsap.timeline({ paused: true });
      hoverTl
        .to(overlay, {
          opacity: 1,
          scale: 1,
          duration: 0.3,
          ease: "power2.out",
        })
        .fromTo(
          content.children,
          { y: 20, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.3, stagger: 0.05 },
          "-=0.2"
        );

      // Add hover event listeners
      project.addEventListener("mouseenter", () => hoverTl.play());
      project.addEventListener("mouseleave", () => hoverTl.reverse());
    });

    // Cleanup
    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);
  return (
    <section ref={sectionRef} className="myContainer max-md:!pt-0">
      <h1
        ref={headingRef}
        className="!max-md:text-5xl md:!text-[64px] lg:leading-[77.45px] mb-2"
      >
        We have worked on so many amazing projects.
      </h1>
      <Link href="/projects" className="text-xl underline">
        See all
      </Link>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 mt-10 md:mt-16">
        {projects.map((pr, i) => (
          <div
            key={i}
            ref={(el) => (projectsRef.current[i] = el)}
            className="relative cursor-pointer h-[469px] rounded-2xl overflow-hidden"
          >
            <Image
              src={pr.images[0].url}
              width={500}
              height={500}
              className="object-cover h-full w-full"
              alt={pr.name}
            />
            <div className="project-overlay absolute rounded-2xl transition-all flex items-end duration-300 inset-0 opacity-0 w-full h-full bg-black/30">
              <div className="project-content text-white p-6 space-y-3">
                <div className="no-select">
                  <p className="opacity-70 mb-1 font-light">Project Name</p>
                  <p className="text-2xl font-semibold line-clamp-2">
                    {pr.name}
                  </p>
                </div>
                <div className="no-select">
                  <p className="opacity-70 mb-1 font-light">Category</p>
                  <p className="text-xl font-medium">{pr.category}</p>
                </div>
                <div className="no-select">
                  <p className="opacity-70 mb-1 font-light">Description</p>
                  <p className="line-clamp-3">{pr.description}</p>
                </div>
                <div className="pt-3">
                  <Button
                    cta="View project"
                    className="bg-primary-100 transition-all duration-300 text-white w-full myFlex text-center"
                    link={`/projects/${pr._id}`}
                  />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Project;
