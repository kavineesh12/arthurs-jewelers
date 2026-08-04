import { useEffect, useRef, useState } from "react";
import { motion, useMotionTemplate, useScroll, useTransform } from "framer-motion";
import verragioImg from "../../assets/imgFrame2503.jpg";
import tacoriImg from "../../assets/imgFrame2506.jpg";
import shyCreationImg from "../../assets/imgImageShyCreation.jpg";
import simonGImg from "../../assets/imgFrame2505.jpg";
import Reveal from "../Reveal";
import TextLink from "../TextLink";

type Designer = {
  name: string;
  tagline: string;
  image: string;
  crop: { width: string; height: string; top: string; left: string };
};

const designers: Designer[] = [
  {
    name: "VERRAGIO",
    tagline: "Unlike Any Other Ring",
    image: verragioImg,
    crop: { width: "179.92%", height: "160.2%", top: "-35.07%", left: "-33.92%" },
  },
  {
    name: "TACORI",
    tagline: "Handcrafted in California",
    image: tacoriImg,
    crop: { width: "126.78%", height: "112.44%", top: "-1.84%", left: "-13.39%" },
  },
  {
    name: "SHY CREATION",
    tagline: "Fine Jewelry. Everyday Luxury.",
    image: shyCreationImg,
    crop: { width: "138.83%", height: "154.95%", top: "0%", left: "-19.41%" },
  },
  {
    name: "SIMON G",
    tagline: "Bold. Beautiful. Unmistakable.",
    image: simonGImg,
    crop: { width: "171.74%", height: "229.68%", top: "-64.84%", left: "-34.55%" },
  },
];

// Geometry lifted directly from bloom3d.studio's services carousel:
//   --total: 14; --inner-angle: 360/14; --radius: item-width / sin(inner-angle)
// 4 real cards sit on a 14-slot ring, so neighbours are only ~25.7° apart —
// a gentle arc where cards sit flush side-by-side. No `perspective` property,
// so cards stay flat rectangles (Bloom does the same) and just compress
// slightly as they curve away.
const ITEM_WIDTH = 605;
const ITEM_HEIGHT = 586;
const GAP = 32;
const SLOTS = 14;
const TOTAL = designers.length;
const INNER_ANGLE = 360 / SLOTS;
const RADIUS = (ITEM_WIDTH + GAP) / Math.sin((INNER_ANGLE * Math.PI) / 180);

function DesignerCard({ designer, index }: { designer: Designer; index: number }) {
  return (
    <motion.div
      initial="rest"
      animate="rest"
      whileHover="hover"
      className="absolute inset-0 overflow-hidden cursor-pointer [backface-visibility:hidden]"
      style={{
        transform: `rotateY(${INNER_ANGLE * index}deg) translateZ(${RADIUS}px)`,
      }}
    >
      <motion.img
        src={designer.image}
        alt={designer.name}
        className="absolute max-w-none"
        style={designer.crop}
        variants={{ rest: { scale: 1 }, hover: { scale: 1.06 } }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      />

      {/* Resting bottom gradient, matches Figma default state */}
      <div className="absolute inset-x-0 bottom-0 h-[162px] bg-gradient-to-b from-[rgba(17,17,17,0)] to-[rgba(17,17,17,0.8)]" />
      {/* Full-card darken on hover, matches Figma hover state */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-b from-[6.79%] from-[rgba(17,17,17,0)] to-[76.235%] to-[rgba(17,17,17,0.8)]"
        variants={{ rest: { opacity: 0 }, hover: { opacity: 1 } }}
        transition={{ duration: 0.4, ease: "easeOut" }}
      />

      <div className="absolute left-4 top-[475px] flex flex-col gap-2 w-[370px]">
        <p className="font-title text-5xl leading-[51px] text-white whitespace-nowrap">
          {designer.name}
        </p>
        <p className="font-body text-base text-white">{designer.tagline}</p>
      </div>

      <motion.div
        className="absolute right-4 top-[522px]"
        variants={{
          rest: { opacity: 0, x: -8 },
          hover: { opacity: 1, x: 0 },
        }}
        transition={{ duration: 0.35, ease: "easeOut" }}
      >
        <TextLink color="white">EXPLORE</TextLink>
      </motion.div>
    </motion.div>
  );
}

export default function FeaturedDesigners() {
  const containerRef = useRef<HTMLDivElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const [stageScale, setStageScale] = useState(1);

  // Shrink the card stage just enough that padding + heading + full card
  // always fit inside the viewport while the section is pinned, so the
  // designer name at the bottom of the card is never cut off.
  useEffect(() => {
    const measure = () => {
      const headingH = headerRef.current?.offsetHeight ?? 150;
      const gap = 48; // gap-12 between heading and stage
      const available = window.innerHeight - 2 * 120 - headingH - gap;
      setStageScale(Math.min(1, Math.max(available / ITEM_HEIGHT, 0.5)));
    };
    measure();
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, []);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });
  // Rotate the ring so the LAST card faces the viewer at the start and the
  // FIRST card faces the viewer at the end, sweeping through the others.
  const ringRotation = useTransform(
    scrollYProgress,
    [0.05, 0.95],
    [-INNER_ANGLE * (TOTAL - 1), 0]
  );
  const ringTransform = useMotionTemplate`translateZ(${-RADIUS}px) rotateY(${ringRotation}deg)`;

  return (
    <section ref={containerRef} className="relative w-full bg-white" style={{ height: "300vh" }}>
      <div className="sticky top-0 w-full flex flex-col items-center gap-12 overflow-hidden py-[120px]">
        <Reveal className="flex flex-col gap-4 items-center text-center text-core-05 px-20">
          <div ref={headerRef} className="flex flex-col gap-4 items-center">
            <p className="font-body text-base tracking-[3.2px]">SIGNATURE COLLECTIONS</p>
            <h2 className="font-title font-bold text-5xl">Featured Designers</h2>
          </div>
        </Reveal>

        {/* Scaled shell reserves the shrunken layout size... */}
        <div
          className="shrink-0"
          style={{ width: ITEM_WIDTH * stageScale, height: ITEM_HEIGHT * stageScale }}
        >
          {/* ...while the full-size stage scales down to fit it. */}
          <div
            className="relative origin-top-left"
            style={{
              width: ITEM_WIDTH,
              height: ITEM_HEIGHT,
              transform: `scale(${stageScale})`,
            }}
          >
            <motion.div
              className="absolute inset-0 [transform-style:preserve-3d]"
              style={{ transform: ringTransform }}
            >
              {designers.map((designer, i) => (
                <DesignerCard key={designer.name} designer={designer} index={i} />
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
