import React from "react";
import explore from "../images/icons/Planet.svg";
import exploreDark from "../images/icons/dark/planet.svg";
import { Link } from "react-router-dom";

const Button = ({ cta, userTheme }) => {
  return (
    <Link
      to="projects"
      className="flex py-[10px] px-[18px] bg-imagination dark:bg-dim-secondary dark:text-imagination font-medium rounded-md"
    >
      <p className="mr-2">{cta}</p>{" "}
      {userTheme === "dark" ? (
        <img src={exploreDark} alt="" />
      ) : (
        <img src={explore} alt="" />
      )}
    </Link>
  );
};

export default Button;
