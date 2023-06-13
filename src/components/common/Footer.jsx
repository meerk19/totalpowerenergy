import Logo from "../../assets/Flogo.png";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <footer id="footer">
      <div className="d-flex-row align-start md-row-to-col">
        <div className="d-flex-row justify-start">
          <img className="flogo" src={Logo} />
          
        </div>

        <div className="d-flex-column font-family-2 align-start">
          <h1 className="font-family-2 footer-color display5 flex-45 ">
            Company
          </h1>
          <div className="d-flex-column align-start footer-color logo ul-bul gap-1">
            <Link
              className="scroll_link font-family-1 lead footer-color logo1"
              to="/about-us"
            >
              About Us
            </Link>
            <Link
              className="scroll_link font-family-1 lead footer-color logo1"
              to="/faqs"
            >
              FAQs
            </Link>
            <Link
              className="scroll_link font-family-1 lead footer-color logo1"
              to="/complaints"
            >
              Complaint Handling Procedure
            </Link>
          </div>
        </div>
        <div className="d-flex-column font-family-2 align-start">
          <h1 className="font-family-2 footer-color display5 flex-45">
            Site Links
          </h1>
          <div className="d-flex-column align-start footer-color logo ul-bul gap-1">
            <Link
              className="scroll_link font-family-1 lead footer-color logo1"
              to="/"
            >
              Home
            </Link>
            <Link
              className="scroll_link font-family-1 lead footer-color logo1"
              to="/about-us"
            >
              About Us
            </Link>
            <Link
              className="scroll_link font-family-1 lead footer-color logo1"
              to="/complaints"
            >
              Complaints
            </Link>
            <Link
              className="scroll_link font-family-1 lead footer-color logo1"
              to="/contact-us"
            >
              Contact Us
            </Link>
          </div>
        </div>
        <div className="d-flex-column font-family-2 align-start justify-center">
          <h1 className="font-family-2 footer-color display5 flex-45 ">
            Contact Us
          </h1>
          <ul className="footer-color logo ul-bul">
            <li>
              Address:<p className="font-family-1 lead">20-22 Wenlock Road, London, <br/>N1 7GU</p>
            </li>
            <li>
              Email:
              <p>
                {" "}
                <a
                  className="scroll_link font-family-1 lead footer-color logo1"
                  href="mailto:totalenergypowerltd@gmail.com"
                >
                  totalenergypowerltd@gmail.com
                </a>
              </p>
            </li>
            <li>
              Phone:
              <p>
                {" "}
                <a
                  className="scroll_link font-family-1 lead footer-color logo1"
                  href="tel:02086387175"
                >
                  02086387175
                </a>
              </p>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
