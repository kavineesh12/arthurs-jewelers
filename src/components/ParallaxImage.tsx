import { useRef } from "react";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";

type ParallaxImageProps = {
  src: string;
  alt?: string;
  /** How far the image drifts (px) across the section's scroll range. Larger
   *  values read as "closer to the viewer". */
  distance?: number;
  className?: string;
  /** Crop for the image itself. The default is oversized (120% tall, offset
   *  -10%) so the drift never exposes an edge inside the clipping wrapper. */
  imgClassName?: string;
};

export default function ParallaxImage({
  src,
  alt = "",
  distance = 60,
  className = "",
  imgClassName = "absolute left-0 top-[-10%] h-[120%] w-full max-w-none object-cover",
}: ParallaxImageProps) {
  const ref = useRef<HTMLDivElement>(null);
  const reduceMotion = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(
    scrollYProgress,
    [0, 1],
    reduceMotion ? [0, 0] : [-distance, distance]
  );

  return (
    <div
      ref={ref}
      className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}
    >
      <motion.img src={src} alt={alt} style={{ y }} className={imgClassName} />
    </div>
  );
}
