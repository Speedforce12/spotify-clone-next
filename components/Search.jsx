import { MdOutlineShortText } from "react-icons/md";

const Search = () => {
  return (
    <div className='flex max-w-6xl items-center overflow-hidden rounded-full border-2 border-[#333333] bg-[#1A1A1A] p-3 px-5 pr-8 '>
      {/* search input */}
      <div className='h-4 w-4 flex-shrink-0 animate-pulse rounded-full border-2 border-white' />
      <input
        placeholder='Search'
        type='text'
        className='ml-3 border-none bg-[#1A1A1A] text-base text-white placeholder-[#FAFAFA] outline-none focus:ring-0 lg:w-full'
      />

      {/* search button */}
      <div className='ml-auto flex items-center divide-x-2 divide-dashed divide-[#333333]'>
        <div className='flex space-x-2 pr-5'>
          <button className='searchBtn' type='button'>
            Minimal
          </button>
          <button className='searchBtn' type='button'>
            House
          </button>
          <button type='button' className='searchBtn'>
            Minimal
          </button>
        </div>

        {/* filter */}
        <div className='pl-5 flex items-center space-x-1.5'>
          <MdOutlineShortText className='text-[#808080]' size={30} />
          <span className='text-white font-medium'>Filters</span>
        </div>
      </div>
    </div>
  );
};

export default Search;
