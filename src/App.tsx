import Header from "./components/sections/Header";
import Hero from "./components/sections/Hero";
import TrustBar from "./components/sections/TrustBar";
import CategoryGrid from "./components/sections/CategoryGrid";
import FindYourRing from "./components/sections/FindYourRing";
import FineJeweleryBanner from "./components/sections/FineJeweleryBanner";
import LoveStories from "./components/sections/LoveStories";
import Testimonials from "./components/sections/Testimonials";
import FeaturedDesigners from "./components/sections/FeaturedDesigners";
import NewArrivalBanner from "./components/sections/NewArrivalBanner";
import Showroom from "./components/sections/Showroom";
import Newsletter from "./components/sections/Newsletter";
import Footer from "./components/sections/Footer";

import peopleIcon from "./assets/imgVuesaxOutlinePeople.svg";
import shieldIcon from "./assets/imgVuesaxOutlineShieldTick.svg";
import diamondsIcon from "./assets/imgVuesaxOutlineDiamonds.svg";
import starIcon from "./assets/imgVuesaxOutlineStar.svg";
import profile2userIcon from "./assets/imgVuesaxOutlineProfile2User.svg";
import grammerlyIcon from "./assets/imgVuesaxOutlineGrammerly.svg";

const trustItems1 = [
  {
    icon: peopleIcon,
    title: "Family Owned Since 1987",
    subtitle: "Serving Minnesota for 37+ Years",
  },
  {
    icon: shieldIcon,
    title: "Lifetime Warranty",
    subtitle: "We've got you covered",
  },
  {
    icon: diamondsIcon,
    title: "Where Minnesota Gets Engaged",
    subtitle: "Your Destination",
  },
  {
    icon: starIcon,
    title: "1,950+ Five-Star Reviews",
    subtitle: "Google Reviews",
  },
];

const trustItems2 = [
  {
    icon: profile2userIcon,
    title: "Expert Guidance",
    subtitle: "Personalized service from knowledgeable jewelry experts.",
  },
  {
    icon: diamondsIcon,
    title: "Exceptional Selection",
    subtitle: "Explore engagement rings, fine jewelry, and custom designs.",
  },
  {
    icon: grammerlyIcon,
    title: "Relaxed & Welcoming",
    subtitle: "A pressure-free environment focused on you.",
  },
];

function App() {
  return (
    <div className="w-full min-h-screen bg-white overflow-x-clip">
      <Header />
      <Hero />
      <TrustBar items={trustItems1} variant="cream" />
      <CategoryGrid />
      <FindYourRing />
      <FineJeweleryBanner />
      <LoveStories />
      <Testimonials />
      <FeaturedDesigners />
      <NewArrivalBanner />
      <Showroom />
      <TrustBar items={trustItems2} variant="white" tagline="FAMILY OWNED SNCE 1987" />
      <Newsletter />
      <Footer />
    </div>
  );
}

export default App;
