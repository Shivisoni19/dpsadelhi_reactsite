import React from 'react'
import { Link } from 'react-router-dom'

const ContactForm = () => {
  return (
    <>
      <div className="col-lg-8">
              <div className="contact-page-wrapper home-six">
                  <div className="contact-form">
                    <div className="content">
                      <h6 className="title">Leave your massage here</h6>
                    </div>
                    <form action="request.html" className="contact-page-form" novalidate="novalidate">
                        <div className="row">
                            <div className="col-md-6 col-sm-12">
                                <div className="form-group">
                                    <input type="text" name="fname" placeholder="Your Name*" className="form-control" required="" aria-required="true"/>
                                </div>
                            </div>
                            <div className="col-md-6 col-sm-12">
                                <div className="form-group">
                                    <input type="email" name="lname" placeholder="Your Email*" className="form-control" required="" aria-required="true"/>
                                </div>
                            </div>
                            <div className="col-md-6 col-sm-12">
                                <div className="form-group">
                                    <input type="tel" name="phone" placeholder="Your Phone*" className="form-control" required="" aria-required="true"/>
                                </div>
                            </div>
                            <div className="col-md-6 col-sm-12">
                              <div className="form-group">
                                  <input type="text" name="pcode" placeholder="Your Postal Code*" className="form-control" required="" aria-required="true"/>
                              </div>
                            </div>
                            <div className="col-md-12">
                                <div className="form-group">
                                    <textarea name="msg" id="msg" placeholder="Write Message" className="text-area"></textarea>
                                </div>
                            </div>
                            <div className="col-md-12">
                              <div className="btn-wrapper">
                                <Link to="/contact" className="boxed-btn political-btn">JOIN NOW<i className="icon-paper-plan"></i></Link>
                              </div>
                            </div>
                        </div>
                    </form>
                  </div>
              </div>
           </div>
    </>
  )
}

export default ContactForm
