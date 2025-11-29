"use client";

import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export function History() {
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
            About Us
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Our journey of service and community empowerment
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          <Card>
            <CardHeader>
              <CardTitle>Our Story</CardTitle>
            </CardHeader>
            <CardContent className="prose prose-lg dark:prose-invert max-w-none">
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                Swami Vivekanand Seva Trust is a non-profit NGO incorporated
                under the relevant acts. The organization started with the hope
                to bring key development activities for the underdeveloped and
                deprived community in our region.
              </p>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                It is always being involved with the community in a very
                participatory way and gaining good contributions from the people
                by way of cash, kindness, and selfless involvement. But the
                management itself realized that as the platform has been able to
                draw the good faith of the people of its far surrounding and
                based on that to keep the faith of people sustainable as a
                prominent key facilitator, the governing body itself decided &
                started its own tiny income generation activities.
              </p>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                Today, we continue to serve communities across Hingoli and
                beyond, maintaining our commitment to transparency,
                professionalism, and people-centered development.
              </p>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}

