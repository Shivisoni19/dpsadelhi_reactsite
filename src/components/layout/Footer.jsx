import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <>
      {/* <!-- footer area start --> */}
  <footer className="footer-area">
    <div className="footer-top style-02">
      <div className="container">
        <div className="footer-top-border padding-bottom-35">
          {/* <div className="row">
            <div className="col-lg-12">
              <div className="footer-widget footer-bg widget widget_subscribe political">
                  <div className="shape-03"></div>
                  <div className="header-content style-01">
                      <h4 className="title style-01">Would you like to become one of our members?</h4>
                      <div className="btn-wrapper desktop-center">
                        <Link to="/contact" className="boxed-btn political-btn style-01">JOIN NOW<i className="fas fa-paper-plane"></i></Link>
                      </div>
                  </div>
              </div>
            </div>
          </div> */}
          <div className="row">
            <div className="col-lg-4 col-md-6">
              <div className="footer-widget widget">
                <div className="about_us_widget wow animate__animated animate__fadeInUp">
                  <Link to="/" className="footer-logo"> <img src="img/footer/dpsadelhi-footer.png" alt="footer logo"/></Link>
                  <p>Divyang Para Sports Association registered under the Society Act of 1860, is linked with the Paralympic Committee of India, dedicated to advancing sports for disabled people. </p>
                    <div className="social-links">
                      <Link to="/"><i className="fab fa-facebook-f"></i></Link>
                      <Link to="/"><i className="fab fa-twitter"></i></Link>
                      <Link to="/"><i className="fab fa-linkedin-in"></i></Link>
                      <Link to="/"><i className="fab fa-youtube"></i></Link>
                    </div>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="footer-widget widget widget_nav_menu wow animate__animated animate__fadeInUp">
                <h4 className="widget-title">
                  Explore
                  <span className="line">
                    <span className="dot"></span>
                    <span className="dot"></span>
                    <span className="dot style-02"></span>
                    <span className="dot"></span>
                    <span className="dot"></span>
                  </span>
                </h4>
                <ul className="contact_info_list style-01 margin-bottom-50">
                  <li className="single-info-item">
                    {/* <div className="icon style-01 icon-style-01">
                      <i className="icon-location"></i>
                    </div> */}
                    <div className="details style-01">
                     <span className='mr-2'><i className="icon-location"></i></span>
                    Regd. Off:- 18 F/F, Village Chilia, Near Shiv Mandir, Delhi -11009
                    </div>
                  </li>
                  <li className="single-info-item">
                    {/* <div className="icon icon-style-02">
                      <i className="icon-envelope"></i>
                    </div> */}
                    <div className="details">
                      <span className='mr-2'><i className="icon-envelope"></i></span>
                      dpsadelhi@gmail.com
                    </div>
                  </li>
                  <li className="single-info-item">
                    {/* <div className="icon icon-style-03">
                      <i className="icon-phone"></i>
                    </div> */}
                    <div className="details">
                    <span className='mr-2'><i className="icon-phone"></i></span>
                        +91-9312779957
                    </div>
                  </li>
                </ul>
              </div>
            </div>
            {/* <div className="col-lg-1 col-md-6 col-sm-6 col-6">
              <div className="footer-widget widget widget_nav_menu wow animate__animated animate__fadeInUp">
                <h4 className="widget-title">
                  Explore
                  <span className="line">
                    <span className="dot"></span>
                    <span className="dot"></span>
                    <span className="dot style-02"></span>
                    <span className="dot"></span>
                    <span className="dot"></span>
                  </span>
                </h4>
                <ul>
                  <li><a href="#">Our Story</a></li>
                  <li><a href="#">Team</a></li>
                  <li><a href="#">News</a></li>
                  <li><a href="#">Election</a></li>
                </ul>
              </div>
            </div> */}
            <div className="col-lg-2 col-md-6 col-sm-6 col-6">
              <div className="footer-widget widget widget_nav_menu wow animate__animated animate__fadeInUp">
                <h4 className="widget-title">
                  Useful Links
                  <span className="line">
                    <span className="dot"></span>
                    <span className="dot"></span>
                    <span className="dot style-02"></span>
                    <span className="dot"></span>
                    <span className="dot"></span>
                  </span>
                </h4>
                <ul>
                  <li><Link to="/">Privacy Policy</Link></li>
                  <li><Link to="/">Terms and Conditions</Link></li>
                  <li><Link to="/">Support</Link></li>
                  <li><Link to="/">FAQ</Link></li>
                </ul>
              </div>
            </div>
            <div className="col-lg-2 col-md-6 col-sm-6 col-6">
              <div className="footer-widget widget widget_nav_menu wow animate__animated animate__fadeInUp">
                <h4 className="widget-title">
                  Quick Links
                  <span className="line">
                    <span className="dot"></span>
                    <span className="dot"></span>
                    <span className="dot style-02"></span>
                    <span className="dot"></span>
                    <span className="dot"></span>
                  </span>
                </h4>
                <ul>
                  <li><Link to="/about">About Us</Link></li>
                  <li><Link to="/about">Gallery</Link></li>
                  <li><Link to="/about">Media</Link></li>
                  <li><Link to="/about">Contact</Link></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="copyright-area">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="copyright-area-inner">
                  Copyright © 2023 DPSA(Divyang Para Sports Association of Delhi). All Rights Reserved.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </footer>
  {/* <!-- footer area end --> */}
    </>
  )
}

export default Footer
