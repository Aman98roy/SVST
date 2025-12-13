import { Metadata } from "next";
import { DAESICCIMClient } from "./daesi-ccim-client";

export const metadata: Metadata = {
  title: "DAESI & CCIM Programs",
  description:
    "Diploma in Agricultural Extension Services for Input Dealers (DAESI) and Certificate Course on Insecticides Management (CCIM) programs sponsored by MANAGE, Hyderabad.",
};

export default function DAESICCIMPage() {
  return <DAESICCIMClient />;
}

