import React from "react";
import { Link } from "react-router-dom";

const PageNotFound = () => {
  return (
    <>
      <div className="page-not-found-section">
        <h1 className="page-not-found-error">404</h1>
        <div className="page">
          <strong>Ooops!!! The page you are looking for is not found</strong>
        </div>
        <div className="btn-wrapper mt-3">
            <Link to="/" className="boxed-btn btn-sanatory">
                Back To Home
            <i className="icon-paper-plan"></i>
            </Link>
        </div>
      </div>
    </>
  );
};

export default PageNotFound;
