import React from "react";
import PinnedContainer from "../components/PinnedContainer";
import ActivitiesContainer from "../components/ActivitiesContainer";
import Talk from "../components/Talk";
import profile from "../images/kingslee.jpg";
import github from "../images/icons/Github.svg";
import twitter from "../images/icons/Twitter.svg";
import email from "../images/icons/Email.svg";
import githubDark from "../images/icons/dark/Github.svg";
import twitterDark from "../images/icons/dark/Twitter.svg";
import emailDark from "../images/icons/dark/Email.svg";
import TalkContainer from "../components/TalkContainer";

const Projects = ({ projects, talks, userTheme, onEnter, onLeave }) => {
  const pinned = projects.filter((project) => project.fields.Pinned);
  const activities = projects.filter(
    (project) =>
      project.fields.Type === "Code" || project.fields.Type === "Design"
  );
  const articles = projects.filter(
    (project) => project.fields.Type === "Article"
  );
  const events = projects.filter((project) => project.fields.Type === "Event");

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
              <p className="mt-4 font-normal mb-6 dark:text-dim-body">
                I help intentional people and business build credibility through
                brand recognition and interactive experiences using modern web
                technology.
              </p>
            </div>
            {/* top block, middle flang */}
            <div className="text-dark-secondary dark:text-dim-body h-32  mb-32 flex flex-col justify-between tracking-widest">
              <a
                href="#activities"
                className="flex items-center text-[12px] text-dark dark:text-white font-bold"
              >
                00{" "}
                <div className="w-12 h-[1px] bg-dark dark:bg-white mx-4"></div>{" "}
                PROJECTS
              </a>
              <a href="#activities" className="flex items-center text-[12px]">
                01 <div className="w-4 h-[1px] bg-dim-body mx-4"></div> EVENTS
              </a>
              <a href="#activities" className="flex items-center text-[12px]">
                02 <div className="w-4 h-[1px] bg-dim-body mx-4"></div> ARTICLES
              </a>
            </div>

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
        <div className=" w-full lg:w-auto mt-14 project-half">
          <PinnedContainer
            projects={pinned}
            userTheme={userTheme}
            onEnter={onEnter}
            onLeave={onLeave}
          />
          <ActivitiesContainer
            id="activities"
            projects={activities}
            userTheme={userTheme}
            header="MY ACTIVITIES"
          />

          <TalkContainer
            talks={talks}
            userTheme={userTheme}
            header="TALKS & EVENTS"
          />
          {/* <eventContainer
            events={events}
            userTheme={userTheme}
            header="EVENTS & TALKS"
          /> */}
          <ActivitiesContainer
            projects={articles}
            userTheme={userTheme}
            header="ARTICLES"
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
