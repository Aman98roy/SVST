"use client";

import { ActivityTemplate } from "@/components/sections/activity-template";
import { Shield, Heart, Package, Users, Stethoscope, Utensils, Target, Award } from "lucide-react";

const activityData = {
  title: "Covid-19 Relief Activities",
  subtitle: "Standing Together in Crisis - Supporting Communities During the Pandemic",
  description: "The year 2019 was devastating for everyone throughout the world, the outbreak of Covid19 snatched millions of smiles, especially the people who were already struggling to even go through each day. We initiated effective measures where our government was unable to, distributing masks, sanitizers, arranging hospital beds and ambulance services for emergency cases.",
  mainImage: "/images/activities/covid-19/hero-image.jpeg",
  category: "Emergency Relief",
  location: "Rural and Urban Sectors",
  duration: "2020 - Ongoing",
  beneficiaries: "Thousands of Families",
  features: [
    {
      icon: Shield,
      title: "Mask Distribution Program",
      description: "Organized special mask distribution program providing hygienic masks to localities and explaining their significance for virus control."
    },
    {
      icon: Package,
      title: "Sanitizer Distribution Program",
      description: "Distributed thousands of sanitizers in different rural and urban sectors, helping families below poverty line who couldn't afford sanitizers."
    },
    {
      icon: Utensils,
      title: "Food Distribution Program",
      description: "Distributed dry rations to different villages helping families prepare survival meals during economic downfall and lockdown situations."
    },
    {
      icon: Stethoscope,
      title: "Healthcare & Emergency Services",
      description: "Arranged hospital beds, ambulance services for emergency cases, and distributed necessary medicines in remote villages."
    }
  ],
  stats: [
    {
      label: "Families Helped",
      value: "Innumerable",
      icon: Users
    },
    {
      label: "Masks Distributed",
      value: "Thousands",
      icon: Shield
    },
    {
      label: "Sanitizers Given",
      value: "1000+",
      icon: Stethoscope
    },
    {
      label: "Awareness Participants",
      value: "3,000+",
      icon: Shield
    }
  ],
  gallery: [
    {
      src: "/images/activities/covid-19/WhatsApp-Image-2023-04-13-at-9.57.26-AM.jpeg",
      alt: "COVID-19 relief distribution activities",
      caption: "SVST team distributing masks, sanitizers and essential supplies during COVID-19 pandemic"
    }
  ],
  content: {
    overview: "The year 2019 was devastating for everyone throughout the world, the outbreak of Covid19 snatched millions of smiles, especially the people who were already struggling to even go through each day. Uncountable deaths and sufferings, tears we can't ever compensate for with anything, to what they lost are irreversible and heartbreaking. Keeping all these in mind, we initiated effective measures where our government was unable to, and so we distributed masks, and sanitizers, and arranged hospital beds and ambulance services for emergency cases.",
    objectives: [
      "Distribute masks and sanitizers to control the proliferated virus",
      "Arrange hospital beds and ambulance services for emergency cases",
      "Distribute dry rations and necessary medicines in different remote villages",
      "Organize awareness camps to educate citizens about the virus",
      "Generate employment opportunities and discard rumors about the outbreak"
    ],
    methodology: "We organized special programs for mask distribution where we gave hygienic masks to the localities and explained their significance. Our Sanitizer Distribution Program helped thousands of families below the poverty line who couldn't afford sanitizers. We distributed dry rations to different villages so families were able to prepare their survival meals during the economic downfall.",
    impact: "With our best possible efforts, we were successful in helping innumerable families. We distributed more than thousands of sanitizers in different rural and urban sectors. Our food distribution program helped families during lockdown situations when people died of hunger other than the infection. We organized awareness camps to educate our citizens and generate employment opportunities.",
    programs: {
      maskDistribution: {
        title: "Mask Distribution Program",
        description: "The covid19 outbreak made it mandatory to wear masks and maintain social distancing to control the proliferated virus. Due to negligence and irresponsible attitude, the consequences escalated to an extent that the whole country got affected. We couldn't ignore the facts and took the initiative to help as many people as possible. We organized a special mask distribution program, where we gave hygienic masks to the localities and explained the significance of it."
      },
      sanitizerDistribution: {
        title: "Sanitizer Distribution Program",
        description: "As we all know that coronavirus is transmittable and it spreads really fast even with the slightest touch of an infected person so just putting on a mask or maintaining distance isn't enough, we must sanitize our hands and the commodities we buy, from time to time. In a country like India, where unemployment, financial debts, and illiteracy have touched the skies, there are numerous families, below the poverty line, who can't afford to have sanitizer. To help such people we started our own Sanitizer Distribution Program. We distributed more than thousands of sanitizers in different rural and urban sectors."
      },
      foodDistribution: {
        title: "Food Distribution Program",
        description: "The economic downfall due to lockdown situations was clearly visible and we can't deny the suffering. People died of hunger other than the infection and it affected us unimaginably, the tears, and the outcries were undeniably real and it is heartbreaking to even imagine what they would have felt. With heavy hearts, our team members couldn't resist offering help to those poor innocents. We distributed dry rations to different villages so they were able to at least prepare their survival meal."
      }
    }
  }
};

export function Covid19Client() {
  return <ActivityTemplate {...activityData} />;
}