import "../../App.scss";
import React, { useEffect } from "react";
import Banner from "./main-banner/Banner.js";
import Navbar from "./header/Navbar";
import Footer from "./footer/Footer.js";
import Why from "./Why/Why.js";
import Security from "./Security/Security.js";
import Reserve from "./Reserve/Reserve.js";
import Types from "./Types/Types.js";
import Accounts from "./Accounts/Accounts.js";

function Landing() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Navbar />
      <Banner />
      <Why />
      <Types />
      <Accounts />
      <Security />
      <Reserve />
      <Footer />
    </>
  );
}

export default Landing;
