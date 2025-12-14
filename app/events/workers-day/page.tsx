import { Metadata } from "next";
import WorkersDayClient from "./workers-day-client";

export const metadata: Metadata = {
  title: "International Workers' Day Celebration | Swami Vivekanand Seva Trust",
  description: "Celebrating May Day with great respect for workers' contributions, focusing on empowerment of skilled youth and laborers at SVST Hingoli.",
};

export default function WorkersDayPage() {
  return <WorkersDayClient />;
}