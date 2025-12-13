import { Metadata } from "next";
import YogaDayClient from "./yoga-day-client";

export const metadata: Metadata = {
  title: "International Yoga Day | SVST - Celebrating Wellness & Inner Peace",
  description: "Join SVST's International Yoga Day celebration promoting physical and mental wellness through yoga practice, meditation, and community wellness activities across rural villages.",
  keywords: ["international yoga day", "wellness", "mindfulness", "yoga practice", "community health", "SVST", "physical fitness", "mental health", "meditation", "rural wellness"],
  openGraph: {
    title: "International Yoga Day | SVST - Celebrating Wellness & Inner Peace",
    description: "Community-wide yoga celebration promoting health, wellness, and spiritual harmony with 500+ participants across 15+ villages.",
    images: ["/images/Events/YogaDay/main.jpeg"],
  },
};

export default function YogaDayPage() {
  return <YogaDayClient />;
}

