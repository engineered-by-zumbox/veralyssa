"use client";

import React, { useState, useEffect, useRef } from "react";
import { cn } from "@/lib/utils";
import Image from "next/image";

const Gallery = ({ images, initialIndex = 0, type }) => {
  const [open, setOpen] = useState(false);
  const [index, setIndex] = useState(initialIndex);
  const [scale, setScale] = useState(1);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);
  const [dragStart, setDragStart] = useState({ x: 0, y: 0 });
  const [touchStart, setTouchStart] = useState(0);
  const [showCaptions, setShowCaptions] = useState(true);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [isSlideshow, setIsSlideshow] = useState(false);
  const slideshowRef = useRef(null);

  // Close lightbox with Escape key
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (!open) return;

      switch (e.key) {
        case "Escape":
          if (isFullscreen) {
            exitFullscreen();
          } else {
            closeLightbox();
          }
          break;
        case "ArrowLeft":
          showPreviousImage();
          break;
        case "ArrowRight":
          showNextImage();
          break;
        case "+":
          zoomIn();
          break;
        case "-":
          zoomOut();
          break;
        case "f":
          toggleFullscreen();
          break;
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [open, index, isFullscreen]);

  // Reset zoom and position when changing images
  useEffect(() => {
    setScale(1);
    setPosition({ x: 0, y: 0 });
  }, [index]);

  // Slideshow functionality
  useEffect(() => {
    if (isSlideshow) {
      slideshowRef.current = setInterval(() => {
        setIndex((prevIndex) => (prevIndex + 1) % images.length);
      }, 5000);
    } else if (slideshowRef.current) {
      clearInterval(slideshowRef.current);
    }

    return () => {
      if (slideshowRef.current) {
        clearInterval(slideshowRef.current);
      }
    };
  }, [isSlideshow, images.length]);

  // Fullscreen API handling
  useEffect(() => {
    const handleFullscreenChange = () => {
      if (!document.fullscreenElement) {
        setIsFullscreen(false);
      }
    };

    document.addEventListener("fullscreenchange", handleFullscreenChange);
    return () =>
      document.removeEventListener("fullscreenchange", handleFullscreenChange);
  }, []);

  const openLightbox = (imageIndex) => {
    setIndex(imageIndex);
    setOpen(true);
    // Prevent body scrolling when lightbox is open
    document.body.style.overflow = "hidden";
  };

  const closeLightbox = () => {
    setOpen(false);
    document.body.style.overflow = "auto";
    if (isFullscreen) {
      exitFullscreen();
    }
    if (isSlideshow) {
      setIsSlideshow(false);
    }
  };

  const showPreviousImage = () => {
    setIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const showNextImage = () => {
    setIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  // Zoom functions
  const zoomIn = () => {
    setScale((prevScale) => Math.min(prevScale + 0.25, 3));
  };

  const zoomOut = () => {
    setScale((prevScale) => Math.max(prevScale - 0.25, 1));
  };

  const resetZoom = () => {
    setScale(1);
    setPosition({ x: 0, y: 0 });
  };

  // Fullscreen handling
  const toggleFullscreen = () => {
    if (!isFullscreen) {
      const element = document.querySelector(".lightbox-container");
      if (element && element.requestFullscreen) {
        element
          .requestFullscreen()
          .then(() => {
            setIsFullscreen(true);
          })
          .catch((err) => {
            console.error(
              `Error attempting to enable fullscreen: ${err.message}`
            );
          });
      }
    } else {
      exitFullscreen();
    }
  };

  const exitFullscreen = () => {
    if (document.fullscreenElement && document.exitFullscreen) {
      document
        .exitFullscreen()
        .then(() => {
          setIsFullscreen(false);
        })
        .catch((err) => {
          console.error(`Error attempting to exit fullscreen: ${err.message}`);
        });
    }
  };

  // Slideshow toggle
  const toggleSlideshow = () => {
    setIsSlideshow(!isSlideshow);
  };

  // Mouse drag handling for panning when zoomed
  const handleMouseDown = (e) => {
    if (scale > 1) {
      setIsDragging(true);
      setDragStart({
        x: e.clientX - position.x,
        y: e.clientY - position.y,
      });
    }
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;

    setPosition({
      x: e.clientX - dragStart.x,
      y: e.clientY - dragStart.y,
    });
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  // Touch event handlers for swipe
  const handleTouchStart = (e) => {
    setTouchStart(e.touches[0].clientX);
  };

  const handleTouchEnd = (e) => {
    if (scale > 1) return; // Don't swipe when zoomed in

    const touchEnd = e.changedTouches[0].clientX;
    const diff = touchStart - touchEnd;

    // Determine swipe direction if the swipe is significant
    if (Math.abs(diff) > 50) {
      if (diff > 0) {
        // Swiped left - next image
        showNextImage();
      } else {
        // Swiped right - previous image
        showPreviousImage();
      }
    }
  };

  // Handle wheel events for zooming
  const handleWheel = (e) => {
    if (e.ctrlKey) {
      e.preventDefault();
      if (e.deltaY < 0) {
        zoomIn();
      } else {
        zoomOut();
      }
    }
  };

  // Toggle captions visibility
  const toggleCaptions = () => {
    setShowCaptions(!showCaptions);
  };

  return (
    <>
      {/* Gallery Grid - Using the existing structure */}
      <div
        className={cn(
          "mt-10 min-h-[540px]",
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

      {/* Custom Lightbox */}
      {open && (
        <div
          className="fixed inset-0 z-[9999] bg-black/90 lightbox-container"
          onMouseUp={handleMouseUp}
          onMouseLeave={handleMouseUp}
          onWheel={handleWheel}
        >
          {/* Main image container */}
          <div
            className="w-full h-full flex items-center justify-center"
            onMouseMove={handleMouseMove}
          >
            <div
              className={`relative ${scale > 1 ? "cursor-grab" : ""} ${
                isDragging ? "cursor-grabbing" : ""
              }`}
              style={{
                transform: `translate(${position.x}px, ${position.y}px) scale(${scale})`,
                transition: isDragging ? "none" : "transform 0.3s ease",
              }}
              onMouseDown={handleMouseDown}
              onTouchStart={handleTouchStart}
              onTouchEnd={handleTouchEnd}
            >
              <img
                src={images[index]?.url}
                alt={images[index]?.caption || ""}
                className="max-h-[calc(100vh-200px)] max-w-full object-contain select-none"
                draggable={false}
                onClick={(e) => e.stopPropagation()}
              />
            </div>

            {/* Image Counter */}
            <div className="absolute top-4 left-4 px-3 py-1 bg-black/50 text-white rounded text-sm">
              {index + 1} / {images?.length}
            </div>

            {/* Control Buttons */}
            <div className="absolute top-4 right-4 flex space-x-2">
              {/* Zoom Controls */}
              <button
                className="p-2 bg-black/50 hover:bg-black/70 text-white rounded-full transition-colors"
                onClick={zoomIn}
                aria-label="Zoom In"
              >
                <ZoomInIcon />
              </button>
              <button
                className="p-2 bg-black/50 hover:bg-black/70 text-white rounded-full transition-colors"
                onClick={zoomOut}
                aria-label="Zoom Out"
              >
                <ZoomOutIcon />
              </button>
              <button
                className="p-2 bg-black/50 hover:bg-black/70 text-white rounded-full transition-colors"
                onClick={resetZoom}
                aria-label="Reset Zoom"
              >
                <ResetIcon />
              </button>
              <button
                className="p-2 bg-black/50 hover:bg-black/70 text-white rounded-full transition-colors"
                onClick={toggleFullscreen}
                aria-label="Toggle Fullscreen"
              >
                <FullscreenIcon />
              </button>
              <button
                className="p-2 bg-black/50 hover:bg-black/70 text-white rounded-full transition-colors"
                onClick={toggleSlideshow}
                aria-label="Toggle Slideshow"
              >
                {isSlideshow ? <PauseIcon /> : <PlayIcon />}
              </button>
              <button
                className="p-2 bg-black/50 hover:bg-black/70 text-white rounded-full transition-colors"
                onClick={toggleCaptions}
                aria-label="Toggle Captions"
              >
                <CaptionIcon />
              </button>
              <button
                className="p-2 bg-black/50 hover:bg-black/70 text-white rounded-full transition-colors"
                onClick={closeLightbox}
                aria-label="Close"
              >
                <CloseIcon />
              </button>
            </div>

            {/* Navigation Buttons */}
            <button
              className="absolute left-4 top-1/2 -translate-y-1/2 p-3 bg-black/50 hover:bg-black/70 text-white rounded-full transition-colors"
              onClick={showPreviousImage}
              aria-label="Previous Image"
            >
              <ChevronLeftIcon />
            </button>
            <button
              className="absolute right-4 top-1/2 -translate-y-1/2 p-3 bg-black/50 hover:bg-black/70 text-white rounded-full transition-colors"
              onClick={showNextImage}
              aria-label="Next Image"
            >
              <ChevronRightIcon />
            </button>

            {/* Captions */}
            {showCaptions && (
              <div className="absolute bottom-20 left-0 right-0 bg-black/50 text-white py-4 px-6 text-center">
                {images[index]?.caption && (
                  <h3 className="text-xl font-semibold mb-2">
                    {images[index].caption}
                  </h3>
                )}
                {images[index]?.description && (
                  <p className="text-sm">{images[index].description}</p>
                )}
              </div>
            )}

            {/* Thumbnails */}
            <div className="absolute bottom-0 left-0 right-0 bg-black/50 py-3 px-4 overflow-x-auto no-scrollbar">
              <div className="flex space-x-2 justify-center">
                {images.map((img, idx) => (
                  <div
                    key={idx}
                    className={`relative w-20 h-16 cursor-pointer rounded overflow-hidden transition-all ${
                      idx === index
                        ? "border-2 border-white scale-105"
                        : "opacity-70 hover:opacity-100"
                    }`}
                    onClick={() => setIndex(idx)}
                  >
                    <Image
                      src={img.url}
                      alt={img?.caption || ""}
                      fill
                      className="object-cover"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

// Custom Icons - reusing your existing ones
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

const CaptionIcon = () => (
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
    <rect x="3" y="5" width="18" height="14" rx="2" />
    <line x1="3" y1="17" x2="21" y2="17" />
  </svg>
);

const ResetIcon = () => (
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
    <path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8" />
    <path d="M3 3v5h5" />
  </svg>
);

export default Gallery;
