"use client";

import { EventPageContent } from "./event-page-content";

const republicDayEventHighlights = [
  {
    icon: "Flag",
    title: "Flag Hoisting & National Anthem",
    description:
      "The celebration began early in the morning with the hoisting of the National Flag by the Trust's President, followed by the singing of the National Anthem. The atmosphere was filled with pride, patriotism, and a sense of responsibility towards building a stronger nation.",
    color: "from-orange-500/20 to-red-500/20",
    iconColor: "text-orange-500",
  },
  {
    icon: "Mic",
    title: "Motivational Speech",
    description:
      "A motivational speech was delivered by the Trust Secretary, emphasizing the values of democracy, equality, and unity as enshrined in the Indian Constitution. The message resonated with everyone present, inspiring the youth to actively participate in nation-building efforts.",
    color: "from-blue-500/20 to-cyan-500/20",
    iconColor: "text-blue-500",
  },
  {
    icon: "Music",
    title: "Cultural Performances",
    description:
      "Trainees from various skill development programs conducted a series of cultural performances, including patriotic songs, skits highlighting India's freedom struggle, and group dances. These performances symbolized the diversity and unity of India.",
    color: "from-purple-500/20 to-pink-500/20",
    iconColor: "text-purple-500",
  },
  {
    icon: "MessageCircle",
    title: "Interactive Session",
    description:
      "An interactive session was organized where trainees shared their thoughts on the importance of the Republic Day, their dreams for India, and the role of youth in transforming society.",
    color: "from-green-500/20 to-emerald-500/20",
    iconColor: "text-green-500",
  },
  {
    icon: "TreePine",
    title: "Tree Plantation Drive",
    description:
      "The Trust also organized a tree plantation drive to mark the occasion, reinforcing the commitment towards environmental sustainability along with nation-building.",
    color: "from-teal-500/20 to-cyan-500/20",
    iconColor: "text-teal-500",
  },
];

const republicDayImages: string[] = []; // Add image paths when available

export function RepublicDayContent() {
  return (
    <EventPageContent
      title="REPUBLIC DAY"
      subtitle="🇮🇳 76th Republic Day Celebration"
      organization="Swami Vivekanand Seva Trust, Hingoli"
      date="26th January 2025"
      venue="SVST Campus, Hingoli"
      description="Swami Vivekanand Seva Trust, Hingoli, celebrated the 76th Republic Day of India with great enthusiasm, patriotism, and commitment to the nation's progress on 26th January 2025. The event took place at the Trust's campus, located in Nimbala Makta, MIDC, MAVIM Ghar, Hingoli, where staff, trainees, and community members gathered to honor the spirit of the Indian Constitution and the sacrifices of freedom fighters."
      eventHighlights={republicDayEventHighlights}
      images={republicDayImages}
      impactTitle="Impact of the Celebration"
      impactDescription="The Republic Day celebration at Swami Vivekanand Seva Trust was not only a display of patriotism but also an opportunity to instill civic responsibility among the youth. It reinforced the message that the true spirit of democracy is realized when every citizen contributes to the country's progress, especially through skill development, education, and social service."
      dateIconColor="orange"
      venueIconColor="green"
    />
  );
}

