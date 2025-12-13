"use client";

import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Heart, Users, Briefcase, GraduationCap } from "lucide-react";
import Link from "next/link";

const opportunities = [
  {
    icon: Heart,
    title: "Volunteer",
    description:
      "Join us as a volunteer and make a direct impact in your community. Help us organize events, support our programs, and spread awareness.",
    action: "Become a Volunteer",
  },
  {
    icon: Briefcase,
    title: "Career Opportunities",
    description:
      "Explore career opportunities with us. We're always looking for passionate individuals who share our vision and values.",
    action: "View Openings",
  },
  {
    icon: GraduationCap,
    title: "Internship",
    description:
      "Gain valuable experience through our internship programs. Work on real projects and contribute to meaningful change.",
    action: "Apply for Internship",
  },
  {
    icon: Users,
    title: "Partnership",
    description:
      "Partner with us to amplify our impact. Collaborate on projects, share resources, and create lasting change together.",
    action: "Partner With Us",
  },
];

export function JoinUsSection() {
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
          <h1 className="font-heading font-bold text-2xl sm:text-3xl text-gray-900 dark:text-white mb-4">
            Join Us
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto content-text">
            Be part of our mission to empower communities, protect the
            environment, and promote cultural diversity
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {opportunities.map((opportunity, index) => {
            const Icon = opportunity.icon;
            return (
              <motion.div
                key={opportunity.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
              >
                <Card className="h-full flex flex-col">
                  <CardHeader>
                    <div className="w-14 h-14 bg-gradient-to-br from-primary-400 to-primary-600 rounded-2xl flex items-center justify-center mb-4">
                      <Icon className="w-7 h-7 text-white" />
                    </div>
                    <CardTitle className="text-xl">{opportunity.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="flex-1 flex flex-col">
                    <p className="text-gray-600 dark:text-gray-400 mb-6 flex-1 content-text">
                      {opportunity.description}
                    </p>
                    <Button variant="outline" className="w-full">
                      {opportunity.action}
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="mt-16 text-center"
        >
          <Card className="max-w-2xl mx-auto bg-gradient-to-br from-primary-50 to-accent-emerald/10 dark:from-gray-900 dark:to-gray-950">
            <CardContent className="pt-8">
              <h2 className="font-heading font-bold text-2xl text-gray-900 dark:text-white mb-4">
                Ready to Make a Difference?
              </h2>
              <p className="text-gray-600 dark:text-gray-400 mb-6">
                Contact us today to learn more about how you can get involved
                with our mission.
              </p>
              <Button size="lg" asChild>
                <Link href="/contact">Get in Touch</Link>
              </Button>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}

