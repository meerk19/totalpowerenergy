import React from "react";
import Fade from "react-reveal/Fade";
// WhyChooseUs Image
import shapeImg from "../../assets/eclipse-rotate-shape.svg";
import logo1 from "../../assets/Companies/logo1.png";
import logo2 from "../../assets/Companies/logo2.png";
import logo3 from "../../assets/Companies/logo3.png";
import logo4 from "../../assets/Companies/logo4.png";
import logo5 from "../../assets/Companies/logo5.png";
import logo6 from "../../assets/Companies/logo6.png";
import logo8 from "../../assets/Companies/logo8.png";
import logo10 from "../../assets/Companies/logo10.png";
import logo11 from "../../assets/Companies/logo11.png";
import logo12 from "../../assets/Companies/logo12.png";
import logo13 from "../../assets/Companies/logo13.png";
import logo14 from "../../assets/Companies/logo14.png";
import logo15 from "../../assets/Companies/logo15.png";

const WhyChooseUs = () => {
  return (
    <div className="why_choose_us">
      <img src={shapeImg} alt="eclipse-shape" className="why_choose_us_image"/>
      <div>
        <h2 className="font-family-2 display4">Why us?</h2>
      </div>
      <div>
        <p className="font-family-1 lead subtitle medium">
          Partnering with Total Energy Power allows businesses to focus on their
          core operations while leaving the complexities of utilities management
          to the experts. We take pride in being a reliable and results-oriented
          partner, delivering measurable value and empowering businesses to
          achieve their energy goals.
          <br />
          If you're looking for a trusted utilities consultant that can optimize
          your energy procurement and streamline your operations, Total Energy
          Power is here to assist you every step of the way.
          <br />
        </p>
      </div>

      <div className="d-flex-row space-between md-row-to-col">

          {/* <Fade bottom> */}
        

            <h2 className="why_chose_use_headline font-family-1 flex-6 lead medium">
              We work with the top UK Electricity, Gas, and Telecommunication
              Suppliers
            </h2>
          {/* </Fade> */}
        <div className="flex-7 pad-top d-flex-column gap-48">
          <Fade bottom cascade>
            <div className="d-flex-row md-row-to-col">
              <div className="flex-3">
                <img style={{ width: "60%" }} src={logo1} />
              </div>
              <div className="flex-3">
                <img style={{ width: "80%" }} src={logo2} />
              </div>
              <div className="flex-3">
                <img style={{ width: "60%" }} src={logo3} />
              </div>
              <div className="flex-3">
                <img style={{ width: "60%" }} src={logo4} />
              </div>
            </div>

            <div className="d-flex-row md-row-to-col">
              <div className="flex-3">
                <img style={{ width: "80%" }} src={logo5} />
              </div>
              <div className="flex-3">
                <img style={{ width: "60%" }} src={logo6} />
              </div>
              <div className="flex-3">
                <img style={{ width: "80%" }} src={logo8} />
              </div>
              <div className="flex-3">
                <img style={{ width: "70%" }} src={logo10} />
              </div>
            </div>

            <div className="d-flex-row md-row-to-col">
              <div className="flex-3">
                <img style={{ width: "70%" }} src={logo11} />
              </div>
              <div className="flex-3">
                <img style={{ width: "70%" }} src={logo12} />
              </div>
              <div className="flex-3">
                <img style={{ width: "40%" }} src={logo13} />
              </div> 
              <div className="  flex-3">
                <img style={{ width: "60%" }} src={logo14} />
              </div>
            </div>

            <div>
              <div className=" d-flex-row flex-3 md-row-to-col" >
                <img style={{ width: "13%" }} src={logo15} />
              </div>
            </div>
          </Fade>
        </div>
      </div>
    </div>
  );
};
export default WhyChooseUs;
