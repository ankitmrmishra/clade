import React from "react";
import { TbUsers, TbUserCheck } from "react-icons/tb";
import { MdOutlineRemoveRedEye } from "react-icons/md";
import { BiPencil } from "react-icons/bi";
import { FiMessageSquare } from "react-icons/fi";
const JobActionDetail = () => {
  return (
    <div className='flex gap-6 flex-col pt-[36px] pl-[20px] pr-[20px] shadow-lg h-full bg-[#FCFCFC]'>
      <div className='flex gap-3'>
        <div className='actionButtons bg-[#FEF4F2] w-[172px] border-[#DC4A2D] border rounded-[8px]'>
          <div className='delete  gap-3 flex justify-center items-center align-middle text-[#DC4A2D] pl-[24px] pr-[24px] pt-[12px] pb-[12px]'>
            <DeleteButton />
            <span>Delete</span>
          </div>
        </div>
        <div className='actionButtons  w-[172px] bg-[#DC4A2D] rounded-[8px] border-[2px] border-[#FEF4F2]'>
          <div className='edit flex gap-3 justify-center items-center align-middle text-[#FEF4F2]  pl-[24px] pr-[24px] pt-[12px] pb-[12px]'>
            <BiPencil />
            <span>Edit Job</span>
          </div>
        </div>
      </div>
      <div className='flex gap-6 flex-col p-[12px] '>
        {data.map((da, idx) => (
          <div
            key={idx}
            className='users flex justify-between items-center align-middle border-gray-300 border-b-2   pb-5'>
            <div className='flex align-middle justify-center items-center text-[#4F4F4F] gap-2'>
              <div className='icon text-lg'>{da.icon}</div>
              <div className='text font-medium'>{da.title}</div>
            </div>
            <div className='text-[20px] font-semibold'>{da.number}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

const DeleteButton = () => {
  return (
    <svg
      width='17'
      height='16'
      viewBox='0 0 17 16'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'>
      <path
        d='M6 0.5H11M1 3H16M14.3333 3L13.7489 11.7661C13.6612 13.0813 13.6174 13.7389 13.3333 14.2375C13.0833 14.6765 12.706 15.0294 12.2514 15.2497C11.735 15.5 11.0759 15.5 9.75779 15.5H7.24221C5.92409 15.5 5.26503 15.5 4.74861 15.2497C4.29396 15.0294 3.91674 14.6765 3.66665 14.2375C3.38259 13.7389 3.33875 13.0813 3.25107 11.7661L2.66667 3M6.83333 6.75V10.9167M10.1667 6.75V10.9167'
        stroke='#DC4A2D'
        stroke-linecap='round'
        stroke-linejoin='round'
      />
    </svg>
  );
};

const data = [
  {
    icon: <TbUsers />,
    title: "Application",
    number: 400,
  },
  {
    icon: <TbUserCheck />,
    title: "Matches",
    number: 100,
  },
  {
    icon: <FiMessageSquare />,
    title: "Messages",
    number: 147,
  },
  {
    icon: <MdOutlineRemoveRedEye />,
    title: "Views",
    number: 800,
  },
];

export default JobActionDetail;
