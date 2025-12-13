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
    default: "Swami Vivekanand Seva Trust | Rural Development NGO in Maharashtra | DDU-GKY Skill Training",
    template: "%s | SVST Maharashtra",
  },
  description:
    "Swami Vivekanand Seva Trust (SVST) - Leading NGO in Maharashtra providing DDU-GKY skill development, rural empowerment, organic farming training, and community development across Hingoli, Nanded, Washim, Yavatmal & Jalna districts.",
  keywords: [
    "SVST",
    "Swami Vivekanand Seva Trust",
    "NGO Maharashtra",
    "DDU-GKY training",
    "rural development",
    "skill development",
    "CCTV supervisor training",
    "medical equipment assistant",
    "Hingoli NGO",
    "Nanded district development",
    "Washim rural programs",
    "Yavatmal skill training",
    "Jalna community development",
    "organic farming training",
    "women empowerment Maharashtra",
    "youth employment programs",
    "sustainable agriculture",
    "rural entrepreneurship",
    "community service",
    "social development",
    "Maharashtra rural NGO",
    "vocational training",
    "job placement",
    "rural youth training",
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
    siteName: "Swami Vivekanand Seva Trust Maharashtra",
    title: "SVST | Leading Rural Development NGO in Maharashtra | DDU-GKY Skill Training",
    description:
      "SVST provides comprehensive rural development programs including DDU-GKY skill training, organic farming, women empowerment across Hingoli, Nanded, Washim, Yavatmal & Jalna districts of Maharashtra.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Swami Vivekanand Seva Trust - Rural Development & Skill Training in Maharashtra",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "SVST Maharashtra | Rural Development & DDU-GKY Training",
    description:
      "Leading NGO providing skill development, rural empowerment & sustainable agriculture training across Maharashtra districts.",
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
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "NGO",
    "name": "Swami Vivekanand Seva Trust",
    "alternateName": "SVST",
    "url": "https://www.svstmh.com",
    "logo": "https://www.svstmh.com/images/svst-logo.png",
    "image": "https://www.svstmh.com/og-image.jpg",
    "description": "Leading NGO in Maharashtra providing DDU-GKY skill development, rural empowerment, organic farming training, and community development across Hingoli, Nanded, Washim, Yavatmal & Jalna districts.",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Sukli, Taluka: Sengaon",
      "addressLocality": "Hingoli",
      "addressRegion": "Maharashtra",
      "postalCode": "431542",
      "addressCountry": "IN"
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+91-24567-89101",
      "contactType": "customer service",
      "availableLanguage": ["English", "Hindi", "Marathi"],
      "hoursAvailable": {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
        "opens": "10:00",
        "closes": "18:00"
      }
    },
    "email": "svsthingoli@gmail.com",
    "founder": {
      "@type": "Person",
      "name": "Purushottam Kute"
    },
    "areaServed": {
      "@type": "State",
      "name": "Maharashtra"
    },
    "knowsAbout": [
      "Rural Development",
      "Skill Development",
      "DDU-GKY Training",
      "Organic Farming",
      "Women Empowerment",
      "Community Development"
    ],
    "sameAs": [
      "https://www.facebook.com/svst",
      "https://www.twitter.com/svst",
      "https://www.linkedin.com/company/svst"
    ]
  };

  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationSchema),
          }}
        />
        <link rel="canonical" href="https://www.svstmh.com" />
        <meta name="geo.region" content="IN-MH" />
        <meta name="geo.placename" content="Hingoli, Maharashtra" />
        <meta name="geo.position" content="19.7167;77.1167" />
        <meta name="ICBM" content="19.7167, 77.1167" />
      </head>
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

