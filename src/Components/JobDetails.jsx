import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { Navigate, useLoaderData, useLocation } from "react-router-dom";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";

const JobDetails = () => {
  const { user } = useContext(AuthContext);
  const location = useLocation();

  const job = useLoaderData();
  console.log(job);
  const {
    category,
    job_posting_date,
    application_deadline,
    job_applicants_number,
    job_banner,
    job_description,
    job_title,
    max_salary,
    min_salary,
    _id,
    owner_email,
  } = job || {};

  const handleApplySubmission = async (e) => {
    e.preventDefault();
    if (user?.email === owner_email) {
      return alert("tumi parba na");
    }
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const resume = form.resume.value;
    const appliedData = {
      name,
      email,
      resume,
      job_applicants_number,
      job_title,
      max_salary,
      min_salary,
      application_deadline,
      category,
      job_posting_date,
      _id,
    };
    try {
      const { data } = await axios.post(
        `${import.meta.env.VITE_API_URL}/applied`,
        appliedData
      );
      console.log(data);
      if (data.acknowledged) {
        toast.success("Applied successfully");
      }
    } catch (error) {
      console.error(error);
    }
  };

  if (user) {
    return (
      <div className="card max-w-[700px] mx-auto bg-[#3F2182] shadow-xl rounded-3xl">
        <figure>
          <img className="w-full h-[400px]" src={job_banner} alt="Shoes" />
        </figure>
        <div className="card-body text-white">
          <h2 className="card-title text-wrap">{job_title}</h2>
          <div className="flex justify-between items-center font-normal text-xl">
            <p>
              <span className="font-light">Salary rang:</span> ${min_salary}-$
              {max_salary}
            </p>
            <p>applicants number {job_applicants_number}</p>
          </div>
          <p className="font-normal text-lg text-wrap">
            <span className="font-light">Description:</span> {job_description}
          </p>
          {/* <button className="btn bg-slate-200 text-black border-none">
            Apply
          </button> */}
          <button
            className="btn"
            onClick={() => document.getElementById("my_modal_3").showModal()}
          >
            Apply
          </button>
          <dialog id="my_modal_3" className="modal">
            <div className="modal-box">
              <form method="dialog">
                {/* if there is a button in form, it will close the modal */}
                <button className="btn btn-sm btn-circle btn-neutral absolute right-2 top-2">
                  ✕
                </button>
              </form>
              {/* apply form */}
              <form onSubmit={handleApplySubmission} className="text-black">
                <div>
                  <label htmlFor="name" className="text-sm">
                    Your Name
                  </label>
                  <input
                    name="name"
                    id="name"
                    type="text"
                    defaultValue={user?.displayName}
                    className="w-full rounded-md text-black dark:text-gray-50   border-gray-700 dark:border-gray-300 py-3 px-4"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="text-sm">
                    Your Email
                  </label>
                  <input
                    name="email"
                    id="email"
                    type="email"
                    defaultValue={user?.email}
                    className="w-full rounded-md text-black dark:text-gray-50   border-gray-700 dark:border-gray-300 py-3 px-4"
                  />
                </div>
                <div>
                  <label htmlFor="resume" className="text-sm">
                    Your Resume Link
                  </label>
                  <input
                    name="resume"
                    id="resume"
                    type="text"
                    placeholder="Your Resume Link"
                    className="w-full rounded-md text-black dark:text-gray-50   border-gray-700 dark:border-gray-300 py-3 px-4"
                  />
                </div>
                <div className="mt-6">
                  <button
                    type="submit"
                    className="btn btn-block rounded-full bg-gray-600 py-2 px-8 text-white transition "
                  >
                    Submit Application
                  </button>
                </div>
              </form>
            </div>
          </dialog>
        </div>
        <Toaster />
      </div>
    );
  }
  return (
    <Navigate to="/login" state={location.pathname} replace={true}></Navigate>
  );
};

export default JobDetails;
