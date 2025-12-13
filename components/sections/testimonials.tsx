"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Quote } from "lucide-react";

const testimonials = [
  {
    name: "Ramesh Patil",
    location: "Nanded District",
    profession: "Farmer & DDU-GKY Graduate",
    text: "Through SVST's training programs, I learned modern agricultural techniques and also completed CCTV Supervisor training under DDU-GKY. Today, I have my own small business and can support my family with dignity. The trust has truly empowered our rural community.",
  },
  {
    name: "Sunita Deshmukh",
    location: "Yavatmal District", 
    profession: "Medical Equipment Assistant",
    text: "Being a woman from a rural background, I never thought I could work in the medical field. SVST's Medical Equipment Assistant training program changed my life. Now I work at the district hospital and inspire other girls in my village to pursue their dreams.",
  },
  {
    name: "Ganesh Khandare",
    location: "Washim District",
    profession: "Agricultural Trainer",
    text: "SVST's organic farming and sustainable agriculture programs have transformed farming in our region. As someone who benefited from their training, I now help other farmers adopt eco-friendly practices. The trust's work is genuinely changing lives in Maharashtra's rural areas.",
  },
  {
    name: "Priya Jadhav",
    location: "Jalna District",
    profession: "Self-Help Group Leader",
    text: "The women empowerment programs by SVST have given us confidence and financial independence. Through their guidance, our self-help group now runs successfully, and we're supporting over 50 families in our village. Truly grateful for their support.",
  },
];

export function Testimonials() {
  return (
    <section className="py-12 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-950">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-heading font-bold text-3xl sm:text-4xl lg:text-5xl text-gray-900 dark:text-white mb-4">
            What Our Community Says
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto text-center">
            Real stories from people whose lives have been transformed through our programs across Maharashtra's rural districts.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 lg:gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
            >
              <Card className="h-full hover:shadow-lg transition-shadow duration-300">
                <CardContent className="pt-6">
                  <Quote className="w-10 h-10 text-primary-500 mb-4" />
                  <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed content-text">
                    "{testimonial.text}"
                  </p>
                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-gradient-to-br from-primary-100 to-primary-200 dark:from-primary-900/30 dark:to-primary-800/30 rounded-full flex items-center justify-center mr-4">
                      <span className="text-primary-600 dark:text-primary-400 font-bold text-lg">
                        {testimonial.name.charAt(0)}
                      </span>
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900 dark:text-white text-lg">
                        {testimonial.name}
                      </p>
                      <p className="text-sm text-primary-600 dark:text-primary-400 font-medium">
                        {testimonial.profession}
                      </p>
                      <p className="text-xs text-gray-500 dark:text-gray-400">
                        {testimonial.location}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

