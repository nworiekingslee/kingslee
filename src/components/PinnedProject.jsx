import React from "react";
import ProjectCTA from "./ProjectCTA";
import ProjecctTag from "./ProjectTag";

const PinnedProject = ({ project }) => {
  return (
    <div className=" w-full lg:w-[650px] bg-imagination p-8 rounded-md mb-2">
      <div className="md:flex">
        <ProjecctTag type={project.fields.Type} />

        <div className="md:ml-6">
          <p className="text-3xl font-bold text-dark">{project.fields.Title}</p>
          <p className="text-sm mt-[2px]">{project.fields.Label}</p>
        </div>
      </div>

      <p className="mt-6 mb-6">
        An unconference for leaders of technical community
      </p>

      <ProjectCTA cta={project.fields.CTA1} link={project.fields.Link1} />
    </div>
  );
};

export default PinnedProject;
