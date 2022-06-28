import React from "react";
import { Link } from "react-router-dom";
import Footer from "../components/Footer.jsx";
import HomeBio from "../components/HomeBio.jsx";
import explore from "../images/icons/Planet.svg";
import exploreDark from "../images/icons/dark/planet.svg";

const Home = ({ userTheme }) => {
  return (
    <div className="container max-w-xl md:max-w-[1280px] mx-auto flex flex-col pb-3 md:pb-8 h-screen justify-between text-dark-secondary ">
      <HomeBio userTheme={userTheme} />
      <Footer userTheme={userTheme} />
    </div>
  );
};

export default Home;
