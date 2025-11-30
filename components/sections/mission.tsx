"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { Target, Eye, Lightbulb, Heart } from "lucide-react";
import { ImageModal } from "@/components/ui/image-modal";

const values = [
  {
    icon: Target,
    title: "Mission",
    image: "/images/core-values/Mission.jpg",
    description:
      "We are dedicated to promoting the empowerment of people, protection of the environment, and respect for cultural diversity. The organization focuses its initiatives on committed, grassroots organizations that rely strongly on volunteer efforts.",
    gradient: "from-blue-500/20 to-cyan-500/20",
    iconColor: "text-blue-500",
  },
  {
    icon: Eye,
    title: "Vision",
    image: "/images/core-values/Vision.jpg",
    description:
      "We long for a just and peaceful society in which each individual and each community is empowered and self-reliant; where human dignity, equal rights, and equal opportunities are enjoyed by all, and after which we may feel proud being Indian as an Ideal country citizen.",
    gradient: "from-purple-500/20 to-pink-500/20",
    iconColor: "text-purple-500",
  },
  {
    icon: Lightbulb,
    title: "Innovations",
    image: "/images/core-values/Innovations.jpg",
    description:
      "SVST platform is running with people's participation all the time, thus it has been able to follow the concept of the people for the people and of the people. SVST is guided by loyalty, professionalism, transparency, and commitment.",
    gradient: "from-yellow-500/20 to-orange-500/20",
    iconColor: "text-yellow-500",
  },
  {
    icon: Heart,
    title: "Hand of Hope",
    image: "/images/core-values/HandOfHope.jpg",
    description:
      "On 29th September 2025, Swami Vivekanand Seva Trust, Hingoli stood beside the flood-affected families of Kothari, Taluka Basmat, District Hingoli (Maharashtra) by distributing 100s of essential Vital food kits to Flood Affected, Labours, Poor Villagers, Peoples who leaves in Hut's, People whose homes have been flooded To Support them in these challenging times.",
    gradient: "from-red-500/20 to-rose-500/20",
    iconColor: "text-red-500",
  },
];

export function Mission() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalIndex, setModalIndex] = useState(0);
  const imageSources = values.map(v => v.image);

  const openModal = (index: number) => {
    setModalIndex(index);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleModalNavigate = (index: number) => {
    setModalIndex(index);
  };

  return (
    <section className="py-20 bg-gradient-to-b from-white via-gray-50 to-white dark:from-gray-900 dark:via-gray-950 dark:to-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <motion.span
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-block px-4 py-2 bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 rounded-full text-sm font-medium mb-4"
          >
            Our Foundation
          </motion.span>
          <h2 className="font-heading font-bold text-4xl sm:text-5xl lg:text-6xl text-gray-900 dark:text-white mb-4">
            Our Core Values
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Building a better future through dedicated service and community
            empowerment
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
          {values.map((value, index) => {
            const Icon = value.icon;
            return (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15, duration: 0.6, type: "spring" }}
                className="group relative"
              >
                {/* Modern Card with Glassmorphism */}
                <div className="relative h-full bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-3xl overflow-hidden border border-gray-200/50 dark:border-gray-700/50 shadow-lg hover:shadow-2xl transition-all duration-500 group-hover:-translate-y-2">
                  {/* Background Gradient */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${value.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                  
                  {/* Image Section - Split Layout */}
                  <div 
                    className="relative h-64 w-full overflow-hidden cursor-pointer"
                    onClick={() => openModal(index)}
                  >
                    <motion.div
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.6, ease: "easeOut" }}
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
                    
                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                    
                    {/* Icon Badge */}
                    <motion.div
                      initial={{ scale: 0, rotate: -180 }}
                      whileInView={{ scale: 1, rotate: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 + 0.3, type: "spring" }}
                      className="absolute top-6 right-6 w-16 h-16 bg-white/20 backdrop-blur-md rounded-2xl flex items-center justify-center border border-white/30 shadow-lg group-hover:bg-white/30 transition-all duration-300"
                    >
                      <Icon className={`w-8 h-8 ${value.iconColor} drop-shadow-lg`} />
                    </motion.div>

                    {/* Title Overlay */}
                    <div className="absolute bottom-0 left-0 right-0 p-6">
                      <motion.h3
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 + 0.4 }}
                        className="font-heading font-bold text-2xl sm:text-3xl text-white mb-2 drop-shadow-lg"
                      >
                        {value.title}
                      </motion.h3>
                    </div>
                  </div>
                  
                  {/* Content Section */}
                  <div className="p-6 lg:p-8 relative z-10">
                    <motion.p
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 + 0.5 }}
                      className="text-gray-600 dark:text-gray-300 leading-relaxed text-base sm:text-lg"
                    >
                      {value.description}
                    </motion.p>
                  </div>

                  {/* Decorative Corner Element */}
                  <div className="absolute top-0 left-0 w-32 h-32 bg-gradient-to-br from-primary-500/10 to-transparent rounded-br-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>

                {/* Hover Glow Effect */}
                <div className={`absolute -inset-0.5 bg-gradient-to-r ${value.gradient} rounded-3xl opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-500 -z-10`} />
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Full Screen Modal */}
      <ImageModal
        isOpen={isModalOpen}
        onClose={closeModal}
        images={imageSources}
        currentIndex={modalIndex}
        onNavigate={handleModalNavigate}
        showNavigation={true}
      />
    </section>
  );
}

