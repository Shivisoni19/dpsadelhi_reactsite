import React from 'react'

const DonationHeader = () => {
  return (
    <>
      {/* <!-- Donation section start here --> */}
      <div
        className="about-us-section-area about-bg margin-bottom-120"
      >
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-6 col-md-6 col-8">
              <div className="about-inner">
                <h1 className="title wow animate__animated animate__fadeInUp">
                  Donation Now
                </h1>
              </div>
              <div className="breadcrumbs wow animate__animated animate__fadeInUp animate__delay-1s">
                <ul>
                  <li>
                    <a href="index.html">Home</a>
                  </li>
                  <li>  
                    <a href="about.html">Donation</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- Donation section End here --> */}
    </>
  )
}

export default DonationHeader
