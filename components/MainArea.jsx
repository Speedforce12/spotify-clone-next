import React from "react";
import Poster from "./Poster";
import Search from "./Search";
import Track from "./Track";

const MainArea = () => {
  return (
    <section className='ml-24 flex-grow space-y-8 bg-black py-4 md:mr-2.5 md:max-w-6xl'>
      <Search />
      <div className='grid h-96 cursor-pointer grid-cols-2 gap-x-4 gap-y-8 overflow-y-scroll p-4 py-4 scrollbar-hide lg:grid-cols-3 xl:grid-cols-4'>
        <Poster />
        <Poster />
        <Poster />
        <Poster />
      </div>

      <div className='absolute flex min-w-full gap-x-8 p-4 md:relative'>
        {/* genres */}
        <div className='hidden max-w-[270px] xl:inline'>
          <h2 className='pb-2 text-lg font-bold text-white'>Genres</h2>
          <div className='flex flex-wrap gap-x-2.5 gap-y-3'>
            <button className='genre'>Classic</button>
            <button className='genre'>House</button>
            <button className='genre'>Minimal</button>
            <button className='genre'>Hip-Hop</button>
            <button className='genre'>Electronic</button>
            <button className='genre'>Chillout</button>
            <button className='genre'>Blues</button>
            <button className='genre'>Country</button>
            <button className='genre'>Techno</button>
          </div>
          <button className='mt-5 flex w-full items-center justify-center rounded-xl bg-[#1A1A1A] p-5 font-semibold text-white opacity-80 hover:opacity-100'>
            All Genre
          </button>
        </div>

        {/* new releases */}

        <div className=' mx-auto w-full   p-2 '>
          <h2 className='pb-2 text-lg font-bold text-white'>New Releases</h2>

          <div className='scrollbar-thumb-rounded h-[1000px] w-[830px] space-y-5 overflow-y-scroll rounded-3xl border-2  border-[#262626] bg-[#0D0D0D] p-3 scrollbar-thin scrollbar-thumb-gray-600 hover:scrollbar-thumb-gray-500 md:h-96'>
            <Track />
            <Track />
            <Track />
            <Track />
            <Track />
            <Track />
            <Track />
            <Track />
          </div>
        </div>
      </div>
    </section>
  );
};

export default MainArea;
