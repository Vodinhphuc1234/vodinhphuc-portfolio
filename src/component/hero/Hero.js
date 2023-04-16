import React from 'react';
import { motion } from 'framer-motion';
import { Cursor, useTypewriter } from 'react-simple-typewriter';

export default function Hero({ avatar, role, loopSentences }) {
  const [text] = useTypewriter({
    words: loopSentences
      ? ['Hello world !!!', ...loopSentences]
      : ['Hello world !!!'],
    loop: true,
    delaySpeed: 2000,
  });
  return (
    <div className="h-screen flex text-center flex-col space-y-8 justify-center items-center relative">
      {/* circle */}
      <motion.div
        initial={{
          opacity: 0,
        }}
        animate={{
          scale: [1, 2, 2, 3, 1],
          opacity: [0.1, 0.2, 0.4, 0.8, 0.1, 1.0],
        }}
        transition={{ duration: 2.5 }}
        className="rounded-full border border-[#333333] h-[800px] w-[800px] absolute z-10"
      />
      <img
        className="rounded-full h-28 w-28 object-cover"
        src={avatar}
        alt="none"
      />
      <div className="z-20">
        <h2 className="uppercase text-md text-gray-500 pb-2 tracking-[15px]">
          {role}
        </h2>
        <h1 className="text-5xl lg:text-6xl font-semibold">
          <span>{text}</span>
          <Cursor cursorColor="#F7AB0A" />
        </h1>

        <div className="pt-5">
          <a href="#about">
            <button className="heroButton">About me</button>
          </a>
          <a href="#experience">
            <button className="heroButton">Experience</button>
          </a>
          <a href="#skills">
            <button className="heroButton">Skills</button>
          </a>
          <a href="#project">
            <button className="heroButton">Projects</button>
          </a>
          <a href="#contact">
            <button className="heroButton">Contact</button>
          </a>
        </div>
      </div>
    </div>
  );
}
