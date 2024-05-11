const AddJob = () => {
  return (
    <div>
      <p className="font-bold text-lg text-center mt-10">Add Your Job</p>
      <section className="p-6">
        <form
          noValidate=""
          action=""
          className="container flex flex-col mx-auto space-y-12"
        >
          <fieldset className="p-6 rounded-md shadow-sm bg-green-200 dark:bg-gray-50">
            <div className="grid grid-cols-6 gap-4 col-span-full lg:col-span-3">
              {/* country  */}
              <div className="col-span-full sm:col-span-3">
                <label htmlFor="firstname" className="text-sm">
                  Country Country
                </label>
                <select
                  name="country"
                  className="select select-bordered w-full"
                >
                  <option defaultValue={"pick one"}>Pick one</option>
                  <option value={"USA"}>USA</option>
                  <option value={"Canada"}>Canada</option>
                  <option value={"Brazil"}>Brazil</option>
                  <option value={"Argentina"}>Argentina</option>
                  <option value={"Maxico"}>Maxico</option>
                  <option value={"Peru"}>Peru</option>
                </select>
              </div>
              {/* tourists_spot_name */}
              <div className="col-span-full sm:col-span-3">
                <label htmlFor="lastname" className="text-sm">
                  Tourist Spot Name
                </label>
                <input
                  name="spot"
                  id="lastname"
                  type="text"
                  placeholder="Tourist Spot Name"
                  className="w-full rounded-md text-gray-500 dark:text-gray-50   border-gray-700 dark:border-gray-300 py-3 px-4"
                />
              </div>
              {/* location */}
              <div className="col-span-full sm:col-span-3">
                <label htmlFor="email" className="text-sm">
                  Location
                </label>
                <input
                  name="location"
                  id="email"
                  type="text"
                  placeholder="Location"
                  className="w-full rounded-md text-gray-500 dark:text-gray-50   border-gray-700 dark:border-gray-300 py-3 px-4"
                />
              </div>
              {/* short description */}
              <div className="col-span-full sm:col-span-3">
                <label htmlFor="address" className="text-sm">
                  Short description
                </label>
                <input
                  name="description"
                  id="address"
                  type="text"
                  placeholder="Short description"
                  className="w-full rounded-md text-gray-500 dark:text-gray-50   border-gray-700 dark:border-gray-300 py-3 px-4"
                />
              </div>
              {/* Image URL */}
              <div className="col-span-full">
                <label htmlFor="city" className="text-sm">
                  Image URL
                </label>
                <input
                  name="photo"
                  id="city"
                  type="text"
                  placeholder="Image URL"
                  className="w-full rounded-md text-gray-500 dark:text-gray-50   border-gray-700 dark:border-gray-300 py-3 px-4"
                />
              </div>
              {/*  average_cost */}
              <div className="col-span-full sm:col-span-2">
                <label htmlFor="city" className="text-sm">
                  Average Cost
                </label>
                <input
                  name="cost"
                  id="city"
                  type="number"
                  placeholder="Give Cost only in number"
                  className="w-full rounded-md text-gray-500 dark:text-gray-50   border-gray-700 dark:border-gray-300 py-3 px-4"
                />
              </div>
              {/* season  */}
              <div className="col-span-full sm:col-span-2">
                <label htmlFor="firstname" className="text-sm">
                  Season name
                </label>
                <select name="season" className="select select-bordered w-full">
                  <option defaultValue={"pick one"}>Pick season</option>
                  <option value={"Spring"}>Spring</option>
                  <option value={"Summer"}>Summer</option>
                  <option value={"Autumn "}>Autumn </option>
                  <option value={"Winter"}>Winter</option>
                </select>
              </div>
              {/* travel_time */}
              <div className="col-span-full sm:col-span-1">
                <label htmlFor="zip" className="text-sm">
                  Travel Time
                </label>
                <input
                  name="time"
                  id="zip"
                  type="text"
                  placeholder="Travel Time"
                  className="w-full rounded-md text-gray-500 dark:text-gray-50   border-gray-700 dark:border-gray-300 py-3 px-4"
                />
              </div>
              {/* totalVisitorsPerYear */}
              <div className="col-span-full sm:col-span-1">
                <label htmlFor="zip" className="text-sm">
                  Total Visitors Per Year
                </label>
                <input
                  name="visitors"
                  id="zip"
                  type="text"
                  placeholder="Total Visitors Per Year"
                  className="w-full rounded-md text-gray-500 dark:text-gray-50   border-gray-700 dark:border-gray-300 py-3 px-4"
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
    </div>
  );
};

export default AddJob;
