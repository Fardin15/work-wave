import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import axios from "axios";
import { Link, Navigate } from "react-router-dom";
import Swal from "sweetalert2";
import { Helmet } from "react-helmet-async";

const MyJobs = () => {
  const { user } = useContext(AuthContext);
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    getData();
  }, [user]);

  const getData = async () => {
    const { data } = await axios(
      `${import.meta.env.VITE_API_URL}/jobs/${user?.email}`
    );
    setJobs(data);
  };

  // delete job
  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`${import.meta.env.VITE_API_URL}/job/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount > 0) {
              Swal.fire({
                title: "Deleted!",
                text: "Your Job has been deleted.",
                icon: "success",
              });
              // remove the user form the ui
              const remainingUsers = jobs.filter((job) => job._id !== id);
              setJobs(remainingUsers);
            }
          });
      }
    });
  };
  if (user) {
    return (
      <div>
        <Helmet>
          <title>My Jobs || Work Wave</title>
        </Helmet>
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
                    <Link
                      to={`/update/${job._id}`}
                      className="btn bg-white text-black"
                    >
                      Update
                    </Link>
                  </td>
                  <td>
                    <Link
                      onClick={() => handleDelete(job._id)}
                      className="btn bg-red-400 text-white"
                    >
                      Delete
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

export default MyJobs;
