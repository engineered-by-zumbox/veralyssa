import React, { useState } from "react";
import { X, ChevronLeft, ChevronRight, ZoomIn } from "lucide-react";

const ImageViewer = ({ images, onClose, initialIndex = 0 }) => {
  const [currentIndex, setCurrentIndex] = useState(initialIndex);
  const [isZoomed, setIsZoomed] = useState(false);

  const handleNext = (e) => {
    e.stopPropagation();
    setCurrentIndex((prev) => (prev + 1) % images.length);
    setIsZoomed(false);
  };

  const handlePrev = (e) => {
    e.stopPropagation();
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
    setIsZoomed(false);
  };

  const toggleZoom = (e) => {
    e.stopPropagation();
    setIsZoomed(!isZoomed);
  };

  return (
    <div className="fixed inset-0 bg-black/90 z-[70000] backdrop-blur-sm">
      <div className="absolute inset-0 flex items-center justify-center">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-white hover:text-gray-300 z-50"
        >
          <X size={32} />
        </button>

        <button
          onClick={handlePrev}
          className="absolute left-4 text-white hover:text-gray-300 z-50"
        >
          <ChevronLeft size={32} />
        </button>

        <button
          onClick={handleNext}
          className="absolute right-4 text-white hover:text-gray-300 z-50"
        >
          <ChevronRight size={32} />
        </button>

        <div className="relative w-full h-full flex items-center justify-center">
          <img
            src={images[currentIndex].url}
            alt={images[currentIndex].caption}
            className={`max-h-[90vh] max-w-[90vw] object-contain transition-transform duration-300 ${
              isZoomed ? "scale-150" : "scale-100"
            }`}
          />
          <button
            onClick={toggleZoom}
            className="absolute bottom-4 right-4 text-white hover:text-gray-300 z-50"
          >
            <ZoomIn size={24} />
          </button>
        </div>

        {images[currentIndex].caption && (
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white text-xl font-medium bg-black/50 px-6 py-2 rounded-full">
            {images[currentIndex].caption}
          </div>
        )}
      </div>
    </div>
  );
};

export default ImageViewer;
