"use client";

import { motion } from "framer-motion";
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
  },
  {
    icon: GraduationCap,
    title: "District Level Farmers Training",
    description:
      "Empowering farmers with modern agricultural techniques and sustainable farming practices.",
    href: "/activities/farmers-training",
  },
  {
    icon: Microscope,
    title: "Biological Input Laboratory",
    description:
      "Research and development of organic farming inputs and biofertilizers.",
    href: "/activities/biological-input",
  },
  {
    icon: Users,
    title: "DAESI & CCIM",
    description:
      "Training programs for agricultural extension services and community development.",
    href: "/activities/daesi-ccim",
  },
  {
    icon: Calendar,
    title: "Events & Programs",
    description:
      "Organizing cultural programs, national celebrations, and community events.",
    href: "/events",
  },
  {
    icon: ImageIcon,
    title: "Gallery & Media",
    description:
      "Showcasing our activities, events, and impact through visual storytelling.",
    href: "/gallery",
  },
];

export function Services() {
  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-950">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-heading font-bold text-4xl sm:text-5xl text-gray-900 dark:text-white mb-4">
            Our Activities
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Comprehensive programs designed to empower communities and promote
            sustainable development
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
              >
                <Card className="h-full flex flex-col">
                  <CardHeader>
                    <div className="w-14 h-14 bg-gradient-to-br from-primary-400 to-primary-600 rounded-2xl flex items-center justify-center mb-4">
                      <Icon className="w-7 h-7 text-white" />
                    </div>
                    <CardTitle className="text-xl">{service.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="flex-1 flex flex-col">
                    <p className="text-gray-600 dark:text-gray-400 mb-4 flex-1">
                      {service.description}
                    </p>
                    <Button variant="outline" size="sm" asChild>
                      <Link href={service.href}>Learn More</Link>
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

