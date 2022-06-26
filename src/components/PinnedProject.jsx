import React from "react";
import ProjectCTA from "./ProjectCTA";

const PinnedProject = ({ project, userTheme, onEnter, onLeave }) => {
  const { Type, CTA1, CTA2, Link1, Link2, Label, Description, Title } =
    project.fields;

  return (
    <div
      onMouseEnter={onEnter}
      onMouseLeave={onLeave}
      className="h w-full bg-imagination dark:bg-dim-secondary dark:text-dim-body p-8 mb-2"
    >
      <div className="md:flex md:items-center">
        <p className="tracking-[.15em] font-bold text-dark dark:text-imagination uppercase text-sm mb-8 md:hidden">
          {Type}
        </p>

        <div className="">
          <p className="text-[24px] font-bold text-dark dark:text-imagination leading-tight">
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
