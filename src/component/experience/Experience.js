import React from 'react';
import ExperienceCard from './ExperienceCard';

export default function Experience({ experiences }) {
  return (
    <div
      className="h-screen text-center 
      flex flex-row 
    justify-center items-center
    relative max-w-7xl mx-auto"
    >
      <h3 className="uppercase text-2xl absolute top-20 text-gray-500 tracking-[20px]">
        Experience
      </h3>
      <div className="flex flex-row overflow-x-auto space-x-8 py-20 px-10 snap-x snap-mandatory">
        {experiences?.map((experience) => (
          <ExperienceCard experience={experience} />
        ))}
      </div>
    </div>
  );
}
