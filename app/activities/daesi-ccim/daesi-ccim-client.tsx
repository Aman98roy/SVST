"use client";

import { ActivityTemplate } from "@/components/sections/activity-template";
import { Users, GraduationCap, Network, Lightbulb, Building, HandHeart, Target, Award } from "lucide-react";

const activityData = {
  title: "D.A.E.S.I & C.C.I.M Programs",
  subtitle: "Sponsored by National Institute of Agricultural Extension Management (MANAGE), Hyderabad",
  description: "Comprehensive training programs including the 48-week DAESI program for agricultural extension services and the 12-week CCIM program for insecticides management, both designed to enhance professional development and promote sustainable agricultural practices.",
  mainImage: "/images/activities/daesi-ccim/hero-image.JPG",
  category: "Professional Training",
  location: "District Hingoli",
  duration: "2020 - 2025 (Ongoing)",
  beneficiaries: "500+ Professionals",
  features: [
    {
      icon: GraduationCap,
      title: "DAESI Program (48 weeks)",
      description: "Comprehensive training for input dealers with 40 days classroom training and 8 exposure visits covering modern agricultural practices and pest management."
    },
    {
      icon: Target,
      title: "CCIM Program (12 weeks)",
      description: "Certificate Course on Insecticides Management providing 40-hour training on safe selection, application, and handling of insecticides."
    },
    {
      icon: Award,
      title: "Professional Certification",
      description: "Participants receive diplomas and certificates recognizing their expertise in agricultural extension services and insecticides management."
    },
    {
      icon: HandHeart,
      title: "Community Impact",
      description: "Creating trusted advisors who contribute to sustainable agricultural practices and enhanced food safety in farming communities."
    }
  ],
  stats: [
    {
      label: "DAESI Trainees",
      value: "250",
      icon: GraduationCap
    },
    {
      label: "CCIM Trainees",
      value: "250",
      icon: Target
    },
    {
      label: "Total Professionals",
      value: "500",
      icon: Users
    },
    {
      label: "Program Duration",
      value: "2020-2025",
      icon: Award
    }
  ],
  gallery: [
    {
      src: "/images/activities/daesi-ccim/01.jpg",
      alt: "DAESI program training session",
      caption: "DAESI 48-week comprehensive training program for input dealers"
    },
    {
      src: "/images/activities/daesi-ccim/02.JPG",
      alt: "CCIM insecticides management course",
      caption: "CCIM 12-week certificate course on insecticides management"
    },
    {
      src: "/images/activities/daesi-ccim/03.JPG",
      alt: "Professional development training",
      caption: "Professional development and certification programs"
    },
    {
      src: "/images/activities/daesi-ccim/WhatsApp Image 2025-09-17 at 11.44.54 AM.jpeg",
      alt: "DAESI classroom training",
      caption: "40 days intensive classroom training covering agricultural practices"
    },
    {
      src: "/images/activities/daesi-ccim/WhatsApp Image 2025-09-17 at 11.44.55 AM.jpeg",
      alt: "CCIM practical training",
      caption: "Hands-on CCIM training for safe insecticides handling"
    },
    {
      src: "/images/activities/daesi-ccim/01 copy.JPG",
      alt: "Agricultural extension services training",
      caption: "Training on modern agricultural extension methodologies"
    },
    {
      src: "/images/activities/daesi-ccim/02 copy.JPG",
      alt: "Sustainable agriculture practices",
      caption: "Promoting sustainable agriculture and food safety practices"
    }
  ],
  content: {
    overview: "The D.A.E.S.I (Diploma in Agricultural Extension Services for Input Dealers) and C.C.I.M (Certificate Course on Insecticides Management) programs are sponsored by the National Institute of Agricultural Extension Management (MANAGE), Hyderabad. These comprehensive training initiatives are designed to enhance professional development and promote sustainable agricultural practices in District Hingoli.",
    objectives: [
      "Enhance Professional Development: Empower input dealers to contribute to sustainable agricultural practices",
      "Improve Advisory Services: Enable input dealers to provide informed advice on agricultural inputs",
      "Support Sustainable Agriculture: Promote environmentally friendly farming practices",
      "Develop practical skills: Provide hands-on training on safe selection, application, and handling of insecticides",
      "Create trusted advisors: Build a network of knowledgeable dealers for expert guidance to farmers"
    ],
    methodology: "DAESI Program: 48-week comprehensive training with 40 days classroom training covering modern agricultural practices, pest management, input selection, soil health, crop production, and sustainable farming techniques, plus 8 exposure visits to farms and research centers. CCIM Program: 12-week course providing 40-hour Input Dealer Training Program focusing on insecticides management, safety protocols, and best practices.",
    impact: "From 2020 to 2025, both programs have trained 250 participants each in District Hingoli, totaling 500 professionals. Upon completion, participants receive diplomas and certificates recognizing their expertise, enabling them to become trusted advisors in their communities and contribute to sustainable agricultural practices and enhanced food safety.",
    trainingData: {
      title: "Training Programs Statistics (2020-2025)",
      description: "Comprehensive data showing the reach and impact of DAESI and CCIM training programs in District Hingoli.",
      headers: ["Faculty", "Region", "Trainees"],
      rows: [
        ["DAESI", "District Hingoli", "250"],
        ["CCIM", "District Hingoli", "250"]
      ],
      total: 500
    },
    highlights: [
      "DAESI Program includes 8 hands-on exposure visits at farms, research centers, and agricultural organizations",
      "CCIM creates a network of knowledgeable dealers providing expert guidance to farmers and agricultural professionals",
      "Both programs aim to achieve dual impact: enhancing professional growth and promoting farming community safety",
      "Certification enhances professional development, enabling better service to the farming community"
    ]
  }
};

export function DAESICCIMClient() {
  return <ActivityTemplate {...activityData} />;
}