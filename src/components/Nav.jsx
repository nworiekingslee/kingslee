import React from "react";
import { Link } from "react-router-dom";

const Nav = ({ onEnter, onLeave, active }) => {
  return (
    <div className=" mb-32 flex flex-col justify-between tracking-widest  text-dark dark:text-white w-60">
      <Link
        onMouseEnter={onEnter}
        onMouseLeave={onLeave}
        to="/"
        className="nav-link flex items-center text-[12px] font-bold p-3"
      >
        00{" "}
        <div className="nav-line w-4 h-[1px] bg-dark dark:bg-white mx-4 "></div>{" "}
        HOME
      </Link>
      {active !== "projects" ? (
        <Link
          onMouseEnter={onEnter}
          onMouseLeave={onLeave}
          to="/projects"
          className="nav-link flex items-center text-[12px] font-bold p-3"
        >
          01{" "}
          <div className="nav-line w-4 h-[1px] bg-dark dark:bg-white mx-4 "></div>{" "}
          PROJECTS
        </Link>
      ) : (
        <Link
          to="/projects"
          className="flex items-center text-[12px] font-bold p-3"
        >
          01{" "}
          <div className="w-[40px] h-[1px] bg-dark dark:bg-white mx-4 "></div>{" "}
          PROJECTS
        </Link>
      )}

      {active !== "events" ? (
        <Link
          onMouseEnter={onEnter}
          onMouseLeave={onLeave}
          to="/events"
          className="nav-link flex items-center text-[12px] font-bold p-3"
        >
          02{" "}
          <div className="nav-line w-4 h-[1px] bg-dark dark:bg-white mx-4 "></div>{" "}
          EVENTS
        </Link>
      ) : (
        <Link
          to="/events"
          className="flex items-center text-[12px] font-bold p-3"
        >
          01{" "}
          <div className="w-[40px] h-[1px] bg-dark dark:bg-white mx-4 "></div>{" "}
          EVENTS
        </Link>
      )}

      {/* <Link
        onMouseEnter={onEnter}
        onMouseLeave={onLeave}
        to="/resume"
        className="nav-link flex items-center text-[12px] "
      >
        02 <div className="nav-line w-4 h-[1px] bg-dim-body mx-4 "></div>{" "}
        ARTICLES
      </Link> */}
    </div>
  );
};

export default Nav;
