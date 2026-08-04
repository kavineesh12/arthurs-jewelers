import { useState } from "react";
import bgImage from "../../assets/imgImage75.jpg";
import ParallaxImage from "../ParallaxImage";
import Reveal from "../Reveal";

export default function Newsletter() {
  const [email, setEmail] = useState("");

  return (
    <section className="relative h-[420px] sm:h-[440px] lg:h-[444px] w-full overflow-hidden">
      {/* Keeps Figma's exact crop; that crop is already oversized, so there is
          plenty of slack for the drift. */}
      <ParallaxImage
        src={bgImage}
        distance={50}
        imgClassName="absolute h-[234.5%] left-[-2.78%] max-w-none top-[-11.73%] w-[128.47%]"
      />
      {/* Centred block on phones (the hand fills the right of the photo), left
          aligned from lg as designed. */}
      <Reveal className="absolute inset-x-0 lg:inset-x-auto lg:left-20 top-1/2 -translate-y-1/2 lg:top-[127px] lg:translate-y-0 container-x lg:px-0 lg:w-[559px] flex flex-col gap-6 items-start lg:p-6">
        <div className="flex flex-col gap-3 items-start text-white">
          <p className="font-body text-xs sm:text-sm lg:text-base tracking-[2.4px] lg:tracking-[3.2px]">
            STAY CONNECTED
          </p>
          <p className="font-title font-bold text-2xl sm:text-[28px] lg:text-[32px] leading-tight lg:leading-10 max-w-[392px]">
            First access to new collections, trunk shows &amp; private events.
          </p>
        </div>
        <form
          className="flex items-stretch w-full max-w-[389px]"
          onSubmit={(e) => e.preventDefault()}
        >
          <div className="bg-white flex-[256_0_0] min-w-0 flex items-center px-5">
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Your email"
              className="w-full h-11 font-body text-xs text-[#adadad] placeholder:text-[#adadad] outline-none"
            />
          </div>
          <button
            type="submit"
            className="bg-[#637c8f] hover:bg-[#4f6576] transition-colors px-6 py-3 flex items-center justify-center shrink-0"
          >
            <span className="font-body font-semibold text-[10px] text-white tracking-[2.8px] uppercase">
              Subscribe
            </span>
          </button>
        </form>
      </Reveal>
    </section>
  );
}
