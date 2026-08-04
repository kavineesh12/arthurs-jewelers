import skyHands from "../../assets/imgImage69.jpg";
import handsCutout from "../../assets/imgImage70.png";
import ParallaxImage from "../ParallaxImage";
import TextLink from "../TextLink";

export default function FineJeweleryBanner() {
  return (
    <section className="relative h-[810px] w-full overflow-hidden">
      {/* Sky sits furthest back, so it drifts least. */}
      <ParallaxImage src={skyHands} distance={28} />

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

      {/* Hands cutout renders ABOVE the frosted panel (Figma layer order) and is
          the nearest layer, so it drifts most — the hands appear to rise past
          the banner as you scroll. */}
      <ParallaxImage src={handsCutout} distance={70} />
    </section>
  );
}
