import { Metadata } from "next";
import { EventPageContent } from "@/components/sections/event-page-content";

export const metadata: Metadata = {
  title: "Cultural Programs | Swami Vivekanand Seva Trust",
  description: "Celebrating Maharashtra's rich cultural heritage through traditional programs, folk arts, and community performances at SVST events.",
};

const culturalProgramData = {
  title: "Cultural Programs & Heritage Celebrations",
  date: "Various Occasions Throughout 2024",
  location: "SVST Campus & Community Centers",
  description: "Vibrant cultural programs celebrating Maharashtra's rich heritage, featuring traditional arts, folk performances, and community participation.",
  content: [
    {
      type: "text" as const,
      content: "Cultural programs form an integral part of Swami Vivekanand Seva Trust's community engagement initiatives. Throughout the year, we organize various cultural events that celebrate Maharashtra's rich heritage while fostering community unity and providing platforms for local artists to showcase their talents. These programs serve as vital links connecting rural communities with their cultural roots."
    },
    {
      type: "heading" as const,
      content: "Traditional Folk Arts & Performances"
    },
    {
      type: "text" as const,
      content: "Our cultural programs feature authentic Maharashtrian folk arts including Lavani, Tamasha, Koli dance, and Dhangari Gaja performances. Local artists and community members participate enthusiastically, preserving these traditional art forms while passing them on to younger generations. These performances are not just entertainment but cultural education that strengthens community identity."
    },
    {
      type: "heading" as const,
      content: "Seasonal & Festival Celebrations"
    },
    {
      type: "text" as const,
      content: "We organize cultural programs during major Maharashtrian festivals like Gudi Padwa, Ganesh Chaturthi, Navratri, and Diwali. Each celebration features region-specific traditions, traditional cooking demonstrations, folk songs, and storytelling sessions that educate participants about the cultural significance of these festivals in rural Maharashtra."
    },
    {
      type: "heading" as const,
      content: "Community Talent Showcase"
    },
    {
      type: "text" as const,
      content: "Our cultural events provide platforms for hidden talents in rural communities. Farmers, artisans, students, and homemakers get opportunities to perform poetry recitations, traditional music, folk dances, and dramatic presentations. Many participants have gone on to represent their villages in district and state-level cultural competitions."
    },
    {
      type: "heading" as const,
      content: "Cultural Education & Workshops"
    },
    {
      type: "text" as const,
      content: "Beyond performances, we conduct cultural education workshops teaching traditional crafts, musical instruments, and dance forms. These workshops are particularly popular among youth who learn about their heritage while developing new skills. Master craftsmen and experienced artists lead these sessions, ensuring authentic knowledge transfer."
    },
    {
      type: "heading" as const,
      content: "Integration with Development Programs"
    },
    {
      type: "text" as const,
      content: "We creatively integrate cultural elements into our development programs. Training program graduations feature cultural performances, awareness campaigns use traditional storytelling methods, and community meetings incorporate folk songs with social messages. This approach makes our development work more engaging and culturally relevant."
    }
  ],
  images: [
    { src: "/images/Events/CulturalProgram/lavani-performance.jpg", alt: "Traditional Lavani dance performance by local artists" },
    { src: "/images/Events/CulturalProgram/folk-music.jpg", alt: "Folk musicians performing traditional Maharashtrian songs" },
    { src: "/images/Events/CulturalProgram/ganesh-celebration.jpg", alt: "Community celebrating Ganesh Chaturthi with cultural programs" },
    { src: "/images/Events/CulturalProgram/youth-participation.jpg", alt: "Young participants in traditional dance competitions" },
    { src: "/images/Events/CulturalProgram/craft-workshop.jpg", alt: "Traditional craft-making workshop for community members" },
    { src: "/images/Events/CulturalProgram/storytelling-session.jpg", alt: "Storytelling session preserving local folklore and traditions" },
    { src: "/images/Events/CulturalProgram/cultural-awards.jpg", alt: "Award ceremony recognizing outstanding cultural contributions" }
  ]
};

export default function CulturalProgramPage() {
  return <EventPageContent event={culturalProgramData} />;
}