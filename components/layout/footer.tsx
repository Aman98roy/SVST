import Link from "next/link";
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from "lucide-react";

const footerLinks = {
  quick: [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about" },
    { name: "Contact Us", href: "/contact" },
    { name: "Join Us", href: "/join" },
    { name: "Donate Us", href: "/donate" },
  ],
  activities: [
    { name: "Vasundhara Laboratory", href: "/activities/vasundhara" },
    { name: "Farmers Training", href: "/activities/farmers-training" },
    { name: "Biological Input Lab", href: "/activities/biological-input" },
    { name: "DAESI & CCIM", href: "/activities/daesi-ccim" },
  ],
  events: [
    { name: "Yoga Day", href: "/events/yoga-day" },
    { name: "Republic Day", href: "/events/republic-day" },
    { name: "Independence Day", href: "/events/independence-day" },
    { name: "Cultural Program", href: "/events/cultural-program" },
  ],
};

export function Footer() {
  return (
    <footer className="bg-gray-900 dark:bg-gray-950 text-gray-300">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About Section */}
          <div>
            <h3 className="font-heading font-bold text-white text-lg mb-4">
              Swami Vivekanand Seva Trust
            </h3>
            <p className="text-sm text-gray-400 mb-4 content-text">
              Dedicated to promoting the empowerment of people, protection of
              the environment, and respect for cultural diversity.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-gray-900 hover:bg-primary-500 rounded-lg transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-gray-900 hover:bg-primary-500 rounded-lg transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-gray-900 hover:bg-primary-500 rounded-lg transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-gray-900 hover:bg-primary-500 rounded-lg transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-heading font-bold text-white text-lg mb-4">
              Quick Links
            </h3>
            <ul className="space-y-2">
              {footerLinks.quick.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm text-gray-400 hover:text-primary-400 transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Activities */}
          <div>
            <h3 className="font-heading font-bold text-white text-lg mb-4">
              Activities
            </h3>
            <ul className="space-y-2">
              {footerLinks.activities.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm text-gray-400 hover:text-primary-400 transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-heading font-bold text-white text-lg mb-4">
              Get In Touch
            </h3>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-primary-400 mt-0.5 flex-shrink-0" />
                <span className="text-sm text-gray-400">
                  Sukli, Taluka: Sengaon, District: Hingoli, State: Maharashtra
                  (India), Pin Code: 431542
                </span>
              </li>
              <li className="flex items-start space-x-3">
                <Phone className="w-5 h-5 text-primary-400 mt-0.5 flex-shrink-0" />
                <div>
                  <a
                    href="tel:+912456789101"
                    className="text-sm text-gray-400 hover:text-primary-400 transition-colors block"
                  >
                    +91 24567-89101 (Landline)
                  </a>
                  <div className="text-xs text-gray-500 mt-1">
                    Contact Hours: 10:00 AM - 06:00 PM<br/>
                    (Monday - Saturday)
                  </div>
                </div>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-primary-400 flex-shrink-0" />
                <a
                  href="mailto:svsthingoli@gmail.com"
                  className="text-sm text-gray-400 hover:text-primary-400 transition-colors"
                >
                  svsthingoli@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-sm text-gray-400">
            © {new Date().getFullYear()} Swami Vivekanand Seva Trust | Designed
            & Developed By{" "}
            <a
              href="https://altheabit.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary-400 hover:text-primary-300 transition-colors font-medium"
            >
              Altheabit
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}

