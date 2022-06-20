import React from "react";
import Activities from "./Activities";

const ActivitiesContainer = ({ projects, header }) => {
  const rightProject = [];
  const leftProject = [];

  for (let i = 0; i < projects.length; i++) {
    if (i % 2 === 1) {
      rightProject.push(projects[i]);
    } else {
      leftProject.push(projects[i]);
    }
  }

  return (
    <>
      <p className="font-bold text-sm mb-2 mt-10">{header}</p>
      <div className="lg:flex lg:w-[650px]">
        <div className="w-full lg:w-1/2 mr-2">
          {leftProject.map((project) => (
            <Activities project={project} key={project.fields.Number} />
          ))}
        </div>
        <div className="w-full lg:w-1/2 lg:mt-6">
          {rightProject.map((project) => (
            <Activities project={project} key={project.fields.Number} />
          ))}
        </div>
      </div>
    </>
  );
};

export default ActivitiesContainer;
