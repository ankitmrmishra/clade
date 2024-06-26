import Image from "next/image";
import React from "react";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { LiaCoinsSolid } from "react-icons/lia";

type Company = {
  logo: any;
  name: string;
};
interface JobDetail {
  title: string;
  items: string[];
}
interface CompanyComponents {
  title: string;
  description: string;
}

interface JobAbout {
  mainDuties: string[];
  additionalDetails: JobDetail[];
  workLocation: string;
}
interface CompanyAboutprops {
  companyLogo: any;
  CompanyName: string;
  componentsCompany: CompanyComponents[];
}
interface JobDescriptionprops {
  JobTitle: string;
  TimeOfPosting: string;
  OpenORclosed: boolean;
  location: string;
  payPrice: string;
  skillsRequired: Company[];
  JobType: string;
  language: string;
  experience: string;
}

const JobDescription: React.FC<JobDescriptionprops> = ({
  JobTitle,
  TimeOfPosting,
  OpenORclosed,
  location,
  payPrice,
  skillsRequired,
  language,
  experience,
  JobType,
}) => {
  return (
    <div className=' w-full'>
      <div className='pl-[100px] pt-[20px] title-job-price-place border-b border-[#E7E7E7] pb-[30px]'>
        <div className='title-area flex justify-start align-middle gap-3  items-center '>
          <span className='Job-title text-[34px] font-bold'>{JobTitle}</span>
          <div className='w-[4px] h-[4px] rounded-full bg-slate-300 relative '></div>
          <span className='time-of-job-posting relative text-sm  text-[#888888]'>
            {TimeOfPosting}
          </span>
          <span className='open-or-closed relative '>
            {OpenORclosed == true ? (
              <div className='bg-[#ECFDF3] flex justify-center items-center align-middle p-1 rounded-3xl border border-[#91f2b7] gap-1  w-[57px]'>
                <div
                  className='w-[6px] h-[6px] rounded-full bg-[#17B26A]
'></div>
                <span className='text-[12px] font-medium text-[#067647]'>
                  Open
                </span>
              </div>
            ) : (
              <div className='bg-[#fdecec] flex justify-center items-center align-middle p-1 rounded-3xl border border-[#f29191] gap-1  w-[57px]'>
                <div
                  className='w-[6px] h-[6px] rounded-full bg-[#b21717]
'></div>
                <span className='text-[12px] font-medium text-[#760606]'>
                  Closed
                </span>
              </div>
            )}
          </span>
        </div>
        <div className='pay-place flex pt-[24px]  text-[20px] gap-3 text-[#5D5D5D]'>
          <div className='location flex justify-center align-middle items-center'>
            <div className='icon'>
              <HiOutlineLocationMarker />
            </div>
            <div className='loactionDetail'>{location}</div>
          </div>
          <div className='w-[4px] h-[4px] rounded-full bg-slate-300 relative top-[13px]'></div>
          <div className='pay flex justify-center align-middle items-center'>
            <div className='icon'>
              <LiaCoinsSolid />
            </div>
            <div className='payPrice'>{payPrice}</div>
          </div>
        </div>
      </div>
      <div className='flex pl-[100px] pt-[20px] title-job-price-place border-b border-[#E7E7E7] pb-[30px] gap-32'>
        <div className='Skills flex flex-col gap-2'>
          <span className='text-[#6E6D6D] text-[14px]'>Skills Required</span>
          {skillsRequired.map((skillsRequired, key) => (
            <div
              className='flex border border-[#D0D5DD] max-w-max p-[3px] rounded-md gap-1 '
              key={key}>
              <Image
                src={skillsRequired.logo}
                width={20}
                height={20}
                className='w-[20px h-[20px]'
                alt='logo'
              />
              <div className='text-[12px]'>{skillsRequired.name}</div>
            </div>
          ))}
        </div>
        <div className='language flex flex-col '>
          <span className='text-[#6E6D6D] text-[14px]'>Prefeerd Language</span>
          <span className='text-[#3D3D3D] font-semibold  text-[16px]'>
            {language}
          </span>
        </div>
        <div className='type flex flex-col  '>
          <span className='text-[#6E6D6D] text-[14px]'>Job Type</span>
          <span className='text-[#3D3D3D] font-semibold  text-[16px]'>
            {JobType}
          </span>
        </div>
        <div className='experience flex flex-col '>
          <span className='text-[#6E6D6D] text-[14px]'>Experience</span>
          <span className='text-[#3D3D3D] font-semibold  text-[16px]'>
            {experience}
          </span>
        </div>
      </div>

      <div className=''></div>
    </div>
  );
};

export const JobAbout: React.FC<JobAbout> = ({
  mainDuties,
  additionalDetails,
  workLocation,
}) => {
  return (
    <div className=' pl-[100px] pt-[20px] title-job-price-place border-b border-[#E7E7E7] pb-[30px] '>
      <h2 className='text-[14px] text-[#6E6D6D] mb-2'>About The Job</h2>

      <ol className='list-decimal list-inside mb-6 text-[#3D3D3D] font-medium'>
        {mainDuties.map((duty, index) => (
          <li key={index}>{duty}</li>
        ))}
      </ol>

      {additionalDetails.map((detail, index) => (
        <div key={index} className='mb-4 text-[#3D3D3D] font-medium'>
          <h3 className='font-semibold mb-2'>{detail.title}:</h3>
          <ul className='list-disc list-inside'>
            {detail.items.map((item, itemIndex) => (
              <li key={itemIndex}>{item}</li>
            ))}
          </ul>
        </div>
      ))}

      <p className='text-[#3D3D3D] font-medium'>
        <span>Work Location:</span> {workLocation}
      </p>
    </div>
  );
};

export const AboutCompany: React.FC<CompanyAboutprops> = ({
  componentsCompany,
  companyLogo,
  CompanyName,
}) => {
  return (
    <div className='pl-[100px] pt-[20px] w-[776px] mb-10'>
      <div className='Company-Name-Logo flex justify-start gap-4 align-middle items-center'>
        <div>
          <Image
            src={companyLogo}
            width={40}
            height={40}
            alt='company-logo'
            className='rounded-lg'
          />
        </div>
        <div>
          <span>{CompanyName}</span>
        </div>
      </div>
      <div className='grid grid-cols-2 gap-[15px] mt-10'>
        {componentsCompany.map((title, key) => (
          <div className='flex flex-col w-[336px]  '>
            <span className='text-[14px] text-[#6E6D6D]'>{title.title}</span>
            <span className='text-[16px] text-[#3D3D3D]'>
              {title.description}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default JobDescription;
