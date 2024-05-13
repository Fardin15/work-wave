import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import JobCard from "../Components/JobCard";
import { useEffect, useState } from "react";
import axios from "axios";

const JobByCategory = () => {
  const [jobs, setJobs] = useState([]);
  const [search, setSearch] = useState("");
  useEffect(() => {
    const getJobs = async () => {
      const { data } = await axios(
        `${import.meta.env.VITE_API_URL}/jobs?search=${search}`
      );
      setJobs(data);
    };
    getJobs();
  }, [search]);
  return (
    <Tabs>
      <div className="px-10 py-12">
        <h1 className="text-2xl font-semibold text-center text-wrap capitalize lg:text-3xl">
          Find Jobs By Categories
        </h1>
        <p className="max-w-2xl mx-auto my-6 text-center font-normal">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Esse magni
          pariatur, eligendi ad doloribus velit. Provident quasi distinctio
          ullam itaque.
        </p>
        <div className="flex items-center justify-center mb-7">
          <TabList>
            <Tab>All Jobs</Tab>
            <Tab>On-Site Job</Tab>
            <Tab>Remote Job</Tab>
            <Tab>Hybrid Job</Tab>
            <Tab>Part-Time Job</Tab>
          </TabList>
        </div>

        <TabPanel>
          <div className="grid grid-cols-1 md:grid-cols-3 xl:grid-cols-4 gap-6">
            {jobs.map((job) => (
              <JobCard key={job._id} job={job}></JobCard>
            ))}
          </div>
        </TabPanel>
        <TabPanel>
          <div className="grid grid-cols-1 md:grid-cols-3 xl:grid-cols-4 gap-6">
            {jobs
              .filter((j) => j.category === "On-Site Job")
              .map((job) => (
                <JobCard key={job._id} job={job}></JobCard>
              ))}
          </div>
        </TabPanel>
        <TabPanel>
          <div className="grid grid-cols-1 md:grid-cols-3 xl:grid-cols-4 gap-6">
            {jobs
              .filter((j) => j.category === "Remote Job")
              .map((job) => (
                <JobCard key={job._id} job={job}></JobCard>
              ))}
          </div>
        </TabPanel>
        <TabPanel>
          <div className="grid grid-cols-1 md:grid-cols-3 xl:grid-cols-4 gap-6">
            {jobs
              .filter((j) => j.category === "Hybrid Job")
              .map((job) => (
                <JobCard key={job._id} job={job}></JobCard>
              ))}
          </div>
        </TabPanel>
        <TabPanel>
          <div className="grid grid-cols-1 md:grid-cols-3 xl:grid-cols-4 gap-6">
            {jobs
              .filter((j) => j.category === "Part-Time Job")
              .map((job) => (
                <JobCard key={job._id} job={job}></JobCard>
              ))}
          </div>
        </TabPanel>
      </div>
    </Tabs>
  );
};

export default JobByCategory;
