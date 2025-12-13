import { Metadata } from "next";
import { DonationForm } from "@/components/sections/donation-form";
import { ImpactMeter } from "@/components/sections/impact-meter";

export const metadata: Metadata = {
  title: "Donate",
  description:
    "Support Swami Vivekanand Seva Trust's mission. Make a donation to empower communities, protect the environment, and promote cultural diversity.",
};

export default function DonatePage() {
  return (
    <div>
      <DonationForm />
      <ImpactMeter />
    </div>
  );
}

