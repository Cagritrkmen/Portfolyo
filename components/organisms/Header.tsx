"use client";

import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { Moon, Sun, Languages, Download, Menu, X } from "lucide-react";
import { useLanguage } from "@/components/providers/LanguageProvider";
import { IconButton } from "@/components/molecules/IconButton";
import { Button } from "@/components/atoms/Button";
import { motion, AnimatePresence } from "framer-motion";

export function Header() {
  const [mounted, setMounted] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState<string>("");
  const { theme, setTheme } = useTheme();
  const { language, setLanguage, t } = useLanguage();

  useEffect(() => {
    setMounted(true);
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Menü açıldığında body scrollunu kilitle
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMenuOpen]);

  // Aktif section'ı takip et
  useEffect(() => {
    if (!mounted) return;

    const sections = ["hero", "about", "skills", "timeline", "projects", "contact"];
    const observerOptions = {
      root: null,
      rootMargin: "-20% 0px -70% 0px",
      threshold: 0,
    };

    const observers = sections.map((sectionId) => {
      const element = document.getElementById(sectionId);
      if (!element) return null;

      const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(sectionId);
          }
        });
      }, observerOptions);

      observer.observe(element);
      return observer;
    });

    // İlk yüklemede hero'yu aktif yap
    if (window.scrollY < 100) {
      setActiveSection("hero");
    }

    return () => {
      observers.forEach((observer) => {
        if (observer) observer.disconnect();
      });
    };
  }, [mounted]);

  const toggleLanguage = () => {
    setLanguage(language === "en" ? "tr" : "en");
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const headerHeight = window.innerWidth >= 768 ? 80 : 64; // md:h-20 = 80px, h-16 = 64px
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerHeight;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
      setIsMenuOpen(false);
    }
  };

  const downloadCV = () => {
    const link = document.createElement("a");
    link.href = "/cv.pdf";
    link.download = "cv.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  if (!mounted) return null;

  const navItems = [
    { id: "about", label: t("nav.about") },
    { id: "skills", label: t("nav.skills") },
    { id: "timeline", label: t("nav.experience") },
    { id: "projects", label: t("nav.projects") },
    { id: "contact", label: t("nav.contact") },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isMenuOpen
          ? "bg-background shadow-lg border-b border-gray-200 dark:border-gray-800"
          : scrolled
          ? "bg-background/80 backdrop-blur-md shadow-lg border-b border-gray-200 dark:border-gray-800"
          : "bg-transparent"
      }`}
    >
      <nav className="container mx-auto px-4 md:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="font-bold text-xl md:text-2xl cursor-pointer"
            onClick={() => scrollToSection("hero")}
          >
            Portfolio
          </motion.div>

          <div className="hidden md:flex items-center gap-6">
            {navItems.map((item) => {
              const isActive = activeSection === item.id;
              return (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                  className="relative text-sm font-medium hover:text-foreground/70 transition-colors focus:outline-none rounded px-2 py-1"
              >
                  <span className={isActive ? "text-blue-600 dark:text-blue-400" : ""}>
                {item.label}
                  </span>
                  {isActive && (
                    <motion.div
                      className="absolute bottom-0 left-0 right-0 h-0.5 bg-blue-600 dark:bg-blue-400 rounded-full"
                      layoutId="activeSection"
                      initial={false}
                      transition={{
                        type: "spring",
                        stiffness: 380,
                        damping: 30,
                      }}
                    />
                  )}
              </button>
              );
            })}
          </div>

          <div className="flex items-center gap-2 md:gap-4">
            <IconButton
              icon={Languages}
              label="Toggle Language"
              ariaLabel={language === "en" ? "Switch to Turkish" : "Switch to English"}
              onClick={toggleLanguage}
            />
            <IconButton
              icon={theme === "dark" ? Sun : Moon}
              label="Toggle Theme"
              ariaLabel={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            />
            <Button
              variant="outline"
              size="sm"
              onClick={downloadCV}
              className="hidden md:flex whitespace-nowrap min-w-[180px]"
            >
              <Download className="w-4 h-4 mr-2 flex-shrink-0" />
              {t("cv.download")}
            </Button>
            <motion.button
              className="md:hidden p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 focus:outline-none"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
              aria-expanded={isMenuOpen}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.1 }}
            >
              <AnimatePresence mode="wait" initial={false}>
                {isMenuOpen ? (
                  <motion.div
                    key="close"
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <X className="w-6 h-6" />
                  </motion.div>
                ) : (
                  <motion.div
                    key="menu"
                    initial={{ rotate: 90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: -90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Menu className="w-6 h-6" />
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.button>
          </div>
        </div>

        <AnimatePresence mode="wait">
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, maxHeight: 0, overflow: "hidden" }}
              animate={{ 
                opacity: 1, 
                maxHeight: 500,
                transition: {
                  opacity: { duration: 0.2 },
                  maxHeight: { duration: 0.3, ease: [0.4, 0, 0.2, 1] }
                }
              }}
              exit={{ 
                opacity: 0, 
                maxHeight: 0,
                transition: {
                  opacity: { duration: 0.15 },
                  maxHeight: { duration: 0.25, ease: [0.4, 0, 0.2, 1] }
                }
              }}
              className="md:hidden pb-4 border-t border-gray-200 dark:border-gray-800 mt-2 pt-4 bg-background"
            >
              <motion.div 
                className="flex flex-col gap-2"
                initial={{ y: -10 }}
                animate={{ y: 0 }}
                exit={{ y: -10 }}
                transition={{ duration: 0.2, delay: 0.1 }}
              >
                {navItems.map((item, index) => {
                  const isActive = activeSection === item.id;
                  return (
                  <motion.button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.2, delay: index * 0.05 }}
                    className="relative text-left px-4 py-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors focus:outline-none"
                  >
                      <span className={isActive ? "text-blue-600 dark:text-blue-400 font-semibold" : ""}>
                    {item.label}
                      </span>
                      {isActive && (
                        <motion.div
                          className="absolute left-0 top-0 bottom-0 w-1 bg-blue-600 dark:bg-blue-400 rounded-r-full"
                          layoutId="activeSectionMobile"
                          initial={false}
                          transition={{
                            type: "spring",
                            stiffness: 380,
                            damping: 30,
                          }}
                        />
                      )}
                  </motion.button>
                  );
                })}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.2, delay: navItems.length * 0.05 }}
                >
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={downloadCV}
                    className="mt-2 whitespace-nowrap min-w-[200px]"
                  >
                    <Download className="w-4 h-4 mr-2 flex-shrink-0" />
                    {t("cv.download")}
                  </Button>
                </motion.div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
}

