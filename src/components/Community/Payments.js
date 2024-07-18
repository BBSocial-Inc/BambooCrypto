import React, { useState } from "react";
import "./payments.scss";
import { Link } from "react-router-dom";
import Card from "../../assets/svgs/card";
import Usdt from "../../assets/svgs/usdt";
import Usdc from "../../assets/svgs/usdc";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import { resetForm } from "../../features/community/formSlice"; // Import your reset action if needed

const Payment = () => {
  const [selectedIcon, setSelectedIcon] = useState("Card");
  const [amount, setAmount] = useState("");
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  const formData = useSelector((state) => state.community); // Assuming your form data is here

  const handlePayment = async () => {
    setLoading(true);
    try {
      const requestData = {
        ...formData,
        amount: parseFloat(amount), // Ensure the amount is a number
        paymentMethod: selectedIcon,
      };

      if (selectedIcon === "Card") {
        const response = await axios.post(
          `${process.env.REACT_APP_API_BASE_URL}payments/stripe`, // Replace with your API endpoint
          requestData,
          {
            headers: {
              "Content-Type": "application/json",
            },
          }
        );

        const { message, transaction } = response.data;

        if (transaction && transaction.url) {
          dispatch(resetForm()); // Optionally reset form state
          window.location.href = transaction.url; // Redirect to Stripe Checkout page
        }
      }
      if (selectedIcon === "USDT" || selectedIcon === "USDC") {
        const response = await axios.post(
          `${process.env.REACT_APP_API_BASE_URL}payments/coinbase`, // Replace with your API endpoint
          requestData,
          {
            headers: {
              "Content-Type": "application/json",
            },
          }
        );
        const { message, transaction } = response.data;

        if (transaction && transaction.hosted_url) {
          dispatch(resetForm()); // Optionally reset form state
          window.location.href = transaction.hosted_url; // Redirect to Stripe Checkout page
        }
      }
      // Handle successful payment
      dispatch(resetForm()); // Optionally reset form state
    } catch (error) {
      toast.success(error.response.data.error);
      console.error("Error processing payment:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <section className="premium-feature">
        <div className="premium-container">
          <div className="btn-back">
            <Link to="/">
              <img
                src="\assets\premium\back-icon.svg"
                alt="img"
                className="img-fluid"
              />
              Back
            </Link>
          </div>
          <div className="parent">
            <div className="upper-progress">
              <h6>Premium Pre-Sale</h6>
              <img
                src="\assets\premium\progress-bar.svg"
                alt="img"
                className="img-fluid"
              />
            </div>
            <div className="bottom-card">
              <div className="left-content">
                <h6>Get access to premium profile pre-sale</h6>
              </div>
              <div className="right-content">
                <h6 className="main-heading">Next price increase in</h6>
                <div className="timer">
                  <div className="single-time">
                    <p>DAYS</p>
                    <h5>01</h5>
                  </div>
                  <div className="single-time">
                    <p>HOURS</p>
                    <h5>01</h5>
                  </div>
                  <div className="single-time">
                    <p>MINUTES</p>
                    <h5>01</h5>
                  </div>
                  <div className="single-time">
                    <p>SECONDS</p>
                    <h5>01</h5>
                  </div>
                </div>
                <p className="para">
                  Amount paid will be converted post tokenomics design and
                  airdropped when the token is live.
                </p>
                <div className="parent-container">
                  <div className="payment-options">
                    <div
                      className={`payment-icon ${
                        selectedIcon === "Card" ? "selected" : ""
                      }`}
                      onClick={() => setSelectedIcon("Card")}
                    >
                      <Card isSelected={selectedIcon === "Card"} />
                    </div>
                    <div
                      className={`payment-icon ${
                        selectedIcon === "USDT" ? "selected" : ""
                      }`}
                      onClick={() => setSelectedIcon("USDT")}
                    >
                      <Usdt isSelected={selectedIcon === "USDT"} />
                    </div>
                    <div
                      className={`payment-icon ${
                        selectedIcon === "USDC" ? "selected" : ""
                      }`}
                      onClick={() => setSelectedIcon("USDC")}
                    >
                      <Usdc isSelected={selectedIcon === "USDC"} />
                    </div>
                  </div>
                </div>
                <div className="option-field">
                  <label>{selectedIcon}</label>
                  <input
                    type="number"
                    placeholder="Enter your amount here"
                    value={amount}
                    onChange={(e) => setAmount(e.target.value)}
                    min="0"
                  />
                </div>
                <button
                  className="btn-pay"
                  onClick={handlePayment}
                  disabled={loading}
                >
                  {loading
                    ? "Processing..."
                    : selectedIcon === "Card"
                    ? "Pay amount"
                    : "Connect Wallet"}
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Payment;
