import React, { useRef, useState } from "react";
import "./why.scss";
import Thumbnail from "../../../assets/images/video-thumbnail.png";

const Why = () => {
  return (
    <section className="whymain">
      <div className="whyinner">
        <h1 className="whyinnerhead">Why Bamboo Crypto? Our vision!</h1>
      </div>
      <div className="video-container">
        <iframe
          src="https://www.youtube.com/embed/RcCYm7wtXv8"
          title="Bamboo Crypto Community Conversation"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></iframe>
      </div>
    </section>
  );
};

export default Why;
