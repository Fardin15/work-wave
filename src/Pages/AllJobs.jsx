import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { Link, Navigate } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";

const AllJobs = () => {
  const { user } = useContext(AuthContext);
  const [jobs, setJobs] = useState([]);
  const [search, setSearch] = useState("");
  useEffect(() => {
    const getJobs = async () => {
      const { data } = await axios.get(
        `${import.meta.env.VITE_API_URL}/jobs?search=${search}`
      );

      setJobs(data);
    };
    getJobs();
  }, [user, search]);

  const handleSearch = (e) => {
    e.preventDefault();
    const text = e.target.search.value;
    setSearch(text);
  };

  if (user) {
    return (
      <div className="flex flex-col items-center justify-center">
        <h1 className="font-bold text-3xl text-center mt-10 mb-10">All Jobs</h1>
        <p className="font-medium text-center max-w-[600px] text-wrap mx-auto mb-10">
          There are the all jobs list in the table below. Your can see all off
          them. If you want,you can explore them...
        </p>
        {/* search */}
        <form onSubmit={handleSearch}>
          <div className="join mx-auto mb-7">
            <div>
              <div>
                <input
                  name="search"
                  className="input input-bordered join-item text-black"
                  placeholder="Search by title"
                />
              </div>
            </div>
            <div className="indicator">
              <button type="submit" className="btn join-item">
                Search
              </button>
            </div>
          </div>
        </form>
        <div className="overflow-x-auto rounded-2xl text-white">
          <table className="table text-white">
            {/* head */}
            <thead>
              <tr className="text-lg text-white">
                <th></th>
                <th>Job Title</th>
                <th>Job Posting Date</th>
                <th>Application Deadline</th>
                <th>Salary Range</th>
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
                      className="btn bg-white text-black"
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
  }
  return (
    <Navigate to="/login" state={location.pathname} replace={true}></Navigate>
  );
};

export default AllJobs;
