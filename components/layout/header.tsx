"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { useTheme } from "next-themes";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Sun, Moon, ChevronDown, Search } from "lucide-react";

const navItems = [
  { name: "Home", href: "/" },
  { name: "About Us", href: "/about" },
  {
    name: "Activities",
    href: "/activities",
    submenu: [
      { name: "Vasundhara Soil & Water Testing Laboratory", href: "/activities/vasundhara" },
      { name: "District Level Farmers Training", href: "/activities/farmers-training" },
      { name: "Biological Input Laboratory", href: "/activities/biological-input" },
      { name: "DAESI & CCIM", href: "/activities/daesi-ccim" },
      { name: "Covid-19", href: "/activities/covid-19" },
    ],
  },
  {
    name: "Events",
    href: "/events",
    submenu: [
      { name: "Yoga Day", href: "/events/yoga-day" },
      { name: "Republic Day", href: "/events/republic-day" },
      { name: "Independence Day", href: "/events/independence-day" },
      { name: "International Workers' Day", href: "/events/workers-day" },
      { name: "Employment Fairs", href: "/events/employment-fairs" },
      { name: "Cultural Program", href: "/events/cultural-program" },
    ],
  },
  { name: "DDU-GKY", href: "/ddu-gky" },
  { name: "Gallery", href: "/gallery" },
  { name: "Blog", href: "/blog" },
  { name: "Donate", href: "/donate" },
  { name: "Contact Us", href: "/contact" },
];

export function Header() {
  const [mounted, setMounted] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSubmenu, setActiveSubmenu] = useState<string | null>(null);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      // Save current scroll position
      const scrollY = window.scrollY;
      // Lock body scroll
      document.body.style.position = 'fixed';
      document.body.style.top = `-${scrollY}px`;
      document.body.style.width = '100%';
      document.body.style.overflow = 'hidden';
    } else {
      // Restore body scroll
      const scrollY = document.body.style.top;
      document.body.style.position = '';
      document.body.style.top = '';
      document.body.style.width = '';
      document.body.style.overflow = '';
      if (scrollY) {
        window.scrollTo(0, parseInt(scrollY || '0') * -1);
      }
    }
    // Cleanup on unmount
    return () => {
      document.body.style.position = '';
      document.body.style.top = '';
      document.body.style.width = '';
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`sticky top-0 left-0 right-0 z-50 bg-white/95 dark:bg-gray-900/95 backdrop-blur-md shadow-soft transition-all duration-300`}
      style={{ minHeight: '80px' }}
    >
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center group flex-shrink-0 relative z-50">
            <div className="relative w-16 h-16 sm:w-20 sm:h-20 flex-shrink-0">
              <Image
                src="/images/svst-logo.png"
                alt="Swami Vivekanand Seva Trust Logo"
                fill
                className="object-contain group-hover:scale-105 transition-transform duration-200"
                sizes="(max-width: 640px) 64px, 80px"
                priority
              />
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-1 flex-1 justify-center">
            {navItems.map((item) => (
              <div key={item.name} className="relative group">
                {item.submenu ? (
                  <div
                    className="relative"
                    onMouseEnter={() => setActiveSubmenu(item.name)}
                    onMouseLeave={() => setActiveSubmenu(null)}
                  >
                    <button className="flex items-center space-x-1 px-4 py-2 text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-primary-500 dark:hover:text-primary-400 transition-colors">
                      <span>{item.name}</span>
                      <ChevronDown className="w-4 h-4" />
                    </button>
                    <AnimatePresence>
                      {activeSubmenu === item.name && (
                        <motion.div
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: 10 }}
                          className="absolute top-full left-0 mt-2 w-64 bg-white dark:bg-gray-900 dark:border dark:border-gray-800 rounded-2xl shadow-soft-lg p-2 z-50"
                        >
                          {item.submenu.map((subItem) => (
                            <Link
                              key={subItem.name}
                              href={subItem.href}
                              className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-primary-50 dark:hover:bg-gray-900 hover:text-primary-500 dark:hover:text-primary-400 rounded-lg transition-colors"
                            >
                              {subItem.name}
                            </Link>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ) : (
                  <Link
                    href={item.href}
                    className="px-4 py-2 text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-primary-500 dark:hover:text-primary-400 transition-colors"
                  >
                    {item.name}
                  </Link>
                )}
              </div>
            ))}
          </div>

          {/* Search, Theme Toggle & Mobile Menu Button */}
          <div className="flex items-center space-x-2 sm:space-x-4 z-[60] relative">
            {/* Search */}
            <div className="relative">
              <button
                onClick={() => setSearchOpen(!searchOpen)}
                className="p-2 rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-primary-100 dark:hover:bg-gray-700 hover:text-primary-500 dark:hover:text-primary-400 transition-colors flex-shrink-0"
                aria-label="Search"
              >
                <Search className="w-5 h-5" />
              </button>
              
              <AnimatePresence>
                {searchOpen && (
                  <motion.div
                    initial={{ opacity: 0, width: 0 }}
                    animate={{ opacity: 1, width: "300px" }}
                    exit={{ opacity: 0, width: 0 }}
                    className="absolute right-0 top-12 bg-white dark:bg-gray-800 rounded-lg shadow-lg border border-gray-200 dark:border-gray-700 overflow-hidden z-[70]"
                  >
                    <div className="p-3">
                      <input
                        type="text"
                        placeholder="Search our website..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="w-full px-3 py-2 text-sm bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 text-gray-900 dark:text-white"
                        autoFocus
                      />
                      {searchTerm && (
                        <div className="mt-2 max-h-48 overflow-y-auto">
                          <div className="text-xs text-gray-500 dark:text-gray-400 mb-2">
                            Search results for "{searchTerm}"
                          </div>
                          {navItems
                            .filter(item => 
                              item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                              (item.submenu && item.submenu.some(sub => 
                                sub.name.toLowerCase().includes(searchTerm.toLowerCase())
                              ))
                            )
                            .slice(0, 5)
                            .map(item => (
                              <Link
                                key={item.name}
                                href={item.href}
                                onClick={() => {
                                  setSearchOpen(false);
                                  setSearchTerm("");
                                }}
                                className="block px-3 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 rounded"
                              >
                                {item.name}
                              </Link>
                            ))
                          }
                        </div>
                      )}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <button
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="p-2 rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-primary-100 dark:hover:bg-gray-700 hover:text-primary-500 dark:hover:text-primary-400 transition-colors flex-shrink-0"
              aria-label="Toggle theme"
            >
              {mounted && theme === "dark" ? (
                <Sun className="w-5 h-5" />
              ) : (
                <Moon className="w-5 h-5" />
              )}
            </button>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-primary-100 dark:hover:bg-gray-700 hover:text-primary-500 dark:hover:text-primary-400 transition-colors flex-shrink-0 relative z-50"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? (
                <X className="w-5 h-5" />
              ) : (
                <Menu className="w-5 h-5" />
              )}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800 shadow-lg max-h-[calc(100vh-80px)] overflow-y-auto relative z-40"
          >
              <div className="container mx-auto px-4 py-4 space-y-2">
              {navItems.map((item) => (
                <div key={item.name}>
                  {item.submenu ? (
                    <div>
                      <button
                        onClick={() =>
                          setActiveSubmenu(
                            activeSubmenu === item.name ? null : item.name
                          )
                        }
                        className="w-full flex items-center justify-between px-4 py-3 text-sm font-medium text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-slate-800 rounded-lg"
                      >
                        <span>{item.name}</span>
                        <ChevronDown
                          className={`w-4 h-4 transition-transform ${
                            activeSubmenu === item.name ? "rotate-180" : ""
                          }`}
                        />
                      </button>
                      {activeSubmenu === item.name && (
                        <div className="pl-4 mt-2 space-y-1">
                          {item.submenu.map((subItem) => (
                            <Link
                              key={subItem.name}
                              href={subItem.href}
                              onClick={() => setMobileMenuOpen(false)}
                              className="block px-4 py-2 text-sm text-gray-600 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-900 rounded-lg"
                            >
                              {subItem.name}
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  ) : (
                    <Link
                      href={item.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className="block px-4 py-3 text-sm font-medium text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-900 rounded-lg"
                    >
                      {item.name}
                    </Link>
                  )}
                </div>
              ))}
              </div>
            </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}

