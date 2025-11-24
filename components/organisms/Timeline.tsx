"use client";

import { motion } from "framer-motion";
import { Briefcase, GraduationCap } from "lucide-react";
import { useLanguage } from "@/components/providers/LanguageProvider";
import { Section } from "@/components/atoms/Section";
import { Heading } from "@/components/atoms/Heading";
import portfolioData from "@/data/portfolioData.json";

export function Timeline() {
  const { t, language } = useLanguage();

  const allItems = [
    ...portfolioData.experience.map((item) => ({ ...item, type: "work" as const })),
    ...portfolioData.education.map((item) => ({ ...item, type: "education" as const })),
  ].sort((a, b) => {
    const aYear = parseInt(a.period.split(" - ")[0] || a.period.split(" ")[0]);
    const bYear = parseInt(b.period.split(" - ")[0] || b.period.split(" ")[0]);
    return bYear - aYear;
  });

  return (
    <Section id="timeline" className="bg-gray-50 dark:bg-gray-950">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <Heading level={2} className="text-center mb-12">
            {t("timeline.title")}
          </Heading>
        </motion.div>

        <div className="max-w-3xl mx-auto">
          <div className="relative">
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-gray-300 dark:bg-gray-700 transform md:-translate-x-1/2" />
            
            {allItems.map((item, index) => {
              const Icon = item.type === "work" ? Briefcase : GraduationCap;

              return (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="relative mb-8 md:mb-12 pl-12 md:pl-0"
                >
                  <div className="md:flex md:items-start md:gap-4">
                    <div className="absolute left-0 md:relative md:left-auto flex-shrink-0">
                      <div className="w-8 h-8 rounded-full bg-foreground flex items-center justify-center text-background shadow-lg relative z-10">
                        <Icon className="w-4 h-4" />
                      </div>
                    </div>
                    <div className="flex-1">
                      <div className="bg-white dark:bg-gray-900 rounded-lg shadow-lg p-6 border border-gray-200 dark:border-gray-800">
                        <div className="flex items-center gap-2 mb-2">
                          <span className="text-xs font-semibold text-foreground/60 uppercase tracking-wider">
                            {item.type === "work" ? t("timeline.work") : t("timeline.education")}
                          </span>
                        </div>
                        <h3 className="text-xl font-bold mb-1">{item.title}</h3>
                        <p className="text-foreground/70 font-medium mb-2">{item.company}</p>
                        <p className="text-sm text-foreground/60 mb-3">
                          {typeof item.location === "string" ? item.location : item.location[language]} • {item.period}
                        </p>
                        <p className="text-foreground/80 leading-relaxed">
                          {item.descriptionKey 
                            ? t(`data.${item.type === "work" ? "experience" : "education"}.${item.descriptionKey}`) 
                            : (item.description || "")}
                        </p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </Section>
  );
}

