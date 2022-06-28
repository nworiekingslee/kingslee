import React from "react";
import ProjectCTA from "./ProjectCTA";

const Talk = ({ talk, userTheme, onTalkEnter, onTalkLeave }) => {
  const {
    EventName,
    EventType,
    Date,
    Status,
    TalkTitle,
    CTA1,
    CTA2,
    Link1,
    Link2,
  } = talk.fields;

  return (
    <>
      <div
        onMouseEnter={onTalkEnter}
        onMouseLeave={onTalkLeave}
        className="t w-full bg-imagination p-8 mb-2 dark:bg-dim-secondary dark:text-dim-body min-h-[320px] relative hidden md:block"
      >
        <div>
          <p className="tracking-[.15em] font-bold text-dark dark:text-imagination uppercase text-sm">
            {EventName}
          </p>
          <p className="">{EventType}</p>
          <p className="text-sm ">{Date}</p>
        </div>

        <div className=" mt-20">
          <p className="text-[24px] font-bold text-dark dark:text-imagination leading-tight">
            {TalkTitle}
          </p>
          <div className="flex mt-6">
            <ProjectCTA cta={CTA1} link={Link1} userTheme={userTheme} />
            {CTA2 ? (
              <ProjectCTA cta={CTA2} link={Link2} userTheme={userTheme} />
            ) : (
              ""
            )}
          </div>
        </div>
      </div>
      <div className="t w-full bg-imagination p-8 mb-2 dark:bg-dim-secondary dark:text-dim-body min-h-[320px] relative md:hidden">
        <div>
          <p className="tracking-[.15em] font-bold text-dark dark:text-imagination uppercase text-sm">
            {EventName}
          </p>
          <p className="">{EventType}</p>
          <p className="text-sm ">{Date}</p>
        </div>

        <div className=" mt-20">
          <p className="text-[24px] font-bold text-dark dark:text-imagination leading-tight">
            {TalkTitle}
          </p>
          <div className="flex mt-6">
            <ProjectCTA cta={CTA1} link={Link1} userTheme={userTheme} />
            {CTA2 ? (
              <ProjectCTA cta={CTA2} link={Link2} userTheme={userTheme} />
            ) : (
              ""
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Talk;
