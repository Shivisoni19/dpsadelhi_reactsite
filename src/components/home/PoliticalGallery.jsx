import React from "react";

const PoliticalGallery = () => {
  return (
    <>
      {/* <!-- Political Gallery Section Start Here --> */}
      <div className="political-gallery-section">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-6 col-md-8">
              <div className="section-title">
                <div className="subtitle wow animate__animated animate__fadeInUp">
                  <div className="icon">
                    <span className="icon-star"></span>
                    <span className="icon-star"></span>
                    <span className="icon-star"></span>
                  </div>
                  <p>Our Gallery</p>
                  <div className="icon">
                    <span className="icon-star"></span>
                    <span className="icon-star"></span>
                    <span className="icon-star"></span>
                  </div>
                </div>
                <h4 className="title wow animate__animated animate__fadeInUp">
                  Our Political Gallery
                </h4>
              </div>
            </div>
          </div>
          <div className="political-gallery-item">
            <div className="row">
              <div className="col-lg-3">
                <div className="row">
                  <div className="col-lg-12 col-md-6">
                    <div className="gallery-single-items wow animate__animated animate__fadeInLeft">
                      <div className="thumb">
                        <img
                          src="img/gallery/Gallery5.jpeg"
                          alt="Our Political Gallery"
                        />
                        <div className="cart-icon">
                          <a
                            className="image-popup"
                            href="assets/img/waiting.png"
                          >
                            <i className="fas fa-plus"></i>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-12 col-md-6">
                    <div className="gallery-single-items wow animate__animated animate__fadeInLeft animate__delay-1s">
                      <div className="thumb">
                        <img
                          src="img/gallery/Gallery4.jpg"
                          alt="Our Political Gallery"
                        />
                        <div className="cart-icon">
                          <a
                            className="image-popup"
                            href="assets/img/group-activity.png"
                          >
                            <i className="fas fa-plus"></i>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="gallery-single-items wow animate__animated animate__fadeInUp">
                  <div className="thumb">
                    <img
                      src="img/gallery/dpsa-main-team-members.jpg"
                      alt="Our Political Gallery"
                    />
                    <div className="cart-icon">
                      <a
                        className="image-popup"
                        href="img/gallery/dpsa-main-team-members.jpg"
                      >
                        <i className="fas fa-plus"></i>
                      </a>
                    </div>
                  </div>
                  <div className="content">
                    <h6 className="title">
                      Lets meet for protecting eco system Lets meet for prot
                    </h6>
                  </div>
                </div>
              </div>
              <div className="col-lg-3">
                <div className="row">
                  <div className="col-lg-12 col-md-6">
                    <div className="gallery-single-items wow animate__animated animate__fadeInRight">
                      <div className="thumb">
                        <img
                          src="img/gallery/Gallery3.jpg"
                          alt="Our Political Gallery"
                        />
                        <div className="cart-icon">
                          <a
                            className="image-popup"
                            href="img/gallery/dpsa-main-team-members.jpg"
                          >
                            <i className="fas fa-plus"></i>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-12 col-md-6">
                    <div className="gallery-single-items wow animate__animated animate__fadeInRight animate__delay-1s">
                      <div className="thumb">
                        <img
                          src="img/gallery/Gallery2.jpg"
                          alt="Our Political Gallery"
                        />
                        <div className="cart-icon">
                          <a
                            className="image-popup"
                            href="assets/img/feminist.png"
                          >
                            <i className="fas fa-plus"></i>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="btn-wrapper desktop-center padding-top-20">
            <a href="#" className="boxed-btn btn-sanatory style-01">
              <i className="fas fa-arrow-right"></i>Discover More
            </a>
          </div>
        </div>
      </div>
      {/* <!-- Political Gallery Section End Here --> */}
    </>
  );
};

export default PoliticalGallery;
