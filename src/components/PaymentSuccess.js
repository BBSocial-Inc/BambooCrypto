import React, { useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import axios from "axios";
import "./paymentSuccess.scss";

const PaymentSuccess = () => {
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const query = new URLSearchParams(location.search);
    const uuid = query.get("id");
    const table = query.get("table");
    if (uuid && table) {
      verifyPayment(uuid, table);
    }
  }, [location.search]);

  const verifyPayment = async (uuid, table) => {
    try {
      const response = await axios.post(
        `${process.env.REACT_APP_API_BASE_URL}payments/verify`,
        { uuid, table },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      setTimeout(() => {
        navigate(table == "Investors" ? "/" : "/support-us");
      }, 5000); // Redirect after 5 seconds
    } catch (error) {
      console.error("Error verifying payment:", error);
      // Handle error
    }
  };

  return (
    <section className="payment-success">
      <div className="custom-container">
        <h4 className="heading">Payment Successful</h4>
        <div className="cards-container">
          <div className="inner-card mid-card">
            <h1 className="inner-heading">Thank you for your payment!</h1>
            <p className="inner-paragraph">
              Your payment has been successfully processed. You will be
              redirected to the support page shortly.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PaymentSuccess;
