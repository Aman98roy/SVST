"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Calendar, MapPin, Clock } from "lucide-react";

const allEvents = [
  {
    title: "Swami Vivekananda's Birthday",
    date: "12th January",
    description:
      "Celebrated as National Youth Day with flag hoisting, youth rallies, cultural programs, and inspirational speeches.",
    href: "/events/youth-day",
    category: "National Celebration",
  },
  {
    title: "Republic Day",
    date: "26th January",
    description:
      "Flag hoisting, cultural programs, and tributes fostering unity, patriotism, and dedication to social service.",
    href: "/events/republic-day",
    category: "National Celebration",
  },
  {
    title: "Independence Day",
    date: "15th August",
    description:
      "Celebration with flag hoisting, cultural programs, and tributes to our freedom fighters.",
    href: "/events/independence-day",
    category: "National Celebration",
  },
  {
    title: "International Workers' Day",
    date: "1st May",
    description:
      "Recognizing and celebrating the contributions of workers and laborers in our community.",
    href: "/events/workers-day",
    category: "Social",
  },
  {
    title: "Yoga Day",
    date: "21st June",
    description:
      "Promoting health and wellness through yoga sessions and awareness programs.",
    href: "/events/yoga-day",
    category: "Health & Wellness",
  },
  {
    title: "Employment Fairs",
    date: "Various Dates",
    description:
      "Connecting job seekers with employment opportunities through organized job fairs.",
    href: "/events/employment-fairs",
    category: "Employment",
  },
  {
    title: "Cultural Program",
    date: "Various Dates",
    description:
      "Showcasing local culture, traditions, and talent through various cultural events.",
    href: "/events/cultural-program",
    category: "Cultural",
  },
];

export function EventsList() {
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
            Our Events
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Join us in celebrating our culture, values, and commitment to
            community service
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {allEvents.map((event, index) => (
            <motion.div
              key={event.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
            >
              <Card className="h-full flex flex-col">
                <CardHeader>
                  <div className="flex items-center space-x-2 text-primary-500 mb-2">
                    <Calendar className="w-5 h-5" />
                    <span className="font-semibold text-sm">{event.date}</span>
                  </div>
                  <div className="mb-2">
                    <span className="inline-block px-3 py-1 bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 text-xs font-medium rounded-full">
                      {event.category}
                    </span>
                  </div>
                  <CardTitle className="text-xl">{event.title}</CardTitle>
                </CardHeader>
                <CardContent className="flex-1 flex flex-col">
                  <p className="text-gray-600 dark:text-gray-400 mb-4 flex-1">
                    {event.description}
                  </p>
                  <Link
                    href={event.href}
                    className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400 font-medium text-sm transition-colors"
                  >
                    Learn More →
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

