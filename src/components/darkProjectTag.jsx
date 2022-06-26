import React from "react";
import design from "../images/icons/dark/design.svg";
import code from "../images/icons/dark/code.svg";
import article from "../images/icons/dark/article.svg";
import event from "../images/icons/dark/event.svg";

const DarkProjectTag = ({ type }) => {
  return (
    <>
      {type === "Design" ? (
        <div className="p-3 outline outline-1 outline-dim-body  rounded-full h-12 w-12 mb-4 md:mb-0">
          <img className="mb-4 md:mb-0" src={design} alt="design" />
        </div>
      ) : (
        ""
      )}
      {type === "Code" ? (
        <div className="p-3 outline outline-1 outline-dim-body  rounded-full h-12 w-12 mb-4 md:mb-0">
          <img className="mb-4 md:mb-0" src={code} alt="code" />
        </div>
      ) : (
        ""
      )}
      {type === "Article" ? (
        <div className="p-3 outline outline-1 outline-dim-body  rounded-full h-12 w-12 mb-4 md:mb-0">
          <img className="mb-4 md:mb-0" src={article} alt="article" />
        </div>
      ) : (
        ""
      )}
      {type === "Event" ? (
        <div className="p-3 outline outline-1 outline-dim-body  rounded-full h-12 w-12 mb-4 md:mb-0">
          <img className="mb-4 md:mb-0" src={event} alt="event" />
        </div>
      ) : (
        ""
      )}
    </>
  );
};

export default DarkProjectTag;
