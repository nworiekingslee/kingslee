import React from "react";
import code from "../images/icons/Code_CTA.svg";
import live from "../images/icons/Live.svg";
import caseStudy from "../images/icons/Case Study.svg";
import reportIcon from "../images/icons/event report.svg";
import read from "../images/icons/Read.svg";
import recording from "../images/icons/Recording.svg";

import codeDark from "../images/icons/dark/Code_CTA.svg";
import liveDark from "../images/icons/dark/Live.svg";
import caseStudyDark from "../images/icons/dark/Case Study.svg";
import reportIconDark from "../images/icons/dark/event report.svg";
import readDark from "../images/icons/dark/Read.svg";
import recordingDark from "../images/icons/dark/Recording.svg";

const ProjectCTA = ({ cta, link, userTheme }) => {
  return (
    <>
      {cta === "Live" ? (
        <a
          href={link}
          target="_blank"
          rel="noreferrer"
          className="text-sm flex mr-4 align-middle cursor-pointer dark:hover:text-white hover:text-dim "
        >
          {userTheme === "dark" ? (
            <img src={liveDark} alt="" className="mr-1" />
          ) : (
            <img src={live} alt="" className="mr-1" />
          )}{" "}
          {cta}
        </a>
      ) : (
        ""
      )}
      {cta === "Code" ? (
        <a
          href={link}
          target="_blank"
          rel="noreferrer"
          className="text-sm flex mr-4 align-middle cursor-pointer dark:hover:text-white hover:text-dim"
        >
          {userTheme === "dark" ? (
            <img src={codeDark} alt="" className="mr-1" />
          ) : (
            <img src={code} alt="" className="mr-1" />
          )}
          {cta}
        </a>
      ) : (
        ""
      )}
      {cta === "Case study" ? (
        <a
          href={link}
          target="_blank"
          rel="noreferrer"
          className="text-sm flex mr-4 align-middle cursor-pointer dark:hover:text-white hover:text-dim w-[120px]"
        >
          {userTheme === "dark" ? (
            <img src={caseStudyDark} alt="" className="mr-1" />
          ) : (
            <img src={caseStudy} alt="" className="mr-1" />
          )}
          {cta}
        </a>
      ) : (
        ""
      )}

      {/* needs a new icon soon for event website */}
      {cta === "Event website" ? (
        <a
          href={link}
          target="_blank"
          rel="noreferrer"
          className="text-sm align-middle cursor-pointer dark:hover:text-white hover:text-dim flex mr-4 w-[120px]"
        >
          {userTheme === "dark" ? (
            <img src={reportIconDark} alt="" className="mr-1" />
          ) : (
            <img src={reportIcon} alt="" className="mr-1" />
          )}
          Website
        </a>
      ) : (
        ""
      )}
      {cta === "Event report" ? (
        <a
          href={link}
          target="_blank"
          rel="noreferrer"
          className="text-sm flex mr-4 align-middle cursor-pointer dark:hover:text-white hover:text-dim"
        >
          {userTheme === "dark" ? (
            <img src={reportIconDark} alt="" className="mr-1" />
          ) : (
            <img src={reportIcon} alt="" className="mr-1" />
          )}
          Report
        </a>
      ) : (
        ""
      )}
      {cta === "Recording" ? (
        <a
          href={link}
          target="_blank"
          rel="noreferrer"
          className="text-sm flex mr-4 align-middle cursor-pointer dark:hover:text-white hover:text-dim"
        >
          {userTheme === "dark" ? (
            <img src={recordingDark} alt="" className="mr-1" />
          ) : (
            <img src={recording} alt="" className="mr-1" />
          )}
          {cta}
        </a>
      ) : (
        ""
      )}
      {cta === "Read" ? (
        <a
          href={link}
          target="_blank"
          rel="noreferrer"
          className="text-sm flex mr-4 align-middle cursor-pointer dark:hover:text-white hover:text-dim"
        >
          {userTheme === "dark" ? (
            <img src={readDark} alt="" className="mr-1" />
          ) : (
            <img src={read} alt="" className="mr-1" />
          )}
          {cta}
        </a>
      ) : (
        ""
      )}
    </>
  );
};

export default ProjectCTA;
