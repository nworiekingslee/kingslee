import React from "react";
import People from "./People";

const PeopleContainer = ({ people }) => {
  console.log("a person", people);
  return (
    <>
      <p className="font-bold text-sm mb-2 mt-10">FRIENDS & PARTNERS</p>

      <div className="w-full lg:w-[650px] p-4 md:p-0">
        {people.map((person) => (
          <People person={person} key={person.fields.Number} />
        ))}
      </div>
    </>
  );
};

export default PeopleContainer;
