"use client";

import Image from "next/image";
import Link from "next/link";
import gsap from "gsap";
import { useWindowScroll } from "react-use";
import { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import clsx from "clsx";
import { NavLinks } from "@/constants";
import Button from "../Button";
import { HambergerMenu } from "iconsax-react";
import { cn } from "@/lib/utils";

const Header = () => {
  const navContainerRef = useRef(null);
  const pathName = usePathname();
  const { y: currentScrollY } = useWindowScroll();
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
      const timer = setTimeout(() => setMenuVisible(false), 200);
      return () => clearTimeout(timer);
    }
  }, [isNavActive]);

  useEffect(() => {
    const handleScroll = () => {
      if (currentScrollY === 0) {
        setIsNavVisible(true);
      } else if (currentScrollY > lastScrollY) {
        setIsNavVisible(false);
      } else if (currentScrollY < lastScrollY) {
        setIsNavVisible(true);
      }
      setLastScrollY(currentScrollY);
    };

    if (Math.abs(currentScrollY - lastScrollY) > 10) {
      handleScroll();
    }
  }, [currentScrollY]);

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
        "fixed z-[1000] top-0 left-0 right-0 px-[3%] lg:px-[5%] border-none transition-all duration-700 myFlex justify-between h-[80px]",
        pathName === "/" ? "glassmorphism" : "bg-white"
      )}
    >
      <Link href="/" className="z-[5000]">
        <Image
          src="/images/vera-logo.png"
          width={200}
          height={40}
          alt="veralyssa logo"
          className="max-md:-ml-6"
        />
      </Link>
      <nav className="max-lg:hidden">
        <ul className="myFlex justify-between space-x-1 text-sm">
          {NavLinks.map(({ title, url }) => (
            <li key={title}>
              <Link
                href={url}
                className={clsx(
                  "nav-hover-btn font-medium",
                  pathName === url && "text-primary font-bold"
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
        className="bg-primary text-white max-lg:hidden"
        link="/contact"
      />
      <button
        className="z-[5000] lg:hidden"
        onClick={() => setIsNavActive(!isNavActive)}
      >
        <HambergerMenu size="32" color="#000000" />
      </button>
    </header>
  );
};

export default Header;
