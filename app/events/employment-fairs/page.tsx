import { Metadata } from "next";
import EmploymentFairsClient from "./employment-fairs-client";

export const metadata: Metadata = {
  title: "Rojgar Melava - Employment Fairs | Swami Vivekanand Seva Trust",
  description: "SVST organizes Rojgar Melava (Employment Fairs) to bridge the gap between job seekers and employers, providing direct employment opportunities for rural youth in Hingoli and neighboring districts.",
  keywords: "employment fairs, rojgar melava, job opportunities, SVST, career development, skill enhancement, unemployment solutions, rural employment",
};

export default function EmploymentFairsPage() {
  return <EmploymentFairsClient />;
}