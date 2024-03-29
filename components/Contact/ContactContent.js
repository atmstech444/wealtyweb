import React from "react";
import ContactInfoContent from "./ContactInfoContent";
import ContactForm from "./ContactForm";

const ContactContent = () => {
  return (
    <>
      <div className="contact-area ptb-70">
        <div className="container">
          <div className="section-title">
            <h2>Drop us a message for any query</h2>
            <div className="bar"></div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>

          <div className="row">
            <div className="col-lg-5 col-md-12">
              <ContactInfoContent />
            </div>

            <div className="col-lg-7 col-md-12">
              <ContactForm />
            </div>
          </div>
        </div>

        <div className="bg-map">
          <img src="/images/bg-map.png" alt="image" />
        </div>
      </div>
    </>
  );
};

export default ContactContent;
