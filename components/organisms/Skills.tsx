"use client";

import { motion } from "framer-motion";
import * as Icons from "lucide-react";
import { useLanguage } from "@/components/providers/LanguageProvider";
import { Section } from "@/components/atoms/Section";
import { Heading } from "@/components/atoms/Heading";
import { Card } from "@/components/atoms/Card";
import portfolioData from "@/data/portfolioData.json";

const iconMap: Record<string, keyof typeof Icons> = {
  Figma: "Figma",
  Palette: "Palette",
  Layout: "Layout",
  Layers: "Layers",
  Code: "Code",
  Code2: "Code2",
  FileCode: "FileCode",
  GitBranch: "GitBranch",
  Package: "Package",
  Cloud: "Cloud",
};

export function Skills() {
  const { t } = useLanguage();

  const renderSkillCategory = (category: keyof typeof portfolioData.skills, title: string) => {
    const skills = portfolioData.skills[category];
    
    return (
      <motion.div
        key={category}
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.5 }}
      >
        <Card hover className="h-full">
          <h3 className="text-xl font-bold mb-6">{title}</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {skills.map((skill, index) => {
              const IconComponent = Icons[iconMap[skill.icon] || "Code"] as React.ComponentType<{ className?: string }>;
              
              return (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.3 }}
                  whileHover={{ scale: 1.05, y: -5 }}
                  className="flex flex-col items-center p-4 rounded-lg bg-gray-50 dark:bg-gray-800 hover:bg-blue-50 dark:hover:bg-blue-950/30 hover:shadow-lg hover:border-blue-300 dark:hover:border-blue-700 border border-transparent transition-all duration-300 group cursor-pointer"
                >
                  {IconComponent && (
                    <motion.div
                      className="mb-2 relative"
                      whileHover={{ rotate: [0, -10, 10, -10, 0], scale: 1.15 }}
                      transition={{ duration: 0.5 }}
                    >
                      <IconComponent className="w-8 h-8 text-foreground group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300" />
                    </motion.div>
                  )}
                  <span className="text-sm font-medium text-center group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">{skill.name}</span>
                  {/* Progress bar effect on hover */}
                  <motion.div
                    className="absolute bottom-0 left-0 right-0 h-1 bg-blue-500 rounded-b-lg"
                    initial={{ scaleX: 0 }}
                    whileHover={{ scaleX: 1 }}
                    transition={{ duration: 0.3 }}
                  />
                </motion.div>
              );
            })}
          </div>
        </Card>
      </motion.div>
    );
  };

  return (
    <Section id="skills">
      <div className="container mx-auto px-4 md:px-6 lg:px-8 pb-1">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <Heading level={2} className="text-center mb-12">
            {t("skills.title")}
          </Heading>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 md:gap-8">
          {renderSkillCategory("uiux", t("skills.uiux"))}
          {renderSkillCategory("frontend", t("skills.frontend"))}
          {renderSkillCategory("tools", t("skills.tools"))}
        </div>
      </div>
    </Section>
  );
}

