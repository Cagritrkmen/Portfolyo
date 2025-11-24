import { HTMLAttributes, forwardRef } from "react";

interface SectionProps extends HTMLAttributes<HTMLElement> {
  id: string;
}

export const Section = forwardRef<HTMLElement, SectionProps>(
  ({ id, className = "", children, ...props }, ref) => {
    return (
      <section
        ref={ref}
        id={id}
        className={`py-20 md:py-32 px-4 md:px-6 lg:px-8 ${className}`}
        {...props}
      >
        {children}
      </section>
    );
  }
);

Section.displayName = "Section";

