"use client";

import { FooterLinks } from "@/constants";
import { Call } from "iconsax-react";
import { Send2 } from "iconsax-react";
import { Loader2 } from "lucide-react";
import { X } from "lucide-react";
import { Mail } from "lucide-react";
import { MapPin } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";

const Footer = () => {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState("");
  const [success, setSuccess] = useState(false);

  const handleClose = () => {
    setSuccess(false);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_BASE_URL}/api/newsletter/subscribe`,
        {
          method: "POST",
          body: JSON.stringify({ email }),
        }
      );
      if (!response.ok) {
        console.log(response);
      }
      setEmail("");
      setSuccess(true);
    } catch (error) {
      console.log(error);
      toast.error("An error occured. Try again!");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (success) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [success]);

  return (
    <footer className="bg-black">
      <div id="subscribe" className="myContainer">
        <div className="flex lg:items-end max-lg:flex-col gap-7 justify-between pb-12 border-b-[0.3px] border-b-myGray-200">
          <div>
            <h4 className="text-lg md:text-2xl text-white">
              SUBSCRIBE TO OUR <br />{" "}
              <span className="font-semibold !text-4xl lg:!text-5xl !text-primary-300">
                NEWSLETTER
              </span>
            </h4>
            <p className=" max-w-[605px] text-myGray mt-4">
              Subscribe to our newsletter to stay updated on the latest trends
              in luxury design and exclusive tips for creating your dream space.
              Join our community and let's build something extraordinary
              together!
            </p>
          </div>
          <div>
            <form onSubmit={handleSubmit}>
              <label
                htmlFor="email"
                className="text-sm max-lg:hidden text-white"
              >
                Sign up for our{" "}
                <span className="font-semibold">Newsletter</span>{" "}
              </label>
              <div className="w-[300px] lg:mt-2 h-[50px] pl-3 pr-1 myFlex gap-3 justify-between rounded-[14px] bg-white">
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  placeholder="Enter your email address"
                  className="w-full focus:outline-none placeholder:max-md:text-sm placeholder:text-black placeholder:font-medium"
                />
                <button
                  type="submit"
                  disabled={loading}
                  className="bg-black p-2 rounded-xl myFlex justify-between"
                >
                  {loading ? (
                    <Loader2
                      size="24"
                      className="animate-spin"
                      color="#ffffff"
                    />
                  ) : (
                    <Send2 size="24" color="#ffffff" variant="Bold" />
                  )}
                </button>
              </div>
              {/* {error && <p style={{ color: "red", fontSize: "14px" }}>{error}</p>} */}
            </form>
          </div>
        </div>
      </div>
      <div className="lg:myFlex relative">
        <div className="max-lg:pb-16 lg:basis-1/2 pl-[3%] lg:pl-[5%] grid md:grid-cols-2 gap-16">
          <div>
            <p className="font-bold text-white">Contact</p>
            <div className="space-y-4 mt-5">
              <a
                href="https://maps.app.goo.gl/2DQ7LhU8BmtL2dbN6?g_st=aw"
                target="_blank"
                className="flex gap-2 w-fit"
              >
                <MapPin size="30" color="#000000" className="fill-white" />
                <p className="text-white/90 hover:text-white">
                  Plot 16B Omorinre Johnson Street,
                  <br /> Lekki Phase 1, Lagos, Nigeria
                  <br />
                  <br />
                  <span className="text-primary underline text-sm">
                    Get directions
                  </span>
                </p>
              </a>
              <a
                href="mailto:enquiries@veralyssa.com"
                target="_blank"
                className="flex gap-2 w-fit"
              >
                <Mail size="24" color="#000000" className="fill-white" />
                <p className="text-white/90 hover:text-white">
                  enquiries@veralyssa.com
                </p>
              </a>
              <a
                href="tel:+012933866"
                target="_blank"
                className="flex gap-2 w-fit"
              >
                <Call size="24" color="#ffffff" variant="Bold" />
                <p className="text-white/90 hover:text-white">+01 293 3866</p>
              </a>
            </div>
          </div>
          <div className="text-white">
            <p className="font-bold">Quick links</p>
            <ul className="grid gap-3 mt-5">
              {FooterLinks.map((nav, i) => (
                <li key={i} className="text-white/90 hover:text-white">
                  {nav.external ? (
                    <a href={nav.url} target="_blank" rel="noopener noreferrer">
                      {nav.title}
                    </a>
                  ) : (
                    <Link href={nav.url}>{nav.title}</Link>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="lg:basis-1/2 relative h-[416px] rounded-tl-[370px] md:rounded-tl-full overflow-hidden">
          <Image
            src="/images/footer.webp"
            alt="footer image"
            width={710}
            height={416}
            className="absolute inset-0 w-full h-full"
          />
        </div>
        <div className="absolute bg-black h-[48px] myFlex justify-center bottom-0 right-0 left-0">
          <p className="text-xs text-myGray-300 text-center">
            &copy; 2025 Veralyssa. All rights reserved
          </p>
        </div>
      </div>
      {success && (
        <div
          className="fixed top-0 h-dvh bottom-0 right-0 left-0 bg-black/70 z-[999999] animate-fadeIn"
          onClick={handleClose}
        >
          <div
            className="bg-[#FCF8ED] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 myFlex flex-col gap-7 max-md:w-[95%] max-w-[519px] p-3 mx-auto md:px-5 md:pt-10 md:pb-5 rounded-3xl animate-scaleUp"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={handleClose}
              className="absolute top-4 right-4 p-2 rounded-full hover:bg-black/5 transition-colors duration-200"
            >
              <X size={24} />
            </button>
            <img
              src="/images/highfive.png"
              alt="high five"
              className="w-[320px] md:w-[400px]"
            />
            <h1 className="!font-medium text-center">
              You Are Now A Subscriber! <br /> Thank You!
            </h1>
            <p className="md:text-xl text-center max-md:w-[80%]">
              You should recieve our first newsletter soon!
            </p>
          </div>
        </div>
      )}
    </footer>
  );
};

export default Footer;
