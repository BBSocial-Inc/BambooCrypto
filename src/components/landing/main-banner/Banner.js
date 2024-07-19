import React, { useEffect, useRef, useState } from "react";
import "./banner.scss";
import { Link } from "react-router-dom";

const Banner = () => {
  const bgRef = useRef(null);
  const [isFixed, setIsFixed] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (bgRef.current) {
        const offsetTop = bgRef.current.getBoundingClientRect().top;
        if (offsetTop <= 0) {
          setIsFixed(true);
        } else {
          setIsFixed(false);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <>
      <section className="mainbanner" ref={bgRef}>
        <img
          src="/assets/bannerbg.png"
          alt="bannerimg"
          className={isFixed ? "bannerimg isfixed" : "bannerimg"}
        />
        <div className="innerbanner">
          <h1 className="bannerhead">
            Join the <span className="yellowtext">Future of Crypto</span>.
            Reserve Your Username Now
          </h1>
          <h6 className="bannerpara">
            The social network for crypto enthusiasts, crypto conversations,
            web3 education and crypto transactions.
          </h6>
          <Link to="/reserveyourusername" className="bannerbtn">
            Reserve your username
          </Link>
        </div>
        <div className="bannerimages">
          <div className="innerimg">
            <img
              src="/assets/bannercardone.png"
              alt="innermainimg"
              className="innermainimg"
            />
          </div>
          <div className="innerimg">
            <img
              src="/assets/bannnercardtwo.png"
              alt="innermainimg"
              className="innermainimg"
            />
          </div>
          <div className="innerimg">
            <img
              src="/assets/bannercardthree.png"
              alt="innermainimg"
              className="innermainimg"
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default Banner;
