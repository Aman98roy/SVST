"use client";

import { ActivityTemplate } from "@/components/sections/activity-template";
import { Users, GraduationCap, Network, Lightbulb, Building, HandHeart, Target, Award } from "lucide-react";

const activityData = {
  title: "DAESI & CCIM Programs",
  subtitle: "Building Capacity for Rural Development",
  description: "Comprehensive training programs for agricultural extension workers and community development initiatives, focusing on building institutional capacity for sustainable rural development and effective agricultural extension services.",
  mainImage: "https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=1200&h=600&fit=crop",
  category: "Capacity Building",
  location: "Hingoli & Surrounding Districts",
  duration: "Multi-year Program",
  beneficiaries: "300+ Extension Workers",
  features: [
    {
      icon: GraduationCap,
      title: "Extension Training",
      description: "Comprehensive training programs for agricultural extension workers on modern extension methodologies and farmer engagement."
    },
    {
      icon: Network,
      title: "Institutional Strengthening",
      description: "Building capacity of rural institutions and cooperatives for effective community-based development programs."
    },
    {
      icon: Lightbulb,
      title: "Innovation Transfer",
      description: "Training on technology transfer methods and adoption of innovative agricultural practices in rural communities."
    },
    {
      icon: HandHeart,
      title: "Community Mobilization",
      description: "Developing skills for community organization, participatory development, and grassroots leadership building."
    }
  ],
  stats: [
    {
      label: "Extension Workers Trained",
      value: "300+",
      icon: Users
    },
    {
      label: "Institutions Strengthened",
      value: "45+",
      icon: Building
    },
    {
      label: "Training Modules",
      value: "12+",
      icon: GraduationCap
    },
    {
      label: "Communities Reached",
      value: "150+",
      icon: Network
    }
  ],
  gallery: [
    {
      src: "https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=800&h=600&fit=crop",
      alt: "DAESI training session in progress",
      caption: "Agricultural extension training session for field workers"
    },
    {
      src: "https://images.unsplash.com/photo-1517048676732-d65bc937f952?w=800&h=600&fit=crop",
      alt: "Community mobilization workshop",
      caption: "Community mobilization and leadership development workshop"
    },
    {
      src: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=600&fit=crop",
      alt: "Institutional capacity building session",
      caption: "Institutional capacity building for rural cooperatives"
    },
    {
      src: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=800&h=600&fit=crop",
      alt: "Group discussion and planning",
      caption: "Participatory planning and group discussion sessions"
    },
    {
      src: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=800&h=600&fit=crop",
      alt: "Field visit and practical training",
      caption: "Field visits for practical application of extension methods"
    },
    {
      src: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=800&h=600&fit=crop",
      alt: "Certificate distribution ceremony",
      caption: "Recognition and certification of trained extension workers"
    }
  ],
  content: {
    overview: "The DAESI (Development of Agriculture Extension Services in India) and CCIM (Cooperative and Community Institution Management) programs are strategic initiatives designed to strengthen agricultural extension services and rural institutional capacity. These comprehensive training programs focus on building the skills and knowledge of extension workers, cooperative leaders, and community institutions to effectively serve rural populations and promote sustainable agricultural development.",
    objectives: [
      "Enhance the capacity of agricultural extension workers in modern extension methodologies",
      "Strengthen rural institutions and cooperatives for effective community development",
      "Develop leadership skills among community members and institutional representatives",
      "Promote participatory approaches to rural development and technology transfer",
      "Build sustainable networks for knowledge sharing and collaborative development"
    ],
    methodology: "Our training methodology combines classroom instruction with hands-on field experience, case study analysis, and peer learning. Programs include modules on extension communication, participatory rural appraisal, project management, financial management for cooperatives, and community mobilization techniques. We use interactive teaching methods, group exercises, and real-world problem-solving approaches to ensure practical skill development.",
    impact: "Over 300 extension workers have been trained through our DAESI and CCIM programs, significantly improving the quality of agricultural extension services in the region. 45 rural institutions have been strengthened, leading to better governance and service delivery. The trained extension workers now serve over 150 communities, with improved farmer adoption rates of new technologies increasing by 50%. The program has also created a network of trained professionals who continue to mentor and support each other in their development work."
  }
};

export function DAESICCIMClient() {
  return <ActivityTemplate {...activityData} />;
}