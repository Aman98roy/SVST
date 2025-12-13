"use client";

import { ActivityTemplate } from "@/components/sections/activity-template";
import { Flask, Leaf, Recycle, Shield, Microscope, Seedling, Target, Award } from "lucide-react";

const activityData = {
  title: "Biological Input Laboratory",
  subtitle: "Pioneering Organic Agricultural Solutions",
  description: "Advanced research and development facility focused on creating organic farming inputs, biofertilizers, and eco-friendly agricultural solutions that promote sustainable farming practices while maintaining high productivity levels.",
  mainImage: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?w=1200&h=600&fit=crop",
  category: "Research & Development",
  location: "SVST Campus, Hingoli",
  duration: "Continuous Research",
  beneficiaries: "800+ Farmers",
  features: [
    {
      icon: Flask,
      title: "Biofertilizer Production",
      description: "Development and production of high-quality biofertilizers using beneficial microorganisms for sustainable crop nutrition."
    },
    {
      icon: Leaf,
      title: "Organic Pesticides",
      description: "Research and formulation of natural pest control solutions using plant extracts and beneficial microbes."
    },
    {
      icon: Recycle,
      title: "Waste Composting",
      description: "Converting agricultural waste into valuable organic compost through advanced decomposition techniques."
    },
    {
      icon: Shield,
      title: "Quality Assurance",
      description: "Rigorous testing and quality control to ensure all biological inputs meet safety and efficacy standards."
    }
  ],
  stats: [
    {
      label: "Products Developed",
      value: "15+",
      icon: Flask
    },
    {
      label: "Farmers Benefited",
      value: "800+",
      icon: Seedling
    },
    {
      label: "Chemical Reduction",
      value: "60%",
      icon: Target
    },
    {
      label: "Research Projects",
      value: "25+",
      icon: Microscope
    }
  ],
  gallery: [
    {
      src: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?w=800&h=600&fit=crop",
      alt: "Biological input laboratory research facility",
      caption: "State-of-the-art laboratory for biological input research"
    },
    {
      src: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=800&h=600&fit=crop",
      alt: "Biofertilizer production process",
      caption: "Biofertilizer production using beneficial microorganisms"
    },
    {
      src: "https://images.unsplash.com/photo-1628771065518-0d82f1938462?w=800&h=600&fit=crop",
      alt: "Organic compost preparation",
      caption: "Organic compost preparation from agricultural waste"
    },
    {
      src: "https://images.unsplash.com/photo-1574263867128-a3d5c1b1deae?w=800&h=600&fit=crop",
      alt: "Quality testing of biological inputs",
      caption: "Quality testing and analysis of biological products"
    },
    {
      src: "https://images.unsplash.com/photo-1464207687429-7505649dae38?w=800&h=600&fit=crop",
      alt: "Field testing of organic inputs",
      caption: "Field trials and testing of organic agricultural inputs"
    },
    {
      src: "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=800&h=600&fit=crop",
      alt: "Farmer training on organic inputs",
      caption: "Training farmers on proper use of biological inputs"
    }
  ],
  content: {
    overview: "The Biological Input Laboratory represents SVST's commitment to sustainable agriculture through scientific innovation. This cutting-edge facility combines traditional knowledge with modern biotechnology to develop organic farming solutions that reduce dependency on chemical inputs while maintaining agricultural productivity. Our laboratory serves as a research hub for developing eco-friendly alternatives to synthetic fertilizers and pesticides.",
    objectives: [
      "Develop cost-effective biofertilizers and organic inputs for smallholder farmers",
      "Research and formulate natural pest management solutions using indigenous resources",
      "Convert agricultural waste into valuable organic amendments through scientific processes",
      "Provide quality-assured biological products that enhance soil health and crop productivity",
      "Transfer technology and knowledge to farmers for sustainable agricultural practices"
    ],
    methodology: "Our research methodology integrates microbiology, soil science, and plant pathology to develop effective biological solutions. We isolate beneficial microorganisms from local soil, optimize their growth conditions, and formulate them into user-friendly products. Each product undergoes extensive laboratory testing, greenhouse trials, and field validation before being released to farmers. Quality control protocols ensure consistency and efficacy of all biological inputs.",
    impact: "The laboratory has successfully developed 15 biological products that are now used by over 800 farmers across the region. Farmers using our biological inputs have reported a 60% reduction in chemical fertilizer usage and 25% improvement in soil health indicators. The initiative has prevented over 10,000 tons of agricultural waste from being burned, converting it into valuable organic matter. Our research has also contributed to academic publications and policy recommendations for organic farming promotion."
  }
};

export function BiologicalInputClient() {
  return <ActivityTemplate {...activityData} />;
}