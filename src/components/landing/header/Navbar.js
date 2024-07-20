import React, { useState } from "react";
import "./navbar.scss";
import { Button } from "react-bootstrap";

import { Link } from "react-router-dom";
import Modal from "react-bootstrap/Modal";

const Navbar = () => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleLinkClick = () => {
    const textToCopy = `
      Hey Friends,
      
      I just found this new and interesting social network where you will learn and make money with crypto. Copy the link below and sign up to join the waitlist or the early bird. Remember to follow me in Bamboo Crypto
      
      Link: www.bamboocrypto.com
    `;

    navigator.clipboard
      .writeText(textToCopy)
      .then(() => {
        alert("Link and text copied to clipboard");
      })
      .catch((err) => {
        console.error("Failed to copy: ", err);
      });
  };

  return (
    <>
      <section className="main-navbar">
        <div className="navbar-container">
          <nav className="navbar navbar-expand-xl">
            <Link className="navbar-brand" to="/">
              <img src="/logo.svg" alt="img" className="img-fluid" />
            </Link>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M3 17H21M3 12H21M3 7H21"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
            <div
              className="collapse navbar-collapse justify-content-end"
              id="navbarSupportedContent"
            >
              <div className="left-links">
                <a
                  href="mailto:kwesi@powershop.link"
                  className="footerinnerlink"
                >
                  Contact Us
                </a>
              </div>
              <ul className="navbar-nav">
                <li className="nav-item dropdown">
                  <a
                    className="nav-link dropdown-toggle"
                    href="#"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    <span>Support Project</span>
                  </a>
                  <ul className="dropdown-menu">
                    <div className="parent-menu">
                      <li>
                        <Link className="dropdown-item" to="/premium">
                          Buy Premium features
                        </Link>
                      </li>
                      <li>
                        <Link className="dropdown-item" to="/support-us">
                          Donate to project
                        </Link>
                      </li>
                      <li>
                        <a onClick={handleShow} className="dropdown-item">
                          Refer Project to friend
                        </a>
                      </li>
                      <li>
                        <Link className="dropdown-item" to="/influencer">
                          Sign up as a creator / influencer
                        </Link>
                      </li>
                      <li>
                        <Link className="dropdown-item" to="/buyer">
                          Buy Bamboo Crypto TShirts and Souvenirs
                        </Link>
                      </li>
                    </div>
                  </ul>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/token">
                    Token Pre-Sale
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/invest">
                    Invest in Bamboo Crypto
                  </a>
                </li>
                <Link to="/reserveyourusername" className="navbtn">
                  Reserve your username
                </Link>
              </ul>
            </div>
          </nav>
        </div>
      </section>

      <Modal className="refer-modal" show={show} onHide={handleClose} centered>
        <Modal.Body>
          <div className="main-heading">
            <h5>Refer friends and family</h5>
          </div>
          <div className="main-content">
            <h6>
              Hey Friends, <br />I just found this new and interesting social
              network where you will learn and make money with crypto. Copy the
              link below and sign up to join the waitlist or the early bird.
              Remember to follow me in Bamboo Crypto
            </h6>
            <p>Link</p>
            <a href="www.bamboocrypto.com" onClick={handleLinkClick}>
              www.bamboocrypto.com
            </a>
          </div>
          <Button
            variant="warning"
            type="button"
            className="submit-button"
            onClick={handleLinkClick}
          >
            Copy Link
          </Button>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default Navbar;
