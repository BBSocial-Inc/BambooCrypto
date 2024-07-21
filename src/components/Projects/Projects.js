import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setFormData } from "../../features/project/formSlice";
import ShareWithFriendsPopup from "../common/ShareWithFriendsPopup"; // Adjust the path as necessary
import "./projects.scss";
import axios from "axios";
import { toast } from "react-toastify";

const ProjectForm = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const formData = useSelector((state) => state.project);
  const [errors, setErrors] = useState({});
  const [isPopupVisible, setPopupVisible] = useState(false);

  const showPopup = () => setPopupVisible(true);
  const closePopup = () => setPopupVisible(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    dispatch(setFormData({ [name]: value }));
  };

  const validate = () => {
    const errors = {};
    if (!formData.email?.trim()) {
      errors.email = "Email is required.";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = "Email address is invalid.";
    }

    if (!formData.brandName?.trim())
      errors.brandName = "Project/Brand name is required.";
    if (formData.existing === undefined)
      errors.existing = "Please select if it is an existing project.";
    if (formData.existing === "Yes" && formData.token === undefined) {
      errors.token = "Please select if a token is already issued.";
    }
    return errors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length === 0) {
      try {
        const response = await axios.post(
          `${process.env.REACT_APP_API_BASE_URL}reservations/project`,
          formData,
          {
            headers: {
              "Content-Type": "application/json",
            },
          }
        );
        dispatch(setFormData(response.data.data));
        toast.success("Successfully Created");
        setPopupVisible(true);
      } catch (e) {
        console.log(e);
        toast.error(e.response.data.error);
      }
    } else {
      setErrors(validationErrors);
    }
  };

  const onNextClick = () => {
    navigate("/project/pre-sale");
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
          <h4 className="tophead">Lets get you on the waitlist</h4>
          <div className="form-body-container">
            <Form className="form-body" onSubmit={handleSubmit}>
              <Form.Group controlId="formBrandName">
                <Form.Label>Project / Brand name</Form.Label>
                <Form.Control
                  type="text"
                  name="brandName"
                  placeholder="Name of the project/brand"
                  value={formData.brandName}
                  onChange={handleChange}
                  isInvalid={!!errors.brandName}
                />
                <Form.Control.Feedback type="invalid">
                  {errors.brandName}
                </Form.Control.Feedback>
              </Form.Group>
              <Form.Group controlId="formEmail" className="pt-3">
                <Form.Label>Email Address</Form.Label>
                <Form.Control
                  type="email"
                  name="email"
                  placeholder="Enter your email"
                  value={formData.email}
                  onChange={handleChange}
                  isInvalid={!!errors.email}
                />
                <Form.Control.Feedback type="invalid">
                  {errors.email}
                </Form.Control.Feedback>
              </Form.Group>
              <Form.Group controlId="formExistingProject" className="pt-3">
                <Form.Label>Is it an existing project or a new one?</Form.Label>
                <div className="radio-buttons">
                  <input
                    type="radio"
                    id="existingYes"
                    name="existing"
                    value="Yes"
                    checked={formData.existing === "Yes"}
                    onChange={handleChange}
                  />
                  <label htmlFor="existingYes" className="radio-label">
                    Yes
                  </label>
                  <input
                    type="radio"
                    id="existingNo"
                    name="existing"
                    value="No"
                    checked={formData.existing === "No"}
                    onChange={handleChange}
                  />
                  <label htmlFor="existingNo" className="radio-label">
                    No
                  </label>
                </div>
                {errors.existing && (
                  <div className="invalid-feedback d-block">
                    {errors.existing}
                  </div>
                )}
              </Form.Group>
              {formData.existing === "Yes" && (
                <Form.Group controlId="formTokenStatus" className="pt-3">
                  <Form.Label>
                    If it is an existing one, do you have a token already
                    issued?
                  </Form.Label>
                  <div className="radio-buttons">
                    <input
                      type="radio"
                      id="tokenYes"
                      name="token"
                      value="Yes"
                      checked={formData.token === "Yes"}
                      onChange={handleChange}
                    />
                    <label htmlFor="tokenYes" className="radio-label">
                      Yes
                    </label>
                    <input
                      type="radio"
                      id="tokenNo"
                      name="token"
                      value="No"
                      checked={formData.token === "No"}
                      onChange={handleChange}
                    />
                    <label htmlFor="tokenNo" className="radio-label">
                      No
                    </label>
                  </div>
                  {errors.token && (
                    <div className="invalid-feedback d-block">
                      {errors.token}
                    </div>
                  )}
                </Form.Group>
              )}
              <Button variant="warning" type="submit" className="submit-button">
                Reserve your Project / Brand
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

export default ProjectForm;
