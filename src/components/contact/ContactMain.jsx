import React from "react";
import ContactForm from "./ContactForm";

const ContactMain = () => {
  return (
    <>
      {/* <!-- Contact Main Section Start Here --> */}
      <section className="help-and-faq-section style-01 ">
        <div className="container">
          <div className="row">
            <div className="col-lg-4">
              <div className="help-single-item style-01">
                <div className="content">
                  <h4 className="title mb-3">Frequently Asked Questions</h4>
                  {/* <p>
                    Proin rutrum sem at rutrum ultrirecies. Nunc felis neque,
                    dictum ut porta.
                  </p> */}
                </div>
              </div>
              <div className="icon-box-item-02">
                <div className="icon">
                  <i className="far fa-envelope"></i>
                </div>
                <div className="content">
                  <span className="title">Email</span>
                  <p>dpsadelhi@gmail.com</p>
                </div>
              </div>
              <div className="icon-box-item-02">
                <div className="icon">
                  <i className="fas fa-phone-alt"></i>
                </div>
                <div className="content">
                  <span className="title">Phone</span>
                  <p>+91-9312779957</p>
                </div>
              </div>
              <div className="icon-box-item-02">
                <div className="icon">
                  <i className="fas fa-map-marker-alt"></i>
                </div>
                <div className="content">
                  <span className="title">Location</span>
                  <p>Regd. Off:- 18 F/F, Village Chilia, Near Shiv Mandir, Delhi -110091</p>
                </div>
              </div>
            </div>
            <ContactForm/>
          </div>
        </div>
      </section>
      {/* <!-- Contact Main Section End Here --> */}
    </>
  );
};

export default ContactMain;
