"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Calendar, ArrowRight, ImageIcon, User, MapPin } from "lucide-react";

const blogPosts = [
  {
    title: "Hand of Hope: Flood Relief Initiative",
    date: "September 29, 2025",
    excerpt:
      "Swami Vivekanand Seva Trust distributed essential food kits to flood-affected families in Kothari, Taluka Basmat.",
    href: "/blog/flood-relief",
    image: "/images/blog/flood-relief.jpg",
    imageLabel: "Flood relief distribution at Kothari village",
    imageCredit: "SVST Team",
    location: "Kothari, Taluka Basmat",
    category: "Community Service"
  },
  {
    title: "National Youth Day Celebration 2025",
    date: "January 12, 2025",
    excerpt:
      "Annual celebration of Swami Vivekananda's birthday with youth rallies, cultural programs, and inspirational speeches.",
    href: "/blog/youth-day-2025",
    image: "/images/blog/youth-day.jpg",
    imageLabel: "Youth participating in National Youth Day celebration",
    imageCredit: "SVST Photography Team",
    location: "SVST Campus",
    category: "Celebration"
  },
  {
    title: "Farmers Training Program Success",
    date: "December 15, 2024",
    excerpt:
      "Over 100 farmers completed our modern agriculture training program, learning sustainable farming techniques.",
    href: "/blog/farmers-training-success",
    image: "/images/blog/farmers-training.jpg",
    imageLabel: "Farmers learning sustainable agriculture techniques",
    imageCredit: "Agricultural Training Division",
    location: "SVST Training Center",
    category: "Training"
  },
];

export function BlogList() {
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
            Blog & News
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto content-text">
            Stay updated with our latest activities, events, and impact stories from the field. Discover how we're making a difference in rural communities across Maharashtra.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {blogPosts.map((post, index) => (
            <motion.div
              key={post.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
            >
              <Card className="h-full flex flex-col overflow-hidden group hover:shadow-2xl transition-all duration-300">
                {/* Featured Image with Label */}
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={post.image}
                    alt={post.imageLabel}
                    fill
                    className="object-cover img-justified group-hover:scale-110 transition-transform duration-300"
                  />
                  
                  {/* Category Badge */}
                  <div className="absolute top-3 left-3">
                    <span className="bg-blue-600 text-white text-xs px-2 py-1 rounded-full font-medium">
                      {post.category}
                    </span>
                  </div>
                  
                  {/* Image Attribution Overlay */}
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-3">
                    <div className="text-white text-xs">
                      <p className="font-medium mb-1">{post.imageLabel}</p>
                      <div className="flex items-center gap-3 text-gray-200">
                        <div className="flex items-center gap-1">
                          <User className="w-3 h-3" />
                          <span>{post.imageCredit}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <MapPin className="w-3 h-3" />
                          <span>{post.location}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <CardHeader>
                  <div className="flex items-center space-x-2 text-gray-500 dark:text-gray-400 mb-2">
                    <Calendar className="w-4 h-4" />
                    <span className="text-sm">{post.date}</span>
                  </div>
                  <CardTitle className="text-xl group-hover:text-blue-600 transition-colors">
                    {post.title}
                  </CardTitle>
                </CardHeader>
                
                <CardContent className="flex-1 flex flex-col">
                  <p className="text-gray-600 dark:text-gray-400 mb-4 flex-1 content-text">
                    {post.excerpt}
                  </p>
                  <Link
                    href={post.href}
                    className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400 font-medium text-sm inline-flex items-center transition-colors group"
                  >
                    Read More
                    <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

