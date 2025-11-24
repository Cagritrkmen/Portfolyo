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
                  className="flex flex-col items-center p-4 rounded-lg bg-gray-50 dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
                >
                  {IconComponent && (
                    <IconComponent className="w-8 h-8 mb-2 text-foreground" />
                  )}
                  <span className="text-sm font-medium text-center">{skill.name}</span>
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
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
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

