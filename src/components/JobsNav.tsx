import { cn } from "@/utils/utils";
import React from "react";

const JobsNav = () => {
  return (
    <div className='flex justify-start  items-center align-middle  h-[67px] border-b border-[#E7E7E7] w-full pl-24 gap-10'>
      {Navitems.map((items, index) => (
        <div
          className={cn(
            "text-[20px] flex flex-col justify-center items-center align-middle",
            items.active == true
              ? "text-[#DC4A2D] font-semibold"
              : "text-[#888888] font-medium"
          )}
          key={index}>
          {items.item}

          {items.active == true ? (
            <div className='relative top-4 w-[60%] h-[2px] bg-[#DC4A2D]'></div>
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
