import React from "react";
import { Link } from "react-router-dom";

const EventMain = () => {
  // Create an array of events
  const events = [
    {
      date: "5",
      month: "Mar",
      location: "Tyagraj Stadium, New Delhi – 110038",
      // time: "12:00 pm",
      title: "Delhi State Para-Athletics Championship 2023",
      description:
        "The Delhi State Para-Athletics Championship 2023 is a big sports event happening in Delhi. In this championship, athletes with different abilities will compete against each other. It's a chance for them to show how good they are at running, jumping, and other sports. People from all over Delhi will be a part of it, cheering for the athletes. The championship is not just about winning; it's about everyone coming together to celebrate sports and the talents of these amazing athletes. It's going to be an exciting and inspiring time in Delhi, where everyone can enjoy the spirit of the games.",
      link: "/events", // Example link
      imgSrc: "img/events/event1.jpg",
    },
    {
      date: "10",
      month: "Mar",
      location: "Jawaharlal Nehru Stadium, New Delhi – 110003",
      // time: "12:00 pm",
      title: "Delhi State Para-Powerlifting Championships 2023 (Junior and Senior)",
      description:
        "The Delhi State Para-Powerlifting Championships 2023 for both junior and senior participants is a special event in Delhi happening at Jawaharlal Nehru Stadium. In this competition, strong athletes will show off their power and strength by lifting weights. It's like a big contest where young and experienced athletes compete against each other. People from Delhi will come to watch and support the participants. The championships are not just about lifting heavy weights; they're a way for everyone to come together and celebrate the hard work and skills of these powerful athletes. It's going to be an exciting time in Delhi, full of energy and strong performances.",
      link: "/events", // Example link
      imgSrc: "img/events/event2.jpg",
    },
    {
      date: "15",
      month: "Mar",
      location: "Dr. Shankuntala Misra National Rehabilitation University",
      // time: "12:00 pm",
      title: "5th National Para-Badminton Championship 2022-23",
      description:
        "The 5th National Para-Badminton Championship 2022-23 is a big badminton event where players with different abilities from all over the country compete. It's like a special tournament where everyone can play and enjoy the game of badminton. This championship is the fifth one, and it's happening in the current year at Dr. Shankuntala Misra National Rehabilitation University, Lucknow. Athletes will be showing their skills on the badminton court, and people from different places will come to watch and cheer for them. It's a great opportunity for players to have fun, make new friends, and show how good they are at playing badminton. The championship is all about sportsmanship, skill, and the joy of playing together. ",
      link: "/events", // Example link
      imgSrc: "img/events/event3.jpg",
    },
    // {
    //   date: "5",
    //   month: "Mar",
    //   location: "Tyagraj Stadium",
    //   time: "12:00 pm",
    //   title: "Delhi State Para-Athletics Championship 2023",
    //   description:
    //     "The Delhi State Para-Athletics Championship 2023 is a big sports event happening in Delhi. In this championship, athletes with different abilities will compete against each other. It's a chance for them to show how good they are at running, jumping, and other sports. People from all over Delhi will be a part of it, cheering for the athletes. The championship is not just about winning; it's about everyone coming together to celebrate sports and the talents of these amazing athletes. It's going to be an exciting and inspiring time in Delhi, where everyone can enjoy the spirit of the games.",
    //   link: "/events", // Example link
    // },
  ];

  return (
    <>
      {/* Event items Section Start Here */}
      <div className="issues-around-us-section">
        <div className="container">
          <div className="row">
            {/* Map over the events array and render content for each event */}
            {events.map((event, index) => (
              <div key={index} className="col-md-6">
                <div className="event-single-items">
                  <div className="event-img">
                    <img src={event.imgSrc} alt={`event-${index}`} />
                  </div>
                  <div className="content">
                    <div className="post-mate">
                      <h2 className="post-date">{event.date}</h2>
                      <div className="post-month">{event.month}</div>
                    </div>
                    <div className="subtitle">
                      <div className="location">
                        <div className="icon">
                          <i className="icon-location"></i>
                        </div>
                        <p>{event.location}</p>
                      </div>
                      {/* <div className="time">
                        <div className="icon">
                          <i className="icon-clock"></i>
                        </div>
                        <p>{event.time}</p>
                      </div> */}
                    </div>
                    <h4 className="title">
                      <Link to={event.link}>{event.title}</Link>
                    </h4>
                    <p className="description">{event.description}</p>
                    <div className="btn-wrapper">
                      <Link to={event.link} className="boxed-btn event-btn">
                        <i className="fas fa-arrow-right"></i>Read More
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* Event Items Section Start Here */}
    </>
  );
};

export default EventMain;
