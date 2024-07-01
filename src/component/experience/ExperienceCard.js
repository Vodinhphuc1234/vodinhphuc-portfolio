import React from "react";
import { motion } from "framer-motion";
export default function ExperienceCard({ experience }) {
  return (
    <div
      className="bg-[#504f4f29] w-[350px] lg:w-[500px] p-10 rounded-md 
    flex flex-col flex-shrink-0 
    items-center space-y-4 snap-center
    opacity-60 hover:opacity-100 hover:scale-110 hover: transition-all duration-300 cursor-pointer"
    >
      {/* <motion.img
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2 }}
        viewport={{ once: true }}
        src={experience?.image}
        alt=""
        className="w-32 h-32 rounded-full object-cover -mt-20"
      /> */}
      <h2 className="uppercase text-lg font-semibold">{experience?.company}</h2>
      <h4 className="font-semibold">{experience?.role}</h4>
      <h4 className=" font-thin uppercase">
        {experience?.duration?.start} - {experience?.duration?.end}
      </h4>

      <a
        href={experience?.link}
        target="_blank"
        rel="noreferrer"
        className="bg-green-700 uppercase px-5 py-3 rounded-md  hover:scale-110 transition-all duration-300 w-full"
      >
        Visit
      </a>

      <div className="w-full text-start">
        <ul class="list-disc ps-6 text-sm space-y-2">
          {experience?.descriptions?.map((desc, i) => (
            <li key={i}>{desc}</li>
          ))}
        </ul>
      </div>
      <div
        className="flex space-x-3 overflow-auto  
      scrollbar-thin scrollbar-thumb-green-900 scrollbar-track-green-100 
      p-3"
      >
        {experience?.skills?.map((skill) => (
          <img
            key={skill?.name}
            src={skill?.image}
            alt={skill?.name}
            className="w-14 h-14 object-cover rounded-full border border-gray-500"
          />
        ))}
      </div>
    </div>
  );
}
