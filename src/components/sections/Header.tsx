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
  return (
    <header className="w-full bg-white border-b border-border-light flex flex-col items-center pt-3">
      <div className="w-full flex items-center justify-between px-20 py-3">
        <div className="flex items-center gap-6 text-sm text-core-06 font-body whitespace-nowrap">
          <p>CONTACT US</p>
          <p>OUR LOCATION</p>
          <p>(972) 980-8700</p>
        </div>

        <div className="h-20 w-[116px] shrink-0">
          <img src={logo} alt="Arthur's Jewelers" className="size-full object-contain" />
        </div>

        <div className="flex items-center gap-6 shrink-0">
          <div className="flex items-center gap-4">
            <button type="button" aria-label="Search">
              <img src={searchIcon} alt="" className="size-6" />
            </button>
            <button type="button" aria-label="Wishlist">
              <img src={heartIcon} alt="" className="size-6" />
            </button>
            <button type="button" aria-label="Cart">
              <img src={cartIcon} alt="" className="size-6" />
            </button>
            <button type="button" aria-label="Account">
              <img src={profileIcon} alt="" className="size-6" />
            </button>
          </div>
          <Button variant="secondary" size="small" showIcon={false}>
            BOOK APPOINTMENT
          </Button>
        </div>
      </div>

      <nav className="w-full border-t border-border-lighter flex items-center justify-center gap-6 px-20 py-4">
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
    </header>
  );
}
