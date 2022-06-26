import React from "react";
import PinnedProject from "./PinnedProject";

const PinnedContainer = ({ projects, userTheme, onEnter, onLeave }) => {
  return (
    <>
      <p className="font-bold text-sm my-2 dark:text-dim-body">PINNED</p>

      {/* Pinned Component */}
      <div className="w-full lg:w-[650px] g ">
        {projects.map((project) => (
          <PinnedProject
            userTheme={userTheme}
            project={project}
            key={project.fields.Number}
            onEnter={onEnter}
            onLeave={onLeave}
          />
        ))}
      </div>
    </>
  );
};

export default PinnedContainer;
