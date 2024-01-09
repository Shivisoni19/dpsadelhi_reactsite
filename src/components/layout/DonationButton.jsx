import React from "react";
import { Link } from "react-router-dom";

const DonationButton = () => {
  return (
    <>
      <div className="btn-wrapper">
        <Link to="/donation" className="boxed-btn btn-sanatory">
          Donation Now
          <i className="icon-paper-plan"></i>
        </Link>
      </div>
    </>
  );
};

export default DonationButton;
