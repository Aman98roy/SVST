import { Metadata } from "next";
import { VasundharaClient } from "./vasundhara-client";

export const metadata: Metadata = {
  title: "Vasundhara Soil & Water Testing Laboratory",
  description:
    "Comprehensive soil and water testing services for farmers to optimize agricultural productivity.",
};

export default function VasundharaPage() {
  return <VasundharaClient />;
}
