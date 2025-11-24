"use client";

import { ButtonHTMLAttributes } from "react";
import { motion } from "framer-motion";
import { LucideIcon } from "lucide-react";

interface IconButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  icon: LucideIcon;
  label: string;
  ariaLabel?: string;
}

export function IconButton({ icon: Icon, label, ariaLabel, className = "", ...props }: IconButtonProps) {
  return (
    <motion.button
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      className={`p-2 rounded-lg bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-foreground ${className}`}
      aria-label={ariaLabel || label}
      {...props}
    >
      <Icon className="w-5 h-5" aria-hidden="true" />
      <span className="sr-only">{label}</span>
    </motion.button>
  );
}

