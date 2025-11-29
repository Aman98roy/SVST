"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  FlaskConical,
  GraduationCap,
  Microscope,
  Users,
  Calendar,
  Image as ImageIcon,
} from "lucide-react";

const services = [
  {
    icon: FlaskConical,
    title: "Vasundhara Soil & Water Testing Laboratory",
    description:
      "Comprehensive soil and water testing services for farmers to optimize agricultural productivity.",
    href: "/activities/vasundhara",
    image: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=800&h=600&fit=crop",
  },
  {
    icon: GraduationCap,
    title: "District Level Farmers Training",
    description:
      "Empowering farmers with modern agricultural techniques and sustainable farming practices.",
    href: "/activities/farmers-training",
    image: "https://images.unsplash.com/photo-1500937386664-56d1dfef3854?w=800&h=600&fit=crop",
  },
  {
    icon: Microscope,
    title: "Biological Input Laboratory",
    description:
      "Research and development of organic farming inputs and biofertilizers.",
    href: "/activities/biological-input",
    image: "https://images.unsplash.com/photo-1582719508461-905c673771fd?w=800&h=600&fit=crop",
  },
  {
    icon: Users,
    title: "DAESI & CCIM",
    description:
      "Training programs for agricultural extension services and community development.",
    href: "/activities/daesi-ccim",
    image: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=800&h=600&fit=crop",
  },
  {
    icon: Calendar,
    title: "Events & Programs",
    description:
      "Organizing cultural programs, national celebrations, and community events.",
    href: "/events",
    image: "https://images.unsplash.com/photo-1511578314322-379afb476865?w=800&h=600&fit=crop",
  },
  {
    icon: ImageIcon,
    title: "Gallery & Media",
    description:
      "Showcasing our activities, events, and impact through visual storytelling.",
    href: "/gallery",
    image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800&h=600&fit=crop",
  },
];

export function Services() {
  return (
    <section className="py-24 bg-gradient-to-b from-white via-gray-50/50 to-white dark:from-gray-900 dark:via-gray-950 dark:to-gray-900 relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5 dark:opacity-10" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <motion.span
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-block px-5 py-2.5 bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 rounded-full text-sm font-semibold mb-6 tracking-wide uppercase"
          >
            What We Do
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-heading font-bold text-5xl sm:text-6xl lg:text-7xl text-gray-900 dark:text-white mb-6 leading-tight tracking-tight"
          >
            Our Activities
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-xl sm:text-2xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed font-light"
          >
            Comprehensive programs designed to empower communities and promote
            sustainable development
          </motion.p>
        </motion.div>

        {/* Activities Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6, type: "spring" }}
                className="group"
              >
                {/* Modern Card with Glassmorphism */}
                <div className="relative h-full flex flex-col bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm rounded-3xl overflow-hidden border border-gray-200/50 dark:border-gray-700/50 shadow-lg hover:shadow-2xl transition-all duration-500 group-hover:-translate-y-2">
                  {/* Background Gradient on Hover */}
                  <div className="absolute inset-0 bg-gradient-to-br from-primary-500/5 to-accent-teal/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  {/* Image Section */}
                  <div className="relative h-56 w-full overflow-hidden">
                    <motion.div
                      whileHover={{ scale: 1.15 }}
                      transition={{ duration: 0.7, ease: "easeOut" }}
                      className="h-full w-full"
                    >
                      <Image
                        src={service.image}
                        alt={service.title}
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      />
                    </motion.div>
                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                    
                    {/* Icon Badge */}
                    <motion.div
                      initial={{ scale: 0, rotate: -180 }}
                      whileInView={{ scale: 1, rotate: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 + 0.3, type: "spring" }}
                      className="absolute top-5 right-5 w-14 h-14 bg-white/20 backdrop-blur-md rounded-2xl flex items-center justify-center border border-white/30 shadow-xl group-hover:bg-white/30 group-hover:scale-110 transition-all duration-300"
                    >
                      <Icon className="w-7 h-7 text-white drop-shadow-lg" />
                    </motion.div>
                  </div>

                  {/* Content Section */}
                  <div className="p-6 lg:p-8 relative z-10 flex flex-col h-full min-h-[280px]">
                    {/* Title */}
                    <motion.h3
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 + 0.4 }}
                      className="font-heading font-bold text-xl sm:text-2xl text-gray-900 dark:text-white mb-4 leading-tight tracking-tight line-clamp-2"
                    >
                      {service.title}
                    </motion.h3>
                    
                    {/* Description */}
                    <motion.p
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 + 0.5 }}
                      className="text-gray-600 dark:text-gray-300 mb-6 flex-1 text-base sm:text-lg leading-relaxed font-normal line-clamp-3"
                    >
                      {service.description}
                    </motion.p>
                    
                    {/* Button - Always at bottom */}
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 + 0.6 }}
                      className="mt-auto"
                    >
                      <Button 
                        variant="outline" 
                        size="lg" 
                        asChild 
                        className="w-full group/btn border-2 hover:border-primary-500 hover:bg-primary-500 hover:text-white transition-all duration-300 font-semibold"
                      >
                        <Link href={service.href}>
                          Learn More
                          <motion.span
                            className="inline-block ml-2"
                            whileHover={{ x: 5 }}
                            transition={{ type: "spring", stiffness: 400 }}
                          >
                            →
                          </motion.span>
                        </Link>
                      </Button>
                    </motion.div>
                  </div>

                  {/* Decorative Corner Element */}
                  <div className="absolute top-0 left-0 w-32 h-32 bg-gradient-to-br from-primary-500/10 to-transparent rounded-br-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>

                {/* Hover Glow Effect */}
                <div className="absolute -inset-0.5 bg-gradient-to-r from-primary-500/20 to-accent-teal/20 rounded-3xl opacity-0 group-hover:opacity-30 blur-xl transition-opacity duration-500 -z-10" />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

