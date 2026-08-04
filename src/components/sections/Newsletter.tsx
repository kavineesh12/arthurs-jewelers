import { useState } from "react";
import bgImage from "../../assets/imgImage75.jpg";
import Reveal from "../Reveal";

export default function Newsletter() {
  const [email, setEmail] = useState("");

  return (
    <section className="relative h-[444px] w-full overflow-hidden">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img
          src={bgImage}
          alt=""
          className="absolute h-[234.5%] left-[-2.78%] max-w-none top-[-11.73%] w-[128.47%]"
        />
      </div>
      <Reveal className="absolute left-20 top-[127px] w-[559px] max-w-[calc(100%-80px)] flex flex-col gap-6 items-start p-6">
        <div className="flex flex-col gap-3 items-start text-white">
          <p className="font-body text-base tracking-[3.2px]">STAY CONNECTED</p>
          <p className="font-title font-bold text-[32px] leading-10 max-w-[392px]">
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
