import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";

const AllJobs = () => {
  const { user } = useContext(AuthContext);
  const [jobs, setJobs] = useState([]);
  console.log(jobs);
  useEffect(() => {
    const getJobs = async () => {
      const { data } = await axios(`${import.meta.env.VITE_API_URL}/jobs`);
      setJobs(data);
    };
    getJobs();
  }, [user]);

  return (
    <div>
      <h1 className="font-bold text-lg text-center mt-10 mb-10">All Jobs</h1>
      <div className="overflow-x-auto rounded-2xl text-white">
        <table className="table text-white">
          {/* head */}
          <thead>
            <tr className="text-lg text-white">
              <th></th>
              <th>Job Title</th>
              <th>Job Posting Date</th>
              <th>Application Deadline</th>
              <th>Salary Rang</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {jobs.map((job, index) => (
              <tr key={job._id} className="text-base">
                <th>{index + 1}</th>
                <td>{job.job_title}</td>
                <td>{new Date(job.job_posting_date).toLocaleDateString()}</td>
                <td>
                  {new Date(job.application_deadline).toLocaleDateString()}
                </td>
                <td>
                  ${job.min_salary}-${job.max_salary}
                </td>
                <td>
                  <Link
                    to={`/job/${job._id}`}
                    className="btn bg-gray-500 text-white"
                  >
                    Details
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllJobs;
