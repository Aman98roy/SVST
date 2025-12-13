import { Metadata } from "next";
import { BiologicalInputClient } from "./biological-input-client";

export const metadata: Metadata = {
  title: "Biological Input Laboratory",
  description:
    "Research and development of organic farming inputs and biofertilizers.",
};

export default function BiologicalInputPage() {
  return <BiologicalInputClient />;
}
