import React from "react";
import ProjectCTA from "./ProjectCTA";

const Activities = ({
  project,
  userTheme,
  onActivityLeave,
  onActivityEnter,
}) => {
  const {
    Type,
    CTA1,
    CTA2,
    Link1,
    Link2,
    Label,
    Description,
    Title,
    Thumbnail,
  } = project.fields;

  const image =
    Thumbnail?.[0]?.thumbnails?.large?.url ||
    Thumbnail?.[0]?.thumbnails?.full?.url;

  return (
    <>
      <div
        onMouseEnter={onActivityEnter}
        onMouseLeave={onActivityLeave}
        className="a w-full bg-white py-6 px-3 mb-2 dark:bg-dim dark:text-dim-body  hidden md:block"
      >
        {image && (
          <img className="h-56 w-full object-cover" src={image} alt={Title} />
        )}
        <div className="">
          {/* <p className="tracking-[.15em] font-bold text-dark dark:text-imagination uppercase text-sm mb-8">
            {Type}
          </p> */}

          <div className="mt-4">
            <p className="text-[24px] font-bold text-dark dark:text-imagination leading-tight">
              {Title}
            </p>
            <p className="text-sm mt-[2px]">{Label}</p>
          </div>
        </div>

        <p className="mt-3 mb-6 lg:mb-8-">{Description}</p>

        <div className="flex">
          <ProjectCTA cta={CTA1} link={Link1} userTheme={userTheme} />
          {CTA2 ? (
            <ProjectCTA cta={CTA2} link={Link2} userTheme={userTheme} />
          ) : (
            ""
          )}
        </div>
      </div>

      {/* Mobile variant here */}
      <div className="a w-full bg-white p-2 mb-8 dark:bg-dim dark:text-dim-body md:hidden">
        <div className="">
          {/* <p className="tracking-[.15em] font-bold text-dark dark:text-imagination uppercase text-sm mb-8">
            {Type}
          </p> */}

          {image && (
            <a href={Link1} target="_blank" rel="noreferrer">
              <img
                src={image}
                alt={Title}
                className="h-56 w-full object-cover"
              />
            </a>
          )}

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
