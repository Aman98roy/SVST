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
    <section className="pt-8 pb-12 bg-white dark:bg-gray-900 relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-heading font-bold text-3xl sm:text-4xl lg:text-5xl text-gray-900 dark:text-white mb-4"
          >
            Our Activities
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto text-center"
          >
            Comprehensive programs designed to empower communities and promote sustainable development
          </motion.p>
        </motion.div>

        {/* Activities Grid */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
        >
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{
                  y: -8,
                  transition: { duration: 0.3, ease: "easeOut" },
                }}
                className="group bg-white dark:bg-gray-800 rounded-2xl border border-gray-100 dark:border-gray-700 hover:border-primary-200 dark:hover:border-primary-600 overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300"
              >
                {/* Image Section */}
                <div className="relative h-48 overflow-hidden bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-700 dark:to-gray-800">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  {/* Icon Badge */}
                  <div className="absolute top-4 left-4">
                    <div className="w-12 h-12 rounded-xl bg-white/95 dark:bg-gray-800/95 backdrop-blur-sm flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                      <Icon className="w-6 h-6 text-primary-600 dark:text-primary-400" />
                    </div>
                  </div>
                </div>

                {/* Content Section */}
                <div className="p-6">
                  <h3 className="font-heading font-bold text-xl text-gray-900 dark:text-white mb-3 line-clamp-2">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed mb-4 line-clamp-3">
                    {service.description}
                  </p>
                  <Button 
                    variant="ghost" 
                    size="sm" 
                    asChild 
                    className="text-primary-600 dark:text-primary-400 hover:bg-primary-50 dark:hover:bg-primary-900/20 p-0 h-auto font-semibold group-hover:text-primary-700 dark:group-hover:text-primary-300"
                  >
                    <Link href={service.href} className="inline-flex items-center gap-1">
                      Learn More
                      <motion.span
                        className="inline-block"
                        whileHover={{ x: 3 }}
                        transition={{ type: "spring", stiffness: 400 }}
                      >
                        →
                      </motion.span>
                    </Link>
                  </Button>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}

