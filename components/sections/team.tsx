"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { Mail, Phone, MapPin, Award, Users, Target, Star, Calendar } from "lucide-react";

const workingTeam = [
  {
    name: "Dr. Rajesh Patil",
    role: "Program Director - DDU-GKY",
    department: "Skill Development",
    photo: "/images/team/rajesh-patil.jpg",
    experience: "8+ years in rural development",
    specialization: "Vocational Training & Placement"
  },
  {
    name: "Sunita Deshmukh",
    role: "Training Coordinator",
    department: "Medical Equipment Training",
    photo: "/images/team/sunita-deshmukh.jpg",
    experience: "5+ years in healthcare training",
    specialization: "Medical Equipment & Patient Care"
  },
  {
    name: "Ganesh Khandare", 
    role: "Field Coordinator",
    department: "Agriculture & Environment",
    photo: "/images/team/ganesh-khandare.jpg",
    experience: "10+ years in organic farming",
    specialization: "Sustainable Agriculture & Watershed Management"
  },
  {
    name: "Priya Jadhav",
    role: "Women Empowerment Officer",
    department: "Community Development", 
    photo: "/images/team/priya-jadhav.jpg",
    experience: "6+ years in women's development",
    specialization: "Self-Help Groups & Microfinance"
  },
  {
    name: "Amit Sharma",
    role: "Technical Trainer", 
    department: "CCTV & Security Systems",
    photo: "/images/team/amit-sharma.jpg",
    experience: "7+ years in security technology",
    specialization: "Surveillance Systems & Electronic Security"
  },
  {
    name: "Kavita Raut",
    role: "Administrative Manager",
    department: "Operations & Finance",
    photo: "/images/team/kavita-raut.jpg", 
    experience: "9+ years in NGO management",
    specialization: "Project Management & Compliance"
  }
];

const departments = [
  {
    name: "Skill Development",
    icon: Award,
    description: "DDU-GKY implementation and vocational training programs"
  },
  {
    name: "Community Development",
    icon: Users,
    description: "Women empowerment and rural community engagement"
  },
  {
    name: "Agriculture & Environment",
    icon: Target,
    description: "Sustainable farming and environmental conservation"
  }
];

export function Team() {
  return (
    <section className="py-16 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-950">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-heading font-bold text-3xl sm:text-4xl lg:text-5xl text-gray-900 dark:text-white mb-6">
            Our Working Team
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Meet the dedicated professionals who make our mission possible through their expertise, commitment, and passion for rural development across Maharashtra.
          </p>
        </motion.div>

        {/* Departments Overview */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16"
        >
          {departments.map((dept, index) => {
            const Icon = dept.icon;
            return (
              <Card key={dept.name} className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="pt-6">
                  <Icon className="w-12 h-12 text-primary-500 mx-auto mb-4" />
                  <h3 className="font-semibold text-lg text-gray-900 dark:text-white mb-2">
                    {dept.name}
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400 content-text">
                    {dept.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </motion.div>

        {/* Working Team Members */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="mb-16"
        >
          <h3 className="font-heading font-bold text-2xl text-gray-900 dark:text-white mb-8 text-center">
            Working Team
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {workingTeam.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 + index * 0.1, duration: 0.5 }}
              >
                <Card className="h-full hover:shadow-xl transition-all duration-300 group overflow-hidden">
                  <CardContent className="p-6">
                    <div className="relative mb-4">
                      <div className="w-24 h-24 mx-auto rounded-full overflow-hidden border-3 border-primary-200 dark:border-primary-800 shadow-lg">
                        <Image
                          src={member.photo}
                          alt={`${member.name} - ${member.role}`}
                          width={96}
                          height={96}
                          className="w-full h-full object-cover img-justified group-hover:scale-110 transition-transform duration-300"
                        />
                      </div>
                      <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 bg-primary-500 text-white text-xs px-2 py-1 rounded-full">
                        {member.department}
                      </div>
                    </div>
                    
                    <div className="text-center mb-4">
                      <h4 className="font-semibold text-lg text-gray-900 dark:text-white mb-1">
                        {member.name}
                      </h4>
                      <p className="text-primary-600 dark:text-primary-400 font-medium text-sm mb-2">
                        {member.role}
                      </p>
                    </div>
                    
                    <div className="space-y-2 text-sm">
                      <div className="flex items-center text-gray-600 dark:text-gray-400">
                        <Award className="w-4 h-4 mr-2 text-primary-500" />
                        <span className="content-text">{member.experience}</span>
                      </div>
                      <div className="flex items-start text-gray-600 dark:text-gray-400">
                        <Target className="w-4 h-4 mr-2 mt-0.5 text-primary-500 flex-shrink-0" />
                        <span className="content-text">{member.specialization}</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Contact Information */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          <Card className="bg-gradient-to-br from-primary-50 to-blue-50 dark:from-gray-800 dark:to-gray-700 border-primary-200 dark:border-gray-600">
            <CardContent className="pt-8">
              <div className="text-center mb-6">
                <h3 className="font-heading font-bold text-2xl text-gray-900 dark:text-white mb-4">
                  Get In Touch With Our Team
                </h3>
                <p className="text-gray-600 dark:text-gray-400 content-text">
                  Our team is always ready to assist you with information about our programs, partnerships, or volunteer opportunities.
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
                <div className="flex flex-col items-center">
                  <MapPin className="w-8 h-8 text-primary-500 mb-2" />
                  <p className="text-gray-700 dark:text-gray-300 text-sm content-text">
                    SVST Campus, Sukli<br/>
                    Hingoli District, Maharashtra
                  </p>
                </div>
                <div className="flex flex-col items-center">
                  <Phone className="w-8 h-8 text-primary-500 mb-2" />
                  <p className="text-gray-700 dark:text-gray-300 text-sm">
                    +91 24567-89101<br/>
                    <span className="text-xs text-gray-500">Mon-Sat, 10AM-6PM</span>
                  </p>
                </div>
                <div className="flex flex-col items-center">
                  <Mail className="w-8 h-8 text-primary-500 mb-2" />
                  <p className="text-gray-700 dark:text-gray-300 text-sm">
                    svsthingoli@gmail.com
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}

