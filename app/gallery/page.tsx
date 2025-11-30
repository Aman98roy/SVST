import { Metadata } from "next";
import { GalleryGrid } from "@/components/sections/gallery-grid";

export const metadata: Metadata = {
  title: "Gallery",
  description:
    "View photos and videos from our events, activities, and community programs.",
};

export default function GalleryPage() {
  return (
    <div className="pt-16">
      <GalleryGrid />
    </div>
  );
}

