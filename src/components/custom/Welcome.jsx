import Welcome1 from "../../assets/Welcome1.jpg";
import Welcome2 from "../../assets/Welcome2.jpg";
import Welcome3 from "../../assets/Welcome3.jpg";

const Home = () => {
  const treatments = [
    {
      image: Welcome1,
      title: "Electricity",
      description:
        "At Total Energy Power, we take pride in our ability to secure the best electricity rates for our clients as a trusted third-party provider. Our team of experts understands the importance of reliable and cost-effective electricity supply for businesses of all sizes. We work tirelessly to analyze your energy consumption patterns and identify opportunities to optimize your usage and reduce costs. By leveraging our extensive network of energy suppliers, we negotiate favorable contracts that align with your budgetary goals and sustainability objectives. With Total Energy Power, you can rest assured that you'll receive the best electricity rates without compromising on quality or service.",
    },
    {
      image: Welcome2,
      title: "Gas",
      description:
        "As a leading utilities consultant, Total Energy Power is dedicated to helping businesses like yours secure the most competitive gas rates available. We understand the significance of natural gas as a vital energy source for various industries, and our expertise lies in navigating the complex gas market on your behalf. Our team of professionals analyzes your gas usage patterns and identifies opportunities for efficiency improvements and cost savings. By leveraging our industry relationships and market insights, we negotiate favorable gas contracts that deliver significant value to your organization. With Total Energy Power, you can enjoy peace of mind knowing that you're receiving the best gas rates without the hassle of managing negotiations and contracts yourself.",
    },
    {
      image: Welcome3,
      title: "Broadband & Telecommunications",
      description:
        "Total Energy Power is not only committed to optimizing your energy costs but also to providing you with the best broadband & telecommunications rates available in the market. We understand that a reliable and high-speed internet connection is crucial for businesses to stay competitive in today's digital world. As a trusted third-party provider, we leverage our extensive network of broadband & telecommunications providers to negotiate favorable contracts on your behalf. Whether you require fiber-optic, cable, or wireless broadband solutions, our team works closely with you to understand your connectivity requirements and secure the most cost-effective options.",
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
      <h2 className="font-family-2 display4">Who are we?</h2>
      <p
        className="font-family-2 subtitle lead medium"
        style={{ marginBottom: "4vh" }}
      >
        Total Energy Power is a leading utilities consultant and third-party
        provider that specializes in arranging contracts for businesses in the
        energy sector. With a wealth of industry knowledge and expertise, we
        assist organizations in optimizing their energy procurement and
        management processes. Our mission is to empower businesses by providing
        comprehensive energy solutions that drive efficiency, reduce costs, and
        promote sustainability. We strive to be a trusted partner for our
        clients, delivering personalized services tailored to their specific
        requirements and goals.
      </p>

      <div className="d-flex-row align-start flex-wrap">
        <Treatments />
      </div>
    </div>
  );
};

export default Home;
