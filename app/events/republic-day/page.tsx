import { Metadata } from "next";
import { RepublicDayContent } from "@/components/sections/republic-day-content";

export const metadata: Metadata = {
  title: "Republic Day Celebration | SVST",
  description:
    "Swami Vivekanand Seva Trust, Hingoli, celebrated the 76th Republic Day of India with great enthusiasm, patriotism, and commitment to the nation's progress.",
  keywords: ["Republic Day", "SVST", "Hingoli", "Patriotism", "National Celebration"],
};

export default function RepublicDayPage() {
  return (
    <div>
      <RepublicDayContent />
    </div>
  );
}

