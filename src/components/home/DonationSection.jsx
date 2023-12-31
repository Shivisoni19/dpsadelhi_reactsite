import React from "react";
import { Link } from "react-router-dom";

const DonationSection = () => {
  return (
    <>
      {/* <!-- Donation Section Start --> */}
      <div className="donation-section-area political">
        <div className="container">
          <div className="row">
            <div className="col-lg-7">
              <div className="party-single-item margin-bottom-50">
                <div className="content">
                  <div className="subtitle wow animate__animated animate__fadeInUp">
                    <p>Contribute For Us</p>
                    <div className="icon">
                      <i className="icon-star"></i>
                      <i className="icon-star"></i>
                      <i className="icon-star"></i>
                    </div>
                  </div>
                  <h4 className="title style-01 wow animate__animated animate__fadeInUp">
                    Make A Donation For Your Country
                  </h4>
                  <p className="description style-01 wow animate__animated animate__fadeInUp">
                    Every pleasures is to welcomed pain avoided owing to the
                    duty the obligations of business it will frequently occur
                    that pleasures have to be repudiated.
                  </p>
                </div>
                <div className="btn-wrapper margin-top-35 wow animate__animated animate__fadeInUp">
                  <Link to="/donation" className="price-btn">
                    ₹500
                  </Link>
                  <Link to="/donation" className="price-btn">
                    ₹1000
                  </Link>
                  <Link to="/donation" className="price-btn">
                    ₹5000
                  </Link>
                  <Link to="/donation" className="boxed-btn donate-btn btn-sanatory">
                    Donation Now <i className="fas fa-paper-plane"></i>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-lg-5">
              <div
                className="donate-bg"
              >
                <img src="img/donation/donate-dpsa.jpeg" alt="donation-camp-dpsa"/>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- Donation Section End --> */}
    </>
  );
};

export default DonationSection;
