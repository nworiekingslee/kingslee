import React from "react";
import ProjectCTA from "./ProjectCTA";
import ProjectTag from "./ProjectTag";
import DarkProjectTag from "./darkProjectTag";

const PinnedProject = ({ project, userTheme }) => {
  const { Type, CTA1, CTA2, Link1, Link2, Label, Description, Title } =
    project.fields;

  return (
    <div className=" w-full bg-imagination dark:bg-dim-secondary dark:text-dim-body p-8 mb-2">
      <div className="md:flex ">
        {userTheme === "dark" ? (
          <DarkProjectTag type={Type} />
        ) : (
          <ProjectTag type={Type} />
        )}

        <div className="md:ml-4">
          <p className="text-[28px] font-bold text-dark dark:text-imagination">
            {Title}
          </p>
          <p className="text-sm">{Label}</p>
        </div>
      </div>

      <p className="mt-4 mb-8">{Description}</p>

      <div className="flex">
        <ProjectCTA cta={CTA1} link={Link1} userTheme={userTheme} />
        {CTA2 ? (
          <ProjectCTA cta={CTA2} link={Link2} userTheme={userTheme} />
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

export default PinnedProject;
