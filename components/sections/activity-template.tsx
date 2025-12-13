"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useState, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  X, 
  ChevronLeft, 
  ChevronRight, 
  Calendar, 
  Users, 
  Target, 
  MapPin,
  Expand,
  Clock,
  Award,
  Heart
} from "lucide-react";

interface ActivityFeature {
  icon: React.ElementType;
  title: string;
  description: string;
}

interface ActivityStat {
  label: string;
  value: string;
  icon: React.ElementType;
}

interface GalleryImage {
  src: string;
  alt: string;
  caption?: string;
}

interface ActivityTemplateProps {
  title: string;
  subtitle?: string;
  description: string;
  mainImage: string;
  category: string;
  location: string;
  duration?: string;
  beneficiaries?: string;
  features: ActivityFeature[];
  stats?: ActivityStat[];
  gallery: GalleryImage[];
  content: {
    overview: string;
    objectives: string[];
    impact: string;
    methodology?: string;
  };
}

export function ActivityTemplate({
  title,
  subtitle,
  description,
  mainImage,
  category,
  location,
  duration,
  beneficiaries,
  features,
  stats,
  gallery,
  content
}: ActivityTemplateProps) {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const [currentGalleryIndex, setCurrentGalleryIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  // Auto-play slider every 5 seconds
  useEffect(() => {
    if (!isAutoPlaying || gallery.length <= 3) return;
    
    const interval = setInterval(() => {
      setCurrentGalleryIndex(prev => (prev + 1) % Math.max(1, gallery.length - 2));
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, gallery.length]);

  const openGallery = (index: number) => {
    setSelectedImage(index);
  };

  const closeGallery = () => {
    setSelectedImage(null);
  };

  const nextImage = () => {
    setSelectedImage(prev => prev !== null ? (prev + 1) % gallery.length : 0);
  };

  const prevImage = () => {
    setSelectedImage(prev => prev !== null ? (prev - 1 + gallery.length) % gallery.length : 0);
  };

  const nextGallerySlide = () => {
    setIsAutoPlaying(false); // Pause auto-play when user interacts
    setCurrentGalleryIndex(prev => (prev + 1) % Math.max(1, gallery.length - 2));
    setTimeout(() => setIsAutoPlaying(true), 10000); // Resume after 10 seconds
  };

  const prevGallerySlide = () => {
    setIsAutoPlaying(false); // Pause auto-play when user interacts
    setCurrentGalleryIndex(prev => (prev - 1 + Math.max(1, gallery.length - 2)) % Math.max(1, gallery.length - 2));
    setTimeout(() => setIsAutoPlaying(true), 10000); // Resume after 10 seconds
  };

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      {/* Hero Section */}
      <section className="relative min-h-[70vh] bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center min-h-[60vh]">
            {/* Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center lg:text-left order-2 lg:order-1"
            >
              {/* Category Badge */}
              <Badge className="mb-3 sm:mb-4 bg-primary-600 text-white border-none text-xs sm:text-sm px-3 sm:px-4 py-1">
                {category}
              </Badge>

              {/* Title */}
              <h1 className="font-heading font-bold text-2xl sm:text-4xl md:text-5xl lg:text-6xl text-gray-900 dark:text-white mb-3 sm:mb-4 leading-tight">
                {title}
              </h1>

              {/* Subtitle */}
              {subtitle && (
                <h2 className="text-lg sm:text-xl md:text-2xl text-primary-600 dark:text-primary-400 mb-4 sm:mb-6 font-medium">
                  {subtitle}
                </h2>
              )}

              {/* Description */}
              <p className="text-base sm:text-lg md:text-xl text-gray-600 dark:text-gray-300 mb-6 sm:mb-8 leading-relaxed">
                {description}
              </p>

              {/* Quick Info */}
              <div className="flex flex-wrap gap-4 sm:gap-6 text-gray-700 dark:text-gray-300 justify-center lg:justify-start">
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 sm:w-5 h-4 sm:h-5 text-primary-600 dark:text-primary-400 flex-shrink-0" />
                  <span className="text-xs sm:text-sm">{location}</span>
                </div>
                {duration && (
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 sm:w-5 h-4 sm:h-5 text-primary-600 dark:text-primary-400 flex-shrink-0" />
                    <span className="text-xs sm:text-sm">{duration}</span>
                  </div>
                )}
                {beneficiaries && (
                  <div className="flex items-center gap-2">
                    <Users className="w-4 sm:w-5 h-4 sm:h-5 text-primary-600 dark:text-primary-400 flex-shrink-0" />
                    <span className="text-xs sm:text-sm">{beneficiaries}</span>
                  </div>
                )}
              </div>
            </motion.div>

            {/* Hero Image */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="order-1 lg:order-2"
            >
              <div className="relative h-[40vh] sm:h-[50vh] lg:h-[60vh] rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src={mainImage}
                  alt={title}
                  fill
                  className="object-cover"
                  priority
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      {stats && stats.length > 0 && (
        <section className="py-12 bg-gradient-to-r from-primary-500 to-primary-600 dark:from-primary-700 dark:to-primary-800">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {stats.map((stat, index) => {
                const Icon = stat.icon;
                return (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1, duration: 0.6 }}
                    className="text-center text-white"
                  >
                    <Icon className="w-6 h-6 sm:w-8 sm:h-8 mx-auto mb-2 sm:mb-3 text-white/90" />
                    <div className="text-xl sm:text-2xl lg:text-3xl font-bold mb-1">{stat.value}</div>
                    <div className="text-white/80 text-xs sm:text-sm">{stat.label}</div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>
      )}

      {/* Main Content */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">
              {/* Content */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="space-y-8"
              >
                {/* Overview */}
                <div>
                  <h3 className="font-heading font-bold text-2xl text-gray-900 dark:text-white mb-4">
                    Overview
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                    {content.overview}
                  </p>
                </div>

                {/* Objectives */}
                <div>
                  <h3 className="font-heading font-bold text-2xl text-gray-900 dark:text-white mb-4">
                    Key Objectives
                  </h3>
                  <ul className="space-y-3">
                    {content.objectives.map((objective, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-primary-500 rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-gray-600 dark:text-gray-300">{objective}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Methodology */}
                {content.methodology && (
                  <div>
                    <h3 className="font-heading font-bold text-2xl text-gray-900 dark:text-white mb-4">
                      Our Approach
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                      {content.methodology}
                    </p>
                  </div>
                )}

                {/* Impact */}
                <div>
                  <h3 className="font-heading font-bold text-2xl text-gray-900 dark:text-white mb-4">
                    Community Impact
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                    {content.impact}
                  </p>
                </div>
              </motion.div>

              {/* Features */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="space-y-6"
              >
                <h3 className="font-heading font-bold text-2xl text-gray-900 dark:text-white mb-6">
                  Key Features
                </h3>
                <div className="space-y-4">
                  {features.map((feature, index) => {
                    const Icon = feature.icon;
                    return (
                      <motion.div
                        key={feature.title}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1, duration: 0.6 }}
                        whileHover={{ x: 10 }}
                        className="group"
                      >
                        <Card className="border-2 border-gray-100 dark:border-gray-700 hover:border-primary-300 dark:hover:border-primary-600 transition-all duration-300 hover:shadow-lg">
                          <CardContent className="p-4 sm:p-6">
                            <div className="flex items-start gap-3 sm:gap-4">
                              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-primary-100 dark:bg-primary-900/30 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                                <Icon className="w-5 h-5 sm:w-6 sm:h-6 text-primary-600 dark:text-primary-400" />
                              </div>
                              <div>
                                <h4 className="font-semibold text-base sm:text-lg text-gray-900 dark:text-white mb-2">
                                  {feature.title}
                                </h4>
                                <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                                  {feature.description}
                                </p>
                              </div>
                            </div>
                          </CardContent>
                        </Card>
                      </motion.div>
                    );
                  })}
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-16 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h3 className="font-heading font-bold text-3xl text-gray-900 dark:text-white mb-4">
              Activity Gallery
            </h3>
            <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Explore our work through images showcasing the impact and progress of this activity
            </p>
          </motion.div>

          {/* Modern Gallery Slider */}
          <div 
            className="relative overflow-hidden"
            onMouseEnter={() => setIsAutoPlaying(false)}
            onMouseLeave={() => setIsAutoPlaying(true)}
          >
            <motion.div 
              className="flex gap-6"
              animate={{ x: -currentGalleryIndex * (100 / Math.min(3, gallery.length)) + "%" }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
            >
              {gallery.map((image, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                  className="relative flex-shrink-0 w-full sm:w-1/2 lg:w-1/3 group cursor-pointer"
                  onClick={() => openGallery(index)}
                >
                  <div className="relative h-64 sm:h-72 md:h-80 rounded-2xl overflow-hidden shadow-lg">
                    <Image
                      src={image.src}
                      alt={image.alt}
                      fill
                      className="object-cover group-hover:scale-105 transition-all duration-700"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300" />
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
                      <div className="w-14 h-14 sm:w-16 sm:h-16 bg-white/95 rounded-full flex items-center justify-center backdrop-blur-sm shadow-xl transform group-hover:scale-110 transition-transform duration-300">
                        <Expand className="w-6 h-6 sm:w-7 sm:h-7 text-gray-900" />
                      </div>
                    </div>
                    {image.caption && (
                      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent p-4 sm:p-6">
                        <p className="text-white text-sm sm:text-base font-medium leading-relaxed">{image.caption}</p>
                      </div>
                    )}
                  </div>
                </motion.div>
              ))}
            </motion.div>

            {/* Modern Navigation Buttons */}
            {gallery.length > 3 && (
              <>
                <Button
                  variant="outline"
                  size="icon"
                  onClick={prevGallerySlide}
                  className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/95 hover:bg-white border-none shadow-xl backdrop-blur-sm transition-all duration-300 hover:scale-110"
                >
                  <ChevronLeft className="w-5 h-5 text-gray-900" />
                </Button>
                <Button
                  variant="outline"
                  size="icon"
                  onClick={nextGallerySlide}
                  className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/95 hover:bg-white border-none shadow-xl backdrop-blur-sm transition-all duration-300 hover:scale-110"
                >
                  <ChevronRight className="w-5 h-5 text-gray-900" />
                </Button>
              </>
            )}
          </div>

          {/* Modern Gallery Indicators */}
          {gallery.length > 3 && (
            <div className="flex justify-center gap-3 mt-8">
              {Array.from({ length: Math.max(1, gallery.length - 2) }).map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentGalleryIndex(index)}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    index === currentGalleryIndex 
                      ? 'w-8 bg-primary-600 shadow-lg' 
                      : 'w-2 bg-gray-300 hover:bg-gray-400 dark:bg-gray-600 dark:hover:bg-gray-500'
                  }`}
                />
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Expanded Gallery Modal */}
      {selectedImage !== null && (
        <div className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4" onClick={closeGallery}>
          <div className="relative max-w-6xl max-h-full" onClick={(e) => e.stopPropagation()}>
            <Image
              src={gallery[selectedImage].src}
              alt={gallery[selectedImage].alt}
              width={1200}
              height={800}
              className="max-w-full max-h-[80vh] object-contain rounded-lg shadow-2xl"
            />
            
            {/* Modern Close Button */}
            <Button
              variant="outline"
              onClick={closeGallery}
              className="absolute top-4 sm:top-6 right-4 sm:right-6 w-12 h-12 sm:w-14 sm:h-14 bg-black/70 hover:bg-black/90 border-white/30 text-white backdrop-blur-md rounded-full transition-all duration-300 hover:scale-110 z-50 shadow-2xl"
            >
              <X className="w-6 h-6 sm:w-7 sm:h-7 stroke-2" />
            </Button>

            {/* Modern Navigation */}
            {gallery.length > 1 && (
              <>
                <Button
                  variant="outline"
                  onClick={prevImage}
                  className="absolute left-4 sm:left-6 top-1/2 -translate-y-1/2 w-12 h-12 sm:w-14 sm:h-14 bg-black/70 hover:bg-black/90 border-white/30 text-white backdrop-blur-md rounded-full transition-all duration-300 hover:scale-110 z-50 shadow-2xl"
                >
                  <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6 stroke-2" />
                </Button>
                <Button
                  variant="outline"
                  onClick={nextImage}
                  className="absolute right-4 sm:right-6 top-1/2 -translate-y-1/2 w-12 h-12 sm:w-14 sm:h-14 bg-black/70 hover:bg-black/90 border-white/30 text-white backdrop-blur-md rounded-full transition-all duration-300 hover:scale-110 z-50 shadow-2xl"
                >
                  <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6 stroke-2" />
                </Button>
              </>
            )}

            {/* Modern Image Caption */}
            {gallery[selectedImage].caption && (
              <div className="absolute bottom-4 sm:bottom-6 left-4 sm:left-6 right-4 sm:right-6 bg-black/60 backdrop-blur-md rounded-2xl p-4 sm:p-6 border border-white/10">
                <p className="text-white text-center text-sm sm:text-base leading-relaxed">{gallery[selectedImage].caption}</p>
              </div>
            )}

            {/* Modern Image Counter */}
            <div className="absolute top-4 sm:top-6 left-4 sm:left-6 bg-black/60 backdrop-blur-md rounded-full px-4 py-2 border border-white/10">
              <span className="text-white text-sm sm:text-base font-medium">
                {selectedImage + 1} / {gallery.length}
              </span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}