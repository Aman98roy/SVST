"use client";

import { EventPageContent } from "./event-page-content";

const yogaEventHighlights = [
  {
    icon: "Users",
    title: "Mass Yoga Session",
    description: "Led by experienced yoga instructors",
    color: "from-blue-500/20 to-cyan-500/20",
    iconColor: "text-blue-500",
  },
  {
    icon: "BookOpen",
    title: "Awareness Speech",
    description: "On the importance of Yoga in daily life, focusing on mental and physical well-being",
    color: "from-green-500/20 to-emerald-500/20",
    iconColor: "text-green-500",
  },
  {
    icon: "Sparkles",
    title: "Demonstration of Asanas",
    description: "Covering key yoga techniques suitable for all age groups",
    color: "from-purple-500/20 to-pink-500/20",
    iconColor: "text-purple-500",
  },
  {
    icon: "Heart",
    title: "Meditation & Pranayama",
    description: "Breathing exercises to promote mental peace and stress reduction",
    color: "from-red-500/20 to-rose-500/20",
    iconColor: "text-red-500",
  },
  {
    icon: "Leaf",
    title: "Educational Materials",
    description: "Distribution of educational pamphlets about the benefits of regular yoga practice",
    color: "from-yellow-500/20 to-orange-500/20",
    iconColor: "text-yellow-500",
  },
  {
    icon: "Users",
    title: "Community Participation",
    description: "Participation of local community members, youth, women, and senior citizens",
    color: "from-teal-500/20 to-cyan-500/20",
    iconColor: "text-teal-500",
  },
];

const yogaImages = [
  "/images/Events/YogaDay/main.jpeg",
  "/images/Events/YogaDay/1.jpeg",
];

export function YogaDayContent() {
  return (
    <EventPageContent
      title="YOGA DAY"
      subtitle="🌿 International Yoga Day"
      organization="Swami Vivekanand Seva Trust, Hingoli"
      date="June 21"
      venue="SVST Training Center, Hingoli"
      fullVenueAddress="Swami Vivekanand Seva Trust Training Center,\nNimbala Makta, MIDC, MAVIM Ghar,\nHingoli, Maharashtra"
      description="Swami Vivekanand Seva Trust, Hingoli actively organizes International Yoga Day (June 21) every year to promote health, well-being, and the holistic benefits of yoga, in line with the vision of Swami Vivekananda who emphasized the unity of body, mind, and soul."
      eventHighlights={yogaEventHighlights}
      images={yogaImages}
      dateIconColor="blue"
      venueIconColor="green"
    />
  );
}
