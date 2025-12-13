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
  subtitle: "Standing Together in Crisis",
  description: "Comprehensive emergency response and relief activities during the COVID-19 pandemic, providing essential supplies, healthcare support, and community assistance to vulnerable populations during unprecedented challenges.",
  mainImage: "https://images.unsplash.com/photo-1584118624012-df056829fbd0?w=1200&h=600&fit=crop",
  category: "Emergency Relief",
  location: "Hingoli District & Beyond",
  duration: "March 2020 - December 2022",
  beneficiaries: "15,000+ Individuals",
  features: [
    {
      icon: Package,
      title: "Essential Supplies",
      description: "Distribution of food packets, sanitizers, masks, and basic necessities to families in need during lockdown periods."
    },
    {
      icon: Stethoscope,
      title: "Healthcare Support",
      description: "Medical assistance, oxygen support, and coordination with healthcare facilities for COVID-19 patients and their families."
    },
    {
      icon: Utensils,
      title: "Community Kitchens",
      description: "Establishment of community kitchens to provide free meals to migrant workers, daily laborers, and homeless individuals."
    },
    {
      icon: Shield,
      title: "Awareness Campaigns",
      description: "Public health awareness programs on COVID-19 prevention, vaccination drives, and mental health support initiatives."
    }
  ],
  stats: [
    {
      label: "People Served",
      value: "15,000+",
      icon: Users
    },
    {
      label: "Food Packets Distributed",
      value: "25,000+",
      icon: Package
    },
    {
      label: "Medical Assistance Cases",
      value: "500+",
      icon: Stethoscope
    },
    {
      label: "Awareness Participants",
      value: "3,000+",
      icon: Shield
    }
  ],
  gallery: [
    {
      src: "https://images.unsplash.com/photo-1584118624012-df056829fbd0?w=800&h=600&fit=crop",
      alt: "COVID-19 relief distribution",
      caption: "Distribution of essential supplies and food packets"
    },
    {
      src: "https://images.unsplash.com/photo-1586771107445-d3ca888129ff?w=800&h=600&fit=crop",
      alt: "Healthcare workers in protective gear",
      caption: "Healthcare support and medical assistance activities"
    },
    {
      src: "https://images.unsplash.com/photo-1593113598332-cd288d649433?w=800&h=600&fit=crop",
      alt: "Community kitchen operations",
      caption: "Community kitchen providing free meals to those in need"
    },
    {
      src: "https://images.unsplash.com/photo-1584483766114-2cea6facdf57?w=800&h=600&fit=crop",
      alt: "Sanitization drive in community",
      caption: "Community sanitization and hygiene awareness programs"
    },
    {
      src: "https://images.unsplash.com/photo-1612277795421-9bc7706a4a34?w=800&h=600&fit=crop",
      alt: "Mask distribution campaign",
      caption: "Mask and sanitizer distribution to rural communities"
    },
    {
      src: "https://images.unsplash.com/photo-1605289982774-9a6fef564df8?w=800&h=600&fit=crop",
      alt: "Vaccination awareness campaign",
      caption: "COVID-19 vaccination awareness and support programs"
    }
  ],
  content: {
    overview: "The COVID-19 Relief Activities represent SVST's rapid and comprehensive response to the unprecedented challenges posed by the global pandemic. Recognizing the disproportionate impact on rural and marginalized communities, we mobilized resources and volunteers to provide immediate relief, healthcare support, and long-term assistance. Our multi-faceted approach addressed both immediate survival needs and broader public health concerns during the crisis.",
    objectives: [
      "Provide immediate relief in the form of food, shelter, and essential supplies to affected families",
      "Support healthcare infrastructure and provide medical assistance to COVID-19 patients",
      "Ensure food security for vulnerable populations including migrant workers and daily laborers",
      "Conduct public health awareness campaigns to prevent the spread of COVID-19",
      "Coordinate with government agencies and other organizations for effective relief distribution"
    ],
    methodology: "Our response strategy combined immediate relief distribution with systematic healthcare support and awareness campaigns. We established distribution centers across multiple locations, coordinated with local authorities for beneficiary identification, and maintained strict safety protocols during all activities. Volunteer teams were trained in COVID-19 safety measures, and partnerships with healthcare providers ensured medical support reached those in need.",
    impact: "Our COVID-19 relief efforts reached over 15,000 individuals across Hingoli district and neighboring areas. We distributed 25,000+ food packets, provided medical assistance to 500+ patients, and conducted awareness programs for 3,000+ community members. The community kitchens served over 50,000 meals during peak lockdown periods. Our efforts were recognized by district authorities and helped bridge critical gaps in government relief efforts, particularly in remote rural areas where access to relief was limited."
  }
};

export default function Covid19Page() {
  return <Covid19Client />;
}

