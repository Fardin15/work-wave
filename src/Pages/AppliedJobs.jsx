import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import axios from "axios";
import { Navigate } from "react-router-dom";

const AppliedJobs = () => {
  const { user } = useContext(AuthContext);
  const [appliedJob, setAppliedJob] = useState([]);
  const [filter, setFilter] = useState("");

  useEffect(() => {
    const getData = async () => {
      const { data } = await axios(
        `${import.meta.env.VITE_API_URL}/applied-jobs/${user?.email}`
      );
      setAppliedJob(data);
    };
    getData();
  }, [user, filter]);

  useEffect(() => {
    const getData = async () => {
      const { data } = await axios.get(
        `${import.meta.env.VITE_API_URL}/job-counts?filter=${filter}`
      );
      setAppliedJob(data);
    };
    getData();
  }, [filter]);

  if (user) {
    return (
      <div>
        <h1 className="font-bold text-3xl text-center mb-7">
          Your Applied Jobs
        </h1>
        <div className="max-w-xs mx-auto text-black">
          <select
            onChange={(e) => setFilter(e.target.value)}
            value={filter}
            name="category"
            className="select select-bordered w-full max-w-xs"
          >
            <option disabled value="">
              Filter by Category
            </option>
            <option value="On-Site Job">On-Site Job</option>
            <option value="Remote Job">Remote Job</option>
            <option value="Hybrid Job">Hybrid Job</option>
            <option value="Part-Time Job">Part-Time Job</option>
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
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
  return (
    <Navigate to="/login" state={location.pathname} replace={true}></Navigate>
  );
};

export default AppliedJobs;
