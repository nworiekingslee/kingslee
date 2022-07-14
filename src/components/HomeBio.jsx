import React, { useEffect, useLayoutEffect, useRef } from "react";
import Button from "../components/Button.jsx";
import profile from "../images/kingslee.jpg";

const HomeBoi = ({ userTheme }) => {
  return (
    <div className=" w-full my-auto bg-white flex justify-center align-middle flex-col dark:bg-dim ">
      <a href="../images/kingslee.jpg" download>
        <img
        className="item w-[120px] md:w-[180px] mx-auto rounded-full mb-4 md:mb-8"
        src={profile}
        alt="Nworie Kingslee"
      />
      </a>
      <div className="max-w-[650px] mx-auto text-center px-6 ">
        <p className="item text-3xl md:text-4xl text-dark font-semibold dark:text-imagination">
          Hello, I am <span className="fancy-text">Nworie Kingsley</span>
        </p>

        {userTheme === "dark" ? (
          <p className="item mt-2 font-normal mb-6 text-dim-body md:text-[16px]  text-[14px]">
            I am a <span className="highlight ">Software developer</span> with
            equal love for <span className="highlight">art & design</span>. I
            like to describe myself as an{" "}
            <span className="highlight">explorer</span>, eager to learn
            something new. I build interactive web experiences using modern web
            technology and <span className="highlight">enjoy sharing</span> what
            I know.
          </p>
        ) : (
          <p className="item mt-2 font-normal mb-6">
            I am a <span className="darker ">Software developer</span> with
            equal love for <span className="darker">art & design</span>. I like
            to describe myself as an <span className="darker">explorer</span>,
            eager to learn something new. I build interactive web experiences
            using modern web technology and{" "}
            <span className="darker">enjoy sharing</span> what I know.
          </p>
        )}
      </div>

      <div className="item mx-auto">
        <Button userTheme={userTheme} cta="See my adventures" />
      </div>
    </div>
  );
};

export default HomeBoi;
