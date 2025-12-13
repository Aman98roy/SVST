import { Metadata } from "next";
import { Covid19Client } from "./covid-19-client";

export const metadata: Metadata = {
  title: "Covid-19 Relief Activities",
  description:
    "Our response and relief activities during the COVID-19 pandemic.",
};

export default function Covid19Page() {
  return <Covid19Client />;
}
