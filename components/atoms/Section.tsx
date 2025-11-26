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
        className={`py-24 md:py-48 px-6 md:px-6 lg:px-12 relative ${className}`}
        {...props}
      >
        {/* Grid background pattern - tüm section'larda */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080801a_1px,transparent_1px),linear-gradient(to_bottom,#8080801a_1px,transparent_1px)] bg-[size:24px_24px] dark:bg-[linear-gradient(to_right,#ffffff0a_1px,transparent_1px),linear-gradient(to_bottom,#ffffff0a_1px,transparent_1px)]" />
        </div>
        <div className="relative z-10">
          {children}
        </div>
      </section>
    );
  }
);

Section.displayName = "Section";

