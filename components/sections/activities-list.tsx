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
  ArrowRight,
} from "lucide-react";

const activities = [
  {
    icon: FlaskConical,
    title: "Vasundhara Soil & Water Testing Laboratory",
    description:
      "Comprehensive soil and water testing services for farmers to optimize agricultural productivity and ensure sustainable farming practices.",
    href: "/activities/vasundhara",
    features: [
      "Soil nutrient analysis",
      "Water quality testing",
      "Fertilizer recommendations",
      "Crop-specific advice",
    ],
  },
  {
    icon: GraduationCap,
    title: "District Level Farmers Training",
    description:
      "Empowering farmers with modern agricultural techniques, sustainable farming practices, and knowledge about organic farming methods.",
    href: "/activities/farmers-training",
    features: [
      "Modern agriculture techniques",
      "Organic farming methods",
      "Crop management",
      "Market linkage support",
    ],
  },
  {
    icon: Microscope,
    title: "Biological Input Laboratory",
    description:
      "Research and development of organic farming inputs, biofertilizers, and eco-friendly agricultural solutions.",
    href: "/activities/biological-input",
    features: [
      "Biofertilizer production",
      "Vermicomposting",
      "Nadep composting",
      "Organic input research",
    ],
  },
  {
    icon: Users,
    title: "DAESI & CCIM",
    description:
      "Training programs for agricultural extension services, community development, and capacity building initiatives.",
    href: "/activities/daesi-ccim",
    features: [
      "Extension worker training",
      "Community development",
      "Capacity building",
      "Skill enhancement",
    ],
  },
];

export function ActivitiesList() {
  return (
    <section className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="font-heading font-bold text-2xl sm:text-3xl text-gray-900 dark:text-white mb-4">
            Our Activities
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto content-text">
            Comprehensive programs designed to empower communities and promote
            sustainable development
          </p>
        </motion.div>

        <div className="space-y-8">
          {activities.map((activity, index) => {
            const Icon = activity.icon;
            return (
              <motion.div
                key={activity.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
              >
                <Card className="overflow-hidden">
                  <div className="md:flex">
                    <div className="md:w-1/3 bg-gradient-to-br from-primary-400 to-primary-600 p-8 flex items-center justify-center">
                    <div className="w-24 h-24 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center">
                      <Icon className="w-12 h-12 text-white" />
                    </div>
                    </div>
                    <div className="md:w-2/3 p-8">
                      <CardHeader className="p-0 mb-4">
                        <CardTitle className="text-2xl">{activity.title}</CardTitle>
                      </CardHeader>
                      <CardContent className="p-0">
                        <p className="text-gray-600 dark:text-gray-400 mb-6 content-text">
                          {activity.description}
                        </p>
                        <ul className="grid grid-cols-2 gap-2 mb-6">
                          {activity.features.map((feature) => (
                            <li
                              key={feature}
                              className="flex items-center text-sm text-gray-600 dark:text-gray-400"
                            >
                              <span className="w-1.5 h-1.5 bg-primary-500 rounded-full mr-2" />
                              {feature}
                            </li>
                          ))}
                        </ul>
                        <Button variant="outline" asChild>
                          <Link href={activity.href}>
                            Learn More
                            <ArrowRight className="ml-2 w-4 h-4" />
                          </Link>
                        </Button>
                      </CardContent>
                    </div>
                  </div>
                </Card>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

