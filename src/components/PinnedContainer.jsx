import React from "react";
import PinnedProject from "./PinnedProject";

const PinnedContainer = ({ projects, userTheme }) => {
  return (
    <>
      <p className="font-bold text-sm my-2 dark:text-dim-body">PINNED</p>

      {/* Pinned Component */}
      <div className="w-full lg:w-[650px] ">
        {projects.map((project) => (
          <PinnedProject
            userTheme={userTheme}
            project={project}
            key={project.fields.Number}
          />
        ))}
      </div>
    </>
  );
};

export default PinnedContainer;
