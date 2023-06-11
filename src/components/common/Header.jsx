import { useState } from "react";
import { NavLink as Link } from "react-router-dom";
import { Fade as Hamburger } from "hamburger-react";
import Logo from "../../assets/Logo.png";


const Header = () => {
  const [isOpen, setOpen] = useState(false);
  const closeSidebar = () => {
    if (isOpen) {
      setOpen(false);
    }
  };
  return (
    <header id="header">
      <img className="logo" src={Logo} />

      {/* LARGE SCREEN NAVS */}
      <nav className="flex-9 d-flex-row gap-48 md-hide">
        <Link to="/" className="font-family-1 lead t-dark-2 scroll_link">
          Home
        </Link>

        <Link
          to="about-us"
          activeClassName="active"
          className="font-family-1 lead t-dark-2 scroll_link"
        >
          About Us
        </Link>
        <Link
          to="complaints"
          className="font-family-1 lead t-dark-2 scroll_link"
        >
          Complaints
        </Link>
        <Link to="faqs" className="font-family-1 lead t-dark-2 scroll_link">
          FAQs
        </Link>
        <Link
          to="contact-us"
          className="font-family-1 lead t-dark-2 scroll_link"
        >
          Contact Us
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
          <img className="header_logo" src={Logo} />
        </div>
        <div className="d-flex-column flex-6 gap-16">
          <Link
            to="/"
            onClick={closeSidebar}
            className="scroll_link font-family-1 lead t-dark-2"
          >
            Home
          </Link>

          <Link
            to="about-us"
            onClick={closeSidebar}
            className="scroll_link font-family-1 lead t-dark-2"
          >
            About Us
          </Link>
          <Link
            to="complaints"
            onClick={closeSidebar}
            className="scroll_link font-family-1 lead t-dark-2"
          >
            Complaints
          </Link>
          <Link
            to="faqs"
            onClick={closeSidebar}
            className="scroll_link font-family-1 lead t-dark-2"
          >
            FAQs
          </Link>
          <Link
            to="contact-us"
            onClick={closeSidebar}
            className="scroll_link font-family-1 lead t-dark-2"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
