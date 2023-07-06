import React, { useRef } from "react";
import ContactImage from "../assets/contact-us.jpg";
import { useFormik, Form, FormikProvider } from "formik";
import * as Yup from "yup";
import { toast } from "react-toastify";
import emailjs from "@emailjs/browser";

const ContactUs = () => {
  const form = useRef(null);
  const ContactSchema = Yup.object().shape({
    fullName: Yup.string().required("*What is your Full Name?"),
    email: Yup.string()
      .email("*Email must be a valid email address")
      .required("*What's your email?"),
    telephone: Yup.string()
      .max(11)
      .required("*Please enter your telephone number"),
    subject: Yup.string().required("*Subject is required"),
    message: Yup.string().required("*What's your message"),
  });
  const formik = useFormik({
    initialValues: {
      fullName: "",
      email: "",
      telephone: "",
      subject: "",
      message: "",
    },
    validationSchema: ContactSchema,
    onSubmit: async (values, { resetForm }) => {
      const loadingToast = toast.loading("Sending your message");
      try {
        await emailjs.sendForm(
          "service_11xpo87",
          "template_hdhu6kj",
          form.current,
          "SGWWmhw0UaKTTFjVo"
        );
        toast.update(loadingToast, {
          render: "Thank You, you will hear from us soon.",
          type: "success",
          isLoading: false,
          closeButton: true,
          closeOnClick: true,
        });
        resetForm();
      } catch (error) {
        console.log(error);
        toast.update(loadingToast, {
          render: "Couldn't send your message, Please wait till we fix it.",
          type: "error",
          isLoading: false,
          closeButton: true,
          closeOnClick: true,
        });
      }
    },
  });
  const { errors, touched, values, handleSubmit, getFieldProps, isSubmitting } =
    formik;
  return (
    <div className="d-flex-column">
      <div className="container-bg-color">
        <h1 className="font-family-2 display1">Contact Us</h1>
      </div>
      <div className=" contact-us" id="contact-us" key="contact">
        <p className="font-family-1 lead medium detail">
          We’re here to answer any questions you may have about our service. To
          get in touch with us, you can fill out our online contact form, and
          one of our team members will respond to your inquiry promptly.
          Alternatively, you can give us a call at{" "}
          <a className="lead detail" href="tel:02086387175">
            02086387175
          </a>{" "}
          to speak directly with a member of our team or you can email us on{" "}
          <a
            className="lead detail"
            href="mailto:totalenergypowerltd@gmail.com"
          >
            totalenergypowerltd@gmail.com
          </a>{" "}
          and we will get back to you in 3-5 working days. We look forward to
          hearing from you and helping you achieve your wellness goals.
        </p>
        <div className="d-flex-row space-around  gap-48 md-row-to-col">
          <FormikProvider value={formik}>
            <Form
              className=" contact-us-form font-family-1 "
              autoComplete="off"
              noValidate
              onSubmit={handleSubmit}
              ref={form}
            >
              <label className="lg bold">Full Name:</label>
              <input
                type="text"
                id="fullName"
                name="fullName"
                className="font20"
                value={values.fullName}
                {...getFieldProps("fullName")}
              />
              {touched.fullName && errors.fullName && (
                <p className="error-text">{errors?.fullName}</p>
              )}
              <label className="lg bold">Email:</label>
              <input
                type="text"
                id="email"
                name="email"
                className="font20"
                value={values.email}
                {...getFieldProps("email")}
              />
              {touched.email && errors.email && (
                <p className="error-text">{errors?.email}</p>
              )}
              <label className="lg bold">Telephone:</label>
              <input
                type="tel"
                id="telephone"
                name="telephone"
                className="font20"
                value={values.telephone}
                {...getFieldProps("telephone")}
              />
              {touched.telephone && errors.telephone && (
                <p className="error-text">{errors?.telephone}</p>
              )}
              <label className="lg bold">Subject:</label>
              <input
                type="text"
                id="subject"
                name="subject"
                className="font20"
                value={values.subject}
                {...getFieldProps("subject")}
              />
              {touched.subject && errors.subject && (
                <p className="error-text">{errors?.subject}</p>
              )}
              <label className="lg bold">Message:</label>
              <textarea
                rows="4"
                cols="50"
                type="text"
                id="message"
                name="message"
                className="font20"
                value={values.message}
                {...getFieldProps("message")}
              />
              {touched.message && errors.message && (
                <p className="error-text">{errors?.message}</p>
              )}

              <button
                className="submit-button cursor-pointer"
                type="submit"
                style={{ maxWidth: "220px" }}
              >
                Send Message
              </button>
            </Form>
          </FormikProvider>

          <div className="flex-6">
            <img className="about-image" src={ContactImage} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
