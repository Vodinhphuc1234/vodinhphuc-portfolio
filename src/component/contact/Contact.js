import React from 'react';
import InvidualInformationCard from './InvidualInformationCard';

export default function Contact({
  avatar,
  fullname,
  phoneNumber,
  email,
  address,
}) {
  return (
    <div
      className="h-screen text-center 
      flex flex-row 
    justify-center items-center
    relative max-w-7xl mx-auto"
    >
      <h3 className="uppercase text-2xl absolute top-20 text-gray-500 tracking-[20px]">
        contact me
      </h3>

      <h1 className="text-lg text-gray-500 uppercase font-thin tracking-widest absolute top-32">
        Let's me know if you have any question.
      </h1>
      <InvidualInformationCard
        avatar={avatar}
        fullname={fullname}
        phoneNumber={phoneNumber}
        email={email}
        address={address}
      />
    </div>
  );
}
