import React, { useState } from "react";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const JoinNowForm = () => {

  const [joinData, setJoinData] = useState({
    name: "",
    email: "",
    phone: "",
    pcode: "",
    message: "",
  });

  let name, value;

  const postJoinData = (event) => {
    name = event.target.name;
    value = event.target.value;

    setJoinData({ ...joinData, [name]: value });
  };

  // connection with firebase
  const submitDetails = async (event) => {
    event.preventDefault();
    const { name, email, phone,pcode, message } = joinData;

    if(name && email && phone && pcode &&message ){
    const res = fetch(
      "https://dpsadelhi-d6be4-default-rtdb.firebaseio.com/joinDataRecords.json",

      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          email,
          phone,
          pcode,
          message,
        }),
      }
    );

    if (res) {
      setJoinData({
        name: "",
        email: "",
        phone: "",
        pcode:"",
        message: "",
      });
      toast.success("Your Data Stored Successfully");
    } else {
      toast.error("Failed to store data");
     }
    }
    else {
      toast.error("Please fill in all the fields");
     }
  };


  return (
    <>
      {/* <!-- Join our party section start --> */}
      <div className="join-party-section-area  join-form-bg">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className="join-single-item">
                <div className="content"></div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="contact-page-wrapper wow animate__animated animate__fadeInRight">
                <div className="contact-form contact-bg">
                  <div className="content desktop-center">
                    <h6 className="title">JOIN NOW</h6>
                  </div>
                  <form
                    id="contact-form"
                    action="#"
                    method="POST"
                    className="contact-page-form"
                    novalidate="novalidate"
                  >
                    <div className="row">
                      <div className="col-md-6 col-sm-6">
                        <div className="form-group">
                          <input
                            type="text"
                            name="name"
                            id="name"
                            placeholder="Name"
                            className="form-control"
                            required=""
                            aria-required="true"
                            value={joinData.name}
                            onChange={postJoinData}
                          />
                        </div>
                      </div>
                      <div className="col-md-6 col-sm-6">
                        <div className="form-group">
                          <input
                            type="email"
                            name="email"
                            id="email"
                            placeholder="Email"
                            className="form-control"
                            required=""
                            aria-required="true"
                            value={joinData.email}
                            onChange={postJoinData}
                          />
                        </div>
                      </div>
                      <div className="col-md-6 col-sm-6">
                        <div className="form-group">
                          <input
                            type="text"
                            name="phone"
                            id="phone"
                            placeholder="Mobile No"
                            className="form-control"
                            required=""
                            aria-required="true"
                            value={joinData.phone}
                            onChange={postJoinData}
                          />
                        </div>
                      </div>
                      <div className="col-md-6 col-sm-6">
                        <div className="form-group">
                          <input
                            type="text"
                            name="pcode"
                            id="pcode"
                            placeholder="Pin Code"
                            className="form-control"
                            required=""
                            aria-required="true"
                            value={joinData.pcode}
                            onChange={postJoinData}
                          />
                        </div>
                      </div>
                      <div className="col-md-12">
                        <div className="form-group">
                          <textarea
                            name="message"
                            id="message"
                            placeholder="Enter Message Here"
                            value={joinData.message}
                            onChange={postJoinData}
                          ></textarea>
                        </div>
                      </div>
                      <div className="col-md-12">
                        <div className="btn-wrapper desktop-center">
                          <Link
                            type="submit"
                            value="Send"
                            className="boxed-btn political-btn style-01"
                            onClick={submitDetails}
                          >
                            SUBMIT<i className="icon-paper-plan"></i>
                          </Link>
                        </div>
                      </div>
                    </div>
                    {/* Add the ToastContainer component here */}
                   <ToastContainer />
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- Join our party section end --> */}
    </>
  );
};

export default JoinNowForm;
