"use client";

import { ActivityTemplate } from "@/components/sections/activity-template";
import { BookOpen, Users2, Sprout, TrendingUp, GraduationCap, Lightbulb, Clock, MapPin } from "lucide-react";

const activityData = {
  title: "District Level Farmers Training",
  subtitle: "Empowering Agriculture Through Knowledge",
  description: "Comprehensive training programs that empower farmers with modern agricultural knowledge, sustainable farming techniques, and innovative practices to enhance productivity, income, and environmental sustainability.",
  mainImage: "https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=1200&h=600&fit=crop",
  category: "Agricultural Education",
  location: "Multiple Villages, Hingoli",
  duration: "Ongoing Sessions",
  beneficiaries: "1,200+ Farmers",
  features: [
    {
      icon: BookOpen,
      title: "Modern Techniques",
      description: "Training on latest agricultural technologies, precision farming, and scientific crop management practices."
    },
    {
      icon: Sprout,
      title: "Sustainable Practices",
      description: "Organic farming methods, natural pest management, and environmentally friendly agricultural approaches."
    },
    {
      icon: TrendingUp,
      title: "Financial Literacy",
      description: "Market analysis, crop planning for better returns, and agricultural business management skills."
    },
    {
      icon: Lightbulb,
      title: "Innovation Workshop",
      description: "Hands-on training with modern equipment, tools, and innovative farming solutions for increased efficiency."
    }
  ],
  stats: [
    {
      label: "Farmers Trained",
      value: "1,200+",
      icon: Users2
    },
    {
      label: "Training Sessions",
      value: "150+",
      icon: GraduationCap
    },
    {
      label: "Income Increase",
      value: "40%",
      icon: TrendingUp
    },
    {
      label: "Villages Covered",
      value: "25+",
      icon: MapPin
    }
  ],
  gallery: [
    {
      src: "https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=800&h=600&fit=crop",
      alt: "Farmers training session in progress",
      caption: "Interactive training session on modern farming techniques"
    },
    {
      src: "https://images.unsplash.com/photo-1574263867128-a3d5c1b1deae?w=800&h=600&fit=crop",
      alt: "Hands-on demonstration of equipment",
      caption: "Practical demonstration of modern agricultural equipment"
    },
    {
      src: "https://images.unsplash.com/photo-1500937386664-56d1dfef3854?w=800&h=600&fit=crop",
      alt: "Sustainable farming workshop",
      caption: "Workshop on organic and sustainable farming practices"
    },
    {
      src: "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=800&h=600&fit=crop",
      alt: "Field visit and practical training",
      caption: "Field visits for practical application of learned techniques"
    },
    {
      src: "https://images.unsplash.com/photo-1464207687429-7505649dae38?w=800&h=600&fit=crop",
      alt: "Group discussion among farmers",
      caption: "Farmers sharing experiences and best practices"
    },
    {
      src: "https://images.unsplash.com/photo-1592419044706-39ad99ad86d4?w=800&h=600&fit=crop",
      alt: "Certificate distribution ceremony",
      caption: "Certificate distribution to successful participants"
    }
  ],
  content: {
    overview: "The District Level Farmers Training Program is a flagship initiative designed to transform agricultural practices across rural Maharashtra. Through systematic knowledge transfer and practical demonstrations, we bridge the gap between traditional farming methods and modern scientific approaches, ensuring sustainable agricultural development and improved livelihoods for farming communities.",
    objectives: [
      "Transfer modern agricultural knowledge and techniques to rural farmers",
      "Promote sustainable and organic farming practices for environmental conservation",
      "Enhance farmers' income through improved productivity and market linkages",
      "Build capacity in agricultural business management and financial planning",
      "Create a network of trained farmers who can mentor others in their communities"
    ],
    methodology: "Our training approach combines theoretical knowledge with hands-on practical sessions. Programs include classroom sessions, field demonstrations, expert lectures, peer-to-peer learning, and follow-up support. We use local language materials, visual aids, and culturally appropriate teaching methods to ensure effective knowledge transfer. Each program is tailored to local crop patterns, soil conditions, and market opportunities.",
    impact: "Over 1,200 farmers across 25 villages have completed our training programs, reporting an average 40% increase in agricultural income. Adoption of sustainable practices has improved soil health in 80% of participating farms. The program has created 50 master trainers who continue to educate other farmers in their communities, creating a multiplier effect that extends our reach and impact sustainably."
  }
};

export function FarmersTrainingClient() {
  return <ActivityTemplate {...activityData} />;
}