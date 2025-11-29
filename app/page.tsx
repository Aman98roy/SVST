import { Hero } from "@/components/sections/hero";
import { Mission } from "@/components/sections/mission";
import { Services } from "@/components/sections/services";
import { FounderMessage } from "@/components/sections/founder-message";
import { Events } from "@/components/sections/events";
import { Testimonials } from "@/components/sections/testimonials";
import { DonationCTA } from "@/components/sections/donation-cta";
import { ContactSection } from "@/components/sections/contact-section";

export default function Home() {
  return (
    <>
      <Hero />
      <Mission />
      <Services />
      <FounderMessage />
      <Events />
      <Testimonials />
      <DonationCTA />
      <ContactSection />
    </>
  );
}

