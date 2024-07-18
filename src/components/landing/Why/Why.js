import React, { useRef, useState } from "react";
import "./why.scss";

const Why = () => {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const playVideo = () => {
    videoRef.current.play();
    setIsPlaying(true);
  };

  const pauseVideo = () => {
    videoRef.current.pause();
    setIsPlaying(false);
  };
  return (
    <section className="whymain">
      <div className="whyinner">
        <h1 className="whyinnerhead">Why Bamboo Crypto? Our vision!</h1>
      </div>
      <div className="video-container">
        {/* <div
          // style={
          //   "position: relative; padding-bottom: 69.40874035989718%; height: 0;"
          // }
          className="video-element"
        >
          <iframe
            src="https://www.loom.com/embed/926fee6e0c5b4c1795ee9a1392619463?sid=f8fcb0a0-bba4-46f9-996b-a96064c53301"
            frameborder="0"
            webkitallowfullscreen
            mozallowfullscreen
            allowfullscreen
            // style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;"
          ></iframe>
        </div> */}
        <video
          ref={videoRef}
          className="video-element"
          muted="muted"
          playsinline="playsinline"
          loop
          width="100%"
          id="myVideo"
        >
          <source
            src="https://res.cloudinary.com/drt6vurtt/video/upload/v1710165733/hodlr/Circuit_Board_Loop_-_Front_tojzqn.mp4"
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>
        {!isPlaying && (
          <button onClick={playVideo} className="play-btn">
            <img src="/assets/playbtn.svg" alt="img" className="btninnerimg" />
          </button>
        )}
        {isPlaying && (
          <button onClick={pauseVideo} className="pause-btn">
            <img
              src="/assets/pausebtn.svg"
              alt="img"
              className="btninnerimgpause"
            />
          </button>
        )}
      </div>
    </section>
  );
};

export default Why;
