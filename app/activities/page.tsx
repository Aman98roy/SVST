import { Metadata } from "next";
import { ActivitiesList } from "@/components/sections/activities-list";

export const metadata: Metadata = {
  title: "Activities",
  description:
    "Explore all our activities including soil testing, farmer training, biological input laboratory, and more.",
};

export default function ActivitiesPage() {
  return (
    <div className="pt-20">
      <ActivitiesList />
    </div>
  );
}

