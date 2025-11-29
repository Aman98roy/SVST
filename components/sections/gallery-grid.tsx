"use client";

import { motion } from "framer-motion";
import Image from "next/image";

// Placeholder images - replace with actual gallery images
const galleryImages = Array.from({ length: 12 }, (_, i) => ({
  id: i + 1,
  src: `https://images.unsplash.com/photo-${1500000000000 + i}?w=600&h=400&fit=crop`,
  alt: `Gallery Image ${i + 1}`,
  category: ["Event", "Activity", "Community"][i % 3],
}));

export function GalleryGrid() {
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
          <h1 className="font-heading font-bold text-4xl sm:text-5xl text-gray-900 dark:text-white mb-4">
            Gallery
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Capturing moments of impact, celebration, and community engagement
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 lg:gap-6">
          {galleryImages.map((image, index) => (
            <motion.div
              key={image.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05, duration: 0.5 }}
              whileHover={{ scale: 1.05 }}
              className="relative overflow-hidden rounded-2xl aspect-[4/3] group cursor-pointer"
            >
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10 flex items-end p-4">
                <span className="text-white text-sm font-medium">
                  {image.category}
                </span>
              </div>
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className="object-cover"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

