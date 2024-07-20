import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import "./invest.scss";

const Invest = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phoneNumber: "",
    accreditedInvestor: "",
    investmentAmount: "",
    previousInvestment: "",
    riskAwareness: "",
    bestWayToReach: "",
    preferredMode: "",
    referralEmails: ["", "", "", "", ""],
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleReferralChange = (index, value) => {
    const updatedReferralEmails = [...formData.referralEmails];
    updatedReferralEmails[index] = value;
    setFormData({ ...formData, referralEmails: updatedReferralEmails });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        `${process.env.REACT_APP_API_BASE_URL}investor/create`,
        formData
      );
      console.log("Investor created successfully:", response.data);
      navigate("/"); // Redirect to a success page
    } catch (error) {
      console.error(
        "Error creating Investor:",
        error.response ? error.response.data : error.message
      );
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
              <h6>Invest in Bamboo Crypto</h6>
            </div>
            <div className="bottom-card">
              <div className="left-content">
                <h6>Bamboo Crypto is raising 2M pre-seed</h6>
                <p className="text-white">
                  to build the platform and wants to give opportunities to the
                  users of the platform to participate. If interested, please
                  answer the following questions and our CEO/team will reach out
                  to you.
                </p>
                <p className="text-white">
                  For more details, please contact{" "}
                  <a
                    href="mailto:kwesi@powershop.link"
                    className="contact-link"
                  >
                    kwesi@powershop.link
                  </a>
                  .
                </p>
              </div>
              <div className="right-content">
                <div className="form-body-container">
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

                    <Form.Group controlId="formEmail">
                      <Form.Label>Enter your email</Form.Label>
                      <Form.Control
                        type="email"
                        name="email"
                        placeholder="Enter your email"
                        value={formData.email}
                        onChange={handleChange}
                      />
                    </Form.Group>

                    <Form.Group controlId="formPhoneNumber">
                      <Form.Label>Enter your phone number</Form.Label>
                      <Form.Control
                        type="text"
                        name="phoneNumber"
                        placeholder="+1 Enter your phone number here"
                        value={formData.phoneNumber}
                        onChange={handleChange}
                      />
                    </Form.Group>

                    <Form.Group
                      controlId="formAccreditedInvestor"
                      className="pt-3"
                    >
                      <Form.Label>Are you an accredited investor?</Form.Label>
                      <div className="radio-buttons">
                        <input
                          type="radio"
                          id="accreditedYes"
                          name="accreditedInvestor"
                          value="Yes"
                          checked={formData.accreditedInvestor === "Yes"}
                          onChange={handleChange}
                        />
                        <label htmlFor="accreditedYes" className="radio-label">
                          Yes
                        </label>
                        <input
                          type="radio"
                          id="accreditedNo"
                          name="accreditedInvestor"
                          value="No"
                          checked={formData.accreditedInvestor === "No"}
                          onChange={handleChange}
                        />
                        <label htmlFor="accreditedNo" className="radio-label">
                          No
                        </label>
                      </div>
                    </Form.Group>

                    <Form.Group
                      controlId="formInvestmentAmount"
                      className="pt-3"
                    >
                      <Form.Label>
                        How much would you like to invest in Bamboo Crypto?
                      </Form.Label>
                      <Form.Control
                        type="text"
                        name="investmentAmount"
                        placeholder="Enter amount here"
                        value={formData.investmentAmount}
                        onChange={handleChange}
                      />
                    </Form.Group>

                    <Form.Group
                      controlId="formPreviousInvestment"
                      className="pt-3"
                    >
                      <Form.Label>
                        Have you invested in a startup before?
                      </Form.Label>
                      <div className="radio-buttons">
                        <input
                          type="radio"
                          id="previousYes"
                          name="previousInvestment"
                          value="Yes"
                          checked={formData.previousInvestment === "Yes"}
                          onChange={handleChange}
                        />
                        <label htmlFor="previousYes" className="radio-label">
                          Yes
                        </label>
                        <input
                          type="radio"
                          id="previousNo"
                          name="previousInvestment"
                          value="No"
                          checked={formData.previousInvestment === "No"}
                          onChange={handleChange}
                        />
                        <label htmlFor="previousNo" className="radio-label">
                          No
                        </label>
                      </div>
                    </Form.Group>

                    <Form.Group controlId="formRiskAwareness" className="pt-3">
                      <Form.Label>
                        Are you aware of the risk associated with investing in
                        early stage startups?
                      </Form.Label>
                      <div className="radio-buttons">
                        <input
                          type="radio"
                          id="riskYes"
                          name="riskAwareness"
                          value="Yes"
                          checked={formData.riskAwareness === "Yes"}
                          onChange={handleChange}
                        />
                        <label htmlFor="riskYes" className="radio-label">
                          Yes
                        </label>
                        <input
                          type="radio"
                          id="riskNo"
                          name="riskAwareness"
                          value="No"
                          checked={formData.riskAwareness === "No"}
                          onChange={handleChange}
                        />
                        <label htmlFor="riskNo" className="radio-label">
                          No
                        </label>
                      </div>
                    </Form.Group>

                    <Form.Group controlId="formBestWayToReach" className="pt-3">
                      <Form.Label>
                        What is the best way to reach out to you?
                      </Form.Label>
                      <div className="radio-buttons">
                        <input
                          type="radio"
                          id="morning"
                          name="bestWayToReach"
                          value="Morning"
                          checked={formData.bestWayToReach === "Morning"}
                          onChange={handleChange}
                        />
                        <label htmlFor="morning" className="radio-label">
                          Morning
                        </label>
                        <input
                          type="radio"
                          id="afternoon"
                          name="bestWayToReach"
                          value="Afternoon"
                          checked={formData.bestWayToReach === "Afternoon"}
                          onChange={handleChange}
                        />
                        <label htmlFor="afternoon" className="radio-label">
                          Afternoon
                        </label>
                        <input
                          type="radio"
                          id="evening"
                          name="bestWayToReach"
                          value="Evening"
                          checked={formData.bestWayToReach === "Evening"}
                          onChange={handleChange}
                        />
                        <label htmlFor="evening" className="radio-label">
                          Evening
                        </label>
                      </div>
                    </Form.Group>

                    <Form.Group controlId="formPreferredMode" className="pt-3">
                      <Form.Label>Mode</Form.Label>
                      <div className="radio-buttons">
                        <input
                          type="radio"
                          id="phone"
                          name="preferredMode"
                          value="Phone"
                          checked={formData.preferredMode === "Phone"}
                          onChange={handleChange}
                        />
                        <label htmlFor="phone" className="radio-label">
                          Phone
                        </label>
                        <input
                          type="radio"
                          id="email"
                          name="preferredMode"
                          value="Email"
                          checked={formData.preferredMode === "Email"}
                          onChange={handleChange}
                        />
                        <label htmlFor="email" className="radio-label">
                          Email
                        </label>
                        <input
                          type="radio"
                          id="zoom"
                          name="preferredMode"
                          value="Zoom/ Google Meet"
                          checked={
                            formData.preferredMode === "Zoom/ Google Meet"
                          }
                          onChange={handleChange}
                        />
                        <label htmlFor="zoom" className="radio-label">
                          Zoom/ Google Meet
                        </label>
                      </div>
                    </Form.Group>

                    <Form.Group controlId="formReferralEmails" className="pt-3">
                      <Form.Label>
                        Give us or more people that you would like to introduce
                        this platform and this opportunity to. We will reach out
                        to them if that’s okay with you.
                      </Form.Label>
                      {[...Array(5)].map((_, index) => (
                        <Form.Control
                          key={index}
                          type="email"
                          name={`referralEmail${index + 1}`}
                          placeholder="Enter email here"
                          className="mb-2"
                          value={formData.referralEmails[index]}
                          onChange={(e) =>
                            handleReferralChange(index, e.target.value)
                          }
                        />
                      ))}
                    </Form.Group>

                    <Button
                      variant="warning"
                      type="button"
                      className="submit-button"
                      onClick={handleSubmit}
                    >
                      Submit
                    </Button>
                  </Form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Invest;
