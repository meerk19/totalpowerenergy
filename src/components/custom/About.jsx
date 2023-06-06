import AboutImage from "../../assets/about-1.webp";
const About = () => {
  return (
    <div className="about" key="about" id="about-us">
      <h1 className="font-family-2 display3">About us</h1>
      <div className="d-flex-row space-between  gap-48 md-row-to-col">
        <div className="flex-4">
          <img className="about-image" src={AboutImage} />
        </div>
        <p className="font-family-1 lead flex-6 medium">
          Welcome to our Concierge IV Hydration company, where we provide
          top-notch IV therapy services tailored to your needs, right in the
          comfort of your own space. Our goal is to help you stay healthy and
          hydrated no matter where you are, whether it’s at home, in a hotel, or
          at the office, adding comfort and convenience to your wellness and
          recovery journey.
          <br />
          <br />
          Our highly trained and experienced healthcare professionals offer
          customized IV treatments tailored to your unique needs, designed to
          help you feel revitalized and re-energized. We prioritize your
          comfort, convenience, and safety and will go above and beyond to
          ensure you have the best possible experience.
          <br />
          <br />
          We cover the entire South Florida region, including Miami-Dade,
          Broward and Palm Beach counties, bringing our services to your
          doorstep. Whether you’re a busy executive, a professional athlete, or
          just someone who wants to feel their best and you’re looking for a
          quick boost of energy, relief from a hangover, or a faster recovery
          from an intense workout, our IV Hydration services are the perfect
          solution.
        </p>
      </div>
    </div>
  );
};

export default About;
