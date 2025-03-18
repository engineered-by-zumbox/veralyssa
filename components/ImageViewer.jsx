"use client";

import React, { useState } from "react";
import Lightbox from "yet-another-react-lightbox";
import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import Captions from "yet-another-react-lightbox/plugins/captions";
import Fullscreen from "yet-another-react-lightbox/plugins/fullscreen";
import Counter from "yet-another-react-lightbox/plugins/counter";
import Slideshow from "yet-another-react-lightbox/plugins/slideshow";
import "yet-another-react-lightbox/styles.css";
import "yet-another-react-lightbox/plugins/thumbnails.css";
import "yet-another-react-lightbox/plugins/captions.css";
import "yet-another-react-lightbox/plugins/counter.css";
import { cn } from "@/lib/utils";
import Image from "next/image";

const Gallery = ({ images, initialIndex = 0, type }) => {
  const [open, setOpen] = useState(false);
  const [index, setIndex] = useState(initialIndex);

  // Format images for the lightbox
  const slides = images.map((image) => ({
    src: image?.url,
    alt: image?.caption || "",
    title: image?.caption || "",
    description: image?.description || "",
  }));

  // Open lightbox with specific image
  const openLightbox = (imageIndex) => {
    setIndex(imageIndex);
    setOpen(true);
  };

  return (
    <>
      {/* Gallery Grid - Customize as needed */}
      <div
        className={cn(
          "mt-10",
          type === "1" && "myFlex no-scrollbar overflow-y-scroll gap-4",
          type === "2" && "grid md:grid-cols-2 gap-4"
        )}
      >
        {images.map((image, idx) => (
          <div
            key={idx}
            className="relative group transition-all duration-300 min-w-[300px] md:min-w-[356px] h-[540px] md:h-[641px] overflow-hidden rounded-3xl bg-gray-100 cursor-pointer"
            onClick={() => openLightbox(idx)}
          >
            {image?.url && (
              <Image
                width={500}
                height={700}
                src={image?.url}
                alt={image?.caption}
                className="absolute inset-0 object-cover h-full w-full group-hover:scale-105 transition-transform duration-300"
              />
            )}

            <div className="absolute bg-black/20 w-full inset-0 z-50 px-4 pb-6 flex items-end">
              <div className="w-full">
                <h2 className="text-[32px] mb-7 font-semibold leading-[38.73px] max-w-[90%] text-white">
                  {image?.caption}
                </h2>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Lightbox Component */}
      <Lightbox
        open={open}
        close={() => setOpen(false)}
        index={index}
        slides={slides}
        plugins={[Thumbnails, Zoom, Captions, Fullscreen, Counter, Slideshow]}
        on={{
          view: ({ index }) => setIndex(index),
        }}
        carousel={{
          preload: 3,
          spacing: 0.2,
          padding: "16px",
        }}
        animation={{
          swipe: 500,
        }}
        thumbnails={{
          position: "bottom",
          width: 120,
          height: 80,
          gap: 16,
          border: 0,
          borderRadius: 8,
          padding: 4,
        }}
        zoom={{
          maxZoomPixelRatio: 3,
          scrollToZoom: true,
          doubleTapDelay: 300,
        }}
        counter={{
          container: { style: { top: "16px", left: "16px", fontSize: "14px" } },
        }}
        captions={{
          showToggle: true,
          descriptionTextAlign: "center",
        }}
        slideshow={{
          autoplay: false,
          delay: 5000,
        }}
        styles={{
          container: { backgroundColor: "rgba(0, 0, 0, 0.9)" },
          thumbnail: {
            filter: "grayscale(30%)",
            borderRadius: "4px",
            transition: "all 0.3s ease",
          },
          thumbnailsTrack: { padding: "16px 0" },
          captionsTitle: { fontSize: "18px" },
          captionsDescription: { fontSize: "14px" },
        }}
        render={{
          iconPrev: () => <ChevronLeftIcon />,
          iconNext: () => <ChevronRightIcon />,
          iconClose: () => <CloseIcon />,
          iconZoomIn: () => <ZoomInIcon />,
          iconZoomOut: () => <ZoomOutIcon />,
          iconFullscreen: () => <FullscreenIcon />,
          iconSlideshowPlay: () => <PlayIcon />,
          iconSlideshowPause: () => <PauseIcon />,
        }}
      />
    </>
  );
};

// Custom Icons to match your design
const ChevronLeftIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M15 18l-6-6 6-6" />
  </svg>
);

const ChevronRightIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M9 18l6-6-6-6" />
  </svg>
);

const CloseIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <line x1="18" y1="6" x2="6" y2="18" />
    <line x1="6" y1="6" x2="18" y2="18" />
  </svg>
);

const ZoomInIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <circle cx="11" cy="11" r="8" />
    <line x1="21" y1="21" x2="16.65" y2="16.65" />
    <line x1="11" y1="8" x2="11" y2="14" />
    <line x1="8" y1="11" x2="14" y2="11" />
  </svg>
);

const ZoomOutIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <circle cx="11" cy="11" r="8" />
    <line x1="21" y1="21" x2="16.65" y2="16.65" />
    <line x1="8" y1="11" x2="14" y2="11" />
  </svg>
);

const FullscreenIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M8 3H5a2 2 0 0 0-2 2v3m18 0V5a2 2 0 0 0-2-2h-3m0 18h3a2 2 0 0 0 2-2v-3M3 16v3a2 2 0 0 0 2 2h3" />
  </svg>
);

const PlayIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <polygon points="5 3 19 12 5 21 5 3" />
  </svg>
);

const PauseIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <rect x="6" y="4" width="4" height="16" />
    <rect x="14" y="4" width="4" height="16" />
  </svg>
);

export default Gallery;
