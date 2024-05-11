import { Link } from "react-router-dom";

const JobCard = () => {
  return (
    <div className="card card-compact w-96 bg-purple-400 shadow-xl text-black">
      <div className="card-body">
        <div className="flex justify-center items-center">
          <p className="">On Site Job</p>
          <p className="">Deadline: 2/4/2024</p>
        </div>
        <p className="card-title">
          If a dog chews shoes whose shoes does he choose?
        </p>
        <p className="font-medium text-xl">Buyer: Md Fardin</p>
        <div>
          <p className="">Posting Date: 20/3/2024</p>
          <p className="">Applicants: 20</p>
        </div>
        <div className="flex justify-between items-center">
          <p>Salary: $40-$100</p>
          <Link to="/job/id" className="btn bg-slate-200">
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default JobCard;
