import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { Navigate, useLoaderData, useLocation } from "react-router-dom";
import { max } from "date-fns";

const JobDetails = () => {
  const { user } = useContext(AuthContext);
  const location = useLocation();

  const job = useLoaderData();
  console.log(job);
  const {
    application_deadline,
    category,
    job_applicants_number,
    job_banner,
    job_description,
    job_posting_date,
    job_title,
    max_salary,
    min_salary,
    name,
    _id,
  } = job || {};

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
                <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
                  ✕
                </button>
              </form>
              <h3 className="font-bold text-lg">Hello!</h3>
              <p className="py-4">
                Press ESC key or click on ✕ button to close
              </p>
            </div>
          </dialog>
        </div>
      </div>
    );
  }
  return (
    <Navigate to="/login" state={location.pathname} replace={true}></Navigate>
  );
};

export default JobDetails;
