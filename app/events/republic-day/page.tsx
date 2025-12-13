import { Metadata } from "next";
import RepublicDayClient from "./republic-day-client";

export const metadata: Metadata = {
  title: "Republic Day Celebration | SVST - 76th Republic Day of India",
  description: "Join SVST's 76th Republic Day celebration honoring India's Constitution with flag hoisting, cultural performances, motivational speeches, and tree plantation drive at Hingoli campus.",
  keywords: ["republic day", "76th republic day", "constitution day", "patriotic celebration", "SVST", "national unity", "flag hoisting", "cultural programs", "Hingoli"],
  openGraph: {
    title: "Republic Day Celebration | SVST - 76th Republic Day of India",
    description: "Celebrating India's 76th Republic Day with enthusiasm, patriotism, and commitment featuring cultural performances, constitutional values, and community participation.",
    images: ["/images/Events/RepublicDay/hero-image.jpg"],
  },
};

export default function RepublicDayPage() {
  return <RepublicDayClient />;
}

