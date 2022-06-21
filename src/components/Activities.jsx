import React from "react";
import ProjectCTA from "./ProjectCTA";
import ProjecctTag from "./ProjectTag";

const Activities = ({ project }) => {
  const { Type, CTA1, CTA2, Link1, Link2, Label, Description, Title } =
    project.fields;

  return (
    <div className="w-full bg-imagination p-8 mb-2 dark:bg-dim-secondary">
      <div className="">
        <ProjecctTag type={Type} />

        <div className="mt-2">
          <p className="text-[28px] font-bold text-dark">{Title}</p>
          <p className="text-sm mt-[2px]">{Label}</p>
        </div>
      </div>

      <p className="mt-4 mb-8 lg:mb-12">{Description}</p>

      <div className="flex">
        <ProjectCTA cta={CTA1} link={Link1} />
        {CTA2 ? <ProjectCTA cta={CTA2} link={Link2} /> : ""}
      </div>
    </div>
  );
};

export default Activities;
