import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import {
  Navigate,
  useLoaderData,
  useLocation,
  useNavigate,
} from "react-router-dom";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";
import { Helmet } from "react-helmet-async";

const JobDetails = () => {
  const { user } = useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();
  const job = useLoaderData();
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
      return toast.error("You can't apply on your own post!!");
    }
    const today = new Date().toLocaleDateString();
    if (today > job_posting_date) {
      toast.error("The deadline is over!!");
      return (
        <Navigate to="/" state={{ from: location }} replace:true></Navigate>
      );
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
      jobId: _id,
      owner_email,
    };
    try {
      const { data } = await axios.post(
        `${import.meta.env.VITE_API_URL}/applied`,
        appliedData
      );
      console.log(data);
      if (data.acknowledged) {
        toast.success("Applied on this post successfully");
      }
      form.reset();
      navigate("/applied-jobs");
    } catch (error) {
      console.log(error);
    }
  };

  if (user) {
    return (
      <div className="card max-w-[700px] mx-auto bg-[#3F2182] shadow-xl rounded-3xl">
        <Helmet>
          <title>Details of {job_title} || Work Wave</title>
        </Helmet>
        <figure>
          <img className="w-full h-[400px]" src={job_banner} alt="Shoes" />
        </figure>
        <div className="card-body text-white mt-4">
          <h2 className="card-title text-wrap mb-3">
            <span>
              <img
                className="w-[40px] h-[40px]"
                src="https://i.postimg.cc/Ssv2BNJH/tag.png"
                alt=""
              />
            </span>{" "}
            {job_title}
          </h2>
          <div className="flex justify-between items-center font-normal text-xl mb-3">
            <p className="flex justify-start items-center gap-2">
              <span>
                <img
                  className="w-[40px] h-[40px]"
                  src="https://i.postimg.cc/W4nqNwHR/money-1.png"
                  alt=""
                />
              </span>
              <span className="font-light">Salary rang:</span> ${min_salary}-$
              {max_salary}
            </p>
            <p className="flex justify-start items-center gap-2">
              <span>
                <img
                  className="w-[40px] h-[40px]"
                  src="https://i.postimg.cc/SQ79DqrQ/group.png"
                  alt=""
                />
              </span>
              <span className="font-light">Applicants:</span>{" "}
              {job_applicants_number}
            </p>
          </div>
          <p className="font-light text-base text-wrap justify-start items-center gap-2 mb-3">
            <span>
              <img
                className="w-[40px] h-[40px]"
                src="https://i.postimg.cc/8c4jDRkK/job-offer.png"
                alt=""
              />
            </span>
            <span className="font-medium text-xl">Description:</span>{" "}
            {job_description}
          </p>
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
                    required
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
