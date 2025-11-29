import { Metadata } from "next";
import { EventsList } from "@/components/sections/events-list";

export const metadata: Metadata = {
  title: "Events",
  description:
    "View all upcoming and past events organized by Swami Vivekanand Seva Trust including national celebrations, cultural programs, and community events.",
};

export default function EventsPage() {
  return (
    <div className="pt-20">
      <EventsList />
    </div>
  );
}

