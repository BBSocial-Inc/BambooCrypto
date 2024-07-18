import React, { useState } from "react";
import "./support.scss";
import { Link } from "react-router-dom";
import Card from "../../assets/svgs/card";
import Usdt from "../../assets/svgs/usdt";
import Usdc from "../../assets/svgs/usdc";
import axios from "axios";

const Payment = () => {
  const [selectedIcon, setSelectedIcon] = useState("Card");
  const [amount, setAmount] = useState("");

  const [loading, setLoading] = useState(false);

  const handlePayment = async () => {
    setLoading(true);
    try {
      if (selectedIcon === "Card") {
        const response = await axios.post(
          `${process.env.REACT_APP_API_BASE_URL}payments/stripe`, // Replace with your API endpoint
          { amount, table: "Investors" },
          {
            headers: {
              "Content-Type": "application/json",
            },
          }
        );

        const { message, transaction } = response.data;

        if (transaction && transaction.url) {
          window.location.href = transaction.url; // Redirect to Stripe Checkout page
        }
      }
      if (selectedIcon === "USDT" || selectedIcon === "USDC") {
        const response = await axios.post(
          `${process.env.REACT_APP_API_BASE_URL}payments/coinbase`, // Replace with your API endpoint
          { amount, table: "Investors", paymentMethod: selectedIcon },
          {
            headers: {
              "Content-Type": "application/json",
            },
          }
        );
        const { message, transaction } = response.data;

        if (transaction && transaction.hosted_url) {
          window.location.href = transaction.hosted_url; // Redirect to Stripe Checkout page
        }
      }
      // Handle successful payment
    } catch (error) {
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
              <h6>Support the project</h6>
            </div>
            <div className="bottom-card">
              <div className="left-content">
                <h6>Purchase Bamboo Crypto Souvenirs</h6>
                <p className="text-white">
                  Bamboo Crypto team will make available souvenirs such as
                  T-shirt, swags, tote bags etc.
                </p>
              </div>
              <div className="right-content">
                <h6 className="main-heading">Support the project</h6>
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
                <div className="option-field pt-3">
                  <label>{selectedIcon}</label>
                  <input
                    type="number"
                    placeholder="Enter your amount here"
                    value={amount}
                    onChange={(e) => setAmount(e.target.value)}
                    min="0"
                  />
                </div>
                <button className="btn-pay" onClick={handlePayment}>
                  {selectedIcon === "Card" ? "Pay amount" : "Connect Wallet"}
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
