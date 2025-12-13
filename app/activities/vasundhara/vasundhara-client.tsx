"use client";

import { ActivityTemplate } from "@/components/sections/activity-template";
import { Beaker, Microscope, FileText, Users, Award, Target, Clock, MapPin } from "lucide-react";

const activityData = {
  title: "Vasundhara Soil & Water Testing Laboratory",
  subtitle: "Scientific Solutions for Sustainable Agriculture",
  description: "Established in 2017 and sanctioned by the Joint Director Agriculture, Latur, this laboratory provides accurate soil and water testing services, enabling farmers to make informed decisions about soil management and optimization.",
  mainImage: "/images/activities/vasundhara/hero-image.JPG",
  category: "Agricultural Research",
  location: "Hingoli, Maharashtra",
  duration: "2017 - Present",
  beneficiaries: "500+ Farmers",
  features: [
    {
      icon: Beaker,
      title: "12-Parameter Soil Testing",
      description: "Comprehensive analysis of soil samples for 12 key parameters including pH, EC, nutrient content, and trace elements to identify deficiencies and imbalances."
    },
    {
      icon: Microscope,
      title: "Borewell Water Testing",
      description: "Advanced water testing for irrigation suitability, contamination levels, and mineral content to ensure optimal water usage in agriculture."
    },
    {
      icon: FileText,
      title: "Customized Recommendations",
      description: "Data-driven recommendations for soil amendments, fertilizer application, and organic composting based on specific test results."
    },
    {
      icon: Users,
      title: "Horticulture Soil Testing",
      description: "Specialized soil testing services for horticulture crops with tailored recommendations for fruit and vegetable cultivation."
    }
  ],
  stats: [
    {
      label: "Farmers Served",
      value: "500+",
      icon: Users
    },
    {
      label: "Tests Conducted",
      value: "2,000+",
      icon: Beaker
    },
    {
      label: "Productivity Increase",
      value: "25%",
      icon: Target
    },
    {
      label: "Years Operating",
      value: "7+",
      icon: Award
    }
  ],
  gallery: [
    {
      src: "/images/activities/vasundhara/01.JPG",
      alt: "Vasundhara Laboratory facility",
      caption: "Vasundhara Soil & Water Testing Laboratory facility"
    },
    {
      src: "/images/activities/vasundhara/02.JPG",
      alt: "Laboratory equipment and testing setup",
      caption: "Advanced laboratory equipment for soil and water testing"
    },
    {
      src: "/images/activities/vasundhara/03.JPG",
      alt: "Soil testing procedures",
      caption: "Comprehensive soil testing for 12 key parameters"
    },
    {
      src: "/images/activities/vasundhara/04.jpg",
      alt: "Water quality analysis",
      caption: "Borewell water testing for irrigation suitability"
    },
    {
      src: "/images/activities/vasundhara/05.JPG",
      alt: "Laboratory analysis in progress",
      caption: "Scientific analysis of soil and water samples"
    },
    {
      src: "/images/activities/vasundhara/06.JPG",
      alt: "Testing equipment and instruments",
      caption: "Modern testing instruments for accurate nutrient analysis"
    },
    {
      src: "/images/activities/vasundhara/07.JPG",
      alt: "Sample preparation area",
      caption: "Sample preparation and quality control procedures"
    },
    {
      src: "/images/activities/vasundhara/08.JPG",
      alt: "Laboratory documentation",
      caption: "Detailed reports and recommendations for farmers"
    }
  ],
  content: {
    overview: "The Vasundhara Soil and Water Testing Laboratory, established by Swami Vivekanand Seva Trust (SVST) in 2017, plays a vital role in promoting sustainable farming practices in Hingoli. Sanctioned by the Joint Director Agriculture, Latur, Maharashtra, this laboratory provides accurate soil and water testing services, enabling farmers to make informed decisions about soil management and optimization.",
    objectives: [
      "Provide accurate soil and water testing services sanctioned by government authorities",
      "Analyze soil samples for 12 key parameters including pH, EC, nutrient content, and trace elements",
      "Identify nutrient deficiencies, soil pH imbalances, and salinity issues in agricultural fields",
      "Deliver customized recommendations for soil amendments, fertilizer application, and organic composting",
      "Support horticulture farming through specialized soil testing and borewell water analysis"
    ],
    methodology: "The laboratory analyzes soil samples for 12 key parameters, including pH, EC, nutrient content, and trace elements, using standardized testing protocols. Each test helps farmers identify nutrient deficiencies, soil pH imbalances, and salinity issues. Based on test results, customized recommendations are provided for soil amendments, fertilizer application, and organic composting. The laboratory also offers specialized horticulture soil testing and borewell water testing services.",
    impact: "By empowering farmers with data-driven insights, the Vasundhara Soil and Water Testing Laboratory contributes to sustainable agriculture, improved crop yields, and enhanced livelihoods for rural communities. Over 500 farmers across Hingoli district have benefited from our testing services, with the laboratory conducting over 2,000 tests since its establishment. The scientific approach has helped farmers optimize their agricultural practices and make informed decisions about crop management."
  }
};

export function VasundharaClient() {
  return <ActivityTemplate {...activityData} />;
}