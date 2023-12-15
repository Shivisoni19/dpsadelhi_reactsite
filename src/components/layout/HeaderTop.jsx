import React from 'react'
import { Link } from 'react-router-dom'

const HeaderTop = () => {
  return (
    <div>
      {/* // <!-- Header-top-start --> */}
        <div className="header-top about">
            <div className="container nav-container">
            <div className="row">
                <div className="col-lg-4 col-md-4">
                <div className="top-social">
                    <ul className="top-social-share">
                    <li>
                        <Link to="https://www.facebook.com/dpsadelhi" ><i className="fab fa-facebook-f"></i></Link>
                    </li>
                    <li>
                        <Link to="https://www.instagram.com/@dpsadelhi/" ><i className="fab fa-instagram"></i></Link>
                    </li>
                    <li>
                       <Link to="https://twitter.com/i/flow/login?redirect_after_login=%2Fdpsadelhi%2F" ><i className="fab fa-twitter"></i></Link>
                    </li>
                    {/* <li>
                        <Link to="https://www.facebook.com/profile" ><i className="fab fa-dribbble"></i></Link>
                    </li> */}
                    </ul>
                </div>
                </div>
                <div className="col-lg-6 col-md-6">
                <div className="top-single-items">
                    <div className="top-single-item">
                    <div className="icon">
                        <i className="icon-phone"></i>
                    </div>
                    <div className="content">
                        <h5 className="title"><a href="tel:+91-9312779957">+91-9312779957</a></h5>
                    </div>
                    </div>
                    <div className="top-single-item">
                    <div className="icon">
                        <i className="icon-envelope"></i>
                    </div>
                    <div className="content">
                        <h5 className="title"><a href="mailto:dpsadelhi@gmail.com">dpsadelhi@gmail.com</a></h5>
                    </div>
                    </div>
                </div>
                </div>
            </div>
            </div>
        </div>
        {/* // <!-- Header-top-end --> */}
    </div>
  )
}

export default HeaderTop
