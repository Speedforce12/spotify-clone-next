import { HiOutlineShieldCheck } from "react-icons/hi";
import { MdOutlineSettings } from "react-icons/md";
import { BiBell } from "react-icons/bi";
import Dropdown from "./Dropdown";



const RightPanel = () => {
  return (
    <section className='space-y-8  p-4 text-white pr-8'>
      <div className='flex items-center justify-between space-x-3'>
        {/*  left side*/}
        <div className='p-5 space-x-3 rounded-full border-2 border-[#262626] bg-[#0D0D0D] flex items-center'>

          <HiOutlineShieldCheck className="text-xl headIcon"/>
          <MdOutlineSettings className="text-xl headIcon" />
          <BiBell className="text-xl headIcon"/>
        </div>

        {/* account panel */}
         <Dropdown/>
      </div>
    </section>
  );
};

export default RightPanel;
