import { cn } from "@/utils/utils";
import React from "react";

const JobsNav = () => {
  return (
    <div className='flex  justify-start  items-center align-middle  h-[67px] border-b border-[#E7E7E7] w-full md:pl-24 p-8 md:gap-10 gap-5'>
      {Navitems.map((items, index) => (
        <div
          className={cn(
            "md:text-[20px] text-[13px] flex flex-col justify-center items-center align-middle",
            items.active == true
              ? "text-[#DC4A2D] font-semibold"
              : "text-[#888888] font-medium"
          )}
          key={index}>
          {items.item}

          {items.active == true ? (
            <div className='relative md:top-4 top-[1.4rem] w-[60%] h-[2px] bg-[#DC4A2D]'></div>
          ) : (
            ""
          )}
        </div>
      ))}
    </div>
  );
};

const Navitems = [
  {
    active: true,
    item: "Job preview",
  },
  {
    active: false,
    item: "Applicants",
  },
  {
    active: false,
    item: "Match",
  },
  {
    active: false,
    item: "Messages",
  },
];

export default JobsNav;
