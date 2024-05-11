import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const JobCard = ({ job }) => {
  const {
    application_deadline,
    category,
    job_applicants_number,
    job_posting_date,
    job_title,
    max_salary,
    min_salary,
    name,
    _id,
  } = job || {};
  return (
    <div className="card card-compact bg-purple-400 shadow-xl text-black transition hover:scale-105">
      <div className="card-body">
        <div className="flex justify-center items-center">
          <p className="">{category}</p>
          <p className="">Deadline: {application_deadline}</p>
        </div>
        <p className="card-title">{job_title}</p>
        <p className="font-medium text-xl">Buyer: {name}</p>
        <div>
          <p className="">Posting Date: {job_posting_date}</p>
          <p className="">Applicants: {job_applicants_number}</p>
        </div>
        <div className="flex justify-between items-center">
          <p>
            Salary: ${min_salary}-${max_salary}
          </p>
          <Link to={`/job/${_id}`} className="btn bg-slate-200">
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default JobCard;
JobCard.propTypes = {
  job: PropTypes.object.isRequired,
};
