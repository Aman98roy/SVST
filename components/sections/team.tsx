"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Users } from "lucide-react";

export function Team() {
  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-950">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-heading font-bold text-4xl sm:text-5xl text-gray-900 dark:text-white mb-4">
            Our Team
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Dedicated individuals working together to create positive change
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <Card>
            <CardContent className="pt-8">
              <div className="text-center">
                <div className="w-20 h-20 bg-primary-100 dark:bg-primary-900/30 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Users className="w-10 h-10 text-primary-500" />
                </div>
                <h3 className="font-heading font-bold text-2xl text-gray-900 dark:text-white mb-4">
                  Board of Directors
                </h3>
                <p className="text-gray-600 dark:text-gray-400 mb-6">
                  Our organization is led by a dedicated board of directors and
                  supported by a team of committed staff members, volunteers,
                  and community partners who work tirelessly to advance our
                  mission.
                </p>
                <p className="text-gray-600 dark:text-gray-400">
                  <strong className="text-gray-900 dark:text-white">
                    President:
                  </strong>{" "}
                  Purushottam Kute
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}

