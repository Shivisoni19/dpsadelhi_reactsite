import React from "react";

const OurPartyHistory = () => {
  return (
    <>
      {/* <!-- Our Vision party section start --> */}
      <div className="our-party-section-area party-vision">
        <div className="party-bg our-party-bg"></div>
        <img
          src="img/icons/green-line-shape.png"
          className="party-vision-shape"
          alt=""
        />
        <div className="container">
          <div className="row">
            <div className="col-lg-10 offset-lg-1">
              <div className="party-single-item vision">
                <div className="content">
                  <div className="subtitle wow animate__animated animate__fadeInUp">
                    <p>Our Party History</p>
                    <div className="icon">
                      <i className="icon-star"></i>
                      <i className="icon-star"></i>
                      <i className="icon-star"></i>
                    </div>
                  </div>
                  <h4 className="title wow animate__animated animate__fadeInUp">
                    Join The Fight for Our Freedom
                  </h4>
                  <p className="description wow animate__animated animate__fadeInUp">
                    Our association is centred on being in the right place at
                    the right time, fully grasping the rules of the game, and
                    honing strong skills. Members gain the expertise and
                    self-assurance necessary to make fair and accurate
                    assessments during critical moments in competitions.
                  </p>
                  <p className="description none wow animate__animated animate__fadeInUp">
                    If you have any inquiries before considering membership in
                    the Divyang Para Sports Association, we're here and excited
                    to discuss your potential involvement with our association.
                  </p>
                  <div className="vision-quotes wow animate__animated animate__fadeInRight animate__delay-1s">
                    <h5 className="title">
                      Successfully Providing the Best Solution from 2 years
                    </h5>
                    <div className="icon">
                    <img src="img/icons/quotes.png" alt=""/>
                  </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- Our vision party section end --> */}
    </>
  );
};

export default OurPartyHistory;
