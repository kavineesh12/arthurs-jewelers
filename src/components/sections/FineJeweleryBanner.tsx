import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import skyHands from "../../assets/imgImage69.jpg";
import handsCutout from "../../assets/imgImage70.png";
import TextLink from "../TextLink";

export default function FineJeweleryBanner() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [-20, 20]);

  return (
    <section ref={ref} className="relative h-[810px] w-full overflow-hidden">
      <img src={skyHands} alt="" className="absolute inset-0 size-full object-cover" />

      <div className="absolute left-20 top-[58px] w-[1286px] max-w-[calc(100%-160px)] flex items-end p-8 overflow-hidden backdrop-blur-[28px] bg-[rgba(84,134,182,0.6)]">
        <div className="flex-1 flex gap-12 items-end">
          <div className="flex-1 flex flex-col gap-2 items-start text-white">
            <p className="font-body text-base tracking-[3.2px]">FINE JEWELERY</p>
            <p className="font-title font-bold text-5xl leading-[51px]">
              JEWELERY FOR <br />
              EVERY MOMENT
            </p>
          </div>
          <TextLink color="white">EXPLORE FINE JEWELERY</TextLink>
        </div>
      </div>

      {/* Hands cutout renders ABOVE the frosted panel (Figma layer order), so the
          hands appear to pop out over the banner. pointer-events-none keeps the
          panel's link clickable through the transparent areas. */}
      <motion.img
        src={handsCutout}
        alt=""
        style={{ y }}
        className="absolute inset-0 size-full object-cover pointer-events-none"
      />
    </section>
  );
}
