import React from "react";
import code from "../images/icons/Code_CTA.svg";
import live from "../images/icons/Live.svg";
import caseStudy from "../images/icons/Case Study.svg";
import reportIcon from "../images/icons/event report.svg";
import read from "../images/icons/Read.svg";
import recording from "../images/icons/Recording.svg";

const ProjectCTA = ({ cta, link }) => {
  return (
    <>
      {cta === "Live" ? (
        <a
          href={link}
          target="_blank"
          rel="noreferrer"
          className="text-sm flex align-middle cursor-pointer"
        >
          <img src={live} alt="" className="mr-1" /> {cta}
        </a>
      ) : (
        ""
      )}
      {cta === "Code" ? (
        <a
          href={link}
          target="_blank"
          rel="noreferrer"
          className="text-sm flex align-middle cursor-pointer"
        >
          <img src={code} alt="" className="mr-1" /> {cta}
        </a>
      ) : (
        ""
      )}
      {cta === "Case study" ? (
        <a
          href={link}
          target="_blank"
          rel="noreferrer"
          className="text-sm flex align-middle cursor-pointer"
        >
          <img src={caseStudy} alt="" className="mr-1" /> {cta}
        </a>
      ) : (
        ""
      )}
      {cta === "Event website" ? (
        <a
          href={link}
          target="_blank"
          rel="noreferrer"
          className="text-sm flex align-middle cursor-pointer"
        >
          <img src={reportIcon} alt="" className="mr-1" /> {cta}
        </a>
      ) : (
        ""
      )}
      {cta === "Event report" ? (
        <a
          href={link}
          target="_blank"
          rel="noreferrer"
          className="text-sm flex align-middle cursor-pointer"
        >
          <img src={reportIcon} alt="" className="mr-1" /> {cta}
        </a>
      ) : (
        ""
      )}
      {cta === "Recording" ? (
        <a
          href={link}
          target="_blank"
          rel="noreferrer"
          className="text-sm flex align-middle cursor-pointer"
        >
          <img src={recording} alt="" className="mr-1" /> {cta}
        </a>
      ) : (
        ""
      )}
      {cta === "Read" ? (
        <a
          href={link}
          target="_blank"
          rel="noreferrer"
          className="text-sm flex align-middle cursor-pointer"
        >
          <img src={read} alt="" className="mr-1" /> {cta}
        </a>
      ) : (
        ""
      )}
    </>
  );
};

export default ProjectCTA;
