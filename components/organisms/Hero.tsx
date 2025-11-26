"use client";

import { motion } from "framer-motion";
import { ChevronDown, Github, Linkedin } from "lucide-react";
import { useLanguage } from "@/components/providers/LanguageProvider";
import { Button } from "@/components/atoms/Button";
import { Section } from "@/components/atoms/Section";
import portfolioData from "@/data/portfolioData.json";

export function Hero() {
  const { t } = useLanguage();

  const scrollToProjects = () => {
    const element = document.getElementById("projects");
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <Section id="hero" className="min-h-screen flex items-center justify-center pt-16 md:pt-20 overflow-hidden">
      {/* Hero'ya özel animasyonlu blur efektleri */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-[5]">
        <motion.div
          className="absolute top-1/4 right-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>
      
      <div className="container mx-auto px-4 md:px-6 lg:px-8 text-center w-full pb-1">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-lg md:text-xl mb-4 text-foreground/70"
          >
            {t("hero.title")}
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 text-balance relative inline-block group"
          >
            <span className="relative z-10">{portfolioData.about.name}</span>
            <motion.span
              className="absolute bottom-0 left-0 right-0 h-3 bg-blue-400/20 dark:bg-blue-500/20 rounded-full"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ delay: 0.8, duration: 0.6 }}
            />
          </motion.h1>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="text-2xl md:text-4xl lg:text-5xl font-semibold mb-8 text-foreground/80"
          >
            {t("hero.subtitle")}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="text-lg md:text-xl mb-12 max-w-2xl mx-auto text-foreground/70"
          >
            {t("hero.description")}
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="flex flex-col items-center gap-4 mb-16"
          >
            <Button
              variant="primary"
              size="lg"
              onClick={scrollToProjects}
            >
              {t("hero.cta")}
            </Button>
            <div className="flex items-center gap-4">
              <motion.a
                href={portfolioData.about.social.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-gray-100 dark:bg-gray-800 hover:bg-blue-100 dark:hover:bg-blue-900/50 border border-gray-200 dark:border-gray-700 hover:border-blue-300 dark:hover:border-blue-700 transition-all duration-300 group"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
                aria-label="GitHub"
              >
                <Github className="w-5 h-5 text-foreground/70 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors" />
              </motion.a>
              <motion.a
                href={portfolioData.about.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-gray-100 dark:bg-gray-800 hover:bg-blue-100 dark:hover:bg-blue-900/50 border border-gray-200 dark:border-gray-700 hover:border-blue-300 dark:hover:border-blue-700 transition-all duration-300 group"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5 text-foreground/70 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors" />
              </motion.a>
            </div>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.6 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
            className="cursor-pointer"
            onClick={() => window.scrollBy({ top: window.innerHeight, behavior: "smooth" })}
            aria-label="Scroll down"
          >
            <ChevronDown className="w-8 h-8 text-foreground/50" />
          </motion.div>
        </motion.div>
      </div>
    </Section>
  );
}

