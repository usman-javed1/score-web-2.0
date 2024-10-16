import React from "react";
import { IoMdStopwatch } from "react-icons/io";
import { MdStadium } from "react-icons/md";
const TimerLine = () => {
  return (
    <div className="flex justify-between items-center w-[350px] m-auto mt-4">
      <div className="flex flex-row items-center justify-center gap-2 font-medium text-[#aaa]">
        <IoMdStopwatch className="text-2xl"/>
        <p>Oct 18, 2024 | 23:30 </p>
      </div>
      <div className="flex flex-row items-center justify-center gap-2 font-medium text-[#aaa]">
        <MdStadium className="text-2xl"/>
        <p>Signal Iduna Park </p>
      </div>
    </div>
  );
};

export default TimerLine;
