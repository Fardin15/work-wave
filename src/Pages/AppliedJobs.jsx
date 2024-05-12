import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import axios from "axios";

const AppliedJobs = () => {
  const { user } = useContext(AuthContext);
  const [appliedJob, setAppliedJob] = useState([]);

  useEffect(() => {
    getData();
  }, [user]);

  const getData = async () => {
    const { data } = await axios(
      `${import.meta.env.VITE_API_URL}/applied-jobs/${user?.email}`
    );
    setAppliedJob(data);
  };
  console.log(appliedJob);
  return (
    <div>
      <h1 className="font-bold text-3xl text-center mb-7">Your Applied Jobs</h1>
      {/* Filter by Job Category  */}
      <div className="w-52 mx-auto text-lg font-normal">
        <label htmlFor="firstname" className="text-sm">
          Filter By Category
        </label>
        <select
          name="category"
          className="select select-bordered w-full text-black"
        >
          <option selected disabled defaultValue={"pick one"}>
            Pick one
          </option>
          <option value={"On-Site Job"}>On-Site Job</option>
          <option value={"Remote Job"}>Remote Job</option>
          <option value={"Hybrid Job"}>Hybrid Job</option>
          <option value={"Part-Time Job"}>Part-Time Job</option>
        </select>
      </div>
      <div className="overflow-x-auto rounded-2xl text-white">
        <table className="table text-white">
          {/* head */}
          <thead>
            <tr className="text-lg text-white">
              <th></th>
              <th>Job Title</th>
              <th>Owner Name</th>
              <th>Job Posting Date</th>
              <th>Application Deadline</th>
              <th>Salary Range</th>
              <th>Applicant Number</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {appliedJob.map((job, index) => (
              <tr key={job._id} className="text-base">
                <th>{index + 1}</th>
                <td>{job.job_title}</td>
                <td>{job.owner_email}</td>
                <td>{new Date(job.job_posting_date).toLocaleDateString()}</td>
                <td>
                  {new Date(job.application_deadline).toLocaleDateString()}
                </td>
                <td>
                  ${job.min_salary}-${job.max_salary}
                </td>
                <td>{job.job_applicants_number}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AppliedJobs;
