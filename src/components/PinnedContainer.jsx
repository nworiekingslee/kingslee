import React from "react";
import PinnedProject from "./PinnedProject";

const PinnedContainer = ({ projects }) => {
  return (
    <div>
      <p className="font-bold text-sm my-2">PINNED</p>

      {/* Pinned Component */}
      {projects.map((project) => (
        <PinnedProject project={project} key={project.fields.Number} />
      ))}
    </div>
  );
};

export default PinnedContainer;
