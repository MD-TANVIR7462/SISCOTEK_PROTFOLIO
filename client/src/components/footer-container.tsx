"use client";

import { cn } from "@/lib/cn";
import { usePathname } from "next/navigation";
import { ReactNode } from "react";

type FooterContainerProps = {
  children: ReactNode;
};

export function FooterContainer({ children }: Readonly<FooterContainerProps>) {
  const pathname = usePathname();

  return (
    <footer
      className={cn(
        "relative z-10 mt-auto space-y-14 border-t border-foreground/10 bg-background/60 pb-6 text-foreground/60 backdrop-blur-md backdrop-saturate-150",
        pathname === "/" ? "pt-[20rem]" : "mt-32 pt-12",
      )}
    >
      {children}
    </footer>
  );
}
