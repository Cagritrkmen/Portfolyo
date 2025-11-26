"use client";

import { motion } from "framer-motion";

interface LoadingSkeletonProps {
  type?: "image" | "text" | "card" | "avatar";
  className?: string;
}

export function LoadingSkeleton({ type = "text", className = "" }: LoadingSkeletonProps) {
  const baseClasses = "animate-pulse bg-gray-200 dark:bg-gray-800 rounded";

  if (type === "image") {
    return (
      <div className={`${baseClasses} ${className}`}>
        <motion.div
          className="w-full h-full bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 dark:from-gray-800 dark:via-gray-700 dark:to-gray-800"
          animate={{
            backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "linear",
          }}
          style={{
            backgroundSize: "200% 100%",
          }}
        />
      </div>
    );
  }

  if (type === "avatar") {
    return (
      <div className={`${baseClasses} rounded-full ${className}`}>
        <motion.div
          className="w-full h-full rounded-full bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 dark:from-gray-800 dark:via-gray-700 dark:to-gray-800"
          animate={{
            backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "linear",
          }}
          style={{
            backgroundSize: "200% 100%",
          }}
        />
      </div>
    );
  }

  if (type === "card") {
    return (
      <div className={`${baseClasses} p-6 ${className}`}>
        <div className="space-y-4">
          <div className="h-4 bg-gray-300 dark:bg-gray-700 rounded w-3/4">
            <motion.div
              className="h-full bg-gradient-to-r from-gray-300 via-gray-400 to-gray-300 dark:from-gray-700 dark:via-gray-600 dark:to-gray-700 rounded"
              animate={{
                backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "linear",
              }}
              style={{
                backgroundSize: "200% 100%",
              }}
            />
          </div>
          <div className="h-4 bg-gray-300 dark:bg-gray-700 rounded w-full">
            <motion.div
              className="h-full bg-gradient-to-r from-gray-300 via-gray-400 to-gray-300 dark:from-gray-700 dark:via-gray-600 dark:to-gray-700 rounded"
              animate={{
                backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "linear",
              }}
              style={{
                backgroundSize: "200% 100%",
              }}
            />
          </div>
          <div className="h-4 bg-gray-300 dark:bg-gray-700 rounded w-5/6">
            <motion.div
              className="h-full bg-gradient-to-r from-gray-300 via-gray-400 to-gray-300 dark:from-gray-700 dark:via-gray-600 dark:to-gray-700 rounded"
              animate={{
                backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "linear",
              }}
              style={{
                backgroundSize: "200% 100%",
              }}
            />
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className={`${baseClasses} h-4 ${className}`}>
      <motion.div
        className="h-full bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 dark:from-gray-800 dark:via-gray-700 dark:to-gray-800 rounded"
        animate={{
          backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "linear",
        }}
        style={{
          backgroundSize: "200% 100%",
        }}
      />
    </div>
  );
}

