import { Metadata } from "next";
import { JoinUsSection } from "@/components/sections/join-us";

export const metadata: Metadata = {
  title: "Join Us",
  description:
    "Join Swami Vivekanand Seva Trust as a volunteer or team member. Be part of our mission to empower communities.",
};

export default function JoinPage() {
  return (
    <div className="pt-20">
      <JoinUsSection />
    </div>
  );
}

