"use client";

import { EventTemplate } from "@/components/sections/event-template";
import { 
  Flag,
  Users, 
  Mic, 
  Music,
  BookOpen,
  Heart,
  Calendar,
  MapPin,
  Clock,
  Award,
  Globe,
  Lightbulb,
  Smile,
  Target
} from "lucide-react";

export default function IndependenceDayClient() {
  const independenceDayData = {
    title: "Independence Day Celebration",
    subtitle: "77th Independence Day of India",
    description: "Celebrating India's 77th Independence Day with immense patriotism and unity, honoring freedom fighters who sacrificed their lives for India's independence at our Hingoli training center.",
    mainImage: "/images/Events/Independance day/hero-image.png",
    eventDate: "August 15, 2024",
    location: "SVST Training Center, Hingoli",
    duration: "Full Day Celebration",
    participants: "150+ Community Members",
    category: "National Celebration",
    
    features: [
      {
        icon: Flag,
        title: "Flag Hoisting Ceremony",
        description: "National Flag hoisting by Trust President with soulful National Anthem creating sense of national pride and reverence."
      },
      {
        icon: Mic,
        title: "Inspirational Speeches",
        description: "Trust Secretary's inspiring speech on India's independence journey, Atmanirbhar Bharat, and youth empowerment for nation's future."
      },
      {
        icon: Music,
        title: "Cultural Programs",
        description: "Patriotic songs, dance performances, and freedom struggle plays by trainees bringing alive the spirit of independence and unity."
      },
      {
        icon: BookOpen,
        title: "Interactive Quiz & Cleanliness Drive",
        description: "History quiz on freedom movement and Swachh Bharat cleanliness drive promoting national development beyond celebration."
      }
    ],

    stats: [
      {
        label: "Independence Day",
        value: "77th",
        icon: Flag
      },
      {
        label: "Participants",
        value: "150+",
        icon: Users
      },
      {
        label: "Cultural Programs",
        value: "6+",
        icon: Music
      },
      {
        label: "Community Impact",
        value: "High",
        icon: Heart
      }
    ],

    gallery: [
      {
        src: "/images/Events/Independance day/hero-image.png",
        alt: "Independence Day Flag Hoisting Ceremony",
        caption: "Trust President hoisting the National Flag during 77th Independence Day celebration at SVST training center"
      },
      {
        src: "/images/Events/Independance day/WhatsApp Image 2025-08-15 at 8.33.02 AM.png", 
        alt: "Independence Day Cultural Programs",
        caption: "Trainees presenting patriotic songs and dance performances celebrating India's independence"
      },
      {
        src: "/images/Events/Independance day/WhatsApp Image 2025-08-15 at 8.33.11 AM.png",
        alt: "Community Participation",
        caption: "Staff, trainees, and community members gathered for Independence Day celebration"
      },
      {
        src: "/images/Events/Independance day/photo_6052883353281084715_y.png",
        alt: "Freedom Struggle Play",
        caption: "Trainees performing short play depicting struggles and sacrifices of India's freedom fighters"
      },
      {
        src: "/images/Events/Independance day/photo_6052883353281084719_y.png",
        alt: "Patriotic Activities",
        caption: "Interactive quiz on India's history and freedom movement engaging trainees and community"
      },
      {
        src: "/images/Events/Independance day/photo_6052883353281084721_y.png",
        alt: "National Anthem Ceremony",
        caption: "Soulful singing of National Anthem creating atmosphere of national pride and reverence"
      },
      {
        src: "/images/Events/Independance day/photo_6052883353281084722_y.png",
        alt: "Unity and Patriotism",
        caption: "Display of unity and patriotism among participants during Independence Day celebration"
      },
      {
        src: "/images/Events/Independance day/photo_6052883353281084725_y.png",
        alt: "Cleanliness Drive",
        caption: "Swachh Bharat cleanliness drive in local village promoting national development message"
      }
    ],

    highlights: [
      {
        title: "Atmanirbhar Bharat Focus",
        description: "Emphasized self-reliance and the importance of youth empowerment in shaping India's future, promoting national development."
      },
      {
        title: "Cultural Heritage Celebration",
        description: "Artistic displays including patriotic songs, dances, and freedom struggle plays brought alive the spirit of independence."
      },
      {
        title: "Educational Engagement",
        description: "Interactive quiz on India's history, freedom movement, and constitutional values encouraged learning about our country."
      },
      {
        title: "Social Responsibility",
        description: "Swachh Bharat cleanliness drive in local village demonstrated commitment to national development beyond celebration."
      }
    ],

    content: {
      overview: "Swami Vivekanand Seva Trust, Hingoli, celebrated India's 77th Independence Day on August 15, 2024, with immense patriotism and unity. The celebration was organized at the Trust's training center in Nimbala Makta, MIDC, MAVIM Ghar, Hingoli, bringing together staff, trainees, local community members, and dignitaries to honor the freedom fighters who sacrificed their lives for India's independence. This celebration served as more than a festive occasion—it was a comprehensive effort to instill a sense of responsibility, patriotism, and social commitment among the youth and local community while emphasizing the role of every citizen in upholding the values of freedom, democracy, and equality.",

      objectives: [
        "Honor the memory and sacrifices of freedom fighters who gave their lives for India's independence",
        "Instill patriotic values and national pride among youth participating in skill development programs",
        "Promote the vision of Atmanirbhar Bharat (self-reliant India) through youth empowerment initiatives",
        "Celebrate India's rich cultural heritage while fostering unity and brotherhood among diverse communities",
        "Encourage active citizenship and social responsibility through community engagement activities",
        "Create awareness about India's freedom struggle history and constitutional values among rural communities",
        "Demonstrate practical patriotism through community service and cleanliness initiatives",
        "Inspire the next generation to contribute meaningfully to nation-building through skill development and social service"
      ],

      activities: [
        "National Flag Hoisting Ceremony",
        "National Anthem Singing",
        "Inspirational Independence Speeches", 
        "Patriotic Song Performances",
        "Traditional Dance Presentations",
        "Freedom Struggle Drama Performance",
        "India History Quiz Competition",
        "Constitutional Values Discussion",
        "Swachh Bharat Cleanliness Drive",
        "Community Unity Activities",
        "Youth Empowerment Sessions",
        "Atmanirbhar Bharat Awareness Program"
      ],

      impact: "The 77th Independence Day celebration at Swami Vivekanand Seva Trust created a profound impact on over 150 participants, successfully fostering patriotic values and national consciousness among the youth and community members. The event reinforced the importance of freedom, democracy, and equality while inspiring participants to view their skill development as contributions to national progress. The cultural programs effectively conveyed the struggles and sacrifices of freedom fighters, creating emotional connections to India's independence story. The interactive quiz enhanced knowledge about India's history and constitutional values, while the Swachh Bharat cleanliness drive demonstrated practical patriotism beyond ceremonial celebration. Most significantly, the emphasis on Atmanirbhar Bharat and youth empowerment motivated participants to see themselves as active contributors to India's future development. The celebration strengthened community bonds while creating ambassadors of patriotic values who carry forward the spirit of independence in their daily lives, ultimately contributing to a stronger, more self-reliant India through their enhanced skills and social commitment."
    }
  };

  return <EventTemplate {...independenceDayData} />;
}