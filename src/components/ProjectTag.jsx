import React from "react";
import design from "../images/icons/design.svg";
import code from "../images/icons/code.svg";
import article from "../images/icons/article.svg";
import event from "../images/icons/event.svg";

const ProjectTag = ({ type }) => {
  return (
    <>
      {type === "Design" ? (
        <div className="p-3 bg-design rounded-full h-12 w-12 mb-4 md:mb-0">
          <img src={design} alt="design" />
        </div>
      ) : (
        ""
      )}
      {type === "Code" ? (
        <div className="p-3 bg-code rounded-full h-12 w-12 mb-4 md:mb-0">
          <img src={code} alt="code" />
        </div>
      ) : (
        ""
      )}
      {type === "Article" ? (
        <div className="p-3 bg-article rounded-full h-12 w-12 mb-4 md:mb-0">
          <img src={article} alt="article" />
        </div>
      ) : (
        ""
      )}
      {type === "Event" ? (
        <div className="p-3 bg-event rounded-full h-12 w-12 mb-4 md:mb-0">
          <img src={event} alt="event" />
        </div>
      ) : (
        ""
      )}
    </>
  );
};

export default ProjectTag;
