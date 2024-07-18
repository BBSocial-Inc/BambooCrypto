import React, { useState } from "react";
import { Form, Button, Row, Col } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import "./Influencer.scss";

const Influencer = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    preferredHandle: "",
    helpPromote: "",
    twitterHandle: "",
    twitterFollowers: "",
    telegramHandle: "",
    telegramFollowers: "",
    youtubeHandle: "",
    youtubeFollowers: "",
    tikTokHandle: "",
    tikTokFollowers: "",
    instagramHandle: "",
    instagramFollowers: "",
    linkedInHandle: "",
    linkedInFollowers: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        `${process.env.REACT_APP_API_BASE_URL}influencers`,
        formData
      );
      console.log("Influencer created successfully:", response.data);
      navigate("/"); // Redirect to a success page
    } catch (error) {
      console.error(
        "Error creating influencer:",
        error.response ? error.response.data : error.message
      );
    }
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
          <h6 className="tophead">Sign up as a creator / influencer</h6>

          <p className="toppara text-white">
            Bamboo Crypto will work with you to promote your account to your
            followers or subscribers on other social media platforms
          </p>
          <div className="form-body-container">
            <Form className="form-body">
              <Row>
                <Col>
                  <Form.Group controlId="formFirstName">
                    <Form.Label>First name</Form.Label>
                    <Form.Control
                      type="text"
                      name="firstName"
                      placeholder="Enter your first name"
                      value={formData.firstName}
                      onChange={handleChange}
                    />
                  </Form.Group>
                </Col>
                <Col>
                  <Form.Group controlId="formLastName">
                    <Form.Label>Last name</Form.Label>
                    <Form.Control
                      type="text"
                      name="lastName"
                      placeholder="Enter your last name"
                      value={formData.lastName}
                      onChange={handleChange}
                    />
                  </Form.Group>
                </Col>
              </Row>
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
              <Form.Group controlId="formPreferredHandle" className="pt-3">
                <Form.Label>Your Preferred handle</Form.Label>
                <Form.Control
                  type="text"
                  name="preferredHandle"
                  placeholder="Enter your preferred handle"
                  value={formData.preferredHandle}
                  onChange={handleChange}
                />
              </Form.Group>
              <Form.Group controlId="formHelpPromote" className="pt-3">
                <Form.Label>
                  How do you intend to help promote Bamboo Crypto?
                </Form.Label>
                <Form.Control
                  type="text"
                  name="helpPromote"
                  placeholder="Type it here"
                  value={formData.helpPromote}
                  onChange={handleChange}
                />
              </Form.Group>
              <Row>
                <Col>
                  <Form.Group controlId="formTwitterHandle" className="pt-3">
                    <Form.Label>Twitter handle</Form.Label>
                    <Form.Control
                      type="text"
                      name="twitterHandle"
                      placeholder="Type it here"
                      value={formData.twitterHandle}
                      onChange={handleChange}
                    />
                  </Form.Group>
                </Col>
                <Col>
                  <Form.Group controlId="formTwitterFollowers" className="pt-3">
                    <Form.Label>Number of followers</Form.Label>
                    <Form.Control
                      type="number"
                      min="0"
                      name="twitterFollowers"
                      placeholder="Type it here"
                      value={formData.twitterFollowers}
                      onChange={handleChange}
                    />
                  </Form.Group>
                </Col>
              </Row>
              <Row>
                <Col>
                  <Form.Group controlId="formTelegramHandle" className="pt-3">
                    <Form.Label>Telegram handle</Form.Label>
                    <Form.Control
                      type="text"
                      name="telegramHandle"
                      placeholder="Type it here"
                      value={formData.telegramHandle}
                      onChange={handleChange}
                    />
                  </Form.Group>
                </Col>
                <Col>
                  <Form.Group
                    controlId="formTelegramFollowers"
                    className="pt-3"
                  >
                    <Form.Label>Number of followers</Form.Label>
                    <Form.Control
                      type="number"
                      min="0"
                      name="telegramFollowers"
                      placeholder="Type it here"
                      value={formData.telegramFollowers}
                      onChange={handleChange}
                    />
                  </Form.Group>
                </Col>
              </Row>
              <Row>
                <Col>
                  <Form.Group controlId="formYoutubeHandle" className="pt-3">
                    <Form.Label>Youtube handle</Form.Label>
                    <Form.Control
                      type="text"
                      name="youtubeHandle"
                      placeholder="Type it here"
                      value={formData.youtubeHandle}
                      onChange={handleChange}
                    />
                  </Form.Group>
                </Col>
                <Col>
                  <Form.Group controlId="formYoutubeFollowers" className="pt-3">
                    <Form.Label>Number of followers</Form.Label>
                    <Form.Control
                      type="number"
                      min="0"
                      name="youtubeFollowers"
                      placeholder="Type it here"
                      value={formData.youtubeFollowers}
                      onChange={handleChange}
                    />
                  </Form.Group>
                </Col>
              </Row>
              <Row>
                <Col>
                  <Form.Group controlId="formTikTokHandle" className="pt-3">
                    <Form.Label>Tik Tok handle</Form.Label>
                    <Form.Control
                      type="text"
                      name="tikTokHandle"
                      placeholder="Type it here"
                      value={formData.tikTokHandle}
                      onChange={handleChange}
                    />
                  </Form.Group>
                </Col>
                <Col>
                  <Form.Group controlId="formTikTokFollowers" className="pt-3">
                    <Form.Label>Number of followers</Form.Label>
                    <Form.Control
                      type="number"
                      min="0"
                      name="tikTokFollowers"
                      placeholder="Type it here"
                      value={formData.tikTokFollowers}
                      onChange={handleChange}
                    />
                  </Form.Group>
                </Col>
              </Row>
              <Row>
                <Col>
                  <Form.Group controlId="formInstagramHandle" className="pt-3">
                    <Form.Label>Instagram handle</Form.Label>
                    <Form.Control
                      type="text"
                      name="instagramHandle"
                      placeholder="Type it here"
                      value={formData.instagramHandle}
                      onChange={handleChange}
                    />
                  </Form.Group>
                </Col>
                <Col>
                  <Form.Group
                    controlId="formInstagramFollowers"
                    className="pt-3"
                  >
                    <Form.Label>Number of followers</Form.Label>
                    <Form.Control
                      type="number"
                      min="0"
                      name="instagramFollowers"
                      placeholder="Type it here"
                      value={formData.instagramFollowers}
                      onChange={handleChange}
                    />
                  </Form.Group>
                </Col>
              </Row>
              <Row>
                <Col>
                  <Form.Group controlId="formLinkedInHandle" className="pt-3">
                    <Form.Label>LinkedIn handle</Form.Label>
                    <Form.Control
                      type="text"
                      name="linkedInHandle"
                      placeholder="Type it here"
                      value={formData.linkedInHandle}
                      onChange={handleChange}
                    />
                  </Form.Group>
                </Col>
                <Col>
                  <Form.Group
                    controlId="formLinkedInFollowers"
                    className="pt-3"
                  >
                    <Form.Label>Number of followers</Form.Label>
                    <Form.Control
                      type="number"
                      min="0"
                      name="linkedInFollowers"
                      placeholder="Type it here"
                      value={formData.linkedInFollowers}
                      onChange={handleChange}
                    />
                  </Form.Group>
                </Col>
              </Row>
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
      </section>
    </>
  );
};

export default Influencer;
