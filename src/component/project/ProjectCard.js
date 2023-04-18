import { motion } from 'framer-motion';
import React from 'react';
import { FaLink } from 'react-icons/fa';
import SkillCard from './SkillCard';
export default function ProjectCard({ project }) {
  return (
    <div
      className="bg-[#29292929] w-[350px] lg:w-[500px] px-10 py-3 rounded-md 
    flex flex-col flex-shrink-0 
    items-center space-y-4 snap-center
    opacity-60 hover:opacity-100 hover:scale-110 transition-all duration-300"
    >
      <motion.img
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2 }}
        viewport={{ once: true }}
        src="https://res.cloudinary.com/vodinhphuc-fit-hcmus/image/upload/v1681661842/case-study_osqomw.jpg"
        alt=""
        className="w-full h-24 lg:h-56 rounded-md object-cover"
      />
      <h2 className="uppercase text-lg font-semibold">{project?.name}</h2>
      <h4 className=" font-thin uppercase">
        {project?.duration?.start} - {project?.duration?.end}
      </h4>
      <div className="text-sm text-start">{project?.description}</div>
      <div className="w-full text-start text-sm">
        <ul class="list-disc ps-6 space-y-2">
          {project?.links?.map((link) => (
            <li>
              <a
                target="_blank"
                href={link?.link}
                rel="noreferrer"
                className="flex space-x-2 items-center"
              >
                <div>{link?.name}</div>
                <FaLink />
              </a>
            </li>
          ))}
        </ul>
      </div>
      <div
        className="flex flex-row 
      overflow-auto  
      scrollbar-thin scrollbar-thumb-green-900 scrollbar-track-green-100 
      p-3
       space-x-3"
      >
        {project?.skiils?.map((skill) => (
          <SkillCard skill={skill} />
        ))}
      </div>
    </div>
  );
}
