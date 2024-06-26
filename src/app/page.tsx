import JobActionDetail from "@/components/JobActionDetail";
import JobPage from "@/components/JobPage";
import JobsNav from "@/components/JobsNav";
import Navbar from "@/components/Navbar";
import Image from "next/image";

export default function Home() {
  return (
    <main className=''>
      <Navbar />
      <JobsNav />
      <div className='grid grid-cols-4'>
        <div className='col-span-3'>
          <JobPage />
        </div>
        <div className=''>
          <JobActionDetail />
        </div>
      </div>
    </main>
  );
}
