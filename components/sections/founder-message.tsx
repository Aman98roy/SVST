"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Quote } from "lucide-react";

export function FounderMessage() {
  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-950">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          <Card>
            <CardContent className="pt-8">
              <div className="text-center mb-8">
                <Quote className="w-12 h-12 text-primary-500 mx-auto mb-4" />
                <h2 className="font-heading font-bold text-3xl sm:text-4xl text-gray-900 dark:text-white mb-2">
                  Founder's Message
                </h2>
                <p className="text-primary-600 dark:text-primary-400 font-semibold">
                  Purushottam Kute
                </p>
                <p className="text-gray-600 dark:text-gray-400 text-sm">
                  President, Swami Vivekanand Seva Trust, Hingoli
                </p>
              </div>

              <div className="prose prose-lg dark:prose-invert max-w-none">
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                  <strong>Dear Friends, Well-Wishers, and Supporters,</strong>
                </p>

                <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                  Having built our capacity for implementing development
                  projects, we have, for the first time, formally approached
                  donors, government agencies, and departments for support and
                  assistance. We are proud to report that our accountable
                  systems and track record as a facilitator have earned us a
                  positive response.
                </p>

                <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                  As we proudly commemorate a decade of dedicated service, Swami
                  Vivekanand Seva Trust (SVST) reflects on its remarkable
                  journey – from humble beginnings to unprecedented growth.
                  Despite limited resources, our organization has persevered,
                  tackling challenges head-on to create a better life for rural
                  communities.
                </p>

                <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
                  In addition to our regular developmental activities, we
                  successfully implemented a range of initiatives during the year,
                  including:
                </p>

                <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300 mb-6 ml-4">
                  <li>Rural Entrepreneurship Development Programs</li>
                  <li>Vocational Training on resource-based activities</li>
                  <li>Training on Modern Agriculture</li>
                  <li>Training on Vermi/Nadep Composting and Biofertilizers</li>
                  <li>Development and Promotion of Forestry</li>
                  <li>Design and Technology Development Workshops</li>
                  <li>
                    Skill Development Training on Bamboo Craft, Leather Craft,
                    and Wooden Craft
                  </li>
                  <li>
                    Capacity Building and Awareness on Watershed Management
                  </li>
                  <li>Exposure/Study Tours for Farmer Communities</li>
                </ul>

                <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                  Our ultimate aim is to drive reform and modernization by
                  mobilizing all capacities and establishing economic reform
                  that enables us to play a meaningful role in the national
                  economic arena. We look forward to continuing our partnerships
                  and collaborations to achieve our goals.
                </p>

                <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                  We attribute our success to the collective efforts of all
                  stakeholders, whose unwavering support and cooperation – both
                  direct and indirect – have been instrumental in our progress.
                </p>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}

