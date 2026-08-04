import type { ReactNode } from "react";
import { motion } from "framer-motion";

type TextLinkProps = {
  children: ReactNode;
  color?: "navy" | "white" | "muted";
  className?: string;
  labelClassName?: string;
  href?: string;
};

const colorMap = {
  navy: "text-main-01",
  white: "text-white",
  muted: "text-core-06",
};

export default function TextLink({
  children,
  color = "navy",
  className = "",
  labelClassName = "tracking-[0.96px]",
  href = "#",
}: TextLinkProps) {
  return (
    <motion.a
      href={href}
      initial="rest"
      whileHover="hover"
      animate="rest"
      className={`group inline-flex flex-col gap-2 w-fit ${colorMap[color]} ${className}`}
    >
      <span className={`font-body text-xs uppercase whitespace-nowrap ${labelClassName}`}>
        {children}
      </span>
      <span className="relative block h-px w-full overflow-hidden bg-current/30">
        <motion.span
          className="absolute inset-0 bg-current"
          variants={{ rest: { x: "-100%" }, hover: { x: "0%" } }}
          transition={{ duration: 0.35, ease: "easeOut" }}
        />
      </span>
    </motion.a>
  );
}
