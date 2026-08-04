import categoryRings from "../../assets/categoryRings.jpg";
import categoryBands from "../../assets/categoryBands.jpg";
import categoryGemstones from "../../assets/categoryGemstones.jpg";
import categoryNecklaces from "../../assets/categoryNecklaces.jpg";
import categoryEarrings from "../../assets/categoryEarrings.jpg";
import Reveal from "../Reveal";

const categories = [
  { image: categoryRings, label: "ENGAGEMENT RINGS" },
  { image: categoryBands, label: "WEDDING BANDS" },
  { image: categoryGemstones, label: "GEMSTONE JEWELERY" },
  { image: categoryNecklaces, label: "NECKLACES" },
  { image: categoryEarrings, label: "EARRINGS" },
];

export default function CategoryGrid() {
  return (
    <section className="w-full bg-white px-20 py-[83px] flex flex-col gap-[67px] items-start">
      <Reveal className="flex flex-col gap-2 items-start max-w-[506px]">
        <h2 className="font-title font-bold text-[32px] leading-10 text-core-05">
          Shop Jewelry by Category
        </h2>
        <p className="font-body text-base text-core-06 max-w-[330px]">
          Thoughtfully curated collections for the big day and every day.
        </p>
      </Reveal>
      <div className="w-full flex gap-3 items-center">
        {categories.map((cat, i) => (
          <Reveal
            key={i}
            delay={i * 0.06}
            className="flex-1 flex flex-col gap-3 items-start min-w-0 group cursor-pointer"
          >
            <div className="w-full h-[300px] bg-[#f2f2f2] overflow-hidden">
              <img
                src={cat.image}
                alt={cat.label}
                className="size-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>
            <p className="font-body text-base text-core-06 w-full">{cat.label}</p>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
