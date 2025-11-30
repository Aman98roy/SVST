import { Metadata } from "next";

export const metadata: Metadata = {
  title: "DAESI & CCIM",
  description:
    "Training programs for agricultural extension services and community development.",
};

export default function DAESICCIMPage() {
  return (
    <div className="pt-16 min-h-screen">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="max-w-4xl mx-auto">
          <h1 className="font-heading font-bold text-4xl sm:text-5xl text-gray-900 dark:text-white mb-8">
            DAESI & CCIM
          </h1>
          <div className="prose prose-lg dark:prose-invert max-w-none">
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              Our DAESI & CCIM programs provide comprehensive training for
              agricultural extension workers and community development
              initiatives, building capacity for sustainable rural development.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

