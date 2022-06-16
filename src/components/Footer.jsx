import React from "react";
import github from "../images/icons/Github.svg";
import twitter from "../images/icons/Twitter.svg";
import email from "../images/icons/Email.svg";

const Footer = () => {
  return (
    <div className=" max-w-full text-center ">
      <div className="flex w-[110px] justify-between mx-auto mb-2 ">
        <a
          href="https://github.com/nworiekingslee"
          target="_blank"
          rel="noreferrer"
        >
          <img src={github} alt="Kingslee GitHub" />
        </a>
        <a
          href="https://twitter.com/nworiekingslee"
          target="_blank"
          rel="noreferrer"
        >
          <img src={twitter} alt="Kingslee Twitter" />
        </a>
        <a
          href="mailto:obizzkingsley@gmail.com"
          target="_blank"
          rel="noreferrer"
        >
          <img src={email} alt="send a mail to Kingslee" />
        </a>
      </div>

      <p className="text-slate-500 text-sm mx-auto hidden md:block">
        design inspired by{" "}
        <a href="https://kadet.dev/" target="_blank" rel="noreferrer">
          <span className="text-dark">Kadet.dev</span>
        </a>
      </p>
    </div>
  );
};

export default Footer;
