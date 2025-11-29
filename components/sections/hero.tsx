"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight, Heart } from "lucide-react";
import { HeroSlider } from "./hero-slider";

export function Hero() {
  return (
    <section className="relative flex overflow-hidden pt-2 pb-8 bg-white dark:bg-gray-950">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-0 min-h-[50vh] lg:min-h-[60vh]">
          {/* Part 1: Text Section - Left Side (2/5 width) */}
          <div className="lg:col-span-2 flex items-center justify-center lg:justify-start py-6 lg:py-4 relative z-20 bg-white dark:bg-gray-950 lg:bg-transparent">
            <div className="w-full max-w-2xl px-6 lg:px-8 text-center lg:text-left space-y-4">
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
                className="font-heading font-bold text-3xl sm:text-4xl lg:text-5xl xl:text-6xl text-gray-900 dark:text-white leading-tight"
              >
                Welcome To{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-500 to-accent-teal">
                  Swami Vivekanand
                </span>
                <br />
                Sewa Trust
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

          {/* Modern Image Slider - Right Side (3/5 width) */}
          <div className="lg:col-span-3 relative min-h-[350px] lg:min-h-[50vh] py-6 lg:py-4">
            <HeroSlider />
          </div>
        </div>
      </div>
    </section>
  );
}

