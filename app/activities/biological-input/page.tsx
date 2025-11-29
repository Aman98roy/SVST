import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Biological Input Laboratory",
  description:
    "Research and development of organic farming inputs and biofertilizers.",
};

export default function BiologicalInputPage() {
  return (
    <div className="pt-20 min-h-screen">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="max-w-4xl mx-auto">
          <h1 className="font-heading font-bold text-4xl sm:text-5xl text-gray-900 dark:text-white mb-8">
            Biological Input Laboratory
          </h1>
          <div className="prose prose-lg dark:prose-invert max-w-none">
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              Our Biological Input Laboratory focuses on research and development
              of organic farming inputs, biofertilizers, and eco-friendly
              agricultural solutions to promote sustainable agriculture.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

