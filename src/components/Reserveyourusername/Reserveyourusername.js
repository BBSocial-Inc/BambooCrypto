import React, { useEffect } from "react";
import "./reserveyourusername.scss";
import { Link, useNavigate } from "react-router-dom";

const Reserveyourusername = () => {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleNavigation = (path) => {
    navigate(path);
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
          <h4 className="tophead">Reserve your username</h4>
          <div className="reservemaincards">
            <div className="reserveinnercard">
              <img
                src="/assets/usercardone.png"
                alt="reservecardimg"
                className="reservecardimg"
              />
              <h5 className="reservemainhead">Individual</h5>
              <p className="reservemainpara">
                Stay informed, connect with others, and participate in the
                crypto community.
              </p>
              <button
                className="reservemainbtn"
                onClick={() => handleNavigation("/individual")}
              >
                Reserve your individual
              </button>
            </div>
            <div className="reserveinnercard midcard">
              <img
                src="/assets/usercardtwo.png"
                alt="reservecardimg"
                className="reservecardimg"
              />
              <h5 className="reservemainhead">Community</h5>
              <p className="reservemainpara">
                Create a community, bring your members, grow together, share
                ideas and learn from and support each other.
              </p>
              <button
                className="reservemainbtn"
                onClick={() => handleNavigation("/community")}
              >
                Reserve your community
              </button>
            </div>
            <div className="reserveinnercard">
              <img
                src="/assets/usercardthree.png"
                alt="reservecardimg"
                className="reservecardimg"
              />
              <h5 className="reservemainhead">Project / Brand</h5>
              <p className="reservemainpara">
                Reach a targeted audience, share updates, and build brand
                awareness.
              </p>
              <button
                className="reservemainbtn"
                onClick={() => handleNavigation("/project")}
              >
                Reserve your Project/Brand
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Reserveyourusername;
