import { Metadata } from "next";
import { YogaDayContent } from "@/components/sections/yoga-day-content";

export const metadata: Metadata = {
  title: "International Yoga Day | SVST",
  description:
    "Swami Vivekanand Seva Trust, Hingoli actively organizes International Yoga Day (June 21) every year to promote health, well-being, and the holistic benefits of yoga.",
  keywords: ["Yoga Day", "International Yoga Day", "Yoga", "Health", "Wellness", "SVST", "Hingoli"],
};

export default function YogaDayPage() {
  return (
    <div className="pt-20">
      <YogaDayContent />
    </div>
  );
}

