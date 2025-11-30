import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Vasundhara Soil & Water Testing Laboratory",
  description:
    "Comprehensive soil and water testing services for farmers to optimize agricultural productivity.",
};

export default function VasundharaPage() {
  return (
    <div className="pt-16 min-h-screen">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="max-w-4xl mx-auto">
          <h1 className="font-heading font-bold text-4xl sm:text-5xl text-gray-900 dark:text-white mb-8">
            Vasundhara Soil & Water Testing Laboratory
          </h1>
          <div className="prose prose-lg dark:prose-invert max-w-none">
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              Our Vasundhara Soil & Water Testing Laboratory provides
              comprehensive testing services to help farmers optimize their
              agricultural productivity. We analyze soil nutrients, water
              quality, and provide recommendations for sustainable farming
              practices.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

