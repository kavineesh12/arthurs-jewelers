import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion, useScroll, useTransform } from "framer-motion";
import coupleMoment from "../../assets/imgImageCoupleMoment.jpg";
import couple71 from "../../assets/imgImage71.jpg";
import couple73 from "../../assets/imgImage73.jpg";
import couple72 from "../../assets/imgImage72.jpg";
import ellipse10 from "../../assets/imgEllipse10.svg";
import Reveal from "../Reveal";
import TextLink from "../TextLink";

const quote =
  '"We walked in not knowing what we wanted and walked out with the most beautiful ring. The no-pressure experience was everything."';

const stories = [
  { names: "Emily & Jake", image: coupleMoment },
  { names: "Vanessa and Reese", image: couple71 },
  { names: "Michele + Dylan", image: couple73 },
  { names: "Mari & Jonathan", image: couple72 },
];

type StoryImageProps = {
  image: string;
  alt: string;
  setRef: (el: HTMLDivElement | null) => void;
};

function StoryImage({ image, alt, setRef }: StoryImageProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [1, 1.15, 1.3]);

  return (
    <div
      ref={(el) => {
        ref.current = el;
        setRef(el);
      }}
      className="w-full aspect-[839/1085] max-h-[1085px] overflow-hidden bg-white ml-auto max-w-[839px]"
    >
      <motion.img src={image} alt={alt} style={{ scale }} className="size-full object-cover" />
    </div>
  );
}

export default function LoveStories() {
  const [activeIndex, setActiveIndex] = useState(0);
  const imageRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = imageRefs.current.indexOf(entry.target as HTMLDivElement);
            if (index !== -1) setActiveIndex(index);
          }
        });
      },
      { rootMargin: "-35% 0px -35% 0px", threshold: 0 }
    );
    imageRefs.current.forEach((el) => el && observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const active = stories[activeIndex];

  return (
    <section className="relative w-full bg-core-02 pt-[120px]">
      <img
        src={ellipse10}
        alt=""
        className="absolute -left-[152px] top-[280px] size-[347px] pointer-events-none select-none"
      />

      <Reveal className="relative flex flex-col gap-6 items-center text-center max-w-[600px] mx-auto px-6">
        <p className="font-body text-base text-core-05 tracking-[3.2px]">
          ARTHUR’S LOVE STORIES
        </p>
        <h2 className="font-title font-bold text-5xl text-core-05">
          Every Ring Has a Love Story
        </h2>
        <p className="font-body text-base text-core-06">
          For nearly four decades, Arthur's Jewelers has had the privilege of helping thousands
          of couples begin their forever. Every engagement ring marks the start of a unique
          journey, and we're honored to be a small part of each one. Explore the real stories,
          unforgettable proposals, and lasting memories shared by the Arthur's Jewelers family.
        </p>
        <TextLink color="navy">READ ALL</TextLink>
      </Reveal>

      <div className="relative flex gap-12 mt-20 pl-20">
        {/* pb keeps the sticky text from riding flush into the section's bottom edge */}
        <div className="w-[370px] shrink-0 relative pb-[120px]">
          <div className="sticky top-32 h-fit overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeIndex}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -16 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                className="flex flex-col gap-14"
              >
                <div className="flex flex-col gap-4">
                  <h3 className="font-title text-5xl text-core-05">{active.names}</h3>
                  <p className="font-body text-base text-core-06">{quote}</p>
                </div>
                <TextLink color="navy">READ THEIR STORY</TextLink>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        <div className="flex-1 flex flex-col gap-0">
          {stories.map((story, i) => (
            <StoryImage
              key={story.names}
              image={story.image}
              alt={story.names}
              setRef={(el) => {
                imageRefs.current[i] = el;
              }}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
