import Reveal from "../Reveal";

type TrustItem = {
  icon: string;
  title: string;
  subtitle: string;
};

type TrustBarProps = {
  items: TrustItem[];
  variant?: "cream" | "white";
  tagline?: string;
};

export default function TrustBar({ items, variant = "cream", tagline }: TrustBarProps) {
  const bg = variant === "cream" ? "bg-core-02 border-y border-border-light" : "bg-white border-y border-border-cream";
  return (
    <section className={`w-full ${bg} px-20 py-8 flex flex-col gap-8 items-center`}>
      <div className="w-full flex items-center justify-between">
        {items.map((item, i) => (
          <Reveal
            key={item.title}
            delay={i * 0.08}
            className="flex-1 flex flex-col gap-4 items-center text-center"
          >
            <img src={item.icon} alt="" className="size-6" />
            <div className="flex flex-col gap-2 items-center font-body">
              <p className="text-base text-main-01 whitespace-nowrap">{item.title}</p>
              <p className="text-sm text-core-06">{item.subtitle}</p>
            </div>
          </Reveal>
        ))}
      </div>
      {tagline && (
        <>
          <div className="h-px w-full bg-black/10" />
          <p className="font-body text-base text-core-06 tracking-[3.2px]">{tagline}</p>
        </>
      )}
    </section>
  );
}
