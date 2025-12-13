"use client";

import { EventTemplate } from "@/components/sections/event-template";
import { 
  Heart,
  Users, 
  Trophy, 
  Target,
  Sparkles,
  Activity,
  Calendar,
  MapPin,
  Clock,
  Award,
  Globe,
  Lightbulb,
  Smile,
  CheckCircle
} from "lucide-react";

export default function YogaDayClient() {
  const yogaDayData = {
    title: "International Yoga Day",
    subtitle: "Celebrating Wellness & Inner Peace",
    description: "Join us in celebrating the ancient practice of yoga with our community-wide International Yoga Day event, promoting health, wellness, and spiritual harmony among all participants.",
    mainImage: "/images/Events/YogaDay/main.jpeg",
    eventDate: "June 21, 2024",
    location: "Community Center & Rural Villages",
    duration: "Full Day Event (6 AM - 6 PM)",
    participants: "500+ Community Members",
    category: "Health & Wellness Event",
    
    features: [
      {
        icon: Heart,
        title: "Community Wellness",
        description: "Promoting physical and mental wellness through yoga practice across all age groups in our community."
      },
      {
        icon: Users,
        title: "Mass Participation",
        description: "Engaging hundreds of participants from villages and towns in collective yoga sessions."
      },
      {
        icon: Sparkles,
        title: "Expert Instruction",
        description: "Certified yoga instructors leading sessions and teaching proper techniques and breathing exercises."
      },
      {
        icon: Globe,
        title: "Universal Appeal",
        description: "Yoga sessions designed for all ages, from children to elderly, making it truly inclusive."
      },
      {
        icon: Lightbulb,
        title: "Health Awareness",
        description: "Educational sessions on the benefits of regular yoga practice and healthy lifestyle choices."
      },
      {
        icon: Smile,
        title: "Stress Relief",
        description: "Focus on meditation and mindfulness techniques to reduce stress and improve mental clarity."
      }
    ],

    stats: [
      {
        label: "Participants",
        value: "500+",
        icon: Users
      },
      {
        label: "Sessions Conducted",
        value: "12",
        icon: Activity
      },
      {
        label: "Age Groups",
        value: "All",
        icon: Heart
      },
      {
        label: "Villages Covered",
        value: "15+",
        icon: MapPin
      }
    ],

    gallery: [
      {
        src: "/images/Events/YogaDay/main.jpeg",
        alt: "International Yoga Day Main Event",
        caption: "Community members participating in the main yoga session during International Yoga Day celebration"
      },
      {
        src: "/images/Events/YogaDay/1.jpeg", 
        alt: "Yoga Practice Session",
        caption: "Participants practicing yoga asanas under expert guidance in a peaceful outdoor setting"
      }
    ],

    highlights: [
      {
        title: "Dawn Yoga Session",
        description: "Started the day with sunrise yoga sessions, connecting participants with nature's energy and promoting early morning wellness habits."
      },
      {
        title: "Community Harmony",
        description: "Brought together people from different backgrounds and age groups, fostering unity through shared wellness practices."
      },
      {
        title: "Health Education",
        description: "Conducted awareness sessions on the physical and mental benefits of regular yoga practice and holistic wellness."
      },
      {
        title: "Meditation Workshop",
        description: "Special meditation and breathing technique workshops to help participants manage stress and improve mental clarity."
      },
      {
        title: "Youth Engagement",
        description: "Special youth-focused sessions to introduce younger generations to the benefits of yoga and mindful living."
      },
      {
        title: "Rural Outreach",
        description: "Extended the celebration to remote villages, ensuring rural communities also benefited from this wellness initiative."
      }
    ],

    content: {
      overview: "Our International Yoga Day celebration represents a comprehensive community wellness initiative that brings together the ancient wisdom of yoga with modern health awareness. This annual event transforms our community spaces into centers of wellness, where people of all ages come together to practice yoga, learn about holistic health, and build stronger community bonds. Through expert-led sessions, educational workshops, and inclusive activities, we create an environment where wellness becomes a shared community value. The event serves as both a celebration of the International Day of Yoga and a practical demonstration of how traditional practices can enhance modern life. By organizing sessions across multiple villages and community centers, we ensure that the benefits of yoga reach every corner of our community, promoting not just physical fitness but mental clarity, emotional balance, and spiritual growth.",

      objectives: [
        "Promote physical and mental wellness through yoga practice across all community demographics",
        "Raise awareness about the health benefits of regular yoga and meditation practice",
        "Foster community unity by bringing together people from different backgrounds for shared wellness activities",
        "Provide expert instruction in proper yoga techniques and breathing exercises for beginners and experienced practitioners",
        "Create sustainable wellness habits by demonstrating how yoga can be integrated into daily life",
        "Celebrate India's ancient contribution to global wellness through the practice of yoga",
        "Establish ongoing community wellness programs inspired by the success of the Yoga Day event",
        "Support mental health awareness by incorporating meditation and stress-relief techniques into the sessions"
      ],

      activities: [
        "Sunrise Community Yoga Sessions",
        "Expert-Led Asana Workshops", 
        "Breathing & Meditation Techniques",
        "Children's Yoga Fun Sessions",
        "Senior Citizens Gentle Yoga",
        "Health Awareness Talks",
        "Group Meditation Circles",
        "Yoga Philosophy Discussions",
        "Wellness Exhibition Stalls",
        "Healthy Lifestyle Demonstrations",
        "Community Wellness Pledge",
        "Traditional Music Meditation"
      ],

      impact: "The International Yoga Day celebration has created a lasting impact on our community's approach to health and wellness. With over 500 participants across 15+ villages, the event successfully introduced yoga as an accessible wellness practice for all age groups. Many participants reported improved flexibility, reduced stress levels, and better sleep patterns following the event. The initiative sparked the formation of regular community yoga groups that continue to meet weekly, creating a sustainable wellness network. Health awareness sessions helped participants understand the connection between physical activity, mental health, and overall well-being. The intergenerational participation fostered stronger community bonds and created mentorship opportunities between experienced practitioners and beginners. The event's success led to requests for monthly wellness workshops and the integration of yoga sessions into school programs. Local healthcare workers noted increased interest in preventive health measures and holistic wellness approaches. The celebration also strengthened cultural pride by highlighting yoga as India's gift to global wellness, inspiring community members to explore other traditional health practices. Most importantly, the event demonstrated that wellness initiatives can unite communities while promoting individual health, creating a model for sustainable community development through holistic health practices."
    }
  };

  return <EventTemplate {...yogaDayData} />;
}