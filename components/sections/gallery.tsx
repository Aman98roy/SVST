"use client";

import { useState, useRef, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { 
  ArrowRight, 
  Share2, 
  Filter, 
  Grid3X3, 
  List, 
  ZoomIn, 
  Search,
  X,
  ArrowLeft,
  Camera,
  Calendar,
  MapPin,
  User,
  Maximize,
  Minimize,
  Info,
  Eye
} from "lucide-react";

// Enhanced gallery images with comprehensive metadata
const galleryImages = [
  // Independence Day Events
  { 
    id: 1, 
    src: "/images/Events/Independance day/hero-image.png", 
    alt: "Independence Day Flag Hoisting", 
    category: "Events", 
    subcategory: "Independence Day",
    description: "Patriotic celebration and flag hoisting ceremony with community participation", 
    location: "SVST Main Campus",
    date: "August 15, 2024",
    photographer: "Event Documentation Team",
    tags: ["independence", "patriotic", "flag", "national"],
    likes: 92,
    views: 623
  },
  { 
    id: 2, 
    src: "/images/Events/Independance day/WhatsApp Image 2025-08-15 at 8.33.02 AM.png", 
    alt: "Independence Day Cultural Program", 
    category: "Events", 
    subcategory: "Independence Day",
    description: "Cultural performances and patriotic activities during Independence Day celebration", 
    location: "SVST Campus",
    date: "August 15, 2024",
    photographer: "Cultural Team",
    tags: ["independence", "cultural", "patriotic", "celebration"],
    likes: 78,
    views: 456
  },
  { 
    id: 3, 
    src: "/images/Events/Independance day/WhatsApp Image 2025-08-15 at 8.33.11 AM.png", 
    alt: "Independence Day Community Gathering", 
    category: "Events", 
    subcategory: "Independence Day",
    description: "Community participation in Independence Day celebrations and awareness programs", 
    location: "SVST Campus",
    date: "August 15, 2024",
    photographer: "Community Team",
    tags: ["independence", "community", "gathering", "awareness"],
    likes: 65,
    views: 389
  },
  // Republic Day Events
  { 
    id: 4, 
    src: "/images/Events/RepublicDay/hero-image.jpg", 
    alt: "Republic Day Flag Ceremony", 
    category: "Events", 
    subcategory: "Republic Day",
    description: "Republic Day celebration with flag hoisting and constitutional awareness programs", 
    location: "SVST Campus",
    date: "January 26, 2024",
    photographer: "Event Team",
    tags: ["republic", "constitution", "flag", "ceremony"],
    likes: 87,
    views: 534
  },
  { 
    id: 5, 
    src: "/images/Events/RepublicDay/WhatsApp Image 2025-09-12 at 12.34.43 PM.jpeg", 
    alt: "Republic Day Cultural Events", 
    category: "Events", 
    subcategory: "Republic Day",
    description: "Cultural performances and civic awareness activities during Republic Day", 
    location: "SVST Campus",
    date: "January 26, 2024",
    photographer: "Cultural Team",
    tags: ["republic", "cultural", "civic", "awareness"],
    likes: 73,
    views: 467
  },
  // International Workers Day
  { 
    id: 6, 
    src: "/images/Events/International-worker-day/0-5-980x613.jpg", 
    alt: "International Workers Day Program", 
    category: "Events", 
    subcategory: "Workers Day",
    description: "Celebrating the contributions of workers and promoting labor rights awareness", 
    location: "SVST Campus",
    date: "May 1, 2024",
    photographer: "Labor Affairs Team",
    tags: ["workers", "labor", "rights", "celebration"],
    likes: 56,
    views: 342
  },
  // Yoga Day Events
  { 
    id: 7, 
    src: "/images/Events/YogaDay/1.jpeg", 
    alt: "International Yoga Day Practice", 
    category: "Events", 
    subcategory: "Yoga Day",
    description: "Community yoga sessions promoting health and wellness awareness", 
    location: "SVST Campus",
    date: "June 21, 2024",
    photographer: "Wellness Team",
    tags: ["yoga", "wellness", "health", "meditation"],
    likes: 94,
    views: 678
  },
  { 
    id: 8, 
    src: "/images/Events/YogaDay/main.jpeg", 
    alt: "Yoga Day Wellness Program", 
    category: "Events", 
    subcategory: "Yoga Day",
    description: "Group yoga activities and meditation sessions for community wellness", 
    location: "SVST Campus",
    date: "June 21, 2024",
    photographer: "Wellness Team",
    tags: ["yoga", "group", "meditation", "wellness"],
    likes: 82,
    views: 543
  },
  // Cultural Programs
  { 
    id: 9, 
    src: "/images/Events/Cultural programs/hero-image.jpeg", 
    alt: "Traditional Cultural Performance", 
    category: "Events", 
    subcategory: "Cultural Programs",
    description: "Traditional folk performances showcasing Maharashtra's rich cultural heritage", 
    location: "Training Center, Nimbala Makta",
    date: "2024",
    photographer: "Cultural Documentation Team",
    tags: ["culture", "heritage", "traditional", "maharashtra"],
    likes: 108,
    views: 765
  },
  { 
    id: 10, 
    src: "/images/Events/Cultural programs/10.jpeg", 
    alt: "Community Cultural Event", 
    category: "Events", 
    subcategory: "Cultural Programs",
    description: "Cultural competitions and traditional art performances by local youth", 
    location: "Training Center, Nimbala Makta",
    date: "2024",
    photographer: "Youth Development Team",
    tags: ["culture", "youth", "competition", "art"],
    likes: 89,
    views: 567
  },
  { 
    id: 11, 
    src: "/images/Events/Cultural programs/12.jpeg", 
    alt: "Cultural Heritage Festival", 
    category: "Events", 
    subcategory: "Cultural Programs",
    description: "Celebrating Maharashtra's cultural traditions through music, dance, and drama", 
    location: "Training Center, Nimbala Makta",
    date: "2024",
    photographer: "Cultural Team",
    tags: ["heritage", "music", "dance", "drama"],
    likes: 95,
    views: 634
  },
  // Activities - Farmers Training
  { 
    id: 12, 
    src: "/images/activities/farmers-training.jpg", 
    alt: "Agricultural Training Program", 
    category: "Activities", 
    subcategory: "Farmers Training",
    description: "Comprehensive training programs for farmers on modern agricultural techniques", 
    location: "Rural Training Centers",
    date: "2024",
    photographer: "Agricultural Extension Team",
    tags: ["farming", "agriculture", "technology", "training"],
    likes: 67,
    views: 423
  },
  { 
    id: 13, 
    src: "/images/activities/organic-farming.jpg", 
    alt: "Organic Farming Workshop", 
    category: "Activities", 
    subcategory: "Farmers Training",
    description: "Training farmers in sustainable organic farming methods and practices", 
    location: "Organic Demonstration Farm",
    date: "2024",
    photographer: "Sustainability Team",
    tags: ["organic", "sustainable", "eco-friendly", "agriculture"],
    likes: 72,
    views: 398
  },
  // Activities - Skill Development
  { 
    id: 14, 
    src: "/images/activities/skill-development.jpg", 
    alt: "Vocational Skills Training", 
    category: "Activities", 
    subcategory: "Skill Development",
    description: "Comprehensive skill development programs for employment generation", 
    location: "Skills Development Center",
    date: "2024",
    photographer: "Professional Training Team",
    tags: ["skills", "development", "professional", "career"],
    likes: 76,
    views: 445
  },
  // Activities - Women Empowerment
  { 
    id: 15, 
    src: "/images/activities/women-empowerment.jpg", 
    alt: "Women's Skill Development", 
    category: "Activities", 
    subcategory: "Women Empowerment",
    description: "Empowering women through skill development and entrepreneurship training", 
    location: "Women's Training Center",
    date: "2024",
    photographer: "Women's Development Team",
    tags: ["women", "empowerment", "skills", "entrepreneurship"],
    likes: 87,
    views: 432
  },
  // Activities - Community Outreach
  { 
    id: 16, 
    src: "/images/activities/community-outreach.jpg", 
    alt: "Community Service Program", 
    category: "Activities", 
    subcategory: "Community Outreach",
    description: "Community outreach programs for social development and awareness", 
    location: "Rural Communities",
    date: "2024",
    photographer: "Field Team",
    tags: ["community", "outreach", "rural", "awareness"],
    likes: 54,
    views: 287
  }
];

// Filter categories for enhanced filtering
const filterCategories = [
  { value: 'All', label: 'All Events & Activities' },
  { value: 'Events', label: 'All Events' },
  { value: 'Activities', label: 'All Activities' },
  { value: 'Independence Day', label: 'Independence Day' },
  { value: 'Republic Day', label: 'Republic Day' },
  { value: 'Workers Day', label: 'Workers Day' },
  { value: 'Yoga Day', label: 'Yoga Day' },
  { value: 'Cultural Programs', label: 'Cultural Programs' },
  { value: 'Farmers Training', label: 'Farmers Training' },
  { value: 'Skill Development', label: 'Skill Development' },
  { value: 'Women Empowerment', label: 'Women Empowerment' },
  { value: 'Community Outreach', label: 'Community Outreach' }
];

type FilterType = 'All' | 'Training' | 'Events' | 'Activities';
type ViewType = 'grid' | 'list';
type SortType = 'newest' | 'oldest' | 'popular' | 'alphabetical';

export function Gallery() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalIndex, setModalIndex] = useState(0);
  const [activeFilter, setActiveFilter] = useState<FilterType>('All');
  const [viewType, setViewType] = useState<ViewType>('grid');
  const [sortType, setSortType] = useState<SortType>('newest');
  const [searchTerm, setSearchTerm] = useState("");
  const [hoveredImage, setHoveredImage] = useState<number | null>(null);
  const [showAll, setShowAll] = useState(false);

  const [selectedImage, setSelectedImage] = useState<typeof galleryImages[0] | null>(null);
  const [modalImage, setModalImage] = useState<typeof galleryImages[0] | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [loadedImages, setLoadedImages] = useState<Set<number>>(new Set());
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [isFocusMode, setIsFocusMode] = useState(true); // Will be updated based on screen size
  
  // Set focus mode based on screen size
  useEffect(() => {
    const updateFocusMode = () => {
      // Show info panel on desktop (md and above), hide on mobile
      const isDesktop = window.innerWidth >= 768; // md breakpoint
      setIsFocusMode(!isDesktop);
    };
    
    updateFocusMode();
    window.addEventListener('resize', updateFocusMode);
    
    return () => window.removeEventListener('resize', updateFocusMode);
  }, []);
  
  // Advanced filtering and sorting
  const filteredAndSortedImages = galleryImages
    .filter(img => {
      const matchesFilter = activeFilter === 'All' || img.category === activeFilter;
      const matchesSearch = searchTerm === "" || 
        img.alt.toLowerCase().includes(searchTerm.toLowerCase()) ||
        img.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        img.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
      return matchesFilter && matchesSearch;
    })
    .sort((a, b) => {
      switch (sortType) {
        case 'newest':
          return new Date(b.date).getTime() - new Date(a.date).getTime();
        case 'oldest':
          return new Date(a.date).getTime() - new Date(b.date).getTime();
        case 'popular':
          return (b.likes + b.views * 0.1) - (a.likes + a.views * 0.1);
        case 'alphabetical':
          return a.alt.localeCompare(b.alt);
        default:
          return 0;
      }
    });
  
  const imageSources = filteredAndSortedImages.map(img => img.src);

  const openModal = (index: number) => {
    setModalIndex(index);
    setModalImage(filteredAndSortedImages[index]);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setModalImage(null);
    setIsFullscreen(false);
    setIsFocusMode(true); // Reset to focus mode for next time
  };

  const goToPrevious = useCallback(() => {
    const currentIndex = filteredAndSortedImages.findIndex(img => img.id === modalImage?.id);
    const prevIndex = currentIndex > 0 ? currentIndex - 1 : filteredAndSortedImages.length - 1;
    setModalImage(filteredAndSortedImages[prevIndex]);
    setModalIndex(prevIndex);
  }, [filteredAndSortedImages, modalImage]);

  const goToNext = useCallback(() => {
    const currentIndex = filteredAndSortedImages.findIndex(img => img.id === modalImage?.id);
    const nextIndex = currentIndex < filteredAndSortedImages.length - 1 ? currentIndex + 1 : 0;
    setModalImage(filteredAndSortedImages[nextIndex]);
    setModalIndex(nextIndex);
  }, [filteredAndSortedImages, modalImage]);

  const handleModalNavigate = (index: number) => {
    setModalIndex(index);
    setModalImage(filteredAndSortedImages[index]);
  };



  const handleImageLoad = useCallback((imageId: number) => {
    setLoadedImages(prev => new Set([...prev, imageId]));
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 1000);
    return () => clearTimeout(timer);
  }, []);

  // Keyboard event handling for modal navigation and fullscreen
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isModalOpen) return;
      
      switch (e.key) {
        case 'Escape':
          if (isFullscreen) {
            setIsFullscreen(false);
          } else {
            closeModal();
          }
          break;
        case 'ArrowLeft':
          e.preventDefault();
          goToPrevious();
          break;
        case 'ArrowRight':
          e.preventDefault();
          goToNext();
          break;
        case 'f':
        case 'F':
          e.preventDefault();
          setIsFullscreen(!isFullscreen);
          break;
        case 'i':
        case 'I':
          e.preventDefault();
          setIsFocusMode(prev => !prev);
          break;
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [isModalOpen, isFullscreen, modalImage, goToNext, goToPrevious]);

  const filters: FilterType[] = ['All', 'Training', 'Events', 'Activities'];
  const sortOptions: { value: SortType; label: string }[] = [
    { value: 'newest', label: 'Newest First' },
    { value: 'oldest', label: 'Oldest First' },
    { value: 'popular', label: 'Most Popular' },
    { value: 'alphabetical', label: 'Alphabetical' }
  ];

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
          <h2 className="font-heading font-bold text-xl sm:text-2xl lg:text-3xl text-gray-900 dark:text-white mb-4">
            Gallery
          </h2>
          <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400 max-w-2xl mx-auto content-text text-center">
            Discover our journey through powerful moments of transformation, community engagement, and impactful initiatives across Maharashtra
          </p>
        </motion.div>

        {/* Advanced Controls */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="mb-12"
        >
          {/* Search Bar */}
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between mb-6">
            <div className="relative w-full max-w-sm">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
              <input
                type="text"
                placeholder="Search photos..."
                value={searchTerm}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => setSearchTerm(e.target.value)}
                className="pl-10 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm w-full px-3 py-2 text-sm border border-gray-200 dark:border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
              />
            </div>
            
            {/* Sort Options */}
            <select
              value={sortType}
              onChange={(e) => setSortType(e.target.value as SortType)}
              className="px-3 py-2 text-sm rounded-lg border border-gray-200 dark:border-gray-700 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm text-gray-700 dark:text-gray-300 min-w-32"
            >
              {sortOptions.map(option => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
          </div>

          {/* Filters and View Controls */}
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            {/* Category Filters */}
            <div className="flex flex-wrap gap-2 justify-center">
              {filters.map((filter) => (
                <Button
                  key={filter}
                  variant={activeFilter === filter ? "primary" : "outline"}
                  size="sm"
                  onClick={() => setActiveFilter(filter)}
                  className="transition-all duration-300 hover:scale-105 text-xs sm:text-sm px-2 sm:px-3"
                >
                  <Filter className="w-3 h-3 sm:w-4 sm:h-4 mr-1 sm:mr-2" />
                  {filter}
                  <span className="ml-1 sm:ml-2 bg-gray-200 dark:bg-gray-700 text-xs px-1.5 py-0.5 rounded-full">
                    {filter === 'All' ? galleryImages.length : galleryImages.filter(img => img.category === filter).length}
                  </span>
                </Button>
              ))}
            </div>

            {/* View Toggle */}
            <div className="flex gap-1 sm:gap-2 bg-gray-100 dark:bg-gray-800 p-1 rounded-lg">
              <Button
                variant={viewType === 'grid' ? "primary" : "ghost"}
                size="sm"
                onClick={() => setViewType('grid')}
                className="transition-all duration-300 p-2"
              >
                <Grid3X3 className="w-3 h-3 sm:w-4 sm:h-4" />
              </Button>
              <Button
                variant={viewType === 'list' ? "primary" : "ghost"}
                size="sm"
                onClick={() => setViewType('list')}
                className="transition-all duration-300 p-2"
              >
                <List className="w-3 h-3 sm:w-4 sm:h-4" />
              </Button>
            </div>
          </div>

          {/* Results Count */}
          <div className="mt-4 text-center">
            <p className="text-sm text-gray-500 dark:text-gray-400">
              Showing {filteredAndSortedImages.length} of {galleryImages.length} photos
              {searchTerm && (
                <span className="ml-2">
                  for "<span className="font-medium text-primary-600 dark:text-primary-400">{searchTerm}</span>"
                </span>
              )}
            </p>
          </div>
        </motion.div>

        {/* Advanced Gallery Layout */}
        <AnimatePresence mode="wait">
          {isLoading ? (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="flex justify-center items-center py-20"
            >
              <div className="flex space-x-2">
                {[...Array(3)].map((_, i) => (
                  <div
                    key={i}
                    className="w-4 h-4 bg-primary-500 rounded-full animate-bounce"
                    style={{ animationDelay: `${i * 0.1}s` }}
                  />
                ))}
              </div>
            </motion.div>
          ) : (
            <motion.div
              key={`${activeFilter}-${viewType}-${searchTerm}`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className={
                viewType === 'grid' 
                  ? 'grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 sm:gap-3 lg:gap-4' 
                  : 'grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4'
              }
            >
              {(showAll ? filteredAndSortedImages : filteredAndSortedImages.slice(0, 8)).map((image, index) => (
                <motion.div
                  key={`${activeFilter}-${image.id}-${viewType}`}
                  layout
                  initial={{ opacity: 0, scale: 0.95, y: 10 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  transition={{ 
                    delay: index * 0.02, 
                    duration: 0.3,
                    type: "spring",
                    stiffness: 200 
                  }}
                  whileHover={{ 
                    scale: viewType === 'list' ? 1 : 1.03,
                    transition: { duration: 0.2 }
                  }}
                  className={`
                    relative group cursor-pointer overflow-hidden rounded-2xl
                    ${viewType === 'grid' ? 'aspect-[4/3]' : 'flex items-center bg-white dark:bg-gray-800 p-4'}
                    shadow-lg hover:shadow-2xl transition-all duration-500
                    bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-900
                  `}
                  onClick={() => openModal(index)}
                  onMouseEnter={() => setHoveredImage(image.id)}
                  onMouseLeave={() => setHoveredImage(null)}
                >
                  {/* Loading Skeleton */}
                  {!loadedImages.has(image.id) && (
                    <div className="absolute inset-0 bg-gray-200 dark:bg-gray-700 animate-pulse" />
                  )}
                  
                  {/* Simple Hover Overlay */}
                  {viewType !== 'list' && (
                    <div className={`
                      absolute inset-0 bg-black/20 backdrop-blur-[1px]
                      ${hoveredImage === image.id ? 'opacity-100' : 'opacity-0'}
                      transition-all duration-300 z-10
                    `} />
                  )}

                  {/* Grid Caption Overlay */}
                  {viewType === 'grid' && (
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-2 sm:p-3 z-20">
                      <h3 className="text-white font-medium text-xs sm:text-sm line-clamp-1">{image.alt}</h3>
                    </div>
                  )}
                  
                  {/* Main Image */}
                  <div className={viewType === 'list' ? 'w-20 h-20 sm:w-24 sm:h-24 md:w-32 md:h-32 flex-shrink-0 mr-3 sm:mr-4' : 'w-full h-full'}>
                    <Image
                      src={image.src}
                      alt={image.alt}
                      fill={viewType !== 'list'}
                      width={viewType === 'list' ? 128 : undefined}
                      height={viewType === 'list' ? 128 : undefined}
                      className={`
                        ${viewType === 'list' ? 'w-full h-full rounded-xl' : 'w-full h-full'} 
                        object-cover transition-all duration-700
                        ${hoveredImage === image.id ? 'scale-110 brightness-110' : 'scale-100'}
                      `}
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                      onLoad={() => handleImageLoad(image.id)}
                      loading="lazy"
                    />
                  </div>

                  {/* Simple Content Overlay for List View Only */}
                  {viewType === 'list' && (
                    <div className="flex-1 text-gray-900 dark:text-white">
                      <div className="flex items-start justify-between mb-3">
                        <div className="flex-1">
                          <h3 className="font-semibold text-sm sm:text-base mb-1 line-clamp-2">{image.alt}</h3>
                          <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400 line-clamp-2 mb-2 content-text">
                            {image.description}
                          </p>
                        </div>
                      </div>
                      
                      <div className="flex items-center justify-between">
                        <span className="bg-primary-100 text-primary-800 dark:bg-primary-900 dark:text-primary-200 text-xs px-2 py-1 rounded-full">
                          {image.subcategory}
                        </span>
                      </div>
                    </div>
                  )}

                  {/* Action Button */}
                  <div className={`
                    absolute top-4 right-4 z-30 transition-all duration-300
                    ${hoveredImage === image.id ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}
                  `}>
                    <Button
                      size="sm"
                      variant="secondary"
                      className="w-9 h-9 p-0 bg-white/20 backdrop-blur-sm hover:bg-white/30"
                      onClick={(e) => {
                        e.stopPropagation();
                        openModal(index);
                      }}
                    >
                      <ZoomIn className="w-4 h-4 text-white" />
                    </Button>
                  </div>


                </motion.div>
              ))}
            </motion.div>
          )}
        </AnimatePresence>

        {/* No Results State */}
        {filteredAndSortedImages.length === 0 && !isLoading && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center py-20"
          >
            <div className="w-24 h-24 bg-gray-100 dark:bg-gray-800 rounded-full flex items-center justify-center mx-auto mb-6">
              <Search className="w-12 h-12 text-gray-400" />
            </div>
            <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-2">
              No photos found
            </h3>
            <p className="text-gray-500 dark:text-gray-400 mb-6 content-text">
              Try adjusting your search terms or filters
            </p>
            <Button
              onClick={() => {
                setSearchTerm("");
                setActiveFilter('All');
              }}
              variant="outline"
            >
              Clear Filters
            </Button>
          </motion.div>
        )}

        {/* View Gallery Button */}
        {!showAll && filteredAndSortedImages.length > 8 && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="text-center mt-12"
          >
            <Button
              size="lg"
              onClick={() => setShowAll(true)}
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 rounded-full text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
            >
              <Camera className="mr-2 w-5 h-5" />
              View Full Gallery ({filteredAndSortedImages.length} Photos)
            </Button>
          </motion.div>
        )}
        
        {/* Show Less Button */}
        {showAll && filteredAndSortedImages.length > 8 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="text-center mt-12"
          >
            <Button
              size="lg"
              onClick={() => setShowAll(false)}
              variant="outline"
              className="border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300"
            >
              Show Less
            </Button>
          </motion.div>
        )}
      </div>

      {/* Advanced Enhanced Modal */}
      <AnimatePresence>
        {modalImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/95 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={closeModal}
          >
            <motion.div
              initial={{ scale: 0.7, opacity: 0, y: 100 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.7, opacity: 0, y: 100 }}
              transition={{ 
                type: "spring", 
                damping: 25, 
                stiffness: 200,
                duration: 0.6 
              }}
              className={`relative ${isFullscreen ? 'w-full h-full max-w-none max-h-none' : 'max-w-6xl w-full max-h-[90vh] sm:max-h-[95vh] mx-2 sm:mx-4'} bg-white dark:bg-gray-900 ${isFullscreen ? '' : 'rounded-xl sm:rounded-2xl lg:rounded-3xl'} overflow-hidden shadow-2xl border border-gray-200 dark:border-gray-700`}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Modal Header */}
              <div className="absolute top-0 left-0 right-0 bg-gradient-to-b from-black/80 to-transparent z-30 p-3 sm:p-4 lg:p-6">
                <div className="flex items-center justify-end">
                  <div className="flex items-center gap-2">
                    <Button
                      onClick={() => setIsFocusMode(!isFocusMode)}
                      className="w-10 h-10 p-0 bg-white/20 hover:bg-white/30 text-white rounded-full backdrop-blur-sm"
                      title={isFocusMode ? "Show Details" : "Hide Details"}
                    >
                      {isFocusMode ? <Info className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                    </Button>
                    <Button
                      onClick={() => setIsFullscreen(!isFullscreen)}
                      className="w-10 h-10 p-0 bg-white/20 hover:bg-white/30 text-white rounded-full backdrop-blur-sm"
                      title={isFullscreen ? "Exit Fullscreen" : "Enter Fullscreen"}
                    >
                      {isFullscreen ? <Minimize className="w-5 h-5" /> : <Maximize className="w-5 h-5" />}
                    </Button>
                  </div>
                </div>
              </div>
              
              {/* Close Button - Top Right Edge */}
              <Button
                onClick={closeModal}
                className="absolute top-2 right-2 sm:top-4 sm:right-4 w-10 h-10 sm:w-12 sm:h-12 p-0 bg-red-500 hover:bg-red-600 text-white rounded-full shadow-[0_0_20px_rgba(239,68,68,0.6)] border-2 border-white flex items-center justify-center z-[200]"
              >
                <X className="w-5 h-5 sm:w-6 sm:h-6" strokeWidth={3} />
              </Button>

              {/* Main Content with Navigation */}
              <div className="relative flex items-center bg-gray-100 dark:bg-gray-800">
                {/* Left Arrow - Outside Image */}
                <Button
                  onClick={goToPrevious}
                  className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 p-0 bg-blue-500 hover:bg-blue-600 text-white rounded-full shadow-[0_0_20px_rgba(59,130,246,0.6)] border-2 border-white flex items-center justify-center z-[200] active:scale-95 transition-transform mx-1 sm:mx-2 md:mx-3"
                >
                  <ArrowLeft className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" strokeWidth={3} />
                </Button>

                {/* Image Container with Padding */}
                <div className="relative flex-1 px-1 sm:px-2 md:px-4">
                  <Image
                    src={modalImage.src}
                    alt={modalImage.alt}
                    width={1400}
                    height={900}
                    className={`w-full h-auto ${isFullscreen ? 'max-h-[calc(100vh-120px)]' : isFocusMode ? 'max-h-[85vh]' : 'max-h-[70vh]'} object-contain`}
                    priority
                  />
                  

                  {/* Image Counter */}
                  <div className="absolute bottom-2 sm:bottom-4 left-1/2 -translate-x-1/2 bg-black/60 backdrop-blur-sm text-white px-3 py-1 sm:px-4 sm:py-2 rounded-full text-xs sm:text-sm">
                    {(filteredAndSortedImages.findIndex(img => img.id === modalImage.id) + 1)} of {filteredAndSortedImages.length}
                  </div>
                </div>

                {/* Right Arrow - Outside Image */}
                <Button
                  onClick={goToNext}
                  className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 p-0 bg-blue-500 hover:bg-blue-600 text-white rounded-full shadow-[0_0_20px_rgba(59,130,246,0.6)] border-2 border-white flex items-center justify-center z-[200] active:scale-95 transition-transform mx-1 sm:mx-2 md:mx-3"
                >
                  <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" strokeWidth={3} />
                </Button>
              </div>

              {/* Enhanced Info Panel - Only show when not in focus mode */}
              {!isFocusMode && (
                <div className="p-3 sm:p-4 lg:p-6 bg-white dark:bg-gray-900">
                  <div className="flex flex-col lg:flex-row gap-4 lg:gap-6">
                    {/* Left Column - Main Info */}
                    <div className="flex-1">
                      <div className="flex items-start justify-between mb-3 sm:mb-4">
                        <div>
                          <h2 className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-900 dark:text-white mb-2">
                            {modalImage.alt}
                          </h2>
                          <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400 content-text leading-relaxed">
                            {modalImage.description}
                          </p>
                        </div>
                        <span className="bg-primary-100 text-primary-800 dark:bg-primary-900 dark:text-primary-200 px-3 py-1 rounded-full text-sm font-medium">
                          {modalImage.subcategory}
                        </span>
                      </div>


                    </div>

                    {/* Right Column - Metadata */}
                    <div className="lg:w-72 space-y-3 lg:space-y-4">
                      <div className="bg-gray-50 dark:bg-gray-800 rounded-lg lg:rounded-xl p-3 lg:p-4">
                        <h4 className="font-semibold text-sm lg:text-base text-gray-900 dark:text-white mb-2 lg:mb-3">Details</h4>
                        <div className="space-y-2 lg:space-y-3">
                          <div className="flex items-center gap-2 lg:gap-3 text-xs lg:text-sm">
                            <Calendar className="w-3 h-3 lg:w-4 lg:h-4 text-gray-500" />
                            <span className="text-gray-600 dark:text-gray-400">
                              {new Date(modalImage.date).toLocaleDateString('en-US', {
                                year: 'numeric',
                                month: 'short',
                                day: 'numeric'
                              })}
                            </span>
                          </div>
                          <div className="flex items-center gap-2 lg:gap-3 text-xs lg:text-sm">
                            <MapPin className="w-3 h-3 lg:w-4 lg:h-4 text-gray-500" />
                            <span className="text-gray-600 dark:text-gray-400">{modalImage.location}</span>
                          </div>
                          <div className="flex items-center gap-2 lg:gap-3 text-xs lg:text-sm">
                            <User className="w-3 h-3 lg:w-4 lg:h-4 text-gray-500" />
                            <span className="text-gray-600 dark:text-gray-400">{modalImage.photographer}</span>
                          </div>
                        </div>
                      </div>




                    </div>
                  </div>
                </div>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}

export default Gallery

