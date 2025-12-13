"use client";

import { ActivityTemplate } from "@/components/sections/activity-template";
import { BookOpen, Users2, Sprout, TrendingUp, GraduationCap, Lightbulb, Clock, MapPin } from "lucide-react";
import { motion } from "framer-motion";

// Training Statistics Table Component
const TrainingStatsTable = () => {
  const trainingData = {
    title: "Training Program Statistics (2011-2025)",
    description: "Comprehensive data showing the reach and impact of our farmers training initiatives across different agricultural sectors in Hingoli district.",
    headers: ["Activity", "Program Location/Venue Taluka", "No of Farmers"],
    rows: [
      ["Dairy", "Hingoli, Sengaon, Aundha (Na), Kalamnuri", "3,500"],
      ["Turmeric Processing", "Hingoli, Sengaon, Aundha (Na), Kalamnuri", "2,200"],
      ["Goat Farming", "Hingoli, Sengaon, Aundha (Na), Kalamnuri", "3,000"],
      ["Poultry", "Hingoli, Sengaon, Aundha (Na), Kalamnuri", "3,000"]
    ],
    total: 11700
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 border border-gray-200 dark:border-gray-700"
    >
      <h3 className="font-heading font-bold text-xl text-gray-900 dark:text-white mb-3">
        {trainingData.title}
      </h3>
      <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed mb-6">
        {trainingData.description}
      </p>
      
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="bg-gradient-to-r from-orange-500 to-orange-600 text-white">
              {trainingData.headers.map((header, index) => (
                <th key={index} className="px-4 py-3 text-left font-semibold text-xs uppercase tracking-wider">
                  {header}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
            {trainingData.rows.map((row, index) => (
              <tr key={index} className="hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-colors">
                {row.map((cell, cellIndex) => (
                  <td key={cellIndex} className="px-4 py-3 text-sm text-gray-900 dark:text-gray-100">
                    {cellIndex === 2 ? (
                      <span className="font-semibold text-orange-600 dark:text-orange-400">
                        {cell}
                      </span>
                    ) : (
                      cell
                    )}
                  </td>
                ))}
              </tr>
            ))}
            <tr className="bg-orange-50 dark:bg-orange-900/20 font-semibold">
              <td className="px-4 py-3 text-gray-900 dark:text-gray-100 font-bold text-sm">
                Total
              </td>
              <td className="px-4 py-3 text-gray-900 dark:text-gray-100 text-sm">
                All Talukas
              </td>
              <td className="px-4 py-3 text-orange-600 dark:text-orange-400 font-bold">
                {trainingData.total}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </motion.div>
  );
};

const activityData = {
  title: "District Level Farmers Training Program",
  subtitle: "Sponsored by ATMA, Hingoli District, Maharashtra",
  description: "In partnership with SVST, ATMA successfully conducted a comprehensive District Level Farmers Training Program in Hingoli, benefiting 2,000 farmers across five blocks: Hingoli, Sengaon, Aundha Nagnath, and Kalamnuri.",
  mainImage: "/images/activities/farmers-training/hero-image.JPG",
  category: "Agricultural Training",
  location: "Hingoli, Sengaon, Aundha Nagnath, Kalamnuri",
  duration: "2011 - 2025 (Ongoing)",
  beneficiaries: "11,700+ Farmers",
  features: [
    {
      icon: BookOpen,
      title: "Dairy Farming",
      description: "Modern livestock management, milking practices, and animal health training for improved dairy productivity."
    },
    {
      icon: Sprout,
      title: "Turmeric Processing",
      description: "Post-harvest methods, drying, curing, and packaging techniques for value-added turmeric products."
    },
    {
      icon: Users2,
      title: "Sericulture",
      description: "Harvesting and processing techniques for silk production and value-added sericulture products."
    },
    {
      icon: TrendingUp,
      title: "Goat & Poultry Farming",
      description: "Breeding, disease management, nutrition, vaccination, and biosecurity for livestock farming."
    }
  ],
  stats: [
    {
      label: "Total Farmers Trained",
      value: "11,700+",
      icon: Users2
    },
    {
      label: "Dairy Farmers",
      value: "3,500",
      icon: GraduationCap
    },
    {
      label: "Training Areas",
      value: "5 Key Sectors",
      icon: BookOpen
    },
    {
      label: "Program Duration",
      value: "14+ Years",
      icon: Clock
    }
  ],
  gallery: [
    {
      src: "/images/activities/farmers-training/FARMERS TRAINING.jpeg",
      alt: "District Level Farmers Training Program",
      caption: "Comprehensive training program conducted by ATMA and SVST"
    },
    {
      src: "/images/activities/farmers-training/FARMERS TRAINING 2.jpeg",
      alt: "Farmers training session in progress",
      caption: "Interactive training session on modern farming techniques"
    },
    {
      src: "/images/activities/farmers-training/FARMERS TRAINING 3.jpeg",
      alt: "Practical demonstration session",
      caption: "Hands-on training demonstration for farmers"
    },
    {
      src: "/images/activities/farmers-training/FARMERS TRAINING 5.jpeg",
      alt: "Training workshop for dairy farming",
      caption: "Specialized training on dairy farming and livestock management"
    },
    {
      src: "/images/activities/farmers-training/FARMERS TRAINING 6.jpeg",
      alt: "Group training session",
      caption: "Farmers learning about sustainable agricultural practices"
    },
    {
      src: "/images/activities/farmers-training/IMG-20170316-WA0001.jpg",
      alt: "Field demonstration",
      caption: "Practical field demonstration of training techniques"
    },
    {
      src: "/images/activities/farmers-training/IMG-20170316-WA0002.jpg",
      alt: "Farmers training documentation",
      caption: "Documenting training progress and farmer participation"
    },
    {
      src: "/images/activities/farmers-training/04.jpg",
      alt: "Training program certificate distribution",
      caption: "Recognition and certification of trained farmers"
    }
  ],
  content: {
    overview: "In partnership with SVST, ATMA successfully conducted a comprehensive District Level Farmers Training Program in Hingoli, benefiting 2,000 farmers across five blocks: Hingoli, Sengaon, Aundha Nagnath, and Kalamnuri. This flagship program represents a transformative approach to agricultural development in Maharashtra.",
    objectives: [
      "Enhance farmers' skills and knowledge in key agricultural sectors",
      "Boost productivity and income through modern farming techniques",
      "Promote sustainable agricultural practices and environmental conservation",
      "Transfer knowledge in dairy farming, turmeric processing, sericulture, goat farming, and poultry",
      "Create a network of skilled farmers who can mentor others in their communities"
    ],
    methodology: "The program's unique blend of theoretical knowledge and hands-on experiences equipped farmers with practical skills to implement new techniques. Training covered five critical areas with specialized focus on local agricultural needs and market opportunities. Each session was conducted in local language with visual aids and culturally appropriate teaching methods.",
    impact: "The District Level Farmers Training Program empowered 2,000 farmers, promoting sustainable agricultural practices, improving economic conditions, and enhancing the agricultural landscape of Hingoli. By empowering farmers with knowledge and skills in these critical areas, the program aims to enhance agricultural productivity, improve livelihoods, and contribute to the overall development of the farming community.",
    trainingData: {
      title: "Training Program Statistics (2011-2025)",
      description: "Comprehensive data showing the reach and impact of our farmers training initiatives across different agricultural sectors in Hingoli district.",
      headers: ["Activity", "Program Location/Venue Taluka", "No of Farmers"],
      rows: [
        ["Dairy", "Hingoli, Sengaon, Aundha (Na), Kalamnuri", "3,500"],
        ["Turmeric Processing", "Hingoli, Sengaon, Aundha (Na), Kalamnuri", "2,200"],
        ["Goat Farming", "Hingoli, Sengaon, Aundha (Na), Kalamnuri", "3,000"],
        ["Poultry", "Hingoli, Sengaon, Aundha (Na), Kalamnuri", "3,000"]
      ],
      total: 11700
    },
    highlights: [
      "Throughout the year, our organization carried out a range of development activities under this project, building on earlier successes",
      "These initiatives further strengthened our commitment to supporting farmers and promoting sustainable agriculture in Hingoli",
      "The program's impact extends beyond individual farmers to transform entire agricultural communities",
      "Continuous monitoring and evaluation ensure sustainable adoption of taught practices"
    ]
  }
};

export function FarmersTrainingClient() {
  return <ActivityTemplate {...activityData} />;
}