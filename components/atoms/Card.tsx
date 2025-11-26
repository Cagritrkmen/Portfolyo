import { HTMLAttributes, forwardRef } from "react";
import { motion } from "framer-motion";

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  hover?: boolean;
}

export const Card = forwardRef<HTMLDivElement, CardProps>(
  ({ className = "", hover = false, children, ...props }, ref) => {
    const baseStyles = "bg-white dark:bg-gray-900 rounded-xl shadow-lg border border-gray-200 dark:border-gray-800 p-6 transition-all duration-300 backdrop-blur-sm";
    const hoverStyles = hover ? "hover:shadow-2xl hover:-translate-y-2 hover:shadow-purple-500/10 dark:hover:shadow-purple-500/20" : "";

    return (
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.5 }}
        className={`${baseStyles} ${hoverStyles} ${className}`}
        {...props}
      >
        {children}
      </motion.div>
    );
  }
);

Card.displayName = "Card";

