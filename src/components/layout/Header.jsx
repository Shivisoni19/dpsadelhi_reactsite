import React from 'react'
import { Link } from 'react-router-dom'
import HeaderTop from './HeaderTop'

const Header = () => {
  return (
    <div>
       <div className="header-wrapper">
        <HeaderTop/>
        {/* <!-- Header-main start here --> */}
        <div className="header-style-01">
            {/* <!-- support bar area end --> */}
            <nav className="navbar navbar-area navbar-expand-lg nav-style-01 p-0">
            <div className="container nav-container">
                <div className="responsive-mobile-menu">
                <div className="logo-wrapper">
                    <a href="index.html" className="logo">
                      <img src="img/logo/dps-logo.png" alt="" className='logo-style'/>
                    </a>
                </div>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#bizcoxx_main_menu"
                    aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                </div>
                <div className="collapse navbar-collapse" id="bizcoxx_main_menu">
                <ul className="navbar-nav political">
                    <li className="menu-item-has-children current-menu-item">
                    <a href="#">Home</a>
                    <ul className="sub-menu">
                        <li><a href="index.html">Home 01</a></li>
                        <li><a href="index-02.html">Home 02</a></li>
                        <li><a href="index-03.html">Home 03</a></li>
                        <li><a href="index-04.html">Home 04</a></li>
                        <li><a href="index-05.html">Home 05</a></li>
                        <li><a href="index-06.html">Home 06</a></li>
                    </ul>
                    <div className="line">
                        <span className="dot"></span>
                        <span className="dot"></span>
                        <span className="dot style-02"></span>
                    </div>
                    </li>
                    <li className="menu-item-has-children">
                    <a href="#0">About Us</a>
                    <ul className="sub-menu">
                        <li><a href="about.html">About</a></li>
                        <li><a href="about-two.html">About Two</a></li>
                        <li><a href="department.html">Department</a></li>
                        <li><a href="department-two.html">Department Two</a></li>
                        <li><a href="department-single.html">Department Single</a></li>
                    </ul>
                    <div className="line">
                        <span className="dot"></span>
                        <span className="dot"></span>
                        <span className="dot style-02"></span>
                    </div>
                    </li>
                    <li className="menu-item-has-children">
                    <a href="#">Members</a>
                    <ul className="sub-menu">
                        <li><a href="donation.html">Donation</a></li>
                        <li><a href="donation-two.html">Donation Two</a></li>
                        <li><a href="donation-three.html">Donation Three</a></li>
                        <li><a href="donation-single.html">Donation Single</a></li>
                        <li><a href="donation-single-two.html">Donation Single Two</a></li>
                    </ul>
                    <div className="line">
                        <span className="dot"></span>
                        <span className="dot"></span>
                        <span className="dot style-02"></span>
                    </div>
                    </li>
                    <li className="menu-item-has-children">
                    <a href="#">Media</a>
                    <ul className="sub-menu">
                        <li><a href="history.html">History</a></li>
                        <li><a href="principle.html">Principles</a></li>
                        <li><a href="team.html">Team</a></li>
                        <li><a href="team-two.html">Team Two</a></li>
                        <li><a href="media.html">Media</a></li>
                        <li><a href="issues.html">Issues</a></li>
                        <li><a href="issue-two.html">Issues Two</a></li>
                        <li><a href="issues-three.html">Issues Three</a></li>
                        <li><a href="issues-single.html">Issues Single</a></li>
                        <li><a href="issues-single-two.html">Issues Single Two</a></li>
                        <li><a href="volunteer.html">Volunteer</a></li>
                        <li><a href="services.html">Services</a></li>
                        <li><a href="services-two.html">Services Two</a></li>
                        <li><a href="services-single.html">Services Single</a></li>
                        <li><a href="faq.html">Help & Faq</a></li>
                        <li><a href="error.html">Error</a></li>
                        <li><a href="comming-soon.html">Comming Soon</a></li>
                    </ul>
                    <div className="line">
                        <span className="dot"></span>
                        <span className="dot"></span>
                        <span className="dot style-02"></span>
                    </div>
                    </li>
                    <li className="menu-item-has-children">
                    <a href="#">Events</a>
                    <ul className="sub-menu">
                        <li><a href="event.html">Event</a></li>
                        <li><a href="event-two.html">Event Two</a></li>
                        <li><a href="event-three.html">Event Three</a></li>
                        <li><a href="event-four.html">Event Four</a></li>
                        <li><a href="event-five.html">Event Five</a></li>
                        <li><a href="event-single.html">Event Single</a></li>
                        <li><a href="event-single-two.html">Event Single Two</a></li>
                    </ul>
                    <div className="line">
                        <span className="dot"></span>
                        <span className="dot"></span>
                        <span className="dot style-02"></span>
                    </div>
                    </li>
                    <li className="menu-item-has-children">
                    <a href="#">Gallery</a>
                    <ul className="sub-menu">
                        <li><a href="news.html">News</a></li>
                        <li><a href="news-two.html">News Two</a></li>
                        <li><a href="news-three.html">News Three</a></li>
                        <li><a href="news-four.html">News Four</a></li>
                        <li><a href="news-single.html">News Single</a></li>
                    </ul>
                    <div className="line style-01">
                        <span className="dot"></span>
                        <span className="dot"></span>
                        <span className="dot style-02"></span>
                    </div>
                    </li>
                    <li className="menu-item-has-children">
                    <a href="#0">Contact Us</a>
                    <ul className="sub-menu">
                        <li><a href="contact.html">Contact</a></li>
                        <li><a href="contact-two.html">Contact Two</a></li>
                    </ul>
                    <div className="line">
                        <span className="dot"></span>
                        <span className="dot"></span>
                        <span className="dot style-02"></span>
                    </div>
                    </li>
                </ul>
                </div>
                <div className="nav-right-content">
                {/* <!-- <div className="icon-part">
                    <ul>
                        <li id="search"><a href="#"><i className="icon-search-svgrepo-com-1"></i></a></li>
                    </ul>
                </div> --> */}
                <div className="btn-wrapper">
                    <a href="mailto:dps@gmail.com" className="boxed-btn btn-sanatory">
                    Email Now 
                    <i className="icon-paper-plan"></i>
                    </a>
                </div>
                </div>
            </div>
            </nav>
            {/* <!-- navbar area end --> */}
        </div>
       {/* <!-- Header-main end here --> */}
  </div>
    </div>
  )
}

export default Header
