import React from "react";
import github from "../images/icons/Github.svg";
import twitter from "../images/icons/Twitter.svg";
import email from "../images/icons/Email.svg";
import githubDark from "../images/icons/dark/Github.svg";
import twitterDark from "../images/icons/dark/Twitter.svg";
import emailDark from "../images/icons/dark/Email.svg";

const Footer = ({ userTheme }) => {
  return (
    <div className=" max-w-full text-center ">
      <div className="flex w-[110px] justify-between mx-auto mb-2 ">
        <a
          href="https://github.com/nworiekingslee"
          target="_blank"
          rel="noreferrer"
        >
          {userTheme === "dark" ? (
            <img src={githubDark} alt="Kingslee GitHub" />
          ) : (
            <img src={github} alt="Kingslee GitHub" />
          )}
        </a>
        <a
          href="https://twitter.com/nworiekingslee"
          target="_blank"
          rel="noreferrer"
        >
          {userTheme === "dark" ? (
            <img src={twitterDark} alt="Kingslee Twitter" />
          ) : (
            <img src={twitter} alt="Kingslee Twitter" />
          )}
        </a>
        <a
          href="mailto:obizzkingsley@gmail.com"
          target="_blank"
          rel="noreferrer"
        >
          {userTheme === "dark" ? (
            <img src={emailDark} alt="send a mail to Kingslee" />
          ) : (
            <img src={email} alt="send a mail to Kingslee" />
          )}
        </a>
      </div>

      <p className="text-slate-500 dark:text-dim-body text-sm mx-auto hidden md:block">
        design inspired by{" "}
        <a href="https://kadet.dev/" target="_blank" rel="noreferrer">
          <span className="text-dark dark:text-imagination">Kadet.dev</span>
        </a>
      </p>
    </div>
  );
};

export default Footer;
