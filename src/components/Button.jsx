import React from "react";
import explore from "../images/icons/Planet.svg";

const Button = ({ cta }) => {
  return (
    <button className="flex py-[10px] px-[18px] bg-imagination font-medium rounded-md">
      <p className="mr-2">{cta}</p> <img src={explore} alt="" />
    </button>
  );
};

export default Button;
