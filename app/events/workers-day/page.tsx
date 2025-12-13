import { Metadata } from "next";
import { EventPageContent } from "@/components/sections/event-page-content";

export const metadata: Metadata = {
  title: "Workers' Day Celebration | Swami Vivekanand Seva Trust",
  description: "Celebrating the dignity of labor and honoring the contributions of workers in rural development and skill building initiatives.",
};

export default function WorkersDayPage() {
  return (
    <EventPageContent
      title="Workers' Day Celebration"
      subtitle="Honoring Dignity of Labor"
      organization="Swami Vivekanand Seva Trust"
      date="May 1, 2024"
      venue="SVST Training Centers"
      fullVenueAddress="Multiple Training Centers, Hingoli District, Maharashtra"
      description="Celebrating the invaluable contributions of workers, artisans, and skilled professionals while honoring DDU-GKY program graduates and their successful employment journeys."
      eventHighlights={[
        {
          icon: "Users",
          title: "Skilled Workforce Honor",
          description: "Celebrating 280 DDU-GKY graduates trained in CCTV Supervision and Medical Equipment Assistance bringing modern skills to rural communities.",
          color: "blue",
          iconColor: "blue"
        },
        {
          icon: "Wrench",
          title: "Skill Demonstrations",
          description: "Live showcases by trainees demonstrating CCTV installation, maintenance techniques, and clinical equipment proficiency.",
          color: "orange",
          iconColor: "orange"
        },
        {
          icon: "Award",
          title: "Success Stories",
          description: "Celebrating 199 successfully placed candidates who transformed from unemployed rural youth to skilled professionals.",
          color: "green",
          iconColor: "green"
        },
        {
          icon: "Heart",
          title: "Rights & Empowerment",
          description: "Awareness sessions on workers' rights, safety measures, and continuous skill upgradation for professional growth.",
          color: "purple",
          iconColor: "purple"
        }
      ]}
      images={[
        "/images/Events/WorkersDay/skill-demonstration.jpg",
        "/images/Events/WorkersDay/cctv-training.jpg", 
        "/images/Events/WorkersDay/medical-equipment.jpg",
        "/images/Events/WorkersDay/success-stories.jpg",
        "/images/Events/WorkersDay/certificate-distribution.jpg",
        "/images/Events/WorkersDay/group-photo.jpg"
      ]}
      impactTitle="Empowering Rural Workforce"
      impactDescription="Our Workers' Day celebration honored skilled professionals while highlighting the success of our DDU-GKY program with 71% placement rate. The event inspired ongoing batches, promoted workers' rights awareness, and demonstrated the transformative power of quality skill development in rural empowerment."
      dateIconColor="blue"
      venueIconColor="orange"
    />
  );
}