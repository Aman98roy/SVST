import { Metadata } from "next";
import IndependenceDayClient from "./independence-day-client";

export const metadata: Metadata = {
  title: "77th Independence Day Celebration | Swami Vivekanand Seva Trust",
  description: "Join us in celebrating India's 77th Independence Day with patriotic fervor, cultural programs, and community participation at SVST.",
};

export default function IndependenceDayPage() {
  return <IndependenceDayClient />;
}