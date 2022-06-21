import React from "react";
import Footer from "../components/Footer.jsx";
import HomeBio from "../components/HomeBio.jsx";
import explore from "../images/icons/Planet.svg";

const Home = ({ userTheme, systemTheme, onThemeSwitch }) => {
  return (
    <div className="container max-w-xl md:max-w-[1280px] mx-auto flex flex-col pb-8 h-screen text-dark-secondary ">
      <nav className="flex justify-between px-4 md:px-8 py-4 md:hidden ">
        <span className="font-extrabold text-xl text-dark dark:text-imagination">
          Kingslee.{" "}
          {userTheme === "dark" || (!userTheme && systemTheme)
            ? "with a dark vibes"
            : "yagami lighte"}
        </span>{" "}
        <img onClick={() => onThemeSwitch()} src={explore} alt="explore" />
      </nav>
      <HomeBio />
      <Footer />
    </div>
  );
};

export default Home;
