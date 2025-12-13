import { Metadata } from "next";
import Gallery from "@/components/sections/gallery";

export const metadata: Metadata = {
  title: "Photo Gallery - SVST",
  description:
    "Explore our comprehensive photo gallery showcasing community initiatives, training programs, events, and transformational stories from across Maharashtra. Discover the impact of Swami Vivekanand Seva Trust's work through powerful imagery.",
  keywords: "SVST gallery, community photos, training programs, Maharashtra NGO, DDU-GKY training, rural development photos",
};

export default function GalleryPage() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <Gallery />
    </div>
  );
}

