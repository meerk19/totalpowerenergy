import HydrationTherapy from "../../assets/rehydrate-treatment.webp";
import ImmunitySupport from "../../assets/immunity-treatment.webp";
import AltitudeAdjustment from "../../assets/altitude-treatment.webp";
import HangoverRelief from "../../assets/hangover-treatment.webp";
import MyerCocktail from "../../assets/myers-treatment.webp";
import AthleticRecovery from "../../assets/athletic-treatment.webp";
import BeutifyAnti from "../../assets/beauty-treatment.webp";

const IvTreatments = () => {
  const treatments = [
    {
      image: HydrationTherapy,
      title: "Hydration Therapy",
      description:
        "Equivalent to drinking 2.5 gallons of water, our B-vitamins, minerals, and essential amino acids in a saline base are your perfect pick-me-up!",
    },
    {
      image: ImmunitySupport,
      title: "Immunity Support Drip",
      description:
        "High dose Vitamin C not only aids in your detoxification, but helps you protect against pathogens, while Zinc reduces your risk, severity, and duration of infectious diseases.",
    },
    {
      image: AltitudeAdjustment,
      title: "Altitude Adjustment",
      description:
        "If you’re visiting an altitude of 5,000 feet or higher, Altitude Sickness is a real possibility! We can help you feel like yourself again in no time!",
    },
    {
      image: HangoverRelief,
      title: "Hangover Relief",
      description:
        "These IV drips will not only rapidly rehydrate your body, but they also detoxify your liver and fill your body with antioxidants, vitamins and mineral",
    },
    {
      image: MyerCocktail,
      title: "Myer's Cocktail",
      description:
        "You’ll love this John Myers-developed ‘cocktail’ of nutrients to relieve several medical conditions including depression, asthma, migraines, fatigue, muscle spasm, allergies, and many other disorders.",
    },
    {
      image: AthleticRecovery,
      title: "Athletic Recovery & Performance",
      description:
        "Our infusions delivery of fluid hydration, antioxidants, vitamins, minerals, and amino acids can give you a performance and recovery boost",
    },
    {
      image: BeutifyAnti,
      title: "Beautify and Anti-Aging",
      description:
        "If you are looking to rejuvenate your outward appearance, hydrating your body from the inside out is far more effective than creams and topical products.",
    },
  ];
  const Treatments = () => {
    return treatments.map((treatment) => {
      return (
        <div className="d-flex-column flex-3" key={treatment.title}>
          <img
            src={treatment.image}
            className="treatment-image"
            key={treatment}
          />
          <h4 className="font-family-1 t-dark-2">{treatment.title}</h4>
          <p className="font-family-1 t-dark-2  medium text-center">
            {treatment.description}
          </p>
        </div>
      );
    });
  };
  return (
    <div className="treatments" id="iv-treatments" key="treatments">
      <h1 className="font-family-2 display2" style={{ fontWeight: 300 }}>
        Welcome To Vivir
      </h1>
      <p
        className="font-family-2 subtitle lead medium"
        style={{ marginBottom: "4vh" }}
      >
        we provide top-notch IV therapy services tailored to your needs, right
        in the comfort of your own space. Our goal is to help you stay healthy
        and hydrated no matter where you are, whether it’s at home, in a hotel,
        or at the office, adding comfort and convenience to your wellness and
        recovery journey.
      </p>
      <div className="d-flex-row align-start flex-wrap">
        <Treatments />
      </div>
    </div>
  );
};

export default IvTreatments;
