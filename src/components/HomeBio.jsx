import React, { useEffect, useLayoutEffect, useRef } from "react";
import Button from "../components/Button.jsx";
import profile from "../images/kingslee.jpg";

const HomeBoi = ({ userTheme }) => {
  return (
    <div className=" w-full my-auto bg-white flex justify-center align-middle flex-col dark:bg-dim ">
      <a href="../images/kingslee.jpg">
        <img
          className="item w-[120px] md:w-[180px] mx-auto rounded-full mb-4 md:mb-8"
          src={profile}
          alt="Nworie Kingslee"
        />
      </a>
      <div className="max-w-[650px] mx-auto text-center px-6 ">
        <p className="item text-3xl md:text-4xl text-dark font-semibold dark:text-imagination">
          Hey there, I'm <span className="fancy-text">Kingslee</span>
        </p>

        {userTheme === "dark" ? (
          <p className="item mt-4 font-normal mb-6 text-dim-body md:text-[16px]  text-[14px]">
            A <span className="highlight">Software developer</span> with a
            passion for
            <span className="highlight "> design</span>. When I'm not coding,
            you'll find me shaking up the scene in southeastern Nigeria,{" "}
            <span className="highlight ">making tech more accessible</span> one
            event at a time.
          </p>
        ) : (
          <p className="item mt-4 font-normal mb-6 text-dim-body md:text-[16px]  text-[14px]">
            A <span className="darker font-medium">Software developer</span>{" "}
            with a passion for
            <span className="darker font-medium"> design</span>. When I'm not
            coding, you'll find me shaking up the scene in southeastern Nigeria,{" "}
            <span className="darker font-medium">
              making tech more accessible
            </span>{" "}
            one event at a time.
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
