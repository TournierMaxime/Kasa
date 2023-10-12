import React from "react";
import starActive from "../assets/icons/star-active.png";
import starInactive from "../assets/icons/star-inactive.png";

const Rate = ({ rate }) => {
  const stars = [];

  for (let i = 1; i <= 5; i++) {
    if (i <= rate) {
      stars.push(<img key={i} src={starActive} alt="star active" />);
    } else {
      stars.push(<img key={i} src={starInactive} alt="star inactive" />);
    }
  }

  return <div className="stars">{stars}</div>;
};

export default Rate;
