import React from "react";
import Event from "./event";

const EventContainer = ({ events, userTheme }) => {
  return (
    <>
      <p className="font-bold text-sm mb-2 mt-10 dark:text-dim-body">EVENTS</p>

      <div className="w-full lg:w-[650px] p-4 md:p-0">
        {events.map((person) => (
          <Event
            event={person}
            userTheme={userTheme}
            key={person.fields.Number}
          />
        ))}
      </div>
    </>
  );
};

export default EventContainer;
