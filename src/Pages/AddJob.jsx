import { useContext, useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { AuthContext } from "../Provider/AuthProvider";
import { useNavigate } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";
import axios from "axios";

const AddJob = () => {
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();
  const [application_deadline, setDeadlineDate] = useState(new Date());
  const [job_posting_date, setPostDate] = useState(new Date());
  let job_applicants_number = 0;

  const handleAddJob = async (e) => {
    e.preventDefault();
    const form = e.target;
    const category = form.category.value;
    const job_banner = form.banner.value;
    const name = form.name.value;
    const owner_email = form.email.value;
    const job_title = form.title.value;
    const job_description = form.description.value;
    const min_salary = parseFloat(form.minSalary.value);
    const max_salary = parseFloat(form.maxSalary.value);
    const addJobData = {
      category,
      job_banner,
      name,
      owner_email,
      job_title,
      job_description,
      min_salary,
      max_salary,
      application_deadline,
      job_applicants_number,
      job_posting_date,
    };
    try {
      const { data } = await axios.post(
        `${import.meta.env.VITE_API_URL}/job`,
        addJobData
      );
      if (data.acknowledged) {
        toast.success("Job Posted successfully");
      }
      form.reset();
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <div>
      <p className="font-bold text-lg text-center mt-10">Add Your Job</p>
      <section className="p-6">
        <form
          onSubmit={handleAddJob}
          noValidate=""
          action=""
          className="container flex flex-col mx-auto space-y-12"
        >
          <fieldset className="p-6 rounded-md shadow-sm dark:bg-gray-50">
            <div className="grid grid-cols-6 gap-4 col-span-full lg:col-span-3">
              {/* Job Category  */}
              <div className="col-span-full sm:col-span-3">
                <label htmlFor="firstname" className="text-sm">
                  Job Category
                </label>
                <select
                  name="category"
                  className="select select-bordered w-full text-black"
                >
                  <option defaultValue={"pick one"}>Pick one</option>
                  <option value={"On-Site Job"}>On-Site Job</option>
                  <option value={"Remote Job"}>Remote Job</option>
                  <option value={"Hybrid Job"}>Hybrid Job</option>
                  <option value={"Part-Time Job"}>Part-Time Job</option>
                </select>
              </div>
              {/* Banner of the Job */}
              <div className="col-span-full sm:col-span-3">
                <label htmlFor="lastname" className="text-sm">
                  Banner of the Job
                </label>
                <input
                  name="banner"
                  id="lastname"
                  type="text"
                  placeholder="URL of The Job Banner"
                  className="w-full rounded-md text-gray-500 dark:text-gray-50   border-gray-700 dark:border-gray-300 py-3 px-4"
                />
              </div>
              {/* Your Name */}
              <div className="col-span-full sm:col-span-3">
                <label htmlFor="name" className="text-sm">
                  Your Name
                </label>
                <input
                  readOnly={true}
                  name="name"
                  id="name"
                  type="text"
                  defaultValue={user?.displayName}
                  className="w-full rounded-md text-gray-500 dark:text-gray-50   border-gray-700 dark:border-gray-300 py-3 px-4"
                />
              </div>
              {/* Email */}
              <div className="col-span-full sm:col-span-3">
                <label htmlFor="email" className="text-sm">
                  Email
                </label>
                <input
                  readOnly={true}
                  name="email"
                  id="email"
                  type="email"
                  defaultValue={user?.email}
                  className="w-full rounded-md text-gray-500 dark:text-gray-50   border-gray-700 dark:border-gray-300 py-3 px-4"
                />
              </div>
              {/* title */}
              <div className="col-span-full sm:col-span-3">
                <label htmlFor="title" className="text-sm">
                  Job Title
                </label>
                <input
                  name="title"
                  id="title"
                  type="text"
                  placeholder="Job Title"
                  className="w-full rounded-md text-gray-500 dark:text-gray-50   border-gray-700 dark:border-gray-300 py-3 px-4"
                />
              </div>
              {/* Job Description */}
              <div className="col-span-full sm:col-span-3">
                <label htmlFor="description" className="text-sm">
                  Job Description
                </label>
                <input
                  name="description"
                  id="description"
                  type="text"
                  placeholder="Job Description"
                  className="w-full rounded-md text-gray-500 dark:text-gray-50   border-gray-700 dark:border-gray-300 py-3 px-4"
                />
              </div>
              {/* Salary range */}
              <div className="col-span-full flex justify-between items-center">
                <label htmlFor="city" className="text-sm mr-2">
                  Salary range
                </label>
                {/* min salary */}
                <input
                  name="minSalary"
                  id="city"
                  type="number"
                  placeholder="Min Salary"
                  className="w-full rounded-md text-gray-500 dark:text-gray-50   border-gray-700 dark:border-gray-300 py-3 px-4 mr-2"
                />
                {/* max salary */}
                <input
                  name="maxSalary"
                  id="city"
                  type="number"
                  placeholder="Max Salary"
                  className="w-full rounded-md text-gray-500 dark:text-gray-50   border-gray-700 dark:border-gray-300 py-3 px-4"
                />
              </div>
              {/* deadline date */}
              <div className="col-span-full sm:col-span-3 text-black">
                <label htmlFor="lastname" className="text-sm text-white mr-3">
                  Deadline Date
                </label>
                <DatePicker
                  className="px-5 py-3 rounded-lg border"
                  selected={application_deadline}
                  onChange={(date) => setDeadlineDate(date)}
                />
              </div>
              {/* Posting date */}
              <div className="col-span-full sm:col-span-3 text-black">
                <label htmlFor="lastname" className="text-sm text-white mr-3">
                  Posting Date
                </label>
                <DatePicker
                  className="px-5 py-3 rounded-lg border"
                  selected={job_posting_date}
                  onChange={(date) => setPostDate(date)}
                />
              </div>

              <div className="col-span-full">
                <button
                  type="submit"
                  className="btn btn-block rounded-full bg-gray-600 py-2 px-8 text-white transition "
                >
                  Add
                </button>
              </div>
            </div>
          </fieldset>
          {/* Submit button */}
        </form>
      </section>
      <Toaster />
    </div>
  );
};

export default AddJob;
