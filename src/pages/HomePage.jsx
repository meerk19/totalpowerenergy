import Landing1 from "../assets/Landing1.webp";
import Landing2 from "../assets/Landing2.webp";
import Landing3 from "../assets/Landing3.webp";
import Landing4 from "../assets/Landing4.webp";
import Carousel from "../components/custom/Carousel";
import Welcome from "../components/custom/Welcome";

const HomePage = () => {
  const content = [
    {
      image: Landing1,
      title: "Total Energy Power Utilities",
    },
    {
      image: Landing2,
      title: "Gas to the business you run",
    },
    {
      image: Landing3,
      title: "Best Electricity Prices for your business",
    },
    {
      image: Landing4,
      title: "Business Landline & Broadband",
    },
  ];
  return (
    <div>
      <Carousel content={content} />
      <Welcome />
    </div>
  );
};

export default HomePage;
