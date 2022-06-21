import React from "react";
import design from "../images/icons/dark/design.svg";
import code from "../images/icons/dark/code.svg";
import article from "../images/icons/dark/article.svg";
import event from "../images/icons/dark/event.svg";

const DarkProjectTag = ({ type }) => {
  return (
    <>
      {type === "Design" ? (
        <img className="mb-4 md:mb-0" src={design} alt="design" />
      ) : (
        ""
      )}
      {type === "Code" ? (
        <img className="mb-4 md:mb-0" src={code} alt="code" />
      ) : (
        ""
      )}
      {type === "Article" ? (
        <img className="mb-4 md:mb-0" src={article} alt="article" />
      ) : (
        ""
      )}
      {type === "Event" ? (
        <img className="mb-4 md:mb-0" src={event} alt="event" />
      ) : (
        ""
      )}
    </>
  );
};

export default DarkProjectTag;
