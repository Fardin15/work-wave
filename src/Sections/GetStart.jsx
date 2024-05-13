const GetStart = () => {
  return (
    <div className="px-10 py-12">
      <h1 className="text-2xl font-semibold text-center text-wrap capitalize lg:text-3xl">
        Want to Get Start ?
      </h1>
      <p className="max-w-2xl mx-auto my-6 text-center font-normal">
        IF you have any skills on this sites, Set up a comprehensive profile
        highlighting your skills, experience, and aspirations. Make a strong
        first impression on potential employers.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 text-black">
        {/* card one */}
        <div className="card bg-base-100 shadow-xl hover:bg-lime-200 transition hover:scale-105">
          <figure className="px-10 pt-10">
            <img
              src="https://i.postimg.cc/BvT3ZCcc/search.png"
              alt="Shoes"
              className="rounded-xl h-[130px] w-[200px]"
            />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title">Need Any Jobs?</h2>
            <p>
              You can find many jobs based on different skills. You can see on
              the upper section or you can visit in{" "}
              <span className="font-medium">All Jobs</span> page after login.!
            </p>
          </div>
        </div>
        {/* card two */}
        <div className="card bg-base-100 shadow-xl hover:bg-red-300 transition hover:scale-105">
          <figure className="px-10 pt-10">
            <img
              src="https://i.postimg.cc/cJDfkPrr/shopping-bag.png"
              alt="Shoes"
              className="rounded-xl h-[130px] w-[200px]"
            />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title">Post Your Jobs</h2>
            <p>
              Wanted to hire an worker? Then please post your job. You can use
              <span className="font-medium"> Add A Post</span> page for posting.
              But you should login if you are new in this sites..!!
            </p>
          </div>
        </div>
        {/* card three */}
        <div className="card bg-base-100 shadow-xl hover:bg-green-200 transition hover:scale-105">
          <figure className="px-10 pt-10">
            <img
              src="https://i.postimg.cc/L6WNCYgz/engineer.png"
              alt="Shoes"
              className="rounded-xl h-[130px] w-[200px]"
            />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title">Job Market Data</h2>
            <p>
              You can explore details of every post of this marketplace,,You can
              see them with the details button. Also you can apply from the
              details page.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GetStart;
