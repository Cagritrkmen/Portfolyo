"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { useLanguage } from "@/components/providers/LanguageProvider";
import { Section } from "@/components/atoms/Section";
import { Heading } from "@/components/atoms/Heading";
import { Card } from "@/components/atoms/Card";
import { LoadingSkeleton } from "@/components/molecules/LoadingSkeleton";
import portfolioData from "@/data/portfolioData.json";

export function About() {
  const { t } = useLanguage();
  const [imageLoading, setImageLoading] = useState(true);

  return (
    <Section id="about" className="bg-gray-100 dark:bg-gray-900">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <Heading level={2} className="text-center mb-12">
            {t("about.title")}
          </Heading>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="relative w-full aspect-square max-w-md mx-auto group">
              {/* Subtle glow effect */}
              <motion.div
                className="absolute -inset-2 bg-blue-500/20 dark:bg-blue-500/10 rounded-2xl blur-xl"
                animate={{
                  opacity: [0.3, 0.5, 0.3],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
              
              <motion.div
                className="relative w-full h-full rounded-2xl overflow-hidden shadow-2xl bg-gray-200 dark:bg-gray-800 border-4 border-blue-500/30 dark:border-blue-500/20 group-hover:border-blue-500/50 dark:group-hover:border-blue-500/40 transition-colors duration-300"
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                {imageLoading && (
                  <div className="absolute inset-0 z-10">
                    <LoadingSkeleton type="image" className="w-full h-full" />
                  </div>
                )}
                <Image
                  src={portfolioData.about.image}
                  alt={portfolioData.about.name}
                  fill
                  className={`object-cover group-hover:scale-105 transition-transform duration-500 ${imageLoading ? "opacity-0" : "opacity-100"}`}
                  priority
                  sizes="(max-width: 768px) 100vw, 50vw"
                  onLoad={() => setImageLoading(false)}
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.style.display = "none";
                    setImageLoading(false);
                  }}
                />
                {/* Overlay effect */}
                <div className="absolute inset-0 bg-blue-500/0 group-hover:bg-blue-500/10 transition-colors duration-300" />
              </motion.div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <Card>
              <h3 className="text-2xl font-bold mb-4">{portfolioData.about.title}</h3>
              <p className="text-lg leading-relaxed text-foreground/80">
                {t("data.about.bio")}
              </p>
            </Card>
          </motion.div>
        </div>
      </div>
    </Section>
  );
}

