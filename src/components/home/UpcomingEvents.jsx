import React from 'react'

const UpcomingEvents = () => {
  return (
    <>
      {/* <!-- Campaigns Section Start --> */}
  <div className="campaign-section-area">
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
              <p>Upcoming Events</p>
              <div className="icon">
                <span className="icon-star"></span>
                <span className="icon-star"></span>
                <span className="icon-star"></span>
              </div>
            </div>
            <h4 className="title wow animate__animated animate__fadeInUp">Visit Our Recent Events</h4>
          </div>
        </div>
      </div>
      <div className="campaign-single-item style-01">
        <div className="row">
          <div className="col-lg-6">
            <div className="campaign-bg-02 wow animate__animated animate__fadeInLeft">
                <img src='img/events/event-member.jpeg' alt='upcoming-events'/>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="campaign-list-item-02 wow animate__animated animate__fadeInRight">
              <div className="list-single-items">
                <div className="content">
                  <div className="designation">
                    <span className="event">Event</span>
                    <span className="date">18th January 2024</span>
                  </div>
                  <h4 className="title"><a href="event-single.html"> Delhi State Junior and Sub Junior Para Athletics Trial Under 17 and 19 Boys & Girls </a></h4>
                  <p>
                     Venue: Tyagraj Stadium, New Delhi – 110038
                  </p>
                </div>
              </div>
              <div className="list-single-items active">
                <div className="content">
                  <div className="designation">
                    <span className="event">Event</span>
                    <span className="date">5th – 7th March 2024</span>
                  </div>
                  <h4 className="title"><a href="event-single.html"> Delhi State Para-Athletics Championship 2023</a></h4>
                  <p>
                    Venue: Tyagraj Stadium, New Delhi – 110038
                  </p>
                </div>
              </div>
              <div className="list-single-items">
                <div className="content">
                  <div className="designation">
                    <span className="event">Event</span>
                    <span className="date">14th March 2024</span>
                  </div>
                  <h4 className="title"><a href="event-single.html"> Delhi State Para-Powerlifting Championships 2023 (Junior and Senior)</a></h4>
                  <p>
                     Venue: Jawaharlal Nehru Stadium, New Delhi – 110003
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* <!-- Upcoming Event Section End --> */}
    </>
  )
}

export default UpcomingEvents
