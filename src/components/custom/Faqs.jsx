import { CiCircleQuestion } from "react-icons/ci";
const Faqs = () => {
  return (
    <div className="faqs" id="faqs" key="faqs">
      <h2 className="font-family-2 display2" style={{ fontWeight: 300 }}>
        Frequently Asked Questions
      </h2>
      <div className="d-flex-column gap-16 align-start">
        {/* FAQ 1 */}
        <div className="d-flex-column align-start">
          <h3
            className="font-family-1 d-flex-row justify-start"
            style={{ fontWeight: 500 }}
          >
            <CiCircleQuestion size={30} /> How to schedule and receive services:
          </h3>
          <p className="lead font-family-1 medium">
            To schedule and receive Vivir IV Hydration and Wellness services,
            you can easily book an appointment through our website. Once you’ve
            booked, our team will get in touch with you to discuss your
            requirements and schedule a suitable time and location for your IV
            therapy. We offer a range of flexible scheduling options to
            accommodate your lifestyle and can work with you to create a
            personalized plan that meets your unique needs. Our experienced team
            will provide all the necessary equipment and ensure that your IV
            therapy is administered safely and effectively so you can sit back
            and relax, and experience the benefits of improved health and
            wellbeing.
          </p>
        </div>
        {/* FAQ 2 */}
        <div className="d-flex-column align-start">
          <h3
            className="font-family-1 d-flex-row justify-start"
            style={{ fontWeight: 500 }}
          >
            <CiCircleQuestion size={30} /> What does Vivir IV Hydration and
            Wellness service entail?
          </h3>
          <p className="lead font-family-1 medium">
            Vivir IV Vitamin Hydration and Wellness service is a concierge,
            on-demand service designed to provide you with customized IV vitamin
            infusions to enhance your health and wellbeing. Our team of licensed
            medical professionals will come to you, wherever you are, and
            provide you with a personalized IV therapy to meet your specific
            needs. We offer a range of IV therapies, including those for
            hydration, detoxification, immune support, and energy.
          </p>
        </div>

        {/* FAQ 3 */}
        <div className="d-flex-column align-start">
          <h3
            className="font-family-1 d-flex-row justify-start"
            style={{ fontWeight: 500 }}
          >
            <CiCircleQuestion size={30} /> What benefits can you expect from our
            service?
          </h3>
          <p className="lead font-family-1 medium">
            Vivir IV Hydration and Wellness services provides you with a fast,
            convenient, and effective way to improve your health and wellbeing.
            By receiving essential nutrients and viatmins directly into your
            bloodstream, you can experience a range of benefits, including
            increases energy, improved immune function, enhance detoxification,
            and improved overall health. Our service is also convenient, as we
            come to you wherever you are, at a time that suits you
          </p>
        </div>

        {/* FAQ 4 */}
        <div className="d-flex-column align-start">
          <h3
            className="font-family-1 d-flex-row justify-start"
            style={{ fontWeight: 500 }}
          >
            <CiCircleQuestion size={30} /> How to schedule and receive service?
          </h3>
          <p className="lead font-family-1 medium">
            To schedule and receive Vivir IV Hydration and Wellness service, you
            can easily book an appointment through our website. Once you&#39;ve
            booked, our team will get in touch with you to discuss your
            requirements and schedule a suitable time and location for your IV
            therapy. We offer a range of flexible scheduling options to
            accommodate your lifestyle and can work with you to create a
            personalized plan that meets your unique needs. Our experienced team
            will provide all the necessary equipment and ensure that your IV
            therapy is administered safely and effectively, so you can sit back,
            relax, and experience the benefits of improved health and wellbeing.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Faqs;
