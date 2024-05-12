import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import axios from "axios";
import { Link } from "react-router-dom";

const MyJobs = () => {
  const { user } = useContext(AuthContext);
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    const { data } = await axios(
      `${import.meta.env.VITE_API_URL}/jobs/${user?.email}`
    );
    setJobs(data);
  };
  return (
    <div>
      <h1 className="font-bold text-lg text-center mt-10 mb-10">
        My Jobs: {jobs.length} Job
      </h1>
      <div className="overflow-x-auto  rounded-2xl">
        <table className="table">
          {/* head */}
          <thead>
            <tr className="text-lg text-white">
              <th></th>
              <th>Job Title</th>
              <th>Category</th>
              <th>Posting Date</th>
              <th>Applicants Number</th>
              <th></th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {jobs.map((job, index) => (
              <tr key={job._id} className="text-base">
                <th>{index + 1}</th>
                <td>{job.job_title}</td>
                <td>{job.category}</td>
                <td>{new Date(job.job_posting_date).toLocaleDateString()}</td>
                <td>{job.job_applicants_number}</td>
                <td>
                  <Link className="btn bg-gray-500 text-white">Update</Link>
                </td>
                <td>
                  <Link className="btn bg-red-400 text-white">Delete</Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyJobs;
