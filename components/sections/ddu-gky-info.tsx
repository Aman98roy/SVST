"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  Briefcase, 
  Users, 
  Target, 
  Award, 
  MapPin, 
  TrendingUp, 
  CheckCircle2, 
  BarChart3,
  GraduationCap,
  Building2,
  UserCheck,
  Medal,
  Camera,
  X,
  ChevronLeft,
  ChevronRight,
  Shield,
  Globe,
  Heart,
  Star,
  Zap,
  Lightbulb,
  ArrowRight,
  Eye,
  PieChart
} from "lucide-react";

const statistics = [
  { 
    label: "Total Trained Candidates", 
    value: "280", 
    icon: GraduationCap,
    description: "Comprehensive skill training provided",
    color: "from-blue-500 to-blue-600"
  },
  { 
    label: "Assessed Candidates", 
    value: "280", 
    icon: CheckCircle2,
    description: "Successfully evaluated for skills",
    color: "from-green-500 to-green-600"
  },
  { 
    label: "Certified Candidates", 
    value: "280", 
    icon: Medal,
    description: "Government certified professionals",
    color: "from-yellow-500 to-yellow-600"
  },
  { 
    label: "Successfully Placed", 
    value: "199", 
    icon: UserCheck,
    description: "71% placement success rate",
    color: "from-purple-500 to-purple-600"
  },
];

const tradesData = [
  { 
    trade: "CCTV Supervisor", 
    candidates: 70,
    description: "Security and surveillance systems management",
    icon: Shield,
    color: "from-indigo-500 to-purple-600"
  },
  { 
    trade: "Medical Equipment Assistant (Basic Clinical Equipment)", 
    candidates: 210,
    description: "Healthcare equipment operation and maintenance",
    icon: Heart,
    color: "from-red-500 to-pink-600"
  },
];

const districtData = [
  { district: "Nanded", candidates: 61, percentage: 21.8 },
  { district: "Washim", candidates: 67, percentage: 23.9 },
  { district: "Yavatmal", candidates: 53, percentage: 18.9 },
  { district: "Jalna", candidates: 99, percentage: 35.4 },
];

const categoryData = [
  { category: "SC (Scheduled Caste)", count: 91, percentage: 32.5, color: "bg-blue-500" },
  { category: "ST (Scheduled Tribe)", count: 70, percentage: 25.0, color: "bg-green-500" },
  { category: "Others", count: 119, percentage: 42.5, color: "bg-purple-500" },
  { category: "PWD (Persons with Disabilities)", count: 3, percentage: 1.1, color: "bg-yellow-500" },
  { category: "Minority", count: 14, percentage: 5.0, color: "bg-pink-500" },
  { category: "Women", count: 101, percentage: 36.1, color: "bg-indigo-500" },
];

const features = [
  {
    icon: Building2,
    title: "Modern Training Infrastructure",
    description: "State-of-the-art training centers equipped with latest technology, modern equipment, and industry-standard facilities for comprehensive hands-on learning experience.",
    color: "from-blue-500 to-cyan-500"
  },
  {
    icon: Users,
    title: "Expert Industry Trainers",
    description: "Highly qualified and experienced trainers from the industry providing comprehensive skill development, practical knowledge, and real-world insights.",
    color: "from-green-500 to-emerald-500"
  },
  {
    icon: Target,
    title: "Guaranteed Placement Support",
    description: "Dedicated placement assistance with strong industry partnerships, achieving 71% placement success rate and connecting trainees with top employers.",
    color: "from-purple-500 to-violet-500"
  },
  {
    icon: Award,
    title: "Government Recognized Certification",
    description: "NSDC-recognized certifications valid across India, government-backed credentials enhancing career prospects and professional credibility.",
    color: "from-orange-500 to-red-500"
  },
];

const galleryImages = [
  {
    src: "/images/ddu-gky/WhatsApp Image 2025-09-17 at 11.44.57 AM.jpeg",
    alt: "DDU-GKY Training Session",
    title: "Interactive Training Session"
  },
  {
    src: "/images/ddu-gky/photo_6052883353281084664_y.jpg",
    alt: "DDU-GKY Certification Ceremony",
    title: "Certification Ceremony"
  },
  {
    src: "/images/ddu-gky/photo_6052883353281084707_y.jpg",
    alt: "DDU-GKY Skill Development",
    title: "Practical Skill Training"
  },
  {
    src: "/images/ddu-gky/photo_6052883353281084713_y.jpg",
    alt: "DDU-GKY Workshop",
    title: "Technical Workshop"
  },
  {
    src: "/images/ddu-gky/photo_6052883353281084727_y.jpg",
    alt: "DDU-GKY Assessment",
    title: "Skills Assessment"
  },
  {
    src: "/images/ddu-gky/photo_6052883353281084742_y.jpg",
    alt: "DDU-GKY Graduation",
    title: "Program Graduation"
  },
  {
    src: "/images/ddu-gky/photo_6052883353281084745_y.jpg",
    alt: "DDU-GKY Training Center",
    title: "Modern Training Center"
  },
  {
    src: "/images/ddu-gky/photo_6052883353281084779_y.jpg",
    alt: "DDU-GKY Success Story",
    title: "Success Stories"
  },
  {
    src: "/images/ddu-gky/photo_6052883353281084781_y.jpg",
    alt: "DDU-GKY Employment Drive",
    title: "Employment Generation"
  },
];

export function DDUGKYInfo() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  return (
    <div className="bg-white dark:bg-gray-900 overflow-hidden">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-700">
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center px-4 py-2 bg-blue-100 dark:bg-blue-900/30 rounded-full text-blue-800 dark:text-blue-300 text-sm font-medium mb-6">
              <Star className="h-4 w-4 mr-2" />
              Government of India Initiative
            </div>
            <h1 className="font-heading font-bold text-3xl sm:text-4xl lg:text-6xl text-gray-900 dark:text-white mb-8">
              DDU-GKY Program
            </h1>
            <h2 className="text-xl sm:text-2xl lg:text-3xl text-blue-600 dark:text-blue-400 font-semibold mb-8">
              Deen Dayal Upadhyaya Grameen Kaushalya Yojana
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-4xl mx-auto content-text leading-relaxed text-center">
              A transformative initiative empowering rural youth across Maharashtra through comprehensive skill development, 
              industry-relevant training, and guaranteed employment opportunities. Building a skilled workforce for tomorrow's economy.
            </p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="mt-8"
            >
              <Button 
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-3 text-lg rounded-full transition-all duration-300 transform hover:scale-105"
                onClick={() => document.getElementById('impact-section')?.scrollIntoView({ behavior: 'smooth' })}
              >
                <Eye className="h-5 w-5 mr-2" />
                Explore Our Impact
                <ArrowRight className="h-5 w-5 ml-2" />
              </Button>
            </motion.div>
          </motion.div>

          {/* Statistics Grid */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16"
          >
            {statistics.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, scale: 0.8, y: 20 }}
                  whileInView={{ opacity: 1, scale: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5 + index * 0.1, duration: 0.6 }}
                  whileHover={{ scale: 1.05, y: -5 }}
                  className="group"
                >
                  <Card className={`relative overflow-hidden text-center h-full bg-gradient-to-br ${stat.color} text-white shadow-xl border-0 transition-all duration-300 group-hover:shadow-2xl`}>
                    <CardContent className="pt-8 pb-6 relative z-10">
                      <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      <Icon className="w-12 h-12 mx-auto mb-4 text-white/90" />
                      <div className="text-4xl font-bold mb-2 text-white">
                        {stat.value}
                      </div>
                      <p className="text-sm font-medium text-white/90 mb-2 text-center">
                        {stat.label}
                      </p>
                      <p className="text-xs text-white/70 text-center">
                        {stat.description}
                      </p>
                    </CardContent>
                    <div className="absolute bottom-0 left-0 right-0 h-1 bg-white/30 group-hover:h-2 transition-all duration-300"></div>
                  </Card>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* About DDU-GKY Section */}
      <section id="impact-section" className="py-20 bg-gradient-to-r from-gray-50 to-blue-50 dark:from-gray-800 dark:to-gray-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-6xl mx-auto"
          >
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div>
                <div className="inline-flex items-center px-4 py-2 bg-blue-100 dark:bg-blue-900/30 rounded-full text-blue-800 dark:text-blue-300 text-sm font-medium mb-6">
                  <Lightbulb className="h-4 w-4 mr-2" />
                  What is DDU-GKY?
                </div>
                <h2 className="font-heading font-bold text-3xl lg:text-4xl text-gray-900 dark:text-white mb-8">
                  Transforming Rural Lives Through Skills
                </h2>
                <div className="space-y-6 content-text">
                  <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed text-center">
                    <strong>Deen Dayal Upadhyaya Grameen Kaushalya Yojana (DDU-GKY)</strong> is the Government of India's flagship program for skill development and employment of rural youth. Named after the visionary leader Pandit Deen Dayal Upadhyaya, this transformative initiative focuses on empowering rural communities through quality skill training and sustainable employment opportunities.
                  </p>
                  <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed text-center">
                    SVST has been proudly implementing DDU-GKY across <strong>four districts of Maharashtra</strong> - Nanded, Washim, Yavatmal, and Jalna - creating remarkable success stories in empowering rural youth and fostering economic development in technical and healthcare sectors.
                  </p>
                  <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg">
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Our Mission & Vision</h3>
                    <ul className="space-y-3 text-gray-700 dark:text-gray-300">
                      <li className="flex items-start space-x-3">
                        <CheckCircle2 className="h-5 w-5 text-green-500 mt-0.5" />
                        <span>Bridge the skill gap between rural talent and industry requirements</span>
                      </li>
                      <li className="flex items-start space-x-3">
                        <CheckCircle2 className="h-5 w-5 text-green-500 mt-0.5" />
                        <span>Create sustainable employment opportunities for rural youth</span>
                      </li>
                      <li className="flex items-start space-x-3">
                        <CheckCircle2 className="h-5 w-5 text-green-500 mt-0.5" />
                        <span>Promote inclusive growth and reduce urban migration</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="relative">
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3, duration: 0.8 }}
                  className="relative"
                >
                  <Image
                    src="/images/ddu-gky/WhatsApp Image 2025-09-17 at 11.44.57 AM.jpeg"
                    alt="DDU-GKY Training Session at SVST"
                    width={600}
                    height={400}
                    className="rounded-2xl shadow-2xl img-justified"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-2xl"></div>
                  <div className="absolute top-4 right-4 bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm px-3 py-2 rounded-lg">
                    <div className="flex items-center space-x-2">
                      <Zap className="h-4 w-4 text-yellow-500" />
                      <span className="text-sm font-medium text-gray-900 dark:text-white">Live Training</span>
                    </div>
                  </div>
                </motion.div>
                <div className="absolute -bottom-6 -right-6 bg-blue-600 text-white p-4 rounded-xl shadow-xl">
                  <div className="text-center">
                    <div className="text-2xl font-bold">280+</div>
                    <div className="text-xs">Empowered Lives</div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Training Programs Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="font-heading font-bold text-3xl lg:text-4xl text-gray-900 dark:text-white mb-6">
              Our Training Programs
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto content-text text-center">
              Comprehensive skill development programs designed to meet industry demands and create employment opportunities
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
            {tradesData.map((trade, index) => {
              const Icon = trade.icon;
              return (
                <motion.div
                  key={trade.trade}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2, duration: 0.8 }}
                  className="group"
                >
                  <Card className={`h-full bg-gradient-to-br ${trade.color} text-white shadow-xl border-0 overflow-hidden relative`}>
                    <div className="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition-all duration-300"></div>
                    <CardHeader className="relative z-10">
                      <div className="flex items-center space-x-4 mb-4">
                        <div className="p-3 bg-white/20 rounded-xl">
                          <Icon className="h-8 w-8 text-white" />
                        </div>
                        <div>
                          <CardTitle className="text-2xl text-white font-bold mb-2">
                            {trade.trade}
                          </CardTitle>
                          <p className="text-white/80 text-sm text-center">{trade.description}</p>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent className="relative z-10">
                      <div className="grid grid-cols-2 gap-4 mb-6">
                        <div className="text-center p-4 bg-white/10 rounded-xl">
                          <div className="text-3xl font-bold text-white mb-1">{trade.candidates}</div>
                          <div className="text-white/80 text-sm">Trained</div>
                        </div>
                        <div className="text-center p-4 bg-white/10 rounded-xl">
                          <div className="text-3xl font-bold text-white mb-1">{Math.round((trade.candidates / 280) * 100)}%</div>
                          <div className="text-white/80 text-sm">of Total</div>
                        </div>
                      </div>
                      <div className="space-y-3">
                        <h4 className="font-semibold text-white mb-2">Key Training Areas:</h4>
                        <ul className="space-y-2 text-white/90 text-sm">
                          {trade.trade.includes("CCTV") ? (
                            <>
                              <li className="flex items-center space-x-2">
                                <CheckCircle2 className="h-4 w-4" />
                                <span>Security systems installation & maintenance</span>
                              </li>
                              <li className="flex items-center space-x-2">
                                <CheckCircle2 className="h-4 w-4" />
                                <span>Surveillance monitoring techniques</span>
                              </li>
                              <li className="flex items-center space-x-2">
                                <CheckCircle2 className="h-4 w-4" />
                                <span>Digital security management</span>
                              </li>
                            </>
                          ) : (
                            <>
                              <li className="flex items-center space-x-2">
                                <CheckCircle2 className="h-4 w-4" />
                                <span>Clinical equipment operation</span>
                              </li>
                              <li className="flex items-center space-x-2">
                                <CheckCircle2 className="h-4 w-4" />
                                <span>Medical device maintenance</span>
                              </li>
                              <li className="flex items-center space-x-2">
                                <CheckCircle2 className="h-4 w-4" />
                                <span>Patient care support systems</span>
                              </li>
                            </>
                          )}
                        </ul>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </div>

          {/* Program Features */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                  className="group"
                >
                  <Card className={`h-full text-center hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 bg-gradient-to-br ${feature.color} text-white border-0`}>
                    <CardContent className="pt-8 pb-6">
                      <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                        <Icon className="w-8 h-8 text-white" />
                      </div>
                      <h3 className="font-heading font-bold text-lg text-white mb-4">
                        {feature.title}
                      </h3>
                      <p className="text-sm text-white/80 content-text leading-relaxed text-center">
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

      {/* District & Category Distribution */}
      <section className="py-20 bg-gradient-to-br from-indigo-50 to-purple-50 dark:from-gray-800 dark:to-gray-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-6xl mx-auto"
          >
            <div className="text-center mb-16">
              <h2 className="font-heading font-bold text-3xl lg:text-4xl text-gray-900 dark:text-white mb-6">
                Our Impact Across Maharashtra
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto content-text text-center">
                Comprehensive reach across 4 districts, empowering diverse communities and fostering inclusive growth
              </p>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
              {/* District Distribution */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2, duration: 0.6 }}
                className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-xl"
              >
                <div className="flex items-center space-x-3 mb-8">
                  <div className="p-3 bg-blue-100 dark:bg-blue-900/30 rounded-xl">
                    <MapPin className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                    District-wise Distribution
                  </h3>
                </div>
                <div className="space-y-4">
                  {districtData.map((district, index) => (
                    <motion.div
                      key={district.district}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.4 + index * 0.1, duration: 0.5 }}
                      className="group"
                    >
                      <div className="flex items-center justify-between p-4 bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-gray-700 dark:to-gray-600 rounded-xl group-hover:shadow-lg transition-all duration-300">
                        <div className="flex items-center space-x-4">
                          <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center">
                            <span className="font-bold text-blue-600 dark:text-blue-400 text-lg">
                              {district.district.charAt(0)}
                            </span>
                          </div>
                          <div>
                            <div className="font-bold text-gray-900 dark:text-white text-lg">
                              {district.district}
                            </div>
                          </div>
                        </div>
                        <div className="text-right">
                          <div className="text-3xl font-bold text-blue-600 dark:text-blue-400">
                            {district.candidates}
                          </div>
                          <div className="text-sm text-gray-500 dark:text-gray-400">candidates</div>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
              
              {/* Category Distribution */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4, duration: 0.6 }}
                className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-xl"
              >
                <div className="flex items-center space-x-3 mb-8">
                  <div className="p-3 bg-purple-100 dark:bg-purple-900/30 rounded-xl">
                    <PieChart className="h-6 w-6 text-purple-600 dark:text-purple-400" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                    Category-wise Participation
                  </h3>
                </div>
                <div className="space-y-4">
                  {categoryData.map((category, index) => (
                    <motion.div
                      key={category.category}
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.6 + index * 0.1, duration: 0.5 }}
                      className="group"
                    >
                      <div className="p-4 bg-gradient-to-r from-gray-50 to-purple-50 dark:from-gray-700 dark:to-gray-600 rounded-xl group-hover:shadow-lg transition-all duration-300">
                        <div className="flex items-center justify-between mb-2">
                          <span className="text-gray-800 dark:text-gray-200 font-medium text-sm">
                            {category.category}
                          </span>
                          <span className="font-bold text-purple-600 dark:text-purple-400 text-lg">
                            {category.count}
                          </span>
                        </div>
                        <div className="w-full bg-gray-200 dark:bg-gray-600 rounded-full h-2">
                          <motion.div
                            initial={{ width: 0 }}
                            whileInView={{ width: `${category.percentage}%` }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.8 + index * 0.1, duration: 0.8 }}
                            className={`h-2 rounded-full ${category.color}`}
                          ></motion.div>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Photo Gallery */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="font-heading font-bold text-3xl lg:text-4xl text-gray-900 dark:text-white mb-6">
              Project Gallery
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto content-text text-center">
              Capturing moments of transformation, learning, and success from our DDU-GKY training programs
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {galleryImages.map((image, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                className="relative group overflow-hidden rounded-2xl cursor-pointer"
                onClick={() => setSelectedImage(index)}
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  width={400}
                  height={300}
                  className="w-full h-64 object-cover img-justified group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-100 transition-all duration-300"></div>
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-0 transition-transform duration-300">
                  <h3 className="font-bold text-lg mb-2 text-left">{image.title}</h3>
                  <p className="text-sm text-white/90 text-left">{image.alt}</p>
                </div>
                <div className="absolute top-4 right-4 opacity-100 transition-opacity duration-300">
                  <div className="bg-white/20 backdrop-blur-sm p-2 rounded-full">
                    <Camera className="h-5 w-5 text-white" />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Image Modal */}
      <AnimatePresence>
        {selectedImage !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/90 backdrop-blur-sm flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              className="relative max-w-4xl max-h-full"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={galleryImages[selectedImage].src}
                alt={galleryImages[selectedImage].alt}
                width={800}
                height={600}
                className="max-w-full max-h-[80vh] object-contain rounded-xl"
              />
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute top-4 right-4 bg-black/50 text-white p-2 rounded-full hover:bg-black/70 transition-colors"
              >
                <X className="h-6 w-6" />
              </button>
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6 rounded-b-xl">
                <h3 className="text-white text-xl font-bold mb-2">
                  {galleryImages[selectedImage].title}
                </h3>
                <p className="text-white/90 text-sm text-center">
                  {galleryImages[selectedImage].alt}
                </p>
              </div>
              {selectedImage > 0 && (
                <button
                  onClick={() => setSelectedImage(selectedImage - 1)}
                  className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black/50 text-white p-3 rounded-full hover:bg-black/70 transition-colors"
                >
                  <ChevronLeft className="h-6 w-6" />
                </button>
              )}
              {selectedImage < galleryImages.length - 1 && (
                <button
                  onClick={() => setSelectedImage(selectedImage + 1)}
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black/50 text-white p-3 rounded-full hover:bg-black/70 transition-colors"
                >
                  <ChevronRight className="h-6 w-6" />
                </button>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

