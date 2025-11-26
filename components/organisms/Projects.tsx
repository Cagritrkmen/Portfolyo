"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { ExternalLink, Github } from "lucide-react";
import { useLanguage } from "@/components/providers/LanguageProvider";
import { Section } from "@/components/atoms/Section";
import { Heading } from "@/components/atoms/Heading";
import { Card } from "@/components/atoms/Card";
import { Button } from "@/components/atoms/Button";
import { LoadingSkeleton } from "@/components/molecules/LoadingSkeleton";
import portfolioData from "@/data/portfolioData.json";

function ProjectImage({ src, alt }: { src: string; alt: string }) {
  const [imageLoading, setImageLoading] = useState(true);

  return (
    <>
      {imageLoading && (
        <div className="absolute inset-0 z-10">
          <LoadingSkeleton type="image" className="w-full h-full" />
        </div>
      )}
      <Image
        src={src}
        alt={alt}
        fill
        className={`object-cover transition-transform duration-500 group-hover:scale-110 ${imageLoading ? "opacity-0" : "opacity-100"}`}
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        onLoad={() => setImageLoading(false)}
        onError={(e) => {
          const target = e.target as HTMLImageElement;
          target.style.display = "none";
          setImageLoading(false);
        }}
      />
    </>
  );
}

export function Projects() {
  const { t } = useLanguage();

  const getProjectDescription = (project: typeof portfolioData.projects[0]) => {
    if (project.descriptionKey) {
      return t(`data.projects.${project.descriptionKey}`);
    }
    return "";
  };

  return (
    <Section id="projects">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <Heading level={2} className="text-center mb-12">
            {t("projects.title")}
          </Heading>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mb-3">
          {portfolioData.projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card hover className="h-full flex flex-col group">
                <div className="relative w-full aspect-video mb-4 rounded-lg overflow-hidden bg-gray-200 dark:bg-gray-800">
                  <ProjectImage 
                    src={project.image}
                    alt={project.title}
                  />
                  {/* Blue overlay on hover */}
                  <div className="absolute inset-0 bg-blue-600/0 group-hover:bg-blue-600/20 transition-colors duration-300" />
                  
                  {/* Tech badges overlay */}
                  <div className="absolute bottom-4 left-4 right-4 flex flex-wrap gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    {project.technologies.slice(0, 3).map((tech) => (
                      <motion.span
                        key={tech}
                        initial={{ y: 10, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.1 }}
                        className="px-2 py-1 text-xs font-medium rounded-full bg-white/95 dark:bg-gray-900/95 text-foreground backdrop-blur-sm border border-blue-200 dark:border-blue-800"
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </div>
                </div>
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-foreground/70 mb-4 flex-grow">{getProjectDescription(project)}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, techIndex) => {
                    return (
                      <motion.span
                        key={tech}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: techIndex * 0.05 }}
                        whileHover={{ scale: 1.1, y: -2 }}
                        className="px-3 py-1 text-xs font-medium rounded-full bg-blue-100 dark:bg-blue-900/50 text-blue-700 dark:text-blue-300 border border-blue-200 dark:border-blue-800 hover:bg-blue-200 dark:hover:bg-blue-800/50 transition-colors cursor-default"
                      >
                        {tech}
                      </motion.span>
                    );
                  })}
                </div>
                <div className="flex gap-2">
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => window.open(project.demo, "_blank", "noopener,noreferrer")}
                    className="flex-1"
                  >
                    <ExternalLink className="w-4 h-4 mr-2 flex-shrink-0" />
                    {t("projects.viewDemo")}
                  </Button>
                  <Button
                    variant="secondary"
                    size="sm"
                    onClick={() => window.open(project.github, "_blank", "noopener,noreferrer")}
                    className="flex-1"
                  >
                    <Github className="w-4 h-4 mr-2 flex-shrink-0" />
                    {t("projects.viewCode")}
                  </Button>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  );
}

