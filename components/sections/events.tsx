"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar, MapPin, ArrowRight } from "lucide-react";

const events = [
  {
    title: "Swami Vivekananda's Birthday",
    date: "12th January",
    description:
      "Swami Vivekanand Seva Trust Hingoli has been celebrating Swami Vivekananda's Birthday on 12th January as National Youth Day every year since 2010. The celebration features flag hoisting, youth rallies, cultural programs, inspirational speeches, and discussions on his philosophy.",
    href: "/events/youth-day",
  },
  {
    title: "Republic Day",
    date: "26th January",
    description:
      "Swami Vivekanand Seva Trust Hingoli celebrated Republic Day on 26th January with flag hoisting, cultural programs, and tributes, fostering unity, patriotism, and dedication to social service.",
    href: "/events/republic-day",
  },
  {
    title: "Independence Day",
    date: "15th August",
    description:
      "Swami Vivekanand Seva Trust Hingoli celebrated Independence Day on 15th August with flag hoisting, cultural programs, and tributes, fostering unity, patriotism, and dedication to social service.",
    href: "/events/independence-day",
  },
];

export function Events() {
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
            Our Events
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Celebrating our culture, values, and commitment to community service
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {events.map((event, index) => (
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
                    <span className="font-semibold">{event.date}</span>
                  </div>
                  <CardTitle className="text-xl">{event.title}</CardTitle>
                </CardHeader>
                <CardContent className="flex-1 flex flex-col">
                  <p className="text-gray-600 dark:text-gray-400 mb-4 flex-1">
                    {event.description}
                  </p>
                  <Button variant="outline" size="sm" asChild>
                    <Link href={event.href}>
                      Read More
                      <ArrowRight className="ml-2 w-4 h-4" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="text-center mt-12"
        >
          <Button size="lg" asChild>
            <Link href="/events">View All Events</Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}

