import React, { useState } from "react";
import "./Buyer.scss";
import { Link } from "react-router-dom";
import { Form, Button } from "react-bootstrap";
import Card from "../../assets/svgs/card";
import Usdt from "../../assets/svgs/usdt";
import Usdc from "../../assets/svgs/usdc";
import axios from "axios";

const Buyer = () => {
  const [selectedIcon, setSelectedIcon] = useState("Card");
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phoneNumber: "",
    table: "Buyers of Tshirts",
  });
  const [amount, setAmount] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

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
            <div className="bottom-card">
              <div className="left-content">
                <h6>Purchase Bamboo Crypto Souvenirs</h6>
                <p className="text-white">
                  Bamboo Crypto team will make available souvenirs such as
                  T-shirt, swags, tote bags etc.
                </p>
              </div>
              <div className="right-content">
                <div>
                  <Form className="form-body">
                    <Form.Group controlId="formFullName">
                      <Form.Label>Enter your Full name</Form.Label>
                      <Form.Control
                        type="text"
                        name="fullName"
                        placeholder="Enter your Full name"
                        value={formData.fullName}
                        onChange={handleChange}
                      />
                    </Form.Group>

                    <Form.Group controlId="formEmail pt-3">
                      <Form.Label>Enter your email</Form.Label>
                      <Form.Control
                        type="email"
                        name="email"
                        placeholder="Enter your email"
                        value={formData.email}
                        onChange={handleChange}
                      />
                    </Form.Group>

                    <Form.Group controlId="formPhoneNumber pt-3 pb-3">
                      <Form.Label>Enter your phone number</Form.Label>
                      <Form.Control
                        type="text"
                        name="phoneNumber"
                        placeholder="+1 Enter your phone number here"
                        value={formData.phoneNumber}
                        onChange={handleChange}
                      />
                    </Form.Group>
                  </Form>
                </div>
                <div className="parent-container pt-3">
                  <div className="payment-options">
                    <div
                      className={`payment-icon ${
                        selectedIcon === "Card" ? "selected" : ""
                      }`}
                      onClick={() => setSelectedIcon("Card")}
                    >
                      <Card isSelected={selectedIcon === "Card"} />
                    </div>
                    {/* <div
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
                    </div> */}
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
                  disabled={loading || !amount || !formData.email}
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

export default Buyer;
