import { motion } from 'framer-motion';
import React from 'react';
import { FaEnvelope, FaPhone, FaSearchLocation } from 'react-icons/fa';
export default function InvidualInformationCard({
  avatar,
  fullname,
  phoneNumber,
  email,
  address,
}) {
  return (
    <div
      className="bg-green-800 w-[400px] p-10 rounded-md 
    flex flex-col flex-shrink-0 
    items-center space-y-3
    transition-all duration-300 cursor-pointer"
    >
      <motion.img
        initial={{ opacity: 0, x: -200 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1.2 }}
        viewport={{ once: true }}
        src={avatar}
        alt={fullname}
        className="w-32 h-32 rounded-full object-cover"
      />
      <motion.h2
        initial={{ opacity: 0, x: -200 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1.2 }}
        viewport={{ once: true }}
        className="uppercase text-lg font-semibold"
      >
        {fullname}
      </motion.h2>
      <motion.div
        initial={{ opacity: 0, x: 200 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1.2 }}
        viewport={{ once: true }}
        className="w-full text-start pt-9"
      >
        <ul class="space-y-5 font-thin">
          <li>
            <div className="flex flex-row items-center space-x-3">
              <FaPhone color="black" />
              <div>{phoneNumber}</div>
            </div>
          </li>
          <li>
            <div className="flex flex-row items-center space-x-3">
              <FaEnvelope color="darkred" />
              <div>{email}</div>
            </div>
          </li>
          <li>
            <div className="flex flex-row items-center space-x-3">
              <FaSearchLocation size={35} color="darkblue" />
              <div>{address}</div>
            </div>
          </li>
        </ul>
      </motion.div>
    </div>
  );
}
