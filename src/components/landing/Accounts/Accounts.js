import React from "react";
import "./accounts.scss";
import { Link, useNavigate } from "react-router-dom";

const Accounts = () => {
  const navigate = useNavigate();

  const handleNavigation = (path) => {
    navigate(path);
  };

  return (
    <section className="accountsmain">
      <h1 className="accounthead">
        Types of accounts or profiles on Bamboo Crypto
      </h1>
      <div className="accountscards">
        <div className="inneraccountcard">
          <img
            src="/assets/accountcardone.png"
            alt="accountcardimg"
            className="accountcardimg"
          />
          <h4 className="accountcardhead">
            Crypto <br /> Enthusiast
          </h4>
          <p className="accountcardpara" style={{ paddingBottom: "32px" }}>
            Stay informed, connect with others, and participate in the crypto
            community.
          </p>

          <Link to="/reserveyourusername" className="accountcardbtn">
            Reserve your username
          </Link>
        </div>
        <div className="inneraccountcard">
          <img
            src="/assets/accountcardtwo.png"
            alt="accountcardimg"
            className="accountcardimg"
          />
          <h4 className="accountcardhead">Community Leader</h4>
          <p className="accountcardpara">
            Create a community, bring your members, grow together, share ideas
            and learn from and support each other.
          </p>
          <button
            className="accountcardbtn"
            onClick={() => handleNavigation("/community")}
          >
            Reserve your community
          </button>
        </div>
        <div className="inneraccountcard">
          <img
            src="/assets/accountcaqrdthree.png"
            alt="accountcardimg"
            className="accountcardimg"
          />
          <h4 className="accountcardhead">
            Brand <br />
            Account
          </h4>
          <p className="accountcardpara">
            Reach a targeted audience, share updates, and build brand awareness.
          </p>
          <button
            className="accountcardbtn"
            onClick={() => handleNavigation("/project")}
          >
            Reserve your brand or business name
          </button>
        </div>
        <div className="inneraccountcard">
          <img
            src="/assets/accountcardfour.png"
            alt="accountcardimg"
            className="accountcardimg"
          />
          <h4 className="accountcardhead">
            Project <br />
            Account
          </h4>
          <p className="accountcardpara">
            Set up a project Account, grow users who support your project,
            engage with more community and launch a successful project
          </p>
          <button
            className="accountcardbtn"
            onClick={() => handleNavigation("/project")}
          >
            Reserve your project name
          </button>
        </div>
      </div>
    </section>
  );
};

export default Accounts;
