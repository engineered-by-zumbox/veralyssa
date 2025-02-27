"use client";

import Link from "next/link";
import gsap from "gsap";
import { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import clsx from "clsx";
import { NavLinks } from "@/constants";
import Button from "../Button";
import { cn } from "@/lib/utils";
import { X } from "lucide-react";
import { AlignRight } from "lucide-react";

const Header = () => {
  const navContainerRef = useRef(null);
  const pathName = usePathname();
  const [isNavVisible, setIsNavVisible] = useState(true);
  const [menuVisible, setMenuVisible] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isNavActive, setIsNavActive] = useState(false);

  useEffect(() => {
    if (isNavActive) {
      document.body.style.overflow = "hidden";
      setMenuVisible(true);
    } else {
      document.body.style.overflow = "auto";
      const timer = setTimeout(() => setMenuVisible(false), 150);
      return () => clearTimeout(timer);
    }
  }, [isNavActive]);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;

      if (scrollY === 0) {
        setIsNavVisible(true);
        navContainerRef.current?.classList.remove("floating-nav");
      } else if (scrollY > lastScrollY) {
        setIsNavVisible(false);
        navContainerRef.current?.classList.add("floating-nav");
      } else if (scrollY < lastScrollY) {
        setIsNavVisible(true);
        navContainerRef.current?.classList.add("floating-nav");
      }

      setLastScrollY(scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  useEffect(() => {
    if (navContainerRef.current) {
      gsap.to(navContainerRef.current, {
        y: isNavVisible ? 0 : -100,
        opacity: isNavVisible ? 1 : 0,
        duration: 0.2,
      });
    }
  }, [isNavVisible]);

  return (
    <header
      ref={navContainerRef}
      className={cn(
        "fixed z-[1000] top-0 left-0 text-white right-0 px-[3%] lg:px-[5%] border-none transition-all duration-700 myFlex justify-between h-[80px]",
        pathName !== "/" && "text-black"
      )}
    >
      <Link href="/" className="relative z-[1000]">
        <img
          src="/images/vera-logo.png"
          alt="veralyssa logo"
          className="w-[200px] max-md:-ml-6 h-[70px] object-cover"
        />
      </Link>
      <nav className="max-lg:hidden">
        <ul className="myFlex justify-between space-x-1 text-sm">
          {NavLinks.map(({ title, url }) => (
            <li key={title}>
              <Link
                href={url}
                className={clsx(
                  "nav-hover-btn font-medium lg:text-lg",
                  pathName === url && "!text-primary font-bold"
                )}
              >
                {title}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
      <Button
        cta="Schedule a meeting"
        external={true}
        className="bg-primary text-white max-lg:hidden"
        link="https://cal.com/veralyssa/15min"
      />
      <button
        className="lg:hidden"
        onClick={() => setIsNavActive(!isNavActive)}
      >
        <AlignRight size={32} />
      </button>
      {menuVisible && (
        <nav
          className={clsx(
            "fixed top-0 z-[1000] h-dvh bottom-0 right-0 left-0 bg-white px-[3%]",
            isNavActive ? "animate-slide-in" : "animate-slide-out"
          )}
        >
          <div className="myFlex justify-between py-10 !pt-16">
            <h2 className="text-2xl text-[#1e1e1e]">MENU</h2>
            <button onClick={() => setIsNavActive(false)}>
              <X size={28} color="#1e1e1e" strokeWidth={1.3} />
            </button>
          </div>
          <div className="grid gap-12 mt-7">
            {NavLinks.map(({ title, url }, i) => (
              <Link
                key={title}
                onClick={() => setIsNavActive(false)}
                href={url}
                className={clsx(
                  "py-2 border-b border-b-black/25 text-black text-center text-xl",
                  pathName === url && "!text-primary font-medium"
                )}
              >
                {title}
              </Link>
            ))}
          </div>
        </nav>
      )}
    </header>
  );
};

export default Header;
