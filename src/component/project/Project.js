import React from 'react';
import ProjectCard from './ProjectCard';

export default function Project({ projects }) {
  return (
    <div
      className="h-screen text-center 
      flex flex-row 
    justify-center items-center
    relative mx-auto"
    >
      <h3 className="uppercase text-2xl absolute top-20 text-gray-500 tracking-[20px]">
        Projects
      </h3>
      <div className="absolute w-full top-[30%] bg-green-300/10 left 0 h-[500px] -skew-y-12" />
      <div
        className="flex max-w-7xl flex-row overflow-x-scroll 
      space-x-8 py-20 snap-x snap-mandatory
      scrollbar-thin scrollbar-thumb-green-900 scrollbar-track-green-100"
      >
        {projects?.map((project) => (
          <ProjectCard project={project} />
        ))}
      </div>
    </div>
  );
}
