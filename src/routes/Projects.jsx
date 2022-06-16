import React from "react";
import PinnedContainer from "../components/PinnedContainer";

const Projects = ({ projects }) => {
  const pinned = projects.filter((project) => project.fields.Pinned);
  console.log("pinned", pinned);
  return (
    <div className="container max-w-xl md:max-w-[1280px] mx-auto h-full text-dark-secondary flex justify-between md:justify-between p-4 ">
      <div className="hidden lg:block min-w-[420px] mr-4">
        <div className=" hidden lg:block w-[420px] fixed top-14">
          {/* top block, left flang */}
          <div className="px-2">
            <p className="text-5xl text-dark font-semibold">
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
      </div>
    </div>
  );
};

export default Projects;
