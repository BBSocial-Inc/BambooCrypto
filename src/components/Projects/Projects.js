import React, { useState } from "react";
import { Form, Button, Row, Col } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setFormData, resetForm } from "../../features/project/formSlice";
import ShareWithFriendsPopup from "../common/ShareWithFriendsPopup"; // Adjust the path as necessary
import "./projects.scss";

const ProjectForm = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const formData = useSelector((state) => state.project);
  const [isPopupVisible, setPopupVisible] = useState(false);

  const showPopup = () => setPopupVisible(true);
  const closePopup = () => setPopupVisible(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    dispatch(setFormData({ [name]: value }));
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
            <Form className="form-body">
              <Form.Group controlId="formName">
                <Form.Label>Project / Brand name</Form.Label>
                <Form.Control
                  type="text"
                  name="brandName"
                  placeholder="Name of the project/brand"
                  value={formData.brandName}
                  onChange={handleChange}
                />
              </Form.Group>
              <Form.Group controlId="formEmail" className="pt-3">
                <Form.Label>Email Address</Form.Label>
                <Form.Control
                  type="email"
                  name="email"
                  placeholder="Enter your email"
                  value={formData.email}
                  onChange={handleChange}
                />
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
              </Form.Group>
              <Form.Group controlId="formTokenStatus" className="pt-3">
                <Form.Label>
                  If it is an existing one, do you have a token already issued?
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
              </Form.Group>
              <Button
                variant="warning"
                type="button"
                className="submit-button"
                onClick={showPopup}
              >
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
