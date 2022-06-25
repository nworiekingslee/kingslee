import React, { useEffect, useRef } from "react";
import Button from "../components/Button.jsx";
import profile from "../images/kingslee.jpg";
import { gsap } from "gsap";

const HomeBoi = ({ userTheme }) => {
  const block = useRef();
  const q = gsap.utils.selector(block);
  const t1 = useRef();

  useEffect(() => {
    // gsap.to(q("img"), { rotation: "+360" });

    t1.current = gsap
      .timeline({ delay: 0.5, ease: "power2.out" })
      .from(".item", {
        y: 80,
        stagger: 0.1,
        opacity: 0,
      })
      .to(q(".darker"), {
        // color: "#24292F",
        color: "#000",
        // opacity: 1,
        repeat: 2,
        yoyo: true,
        label: "p",
      })
      .to(q(".highlight"), {
        color: "#fff",
        repeat: 2,
        yoyo: true,
        label: "p",
        duration: 0.5,
      });
  });
  return (
    <div
      ref={block}
      className=" w-full my-auto bg-white flex justify-center align-middle flex-col dark:bg-dim"
    >
      <img
        className="item w-[200px] mx-auto rounded-full mb-8"
        src={profile}
        alt="Nworie Kingslee"
      />
      <div className="max-w-[650px] mx-auto text-center px-6 ">
        <p className="item text-4xl text-dark font-semibold dark:text-imagination">
          Hello, I am <span className="fancy-text">Nworie Kingsley</span>
        </p>

        {userTheme === "dark" ? (
          <p className="item mt-3 font-normal mb text-dim-body">
            I am a <span className="highlight ">Software developer</span> with
            equal love for <span className="highlight">art & design</span>. I
            like to describe myself as an{" "}
            <span className="highlight">explorer</span>, eager to learn
            something new. I build interactive web experiences using modern web
            technology and <span className="highlight">enjoy sharing</span> what
            I know.
          </p>
        ) : (
          <p className="item mt-3 font-normal mb-6">
            I am a <span className="darker ">Software developer</span> with
            equal love for <span className="darker">art & design</span>. I like
            to describe myself as an <span className="darker">explorer</span>,
            eager to learn something new. I build interactive web experiences
            using modern web technology and{" "}
            <span className="darker">enjoy sharing</span> what I know.
          </p>
        )}
      </div>

      <div className=" item mx-auto">
        <Button userTheme={userTheme} cta="See my adventures" />
      </div>

      {/* Some extra padding */}
      <div className="h-[50px] md-[100px]"></div>
    </div>
  );
};

export default HomeBoi;
