import { Metadata } from "next";

export const metadata: Metadata = {
  title: "District Level Farmers Training",
  description:
    "Empowering farmers with modern agricultural techniques and sustainable farming practices.",
};

export default function FarmersTrainingPage() {
  return (
    <div className="pt-20 min-h-screen">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="max-w-4xl mx-auto">
          <h1 className="font-heading font-bold text-4xl sm:text-5xl text-gray-900 dark:text-white mb-8">
            District Level Farmers Training
          </h1>
          <div className="prose prose-lg dark:prose-invert max-w-none">
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              Our comprehensive farmers training programs empower agricultural
              communities with modern techniques, organic farming methods, and
              sustainable practices to enhance productivity and livelihoods.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

