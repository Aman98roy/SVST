import { Metadata } from "next";
import { EventPageContent } from "@/components/sections/event-page-content";
import { Users, Award, Heart, Music } from "lucide-react";

export const metadata: Metadata = {
  title: "Employment Fairs | Swami Vivekanand Seva Trust",
  description: "Connecting skilled rural youth with employment opportunities through organized job fairs and placement drives across Maharashtra.",
};



export default function EmploymentFairsPage() {
  return (
    <EventPageContent
      title="Employment Fairs & Job Creation"
      subtitle="Connecting Rural Youth with Employment Opportunities"
      organization="Swami Vivekanand Seva Trust"
      date="Monthly Employment Events"
      venue="District Employment Centers & Rural Areas"
      fullVenueAddress="Hingoli District, Maharashtra"
      description="Comprehensive employment fairs connecting rural youth with job opportunities, providing career guidance, skill assessment, and direct recruitment by various companies and organizations."
      eventHighlights={[
        {
          icon: Users,
          title: "Direct Recruitment",
          description: "On-spot job offers from participating companies with immediate employment opportunities for qualified candidates.",
          color: "blue",
          iconColor: "blue"
        },
        {
          icon: Award,
          title: "Skill Assessment",
          description: "Professional evaluation of candidate skills with certification and recommendations for career development.",
          color: "green",
          iconColor: "green"
        },
        {
          icon: Heart,
          title: "Career Guidance",
          description: "Expert counseling sessions helping youth identify suitable career paths and development opportunities.",
          color: "orange",
          iconColor: "orange"
        },
        {
          icon: Music,
          title: "Industry Partnerships",
          description: "Strong network of employers from various sectors offering diverse employment opportunities to rural youth.",
          color: "purple",
          iconColor: "purple"
        }
      ]}
      images={[
        "/images/Events/EmploymentFairs/job-interview.jpg",
        "/images/Events/EmploymentFairs/skill-assessment.jpg", 
        "/images/Events/EmploymentFairs/company-booths.jpg",
        "/images/Events/EmploymentFairs/career-counseling.jpg",
        "/images/Events/EmploymentFairs/document-verification.jpg",
        "/images/Events/EmploymentFairs/group-discussions.jpg",
        "/images/Events/EmploymentFairs/success-stories.jpg"
      ]}
      impactTitle="Employment Generation Success"
      impactDescription="Our employment fairs have successfully connected over 1,500 rural youth with stable employment opportunities across various sectors. The program has achieved a 75% placement rate with participants securing positions in manufacturing, services, agriculture, and technology sectors, significantly improving their socio-economic status and contributing to rural development."
      dateIconColor="blue"
      venueIconColor="green"
    />
  );
}