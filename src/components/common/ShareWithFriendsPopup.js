import React, { useState } from "react";
import "./ShareWithFriendsPopup.scss";
import axios from "axios";

const ShareWithFriendsPopup = ({ onClose, next }) => {
  const [formData, setFormData] = useState([
    { email: "", number: "" },
    { email: "", number: "" },
    { email: "", number: "" },
  ]);
  const [loading, setLoading] = useState(false);

  const handleInputChange = (index, field, value) => {
    const updatedFormData = formData.map((data, i) =>
      i === index ? { ...data, [field]: value } : data
    );
    setFormData(updatedFormData);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);
    try {
      const response = await axios.post(
        `${process.env.REACT_APP_API_BASE_URL}investor/invite-friends`,
        formData,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      console.log("Success:", response.data);
      next();
      // Optionally, you can show a success message or handle the response as needed
    } catch (error) {
      console.error("Error:", error);
      // Optionally, you can show an error message
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="popup-overlay">
      <div className="popup-content">
        <h2 className="popup-heading">Share with friends</h2>
        <p className="popup-paragraph">
          Bamboo Crypto will be more fun with friends. Share or invite at least
          5 friends to join the waitlist. The more people or friends you invite,
          the earlier we will invite you to have access to the platform.
        </p>
        {loading ? (
          <div className="loader">Loading...</div>
        ) : (
          <form className="popup-form" onSubmit={handleSubmit}>
            {formData.map((data, index) => (
              <div className="popup-row" key={index}>
                <div className="popup-input-group">
                  <label htmlFor={`friendEmail${index}`}>
                    Enter friend's email here
                  </label>
                  <input
                    type="email"
                    id={`friendEmail${index}`}
                    placeholder="Enter your friend's email"
                    value={data.email}
                    onChange={(e) =>
                      handleInputChange(index, "email", e.target.value)
                    }
                  />
                </div>
                <div className="popup-input-group">
                  <label htmlFor={`number${index}`}>Enter number here</label>
                  <input
                    type="number"
                    id={`number${index}`}
                    placeholder="Enter number"
                    value={data.number}
                    onChange={(e) =>
                      handleInputChange(index, "number", e.target.value)
                    }
                  />
                </div>
              </div>
            ))}
            <div className="popup-buttons">
              <button type="submit" className="popup-submit-button">
                Next
              </button>
              <button
                type="button"
                className="popup-skip-button"
                onClick={next}
              >
                Skip
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};

export default ShareWithFriendsPopup;
