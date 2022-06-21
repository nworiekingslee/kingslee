import React from "react";
import Button from "../components/Button.jsx";
import profile from "../images/kingslee.jpg";

const HomeBoi = ({ userTheme }) => {
  return (
    <div className="w-full my-auto bg-white flex justify-center align-middle flex-col dark:bg-dim">
      <img
        className=" w-[200px] mx-auto rounded-full mb-8"
        src={profile}
        alt="Nworie Kingslee"
      />
      <div className="max-w-[650px] mx-auto text-center px-6 ">
        <p className="text-4xl text-dark font-semibold dark:text-imagination">
          Hello, I am Nworie Kingsley
        </p>
        <p className="mt-2 font-normal mb-6 dark:text-dim-body">
          I like to describe myself as an explorer, eager to learn something
          new. I am a brand designer, frontend developer & tech community
          leader. I help intentional people and business build credibility
          through brand representation and interactive experiences using modern
          web technology.
        </p>
      </div>

      <div className="mx-auto">
        <Button userTheme={userTheme} cta="See my adventures" />
      </div>

      {/* Some extra padding */}
      <div className="h-[50px] md-[100px]"></div>
    </div>
  );
};

export default HomeBoi;
