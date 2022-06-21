import React from "react";
import PinnedContainer from "../components/PinnedContainer";
import ActivitiesContainer from "../components/ActivitiesContainer";
import PeopleContainer from "../components/PeopleContainer";
import explore from "../images/icons/Planet.svg";

const Projects = ({ projects, people }) => {
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
      <div className="container max-w-xl md:max-w-[1280px] mx-auto h-full text-dark-secondary flex justify-between md:justify-between p-4 ">
        <div className="hidden lg:block min-w-[420px] mr-4">
          <div className=" hidden lg:block w-[420px] fixed top-14">
            {/* top block, left flang */}
            <div className="px-2">
              <p className="text-[42px] text-dark font-semibold w-80">
                Hello, I am Nworie Kingsley
              </p>
              <p className="mt-4 font-normal mb-6">
                I help intentional people and business build credibility through
                brand recognition and interactive experiences using modern web
                technology.
              </p>
            </div>
            {/* top block, middle flang */}
            <div></div>
          </div>
        </div>
        {/* right flang */}
        <div className=" w-full lg:w-auto mt-14">
          <PinnedContainer projects={pinned} />
          <ActivitiesContainer projects={activities} header="MY ACTIVITIES" />
          <ActivitiesContainer projects={events} header="EVENTS & TALKS" />
          <ActivitiesContainer projects={articles} header="ARTICLES" />
          <PeopleContainer people={people} />
          <p className="text-slate-500 text-sm mx-auto hidden md:block">
            design inspired by{" "}
            <a href="https://kadet.dev/" target="_blank" rel="noreferrer">
              <span className="text-dark">Kadet.dev</span>
            </a>
          </p>
        </div>
      </div>
    </>
  );
};

export default Projects;
