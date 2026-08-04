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
    <section className={`container-x w-full ${bg} py-8 flex flex-col gap-8 items-center`}>
      {/* 2x2 on phones, single row from md up. */}
      <div className="w-full grid grid-cols-2 gap-y-8 gap-x-4 md:flex md:items-start md:justify-between">
        {items.map((item, i) => (
          <Reveal
            key={item.title}
            delay={i * 0.08}
            className="md:flex-1 flex flex-col gap-4 items-center text-center px-1"
          >
            <img src={item.icon} alt="" className="size-6" />
            <div className="flex flex-col gap-2 items-center font-body">
              {/* nowrap only once there's a full row to sit in. */}
              <p className="text-[15px] lg:text-base text-main-01 lg:whitespace-nowrap">
                {item.title}
              </p>
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
