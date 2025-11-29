import { Metadata } from "next";
import { BlogList } from "@/components/sections/blog-list";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Read the latest news, updates, and stories from Swami Vivekanand Seva Trust.",
};

export default function BlogPage() {
  return (
    <div className="pt-20">
      <BlogList />
    </div>
  );
}

