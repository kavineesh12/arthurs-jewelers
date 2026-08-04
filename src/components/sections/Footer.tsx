import socialSymbolPng from "../../assets/imgSymbolPngVectorized.svg";
import socialX from "../../assets/imgXLogoSvg.svg";
import socialG12 from "../../assets/imgG12.svg";
import socialGroup1 from "../../assets/imgGroup1.svg";
import socialSymbolSvg from "../../assets/imgSymbolSvg.svg";
import socialGroup2 from "../../assets/imgGroup2.svg";
import Button from "../Button";

const aboutLinks = [
  "Events",
  "Tacori Event",
  "About us",
  "Love Story",
  "Career Oppurtunities",
  "Contact Us",
  "Gift Cards",
  "Sitemap",
  "Engagement Stories",
  "Diamond Stud Earring",
];

const whyLinks = [
  "More 5 Star Reviews",
  "Custom Design Services",
  "Financing Options",
  "Lifetime Warranty",
  "Ring Resizing",
  "Diamond Education",
  "Lifetime Diamond Upgrade",
  "FAQ's",
];

const timings = [
  "Monday: Closed",
  "Tuesday: 11-7",
  "Wednesday: 11-7",
  "Thursday: 11-7",
  "Friday: 11-6",
  "Saturday: 11-4",
  "Sunday: Closed",
];

const socialIcons = [socialSymbolPng, socialX, socialG12, socialGroup1, socialSymbolSvg, socialGroup2];

function FooterColumn({ title, links }: { title: string; links: string[] }) {
  return (
    <div className="flex-1 min-w-0 flex flex-col gap-4 font-body">
      <p className="text-base text-black">{title}</p>
      <div className="flex flex-col gap-2 text-sm text-core-06">
        {links.map((link) => (
          <a key={link} href="#" className="hover:text-main-01 transition-colors">
            {link}
          </a>
        ))}
      </div>
    </div>
  );
}

export default function Footer() {
  return (
    <footer className="w-full bg-core-02 flex flex-col items-start">
      <div className="w-full border-b border-border-light flex flex-wrap gap-4 items-start px-[clamp(24px,10vw,152px)] py-10">
        <FooterColumn title="About" links={aboutLinks} />
        <FooterColumn title="Why Arthur's Jewelers" links={whyLinks} />
        <FooterColumn title="Timings" links={timings} />

        <div className="flex-1 min-w-[260px] flex flex-col justify-between gap-8 self-stretch">
          <div className="flex flex-col gap-4 font-body">
            <p className="text-base text-black">Contact Us</p>
            <div className="flex flex-col gap-2 text-sm text-core-06">
              <p>
                Arthur's Jewelers
                <br />
                1717 Lexington Ave. N.
                <br />
                Roseville, MN 55113
              </p>
              <p>(651) 488-0365</p>
              <p>Curbside Pickup Available</p>
            </div>
          </div>

          <div className="flex flex-col gap-6 items-start">
            <div className="flex gap-6 items-center mix-blend-luminosity">
              {socialIcons.map((icon, i) => (
                <a key={i} href="#" aria-label="Social link">
                  <img src={icon} alt="" className="size-6" />
                </a>
              ))}
            </div>
            <Button variant="secondary" size="small" showIcon={false} className="w-full border-black text-black">
              BOOK APPOINTMENT
            </Button>
          </div>
        </div>
      </div>

      <div className="w-full flex items-center justify-center px-[clamp(24px,10vw,152px)] py-8">
        <p className="font-body text-sm text-core-06">
          © Copyright © 2026 Arthur's Jewelers. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
