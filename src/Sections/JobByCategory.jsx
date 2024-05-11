import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import JobCard from "../Components/JobCard";

const JobByCategory = () => {
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
            <Tab>Hybrid</Tab>
            <Tab>Part-Time</Tab>
          </TabList>
        </div>

        <TabPanel>
          <h2>
            <JobCard></JobCard>
          </h2>
        </TabPanel>
        <TabPanel>
          <h2>On-Site Job</h2>
        </TabPanel>
        <TabPanel>
          <h2>Remote Job</h2>
        </TabPanel>
        <TabPanel>
          <h2>Hybrid</h2>
        </TabPanel>
        <TabPanel>
          <h2>Part-Time</h2>
        </TabPanel>
      </div>
    </Tabs>
  );
};

export default JobByCategory;
