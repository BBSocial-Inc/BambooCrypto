import React from "react";

const Card = ({ isSelected }) => (
  <svg
    width="401"
    height="14"
    viewBox="0 0 401 14"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M8 7H394"
      stroke="white"
      stroke-width="14"
      stroke-linecap="round"
    />
    <path
      d="M7 7H138"
      stroke="#FF9E2C"
      stroke-width="14"
      stroke-linecap="round"
    />
    <circle cx="10" cy="7.37915" r="4" fill="black" />
    <circle cx="138" cy="7.37915" r="4" fill="black" />
    <circle cx="266" cy="7.37915" r="4" fill="black" />
    <circle cx="394" cy="7.37915" r="4" fill="#C0C0C0" />
  </svg>
);

export default Card;
