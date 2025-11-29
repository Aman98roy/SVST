import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Home } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center pt-20 px-4">
      <div className="text-center max-w-md">
        <h1 className="font-heading font-bold text-9xl text-primary-500 mb-4">
          404
        </h1>
        <h2 className="font-heading font-bold text-3xl text-gray-900 dark:text-white mb-4">
          Page Not Found
        </h2>
        <p className="text-gray-600 dark:text-gray-400 mb-8">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <Button size="lg" asChild>
          <Link href="/">
            <Home className="mr-2 w-5 h-5" />
            Go Back Home
          </Link>
        </Button>
      </div>
    </div>
  );
}

