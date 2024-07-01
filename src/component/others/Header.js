import { motion } from "framer-motion";
import React from "react";
import { SocialIcon } from "react-social-icons";

export default function Header({ links }) {
  console.log(links);
  return (
    <header className="sticky top-0 p-5 flex items-start justify-between max-w-7xl mx-auto z-20 xl:items-center">
      <motion.div
        initial={{
          opacity: 0,
          x: -500,
          scale: 0.5,
        }}
        animate={{
          opacity: 1,
          x: 0,
          scale: 1,
        }}
        transition={{
          duration: 1.5,
        }}
        className="flex flex-row items-center"
      >
        {links?.map((link, i) => (
          <SocialIcon key={i} url={link} fgColor="gray" bgColor="transparent" />
        ))}
      </motion.div>
      <motion.div
        initial={{
          opacity: 0,
          x: 500,
          scale: 0.5,
        }}
        animate={{
          opacity: 1,
          x: 0,
          scale: 1,
        }}
        transition={{
          duration: 1.5,
        }}
        className="flex flex-row items-center"
      >
        <a
          href="mailto:dinhphuc20092001@gmail.com"
          className="flex flex-row items-center text-gray-400 cursor-pointer"
        >
          <SocialIcon network="email" fgColor="gray" bgColor="transparent" />
          <p className="uppercase hidden md:inline-flex text-gray-400">
            Get in touch
          </p>
        </a>
        <a
          href="https://drive.google.com/drive/folders/1OicT6njDsH5pqP8wmOpbSPgwpgDHHC0w?usp=sharing"
          className="flex flex-row items-center text-gray-400 cursor-pointer"
        >
          <SocialIcon network="" fgColor="gray" bgColor="transparent" />
          <p className="uppercase hidden md:inline-flex text-gray-400">
            Visit my CV
          </p>
        </a>
      </motion.div>
    </header>
  );
}
