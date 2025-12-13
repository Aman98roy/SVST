"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { MapPin, Users, Target, Heart, Award, Building2 } from "lucide-react";

const organizationFacts = [
  {
    icon: MapPin,
    title: "Based in Maharashtra",
    description: "Headquartered in Sukli, Hingoli District, serving rural communities across Maharashtra"
  },
  {
    icon: Users,
    title: "Community-Centered",
    description: "Directly impacting thousands of lives through skill development and rural empowerment programs"
  },
  {
    icon: Target,
    title: "Mission-Driven",
    description: "Focused on sustainable development, environmental protection, and cultural preservation"
  },
  {
    icon: Heart,
    title: "Values-Based",
    description: "Guided by Swami Vivekananda's principles of service, selflessness, and human dignity"
  }
];

const keyAreas = [
  "Rural Youth Skill Development through DDU-GKY Program",
  "Sustainable Agriculture and Organic Farming Training",
  "Women Empowerment and Self-Help Group Formation",
  "Environmental Conservation and Watershed Management",
  "Healthcare Access and Medical Equipment Training",
  "Cultural Preservation and Heritage Promotion"
];

export function History() {
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
              About Us
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto content-text">
              Empowering rural communities through sustainable development, skill building, and cultural preservation across Maharashtra.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {organizationFacts.map((fact, index) => {
              const Icon = fact.icon;
              return (
                <motion.div
                  key={fact.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + index * 0.1, duration: 0.5 }}
                >
                  <Card className="h-full text-center bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm hover:shadow-lg transition-shadow">
                    <CardContent className="pt-6">
                      <Icon className="w-12 h-12 text-primary-500 mx-auto mb-4" />
                      <h3 className="font-semibold text-gray-900 dark:text-white mb-2">
                        {fact.title}
                      </h3>
                      <p className="text-sm text-gray-600 dark:text-gray-400 content-text">
                        {fact.description}
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* Who We Are Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="font-heading font-bold text-3xl lg:text-4xl text-gray-900 dark:text-white mb-6">
                Who We Are
              </h2>
              <div className="space-y-4 content-text">
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                  Swami Vivekanand Seva Trust (SVST) is a registered non-profit organization established with the vision of creating sustainable change in rural Maharashtra. Named after the great philosopher Swami Vivekananda, we embody his principles of selfless service, human dignity, and empowerment of the masses.
                </p>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                  Since our inception, we have been dedicated to bridging the gap between rural communities and development opportunities, ensuring that every individual has access to quality education, skill development, healthcare, and sustainable livelihood options.
                </p>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                  Our approach is community-centered, participatory, and sustainable, ensuring that development initiatives are not just implemented but owned by the communities themselves.
                </p>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <Image
                src="/images/about/organization-overview.jpg"
                alt="SVST team working with rural community members"
                width={600}
                height={400}
                className="rounded-2xl shadow-xl img-justified"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-2xl"></div>
            </motion.div>
          </div>
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
              Our comprehensive programs address multiple dimensions of rural development, from individual skill building to community-wide environmental and cultural initiatives.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
          >
            {keyAreas.map((area, index) => (
              <motion.div
                key={area}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 + index * 0.1, duration: 0.5 }}
                className="flex items-start space-x-3 p-4 bg-white dark:bg-gray-700 rounded-lg shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="w-2 h-2 rounded-full bg-primary-500 mt-3 flex-shrink-0" />
                <p className="text-gray-700 dark:text-gray-300 content-text">{area}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Our Organization Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <Image
                src="/images/about/svst-facility.jpg"
                alt="SVST headquarters and training facilities in Hingoli"
                width={600}
                height={400}
                className="rounded-2xl shadow-xl img-justified"
              />
              <div className="absolute bottom-4 left-4 right-4 bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm rounded-lg p-3">
                <p className="text-sm text-gray-700 dark:text-gray-300 font-medium">
                  SVST Headquarters - Sukli, Hingoli District, Maharashtra
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="font-heading font-bold text-3xl lg:text-4xl text-gray-900 dark:text-white mb-6">
                Our Organization
              </h2>
              <div className="space-y-4 content-text">
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                  <strong>Location:</strong> Swami Vivekanand Seva Trust is headquartered in Sukli village, Taluka Sengaon, District Hingoli, Maharashtra. Our strategic location allows us to serve rural communities across multiple districts including Nanded, Washim, Yavatmal, and Jalna.
                </p>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                  <strong>Legal Status:</strong> We are a registered non-profit organization incorporated under the relevant acts, ensuring transparency, accountability, and legal compliance in all our operations.
                </p>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                  <strong>Governance:</strong> Our organization operates under the guidance of a dedicated Board of Directors led by our President, Purushottam Kute, with experienced professionals managing various specialized programs and initiatives.
                </p>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                  <strong>Partnerships:</strong> We maintain active partnerships with government agencies, other NGOs, corporate sponsors, and international development organizations to maximize our impact and ensure sustainability of our programs.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Board of Directors Section */}
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
              Board of Directors
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto content-text">
              Led by visionary leaders committed to rural development and social transformation.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="max-w-2xl mx-auto"
          >
            <Card className="text-center bg-white/80 dark:bg-gray-700/80 backdrop-blur-sm">
              <CardContent className="pt-8 pb-6">
                <div className="w-32 h-32 mx-auto mb-6 rounded-full overflow-hidden border-4 border-primary-200 dark:border-primary-800 shadow-xl">
                  <Image
                    src="/images/board/purushottam-kute-president.jpg"
                    alt="Purushottam Kute - President, Board of Directors, SVST"
                    width={128}
                    height={128}
                    className="w-full h-full object-cover img-justified"
                  />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                  Purushottam Kute
                </h3>
                <p className="text-lg text-primary-600 dark:text-primary-400 font-semibold mb-4">
                  President, Board of Directors
                </p>
                <p className="text-gray-700 dark:text-gray-300 content-text">
                  Visionary leader and founder of SVST, dedicated to empowering rural communities through sustainable development initiatives. Under his leadership, SVST has successfully implemented numerous programs benefiting thousands of families across Maharashtra.
                </p>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

