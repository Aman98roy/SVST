"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Target, Eye, Lightbulb, Heart } from "lucide-react";

const values = [
  {
    icon: Target,
    title: "Mission",
    image: "/images/core-values/Mission.jpg",
    description:
      "We are dedicated to promoting the empowerment of people, protection of the environment, and respect for cultural diversity. The organization focuses its initiatives on committed, grassroots organizations that rely strongly on volunteer efforts.",
  },
  {
    icon: Eye,
    title: "Vision",
    image: "/images/core-values/Vision.jpg",
    description:
      "We long for a just and peaceful society in which each individual and each community is empowered and self-reliant; where human dignity, equal rights, and equal opportunities are enjoyed by all, and after which we may feel proud being Indian as an Ideal country citizen.",
  },
  {
    icon: Lightbulb,
    title: "Innovations",
    image: "/images/core-values/Innovations.jpg",
    description:
      "SVST platform is running with people's participation all the time, thus it has been able to follow the concept of the people for the people and of the people. SVST is guided by loyalty, professionalism, transparency, and commitment.",
  },
  {
    icon: Heart,
    title: "Hand of Hope",
    image: "/images/core-values/HandOfHope.jpg",
    description:
      "On 29th September 2025, Swami Vivekanand Seva Trust, Hingoli stood beside the flood-affected families of Kothari, Taluka Basmat, District Hingoli (Maharashtra) by distributing 100s of essential Vital food kits to Flood Affected, Labours, Poor Villagers, Peoples who leaves in Hut's, People whose homes have been flooded To Support them in these challenging times.",
  },
];

export function Mission() {
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
          <h2 className="font-heading font-bold text-4xl sm:text-5xl text-gray-900 dark:text-white mb-4">
            Our Core Values
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Building a better future through dedicated service and community
            empowerment
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {values.map((value, index) => {
            const Icon = value.icon;
            return (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
              >
                <Card className="h-full overflow-hidden group hover:shadow-xl transition-shadow duration-300">
                  {/* Image Section */}
                  <div className="relative h-48 w-full overflow-hidden">
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.3 }}
                      className="h-full w-full"
                    >
                      <Image
                        src={value.image}
                        alt={value.title}
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      />
                    </motion.div>
                    {/* Overlay with Icon */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent flex items-end p-4">
                      <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center">
                        <Icon className="w-6 h-6 text-white" />
                      </div>
                    </div>
                  </div>
                  
                  <CardHeader>
                    <CardTitle className="text-xl">{value.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-base leading-relaxed">
                      {value.description}
                    </CardDescription>
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

