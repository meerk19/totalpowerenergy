import { useState } from "react";
import { Link } from "react-scroll";
import { Fade as Hamburger } from "hamburger-react";

const Header = () => {
  const [isOpen, setOpen] = useState(false);
  const closeSidebar = () => {
    if (isOpen) {
      setOpen(false);
    }
  };
  return (
    <header id="header">
      <h1 className="font-family-2 t-primary-dark display3 flex-1">Vivir</h1>

      {/* LARGE SCREEN NAVS */}
      <nav className="flex-9 d-flex-row justify-start gap-48 md-hide">
        <Link
          to="home"
          smooth
          className="scroll_link font-family-1 lead t-dark-2"
        >
          Home
        </Link>
        <Link
          to="iv-treatments"
          offset={-100}
          smooth
          className="scroll_link font-family-1 lead t-dark-2"
        >
          IV Treatments
        </Link>
        <Link
          to="about-us"
          smooth
          offset={-100}
          className="scroll_link font-family-1 lead t-dark-2"
        >
          About Us
        </Link>
        <Link
          to="contact-us"
          smooth
          offset={-100}
          className="scroll_link font-family-1 lead t-dark-2"
        >
          Contact Us
        </Link>
        <Link
          to="faqs"
          smooth
          className="scroll_link font-family-1 lead t-dark-2"
        >
          FAQs
        </Link>
      </nav>

      {/* SMALL SCREEN NAVS */}
      <div className="flex-9 d-flex-row justify-end gap-48 lg-hide">
        <Hamburger
          toggled={isOpen}
          toggle={setOpen}
          color="#4b4b4b"
          size={20}
        />
      </div>

      <div className={`mobile_navbar ${isOpen ? "open" : ""}`}>
        <div className="d-flex-row flex-1 header_logo">
          <h1 className="font-family-2 t-primary-dark display1 flex-1">
            Vivir
          </h1>
        </div>
        <div className="d-flex-column flex-6 gap-16">
          <Link
            to="home"
            smooth
            offset={-100}
            onClick={closeSidebar}
            className="scroll_link font-family-1 lead t-dark-2"
          >
            Home
          </Link>
          <Link
            to="iv-treatments"
            offset={-100}
            smooth
            onClick={closeSidebar}
            className="scroll_link font-family-1 lead t-dark-2"
          >
            IV Treatments
          </Link>
          <Link
            to="about-us"
            smooth
            offset={-100}
            onClick={closeSidebar}
            className="scroll_link font-family-1 lead t-dark-2"
          >
            About Us
          </Link>
          <Link
            to="contact-us"
            smooth
            offset={-100}
            onClick={closeSidebar}
            className="scroll_link font-family-1 lead t-dark-2"
          >
            Contact Us
          </Link>
          <Link
            to="faqs"
            smooth
            offset={-100}
            onClick={closeSidebar}
            className="scroll_link font-family-1 lead t-dark-2"
          >
            FAQs
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
