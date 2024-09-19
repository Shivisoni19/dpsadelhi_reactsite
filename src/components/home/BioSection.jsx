import React from 'react';

const BioSection = () => {
  return (
    <>
      {/* <!-- Our Vision party section start --> */}
      <div className="our-party-section-area party-vision">
        <div className="bio-bg"></div>
        {/* <img
          src="img/icons/green-line-shape.png"
          className="party-vision-shape"
          alt=""
        /> */}
        <div className="container">
          <div className="row">
            <div className="col-lg-10 offset-lg-1">
              <div className="party-single-item vision">
                <div className="content">
                  <div className="subtitle wow animate__animated animate__fadeInUp">
                    <p>Biography</p>
                    <div className="icon">
                      <i className="icon-star"></i>
                      <i className="icon-star"></i>
                      <i className="icon-star"></i>
                    </div>
                  </div>
                  <h4 className="title wow animate__animated animate__fadeInUp">
                    AJIT CHANDELA
                  </h4>
                  <div className="vision-quotes wow animate__animated animate__fadeInRight animate__delay-1s">
                    <h5 className="title">
                      NICK NAME : AJIT <br/>
                      DATE OF BIRTH : 05-12-1983 <br/>
                      LOCATION : FARIDABAD, HARYANA 
                    </h5>
                    {/* <div className="icon">
                      <img src="img/icons/quotes.png" alt=""/>
                    </div> */}
                  </div>
                  <p className="description wow animate__animated animate__fadeInUp">
                     Ajit Chandila is a former Indian cricketer from Haryana. He played for Rajasthan Royals until 2013 but was previously known for his performance for the Air India North Zone team.
                  </p>
                  <p className="description none wow animate__animated animate__fadeInUp">
                     His (IPL) career started in 2011 when Delhi Daredevils selected him in their probable team. He made his IPL debut on 23 April 2012 at Jaipur. It is known that he is mentored by Indian spinner Narendra Hirwani. Ajit became the first bowler in the IPL's fifth season to take a hat-trick. He is the seventh bowler to get a hat-trick in the history of the IPL. He took wicket of Sachin Tendulkar and Ricky Ponting in one over against Mumbai Indians in 2013. He took retirement on 16 July 2023.
                  </p>
                  
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- Our vision party section end --> */}
    </>
  );
}

export default BioSection;
