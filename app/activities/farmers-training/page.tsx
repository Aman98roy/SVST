import { Metadata } from "next";
import { FarmersTrainingClient } from "./farmers-training-client";

export const metadata: Metadata = {
  title: "District Level Farmers Training",
  description:
    "Empowering farmers with modern agricultural techniques and sustainable farming practices.",
};

export default function FarmersTrainingPage() {
  return <FarmersTrainingClient />;
}


