"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Quote } from "lucide-react";

const testimonials = [
  {
    name: "Ruhanil Nabi",
    text: "I believe Bio Parivar has successfully created the most iconic evolution in the history of organic farming and eco-friendly substitutes for modern technologies used in agriculture. In our village, a couple of farmers got skillful training to improve their farming methods.",
  },
  {
    name: "Rishab Vhaduri",
    text: "The most scientifically challenging part was to completely eradicate the practice of using toxic and hazardous chemicals that mostly resulted in the destruction of the crops and increased the growth of chronic diseases to the point of extinction.",
  },
  {
    name: "Lakshmikant Sarma",
    text: "The implementation of livestock and aquaculture has impacted many farmers in enhancing their livelihoods. My father, Shree Jasodhar Kumar, is a living example of it. We are going to be forever grateful and respect their courage to bring a massive change in the scientific field of agriculture.",
  },
];

export function Testimonials() {
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
            What Our Clients Say
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Testimonials from community members whose lives we've touched
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
            >
              <Card className="h-full">
                <CardContent className="pt-6">
                  <Quote className="w-10 h-10 text-primary-500 mb-4" />
                  <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
                    {testimonial.text}
                  </p>
                  <div className="flex items-center">
                    <div className="w-10 h-10 bg-primary-100 dark:bg-primary-900/30 rounded-full flex items-center justify-center mr-3">
                      <span className="text-primary-600 dark:text-primary-400 font-semibold">
                        {testimonial.name.charAt(0)}
                      </span>
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900 dark:text-white">
                        {testimonial.name}
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

