"use client";

import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Briefcase, Users, Target, Award } from "lucide-react";

const features = [
  {
    icon: Briefcase,
    title: "Employment Opportunities",
    description:
      "Connecting rural youth with employment opportunities across various sectors.",
  },
  {
    icon: Users,
    title: "Skill Development",
    description:
      "Comprehensive training programs to enhance employability and career prospects.",
  },
  {
    icon: Target,
    title: "Career Guidance",
    description:
      "Personalized career counseling and guidance for better job placement.",
  },
  {
    icon: Award,
    title: "Certification",
    description:
      "Industry-recognized certifications upon successful completion of training.",
  },
];

export function DDUGKYInfo() {
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
            DDU-GKY Program
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Deen Dayal Upadhyaya Grameen Kaushalya Yojana - Empowering rural
            youth through skill development
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="max-w-4xl mx-auto mb-16"
        >
          <Card>
            <CardHeader>
              <CardTitle>About DDU-GKY</CardTitle>
            </CardHeader>
            <CardContent className="prose prose-lg dark:prose-invert max-w-none">
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                The Deen Dayal Upadhyaya Grameen Kaushalya Yojana (DDU-GKY) is a
                skill development program that aims to train rural youth who are
                poor or unemployed. The program provides skill training to rural
                youth and helps them secure employment opportunities.
              </p>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed mt-4">
                Swami Vivekanand Seva Trust is committed to implementing this
                program to empower rural youth and create sustainable employment
                opportunities in our region.
              </p>
            </CardContent>
          </Card>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
              >
                <Card className="h-full text-center">
                  <CardContent className="pt-6">
                    <div className="w-16 h-16 bg-primary-100 dark:bg-primary-900/30 rounded-2xl flex items-center justify-center mx-auto mb-4">
                      <Icon className="w-8 h-8 text-primary-500" />
                    </div>
                    <h3 className="font-heading font-semibold text-lg text-gray-900 dark:text-white mb-2">
                      {feature.title}
                    </h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      {feature.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

