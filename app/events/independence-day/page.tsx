import { Metadata } from "next";
import { EventPageContent } from "@/components/sections/event-page-content";

export const metadata: Metadata = {
  title: "Independence Day Celebration | Swami Vivekanand Seva Trust",
  description: "Join us in celebrating India's Independence Day with patriotic fervor, cultural programs, and community participation at SVST.",
};

const independenceDayData = {
  title: "Independence Day Celebration",
  date: "August 15, 2024",
  location: "SVST Campus, Sukli",
  description: "A grand celebration of India's Independence Day featuring flag hoisting, cultural performances, and community participation.",
  content: [
    {
      type: "text" as const,
      content: "Every year on August 15th, Swami Vivekanand Seva Trust organizes a magnificent Independence Day celebration that brings together the entire community in a display of patriotic unity and cultural pride. This year's celebration was particularly special, marking not just our nation's independence but also highlighting the progress our trust has made in empowering rural communities."
    },
    {
      type: "text" as const,
      content: "The celebration commenced at dawn with the ceremonial flag hoisting by our esteemed President, Purushottam Kute, followed by the singing of the national anthem that resonated across the campus. The event saw participation from local government officials, community leaders, students, and families from surrounding villages."
    },
    {
      type: "heading" as const,
      content: "Cultural Programs & Performances"
    },
    {
      type: "text" as const,
      content: "The day featured vibrant cultural performances by local artists and students, including traditional dances, patriotic songs, and dramatic presentations depicting India's struggle for independence. Special performances highlighted the contributions of Maharashtra's freedom fighters and the role of rural communities in nation-building."
    },
    {
      type: "heading" as const,
      content: "Community Participation"
    },
    {
      type: "text" as const,
      content: "Over 500 community members participated in the celebration, including beneficiaries of our DDU-GKY training programs, farmers from our agricultural initiatives, and local youth. The event served as a platform to showcase the skills and talents developed through our various training programs."
    },
    {
      type: "heading" as const,
      content: "Recognition & Awards"
    },
    {
      type: "text" as const,
      content: "During the celebration, we honored outstanding community members who have made significant contributions to rural development. Special recognition was given to successful graduates of our skill development programs who have established their own enterprises and are now contributing to local economic growth."
    }
  ],
  images: [
    { src: "/images/Events/IndependenceDay/flag-hoisting.jpg", alt: "Flag hoisting ceremony at SVST campus" },
    { src: "/images/Events/IndependenceDay/cultural-program.jpg", alt: "Cultural performances by local artists" },
    { src: "/images/Events/IndependenceDay/community-gathering.jpg", alt: "Community members participating in celebration" },
    { src: "/images/Events/IndependenceDay/awards-ceremony.jpg", alt: "Recognition ceremony for outstanding community members" },
    { src: "/images/Events/IndependenceDay/youth-participation.jpg", alt: "Youth actively participating in independence day activities" },
    { src: "/images/Events/IndependenceDay/traditional-dance.jpg", alt: "Traditional dance performance showcasing Maharashtra culture" }
  ]
};

export default function IndependenceDayPage() {
  return <EventPageContent event={independenceDayData} />;
}