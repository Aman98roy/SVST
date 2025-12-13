"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
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
  Medal
} from "lucide-react";

const statistics = [
  { label: "Total Trained Candidates", value: "280", icon: GraduationCap },
  { label: "Assessed Candidates", value: "280", icon: CheckCircle2 },
  { label: "Certified Candidates", value: "280", icon: Medal },
  { label: "Successfully Placed", value: "199", icon: UserCheck },
];

const tradesData = [
  { trade: "CCTV Supervisor", candidates: 70 },
  { trade: "Medical Equipment Assistant", candidates: 210 },
];

const districtData = [
  { district: "Nanded", candidates: 61 },
  { district: "Washim", candidates: 67 },
  { district: "Yavatmal", candidates: 53 },
  { district: "Jalna", candidates: 99 },
];

const categoryData = [
  { category: "SC (Scheduled Caste)", count: 91 },
  { category: "ST (Scheduled Tribe)", count: 70 },
  { category: "Others", count: 119 },
  { category: "PWD (Persons with Disabilities)", count: 3 },
  { category: "Minority", count: 14 },
  { category: "Women", count: 101 },
];

const features = [
  {
    icon: Building2,
    title: "Modern Training Facilities",
    description: "State-of-the-art training centers equipped with latest technology and equipment for hands-on learning.",
  },
  {
    icon: Users,
    title: "Expert Trainers",
    description: "Industry-experienced trainers providing comprehensive skill development and practical knowledge.",
  },
  {
    icon: Target,
    title: "Job Placement Support",
    description: "Dedicated placement assistance with 71% success rate connecting trainees with employers.",
  },
  {
    icon: Award,
    title: "Government Certification",
    description: "NSDC-recognized certifications valid across India, enhancing career prospects.",
  },
];

export function DDUGKYInfo() {
  return (
    <div className="bg-white dark:bg-gray-900">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-primary-50 to-blue-50 dark:from-gray-900 dark:to-gray-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h1 className="font-heading font-bold text-2xl sm:text-3xl lg:text-4xl text-gray-900 dark:text-white mb-6">
              DDU-GKY Program
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto content-text">
              Deen Dayal Upadhyaya Grameen Kaushalya Yojana - A flagship program empowering rural youth of Maharashtra through comprehensive skill development and guaranteed employment opportunities.
            </p>
          </motion.div>

          {/* Statistics Grid */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16"
          >
            {statistics.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + index * 0.1, duration: 0.5 }}
                >
                  <Card className="text-center h-full bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm">
                    <CardContent className="pt-6">
                      <Icon className="w-10 h-10 text-primary-500 mx-auto mb-3" />
                      <div className="text-3xl font-bold text-primary-600 dark:text-primary-400 mb-2">
                        {stat.value}
                      </div>
                      <p className="text-sm text-gray-600 dark:text-gray-400 font-medium">
                        {stat.label}
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* About DDU-GKY Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-6xl mx-auto"
          >
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="font-heading font-bold text-xl lg:text-2xl text-gray-900 dark:text-white mb-6">
                  What is DDU-GKY?
                </h2>
                <div className="space-y-4 content-text">
                  <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                    Deen Dayal Upadhyaya Grameen Kaushalya Yojana (DDU-GKY) is the Government of India's flagship program for skill development and employment of rural youth. Named after the great philosopher and politician Pandit Deen Dayal Upadhyaya, this program focuses on transforming lives of rural youth through quality skill training.
                  </p>
                  <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                    SVST has been implementing DDU-GKY across four districts of Maharashtra - Nanded, Washim, Yavatmal, and Jalna - with remarkable success in empowering rural youth and creating sustainable employment opportunities in technical and healthcare sectors.
                  </p>
                </div>
              </div>
              <div className="relative">
                <Image
                  src="/images/ddu-gky/training-center.jpg"
                  alt="SVST DDU-GKY Training Center with modern facilities"
                  width={600}
                  height={400}
                  className="rounded-2xl shadow-xl img-justified"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent rounded-2xl"></div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* What We Do Section */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="font-heading font-bold text-3xl lg:text-4xl text-gray-900 dark:text-white mb-4">
              What We Do
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto content-text">
              Through DDU-GKY, we provide comprehensive skill development training that transforms rural youth into skilled professionals ready for the modern workforce.
            </p>
          </motion.div>

          {/* Training Programs */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16"
          >
            {tradesData.map((trade, index) => (
              <Card key={trade.trade} className="h-full">
                <CardHeader>
                  <CardTitle className="text-xl text-primary-600 dark:text-primary-400">
                    {trade.trade}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
                    {trade.candidates} Candidates Trained
                  </div>
                  <p className="text-gray-600 dark:text-gray-400 content-text">
                    {trade.trade === "CCTV Supervisor" 
                      ? "Comprehensive training in security systems installation, maintenance, monitoring techniques, and surveillance technology management for modern security infrastructure."
                      : "Specialized training in basic clinical equipment operation, maintenance, patient care support, and medical device management for healthcare facilities."
                    }
                  </p>
                  <div className="mt-4">
                    <Image
                      src={`/images/ddu-gky/${trade.trade.toLowerCase().replace(/\s+/g, '-')}-training.jpg`}
                      alt={`${trade.trade} training program in progress`}
                      width={400}
                      height={250}
                      className="rounded-lg img-justified"
                    />
                  </div>
                </CardContent>
              </Card>
            ))}
          </motion.div>

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
                >
                  <Card className="h-full text-center hover:shadow-lg transition-shadow">
                    <CardContent className="pt-6">
                      <div className="w-16 h-16 bg-primary-100 dark:bg-primary-900/30 rounded-2xl flex items-center justify-center mx-auto mb-4">
                        <Icon className="w-8 h-8 text-primary-500" />
                      </div>
                      <h3 className="font-heading font-semibold text-lg text-gray-900 dark:text-white mb-2">
                        {feature.title}
                      </h3>
                      <p className="text-sm text-gray-600 dark:text-gray-400 content-text">
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

      {/* District-wise Distribution */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-6xl mx-auto"
          >
            <h2 className="font-heading font-bold text-3xl lg:text-4xl text-gray-900 dark:text-white mb-12 text-center">
              Our Reach Across Maharashtra
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-6">
                  District-wise Candidate Distribution
                </h3>
                <div className="space-y-4">
                  {districtData.map((district, index) => (
                    <motion.div
                      key={district.district}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1, duration: 0.5 }}
                      className="flex items-center justify-between p-4 bg-gray-50 dark:bg-gray-800 rounded-lg"
                    >
                      <div className="flex items-center space-x-3">
                        <MapPin className="w-5 h-5 text-primary-500" />
                        <span className="font-medium text-gray-900 dark:text-white">
                          {district.district}
                        </span>
                      </div>
                      <div className="text-2xl font-bold text-primary-600 dark:text-primary-400">
                        {district.candidates}
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-6">
                  Category-wise Participation
                </h3>
                <div className="space-y-3">
                  {categoryData.map((category, index) => (
                    <motion.div
                      key={category.category}
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1, duration: 0.5 }}
                      className="flex items-center justify-between p-3 bg-gradient-to-r from-primary-50 to-blue-50 dark:from-gray-800 dark:to-gray-700 rounded-lg"
                    >
                      <span className="text-gray-800 dark:text-gray-200 text-sm">
                        {category.category}
                      </span>
                      <span className="font-bold text-primary-600 dark:text-primary-400">
                        {category.count}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Success Stories Gallery */}
      <section className="py-20 bg-gradient-to-br from-primary-50 to-blue-50 dark:from-gray-900 dark:to-gray-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="font-heading font-bold text-3xl lg:text-4xl text-gray-900 dark:text-white mb-4">
              Project Gallery
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto content-text">
              Capturing moments from our DDU-GKY training programs, skill demonstrations, and successful placements across Maharashtra.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { src: "/images/ddu-gky/training-session.jpg", alt: "Hands-on training session for CCTV Supervisor candidates" },
              { src: "/images/ddu-gky/medical-training.jpg", alt: "Medical Equipment Assistant training with modern equipment" },
              { src: "/images/ddu-gky/certification-ceremony.jpg", alt: "Certificate distribution ceremony for successful candidates" },
              { src: "/images/ddu-gky/placement-drive.jpg", alt: "Employment fair connecting trained candidates with employers" },
              { src: "/images/ddu-gky/practical-demonstration.jpg", alt: "Practical skill demonstration by CCTV Supervisor trainees" },
              { src: "/images/ddu-gky/success-stories.jpg", alt: "Celebrating successful job placements of DDU-GKY graduates" },
            ].map((image, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="relative group overflow-hidden rounded-2xl"
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  width={400}
                  height={300}
                  className="w-full h-64 object-cover img-justified group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute bottom-0 left-0 right-0 p-4 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <p className="text-sm content-text text-white">{image.alt}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

