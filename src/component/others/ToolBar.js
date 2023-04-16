import React from 'react';
import {
  FaAddressCard,
  FaBriefcase,
  FaCode,
  FaFolder,
  FaPhoneVolume,
} from 'react-icons/fa';

export default function ToolBar() {
  return (
    <div
      className="bottom-3 p-2 text-md font-thin border border-gray-600 rounded-full 
    max-w-fit mx-auto
    flex flex-row items-center"
    >
      <a href="#about">
        <button className="heroButton flex items-center space-x-2">
          <div>
            <FaAddressCard />
          </div>
          <div className="hidden lg:inline-flex">About me</div>
        </button>
      </a>
      <a href="#experience">
        <button className="heroButton flex items-center space-x-2">
          <div>
            <FaBriefcase />
          </div>
          <div className="hidden lg:inline-flex">Experience</div>
        </button>
      </a>
      <a href="#skills">
        <button className="heroButton flex items-center space-x-2">
          <div>
            <FaCode />
          </div>
          <div className="hidden lg:inline-flex">Skills</div>
        </button>
      </a>
      <a href="#project">
        <button className="heroButton flex items-center space-x-2">
          <div>
            <FaFolder />
          </div>
          <div className="hidden lg:inline-flex">Projects</div>
        </button>
      </a>
      <a href="#contact">
        <button className="heroButton flex items-center space-x-2">
          <div>
            <FaPhoneVolume />
          </div>
          <div className="hidden lg:inline-flex">Contact me</div>
        </button>
      </a>
    </div>
  );
}
