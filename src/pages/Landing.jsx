import Carousel from "src/pages/HomePage";
import About from "src/pages/AboutusPage";
import ContactUs from "src/pages/ContactUsPage";
import Faqs from "src/pages/FaqsPage";
import Landing1 from "../assets/Landing-1.jpg";
import Landing2 from "../assets/Landing-2.jpg";
import Landing3 from "../assets/Landing-3.jpg";
import Landing4 from "../assets/Landing-4.jpg";
import Complaints from "src/pages/ComplaintsPage";
import { Route, Routes } from "react-router-dom";
const Landing = () => {
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
    <div className="landing_page">
      <Routes>
        <Route path="/" element={<Carousel content={content} />}></Route>
        <Route path="about-us" element={<About />}></Route>
        <Route path="complaints" element={<Complaints />}></Route>
        <Route path="faqs" element={<Faqs />}></Route>
        <Route path="contact-us" element={<ContactUs />}></Route>
      </Routes>
    </div>
  );
};

export default Landing;
