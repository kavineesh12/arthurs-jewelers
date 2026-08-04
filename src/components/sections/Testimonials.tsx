import starIcon from "../../assets/imgIcon.svg";
import arrowLeft from "../../assets/imgVuesaxLinearArrowLeft.svg";
import arrowRight from "../../assets/imgVuesaxLinearArrowRight.svg";
import ellipse10 from "../../assets/imgEllipse10.svg";
import Reveal from "../Reveal";

const reviews = [
  {
    quote:
      '"Tamara was very helpful finding the exact ring I was looking for. Would highly recommend working with them."',
    name: "Sloan V.",
    date: "June 2024",
  },
  {
    quote: '"Tamara was very professional and patient with assisting me. Great experience overall."',
    name: "Ethan C.",
    date: "May 2024",
  },
  {
    quote:
      '"Ann was incredibly kind and helped me immediately — she knew exactly what I was looking for."',
    name: "Amber B.",
    date: "April 2024",
  },
];

export default function Testimonials() {
  return (
    <section className="container-x relative w-full bg-white border-b border-border-cream flex flex-col gap-2 items-center justify-center overflow-hidden py-16 lg:py-20">
      <img
        src={ellipse10}
        alt=""
        className="hidden lg:block absolute -left-[152px] top-[393px] size-[347px] pointer-events-none select-none"
      />

      <div className="relative w-full flex flex-col gap-8">
        <div className="w-full flex items-end justify-between gap-6">
          <Reveal className="flex flex-col gap-4 text-core-05">
            <p className="font-body text-sm lg:text-base tracking-[2.4px] lg:tracking-[3.2px]">
              REAL CUSTOMERS
            </p>
            <h2 className="font-title font-bold text-[28px] sm:text-[36px] lg:text-5xl max-w-[432px]">
              Why <span className="text-[#adadad]">Minnesota Chooses</span> Arthur's
            </h2>
          </Reveal>
          {/* Arrows are desktop-only; below lg the rail is swipeable. */}
          <div className="hidden lg:flex gap-3 items-center shrink-0">
            <button
              type="button"
              aria-label="Previous"
              disabled
              className="bg-white border border-border-cream flex items-center p-3 opacity-40 cursor-not-allowed"
            >
              <img src={arrowLeft} alt="" className="size-6" />
            </button>
            <button
              type="button"
              aria-label="Next"
              className="bg-white border border-border-cream flex items-center p-3 hover:bg-core-02 transition-colors"
            >
              <img src={arrowRight} alt="" className="size-6" />
            </button>
          </div>
        </div>

        <div className="snap-rail lg:!overflow-visible gap-3 items-stretch w-full lg:flex">
          {reviews.map((review, i) => (
            <Reveal
              key={review.name}
              delay={i * 0.1}
              className="w-[80vw] sm:w-[52vw] lg:w-auto shrink-0 lg:shrink lg:flex-1 bg-white border border-border-cream rounded-[2px] pt-6 px-6 flex flex-col"
            >
              <div className="flex gap-0.5 pb-4">
                {Array.from({ length: 5 }).map((_, s) => (
                  <img key={s} src={starIcon} alt="" className="size-[11px]" />
                ))}
              </div>
              <p className="font-body text-sm text-core-05 pb-5 flex-1">{review.quote}</p>
              <div className="border-t border-black/[0.06] flex items-center gap-2.5 py-4">
                <div className="bg-[#4285f4] flex items-center justify-center rounded-full size-7 shrink-0">
                  <span className="font-['Montserrat'] font-bold text-xs text-white">
                    {review.name[0]}
                  </span>
                </div>
                <div className="flex flex-col">
                  <p className="font-body text-base text-core-05">{review.name}</p>
                  <p className="font-body text-sm text-core-06">{review.date}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
