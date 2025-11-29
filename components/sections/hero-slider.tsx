"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence, useMotionValue, useTransform } from "framer-motion";
import { ChevronLeft, ChevronRight, Play, Pause } from "lucide-react";

// Hero images array - update this to match images in public/images/hero/
// Images are served from public/images/hero/ folder
// To add images: Copy them from assests/Hero/ to public/images/hero/
const heroImages = [
  "/images/hero/image1.jpg",
  "/images/hero/image2.jpg",
  "/images/hero/image3.jpg",
  "/images/hero/image4.jpg",
  "/images/hero/image5.jpg",
  // Add more images here as needed:
  // "/images/hero/Tree-Plantation-3.jpg",
].filter(Boolean); // Remove any undefined/null entries

const slideVariants = {
  enter: (direction: number) => ({
    x: direction > 0 ? 1000 : -1000,
    opacity: 0,
    scale: 0.8,
  }),
  center: {
    zIndex: 1,
    x: 0,
    opacity: 1,
    scale: 1,
  },
  exit: (direction: number) => ({
    zIndex: 0,
    x: direction < 0 ? 1000 : -1000,
    opacity: 0,
    scale: 0.8,
  }),
};

const swipeConfidenceThreshold = 10000;
const swipePower = (offset: number, velocity: number) => {
  return Math.abs(offset) * velocity;
};

export function HeroSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [imagesLoaded, setImagesLoaded] = useState<boolean[]>(
    new Array(heroImages.length).fill(false)
  );

  useEffect(() => {
    // Preload all images
    heroImages.forEach((src, index) => {
      const img = new window.Image();
      img.src = src;
      img.onload = () => {
        setImagesLoaded((prev) => {
          const newState = [...prev];
          newState[index] = true;
          return newState;
        });
      };
    });
  }, []);

  useEffect(() => {
    if (!isAutoPlaying) return;
    
    const interval = setInterval(() => {
      setDirection(1);
      setCurrentIndex((prev) => (prev + 1) % heroImages.length);
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const goToSlide = useCallback((index: number) => {
    const newDirection = index > currentIndex ? 1 : -1;
    setDirection(newDirection);
    setCurrentIndex(index);
  }, [currentIndex]);

  const goToPrevious = useCallback(() => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev - 1 + heroImages.length) % heroImages.length);
  }, []);

  const goToNext = useCallback(() => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % heroImages.length);
  }, []);

  const paginate = useCallback((newDirection: number) => {
    if (newDirection === 1) {
      goToNext();
    } else {
      goToPrevious();
    }
  }, [goToNext, goToPrevious]);

  return (
    <div className="relative w-full h-full rounded-3xl overflow-hidden shadow-soft-lg hero-slider group">
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent z-10 pointer-events-none" />
      
      <div className="relative w-full h-full">
        <AnimatePresence initial={false} custom={direction} mode="wait">
          <motion.div
            key={currentIndex}
            custom={direction}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{
              x: { type: "spring", stiffness: 300, damping: 30 },
              opacity: { duration: 0.4 },
              scale: { duration: 0.4 },
            }}
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={1}
            onDragEnd={(e, { offset, velocity }) => {
              const swipe = swipePower(offset.x, velocity.x);

              if (swipe < -swipeConfidenceThreshold) {
                goToNext();
              } else if (swipe > swipeConfidenceThreshold) {
                goToPrevious();
              }
            }}
            className="absolute inset-0 w-full h-full"
          >
            <motion.img
              src={heroImages[currentIndex]}
              alt={`Hero image ${currentIndex + 1}`}
              className="w-full h-full object-cover"
              style={{
                backfaceVisibility: "hidden",
                transform: "translateZ(0)",
                WebkitTransform: "translateZ(0)",
              }}
              loading={currentIndex === 0 ? "eager" : "lazy"}
              initial={{ scale: 1.1 }}
              animate={{ scale: 1 }}
              transition={{ duration: 8, ease: "easeOut" }}
            />
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Navigation Arrows with Hover Effects */}
      <motion.button
        onClick={goToPrevious}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-20 p-3 bg-white/10 hover:bg-white/20 backdrop-blur-md rounded-full transition-all duration-300 opacity-0 group-hover:opacity-100"
        aria-label="Previous slide"
        whileHover={{ scale: 1.1, x: -2 }}
        whileTap={{ scale: 0.95 }}
      >
        <ChevronLeft className="w-6 h-6 text-white" />
      </motion.button>
      <motion.button
        onClick={goToNext}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-20 p-3 bg-white/10 hover:bg-white/20 backdrop-blur-md rounded-full transition-all duration-300 opacity-0 group-hover:opacity-100"
        aria-label="Next slide"
        whileHover={{ scale: 1.1, x: 2 }}
        whileTap={{ scale: 0.95 }}
      >
        <ChevronRight className="w-6 h-6 text-white" />
      </motion.button>

      {/* Play/Pause Button */}
      <motion.button
        onClick={() => setIsAutoPlaying(!isAutoPlaying)}
        className="absolute top-4 right-4 z-20 p-2 bg-white/10 hover:bg-white/20 backdrop-blur-md rounded-full transition-all duration-300 opacity-0 group-hover:opacity-100"
        aria-label={isAutoPlaying ? "Pause slideshow" : "Play slideshow"}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
      >
        {isAutoPlaying ? (
          <Pause className="w-5 h-5 text-white" />
        ) : (
          <Play className="w-5 h-5 text-white" />
        )}
      </motion.button>

      {/* Modern Dots Indicator with Progress */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex items-center space-x-3">
        {heroImages.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className="relative group"
            aria-label={`Go to slide ${index + 1}`}
          >
            <motion.div
              className={`h-2 rounded-full transition-all duration-300 ${
                index === currentIndex
                  ? "bg-white w-8"
                  : "bg-white/40 hover:bg-white/60 w-2"
              }`}
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
            />
            {index === currentIndex && isAutoPlaying && (
              <motion.div
                className="absolute inset-0 bg-white rounded-full"
                initial={{ width: 0 }}
                animate={{ width: "100%" }}
                transition={{ duration: 5, ease: "linear" }}
                onAnimationComplete={() => {
                  // Animation completes when slide changes
                }}
              />
            )}
          </button>
        ))}
      </div>

      {/* Slide Counter */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="absolute bottom-6 right-4 z-20 px-3 py-1.5 bg-black/30 backdrop-blur-md rounded-full text-white text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300"
      >
        {currentIndex + 1} / {heroImages.length}
      </motion.div>
    </div>
  );
}

