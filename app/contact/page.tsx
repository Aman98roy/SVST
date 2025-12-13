import { Metadata } from "next";
import { ContactForm } from "@/components/forms/contact-form";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Get in touch with Swami Vivekanand Seva Trust. Send us a message, call us, or visit our office in Hingoli, Maharashtra.",
};

export default function ContactPage() {
  return (
    <div className="pt-20 min-h-screen">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="font-heading font-bold text-2xl sm:text-3xl text-gray-900 dark:text-white mb-4">
              Contact Us
            </h1>
            <p className="text-lg text-gray-600 dark:text-gray-400 content-text">
              We'd love to hear from you. Send us a message and we'll respond as
              soon as possible.
            </p>
          </div>
          <ContactForm />
        </div>
      </div>
    </div>
  );
}

