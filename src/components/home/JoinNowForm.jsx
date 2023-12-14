import React from "react";

const JoinNowForm = () => {
  return (
    <>
      {/* <!-- Join our party section start --> */}
      <div className="join-party-section-area  join-form-bg">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className="join-single-item">
                <div className="content"></div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="contact-page-wrapper wow animate__animated animate__fadeInRight">
                <div className="contact-form contact-bg">
                  <div className="content desktop-center">
                    <h6 className="title">Freedom Matters</h6>
                  </div>
                  <form
                    action="request.html"
                    className="contact-page-form"
                    novalidate="novalidate"
                  >
                    <div className="row">
                      <div className="col-md-6 col-sm-6">
                        <div className="form-group">
                          <input
                            type="text"
                            name="fname"
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
                            name="lname"
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
                            name="phone"
                            placeholder="Post Code"
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
                          <a
                            href="#"
                            className="boxed-btn political-btn style-01"
                          >
                            JOIN NOW<i className="icon-paper-plan"></i>
                          </a>
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
      {/* <!-- Join our party section end --> */}
    </>
  );
};

export default JoinNowForm;
