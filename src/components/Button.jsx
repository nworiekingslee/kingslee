import React from "react";
import explore from "../images/icons/Planet.svg";
import { Link } from "react-router-dom";

const Button = ({ cta }) => {
  return (
    <Link
      to="projects"
      className="flex py-[10px] px-[18px] bg-imagination dark:bg-dim-secondary dark:text-imagination font-medium rounded-md"
    >
      <p className="mr-2">{cta}</p> <img src={explore} alt="" />
    </Link>
  );
};

export default Button;
