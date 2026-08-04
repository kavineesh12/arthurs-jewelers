import bgImage from "../../assets/imgFrame2634.jpg";
import ParallaxImage from "../ParallaxImage";
import Reveal from "../Reveal";
import TextLink from "../TextLink";

export default function NewArrivalBanner() {
  return (
    <section className="relative h-[520px] sm:h-[660px] lg:h-[828px] w-full overflow-hidden">
      <ParallaxImage src={bgImage} distance={60} />
      <div className="container-x absolute inset-x-0 bottom-0 h-[60%] lg:h-[488px] bg-gradient-to-b from-[rgba(17,17,17,0)] to-[rgba(17,17,17,0.8)] flex items-end justify-center pb-14 lg:pb-[100px]">
        <Reveal className="flex flex-col gap-8 lg:gap-12 items-center">
          <div className="flex flex-col gap-3 items-center text-center text-white">
            <p className="font-body text-xs sm:text-sm lg:text-base tracking-[2.4px] lg:tracking-[3.2px]">
              NEW ARRIVAL
            </p>
            {/* nowrap only from lg — this line is ~700px at full size. */}
            <p className="font-title font-bold text-[28px] sm:text-[38px] lg:text-5xl text-balance lg:whitespace-nowrap">
              Fine Jewelry &amp; Tennis Bracelets
            </p>
          </div>
          <TextLink color="white">SHOP COLLECTION</TextLink>
        </Reveal>
      </div>
    </section>
  );
}
