import type { Metadata } from "next";
import { Poppins, Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-poppins",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Swami Vivekanand Seva Trust | Empowering Communities",
    template: "%s | SVST",
  },
  description:
    "Swami Vivekanand Seva Trust is dedicated to promoting the empowerment of people, protection of the environment, and respect for cultural diversity.",
  keywords: [
    "NGO",
    "social service",
    "community development",
    "Hingoli",
    "Maharashtra",
    "Swami Vivekanand",
    "charity",
    "non-profit",
  ],
  authors: [{ name: "Swami Vivekanand Seva Trust" }],
  creator: "Swami Vivekanand Seva Trust",
  publisher: "Swami Vivekanand Seva Trust",
  metadataBase: new URL("https://www.svstmh.com"),
  icons: {
    icon: "/images/svst-logo.png",
    shortcut: "/images/svst-logo.png",
    apple: "/images/svst-logo.png",
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://www.svstmh.com",
    siteName: "Swami Vivekanand Seva Trust",
    title: "Swami Vivekanand Seva Trust | Empowering Communities",
    description:
      "Dedicated to promoting the empowerment of people, protection of the environment, and respect for cultural diversity.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Swami Vivekanand Seva Trust",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Swami Vivekanand Seva Trust",
    description:
      "Dedicated to promoting the empowerment of people, protection of the environment, and respect for cultural diversity.",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-verification-code",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${poppins.variable} ${inter.variable} antialiased`}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem={false}>
          <a href="#main-content" className="skip-link">
            Skip to main content
          </a>
          <Header />
          <main id="main-content">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}

