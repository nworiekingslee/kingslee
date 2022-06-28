import React from "react";
import ProjectCTA from "./ProjectCTA";

const Activities = ({
  project,
  userTheme,
  onActivityLeave,
  onActivityEnter,
}) => {
  const { Type, CTA1, CTA2, Link1, Link2, Label, Description, Title } =
    project.fields;

  return (
    <>
      <div
        onMouseEnter={onActivityEnter}
        onMouseLeave={onActivityLeave}
        className="a w-full bg-imagination p-8 mb-2 dark:bg-dim-secondary dark:text-dim-body  hidden md:block"
      >
        <div className="">
          <p className="tracking-[.15em] font-bold text-dark dark:text-imagination uppercase text-sm mb-8">
            {Type}
          </p>

          <div className="mt-4">
            <p className="text-[24px] font-bold text-dark dark:text-imagination leading-tight">
              {Title}
            </p>
            <p className="text-sm mt-[2px]">{Label}</p>
          </div>
        </div>

        <p className="mt-4 mb-8 lg:mb-12">{Description}</p>

        <div className="flex">
          <ProjectCTA cta={CTA1} link={Link1} userTheme={userTheme} />
          {CTA2 ? (
            <ProjectCTA cta={CTA2} link={Link2} userTheme={userTheme} />
          ) : (
            ""
          )}
        </div>
      </div>
      <div className="a w-full bg-imagination p-8 mb-2 dark:bg-dim-secondary dark:text-dim-body md:hidden">
        <div className="">
          <p className="tracking-[.15em] font-bold text-dark dark:text-imagination uppercase text-sm mb-8">
            {Type}
          </p>

          <div className="mt-4">
            <p className="text-[24px] font-bold text-dark dark:text-imagination leading-tight">
              {Title}
            </p>
            <p className="text-sm mt-[2px]">{Label}</p>
          </div>
        </div>

        <p className="mt-4 mb-8 lg:mb-12">{Description}</p>

        <div className="flex">
          <ProjectCTA cta={CTA1} link={Link1} userTheme={userTheme} />
          {CTA2 ? (
            <ProjectCTA cta={CTA2} link={Link2} userTheme={userTheme} />
          ) : (
            ""
          )}
        </div>
      </div>
    </>
  );
};

export default Activities;
