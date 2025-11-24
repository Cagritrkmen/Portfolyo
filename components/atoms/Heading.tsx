import { HTMLAttributes, forwardRef } from "react";

interface HeadingProps extends HTMLAttributes<HTMLHeadingElement> {
  level?: 1 | 2 | 3 | 4 | 5 | 6;
}

export const Heading = forwardRef<HTMLHeadingElement, HeadingProps>(
  ({ level = 2, className = "", children, ...props }, ref) => {
    const Tag = `h${level}` as keyof JSX.IntrinsicElements;
    
    const baseStyles = "font-bold text-balance";
    const levelStyles = {
      1: "text-4xl md:text-5xl lg:text-6xl mb-6",
      2: "text-3xl md:text-4xl lg:text-5xl mb-8",
      3: "text-2xl md:text-3xl mb-6",
      4: "text-xl md:text-2xl mb-4",
      5: "text-lg md:text-xl mb-3",
      6: "text-base md:text-lg mb-2",
    };

    return (
      <Tag
        ref={ref}
        className={`${baseStyles} ${levelStyles[level]} ${className}`}
        {...props}
      >
        {children}
      </Tag>
    );
  }
);

Heading.displayName = "Heading";

