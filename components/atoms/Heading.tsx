import { HTMLAttributes, forwardRef } from "react";

interface HeadingProps extends Omit<HTMLAttributes<HTMLHeadingElement>, "ref"> {
  level?: 1 | 2 | 3 | 4 | 5 | 6;
}

export const Heading = forwardRef<HTMLHeadingElement, HeadingProps>(
  ({ level = 2, className = "", children, ...props }, ref) => {
    const baseStyles = "font-bold text-balance";
    const levelStyles = {
      1: "text-4xl md:text-5xl lg:text-6xl mb-6",
      2: "text-3xl md:text-4xl lg:text-5xl mb-8",
      3: "text-2xl md:text-3xl mb-6",
      4: "text-xl md:text-2xl mb-4",
      5: "text-lg md:text-xl mb-3",
      6: "text-base md:text-lg mb-2",
    };

    const headingProps = {
      ref,
      className: `${baseStyles} ${levelStyles[level]} ${className}`,
      ...props,
    };

    switch (level) {
      case 1:
        return <h1 {...headingProps}>{children}</h1>;
      case 2:
        return <h2 {...headingProps}>{children}</h2>;
      case 3:
        return <h3 {...headingProps}>{children}</h3>;
      case 4:
        return <h4 {...headingProps}>{children}</h4>;
      case 5:
        return <h5 {...headingProps}>{children}</h5>;
      case 6:
        return <h6 {...headingProps}>{children}</h6>;
      default:
        return <h2 {...headingProps}>{children}</h2>;
    }
  }
);

Heading.displayName = "Heading";

