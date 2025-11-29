"use client";

import { motion } from "framer-motion";
import { Quote, CheckCircle2 } from "lucide-react";

const initiatives = [
  "Rural Entrepreneurship Development Programs",
  "Vocational Training on resource-based activities",
  "Training on Modern Agriculture",
  "Training on Vermi/Nadep Composting and Biofertilizers",
  "Development and Promotion of Forestry",
  "Design and Technology Development Workshops",
  "Skill Development Training on Bamboo Craft, Leather Craft, and Wooden Craft",
  "Capacity Building and Awareness on Watershed Management",
  "Exposure/Study Tours for Farmer Communities",
];

const acknowledgments = [
  "All well-wishers, sponsors, and partner organizations that have supported us directly and indirectly through their valuable suggestions, participation, and guidance throughout the year",
  "Our dedicated staff members, whose tireless efforts and commitment have been instrumental in driving our mission forward",
  "The esteemed members of the SVST board, including the general body and coordination team, for their visionary leadership and guidance",
  "Our executives, who have demonstrated exceptional dedication and perseverance in advancing our mission",
];

export function FounderMessage() {
  return (
    <section className="py-20 bg-gradient-to-b from-white via-primary-50/30 to-white dark:from-gray-900 dark:via-gray-950 dark:to-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-5xl mx-auto"
        >
          {/* Header Section */}
          <div className="text-center mb-12">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="inline-block mb-6"
            >
              <Quote className="w-16 h-16 text-primary-500 mx-auto" />
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="font-heading font-bold text-4xl sm:text-5xl lg:text-6xl text-gray-900 dark:text-white mb-4"
            >
              Founder's Message
            </motion.h2>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="space-y-2"
            >
              <p className="text-2xl sm:text-3xl font-bold text-primary-600 dark:text-primary-400">
                SWAMI VIVEKANAND SEWA TRUST
              </p>
            </motion.div>
          </div>

          {/* Main Content Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-3xl shadow-xl border border-gray-200/50 dark:border-gray-700/50 overflow-hidden"
          >
            <div className="p-8 sm:p-10 lg:p-12">
              {/* Greeting */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 }}
                className="mb-8"
              >
                <p className="text-xl sm:text-2xl font-semibold text-gray-900 dark:text-white mb-2">
                  Dear Friends, Well-Wishers, and Supporters,
                </p>
              </motion.div>

              {/* Main Message */}
              <div className="space-y-6 text-gray-700 dark:text-gray-300 leading-relaxed text-base sm:text-lg">
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.6 }}
                >
                  Having built our capacity for implementing development projects, we have, for the first time, formally approached donors, government agencies, and departments for support and assistance. We are proud to report that our accountable systems and track record as a facilitator have earned us a positive response.
                </motion.p>

                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.7 }}
                >
                  As we proudly commemorate a decade of dedicated service, Swami Vivekanand Seva Trust (SVST) reflects on its remarkable journey – from humble beginnings to unprecedented growth. Despite limited resources, our organization has persevered, tackling challenges head-on to create a better life for rural communities.
                </motion.p>

                {/* Initiatives Section */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.8 }}
                  className="mt-8"
                >
                  <p className="font-semibold text-gray-900 dark:text-white mb-4 text-lg">
                    In addition to our regular developmental activities, we successfully implemented a range of initiatives during the year, including:
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mt-4">
                    {initiatives.map((initiative, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.9 + index * 0.05 }}
                        className="flex items-start space-x-3 p-3 rounded-lg bg-primary-50/50 dark:bg-primary-900/20 hover:bg-primary-100/50 dark:hover:bg-primary-900/30 transition-colors"
                      >
                        <CheckCircle2 className="w-5 h-5 text-primary-500 mt-0.5 flex-shrink-0" />
                        <span className="text-sm sm:text-base">{initiative}</span>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>

                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 1.2 }}
                  className="mt-8"
                >
                  Our ultimate aim is to drive reform and modernization by mobilizing all capacities and establishing economic reform that enables us to play a meaningful role in the national economic arena. We look forward to continuing our partnerships and collaborations to achieve our goals.
                </motion.p>

                {/* Acknowledgments Section */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 1.3 }}
                  className="mt-10 pt-8 border-t border-gray-200 dark:border-gray-700"
                >
                  <p className="font-semibold text-gray-900 dark:text-white mb-6 text-lg">
                    We attribute our success to the collective efforts of all stakeholders, whose unwavering support and cooperation – both direct and indirect – have been instrumental in our progress. We extend our heartfelt gratitude to:
                  </p>
                  <div className="space-y-4">
                    {acknowledgments.map((ack, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 1.4 + index * 0.1 }}
                        className="flex items-start space-x-3 p-4 rounded-lg bg-gradient-to-r from-primary-50/30 to-accent-emerald/10 dark:from-primary-900/20 dark:to-accent-teal/10 border-l-4 border-primary-500"
                      >
                        <div className="w-2 h-2 rounded-full bg-primary-500 mt-2 flex-shrink-0" />
                        <p className="text-sm sm:text-base">{ack}</p>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>

                {/* Signature Section */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 1.8 }}
                  className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-700 text-right"
                >
                  <p className="text-xl font-bold text-gray-900 dark:text-white mb-1">
                    Purushottam Kute
                  </p>
                  <p className="text-primary-600 dark:text-primary-400 font-semibold">
                    President, Swami Vivekanand Seva Trust, Hingoli
                  </p>
                  <p className="text-gray-600 dark:text-gray-400 text-sm mt-1">
                    Founder
                  </p>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
