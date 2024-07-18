import React, { useRef, useState } from "react";
import "./why.scss";
import MyVideo from "../../../assets/videos/bamboo.mp4";
import Thumbnail from "../../../assets/images/video-thumbnail.png";

const Why = () => {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const playVideo = () => {
    if (videoRef.current) {
      videoRef.current.volume = 1;
      videoRef.current.play();
      setIsPlaying(true);
    }
  };

  const pauseVideo = () => {
    if (videoRef.current) {
      videoRef.current.pause();
      setIsPlaying(false);
    }
  };

  return (
    <section className="whymain">
      <div className="whyinner">
        <h1 className="whyinnerhead">Why Bamboo Crypto? Our vision!</h1>
      </div>
      <div className="video-container">
        <video
          ref={videoRef}
          className="video-element"
          playsInline
          loop
          width="100%"
          id="myVideo"
          poster={Thumbnail}
        >
          <source src={MyVideo} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        {!isPlaying && (
          <button onClick={playVideo} className="play-btn">
            <img src="/assets/playbtn.svg" alt="Play" className="btninnerimg" />
          </button>
        )}
        {isPlaying && (
          <button onClick={pauseVideo} className="pause-btn">
            <img
              src="/assets/pausebtn.svg"
              alt="Pause"
              className="btninnerimgpause"
            />
          </button>
        )}
      </div>
    </section>
  );
};

export default Why;
