import { BsFillPauseFill, BsFillPlayFill } from "react-icons/bs";

const Poster = () => {
  return (
    <div className='hover:text-white-100 group relative mx-auto h-[360px] w-[260px] rounded-3xl transition duration-200 ease-out hover:scale-105'>
      <img
        src='/images/coverArt.jpg'
        className='absolute inset-0 h-full w-full overflow-hidden rounded-3xl object-cover opacity-80 group-hover:opacity-100'
      />
      <div className='absolute bottom-10 left-8 flex items-center space-x-2'>
        <div className='flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-[#15883e]'>
          <BsFillPlayFill className='text-xl text-white' />
        </div>
        <div className='grid text-sm'>
          <span className='font-semibold truncate w-44 text-white'>
            Something for the thee
          </span>
          <span className='text-white'>Megan Thee Stallion</span>
        </div>
      </div>
    </div>
  );
};

export default Poster;
