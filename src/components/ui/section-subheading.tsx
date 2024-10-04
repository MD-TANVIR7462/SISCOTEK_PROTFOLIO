import { cn } from "@/lib/cn";
import * as React from "react";
import { MotionDiv } from "../motion-div";

type SectionSubheadingProps = {
  children: React.ReactNode;
  className?: string;
};

export function SectionSubheading({
  children,
  className,
}: SectionSubheadingProps) {
  return (
    <MotionDiv
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.75,
        delay: 0.5,
      }}
      viewport={{
        once: true,
      }}
    >
      <h2
        className={cn(
          "mx-auto px-2 pb-[max(3.5dvw,_2rem)] text-center leading-relaxed text-foreground/80 md:text-[1.25rem]",
          className,
        )}
      >
        {children}
      </h2>
    </MotionDiv>
  );
}
