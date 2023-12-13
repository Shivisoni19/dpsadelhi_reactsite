import React from 'react'

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
                        <a href="https://www.facebook.com/profile" ><i className="fab fa-facebook-f"></i></a>
                    </li>
                    <li>
                        <a href="https://www.facebook.com/profile"><i className="fab fa-linkedin-in"></i></a>
                    </li>
                    <li>
                        <a href="https://www.facebook.com/profile"><i className="fab fa-pinterest-p"></i></a>
                    </li>
                    <li>
                        <a href="https://www.facebook.com/profile"><i className="fab fa-dribbble"></i></a>
                    </li>
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
                        <h5 className="title"><a href="tel:+009-215-5599">009-215-5599</a></h5>
                    </div>
                    </div>
                    <div className="top-single-item">
                    <div className="icon">
                        <i className="icon-envelope"></i>
                    </div>
                    <div className="content">
                        <h5 className="title"><a href="mailto:dps@gmail.com">dps@gmail.com</a></h5>
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
