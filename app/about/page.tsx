import { Metadata } from "next";
import { FounderMessage } from "@/components/sections/founder-message";
import { Team } from "@/components/sections/team";
import { History } from "@/components/sections/history";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about Swami Vivekanand Seva Trust, our mission, vision, team, and history of serving communities since 2010.",
};

export default function AboutPage() {
  return (
    <div className="pt-20">
      <History />
      <FounderMessage />
      <Team />
    </div>
  );
}

