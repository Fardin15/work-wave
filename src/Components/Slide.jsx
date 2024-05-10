const Slide = () => {
  return (
    <section>
      <div
        className="bg-center bg-cover h-[38rem] text-white"
        style={{
          backgroundImage: `url(https://i.postimg.cc/0NJcgc5v/banner.jpg)`,
        }}
      >
        <div className="container flex flex-col items-center px-4 py-16 pb-24 mx-auto text-center lg:pb-56 md:py-32 md:px-10 lg:px-3">
          <h1 className="text-5xl font-bold leading-none sm:text-6xl xl:max-w-3xl text-black">
            Welcome to the WorkWave sites !!
          </h1>
          <p className="mt-6 mb-8 text-2xl sm:mb-12 xl:max-w-3xl text-black">
            Hope this site might be helpful for you to find a job or to find a
            job-seeker for your works ...
          </p>
          <div className="flex flex-wrap justify-center">
            <button
              type="button"
              className="px-8 py-3 m-2 text-lg font-semibold rounded bg-transparent bg-slate-200 text-black"
            >
              Get started
            </button>
            <button
              type="button"
              className="px-8 py-3 m-2 text-lg border rounded border-gray-700 bg-transparent bg-[#8D75C0]"
            >
              Learn more
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Slide;
