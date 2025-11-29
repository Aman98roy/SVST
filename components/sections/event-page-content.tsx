"use client";

import { motion } from "framer-motion";
import { Calendar, MapPin, LucideIcon } from "lucide-react";
import { EventImageSlider } from "./event-image-slider";

interface EventHighlight {
  icon: LucideIcon;
  title: string;
  description: string;
  color: string;
  iconColor: string;
}

interface EventPageContentProps {
  title: string;
  subtitle: string;
  organization: string;
  date: string;
  venue: string;
  fullVenueAddress?: string;
  description: string;
  eventHighlights: EventHighlight[];
  images: string[];
  impactTitle?: string;
  impactDescription?: string;
  dateIconColor?: string;
  venueIconColor?: string;
}

export function EventPageContent({
  title,
  subtitle,
  organization,
  date,
  venue,
  fullVenueAddress,
  description,
  eventHighlights,
  images,
  impactTitle,
  impactDescription,
  dateIconColor = "blue",
  venueIconColor = "green",
}: EventPageContentProps) {
  const dateColorClasses = {
    blue: "bg-blue-500/30 border-blue-400/30 text-blue-200",
    green: "bg-green-500/30 border-green-400/30 text-green-200",
    purple: "bg-purple-500/30 border-purple-400/30 text-purple-200",
  };

  const venueColorClasses = {
    green: "bg-green-500/30 border-green-400/30 text-green-200",
    blue: "bg-blue-500/30 border-blue-400/30 text-blue-200",
    teal: "bg-teal-500/30 border-teal-400/30 text-teal-200",
  };

  return (
    <section className="min-h-screen bg-gradient-to-b from-white via-gray-50/30 to-white dark:from-gray-900 dark:via-gray-950 dark:to-gray-900 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary-200/20 dark:bg-primary-900/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent-teal/20 dark:bg-accent-teal/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "1s" }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary-100/10 dark:bg-primary-900/5 rounded-full blur-3xl" />
      </div>

      {/* Hero Section - Compact with Info Cards */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary-500 via-primary-600 to-accent-teal">
          <div className="absolute inset-0 bg-grid-pattern opacity-10" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(255,255,255,0.1),transparent_50%)]" />
        </div>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">
            {/* Left: Title Section */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="lg:col-span-1 text-center lg:text-left"
            >
              <motion.span
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2, type: "spring" }}
                className="inline-block px-5 py-2 bg-white/20 backdrop-blur-md text-white rounded-full text-xs font-bold mb-4 tracking-wider uppercase border border-white/30"
              >
                {subtitle}
              </motion.span>
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, type: "spring" }}
                className="font-heading font-black text-4xl sm:text-5xl lg:text-6xl text-white mb-3 leading-tight tracking-tight"
              >
                {title.split(" ").map((word, i) => (
                  <span key={i}>
                    {i === title.split(" ").length - 1 ? (
                      <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-200 to-white">
                        {word}
                      </span>
                    ) : (
                      word
                    )}
                    {i < title.split(" ").length - 1 && " "}
                  </span>
                ))}
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="text-base sm:text-lg text-white/90 leading-relaxed font-light"
              >
                {organization}
              </motion.p>
            </motion.div>

            {/* Middle: Date & Venue Cards */}
            <div className="lg:col-span-2 grid grid-cols-2 gap-4">
              {/* Date Card */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.6 }}
                className="bg-white/15 backdrop-blur-md rounded-2xl p-6 border border-white/20 shadow-lg hover:bg-white/20 transition-all duration-300"
              >
                <div className="flex flex-col items-center text-center">
                  <div className={`w-16 h-16 ${dateColorClasses[dateIconColor as keyof typeof dateColorClasses] || dateColorClasses.blue} backdrop-blur-sm rounded-xl flex items-center justify-center mb-4 border`}>
                    <Calendar className="w-8 h-8" />
                  </div>
                  <h3 className="text-white font-bold text-base mb-2">Date</h3>
                  <p className="text-white text-2xl font-bold">{date}</p>
                </div>
              </motion.div>

              {/* Venue Card */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.6 }}
                className="bg-white/15 backdrop-blur-md rounded-2xl p-6 border border-white/20 shadow-lg hover:bg-white/20 transition-all duration-300"
              >
                <div className="flex flex-col items-center text-center">
                  <div className={`w-16 h-16 ${venueColorClasses[venueIconColor as keyof typeof venueColorClasses] || venueColorClasses.green} backdrop-blur-sm rounded-xl flex items-center justify-center mb-4 border`}>
                    <MapPin className="w-8 h-8" />
                  </div>
                  <h3 className="text-white font-bold text-base mb-2">Venue</h3>
                  <p className="text-white text-xl font-bold leading-tight">
                    {venue}
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
        {/* Introduction Section with Modern Design */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-5xl mx-auto mb-20"
        >
          <div className="relative group">
            {/* Decorative Corner Elements */}
            <div className="absolute -top-2 -left-2 w-20 h-20 border-t-4 border-l-4 border-primary-500 rounded-tl-3xl opacity-50 group-hover:opacity-100 transition-opacity" />
            <div className="absolute -bottom-2 -right-2 w-20 h-20 border-b-4 border-r-4 border-accent-teal rounded-br-3xl opacity-50 group-hover:opacity-100 transition-opacity" />
            
            <div className="relative bg-gradient-to-br from-white via-gray-50 to-white dark:from-gray-800 dark:via-gray-900 dark:to-gray-800 backdrop-blur-sm rounded-3xl p-10 lg:p-16 shadow-2xl border-2 border-gray-200/50 dark:border-gray-700/50 overflow-hidden">
              {/* Background Pattern */}
              <div className="absolute inset-0 opacity-5">
                <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_2px_2px,rgba(0,0,0,0.15)_1px,transparent_0)] bg-[length:40px_40px]" />
              </div>
              
              <div className="relative z-10">
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  className="flex items-center space-x-3 mb-6"
                >
                  <div className="w-1 h-12 bg-gradient-to-b from-primary-500 to-accent-teal rounded-full" />
                  <h2 className="font-heading font-bold text-3xl sm:text-4xl text-gray-900 dark:text-white">
                    About the Event
                  </h2>
                </motion.div>
                <p className="text-lg sm:text-xl lg:text-2xl text-gray-700 dark:text-gray-300 leading-relaxed font-light">
                  {description}
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Main Image Slider with Modern Frame - Moved Down */}
        {images.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mb-20"
          >
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-primary-500 via-accent-teal to-primary-500 rounded-3xl blur-2xl opacity-30 animate-pulse" />
              <div className="relative bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm rounded-3xl p-4 lg:p-6 shadow-2xl border-2 border-gray-200/50 dark:border-gray-700/50">
                <EventImageSlider images={images} />
              </div>
            </div>
          </motion.div>
        )}

        {/* Full Venue Address Section (if provided) */}
        {fullVenueAddress && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto mb-20"
          >
            <div className="bg-gradient-to-br from-white to-gray-50 dark:from-gray-800 dark:to-gray-900 backdrop-blur-sm rounded-3xl p-8 lg:p-10 shadow-xl border-2 border-gray-200/50 dark:border-gray-700/50">
              <div className="flex items-center space-x-3 mb-4">
                <div className={`w-12 h-12 ${venueColorClasses[venueIconColor as keyof typeof venueColorClasses] || venueColorClasses.green} rounded-xl flex items-center justify-center border`}>
                  <MapPin className="w-6 h-6" />
                </div>
                <h3 className="font-heading font-bold text-2xl text-gray-900 dark:text-white">Full Venue Address</h3>
              </div>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed whitespace-pre-line">
                {fullVenueAddress}
              </p>
            </div>
          </motion.div>
        )}

        {/* Event Highlights - Banner Style Left/Right */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-20"
        >
          <div className="text-center mb-16">
            <motion.span
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="inline-block px-6 py-3 bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 rounded-full text-sm font-bold mb-6 tracking-wide uppercase"
            >
              What to Expect
            </motion.span>
            <h2 className="font-heading font-black text-5xl sm:text-6xl lg:text-7xl text-gray-900 dark:text-white mb-4 leading-tight">
              Event Highlights
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-primary-500 to-accent-teal mx-auto rounded-full" />
          </div>
          
          <div className="space-y-4 sm:space-y-6">
            {eventHighlights.map((highlight, index) => {
              const Icon = highlight.icon;
              const isLeft = index % 2 === 0;
              return (
                <motion.div
                  key={highlight.title}
                  initial={{ opacity: 0, x: isLeft ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.6, type: "spring" }}
                  className="group relative"
                >
                  <div className={`flex ${isLeft ? 'flex-row' : 'flex-row-reverse'} items-center gap-4 sm:gap-6 md:gap-8 bg-gradient-to-br from-white via-gray-50 to-white dark:from-gray-800 dark:via-gray-900 dark:to-gray-800 rounded-2xl sm:rounded-3xl p-4 sm:p-6 md:p-8 lg:p-10 shadow-xl border-2 border-gray-200/50 dark:border-gray-700/50 hover:shadow-2xl transition-all duration-500 overflow-hidden`}>
                    {/* Glow Effect */}
                    <div className={`absolute -inset-0.5 bg-gradient-to-br ${highlight.color} rounded-3xl opacity-0 group-hover:opacity-30 blur-xl transition-opacity duration-500`} />
                    
                    {/* Icon Section */}
                    <div className={`relative z-10 w-1/4 sm:w-1/5 md:w-1/4 flex-shrink-0`}>
                      <motion.div
                        whileHover={{ rotate: 360, scale: 1.1 }}
                        transition={{ duration: 0.5 }}
                        className={`w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 lg:w-32 lg:h-32 bg-gradient-to-br ${highlight.color} rounded-2xl sm:rounded-3xl flex items-center justify-center shadow-2xl`}
                      >
                        <Icon className={`w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 lg:w-16 lg:h-16 ${highlight.iconColor}`} />
                      </motion.div>
                    </div>
                    
                    {/* Content Section */}
                    <div className={`relative z-10 ${isLeft ? 'w-3/4 sm:w-4/5 md:w-3/4 text-left' : 'w-3/4 sm:w-4/5 md:w-3/4 text-right'} flex-1`}>
                      <h3 className="font-heading font-bold text-base sm:text-xl md:text-2xl lg:text-3xl text-gray-900 dark:text-white mb-2 sm:mb-3">
                        {highlight.title}
                      </h3>
                      <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-xs sm:text-sm md:text-base lg:text-lg">
                        {highlight.description}
                      </p>
                    </div>
                    
                    {/* Decorative Line - Vertical for all devices */}
                    <div className={`absolute ${isLeft ? 'left-0 top-0 bottom-0' : 'right-0 top-0 bottom-0'} w-1 bg-gradient-to-b ${highlight.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* Impact Section (if provided) */}
        {impactTitle && impactDescription && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-5xl mx-auto mb-20"
          >
            <div className="relative group">
              <div className="absolute -top-2 -left-2 w-20 h-20 border-t-4 border-l-4 border-primary-500 rounded-tl-3xl opacity-50 group-hover:opacity-100 transition-opacity" />
              <div className="absolute -bottom-2 -right-2 w-20 h-20 border-b-4 border-r-4 border-accent-teal rounded-br-3xl opacity-50 group-hover:opacity-100 transition-opacity" />
              
              <div className="relative bg-gradient-to-br from-white via-gray-50 to-white dark:from-gray-800 dark:via-gray-900 dark:to-gray-800 backdrop-blur-sm rounded-3xl p-10 lg:p-16 shadow-2xl border-2 border-gray-200/50 dark:border-gray-700/50 overflow-hidden">
                <div className="absolute inset-0 opacity-5">
                  <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_2px_2px,rgba(0,0,0,0.15)_1px,transparent_0)] bg-[length:40px_40px]" />
                </div>
                
                <div className="relative z-10">
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="flex items-center space-x-3 mb-6"
                  >
                    <div className="w-1 h-12 bg-gradient-to-b from-primary-500 to-accent-teal rounded-full" />
                    <h2 className="font-heading font-bold text-3xl sm:text-4xl text-gray-900 dark:text-white">
                      {impactTitle}
                    </h2>
                  </motion.div>
                  <p className="text-lg sm:text-xl lg:text-2xl text-gray-700 dark:text-gray-300 leading-relaxed font-light">
                    {impactDescription}
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        )}

        {/* Call to Action - Premium Design */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-5xl mx-auto mb-20"
        >
          <div className="relative group">
            {/* Animated Background */}
            <div className="absolute -inset-1 bg-gradient-to-r from-primary-500 via-accent-teal to-primary-500 rounded-3xl opacity-75 group-hover:opacity-100 blur-xl transition-opacity duration-500 animate-pulse" />
            
            <div className="relative bg-gradient-to-br from-primary-500 via-primary-600 to-accent-teal rounded-3xl p-12 lg:p-16 text-center text-white shadow-2xl overflow-hidden">
              {/* Background Pattern */}
              <div className="absolute inset-0 opacity-20">
                <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_2px_2px,rgba(255,255,255,0.3)_1px,transparent_0)] bg-[length:40px_40px]" />
              </div>
              
              {/* Decorative Elements */}
              <div className="absolute top-0 left-0 w-64 h-64 bg-white/10 rounded-full -translate-x-1/2 -translate-y-1/2 blur-3xl" />
              <div className="absolute bottom-0 right-0 w-64 h-64 bg-white/10 rounded-full translate-x-1/2 translate-y-1/2 blur-3xl" />
              
              <div className="relative z-10">
                <motion.span
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  className="inline-block text-6xl mb-6"
                >
                  🇮🇳
                </motion.span>
                <h3 className="font-heading font-black text-4xl sm:text-5xl lg:text-6xl mb-6 leading-tight">
                  Join Us for {title}
                </h3>
                <p className="text-xl sm:text-2xl text-white/95 mb-10 max-w-3xl mx-auto leading-relaxed font-light">
                  Experience the celebration and be part of our community's commitment to nation-building and social service.
                </p>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-block"
                >
                  <a
                    href="/contact"
                    className="inline-flex items-center space-x-3 px-10 py-5 bg-white text-primary-600 rounded-full font-bold text-lg hover:bg-gray-50 transition-all duration-300 shadow-2xl hover:shadow-white/50"
                  >
                    <span>Contact Us to Participate</span>
                    <motion.span
                      animate={{ x: [0, 5, 0] }}
                      transition={{ duration: 1.5, repeat: Infinity }}
                    >
                      →
                    </motion.span>
                  </a>
                </motion.div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

