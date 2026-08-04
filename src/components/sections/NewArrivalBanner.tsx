import bgImage from "../../assets/imgFrame2634.jpg";
import ParallaxImage from "../ParallaxImage";
import Reveal from "../Reveal";
import TextLink from "../TextLink";

export default function NewArrivalBanner() {
  return (
    <section className="relative h-[828px] w-full overflow-hidden">
      <ParallaxImage src={bgImage} distance={60} />
      <div className="absolute inset-x-0 bottom-0 h-[488px] bg-gradient-to-b from-[rgba(17,17,17,0)] to-[rgba(17,17,17,0.8)] flex items-end justify-center pb-[100px]">
        <Reveal className="flex flex-col gap-12 items-center">
          <div className="flex flex-col gap-3 items-center text-center text-white">
            <p className="font-body text-base tracking-[3.2px]">NEW ARRIVAL</p>
            <p className="font-title font-bold text-5xl whitespace-nowrap">
              Fine Jewelry &amp; Tennis Bracelets
            </p>
          </div>
          <TextLink color="white">SHOP COLLECTION</TextLink>
        </Reveal>
      </div>
    </section>
  );
}
