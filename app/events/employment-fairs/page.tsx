import { Metadata } from "next";
import { EventPageContent } from "@/components/sections/event-page-content";

export const metadata: Metadata = {
  title: "Employment Fairs | Swami Vivekanand Seva Trust",
  description: "Connecting skilled rural youth with employment opportunities through organized job fairs and placement drives across Maharashtra.",
};

const employmentFairsData = {
  title: "Employment Fairs & Placement Drives",
  date: "Throughout 2024",
  location: "Multiple Districts - Nanded, Washim, Yavatmal, Jalna",
  description: "Organized employment fairs connecting trained candidates with leading employers, resulting in successful job placements across various sectors.",
  content: [
    {
      type: "text" as const,
      content: "Swami Vivekanand Seva Trust has been instrumental in bridging the gap between skilled rural youth and employment opportunities through strategically organized employment fairs and placement drives. Our comprehensive approach ensures that every trained candidate gets the opportunity to showcase their skills to potential employers and secure meaningful employment."
    },
    {
      type: "heading" as const,
      content: "Multi-District Employment Initiative"
    },
    {
      type: "text" as const,
      content: "Our employment fairs were conducted across four key districts - Nanded, Washim, Yavatmal, and Jalna - reaching out to our 280 trained candidates. These events brought together leading employers from healthcare, security, and technical services sectors who were specifically looking for candidates with the skills our DDU-GKY program provides."
    },
    {
      type: "heading" as const,
      content: "Sector-Wise Placement Opportunities"
    },
    {
      type: "text" as const,
      content: "The employment fairs featured diverse opportunities across multiple sectors. CCTV Supervisor positions were available with security agencies, facilities management companies, and government organizations. Medical Equipment Assistant roles were offered by hospitals, diagnostic centers, and healthcare equipment manufacturers across Maharashtra and neighboring states."
    },
    {
      type: "heading" as const,
      content: "Success Statistics"
    },
    {
      type: "text" as const,
      content: "Our employment fairs achieved a remarkable success rate with 199 out of 280 candidates (71%) securing employment. This includes 52 CCTV Supervisors and 147 Medical Equipment Assistants who found positions with reputable organizations. The fair also facilitated salary negotiations and provided career counseling to help candidates make informed decisions."
    },
    {
      type: "heading" as const,
      content: "Employer Partnership Program"
    },
    {
      type: "text" as const,
      content: "We established partnerships with over 45 employers who recognized the quality of our training programs. These partnerships ensure continuous employment opportunities for future batches and provide feedback for improving our curriculum to meet industry requirements."
    },
    {
      type: "heading" as const,
      content: "Post-Placement Support"
    },
    {
      type: "text" as const,
      content: "Our commitment doesn't end with placement. We provide ongoing support to placed candidates through regular follow-ups, grievance redressal, and career advancement guidance. This comprehensive support system ensures job retention and professional growth of our graduates."
    }
  ],
  images: [
    { src: "/images/Events/EmploymentFairs/job-fair-setup.jpg", alt: "Employment fair setup with multiple employer stalls" },
    { src: "/images/Events/EmploymentFairs/candidate-interviews.jpg", alt: "Candidates participating in job interviews during the fair" },
    { src: "/images/Events/EmploymentFairs/employer-interaction.jpg", alt: "Direct interaction between employers and skilled candidates" },
    { src: "/images/Events/EmploymentFairs/skill-demonstration.jpg", alt: "Live skill demonstrations by candidates to employers" },
    { src: "/images/Events/EmploymentFairs/placement-ceremony.jpg", alt: "Placement ceremony celebrating successful job selections" },
    { src: "/images/Events/EmploymentFairs/district-wise-fair.jpg", alt: "District-wise employment fair in rural Maharashtra" },
    { src: "/images/Events/EmploymentFairs/success-celebration.jpg", alt: "Celebrating successful placements with candidates and employers" }
  ]
};

export default function EmploymentFairsPage() {
  return <EventPageContent event={employmentFairsData} />;
}