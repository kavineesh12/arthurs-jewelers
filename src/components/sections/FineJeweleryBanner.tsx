import skyHands from "../../assets/imgImage69.jpg";
import handsCutout from "../../assets/imgImage70.png";
import ParallaxImage from "../ParallaxImage";
import TextLink from "../TextLink";

export default function FineJeweleryBanner() {
  return (
    <section className="relative h-[480px] sm:h-[620px] lg:h-[810px] w-full overflow-hidden">
      {/* Sky sits furthest back, so it drifts least. */}
      <ParallaxImage src={skyHands} distance={28} />

      {/* Inset from both edges instead of a fixed 1286px width. */}
      <div className="absolute left-5 right-5 sm:left-8 sm:right-8 lg:left-20 lg:right-20 top-6 lg:top-[58px] flex items-end p-5 sm:p-6 lg:p-8 overflow-hidden backdrop-blur-[28px] bg-[rgba(84,134,182,0.6)]">
        {/* Label/CTA stack on phones so the CTA never squeezes the headline. */}
        <div className="flex-1 flex flex-col sm:flex-row gap-6 sm:gap-12 items-start sm:items-end">
          <div className="flex-1 flex flex-col gap-2 items-start text-white">
            <p className="font-body text-xs sm:text-sm lg:text-base tracking-[2.4px] lg:tracking-[3.2px]">
              FINE JEWELERY
            </p>
            <p className="font-title font-bold text-2xl sm:text-[36px] lg:text-5xl leading-tight lg:leading-[51px]">
              JEWELERY FOR <br />
              EVERY MOMENT
            </p>
          </div>
          <TextLink color="white">EXPLORE FINE JEWELERY</TextLink>
        </div>
      </div>

      {/* Hands cutout renders ABOVE the frosted panel (Figma layer order) and is
          the nearest layer, so it drifts most — the hands appear to rise past
          the banner as you scroll. */}
      <ParallaxImage src={handsCutout} distance={70} />
    </section>
  );
}
