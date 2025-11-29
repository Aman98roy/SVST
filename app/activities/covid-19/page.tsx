import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Covid-19 Relief Activities",
  description:
    "Our response and relief activities during the COVID-19 pandemic.",
};

export default function Covid19Page() {
  return (
    <div className="pt-20 min-h-screen">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="max-w-4xl mx-auto">
          <h1 className="font-heading font-bold text-4xl sm:text-5xl text-gray-900 dark:text-white mb-8">
            Covid-19 Relief Activities
          </h1>
          <div className="prose prose-lg dark:prose-invert max-w-none">
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              During the COVID-19 pandemic, Swami Vivekanand Seva Trust actively
              engaged in relief activities, providing essential supplies,
              support, and assistance to affected communities.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

