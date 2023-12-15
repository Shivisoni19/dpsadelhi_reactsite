import React from "react";
import { Link } from "react-router-dom";

const AboutDPSA = () => {
  return (
    <>
      {/* <!-- Little about Divyang Para Sports Association of Delhi Section Start Here --> */}
      <div className="meet-member-section">
        <img
          src="img/icons/home-three-star-bg.png"
          className="section-star"
          alt=""
        />
        <img
          src="img/icons/dot-shape-02.png"
          className="dot-shape-02"
          alt=""
        />
        <img
          src="img/icons/dot-shape-02.png"
          className="dot-shape-03"
          alt=""
        />
        <div className="container">
          <div className="meet-member-wrapper">
            <div className="row">
              <div className="col-lg-12">
                <div className="meet-single-items">
                  <div className="content text-center">
                    <div className="subtitle wow animate__animated animate__fadeInUp">
                      <div className="icon">
                        <i className="icon-star"></i>
                        <i className="icon-star"></i>
                        <i className="icon-star"></i>
                      </div>
                      <p><Link to="https://www.paralympicindia.org.in/affiliated-state-units">Affiliated to  Paralympic Committee of India (PCI)</Link></p>
                      <div className="icon">
                        <i className="icon-star"></i>
                        <i className="icon-star"></i>
                        <i className="icon-star"></i>
                      </div>
                    </div>
                    <div className="subtitle wow animate__animated animate__fadeInUp">
                      <p>(PCI – Recognized by Government of India)</p>
                    </div>
                    <h4 className="title wow animate__animated animate__fadeInUp">
                      Divyang Para Sports Association of Delhi
                    </h4>
                    {/* <p><strong className="text-dark">Affiliated to  Paralympic Committee of India (PCI)</strong></p>
                    <p><strong className="text-dark">(PCI – Recognized by Government of India)</strong></p> */}
                    <p className="description wow animate__animated animate__fadeInUp">
                      The Divyang Para Sports Association of Delhi, operating
                      independently but in collaboration with the Paralympic
                      Committee of India, is dedicated to advancing Para Sports
                      for individuals with disabilities, including those with
                      intellectual and visual impairments. Officially registered
                      under the Societies Registration Act of 1860, the
                      association aims to create inclusive opportunities and
                      platforms, leveraging support to enhance the accessibility
                      and quality of Para Sports. Its commitment to transparency
                      and accountability is underscored by its legal
                      registration, highlighting its tireless efforts to promote
                      inclusivity and development within the community of Para
                      Sports.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- Little about Divyang Para Sports Association of Delhi Section End Here --> */}
    </>
  );
};

export default AboutDPSA;
