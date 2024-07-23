import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import Card from "../../assets/svgs/card";
import Usdt from "../../assets/svgs/usdt";
import Usdc from "../../assets/svgs/usdc";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { resetForm } from "../../features/individual/formSlice"; // Import your reset action if needed
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./individualPayment.scss";

const IndividualPayment = () => {
  const navigate = useNavigate();
  const [selectedIcon, setSelectedIcon] = useState("Card");
  const [remainingTime, setRemainingTime] = useState({});
  const [amount, setAmount] = useState("");
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  const formData = useSelector((state) => state.form); // Assuming your form data is here

  useEffect(() => {
    if (
      !formData.firstName?.trim() ||
      !formData.lastName?.trim() ||
      !formData.email?.trim() ||
      !formData.username?.trim()
    ) {
      navigate("/");
    }
  }, [formData, navigate]);

  useEffect(() => {
    const END_DATE = new Date("2024-08-04T00:00:00Z"); // Set your static end date here

    const calculateRemainingTime = (endDate) => {
      const now = new Date().getTime();
      const timeLeft = endDate - now;

      if (timeLeft <= 0) {
        return { days: 0, hours: 0, minutes: 0, seconds: 0 };
      }

      const totalSeconds = Math.floor(timeLeft / 1000);
      const days = Math.floor(totalSeconds / (3600 * 24));
      const hours = Math.floor((totalSeconds % (3600 * 24)) / 3600);
      const minutes = Math.floor((totalSeconds % 3600) / 60);
      const seconds = Math.floor(totalSeconds % 60);

      return { days, hours, minutes, seconds };
    };

    const updateTimer = () => {
      setRemainingTime(calculateRemainingTime(END_DATE));
    };

    updateTimer();
    const timerInterval = setInterval(updateTimer, 1000);

    return () => clearInterval(timerInterval);
  }, []);

  const handlePayment = async () => {
    setLoading(true);

    const errors = validateFormData(amount, selectedIcon);

    // If there are validation errors, show them and stop
    if (Object.keys(errors).length > 0) {
      for (const [key, message] of Object.entries(errors)) {
        toast.error(message);
      }
      setLoading(false);
      window.history.back();
      return;
    }

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
    } finally {
      setLoading(false);
    }
  };

  const validateFormData = (amount, selectedIcon) => {
    const errors = {};
    console.log(amount);
    if (!amount || isNaN(amount) || amount <= 0) {
      errors.amount = "A valid amount is required.";
    }
    if (!selectedIcon) {
      errors.paymentMethod = "Please select a payment method.";
    }

    return errors;
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
                    <h5>{remainingTime.days}</h5>
                  </div>
                  <div className="single-time">
                    <p>HOURS</p>
                    <h5>{remainingTime.hours}</h5>
                  </div>
                  <div className="single-time">
                    <p>MINUTES</p>
                    <h5>{remainingTime.minutes}</h5>
                  </div>
                  <div className="single-time">
                    <p>SECONDS</p>
                    <h5>{remainingTime.seconds}</h5>
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

export default IndividualPayment;
