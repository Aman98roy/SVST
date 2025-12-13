"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Heart, ArrowRight } from "lucide-react";

export function DonationCTA() {
  return (
    <section className="py-12 bg-gradient-to-br from-primary-500 via-primary-600 to-accent-teal relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto text-center"
        >
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
            className="inline-flex items-center justify-center w-20 h-20 bg-white/20 backdrop-blur-sm rounded-full mb-6"
          >
            <Heart className="w-10 h-10 text-white" />
          </motion.div>

          <h2 className="font-heading font-bold text-2xl sm:text-3xl lg:text-4xl text-white mb-6">
            Make a Difference Today
          </h2>
          <p className="text-xl text-white/90 mb-8 leading-relaxed content-text">
            Your contribution helps us continue our mission of empowering
            communities, protecting the environment, and promoting cultural
            diversity. Every donation, no matter how small, creates a lasting
            impact.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button
              size="lg"
              variant="secondary"
              className="bg-white text-primary-600 hover:bg-gray-100"
              asChild
            >
              <Link href="/donate">
                Donate Now
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-2 border-white text-white hover:bg-white/10"
              asChild
            >
              <Link href="/about">Learn About Our Impact</Link>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

