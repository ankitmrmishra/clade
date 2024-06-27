import React from "react";
import { FiBriefcase, FiMessageSquare } from "react-icons/fi";
import { cn } from "@/utils/utils";
import Image from "next/image";
import ProfileIcon from "../../public/ImageCompany.png";
import { FaChevronDown } from "react-icons/fa6";

const Navbar = () => {
  return (
    <div className='flex justify-between align-middle items-center md:pt-[24px] md:pb-6 md:pl-[40px] md:pr-[14px] p-6 border-b border-[#E7E7E7]'>
      <div className='left logo bg-[#E7E7E7] w-[100px] h-[61px] text-[#DC4A2D] flex justify-center items-center align-middle pt-[9px] pb-[9px] pl-[28px] pr-[28px]'>
        <span>Logo</span>
      </div>
      <div className='center fixed md:relative bottom-0 bg-white flex justify-between align-middle items-center border border-[#D1D1D1] md:rounded-[36px] md:w-[538px] p-2 max-h-max w-full left-0'>
        {Navitems.map((title, index) => (
          <div
            className={cn(
              "flex md:h-[58px] h-[50px] justify-center items-center align-middle gap-2 p-[8px] rounded-[34px] md:text-xl text-lg",
              title.active == true
                ? "bg-[#DC4A2D] font-medium  text-white p-4"
                : " text-[#888888]"
            )}
            key={index}>
            <div className='icon'>{title.icon}</div>
            <div className='title'>
              <span>{title.NavTitle}</span>
            </div>
          </div>
        ))}
      </div>
      <div className='right flex justify-center gap-2 items-center align-middle p-2'>
        <div className='bellIcon'>
          <BellIcons />
        </div>
        <div className='profileImage'>
          <Image
            src={ProfileIcon}
            width={40}
            height={40}
            className='rounded-full'
            alt='profile Icon'
          />
        </div>
        <div className='dropdown'>
          <FaChevronDown />
        </div>
      </div>
    </div>
  );
};

const PiHandCoins = () => {
  return (
    <svg
      width='22'
      height='23'
      viewBox='0 0 22 23'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'>
      <path
        d='M12.5295 7.85186C11.9571 8.25995 11.2566 8.5 10.5 8.5C8.567 8.5 7 6.933 7 5C7 3.067 8.567 1.5 10.5 1.5C11.753 1.5 12.8522 2.15842 13.4705 3.14814M5 19.5872H7.61029C7.95063 19.5872 8.28888 19.6277 8.61881 19.7086L11.3769 20.3789C11.9753 20.5247 12.5988 20.5388 13.2035 20.4214L16.253 19.8281C17.0585 19.6712 17.7996 19.2854 18.3803 18.7205L20.5379 16.6217C21.154 16.0234 21.154 15.0524 20.5379 14.4531C19.9832 13.9134 19.1047 13.8527 18.4771 14.3103L15.9626 16.1449C15.6025 16.4081 15.1643 16.5498 14.7137 16.5498H12.2855L13.8311 16.5498C14.7022 16.5498 15.4079 15.8633 15.4079 15.0159V14.7091C15.4079 14.0055 14.9156 13.392 14.2141 13.2219L11.8286 12.6417C11.4404 12.5476 11.0428 12.5 10.6431 12.5C9.67833 12.5 7.93189 13.2988 7.93189 13.2988L5 14.5249M19 6C19 7.933 17.433 9.5 15.5 9.5C13.567 9.5 12 7.933 12 6C12 4.067 13.567 2.5 15.5 2.5C17.433 2.5 19 4.067 19 6ZM1 14.1L1 19.9C1 20.4601 1 20.7401 1.10899 20.954C1.20487 21.1422 1.35785 21.2951 1.54601 21.391C1.75992 21.5 2.03995 21.5 2.6 21.5H3.4C3.96005 21.5 4.24008 21.5 4.45399 21.391C4.64215 21.2951 4.79513 21.1422 4.89101 20.954C5 20.7401 5 20.4601 5 19.9V14.1C5 13.5399 5 13.2599 4.89101 13.046C4.79513 12.8578 4.64215 12.7049 4.45399 12.609C4.24008 12.5 3.96005 12.5 3.4 12.5L2.6 12.5C2.03995 12.5 1.75992 12.5 1.54601 12.609C1.35785 12.7049 1.20487 12.8578 1.10899 13.046C1 13.2599 1 13.5399 1 14.1Z'
        stroke='#B0B0B0'
        strokeWidth='2'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  );
};

const BellIcons = () => {
  return (
    <svg
      width='26'
      height='28'
      viewBox='0 0 26 28'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'>
      <path
        d='M15.6666 27H10.3333M20.9999 9.66669C20.9999 7.54496 20.1571 5.51012 18.6568 4.00983C17.1565 2.50954 15.1217 1.66669 12.9999 1.66669C10.8782 1.66669 8.84338 2.50954 7.34309 4.00983C5.8428 5.51012 4.99994 7.54496 4.99994 9.66669C4.99994 13.7869 3.96057 16.608 2.7995 18.4739C1.82011 20.0479 1.33042 20.8348 1.34838 21.0544C1.36826 21.2975 1.41976 21.3902 1.61564 21.5355C1.79256 21.6667 2.59006 21.6667 4.18508 21.6667H21.8148C23.4098 21.6667 24.2073 21.6667 24.3842 21.5355C24.5801 21.3902 24.6316 21.2975 24.6515 21.0544C24.6695 20.8348 24.1798 20.0479 23.2004 18.4739C22.0393 16.608 20.9999 13.7869 20.9999 9.66669Z'
        stroke='black'
        stroke-width='2'
        stroke-linecap='round'
        stroke-linejoin='round'
      />
    </svg>
  );
};

const Navitems = [
  {
    active: true,
    icon: <FiBriefcase />,
    NavTitle: "Jobs",
  },
  {
    active: false,
    icon: <FiMessageSquare />,
    NavTitle: "Messages",
  },
  {
    active: false,
    icon: <PiHandCoins />,
    NavTitle: "Payments",
  },
];

export default Navbar;
