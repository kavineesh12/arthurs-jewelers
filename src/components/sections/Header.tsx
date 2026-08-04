import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import logo from "../../assets/imgArthursJewelersLogoSvg1.png";
import searchIcon from "../../assets/imgVuesaxOutlineSearchNormal.svg";
import heartIcon from "../../assets/imgVuesaxOutlineHeart.svg";
import cartIcon from "../../assets/imgVuesaxOutlineShoppingCart.svg";
import profileIcon from "../../assets/imgVuesaxOutlineFrame.svg";
import Button from "../Button";

const navItems = [
  "ENGAGEMENT RINGS",
  "WEDDING RINGS",
  "DIAMONDS",
  "GEMSTONES",
  "JEWELERY",
  "DIAMOND STUD EARRINGS",
  "SALE",
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="w-full bg-white border-b border-border-light flex flex-col items-center pt-3">
      <div className="container-x w-full flex items-center justify-between gap-4 py-3">
        {/* Contact strip: desktop only — no room for it beside the logo on phones. */}
        <div className="hidden lg:flex items-center gap-6 text-sm text-core-06 font-body whitespace-nowrap">
          <p>CONTACT US</p>
          <p>OUR LOCATION</p>
          <p>(972) 980-8700</p>
        </div>

        {/* Hamburger takes the left slot on mobile so the logo stays centred. */}
        <button
          type="button"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((v) => !v)}
          className="lg:hidden flex flex-col justify-center gap-[5px] w-6 h-6 shrink-0"
        >
          <span
            className={`block h-px w-full bg-main-01 transition-transform duration-300 ${
              menuOpen ? "translate-y-[6px] rotate-45" : ""
            }`}
          />
          <span
            className={`block h-px w-full bg-main-01 transition-opacity duration-200 ${
              menuOpen ? "opacity-0" : ""
            }`}
          />
          <span
            className={`block h-px w-full bg-main-01 transition-transform duration-300 ${
              menuOpen ? "-translate-y-[6px] -rotate-45" : ""
            }`}
          />
        </button>

        <div className="h-14 w-[84px] lg:h-20 lg:w-[116px] shrink-0">
          <img src={logo} alt="Arthur's Jewelers" className="size-full object-contain" />
        </div>

        <div className="flex items-center gap-4 lg:gap-6 shrink-0">
          <div className="flex items-center gap-3 sm:gap-4">
            <button type="button" aria-label="Search">
              <img src={searchIcon} alt="" className="size-6" />
            </button>
            {/* Wishlist and account are secondary — hidden on the narrowest screens. */}
            <button type="button" aria-label="Wishlist" className="hidden sm:block">
              <img src={heartIcon} alt="" className="size-6" />
            </button>
            <button type="button" aria-label="Cart">
              <img src={cartIcon} alt="" className="size-6" />
            </button>
            <button type="button" aria-label="Account" className="hidden sm:block">
              <img src={profileIcon} alt="" className="size-6" />
            </button>
          </div>
          {/* Wrapper, not a `hidden` class on Button: Button's base sets
              inline-flex, and two display utilities in one class list are
              resolved by stylesheet order, not attribute order. */}
          <div className="hidden lg:block">
            <Button variant="secondary" size="small" showIcon={false}>
              BOOK APPOINTMENT
            </Button>
          </div>
        </div>
      </div>

      {/* Desktop category row */}
      <nav className="container-x hidden lg:flex w-full border-t border-border-lighter items-center justify-center gap-6 py-4">
        {navItems.map((item) => (
          <button
            key={item}
            type="button"
            className="text-sm text-core-06 font-body whitespace-nowrap cursor-pointer hover:text-main-01 transition-colors"
          >
            {item}
          </button>
        ))}
      </nav>

      {/* Mobile drawer */}
      <AnimatePresence>
        {menuOpen && (
          <motion.nav
            key="mobile-nav"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="lg:hidden w-full overflow-hidden border-t border-border-lighter"
          >
            <div className="container-x flex flex-col items-start gap-4 py-5">
              {navItems.map((item) => (
                <button
                  key={item}
                  type="button"
                  className="text-sm text-core-06 font-body text-left hover:text-main-01 transition-colors"
                >
                  {item}
                </button>
              ))}
              <div className="h-px w-full bg-border-lighter my-1" />
              <div className="flex flex-col items-start gap-3 text-sm text-core-06 font-body">
                <p>CONTACT US</p>
                <p>OUR LOCATION</p>
                <p>(972) 980-8700</p>
              </div>
              <Button variant="secondary" size="small" showIcon={false} className="mt-2 w-full">
                BOOK APPOINTMENT
              </Button>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
