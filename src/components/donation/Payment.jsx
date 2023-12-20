import React from "react";
import { Link } from "react-router-dom";
import StripeCheckout from "react-stripe-checkout";

const Payment = () => {
  const onToken = (token) => {
    console.log(token);
  };
  return (
    <>
      <StripeCheckout
        style={{ marginTop: "13em" }}
        token={onToken}
        stripeKey="pk_live_51OP3XYSAMnjVDVp86ubNiitByYrfH4afxpqxqIvq74D1SOkgEkay0Se0P4xvdidO5Dp37hVMatRtCNa7BMhgIacn0000EDaoTL"
      />
      {/* <div className="btn-wrapper desktop-center">
        <Link to="/contact" className="boxed-btn political-btn style-01">
          PAY WITH CARD<i className="icon-paper-plan"></i>
        </Link>
      </div> */}
    </>
  );
};

export default Payment;
