"use client";

import { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { XCircle, ArrowLeft, ArrowRight, ZoomIn } from "lucide-react";

interface ImageModalProps {
  isOpen: boolean;
  onClose: () => void;
  images: string[];
  currentIndex: number;
  onNavigate?: (index: number) => void;
  showNavigation?: boolean;
}

export function ImageModal({
  isOpen,
  onClose,
  images,
  currentIndex,
  onNavigate,
  showNavigation = true,
}: ImageModalProps) {
  const currentImage = images[currentIndex];

  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      } else if (showNavigation && onNavigate) {
        if (e.key === "ArrowLeft") {
          onNavigate((currentIndex - 1 + images.length) % images.length);
        } else if (e.key === "ArrowRight") {
          onNavigate((currentIndex + 1) % images.length);
        }
      }
    };

    // Prevent body scroll when modal is open
    document.body.style.overflow = "hidden";

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [isOpen, currentIndex, images.length, onNavigate, showNavigation, onClose]);

  if (!isOpen || !currentImage) return null;

  const handlePrevious = () => {
    if (onNavigate && showNavigation) {
      onNavigate((currentIndex - 1 + images.length) % images.length);
    }
  };

  const handleNext = () => {
    if (onNavigate && showNavigation) {
      onNavigate((currentIndex + 1) % images.length);
    }
  };

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.2 }}
        className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-md flex items-center justify-center p-4"
        onClick={onClose}
      >
        {/* Close Button */}
        <motion.button
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          transition={{ delay: 0.1 }}
          onClick={onClose}
          className="absolute top-4 right-4 z-[200] w-16 h-16 bg-red-500 hover:bg-red-600 rounded-full transition-all duration-300 shadow-[0_0_20px_rgba(239,68,68,0.6)] border-4 border-white flex items-center justify-center"
          aria-label="Close"
        >
          <XCircle className="w-8 h-8 text-white" strokeWidth={3} />
        </motion.button>

        {/* Image Container */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.8, opacity: 0 }}
          transition={{ type: "spring", damping: 25, stiffness: 300 }}
          className="relative max-w-7xl max-h-[95vh] w-full h-full flex items-center justify-center"
          onClick={(e) => e.stopPropagation()}
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.3 }}
              className="relative w-full h-full rounded-2xl overflow-hidden"
            >
              <Image
                src={currentImage}
                alt={`Image ${currentIndex + 1}`}
                fill
                className="object-contain"
                sizes="100vw"
                priority
              />
            </motion.div>
          </AnimatePresence>

          {/* Navigation Arrows */}
          {showNavigation && images.length > 1 && (
            <>
              <motion.button
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ delay: 0.2 }}
                onClick={(e) => {
                  e.stopPropagation();
                  handlePrevious();
                }}
                className="absolute left-4 top-1/2 -translate-y-1/2 z-[200] w-16 h-16 bg-blue-500 hover:bg-blue-600 rounded-full transition-all duration-300 shadow-[0_0_20px_rgba(59,130,246,0.6)] border-4 border-white flex items-center justify-center"
                aria-label="Previous image"
              >
                <ArrowLeft className="w-8 h-8 text-white" strokeWidth={3} />
              </motion.button>

              <motion.button
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                transition={{ delay: 0.2 }}
                onClick={(e) => {
                  e.stopPropagation();
                  handleNext();
                }}
                className="absolute right-4 top-1/2 -translate-y-1/2 z-[200] w-16 h-16 bg-blue-500 hover:bg-blue-600 rounded-full transition-all duration-300 shadow-[0_0_20px_rgba(59,130,246,0.6)] border-4 border-white flex items-center justify-center"
                aria-label="Next image"
              >
                <ArrowRight className="w-8 h-8 text-white" strokeWidth={3} />
              </motion.button>
            </>
          )}

          {/* Image Counter */}
          {images.length > 1 && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ delay: 0.3 }}
              className="absolute bottom-6 left-1/2 -translate-x-1/2 z-30 px-4 py-2 bg-white/10 backdrop-blur-xl rounded-full text-white text-sm font-medium border border-white/20 shadow-2xl"
            >
              {currentIndex + 1} / {images.length}
            </motion.div>
          )}
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}

