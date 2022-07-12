import React from "react";
import PinnedContainer from "../components/PinnedContainer";
import ActivitiesContainer from "../components/ActivitiesContainer";
import profile from "../images/kingslee.jpg";
import github from "../images/icons/Github.svg";
import twitter from "../images/icons/Twitter.svg";
import email from "../images/icons/Email.svg";
import githubDark from "../images/icons/dark/Github.svg";
import twitterDark from "../images/icons/dark/Twitter.svg";
import emailDark from "../images/icons/dark/Email.svg";
import Nav from "../components/Nav";

const Projects = ({
  projects,
  userTheme,
  onPinnedEnter,
  onPinnedLeave,
  onActivityEnter,
  onActivityLeave,
  onNavEnter,
  onNavLeave,
}) => {
  const pinned = projects.filter((project) => project.fields.Pinned);
  const activities = projects.filter(
    (project) =>
      project.fields.Type === "Code" || project.fields.Type === "Design"
  );

  return (
    <>
      <div className="container max-w-xl md:max-w-[1280px] mx-auto h-full text-dark-secondary flex justify-between md:justify-between p-4 scroll-smooth">
        <div className="hidden lg:block min-w-[420px] mr-4">
          <div className=" hidden lg:flex lg:flex-col lg:justify-around w-[420px] fixed top-0 px-2 h-screen  ">
            {/* top block, left flang */}
            <div className="">
              <p className="text-[42px] text-dark dark:text-imagination font-semibold w-80 leading-tight">
                Hello, I am Nworie Kingsley
              </p>
              {userTheme === "dark" ? (
                <p className="mt-4 font-normal mb-6 dark:text-dim-body">
                  I am a <span className="highlight ">Software developer</span>{" "}
                  with equal love for{" "}
                  <span className="highlight">art & design</span>. I like to
                  describe myself as an{" "}
                  <span className="highlight">explorer</span>, eager to learn
                  something new. I build interactive web experiences using
                  modern web technology and{" "}
                  <span className="highlight">enjoy sharing</span> what I know.
                </p>
              ) : (
                <p className="mt-4 font-normal mb-6 dark:text-dim-body">
                  I am a <span className="darker ">Software developer</span>{" "}
                  with equal love for{" "}
                  <span className="darker">art & design</span>. I like to
                  describe myself as an <span className="darker">explorer</span>
                  , eager to learn something new. I build interactive web
                  experiences using modern web technology and{" "}
                  <span className="darker">enjoy sharing</span> what I know.
                </p>
              )}
            </div>
            {/* top block, middle flang */}
            <Nav onEnter={onNavEnter} onLeave={onNavLeave} active="projects" />

            {/* top block, bottom flang */}
            <div className="flex items-center">
              <img className="h-10 w-10 rounded-full" src={profile} alt="" />
              <a
                href="https://github.com/nworiekingslee"
                target="_blank"
                rel="noreferrer"
                className="flex ml-4 "
              >
                {userTheme === "dark" ? (
                  <img
                    className="h-6 w-6"
                    src={githubDark}
                    alt="Kingslee GitHub"
                  />
                ) : (
                  <img className="h-6 w-6" src={github} alt="Kingslee GitHub" />
                )}{" "}
                <span className="ml-1 text-dark-secondary dark:text-imagination">
                  GitHub
                </span>
              </a>

              <a
                href="https://twitter.com/nworiekingslee"
                target="_blank"
                rel="noreferrer"
                className="flex ml-4 "
              >
                {userTheme === "dark" ? (
                  <img
                    className="h-6 w-6"
                    src={twitterDark}
                    alt="Kingslee twitter"
                  />
                ) : (
                  <img
                    className="h-6 w-6"
                    src={twitter}
                    alt="Kingslee twitter"
                  />
                )}{" "}
                <span className="ml-1 text-dark-secondary dark:text-imagination">
                  Twitter
                </span>
              </a>

              <a
                href="mailto:obizzkingsley@gmail.com"
                target="_blank"
                rel="noreferrer"
                className="flex ml-4 "
              >
                {userTheme === "dark" ? (
                  <img
                    className="h-6 w-6"
                    src={emailDark}
                    alt="Kingslee email"
                  />
                ) : (
                  <img className="h-6 w-6" src={email} alt="Kingslee email" />
                )}{" "}
                <span className="ml-1 text-dark-secondary  dark:text-imagination">
                  Email
                </span>
              </a>
            </div>
          </div>
        </div>
        {/* right flang */}
        <div className=" w-full lg:w-auto lg:mt-14 project-half">
          <div className="h-[80px] lg:hidden"></div>
          <PinnedContainer
            projects={pinned}
            userTheme={userTheme}
            onPinnedEnter={onPinnedEnter}
            onPinnedLeave={onPinnedLeave}
          />
          <ActivitiesContainer
            id="activities"
            projects={activities}
            userTheme={userTheme}
            header="MY ACTIVITIES"
            onActivityEnter={onActivityEnter}
            onActivityLeave={onActivityLeave}
          />

          {/* <PeopleContainer people={people} userTheme={userTheme} /> */}
          <p className="text-slate-500 dark:text-dim-body text-sm mx-auto hidden md:block">
            design inspired by{" "}
            <a href="https://kadet.dev/" target="_blank" rel="noreferrer">
              <span className="text-dark dark:text-imagination">Kadet.dev</span>
            </a>
          </p>
        </div>
      </div>
    </>
  );
};

export default Projects;
