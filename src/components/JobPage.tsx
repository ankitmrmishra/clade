import React from "react";
import JobDescription, {
  JobAbout,
  AboutCompany,
} from "@/components/JobDescription";

import Ai from "../../public/Ai.png";
import figma from "../../public/figma.png";
import xd from "../../public/xd.png";
import Atlassian from "../../public/ImageCompany.png";

const JobPage = () => {
  return (
    <div className=' w-full'>
      <div className=''>
        <div className=''>
          {jobdata.map((job, key) => (
            <JobDescription {...job} key={key} />
          ))}
        </div>
        <div className=''>
          {aboutJOb.map((job, index) => (
            <JobAbout {...job} key={index} />
          ))}
        </div>
        <div className=''>
          {AboutCom.map((company, index) => (
            <AboutCompany key={index} {...company} />
          ))}
        </div>
      </div>
      <div className=''></div>
    </div>
  );
};

const jobdata = [
  {
    JobTitle: "Senior Product Designer",
    TimeOfPosting: "posted 2 days ago",
    OpenORclosed: true,
    location: "Delaware, USA",
    payPrice: "$300k-$400k",
    skillsRequired: [
      {
        logo: figma,
        name: "Figma",
      },
      {
        logo: Ai,
        name: "Adobe Illustrator",
      },
      {
        logo: xd,
        name: "Adobe XD",
      },
    ],
    JobType: "Full time",
    language: "English",
    experience: "3+ Years of Experience",
  },
];

const aboutJOb = [
  {
    title: "About the job",
    mainDuties: [
      "Handle the UI/UX research design",
      "Work on researching on latest web applications designs & trends",
      "Work on conceptualizing and visualizing",
      "Work on creating graphics content and other graphic related works",
    ],
    additionalDetails: [
      {
        title: "Benefits",
        items: ["Health insurance", "Provident Fund"],
      },
      {
        title: "Schedule",
        items: ["Day shift"],
      },
      {
        title: "Supplemental pay types",
        items: ["Performance bonus", "Yearly bonus"],
      },
    ],
    workLocation: "In person",
  },
];

const AboutCom = [
  {
    companyLogo: Atlassian,
    CompanyName: "Atlassian",
    componentsCompany: [
      {
        title: "Company size",
        description: "1k - 2k Employees",
      },
      {
        title: "Type",
        description: "Private",
      },
      {
        title: "Sector",
        description: "Information Technology, Infrastructure",
      },
      {
        title: "Funding",
        description: "Bootstrapped",
      },
      {
        title: "Founded In",
        description: "2019",
      },
      {
        title: "Founded By",
        description: "Scott Farquhar, Mike Cannon-Brookes",
      },
    ],
  },
];

export default JobPage;
