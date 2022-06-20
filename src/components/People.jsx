import React from "react";
import link from "../images/icons/link.svg";

const People = ({ person }) => {
  return (
    <div className="w-full flex flex-row mb-6">
      <div className="md:bg-imagination rounded-full mr-10 md:w-28 md:h-28 md:p-6 flex-shrink-0">
        <img
          className="rounded-full min-h-16 w-16 outline outline-[20px] outline-imagination md:h-full m-2 mt-6 md:m-0  "
          src={person.fields.Profile[0].url}
          alt={person.fields.Fullname}
        />
      </div>

      <div className="max-w-[500px] w-full">
        <p className="text-[28px] font-bold text-dark">
          {person.fields.Fullname}
        </p>
        <p className="text-dark-secondary">{person.fields.Bio}</p>
        <a
          href={person.fields.Link}
          target="_blank"
          rel="noreferrer"
          className="text-sm flex align-middle cursor-pointer w-[120px] text-slate-500 mt-3"
        >
          @{person.fields.Twitter}{" "}
          <img src={link} alt="link" className="mr-1" />
        </a>
      </div>
    </div>
  );
};

export default People;
