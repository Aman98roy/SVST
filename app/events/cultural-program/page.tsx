import { Metadata } from "next";
import { EventPageContent } from "@/components/sections/event-page-content";
import { Music, Users, Award, Heart } from "lucide-react";

export const metadata: Metadata = {
  title: "Cultural Programs | Swami Vivekanand Seva Trust",
  description: "Celebrating Maharashtra's rich cultural heritage through traditional programs, folk arts, and community performances at SVST events.",
};

export default function CulturalProgramPage() {
  return (
    <EventPageContent
      title="Cultural Programs & Heritage Celebrations"
      subtitle="Preserving Maharashtra's Rich Cultural Legacy"
      organization="Swami Vivekanand Seva Trust"
      date="Year-round Cultural Events"
      venue="SVST Campus & Community Centers"
      fullVenueAddress="Hingoli District, Maharashtra"
      description="Vibrant cultural programs celebrating Maharashtra's rich heritage, featuring traditional arts, folk performances, and community participation that preserves our cultural legacy for future generations."
      eventHighlights={[
        {
          icon: Music,
          title: "Traditional Folk Arts",
          description: "Authentic Maharashtrian performances including Lavani, Tamasha, Koli dance, and Dhangari Gaja by local artists.",
          color: "orange",
          iconColor: "orange"
        },
        {
          icon: Users,
          title: "Community Talent Showcase",
          description: "Platforms for rural talents to showcase poetry, music, dance, and dramatic presentations at village and district levels.",
          color: "blue",
          iconColor: "blue"
        },
        {
          icon: Award,
          title: "Festival Celebrations",
          description: "Cultural programs during Gudi Padwa, Ganesh Chaturthi, Navratri with traditional cooking and storytelling.",
          color: "purple",
          iconColor: "purple"
        },
        {
          icon: Heart,
          title: "Cultural Education",
          description: "Workshops teaching traditional crafts, instruments, and dance forms led by master craftsmen and experienced artists.",
          color: "green",
          iconColor: "green"
        }
      ]}
      images={[
        "/images/Events/CulturalProgram/lavani-performance.jpg",
        "/images/Events/CulturalProgram/folk-music.jpg", 
        "/images/Events/CulturalProgram/ganesh-celebration.jpg",
        "/images/Events/CulturalProgram/youth-participation.jpg",
        "/images/Events/CulturalProgram/craft-workshop.jpg",
        "/images/Events/CulturalProgram/storytelling-session.jpg",
        "/images/Events/CulturalProgram/cultural-awards.jpg"
      ]}
      impactTitle="Cultural Heritage Preservation"
      impactDescription="Our cultural programs have successfully preserved traditional art forms, provided platforms for rural talent, and strengthened community identity through authentic Maharashtra heritage celebrations. Local artists have gained recognition at district and state levels, while younger generations learn their cultural roots through engaging workshops and performances."
      dateIconColor="purple"
      venueIconColor="orange"
    />
  );
}