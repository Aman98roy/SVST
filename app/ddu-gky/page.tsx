import { Metadata } from "next";
import { DDUGKYInfo } from "@/components/sections/ddu-gky-info";

export const metadata: Metadata = {
  title: "DDU-GKY",
  description:
    "Deen Dayal Upadhyaya Grameen Kaushalya Yojana - Skill development and employment program for rural youth.",
};

export default function DDUGKYPage() {
  return (
    <div className="pt-16">
      <DDUGKYInfo />
    </div>
  );
}

