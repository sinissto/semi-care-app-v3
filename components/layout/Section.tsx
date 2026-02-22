import React from "react";
import { cn } from "@/lib/utils";

interface SectionProps {
  children: React.ReactNode;
  sectionClassName: string;
  childClassName?: string;
}

const Section = ({
  children,
  sectionClassName,
  childClassName,
}: SectionProps) => {
  return (
    <section
      className={cn(
        "bg-transparent relative z-10 my-16 lg:my-36",
        sectionClassName
      )}
    >
      <div className={cn(`container mx-auto my-3.75`, childClassName)}>
        {children}
      </div>
    </section>
  );
};

Section.defaultProps = {
  sectionClassName: "",
  childClassName: "",
};

export default Section;
