import { motion } from "framer-motion"
import type { HTMLMotionProps } from "framer-motion"

type WithClassName = {
  className?: string
}

export const MotionDiv = motion.div as React.ComponentType<HTMLMotionProps<"div"> & WithClassName>
export const MotionNav = motion.nav as React.ComponentType<HTMLMotionProps<"nav"> & WithClassName>
export const MotionH1 = motion.h1 as React.ComponentType<HTMLMotionProps<"h1"> & WithClassName>
export const MotionP = motion.p as React.ComponentType<HTMLMotionProps<"p"> & WithClassName>
export const MotionSection = motion.section as React.ComponentType<HTMLMotionProps<"section"> & WithClassName> 