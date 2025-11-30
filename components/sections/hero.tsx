"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight, Heart } from "lucide-react";
import { HeroSlider } from "./hero-slider";

// Typewriter effect component with animated characters
function TypewriterHeading() {
  // Define the full text
  const fullText = "Welcome To Swami Vivekanand Sewa Trust";
  
  // Automatically calculate optimal break point at word boundary
  const calculateBreakPoint = (text: string): number => {
    const words = text.split(' ');
    const totalLength = text.length;
    const midPoint = totalLength / 2;
    
    // Find all word boundary positions
    let currentPos = 0;
    const wordBoundaries: number[] = [];
    
    words.forEach((word, index) => {
      currentPos += word.length;
      if (index < words.length - 1) {
        wordBoundaries.push(currentPos); // Position after the word (before space)
        currentPos += 1; // Add space
      }
    });
    
    // Find the word boundary closest to the middle
    let bestBreak = wordBoundaries[0];
    let minDistance = Math.abs(wordBoundaries[0] - midPoint);
    
    wordBoundaries.forEach(boundary => {
      const distance = Math.abs(boundary - midPoint);
      if (distance < minDistance) {
        minDistance = distance;
        bestBreak = boundary;
      }
    });
    
    return bestBreak;
  };
  
  const breakIndex = calculateBreakPoint(fullText);
  
  const [displayedLine1, setDisplayedLine1] = useState("");
  const [displayedLine2, setDisplayedLine2] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showCursor, setShowCursor] = useState(true);
  const [isTypingLine2, setIsTypingLine2] = useState(false);

  const totalLength = fullText.length;

  useEffect(() => {
    if (currentIndex >= totalLength) {
      // Hide cursor after typing is complete
      const timer = setTimeout(() => setShowCursor(false), 800);
      return () => clearTimeout(timer);
    }

    const timer = setTimeout(() => {
      if (currentIndex < breakIndex) {
        // Typing first line
        setDisplayedLine1(fullText.slice(0, currentIndex + 1).trim());
      } else if (currentIndex === breakIndex) {
        // Start second line
        setIsTypingLine2(true);
        setDisplayedLine2("");
      } else {
        // Typing second line
        const line2Index = currentIndex - breakIndex;
        setDisplayedLine2(fullText.slice(breakIndex, currentIndex + 1).trim());
      }
      setCurrentIndex((prev) => prev + 1);
    }, 70); // Typing speed

    return () => clearTimeout(timer);
  }, [currentIndex, fullText, breakIndex, totalLength]);

  // Automatically detect gradient text - "Swami Vivekanand"
  const beforeGradient = "Welcome To ";
  const gradientText = "Swami Vivekanand";
  
  // Determine which parts are in gradient based on current display
  const getGradientRange = (text: string, isLine1: boolean) => {
    if (isLine1) {
      // For line 1, check if gradient text starts here
      const gradientStart = beforeGradient.length;
      const gradientEnd = Math.min(gradientStart + gradientText.length, text.length);
      return { start: gradientStart, end: gradientEnd };
    } else {
      // For line 2, check if gradient text continues here
      const line1Text = fullText.slice(0, breakIndex).trim();
      const gradientStartInFull = beforeGradient.length;
      const gradientEndInFull = gradientStartInFull + gradientText.length;
      
      if (gradientEndInFull > breakIndex) {
        // Gradient continues to line 2
        const gradientStartInLine2 = 0;
        const gradientEndInLine2 = Math.min(gradientEndInFull - breakIndex, text.length);
        return { start: gradientStartInLine2, end: gradientEndInLine2 };
      }
      return { start: -1, end: -1 }; // No gradient on this line
    }
  };

  const renderAnimatedChar = (char: string, index: number, isGradient: boolean, lineIndex: number) => {
    let displayChar = char;
    if (char === ' ') {
      displayChar = '\u00A0'; // Non-breaking space
    }
    
    return (
      <motion.span
        key={`${lineIndex}-${index}`}
        initial={{ opacity: 0, scale: 0.5, y: -20, rotateX: -90 }}
        animate={{ 
          opacity: 1, 
          scale: 1, 
          y: 0, 
          rotateX: 0,
          textShadow: [
            "0 0 0px rgba(0,0,0,0)",
            "0 0 10px rgba(59, 130, 246, 0.5)",
            "0 0 0px rgba(0,0,0,0)"
          ]
        }}
        transition={{
          duration: 0.4,
          ease: [0.34, 1.56, 0.64, 1], // Custom bounce easing
          opacity: { duration: 0.2 },
        }}
        className={isGradient ? "text-transparent bg-clip-text bg-gradient-to-r from-primary-500 to-accent-teal whitespace-nowrap" : ""}
        style={{ display: 'inline-block', transformStyle: 'preserve-3d' }}
      >
        {displayChar}
      </motion.span>
    );
  };

  const gradientRangeLine1 = getGradientRange(displayedLine1, true);
  const gradientRangeLine2 = getGradientRange(displayedLine2, false);

  return (
    <>
      {/* First Line - Inline block to keep words together */}
      <span className="inline-block" style={{ whiteSpace: 'nowrap' }}>
        {displayedLine1.split('').map((char, index) => {
          // Check if this character is part of gradient
          const isInGradient = index >= gradientRangeLine1.start && index < gradientRangeLine1.end;
          return renderAnimatedChar(char, index, isInGradient, 1);
        })}
      </span>
      
      {/* Line Break */}
      {isTypingLine2 && <br />}
      
      {/* Second Line - Inline block to keep words together */}
      {isTypingLine2 && (
        <span className="inline-block" style={{ whiteSpace: 'nowrap' }}>
          {displayedLine2.split('').map((char, index) => {
            // Check if this character is part of gradient
            const isInGradient = gradientRangeLine2.start >= 0 && 
                                index >= gradientRangeLine2.start && 
                                index < gradientRangeLine2.end;
            return renderAnimatedChar(char, index, isInGradient, 2);
          })}
        </span>
      )}
      
      {/* Cursor */}
      {showCursor && currentIndex < totalLength && (
        <motion.span
          className="inline-block w-0.5 h-[1em] bg-primary-500 ml-1"
          animate={{
            opacity: [1, 0, 1],
            scale: [1, 1.2, 1],
            boxShadow: [
              "0 0 0px rgba(59, 130, 246, 0)",
              "0 0 10px rgba(59, 130, 246, 0.8)",
              "0 0 0px rgba(59, 130, 246, 0)"
            ]
          }}
          transition={{
            duration: 0.8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      )}
    </>
  );
}

export function Hero() {
  return (
    <section className="relative flex overflow-hidden pt-2 pb-8 bg-white dark:bg-gray-950">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-0 min-h-[40vh] lg:min-h-[45vh]">
          {/* Part 1: Text Section - Left Side (3/5 width) */}
          <div className="lg:col-span-3 flex items-center justify-center lg:justify-start py-4 lg:py-2 relative z-20 bg-white dark:bg-gray-950 lg:bg-transparent">
            <div className="w-full max-w-3xl px-6 lg:px-8 text-center lg:text-left space-y-3">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
              >
                <motion.span
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.2, duration: 0.5 }}
                  className="inline-flex items-center space-x-2 px-3 py-1.5 bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 rounded-full text-xs sm:text-sm font-medium"
                >
                  <Heart className="w-3 h-3 sm:w-4 sm:h-4" />
                  <span>Empowering Communities Since 2010</span>
                </motion.span>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3, duration: 0.6 }}
                className="font-heading font-bold text-2xl sm:text-3xl lg:text-4xl xl:text-5xl text-gray-900 dark:text-white leading-tight"
                style={{ wordBreak: 'keep-all', overflowWrap: 'normal' }}
              >
                <TypewriterHeading />
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5, duration: 0.6 }}
                className="text-base sm:text-lg lg:text-lg text-gray-600 dark:text-gray-300 leading-relaxed"
              >
                Swami Vivekanand Sewa Trust is a non-profit NGO incorporated on the _, under the _.
              </motion.p>

              <motion.p
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.6, duration: 0.6 }}
                className="text-sm sm:text-base lg:text-base text-gray-600 dark:text-gray-300 leading-relaxed"
              >
                The organization started with the hope to bring key development activities for the underdeveloped and deprived community in our region basically. It is always being involved with the community in a very participatory way and gaining good contributions from the people by way of cash, kindness, and selfless involvement somehow. But the management itself realized that as the platform has been able to draw the good faith of the people of its far surrounding and based on that to keep the faith of people sustainable as a prominent key facilitator, the governing body itself decided & started its own tiny income.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.7, duration: 0.6 }}
                className="flex flex-col sm:flex-row items-center lg:items-start gap-4 pt-2"
              >
                <Button size="lg" asChild>
                  <Link href="/donate">
                    Donate Now
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Link>
                </Button>
                <Button variant="outline" size="lg" asChild>
                  <Link href="/about">Learn More</Link>
                </Button>
              </motion.div>
            </div>
          </div>

          {/* Modern Image Slider - Right Side (2/5 width) */}
          <div className="lg:col-span-2 relative min-h-[300px] lg:min-h-[45vh] py-4 lg:py-2">
            <HeroSlider />
          </div>
        </div>
      </div>
    </section>
  );
}

