"use client";

import { EventTemplate } from "@/components/sections/event-template";

export default function RepublicDayClient() {
  const republicDayData = {
    title: "Republic Day Celebration",
    subtitle: "76th Republic Day of India",
    description: "Celebrating India's 76th Republic Day with great enthusiasm, patriotism, and commitment to the nation's progress, honoring the spirit of the Indian Constitution and freedom fighters' sacrifices.",
    mainImage: "/images/Events/RepublicDay/hero-image.jpg",
    eventDate: "January 26, 2025",
    location: "SVST Campus, Hingoli",
    duration: "Full Day Celebration",
    participants: "200+ Community Members",
    category: "National Celebration",
    
    features: [
      {
        icon: "Flag",
        title: "Flag Hoisting Ceremony",
        description: "Early morning National Flag hoisting by Trust's President followed by National Anthem sung with pride and patriotism."
      },
      {
        icon: "Mic",
        title: "Motivational Speeches",
        description: "Inspiring speeches by Trust Secretary emphasizing democracy, equality, and unity values enshrined in Indian Constitution."
      },
      {
        icon: "Music",
        title: "Cultural Performances",
        description: "Patriotic songs, freedom struggle skits, and group dances by trainees symbolizing India's diversity and unity."
      },
      {
        icon: "TreePine",
        title: "Tree Plantation Drive",
        description: "Environmental sustainability initiative marking the occasion with commitment towards nation-building and ecological responsibility."
      }
    ],

    stats: [
      {
        label: "Republic Day",
        value: "76th",
        icon: "Flag"
      },
      {
        label: "Participants",
        value: "200+",
        icon: "Users"
      },
      {
        label: "Cultural Items",
        value: "8+",
        icon: "Music"
      },
      {
        label: "Trees Planted",
        value: "50+",
        icon: "TreePine"
      }
    ],

    gallery: [
      {
        src: "/images/Events/RepublicDay/hero-image.jpg",
        alt: "Republic Day Flag Hoisting Ceremony",
        caption: "Trust's President hoisting the National Flag during 76th Republic Day celebration at SVST campus"
      },
      {
        src: "/images/Events/RepublicDay/WhatsApp Image 2025-09-12 at 12.34.43 PM.jpeg", 
        alt: "Cultural Performances and Community Gathering",
        caption: "Trainees and community members participating in patriotic songs, dances, and Republic Day celebration activities at SVST campus"
      }
    ],

    highlights: [
      {
        title: "Constitutional Values Focus",
        description: "Emphasized democracy, equality, and unity principles enshrined in Indian Constitution, inspiring youth to participate in nation-building."
      },
      {
        title: "Youth Engagement Initiative",
        description: "Interactive sessions where trainees shared thoughts on Republic Day importance, dreams for India, and their transformative role in society."
      },
      {
        title: "Cultural Diversity Showcase",
        description: "Performances including patriotic songs, freedom struggle skits, and group dances symbolizing India's rich diversity and unity."
      },
      {
        title: "Environmental Responsibility",
        description: "Tree plantation drive marking the occasion, reinforcing commitment towards environmental sustainability alongside nation-building."
      }
    ],

    content: {
      overview: "Swami Vivekanand Seva Trust, Hingoli, celebrated India's 76th Republic Day on January 26, 2025, with great enthusiasm and patriotic fervor. The event took place at the Trust's campus in Nimbala Makta, MIDC, MAVIM Ghar, Hingoli, bringing together staff, trainees, and community members to honor the spirit of the Indian Constitution and pay tribute to the sacrifices of freedom fighters. This celebration served as more than just a ceremonial event – it was an opportunity to instill civic responsibility, promote democratic values, and inspire the youth to actively contribute to nation-building through skill development, education, and social service.",

      objectives: [
        "Honor the spirit of the Indian Constitution and democratic values of equality, liberty, and fraternity",
        "Pay tribute to freedom fighters and their sacrifices for India's independence and constitutional framework",
        "Instill civic responsibility and patriotic values among youth participating in skill development programs",
        "Promote national unity while celebrating India's rich cultural diversity through performances and activities",
        "Inspire trainees and community members to actively participate in nation-building efforts through their skills",
        "Reinforce environmental responsibility alongside patriotic duties through sustainable development initiatives",
        "Create awareness about constitutional rights and duties among rural communities and skill development participants",
        "Foster a sense of pride in Indian heritage while encouraging progressive thinking for the country's future"
      ],

      activities: [
        "National Flag Hoisting Ceremony",
        "National Anthem Singing",
        "Motivational Constitutional Speeches", 
        "Patriotic Song Performances",
        "Freedom Struggle Skits",
        "Traditional Group Dances",
        "Interactive Youth Sessions",
        "Tree Plantation Drive",
        "Constitutional Values Discussion",
        "Nation-Building Commitment Pledge",
        "Community Unity Activities",
        "Environmental Awareness Program"
      ],

      impact: "The 76th Republic Day celebration at Swami Vivekanand Seva Trust created a lasting impact on over 200 participants, successfully instilling civic responsibility and patriotic values among youth. The event reinforced democratic principles and constitutional values, inspiring trainees to view their skill development as contributions to nation-building. The cultural performances celebrated India's diversity while promoting unity, and the interactive sessions empowered youth to articulate their dreams for India's future. The tree plantation drive demonstrated environmental consciousness alongside patriotic duty, planting 50+ saplings for sustainable development. Most importantly, the celebration transformed abstract concepts of democracy and constitutional values into tangible commitments, with participants pledging to use their skills for societal transformation. The event strengthened community bonds while fostering national pride, creating ambassadors of democratic values who will carry these principles into their professional and personal lives, ultimately contributing to a stronger, more unified India."
    }
  };

  return <EventTemplate {...republicDayData} />;
}