import React from "react";

const OurVision = () => {
  return (
    <>
      {/* <!-- Our Vision Section Start --> */}
      <div className="header-bottom-area margin-top-120">
        <div className="container">
          <div className="political-header-bottom m-top-02">
            <div className="row">
              <div className="col-lg-4 col-md-12">
                <div className="our-vision-item wow animate__animated animate__fadeInLeft">
                  <div
                    className="our-vision-bg"
                  >
                    <div className="content">
                      <div className="subtitle"></div>
                      <div className="btn-wrapper">
                        <a
                          href="about.html"
                          className="boxed-btn btn-sanatory style-01 reverse"
                        >
                          <i className="fas fa-arrow-right"></i>Our Vision
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-8">
                <div className="vision-single-item-wrapper">
                  <div className="row">
                    <div className="col-lg-6 col-md-6">
                      <div className="our-vision-single-item  wow animate__animated animate__fadeInUp">
                        <div className="icon">
                          <i className="icon-winner-cup"></i>
                        </div>
                        <div className="content">
                          {/* <!-- <h4 className="title">We Will Win The Elections</h4> --> */}
                          <p>
                            Help para athletes in India reach the highest levels
                            of sports, inspiring and exciting people around the
                            world.{" "}
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6 col-md-6">
                      <div className="our-vision-single-item style-01 wow animate__animated animate__fadeInRight">
                        <div className="icon">
                          <i className="icon-love-4223"></i>
                        </div>
                        <div className="content">
                          <p>
                            Develop, promote, and safeguard the Paralympic
                            Movement in the country according to the rules
                            outlined in the IPC Handbook and the regulations
                            issued by the IPC and NSDC, Government of India.{" "}
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6 col-md-6">
                      <div className="our-vision-single-item style-02 wow animate__animated animate__fadeInUp animate__delay-1s">
                        <div className="icon">
                          <i className="icon-tree"></i>
                        </div>
                        <div className="content">
                          <p>
                            We're not just here to train athletes; we're here to
                            build a movement that goes beyond borders, promoting
                            inclusivity, resilience, and triumph.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6 col-md-6">
                      <div className="our-vision-single-item wow animate__animated animate__fadeInRight animate__delay-1s">
                        <div className="icon">
                          <i className="icon-target-3696"></i>
                        </div>
                        <div className="content">
                          <p>
                            We are committed to creating a mission statement and
                            sticking to our core values.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- Our Vision section end --> */}
    </>
  );
};

export default OurVision;
