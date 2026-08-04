import ringSetting from "../../assets/imgContainer1.jpg";
import ringDiamond from "../../assets/imgContainer2.jpg";
import ringCustom from "../../assets/imgContainer3.jpg";
import Reveal from "../Reveal";
import TextLink from "../TextLink";

const cards = [
  {
    image: ringSetting,
    title: "Start with A Setting",
    body: "Explore engagement ring styles that speak to you.",
    cta: "EXPLORE SETTINGS",
  },
  {
    image: ringDiamond,
    title: "Start with A Diamond",
    body: "Find the perfect diamond by shape, size, and budget.",
    cta: "SHOP DIAMONDS",
  },
  {
    image: ringCustom,
    title: "Create with AI & Our Designers",
    body: "Bring your vision to life with our expert designers to create a ring uniquely yours.",
    cta: "EXPLORE CUSTOM",
  },
];

export default function FindYourRing() {
  return (
    <section className="container-x w-full bg-core-02 py-16 lg:py-[120px] flex flex-col gap-12 lg:gap-14 items-center justify-center">
      <Reveal className="flex flex-col gap-2 items-center text-center w-full">
        <p className="font-body text-sm lg:text-base text-main-04 tracking-[2.4px] lg:tracking-[3.2px]">
          YOUR JOURNEY YOUR WAY
        </p>
        <h2 className="font-title font-bold text-[32px] sm:text-[40px] lg:text-5xl text-core-05 text-balance">
          Find Your Perfect Ring
        </h2>
        <p className="font-body text-base text-core-06 max-w-[330px]">
          Three beautiful ways to begin your forever.
        </p>
      </Reveal>

      {/* Stacked on phones, 3-up from md. */}
      <div className="w-full flex flex-col md:flex-row gap-10 md:gap-8 items-start">
        {cards.map((card, i) => (
          <Reveal
            key={card.title}
            delay={i * 0.1}
            className="w-full md:flex-1 flex flex-col gap-6 self-stretch"
          >
            <div className="w-full h-[320px] sm:h-[380px] lg:h-[421px] overflow-hidden bg-white">
              <img src={card.image} alt={card.title} className="size-full object-cover" />
            </div>
            <div className="flex-1 flex flex-col gap-6 w-full">
              <div className="flex-1 flex flex-col gap-2 w-full">
                <h3 className="font-title text-2xl lg:text-[27px] leading-8 text-core-05">
                  {card.title}
                </h3>
                <p className="font-body text-sm text-core-06">{card.body}</p>
              </div>
              <TextLink color="muted">{card.cta}</TextLink>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
