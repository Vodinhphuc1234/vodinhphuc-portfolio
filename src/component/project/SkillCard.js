import React from 'react';

export default function SkillCard({ skill }) {
  return (
    <div className="relative flex-shrink-0">
      <div
        className="absolute text-sm font-semibold 
      rounded-full bg-gray-500 bg-opacity-50
      h-full left-0 right-0
      cursor-pointer
      opacity-0 hover:opacity-100
      transition-all duration-200
      "
      >
        <div className="absolute top-[40%] left-0 right-0">{skill?.name}</div>
      </div>
      <img
        className=" rounded-full p-1 border border-gray-600 h-14 w-14 object-cover"
        src={skill?.image}
        alt={skill?.name}
      />
    </div>
  );
}
