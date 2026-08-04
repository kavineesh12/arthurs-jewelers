import { motion } from "framer-motion";
import heroVideo from "../../assets/heroVideo.mp4";
import dotOuter from "../../assets/imgEllipse9.svg";
import dotInner from "../../assets/imgEllipse8.svg";
import dot from "../../assets/imgComponent95.svg";
import TextLink from "../TextLink";

export default function Hero() {
  return (
    <section className="relative h-[78svh] min-h-[480px] lg:h-[797px] w-full overflow-hidden flex items-end justify-center">
      <video
        className="absolute inset-0 size-full object-cover"
        src={heroVideo}
        autoPlay
        muted
        loop
        playsInline
      />

      {/* Scrim for text contrast. Essential on phones, where the tall crop can
          put bright sky/water directly behind the white headline. */}
      <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black/55 via-black/25 to-transparent pointer-events-none" />

      <motion.div
        className="container-x relative z-10 flex flex-col items-center gap-6 lg:gap-8 pb-10"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        {/* No whitespace-nowrap: at 48px this string is ~595px and would push
            the page sideways on phones. It wraps below lg instead. */}
        <h1 className="font-title font-bold text-[32px] leading-[38px] sm:text-[40px] sm:leading-[46px] lg:text-5xl lg:leading-[51px] text-white text-center text-balance">
          Where Every Love Story Begins
        </h1>

        <TextLink color="white" labelClassName="tracking-[1.2px]">
          FIND YOUR PERFECT RING
        </TextLink>

        {/* 5 static dots per Figma (Component 94 active + 4 inactive) */}
        <div className="flex gap-2 items-start">
          <span className="relative size-6 shrink-0">
            <span className="absolute inset-[47.92%_-2.08%_29.65%_91.02%]">
              <img src={dotOuter} alt="" className="block max-w-none size-full" />
            </span>
            <img src={dotInner} alt="" className="absolute left-1.5 top-1.5 size-3" />
          </span>
          {[1, 2, 3, 4].map((i) => (
            <img key={i} src={dot} alt="" className="size-6 shrink-0" />
          ))}
        </div>
      </motion.div>
    </section>
  );
}
