import React, { useState } from "react";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ContactForm = () => {

  const [contactData, setContactData] = useState({
    name: "",
    email: "",
    phone: "",
    pcode: "",
    message: "",
  });

  let name, value;

  const postContactData = (event) => {
    name = event.target.name;
    value = event.target.value;

    setContactData({ ...contactData, [name]: value });
  };

  // connection with firebase
  const submitData = async (event) => {
    event.preventDefault();
    const { name, email, phone,pcode, message } = contactData;

    if(name && email && phone && pcode &&message ){
    const res = fetch(
      "https://dpsadelhi-d6be4-default-rtdb.firebaseio.com/contactDataRecords.json",

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
      setContactData({
        name: "",
        email: "",
        phone: "",
        pcode:"",
        message: "",
      });
      // alert("Data Stored");
      // Use toast.success to display a success message
      toast.success("Your Data Stored Successfully");
    } else {
      // alert("Plz fill the Data");
      // Use toast.error to display an error message
      toast.error("Failed to store data");
     }
    }
    else {
      // alert("Plz fill the Data");
      // alert("Plz fill the Data");
      toast.error("Please fill in all the fields");
     }
  };

  return (
    <>
      <div className="col-lg-8">
        <div className="contact-page-wrapper home-six">
          <div className="contact-form">
            <div className="content">
              <h6 className="title">Leave your massage here</h6>
            </div>
            <form
              id="contact-form"
              action="#"
              method="POST"
              className="contact-page-form"
              novalidate="novalidate"
            >
              <div className="row">
                <div className="col-md-6 col-sm-12">
                  <div className="form-group">
                    <input
                      type="text"
                      name="name"
                      id="name"
                      placeholder="Your Name*"
                      className="form-control"
                      required=""
                      aria-required="true"
                      value={contactData.name}
                      onChange={postContactData}
                    />
                  </div>
                </div>
                <div className="col-md-6 col-sm-12">
                  <div className="form-group">
                    <input
                      type="email"
                      name="email"
                      id="email"
                      placeholder="Your Email*"
                      className="form-control"
                      required=""
                      aria-required="true"
                      value={contactData.email}
                      onChange={postContactData}
                    />
                  </div>
                </div>
                <div className="col-md-6 col-sm-12">
                  <div className="form-group">
                    <input
                      type="text"
                      name="phone"
                      id="phone"
                      placeholder="Your Phone*"
                      className="form-control"
                      required=""
                      aria-required="true"
                      value={contactData.phone}
                      onChange={postContactData}
                    />
                  </div>
                </div>
                <div className="col-md-6 col-sm-12">
                  <div className="form-group">
                    <input
                      type="text"
                      name="pcode"
                      id="pcode"
                      placeholder="Your Pin Code*"
                      className="form-control"
                      required=""
                      aria-required="true"
                      value={contactData.pcode}
                      onChange={postContactData}
                    />
                  </div>
                </div>
                <div className="col-md-12">
                  <div className="form-group">
                    <textarea
                      name="message"
                      id="message"
                      placeholder="Write Message Here"
                      className="text-area"
                      value={contactData.message}
                      onChange={postContactData}
                    ></textarea>
                  </div>
                </div>
                <div className="col-md-12">
                  <div className="btn-wrapper">
                    <Link 
                        type="submit"
                        value="Send"
                        id="submit_contact"
                        className="boxed-btn political-btn"
                        onClick={submitData}
                        >
                      JOIN NOW<i className="icon-paper-plan"></i>
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
    </>
  );
};

export default ContactForm;
