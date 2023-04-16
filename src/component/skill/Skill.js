import React from 'react';
import { motion } from 'framer-motion';
import SkillCard from './SkillCard';

export default function Skill({ skills }) {
  return (
    <div
      className="h-screen text-center 
      flex flex-row 
    justify-center items-center
    relative max-w-7xl mx-auto"
    >
      <h3 className="uppercase text-2xl absolute top-20 text-gray-500 tracking-[20px]">
        Skills
      </h3>
      <motion.div
        initial={{ opacity: 0, x: -200 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1.2 }}
        viewport={{ once: true }}
        className="grid grid-cols-3 lg:grid-cols-4 gap-5"
      >
        {skills?.map((skill, i) => (
          <SkillCard key={i} skill={skill} />
        ))}
      </motion.div>
    </div>
  );
}
