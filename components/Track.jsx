import React from "react";
import { BiHeadphone } from "react-icons/bi";
import { AiFillHeart } from "react-icons/ai";
import { BsFillPlayFill, BsFillPauseFill } from "react-icons/bs";

const Track = () => {
  return (
    <div className='mx-auto flex rounded-3xl items-center transition ease-out hover:bg-white/10 p-1.5 cursor-pointer'>
      <div className='flex'>
        <img
          src='/images/coverArt.jpg'
          alt=''
          className='h-14 w-14 rounded-2xl'
        />

        <div className='grid pl-5 text-white'>
          <span className='text- font-bold'>Jan Blomvist</span>
          <span className='font-light text-gray-300'>The Space In Between</span>
        </div>
      </div>

      <div className='flex items-center space-x-3 md:ml-auto '>
        <div className='flex space-x-2 text-sm font-bold text-white'>
          <BiHeadphone className='text-lg' />
          <h4 className='font-sans'>455k</h4>
        </div>

        {/* mini-player */}
        <div className='group relative flex h-10 w-[95px] cursor-pointer items-center rounded-full border border-[#262626] bg-[#b1adad14] group-hover:border-white/40 '>
          <AiFillHeart className=' ml-3 text-2xl hover:text-white' />
          <div className='absolute -right-0.5 flex h-12 w-12 items-center justify-center rounded-full border-2 border-[#262626] bg-[#082713] transition duration-200 ease-in-out group-hover:scale-110'>
            <BsFillPlayFill className='text-xl text-green-600 ' />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Track;
