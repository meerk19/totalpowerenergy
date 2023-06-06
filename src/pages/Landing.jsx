import Carousel from "src/components/custom/Carousel";
import About from "src/components/custom/About";
import IvTreatments from "src/components/custom/IvTreatments";
import ContactUs from "src/components/custom/ContactUs";
import Faqs from "src/components/custom/Faqs";
import HydrationTherapy from "../assets/hydration-therapy.webp";
import ImmunitySupport from "../assets/immunity-support.webp";
import AltitudeAdjustment from "../assets/altitude-adjustment.webp";
import HangoverRelief from "../assets/hangover-relief.webp";
import MyerCocktail from "../assets/myer’s-cocktail.webp";
import AthleticRecovery from "../assets/athletic-recovery-performance.webp";
import BeutifyAnti from "../assets/beautify-anti-aging.webp";
const Landing = () => {
  const content = [
    {
      image: HydrationTherapy,
      title: "Hydration Therapy",
    },
    {
      image: ImmunitySupport,
      title: "Immunity Support Drip",
    },
    {
      image: AltitudeAdjustment,
      title: "Altitude Adjustment",
    },
    {
      image: HangoverRelief,
      title: "Hangover Relief",
    },
    {
      image: MyerCocktail,
      title: "Myer’s Cocktail",
    },
    {
      image: AthleticRecovery,
      title: "Athletic Recovery & Performance",
    },
    {
      image: BeutifyAnti,
      title: "Beautify and Anti-Aging",
    },
  ];
  return (
    <div className="landing_page">
      <Carousel content={content} />
      <IvTreatments />
      <About />
      <ContactUs />
      <Faqs />
    </div>
  );
};

export default Landing;
