import React from "react";
import { motion } from "framer-motion";

export default function About({ avatar, introductions }) {
  return (
    <div className="h-screen flex flex-col justify-center items-center relative max-w-7xl mx-auto md:flex-row">
      <h3 className="uppercase text-2xl absolute top-20 text-gray-500 tracking-[20px]">
        About
      </h3>
      {/* avatar */}
      <motion.img
        initial={{
          opacity: 0,
          x: -300,
        }}
        whileInView={{
          opacity: 1,
          x: 0,
        }}
        transition={{ duration: 1.2 }}
        viewport={{
          once: true,
        }}
        src={avatar}
        className="w-56 h-56 rounded-full object-cover md:rounded-md md:w-64 xl:w-80 xl:h-96"
      />
      <motion.div
        initial={{
          opacity: 0,
          x: 300,
        }}
        whileInView={{
          opacity: 1,
          x: 0,
        }}
        transition={{ duration: 1.2 }}
        viewport={{
          once: true,
        }}
        className="m-5 text-gray-300 flex flex-col justify-between"
      >
        {introductions?.map((introduction) => (
          <p className="text-sm md:text-md lg:text-lg text-justify mb-3">
            {introduction}
          </p>
        ))}
      </motion.div>
    </div>
  );
}
