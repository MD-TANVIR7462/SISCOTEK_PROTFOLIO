"use client";

import { motion, MotionProps } from "framer-motion";
import { ReactNode } from "react";

type MotionDivProps = MotionProps & {
  children: ReactNode;
  className?: string;
};

export function MotionDiv({
  children,
  className,
  ...motionProps
}: Readonly<MotionDivProps>) {
  return (
    <motion.div className={className} {...motionProps}>
      {children}
    </motion.div>
  );
}
