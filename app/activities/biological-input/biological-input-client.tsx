"use client";

import { ActivityTemplate } from "@/components/sections/activity-template";
import { Beaker, Leaf, Recycle, Shield, Microscope, Sprout, Target, Award } from "lucide-react";

const activityData = {
  title: "Biological Input Laboratory",
  subtitle: "Empowering Sustainable Agriculture",
  description: "The Swami Vivekanand Seva Trust's (SVST) Biological Input Laboratory in Hingoli, Maharashtra, is a pioneering initiative promoting sustainable agriculture in the region. Sanctioned by the Agriculture Department, Hingoli, this laboratory produces and supplies biological inputs, enabling farmers to reduce their reliance on chemical fertilizers and pesticides.",
  mainImage: "/images/activities/biological-input/hero-image.jpg",
  category: "Sustainable Agriculture",
  location: "Hingoli, Maharashtra",
  duration: "Ongoing Operations",
  beneficiaries: "Regional Farming Community",
  features: [
    {
      icon: Beaker,
      title: "Trichoderma",
      description: "A beneficial fungus controlling soil-borne diseases and improving soil health for enhanced crop protection and growth."
    },
    {
      icon: Leaf,
      title: "Vermi Compost",
      description: "An organic fertilizer made from earthworms, enhancing soil fertility and structure for sustainable crop nutrition."
    },
    {
      icon: Shield,
      title: "Metarhizium",
      description: "An entomopathogenic fungus used for controlling pests naturally without harmful chemical pesticides."
    },
    {
      icon: Microscope,
      title: "Azotobacter",
      description: "A nitrogen-fixing bacterium improving soil fertility by increasing nitrogen availability to plants naturally."
    }
  ],
  stats: [
    {
      label: "Biological Inputs",
      value: "4 Types",
      icon: Beaker
    },
    {
      label: "Chemical Reduction",
      value: "Significant",
      icon: Target
    },
    {
      label: "Soil Health",
      value: "Enhanced",
      icon: Leaf
    },
    {
      label: "Sustainability",
      value: "Promoted",
      icon: Award
    }
  ],
  gallery: [
    {
      src: "/images/activities/biological-input/Bio Input 01.JPG",
      alt: "Biological Input Laboratory facility",
      caption: "SVST's Biological Input Laboratory sanctioned by Agriculture Department, Hingoli"
    },
    {
      src: "/images/activities/biological-input/Bio Input 03.JPG",
      alt: "Biological input production process",
      caption: "Production of specialized biological inputs for sustainable agriculture"
    },
    {
      src: "/images/activities/biological-input/Bio Input 04.JPG",
      alt: "Quality biological inputs ready for distribution",
      caption: "High-quality biological inputs produced using advanced standards"
    }
  ],
  content: {
    overview: "The Swami Vivekanand Seva Trust's (SVST) Biological Input Laboratory in Hingoli, Maharashtra, is a pioneering initiative promoting sustainable agriculture in the region. Sanctioned by the Agriculture Department, Hingoli, this laboratory produces and supplies biological inputs, enabling farmers to reduce their reliance on chemical fertilizers and pesticides.",
    objectives: [
      "Promote sustainable agricultural practices through biological inputs",
      "Enhance farm productivity using eco-friendly farming methods",
      "Support the local farming community in Hingoli and surrounding regions",
      "Reduce dependency on chemical fertilizers and pesticides",
      "Contribute to a more sustainable and environmentally conscious agricultural ecosystem"
    ],
    methodology: "These biological inputs are produced using high-quality standards and distributed to farmers, empowering them to adopt eco-friendly farming practices. The laboratory specializes in producing four main biological inputs: Trichoderma for disease control and soil health, Vermi Compost for organic fertilization, Metarhizium for natural pest control, and Azotobacter for nitrogen fixation and soil fertility enhancement.",
    impact: "By providing access to biological inputs, SVST's laboratory is contributing to a more sustainable and environmentally conscious agricultural ecosystem in the region. This initiative is part of SVST's commitment to promoting sustainable agricultural practices, enhancing farm productivity, and supporting the local farming community in Hingoli and surrounding regions through environmentally responsible farming solutions."
  }
};

export function BiologicalInputClient() {
  return <ActivityTemplate {...activityData} />;
}