"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { MapPin, Users, Target, Heart, Award, Building2, Globe, Handshake } from "lucide-react";

const organizationInfo = [
  {
    icon: Building2,
    title: "What We Are",
    description: "A non-profit organization working selflessly to uplift rural communities through sustainable development, skill building, and cultural preservation programs across Maharashtra since 2010."
  },
  {
    icon: Target,
    title: "What We Do",
    description: "We implement comprehensive rural development programs including DDU-GKY skill development, women empowerment, sustainable agriculture training, environmental conservation, and healthcare initiatives."
  },
  {
    icon: MapPin,
    title: "Our Organization Based In",
    description: "Headquartered in Sukli, Hingoli District, Maharashtra, we serve communities across rural Maharashtra with regional centers and field offices for maximum community reach."
  },
  {
    icon: Heart,
    title: "Our Values",
    description: "Guided by Swami Vivekananda's principles of service, selflessness, and human dignity, we believe in empowering individuals to transform their communities and create lasting positive change."
  }
];

const impactAreas = [
  {
    icon: Users,
    title: "Community Empowerment",
    stats: "10,000+ Lives Impacted",
    description: "Direct community engagement through skill development and empowerment programs"
  },
  {
    icon: Award,
    title: "Skill Development",
    stats: "2,500+ Youth Trained",
    description: "Comprehensive vocational training through DDU-GKY and other programs"
  },
  {
    icon: Globe,
    title: "Environmental Impact", 
    stats: "50+ Villages",
    description: "Watershed management, organic farming, and environmental conservation initiatives"
  },
  {
    icon: Handshake,
    title: "Women Empowerment",
    stats: "500+ SHGs Formed",
    description: "Self-Help Group formation and women's economic empowerment programs"
  }
];

const boardMembers = [
  {
    name: "Purushottam Kute",
    position: "President & Founder",
    image: "/images/founder/purushottam-kute.jpg",
    description: "Visionary leader with over 15 years of experience in rural development and social service",
    achievements: ["Established SVST in 2010", "Led 50+ community programs", "Awarded for social service excellence"]
  }
];

export function AboutUsContent() {
  return (
    <div className="bg-white dark:bg-gray-900">
      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-br from-primary-50 via-white to-blue-50 dark:from-gray-900 dark:via-gray-950 dark:to-gray-900 relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }} />
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h1 className="font-heading font-bold text-3xl sm:text-4xl lg:text-5xl text-gray-900 dark:text-white mb-6">
              About <span className="bg-gradient-to-r from-primary-600 to-primary-800 bg-clip-text text-transparent">Swami Vivekanand Seva Trust</span>
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Empowering rural communities through sustainable development, skill building, and cultural preservation across Maharashtra since 2010.
            </p>
          </motion.div>

          {/* Organization Info Cards */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16"
          >
            {organizationInfo.map((info, index) => {
              const Icon = info.icon;
              return (
                <motion.div
                  key={info.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + index * 0.1, duration: 0.6 }}
                  whileHover={{ y: -5 }}
                  className="group"
                >
                  <Card className="h-full bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border-2 border-gray-100 dark:border-gray-700 hover:border-primary-300 dark:hover:border-primary-600 transition-all duration-300 hover:shadow-xl">
                    <CardContent className="p-6 text-center">
                      <div className="w-16 h-16 bg-primary-100 dark:bg-primary-900/30 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                        <Icon className="w-8 h-8 text-primary-600 dark:text-primary-400" />
                      </div>
                      <h3 className="font-heading font-bold text-lg text-gray-900 dark:text-white mb-3">
                        {info.title}
                      </h3>
                      <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
                        {info.description}
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* Impact Areas Section */}
      <section className="py-16 bg-gradient-to-b from-gray-50 to-white dark:from-gray-800 dark:to-gray-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="font-heading font-bold text-3xl sm:text-4xl lg:text-5xl text-gray-900 dark:text-white mb-4">
              Our Impact Areas
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Transforming lives through focused interventions in key development sectors
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {impactAreas.map((area, index) => {
              const Icon = area.icon;
              return (
                <motion.div
                  key={area.title}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                  whileHover={{ y: -8 }}
                  className="group"
                >
                  <Card className="h-full text-center bg-white dark:bg-gray-800 border-2 border-gray-100 dark:border-gray-700 hover:border-primary-300 dark:hover:border-primary-600 transition-all duration-300 hover:shadow-xl">
                    <CardContent className="p-6">
                      <div className="w-16 h-16 bg-gradient-to-br from-primary-500 to-primary-600 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                        <Icon className="w-8 h-8 text-white" />
                      </div>
                      <h3 className="font-heading font-bold text-xl text-gray-900 dark:text-white mb-2">
                        {area.title}
                      </h3>
                      <p className="text-2xl font-bold text-primary-600 dark:text-primary-400 mb-3">
                        {area.stats}
                      </p>
                      <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
                        {area.description}
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Board of Directors Section */}
      <section className="py-16 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="font-heading font-bold text-3xl sm:text-4xl lg:text-5xl text-gray-900 dark:text-white mb-4">
              Board of Directors
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Leadership committed to transforming rural communities through dedicated service
            </p>
          </motion.div>

          <div className="flex justify-center">
            {boardMembers.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2, duration: 0.8 }}
                className="max-w-lg"
              >
                <Card className="bg-gradient-to-br from-white to-gray-50 dark:from-gray-800 dark:to-gray-900 border-2 border-primary-100 dark:border-primary-800/50 shadow-2xl hover:shadow-3xl transition-all duration-500">
                  <CardContent className="p-8 text-center">
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.3 }}
                      className="relative mb-6"
                    >
                      <div className="w-32 h-32 mx-auto relative rounded-full overflow-hidden border-4 border-primary-200 dark:border-primary-600 shadow-xl">
                        <Image
                          src={member.image}
                          alt={member.name}
                          fill
                          className="object-cover"
                        />
                      </div>
                    </motion.div>
                    <h3 className="font-heading font-bold text-2xl text-gray-900 dark:text-white mb-2">
                      {member.name}
                    </h3>
                    <p className="text-lg font-semibold text-primary-600 dark:text-primary-400 mb-4">
                      {member.position}
                    </p>
                    <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                      {member.description}
                    </p>
                    <div className="space-y-2">
                      <h4 className="font-semibold text-gray-900 dark:text-white">Key Achievements:</h4>
                      <ul className="text-sm text-gray-600 dark:text-gray-300 space-y-1">
                        {member.achievements.map((achievement, idx) => (
                          <li key={idx} className="flex items-center">
                            <span className="w-2 h-2 bg-primary-500 rounded-full mr-3"></span>
                            {achievement}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}