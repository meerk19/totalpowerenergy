import AboutImage from "../assets/about-1.jpg";
import WhyChooseUs from "../components/custom/WhyChooseUs";

const About = () => {
  return (
    <div className="d-flex-column">
      <div className="container-bg-color ">
        <h1 className="font-family-2 display1">About us</h1>
      </div>
      <div className="about" key="about" id="about-us">
        <div className="d-flex-row space-between  gap-48 md-row-to-col">
          <div className="flex-5">
            <img className="about-image" src={AboutImage} />
          </div>
          <p className="font-family-2  lead flex-6 medium ">
            At Total Energy Power, we understand the complex and ever-changing
            landscape of the utilities industry. Our dedicated team works
            closely with businesses of all sizes to analyze their energy needs,
            identify cost-saving opportunities, and negotiate favorable
            contracts with energy suppliers.
            <br />
            <br />
            Our mission is to empower businesses by providing comprehensive
            energy solutions that drive efficiency, reduce costs, and promote
            sustainability. We strive to be a trusted partner for our clients,
            delivering personalized services tailored to their specific
            requirements and goals.
            <br />
            <br />
            As utilities consultants, we stay abreast of the latest market
            trends, regulatory changes, and technological advancements in the
            energy sector. This enables us to provide informed advice and
            strategic guidance to our clients, helping them navigate the
            intricacies of energy procurement and maximize their bottom line.
            Whether it's electricity, natural gas, renewable energy, or other
            utility services, Total Energy Power leverages its extensive network
            and industry relationships to secure the most competitive rates and
            contract terms on behalf of our clients. Our transparent approach
            and commitment to customer satisfaction have earned us a solid
            reputation in the industry.
          </p>
        </div>
        <WhyChooseUs />
      </div>
    </div>
  );
};

export default About;
