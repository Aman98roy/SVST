import { Metadata } from "next";
import { EventPageContent } from "@/components/sections/event-page-content";

export const metadata: Metadata = {
  title: "Workers' Day Celebration | Swami Vivekanand Seva Trust",
  description: "Celebrating the dignity of labor and honoring the contributions of workers in rural development and skill building initiatives.",
};

const workersDayData = {
  title: "Workers' Day Celebration",
  date: "May 1, 2024",
  location: "SVST Training Centers",
  description: "Honoring the dignity of labor and celebrating the contributions of workers in our skill development and rural empowerment programs.",
  content: [
    {
      type: "text" as const,
      content: "May 1st holds special significance at Swami Vivekanand Seva Trust as we celebrate Workers' Day with great enthusiasm, recognizing the invaluable contributions of workers, artisans, and skilled professionals who form the backbone of our rural development initiatives. This day serves as a reminder of the dignity of labor and the importance of skill development in creating sustainable livelihoods."
    },
    {
      type: "heading" as const,
      content: "Honoring Our Skilled Workforce"
    },
    {
      type: "text" as const,
      content: "Our celebration focused on honoring the graduates of our DDU-GKY program who have successfully completed their training in CCTV Supervision and Medical Equipment Assistance. These 280 trained candidates represent the future of skilled labor in rural Maharashtra, bringing modern technical skills to their communities."
    },
    {
      type: "heading" as const,
      content: "Skill Development Showcase"
    },
    {
      type: "text" as const,
      content: "The event featured live demonstrations by our trainees, showcasing their newly acquired skills in various trades. CCTV Supervisor trainees demonstrated installation and maintenance techniques, while Medical Equipment Assistant trainees showed their proficiency in handling basic clinical equipment. This hands-on showcase highlighted the practical impact of our training programs."
    },
    {
      type: "heading" as const,
      content: "Employment Success Stories"
    },
    {
      type: "text" as const,
      content: "We celebrated the success of 199 candidates who have been successfully placed in various organizations across Maharashtra. Their stories of transformation from unemployed rural youth to skilled professionals serve as inspiration for ongoing batches and demonstrate the real impact of quality skill development programs."
    },
    {
      type: "heading" as const,
      content: "Workers' Rights & Empowerment"
    },
    {
      type: "text" as const,
      content: "The celebration included awareness sessions on workers' rights, safety measures, and the importance of continuous skill upgradation. We emphasized the role of skilled workers in India's development and encouraged our trainees to become ambassadors of quality workmanship in their respective fields."
    }
  ],
  images: [
    { src: "/images/Events/WorkersDay/skill-demonstration.jpg", alt: "Trainees demonstrating technical skills learned through DDU-GKY program" },
    { src: "/images/Events/WorkersDay/cctv-training.jpg", alt: "CCTV Supervisor trainees showcasing installation techniques" },
    { src: "/images/Events/WorkersDay/medical-equipment.jpg", alt: "Medical Equipment Assistant trainees with clinical equipment" },
    { src: "/images/Events/WorkersDay/success-stories.jpg", alt: "Successful candidates sharing their employment journey" },
    { src: "/images/Events/WorkersDay/certificate-distribution.jpg", alt: "Certificate distribution to skilled workers" },
    { src: "/images/Events/WorkersDay/group-photo.jpg", alt: "Group photo of workers and trainees celebrating together" }
  ]
};

export default function WorkersDayPage() {
  return <EventPageContent event={workersDayData} />;
}