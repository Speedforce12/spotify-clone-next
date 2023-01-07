import React from "react";
import { FiHome } from "react-icons/fi";
import { FaMicrophoneAlt } from "react-icons/fa";
import { RiCompassFill } from "react-icons/ri";
import { BiChart } from "react-icons/bi";
import { BsClockHistory, BsThreeDots } from "react-icons/bs";
import Image from "next/image";

const Sidebar = () => {
  return (
    <div className='fixed top-0 z-40 flex h-screen w-24 flex-col items-center space-y-8 bg-black p-4'>
      <Image
        src='https://rb.gy/xkacau'
        className='object-contain'
        width={60}
        height={60}
      />
      <div className='flex flex-col items-center gap-y-8'>
        <FiHome className='sidebarIcon text-white opacity-[0.85]' />
        <RiCompassFill className='sidebarIcon text-2xl' />
        <FaMicrophoneAlt className='sidebarIcon' />
        <BiChart className='sidebarIcon' />
        <BsClockHistory className='sidebarIcon' />
        <BsThreeDots className='sidebarIcon' />
      </div>
    </div>
  );
};

export default Sidebar;
