// import GooglePayButton from "@google-pay/button-react";
import React from "react";
import { Link } from "react-router-dom";

const DonationForm = () => {
  return (
    <>
      {/* <!-- Donation Form Section start --> */}
      <div className="donation-form">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="contact-page-wrapper wow animate__animated animate__fadeInRight">
                <div className="contact-form contact-bg">
                  <div className="content desktop-center">
                    <h6 className="title">DONATION FORM</h6>
                  </div>
                  <form
                    action="#"
                    className="contact-page-form"
                    novalidate="novalidate"
                  >
                    <div className="row">
                      <div className="col-md-6 col-sm-6">
                        <div className="form-group">
                          <input
                            type="text"
                            name="name"
                            placeholder="Name"
                            className="form-control"
                            required=""
                            aria-required="true"
                          />
                        </div>
                      </div>
                      <div className="col-md-6 col-sm-6">
                        <div className="form-group">
                          <input
                            type="email"
                            name="email"
                            placeholder="Email"
                            className="form-control"
                            required=""
                            aria-required="true"
                          />
                        </div>
                      </div>
                      <div className="col-md-6 col-sm-6">
                        <div className="form-group">
                          <input
                            type="tel"
                            name="phone"
                            placeholder="Mobile No"
                            className="form-control"
                            required=""
                            aria-required="true"
                          />
                        </div>
                      </div>
                      <div className="col-md-6 col-sm-6">
                        <div className="form-group">
                          <input
                            type="text"
                            name="pcode"
                            placeholder="Pin Code"
                            className="form-control"
                            required=""
                            aria-required="true"
                          />
                        </div>
                      </div>
                      <div className="col-md-12">
                        <div className="form-group">
                          <textarea
                            name="msg"
                            id="msg"
                            placeholder="Address"
                          ></textarea>
                        </div>
                      </div>
                      <div className="col-md-12">
                        <div className="btn-wrapper desktop-center">
                          <Link
                            to="/error"
                            className="boxed-btn political-btn style-01"
                          >
                            PAY NOW<i className="icon-paper-plan"></i>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- Donation Form Section end --> */}
    </>
  );
};

export default DonationForm;
