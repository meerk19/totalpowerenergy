
import About from "src/pages/AboutusPage";
import ContactUs from "src/pages/ContactUsPage";
import Faqs from "src/pages/FaqsPage";
import Complaints from "src/pages/ComplaintsPage";
import { Route, Routes } from "react-router-dom";
import HomePage from "src/pages/HomePage";
const Landing = () => {
 
  return (
    <div className="landing_page">
      <Routes>
        <Route path="/" element={<HomePage/>}></Route>
        <Route path="about-us" element={<About />}></Route>
        <Route path="complaints" element={<Complaints />}></Route>
        <Route path="faqs" element={<Faqs />}></Route>
        <Route path="contact-us" element={<ContactUs />}></Route>
      </Routes>
    </div>
  );
};

export default Landing;
