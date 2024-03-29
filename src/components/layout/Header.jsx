import React, { useState } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import HeaderTop from './HeaderTop';
import DonationButton from './DonationButton';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div>
      <div className="header-wrapper">
        <HeaderTop />
        {/* Header-main start here */}
        <div className="header-style-01">
          {/* support bar area end */}
          <nav className={`navbar navbar-area navbar-expand-lg nav-style-01 p-0 ${isMenuOpen ? 'menu-open' : ''}`}>
            <div className="container nav-container">
              <div className="responsive-mobile-menu">
                <div className="logo-wrapper">
                  <Link to="/" className="logo">
                    <img src="img/logo/dps-logo.png" alt="" className="logo-style" />
                  </Link>
                </div>
                <button
                  className={`navbar-toggler ${isMenuOpen ? 'collapsed' : ''}`}
                  type="button"
                  onClick={toggleMenu}
                  aria-expanded={isMenuOpen}
                  aria-label="Toggle navigation"
                >
                  <span className="navbar-toggler-icon"></span>
                </button>
              </div>
              <div className={`collapse navbar-collapse ${isMenuOpen ? 'show' : ''}`} id="bizcoxx_main_menu">
                <ul className="navbar-nav political">
                  <li>
                     <Link to="/">
                        Home
                      </Link>
                    <div className="line">
                        <span className="dot"></span>
                        <span className="dot"></span>
                        <span className="dot style-02"></span>
                    </div>
                  </li>
                  <li>
                      <Link to="/about" >
                        About
                      </Link>
                    <div className="line">
                        <span className="dot"></span>
                        <span className="dot"></span>
                        <span className="dot style-02"></span>
                    </div>
                  </li>
                  <li>
                    <Link to="/members">
                      Members
                    </Link>
                    <div className="line">
                        <span className="dot"></span>
                        <span className="dot"></span>
                        <span className="dot style-02"></span>
                    </div>
                  </li>
                  <li>
                    <Link to="/media">
                      Media
                    </Link>
                    <div className="line">
                        <span className="dot"></span>
                        <span className="dot"></span>
                        <span className="dot style-02"></span>
                    </div>
                  </li>
                  <li>
                    <Link to="/events">
                      Events
                    </Link>
                    <div className="line">
                        <span className="dot"></span>
                        <span className="dot"></span>
                        <span className="dot style-02"></span>
                    </div>
                  </li>
                  <li>
                    <Link to="/gallery">
                      Gallery
                    </Link>
                    <div className="line">
                        <span className="dot"></span>
                        <span className="dot"></span>
                        <span className="dot style-02"></span>
                    </div>
                  </li>
                  <li>
                    <Link to="/contact">
                      Contact Us
                    </Link>
                    <div className="line">
                        <span className="dot"></span>
                        <span className="dot"></span>
                        <span className="dot style-02"></span>
                    </div>
                  </li>
                </ul>
              </div>
              <div className="nav-right-content">
                <DonationButton/>
              </div>
            </div>
          </nav>
          {/* navbar area end */}
        </div>
        {/* Header-main end here */}
      </div>
    </div>
  );
};

export default Header;
