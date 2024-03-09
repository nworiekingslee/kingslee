import React from "react";
import Activities from "./Activities";

const ActivitiesContainer = ({
  projects,
  header,
  userTheme,
  onActivityEnter,
  onActivityLeave,
}) => {
  const sortedProjects = projects.sort(
    (a, b) => a.fields.Number - b.fields.Number
  );
  const rightProject = [];
  const leftProject = [];

  for (let i = 0; i < sortedProjects.length; i++) {
    if (i % 2 === 1) {
      rightProject.push(sortedProjects[i]);
    } else {
      leftProject.push(sortedProjects[i]);
    }
  }

  return (
    <div className="">
      <p className="font-bold text-sm mb-2 mt-10 dark:text-dim-body">
        {header}
      </p>
      <div className="lg:flex lg:w-[650px]" data-speed="1">
        <div className="w-full lg:w-1/2 mr-2">
          {leftProject.map((project) => (
            <Activities
              project={project}
              userTheme={userTheme}
              key={project.fields.Number}
              onActivityEnter={onActivityEnter}
              onActivityLeave={onActivityLeave}
            />
          ))}
        </div>
        <div className="w-full lg:w-1/2 lg:mt-6" data-speed="2">
          {rightProject.map((project) => (
            <Activities
              project={project}
              userTheme={userTheme}
              key={project.fields.Number}
              onActivityEnter={onActivityEnter}
              onActivityLeave={onActivityLeave}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ActivitiesContainer;
