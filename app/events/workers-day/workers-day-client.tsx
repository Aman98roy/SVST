"use client";

import { EventTemplate } from "@/components/sections/event-template";

export default function WorkersDayClient() {
  const workersDayData = {
    title: "International Workers' Day",
    subtitle: "Honoring the Dignity of Labor",
    description: "Swami Vivekanand Seva Trust, Hingoli, celebrated May Day (International Workers' Day) on 1st May 2024 with great respect and acknowledgment of the contributions of workers, especially focusing on the empowerment of skilled youth and laborers.",
    mainImage: "/images/Events/WorkersDay/hero-image.jpg",
    eventDate: "May 1, 2024",
    location: "SVST Campus, Narsi Namdev, Hingoli",
    duration: "Full Day Celebration", 
    participants: "200+ Workers & Trainees",
    category: "Labor Rights & Empowerment",
    
    features: [
      {
        icon: "Mic",
        title: "Welcome Speech & Workers' Rights",
        description: "Trust Secretary's inspiring speech highlighting the importance of workers in economic growth, emphasizing dignity of labor and worker rights."
      },
      {
        icon: "Users", 
        title: "Skill Development Focus",
        description: "Special recognition of unskilled and semi-skilled workers with emphasis on training and education for enhancing livelihood opportunities."
      },
      {
        icon: "Music",
        title: "Motivational Performances",
        description: "Trainees conducted skits and role-plays depicting real-life stories of workers overcoming hardships through skill development and entrepreneurship."
      },
      {
        icon: "Heart",
        title: "Community Interaction",
        description: "Interactive session where local workers and trainees shared experiences, challenges, and dreams, strengthening Trust-community connection."
      }
    ],

    stats: [
      {
        label: "Workers' Day",
        value: "May 1st",
        icon: "Calendar"
      },
      {
        label: "Participants", 
        value: "200+",
        icon: "Users"
      },
      {
        label: "Certificates",
        value: "25+", 
        icon: "Award"
      },
      {
        label: "Community Impact",
        value: "High",
        icon: "Heart"
      }
    ],

    gallery: [
      {
        src: "/images/Events/WorkersDay/hero-image.jpg",
        alt: "International Workers Day Celebration",
        caption: "Community gathering for Workers Day celebration at SVST campus"
      },
      {
        src: "/images/Events/WorkersDay/speech-ceremony.jpg",
        alt: "Welcome Speech Ceremony", 
        caption: "Trust Secretary addressing workers about dignity of labor and rights"
      },
      {
        src: "/images/Events/WorkersDay/skill-performances.jpg",
        alt: "Motivational Performances",
        caption: "Trainees performing skits about worker empowerment and skill development"
      },
      {
        src: "/images/Events/WorkersDay/tree-plantation.jpg",
        alt: "Tree Plantation Activity",
        caption: "Symbolic tree plantation for sustainable development and growth"
      },
      {
        src: "/images/Events/WorkersDay/recognition-ceremony.jpg",
        alt: "Workers Recognition Ceremony",
        caption: "Distributing certificates to dedicated workers and outstanding trainees"
      },
      {
        src: "/images/Events/WorkersDay/community-interaction.jpg",
        alt: "Community Interaction Session",
        caption: "Interactive session with local workers sharing experiences and aspirations"
      }
    ],

    highlights: [
      {
        title: "Dignity of Labor Recognition",
        description: "Special acknowledgment of workers' contribution to economic growth and social development."
      },
      {
        title: "Skill Development Focus",
        description: "Emphasis on training and education for enhancing livelihood opportunities of workers."
      },
      {
        title: "Community Solidarity", 
        description: "Strengthened bonds between workers, trainees, and the Trust through shared experiences."
      },
      {
        title: "Sustainable Practices",
        description: "Tree plantation activity promoting environmental consciousness and long-term growth."
      }
    ],

    content: {
      overview: "International Workers' Day celebration honoring the dignity of labor and promoting worker empowerment through skill development initiatives at SVST campus.",
      objectives: [
        "Honor workers' contribution to economic and social development",
        "Promote dignity of labor and worker rights awareness",
        "Strengthen community solidarity between skilled and unskilled workers", 
        "Emphasize importance of skill development for livelihood enhancement",
        "Foster community engagement through interactive sessions",
        "Promote sustainable practices through environmental activities"
      ],
      activities: [
        "Welcome Speech on Workers' Rights and Economic Growth",
        "Recognition of Unskilled and Semi-skilled Workers", 
        "Motivational Performances by Skill Development Trainees",
        "Interactive Community Session with Local Workers",
        "Certificate Distribution to Dedicated Workers",
        "Symbolic Tree Plantation for Sustainable Development",
        "Skills Workshop Demonstrations and Training Programs",
        "Community Networking and Solidarity Building Session"
      ],
      impact: "The International Workers' Day celebration at SVST successfully honored the dignity of labor while promoting the importance of skill development in worker empowerment. The event brought together over 200 participants, including local workers, trainees, and community members, creating a unified platform for acknowledging workers' contributions to economic growth. Through motivational performances and interactive sessions, the program inspired participants to view skill development as a pathway to self-reliance and economic independence. The recognition ceremony honored 25+ dedicated workers and trainees, while the symbolic tree plantation activity emphasized sustainable growth and long-term commitment to workers' welfare. Most significantly, the celebration strengthened the connection between SVST and the local worker community, creating lasting bonds that support ongoing skill development and empowerment initiatives. The event reinforced the Trust's commitment to workers' rights and dignity while inspiring continued efforts toward building a skilled and self-reliant workforce."
    }
  };

  return <EventTemplate {...workersDayData} />;
}