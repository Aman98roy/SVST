"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { ArrowLeft, ArrowRight, XCircle, Maximize2, ChevronLeft, ChevronRight } from "lucide-react";

interface EventImageSliderProps {
  images: string[];
}

export function EventImageSlider({ images }: EventImageSliderProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isExpanded, setIsExpanded] = useState(false);
  const [expandedImageIndex, setExpandedImageIndex] = useState(0);

  useEffect(() => {
    if (!isExpanded) return;
    
    const interval = setInterval(() => {
      setExpandedImageIndex((prev) => (prev + 1) % images.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [isExpanded, images.length]);

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const openExpanded = (index: number) => {
    setExpandedImageIndex(index);
    setIsExpanded(true);
  };

  const closeExpanded = () => {
    setIsExpanded(false);
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isExpanded) return;
      if (e.key === "Escape") closeExpanded();
      if (e.key === "ArrowLeft") {
        setExpandedImageIndex((prev) => (prev - 1 + images.length) % images.length);
      }
      if (e.key === "ArrowRight") {
        setExpandedImageIndex((prev) => (prev + 1) % images.length);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isExpanded, images.length]);

  if (images.length === 0) return null;

  return (
    <>
      {/* Main Image Slider - Modern Design */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="relative w-full h-[500px] lg:h-[650px] rounded-3xl overflow-hidden shadow-2xl mb-16 group"
      >
        {/* Animated Border Glow */}
        <div className="absolute -inset-1 bg-gradient-to-r from-primary-500 via-accent-teal to-primary-500 rounded-3xl opacity-0 group-hover:opacity-50 blur-xl transition-opacity duration-500 animate-pulse" />
        
        {/* Inner Glow */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary-500/10 via-transparent to-accent-teal/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, scale: 1.15, x: currentIndex % 2 === 0 ? -20 : 20 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            exit={{ opacity: 0, scale: 0.9, x: currentIndex % 2 === 0 ? 20 : -20 }}
            transition={{ duration: 0.7, ease: [0.4, 0, 0.2, 1] }}
            className="absolute inset-0 cursor-pointer"
            onClick={() => openExpanded(currentIndex)}
          >
            <motion.div
              animate={{ scale: [1, 1.05, 1] }}
              transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
              className="absolute inset-0"
            >
              <Image
                src={images[currentIndex]}
                alt={`Event image ${currentIndex + 1}`}
                fill
                className="object-cover"
                sizes="100vw"
                priority={currentIndex === 0}
              />
            </motion.div>
            {/* Multi-layer Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-br from-primary-500/20 via-transparent to-accent-teal/20" />
          </motion.div>
        </AnimatePresence>

        {/* Navigation Arrows - Modern Design */}
        {images.length > 1 && (
          <>
            <motion.button
              onClick={goToPrevious}
              whileHover={{ scale: 1.1, x: -5 }}
              whileTap={{ scale: 0.9 }}
              className="absolute left-6 top-1/2 -translate-y-1/2 z-20 p-4 bg-white/20 hover:bg-white/30 backdrop-blur-xl rounded-2xl transition-all duration-300 opacity-0 group-hover:opacity-100 shadow-2xl border border-white/30"
              aria-label="Previous image"
            >
              <ChevronLeft className="w-7 h-7 text-white drop-shadow-lg" />
            </motion.button>
            <motion.button
              onClick={goToNext}
              whileHover={{ scale: 1.1, x: 5 }}
              whileTap={{ scale: 0.9 }}
              className="absolute right-6 top-1/2 -translate-y-1/2 z-20 p-4 bg-white/20 hover:bg-white/30 backdrop-blur-xl rounded-2xl transition-all duration-300 opacity-0 group-hover:opacity-100 shadow-2xl border border-white/30"
              aria-label="Next image"
            >
              <ChevronRight className="w-7 h-7 text-white drop-shadow-lg" />
            </motion.button>
          </>
        )}

        {/* Expand Button - Modern Design - Always Visible */}
        <motion.button
          onClick={(e) => {
            e.stopPropagation();
            openExpanded(currentIndex);
          }}
          whileHover={{ scale: 1.1, rotate: 90 }}
          whileTap={{ scale: 0.9 }}
          className="absolute bottom-6 right-6 z-20 p-4 bg-gradient-to-br from-primary-500/80 to-accent-teal/80 hover:from-primary-500 hover:to-accent-teal backdrop-blur-xl rounded-2xl transition-all duration-300 shadow-2xl border border-white/30"
          aria-label="Expand image"
        >
          <Maximize2 className="w-6 h-6 text-white drop-shadow-lg" />
        </motion.button>

        {/* Dots Indicator - Modern Design */}
        {images.length > 1 && (
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex space-x-3 bg-black/30 backdrop-blur-md px-4 py-2 rounded-full border border-white/20">
            {images.map((_, index) => (
              <motion.button
                key={index}
                onClick={() => setCurrentIndex(index)}
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
                className={`rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? "bg-white w-10 h-2 shadow-lg"
                    : "bg-white/50 hover:bg-white/75 w-2 h-2"
                }`}
                aria-label={`Go to image ${index + 1}`}
              />
            ))}
          </div>
        )}
        
        {/* Image Counter */}
        <div className="absolute top-6 right-6 z-20 px-4 py-2 bg-black/40 backdrop-blur-md rounded-full text-white text-sm font-semibold border border-white/20 opacity-0 group-hover:opacity-100 transition-opacity">
          {currentIndex + 1} / {images.length}
        </div>
      </motion.div>

      {/* Expanded Image Modal */}
      <AnimatePresence>
        {isExpanded && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/95 backdrop-blur-sm flex items-center justify-center p-4"
            onClick={closeExpanded}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ type: "spring", damping: 25 }}
              className="relative max-w-7xl max-h-[90vh] w-full h-full"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                onClick={closeExpanded}
                className="absolute top-4 right-4 z-[200] w-16 h-16 bg-red-500 hover:bg-red-600 rounded-full transition-all duration-300 shadow-[0_0_20px_rgba(239,68,68,0.6)] border-4 border-white flex items-center justify-center"
                aria-label="Close"
              >
                <XCircle className="w-8 h-8 text-white" strokeWidth={3} />
              </button>

              {/* Expanded Image */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={expandedImageIndex}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3 }}
                  className="relative w-full h-full rounded-2xl overflow-hidden"
                >
                  <Image
                    src={images[expandedImageIndex]}
                    alt={`Event image ${expandedImageIndex + 1}`}
                    fill
                    className="object-contain"
                    sizes="100vw"
                  />
                </motion.div>
              </AnimatePresence>

              {/* Navigation in Modal */}
              {images.length > 1 && (
                <>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      setExpandedImageIndex((prev) => (prev - 1 + images.length) % images.length);
                    }}
                    className="absolute left-4 top-1/2 -translate-y-1/2 z-[200] w-16 h-16 bg-blue-500 hover:bg-blue-600 rounded-full transition-all duration-300 shadow-[0_0_20px_rgba(59,130,246,0.6)] border-4 border-white flex items-center justify-center"
                    aria-label="Previous image"
                  >
                    <ArrowLeft className="w-8 h-8 text-white" strokeWidth={3} />
                  </button>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      setExpandedImageIndex((prev) => (prev + 1) % images.length);
                    }}
                    className="absolute right-4 top-1/2 -translate-y-1/2 z-[200] w-16 h-16 bg-blue-500 hover:bg-blue-600 rounded-full transition-all duration-300 shadow-[0_0_20px_rgba(59,130,246,0.6)] border-4 border-white flex items-center justify-center"
                    aria-label="Next image"
                  >
                    <ArrowRight className="w-8 h-8 text-white" strokeWidth={3} />
                  </button>

                  {/* Image Counter */}
                  <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-[200] px-6 py-3 bg-gray-900 rounded-full text-white text-lg font-bold border-4 border-white shadow-[0_0_20px_rgba(0,0,0,0.8)]">
                    {expandedImageIndex + 1} / {images.length}
                  </div>
                </>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

