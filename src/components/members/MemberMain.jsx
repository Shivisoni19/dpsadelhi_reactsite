import React from "react";
import { Link } from "react-router-dom";
import MemberHeading from "./MemberHeading";

const MemberMain = () => {
  // Create an array of members
  const members = [
    {
      img: "img/member/member.jpg",
      name: "Member Name",
      designation: "Designation",
      social: {
        facebook: "https://www.facebook.com/example",
        twitter: "https://twitter.com/example",
        linkedin: "https://www.linkedin.com/in/example",
        youtube: "https://www.youtube.com/user/example",
      },
    },
    {
      img: "img/member/member.jpg",
      name: "Member Name",
      designation: "Designation",
      social: {
        facebook: "https://www.facebook.com/example",
        twitter: "https://twitter.com/example",
        linkedin: "https://www.linkedin.com/in/example",
        youtube: "https://www.youtube.com/user/example",
      },
    },
    {
      img: "img/member/member.jpg",
      name: "Member Name",
      designation: "Designation",
      social: {
        facebook: "https://www.facebook.com/example",
        twitter: "https://twitter.com/example",
        linkedin: "https://www.linkedin.com/in/example",
        youtube: "https://www.youtube.com/user/example",
      },
    },
    // {
    //   img: "img/member/member.jpg",
    //   name: "Member Name",
    //   designation: "Designation",
    //   social: {
    //     facebook: "https://www.facebook.com/example",
    //     twitter: "https://twitter.com/example",
    //     linkedin: "https://www.linkedin.com/in/example",
    //     youtube: "https://www.youtube.com/user/example",
    //   },
    // },
    // {
    //   img: "img/member/member.jpg",
    //   name: "Member Name",
    //   designation: "Designation",
    //   social: {
    //     facebook: "https://www.facebook.com/example",
    //     twitter: "https://twitter.com/example",
    //     linkedin: "https://www.linkedin.com/in/example",
    //     youtube: "https://www.youtube.com/user/example",
    //   },
    // },
    // {
    //   img: "img/member/member.jpg",
    //   name: "Member Name",
    //   designation: "Designation",
    //   social: {
    //     facebook: "https://www.facebook.com/example",
    //     twitter: "https://twitter.com/example",
    //     linkedin: "https://www.linkedin.com/in/example",
    //     youtube: "https://www.youtube.com/user/example",
    //   },
    // },
  ];
  return (
    <>
      {/* <!-- Volunteer Team Section Start here --> */}
      <div className="team-section-area">
        <div className="container">
          <MemberHeading />
          <div className="row">
            {members.map((member, index) => (
              <div key={index}  className="team col-md-4">
                <div className="volunteer-single-items-02">
                  <div className="thum">
                    <img src={member.img} alt={`member-${index}`} />
                  </div>
                  <div className="content">
                    <div className="author-meta">
                      <span className="author-name">{member.name}</span>
                      <p className="designation">{member.designation}</p>
                    </div>
                    <div className="social-links">
                      {Object.keys(member.social).map((socialMedia, i) => (
                        <a
                          key={i}
                          href={member.social[socialMedia]}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <i className={`fab fa-${socialMedia}`}></i>
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="btn-wrapper desktop-center padding-top-20">
            <Link to="/" className="boxed-btn btn-sanatory style-01">
              <i className="fas fa-arrow-right"></i>Discover More
            </Link>
          </div>
        </div>
      </div>
      {/* <!-- DPSA Team Section Start here --> */}
    </>
  );
};

export default MemberMain;
