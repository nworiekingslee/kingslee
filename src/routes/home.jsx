import React from "react";
import profile from "../images/kingslee.jpg";
import explore from "../images/Planet.svg";
import github from "../images/icons/Github.svg";
import twitter from "../images/icons/Twitter.svg";
import email from "../images/icons/Email.svg";

const Home = () => {
  return (
    <div className="container max-w-xl md:max-w-[1280px] mx-auto flex flex-col py-8 h-screen  text-dark-secondary">
      <div className="w-full my-auto bg-white flex justify-center align-middle flex-col">
        <img
          className=" w-[200px] mx-auto rounded-full mb-8"
          src={profile}
          alt="a photo of Kingslee"
        />
        <div className="max-w-[650px] mx-auto text-center px-6">
          <p className="text-4xl text-dark font-semibold">
            Hello, I am Nworie Kingsley
          </p>
          <p className="mt-2 font-normal">
            I like to describe myself as an explorer, eager to learn something
            new. I am a brand designer, frontend developer & tech community
            leader. I help intentional people and business build credibility
            through brand representation and interactive experiences using
            modern web technology.
          </p>
        </div>
        <button className="flex mx-auto mt-6 py-[10px] px-[18px] bg-imagination font-medium rounded-md">
          <p className="mr-2">See my adventures</p> <img src={explore} alt="" />
        </button>
        {/* Some extra padding */}
        <div className="h-[100px]"></div>
      </div>

      <div className=" max-w-full text-center ">
        <div className="flex w-[110px] justify-between mx-auto mb-2 ">
          <a href="https://github.com/nworiekingslee" target="_blank">
            <img src={github} alt="Kingslee GitHub" />
          </a>
          <a href="https://twitter.com/nworiekingslee" target="_blank">
            <img src={twitter} alt="Kingslee Twitter" />
          </a>
          <a href="mailto:obizzkingsley@gmail.com" target="_blank">
            <img src={email} alt="send a mail to Kingslee" />
          </a>
        </div>

        <p className="text-slate-500 text-sm mx-auto">
          design inspired by{" "}
          <a href="https://kadet.dev/" target="_blank">
            <span className="text-dark">Kadet.dev</span>
          </a>
        </p>
      </div>
    </div>
  );
};

export default Home;
