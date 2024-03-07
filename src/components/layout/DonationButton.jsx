import React from "react";
import { Link } from "react-router-dom";

const DonationButton = () => {
  return (
    <>
      <div className="btn-wrapper">
        <Link to="https://docs.google.com/forms/d/e/1FAIpQLSel6C2Y7gHdAqsujBQtTeiomN4jtR1OuXHn6_f38YvqxRBj4g/viewform?usp=sf_link" className="boxed-btn btn-sanatory">
          Registration Now
          <i className="icon-paper-plan"></i>
        </Link>
      </div>
    </>
  );
};

export default DonationButton;
