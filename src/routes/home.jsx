import React from "react";
import { Link } from "react-router-dom";
import Footer from "../components/Footer.jsx";
import HomeBio from "../components/HomeBio.jsx";
import explore from "../images/icons/Planet.svg";
import exploreDark from "../images/icons/dark/planet.svg";

const Home = ({ userTheme }) => {
  return (
    <div className="container max-w-xl md:max-w-[1280px] mx-auto flex flex-col pb-8 h-screen text-dark-secondary ">
      <nav className="flex justify-between px-4 md:px-8 py-4 md:hidden ">
        <span className="font-extrabold text-xl text-dark dark:text-imagination">
          Kingslee.
        </span>{" "}
        <Link to="/projects">
          {userTheme === "dark" ? (
            <img src={exploreDark} alt="explore" />
          ) : (
            <img src={explore} alt="explore" />
          )}
        </Link>
      </nav>
      <HomeBio userTheme={userTheme} />
      <Footer userTheme={userTheme} />
    </div>
  );
};

export default Home;
