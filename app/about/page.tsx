import { Metadata } from "next";
import { Team } from "@/components/sections/team";
import { AboutUsContent } from "@/components/sections/about-us-content";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about Swami Vivekanand Seva Trust, our mission, vision, team, and leadership serving communities since 2010.",
};

export default function AboutPage() {
  return (
    <div>
      <AboutUsContent />
      <Team />
    </div>
  );
}

