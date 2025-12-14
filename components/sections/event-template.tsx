"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useState, useEffect } from "react";
import { Info, TrendingUp } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  X, 
  ChevronLeft, 
  ChevronRight, 
  Calendar, 
  Users, 
  MapPin,
  Clock,
  Award,
  Heart,
  Star,
  CheckCircle,
  Expand,
  Flag,
  Mic,
  Music,
  BookOpen,
  Globe,
  Lightbulb,
  Smile,
  Target,
  TreePine,
  Trophy,
  Sparkles,
  Activity
} from "lucide-react";

// Icon mapping for string-based icon system
const iconMap: { [key: string]: any } = {
  X,
  ChevronLeft,
  ChevronRight,
  Calendar,
  Users,
  MapPin,
  Clock,
  Award,
  Heart,
  Star,
  CheckCircle,
  Expand,
  Flag,
  Mic,
  Music,
  BookOpen,
  Globe,
  Lightbulb,
  Smile,
  Target,
  TreePine,
  Trophy,
  Sparkles,
  Activity
};

interface EventFeature {
  icon: string;
  title: string;
  description: string;
}

interface EventStat {
  label: string;
  value: string;
  icon: string;
}

interface EventGalleryItem {
  src: string;
  alt: string;
  caption: string;
}

interface EventHighlight {
  title: string;
  description: string;
}

interface EventTemplateProps {
  title: string;
  subtitle: string;
  description: string;
  mainImage: string;
  eventDate: string;
  location: string;
  duration: string;
  participants: string;
  category: string;
  features: EventFeature[];
  stats: EventStat[];
  gallery: EventGalleryItem[];
  highlights: EventHighlight[];
  content: {
    overview: string;
    objectives: string[];
    activities: string[];
    impact: string;
  };
}

export function EventTemplate({
  title,
  subtitle,
  description,
  mainImage,
  eventDate,
  location,
  duration,
  participants,
  category,
  features,
  stats,
  gallery,
  highlights,
  content,
}: EventTemplateProps) {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const [currentGalleryIndex, setCurrentGalleryIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  // Auto-play gallery slider
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

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-orange-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-r from-blue-600 to-orange-500">
        <div className="absolute inset-0">
          <Image
            src={mainImage}
            alt={title}
            fill
            className="object-cover opacity-30"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/80 to-orange-900/80" />
        </div>
        
        <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="text-white"
            >
              <Badge className="mb-4 bg-orange-500/20 text-orange-200 border-orange-400/30 hover:bg-orange-500/30">
                {category}
              </Badge>
              
              <h1 className="font-heading font-bold text-4xl sm:text-5xl lg:text-6xl mb-6 leading-tight">
                {title}
              </h1>
              
              <p className="text-xl sm:text-2xl text-blue-100 mb-6 font-medium">
                {subtitle}
              </p>
              
              <p className="text-lg text-blue-200 mb-8 leading-relaxed">
                {description}
              </p>
              
              {/* Event Details */}
              <div className="grid sm:grid-cols-2 gap-4 mb-8">
                <div className="flex items-center gap-3 bg-white/10 backdrop-blur-md rounded-lg p-4">
                  <Calendar className="w-5 h-5 text-orange-300" />
                  <div>
                    <p className="text-sm text-blue-200">Event Date</p>
                    <p className="font-semibold">{eventDate}</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 bg-white/10 backdrop-blur-md rounded-lg p-4">
                  <MapPin className="w-5 h-5 text-orange-300" />
                  <div>
                    <p className="text-sm text-blue-200">Location</p>
                    <p className="font-semibold">{location}</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 bg-white/10 backdrop-blur-md rounded-lg p-4">
                  <Clock className="w-5 h-5 text-orange-300" />
                  <div>
                    <p className="text-sm text-blue-200">Duration</p>
                    <p className="font-semibold">{duration}</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 bg-white/10 backdrop-blur-md rounded-lg p-4">
                  <Users className="w-5 h-5 text-orange-300" />
                  <div>
                    <p className="text-sm text-blue-200">Participants</p>
                    <p className="font-semibold">{participants}</p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Hero Image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="relative h-96 lg:h-[500px] rounded-2xl overflow-hidden shadow-2xl bg-white/10 backdrop-blur-md border border-white/20">
                <Image
                  src={mainImage}
                  alt={title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 sm:py-16 bg-white dark:bg-gray-800 border-b border-gray-100 dark:border-gray-700">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
            {stats.map((stat, index) => {
              const Icon = iconMap[stat.icon] || iconMap.Target;
              return (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                  className="flex flex-col items-center justify-center text-center w-full"
                >
                  <div className="w-10 h-10 sm:w-12 sm:h-12 lg:w-16 lg:h-16 bg-gradient-to-br from-blue-500 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-2 sm:mb-4 shadow-lg">
                    <Icon className="w-5 h-5 sm:w-6 sm:h-6 lg:w-8 lg:h-8 text-white" />
                  </div>
                  <h3 className="text-base sm:text-xl lg:text-3xl font-bold text-gray-900 dark:text-white mb-1 sm:mb-2 text-center w-full">
                    {stat.value}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 text-xs sm:text-sm lg:text-base text-center w-full break-words hyphens-auto">
                    {stat.label}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-16">
            {/* Main Content */}
            <div className="lg:col-span-8">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="space-y-8"
              >
                {/* Overview */}
                <div>
                  <h3 className="font-heading font-bold text-3xl text-gray-900 dark:text-white mb-8 flex items-center gap-4">
                    <span className="inline-flex items-center justify-center w-12 h-12 rounded-2xl bg-gradient-to-br from-blue-500 via-purple-500 to-indigo-600 text-white shadow-xl transform hover:scale-110 transition-all duration-300">
                      <Info className="w-6 h-6" />
                    </span>
                    <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Event Overview</span>
                  </h3>
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="group"
                  >
                    <div className="relative overflow-hidden bg-gradient-to-br from-white via-blue-50 to-purple-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-700 border-2 border-blue-200 dark:border-gray-600 rounded-3xl shadow-2xl p-8 hover:shadow-3xl transform hover:-translate-y-1 transition-all duration-500">
                      <div className="absolute inset-0 bg-gradient-to-r from-blue-400/10 to-purple-400/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                      <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-2 group-hover:translate-x-0">
                        <div className="w-3 h-3 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full animate-pulse"></div>
                      </div>
                      <div className="relative z-10">
                        <p className="text-lg leading-8 text-gray-800 dark:text-gray-100 font-medium">
                          {content.overview.length > 150 ? (
                            content.overview.split('. ').map((sentence, index) => (
                              <span key={index} className="block mb-3 last:mb-0">
                                {sentence}{sentence.endsWith('.') ? '' : '.'}
                              </span>
                            ))
                          ) : (
                            content.overview
                          )}
                        </p>                        <div className="mt-6">
                          <div className="h-px bg-gradient-to-r from-blue-400 to-purple-500"></div>
                        </div>                      </div>
                    </div>
                  </motion.div>
                </div>

                {/* Objectives */}
                <div>
                  <h3 className="font-heading font-bold text-3xl text-gray-900 dark:text-white mb-6">
                    Event Objectives
                  </h3>
                  <div className="space-y-3">
                    {content.objectives.map((objective, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1, duration: 0.6 }}
                        className="flex items-start gap-3"
                      >
                        <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" />
                        <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                          {objective}
                        </p>
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* Activities */}
                <div>
                  <h3 className="font-heading font-bold text-3xl text-gray-900 dark:text-white mb-6">
                    Event Activities
                  </h3>
                  <div className="grid sm:grid-cols-2 gap-4">
                    {content.activities.slice(0, 4).map((activity, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1, duration: 0.6 }}
                        className="bg-gradient-to-r from-blue-50 to-orange-50 dark:from-gray-700 dark:to-gray-600 rounded-xl p-4 border border-blue-200 dark:border-gray-600"
                      >
                        <Star className="w-5 h-5 text-orange-500 mb-2" />
                        <p className="text-gray-700 dark:text-gray-200 font-medium">
                          {activity}
                        </p>
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* Impact */}
                <div>
                  <h3 className="font-heading font-bold text-3xl text-gray-900 dark:text-white mb-8 flex items-center gap-4">
                    <span className="inline-flex items-center justify-center w-12 h-12 rounded-2xl bg-gradient-to-br from-emerald-500 via-green-500 to-teal-600 text-white shadow-xl transform hover:scale-110 transition-all duration-300">
                      <TrendingUp className="w-6 h-6" />
                    </span>
                    <span className="bg-gradient-to-r from-emerald-600 to-green-600 bg-clip-text text-transparent">Event Impact</span>
                  </h3>
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="group"
                  >
                    <div className="relative overflow-hidden bg-gradient-to-br from-white via-emerald-50 to-green-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-700 border-2 border-emerald-200 dark:border-gray-600 rounded-3xl shadow-2xl p-8 hover:shadow-3xl transform hover:-translate-y-1 transition-all duration-500">
                      <div className="absolute inset-0 bg-gradient-to-r from-emerald-400/10 to-green-400/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                      <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-2 group-hover:translate-x-0">
                        <div className="w-3 h-3 bg-gradient-to-r from-emerald-400 to-green-500 rounded-full animate-pulse"></div>
                      </div>
                      <div className="relative z-10">
                        <p className="text-lg leading-8 text-gray-800 dark:text-gray-100 font-medium">
                          {content.impact.length > 150 ? (
                            content.impact.split('. ').map((sentence, index) => (
                              <span key={index} className="block mb-3 last:mb-0">
                                {sentence}{sentence.endsWith('.') ? '' : '.'}
                              </span>
                            ))
                          ) : (
                            content.impact
                          )}
                        </p>                        <div className="mt-6">
                          <div className="h-px bg-gradient-to-r from-emerald-400 to-green-500"></div>
                        </div>                      </div>
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-4">
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="space-y-8"
              >
                {/* Event Features */}
                <div>
                  <h3 className="font-heading font-bold text-2xl text-gray-900 dark:text-white mb-6">
                    Key Features
                  </h3>
                  <div className="space-y-2">
                    {features.slice(0, 4).map((feature, index) => {
                      const Icon = iconMap[feature.icon] || iconMap.Target;
                      return (
                        <motion.div
                          key={feature.title}
                          initial={{ opacity: 0, y: 20 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: index * 0.1, duration: 0.6 }}
                          className="group"
                        >
                          <Card className="border-2 border-gray-100 dark:border-gray-700 hover:border-blue-300 dark:hover:border-blue-600 transition-all duration-300 hover:shadow-lg">
                            <CardContent className="px-3 py-2 sm:px-4 sm:py-2.5">
                              <div className="flex items-start gap-2 sm:gap-3">
                                <div className="w-8 h-8 sm:w-10 sm:h-10 bg-blue-100 dark:bg-blue-900/30 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                                  <Icon className="w-4 h-4 sm:w-5 sm:h-5 text-blue-600 dark:text-blue-400" />
                                </div>
                                <div>
                                  <h4 className="font-semibold text-base sm:text-lg text-gray-900 dark:text-white mb-1">
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
                </div>

                {/* Event Highlights */}
                <div>
                  <h3 className="font-heading font-bold text-2xl text-gray-900 dark:text-white mb-6">
                    Event Highlights
                  </h3>
                  <div className="space-y-4">
                    {highlights.slice(0, 4).map((highlight, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1, duration: 0.6 }}
                        className="bg-white dark:bg-gray-800 rounded-lg p-4 shadow-md border border-gray-200 dark:border-gray-700"
                      >
                        <h4 className="font-semibold text-gray-900 dark:text-white mb-2">
                          {highlight.title}
                        </h4>
                        <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                          {highlight.description}
                        </p>
                      </motion.div>
                    ))}
                  </div>
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
              Event Gallery
            </h3>
            <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Explore memorable moments and highlights from this special event
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
                  size="sm"
                  onClick={() => {
                    setIsAutoPlaying(false);
                    setCurrentGalleryIndex(prev => (prev - 1 + Math.max(1, gallery.length - 2)) % Math.max(1, gallery.length - 2));
                    setTimeout(() => setIsAutoPlaying(true), 10000);
                  }}
                  className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/95 hover:bg-white border-none shadow-xl backdrop-blur-sm transition-all duration-300 hover:scale-110"
                >
                  <ChevronLeft className="w-5 h-5 text-gray-900" />
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => {
                    setIsAutoPlaying(false);
                    setCurrentGalleryIndex(prev => (prev + 1) % Math.max(1, gallery.length - 2));
                    setTimeout(() => setIsAutoPlaying(true), 10000);
                  }}
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
                      ? 'w-8 bg-blue-600 shadow-lg' 
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
        <div className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center overflow-y-auto p-2 sm:p-4" onClick={closeGallery}>
          <div className="relative flex flex-col items-center gap-3 sm:gap-4 w-full max-w-7xl my-auto" onClick={(e) => e.stopPropagation()}>
            {/* Close Button - Above Image on Mobile, Top Right on Desktop */}
            <Button
              variant="outline"
              onClick={(e) => {
                e.stopPropagation();
                closeGallery();
              }}
              className="absolute -top-1 right-0 sm:top-0 sm:right-0 w-14 h-14 sm:w-16 sm:h-16 lg:w-20 lg:h-20 bg-white hover:bg-gray-100 border-2 border-white backdrop-blur-xl rounded-full transition-all duration-300 hover:scale-110 z-[9999] shadow-2xl p-0"
              style={{ backdropFilter: 'blur(20px)' }}
            >
              <X className="w-11 h-11 sm:w-13 sm:h-13 lg:w-16 lg:h-16 text-black stroke-[2.5]" />
            </Button>

            {/* Counter - Top Left */}
            <div className="self-start bg-white/90 backdrop-blur-xl rounded-full px-3 py-1.5 sm:px-4 sm:py-2 md:px-5 md:py-2.5 border-2 border-white shadow-2xl">
              <span className="text-gray-900 text-xs sm:text-sm md:text-base lg:text-lg font-bold">
                {selectedImage + 1} / {gallery.length}
              </span>
            </div>

            {/* Image Container with Navigation */}
            <div className="relative w-full flex items-center justify-center gap-2 sm:gap-4 md:gap-6">
              {/* Left Navigation - Inline with Image */}
              {gallery.length > 1 && (
                <Button
                  variant="outline"
                  onClick={(e) => {
                    e.stopPropagation();
                    prevImage();
                  }}
                  className="absolute left-1 sm:left-2 md:relative md:left-auto top-1/2 -translate-y-1/2 md:translate-y-0 w-14 h-14 sm:w-16 sm:h-16 lg:w-20 lg:h-20 bg-white hover:bg-gray-100 border-2 border-white backdrop-blur-xl rounded-full transition-all duration-300 hover:scale-110 z-[100] shadow-2xl flex-shrink-0 p-0"
                  style={{ backdropFilter: 'blur(20px)' }}
                >
                  <ChevronLeft className="w-11 h-11 sm:w-13 sm:h-13 lg:w-16 lg:h-16 text-black stroke-[2.5]" />
                </Button>
              )}

              {/* Image */}
              <div className="relative flex-1 max-w-6xl px-16 sm:px-20 md:px-0">
                <Image
                  src={gallery[selectedImage].src}
                  alt={gallery[selectedImage].alt}
                  width={1200}
                  height={800}
                  className="w-full h-auto max-h-[55vh] sm:max-h-[60vh] md:max-h-[70vh] object-contain rounded-lg shadow-2xl"
                />
              </div>

              {/* Right Navigation - Inline with Image */}
              {gallery.length > 1 && (
                <Button
                  variant="outline"
                  onClick={(e) => {
                    e.stopPropagation();
                    nextImage();
                  }}
                  className="absolute right-1 sm:right-2 md:relative md:right-auto top-1/2 -translate-y-1/2 md:translate-y-0 w-14 h-14 sm:w-16 sm:h-16 lg:w-20 lg:h-20 bg-white hover:bg-gray-100 border-2 border-white backdrop-blur-xl rounded-full transition-all duration-300 hover:scale-110 z-[100] shadow-2xl flex-shrink-0 p-0"
                  style={{ backdropFilter: 'blur(20px)' }}
                >
                  <ChevronRight className="w-11 h-11 sm:w-13 sm:h-13 lg:w-16 lg:h-16 text-black stroke-[2.5]" />
                </Button>
              )}
            </div>

            {/* Caption - Below Image */}
            {gallery[selectedImage].caption && (
              <div className="max-w-6xl w-full bg-white/90 backdrop-blur-xl rounded-2xl p-4 sm:p-6 border-2 border-white shadow-2xl">
                <p className="text-gray-900 text-center text-sm sm:text-base lg:text-lg leading-relaxed font-medium">
                  {gallery[selectedImage].caption}
                </p>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}