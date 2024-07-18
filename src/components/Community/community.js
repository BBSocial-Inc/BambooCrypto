import React, { useState } from "react";
import { Form, Button, Row, Col } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import ShareWithFriendsPopup from "../common/ShareWithFriendsPopup"; // Adjust the path as necessary
import { setFormData, resetForm } from "../../features/community/formSlice";
import { useSelector, useDispatch } from "react-redux";
import "./community.scss";

const CommunityForm = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [errors, setErrors] = useState({});
  const formData = useSelector((state) => state.community);
  const [isPopupVisible, setPopupVisible] = useState(false);

  const showPopup = () => setPopupVisible(true);
  const closePopup = () => setPopupVisible(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    dispatch(setFormData({ [name]: value }));
    setErrors((prevErrors) => ({ ...prevErrors, [name]: "" }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length === 0) {
      setPopupVisible(true);
    } else {
      setErrors(validationErrors);
    }
  };

  const validate = () => {
    const errors = {};
    if (!formData.firstName.trim())
      errors.firstName = "First name is required.";
    if (!formData.lastName.trim()) errors.lastName = "Last name is required.";
    if (!formData.email.trim()) {
      errors.email = "Email is required.";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = "Email address is invalid.";
    }
    if (!formData.username.trim()) errors.username = "Username is required.";
    if (!formData.numberOfMembers.trim())
      errors.numberOfMembers = "Number of members is required.";
    if (!formData.founderName.trim())
      errors.founderName = "Founder name is required.";
    return errors;
  };

  const onNextClick = () => {
    // Navigate to the next page
    navigate("/community/pre-sale");
  };

  return (
    <>
      <section className="reserveuser">
        <div className="custom-container">
          <Link to="/" className="backbtn">
            <img
              src="/assets/arrowbtnimg.svg"
              alt="arrowimg"
              className="arrowimg"
            />
            Back
          </Link>
          <p className="toppara">Username Reservation</p>
          <img
            src="/assets/progressimg.png"
            alt="progressimg"
            className="progressimg"
          />
          <h4 className="tophead">Let's get you on the waitlist</h4>
          <div className="form-body-container">
            <Form className="form-body" onSubmit={handleSubmit}>
              <Row>
                <Col>
                  <Form.Group controlId="formFirstName">
                    <Form.Label>First name</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Enter your first name"
                      name="firstName"
                      value={formData.firstName || ""}
                      onChange={handleChange}
                      isInvalid={!!errors.firstName}
                    />
                    <Form.Control.Feedback type="invalid">
                      {errors.firstName}
                    </Form.Control.Feedback>
                  </Form.Group>
                </Col>
                <Col>
                  <Form.Group controlId="formLastName">
                    <Form.Label>Last name</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Enter your last name"
                      name="lastName"
                      value={formData.lastName || ""}
                      onChange={handleChange}
                      isInvalid={!!errors.lastName}
                    />
                    <Form.Control.Feedback type="invalid">
                      {errors.lastName}
                    </Form.Control.Feedback>
                  </Form.Group>
                </Col>
              </Row>
              <Form.Group controlId="formEmail" className="pt-3">
                <Form.Label>Email Address</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Enter your email"
                  name="email"
                  value={formData.email || ""}
                  onChange={handleChange}
                  isInvalid={!!errors.email}
                />
                <Form.Control.Feedback type="invalid">
                  {errors.email}
                </Form.Control.Feedback>
              </Form.Group>
              <Form.Group controlId="formUsername" className="pt-3">
                <Form.Label>Community Username to be reserved</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter your preferred handle"
                  name="username"
                  value={formData.username || ""}
                  onChange={handleChange}
                  isInvalid={!!errors.username}
                />
                <Form.Control.Feedback type="invalid">
                  {errors.username}
                </Form.Control.Feedback>
              </Form.Group>
              <Row className="pt-4">
                <Col>
                  <Form.Group controlId="formNumberOfMembers">
                    <Form.Label>Number of members</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Enter number here"
                      name="numberOfMembers"
                      value={formData.numberOfMembers || ""}
                      onChange={handleChange}
                      isInvalid={!!errors.numberOfMembers}
                    />
                    <Form.Control.Feedback type="invalid">
                      {errors.numberOfMembers}
                    </Form.Control.Feedback>
                  </Form.Group>
                </Col>
                <Col>
                  <Form.Group controlId="formFounderName">
                    <Form.Label>Founder name</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Enter founder name"
                      name="founderName"
                      value={formData.founderName || ""}
                      onChange={handleChange}
                      isInvalid={!!errors.founderName}
                    />
                    <Form.Control.Feedback type="invalid">
                      {errors.founderName}
                    </Form.Control.Feedback>
                  </Form.Group>
                </Col>
              </Row>
              <Button variant="warning" type="submit" className="submit-button">
                Reserve your community
              </Button>
            </Form>
          </div>
        </div>
      </section>
      {isPopupVisible && (
        <ShareWithFriendsPopup onClose={closePopup} next={onNextClick} />
      )}
    </>
  );
};

export default CommunityForm;
