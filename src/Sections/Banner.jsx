const Banner = () => {
  return (
    <section
      className="px-10 py-12bg-center bg-cover"
      style={{
        backgroundImage: `url(https://i.postimg.cc/QMcczNnf/bannerbackimg.jpg)`,
      }}
    >
      <div className="text-white mt-12 rounded-3xl h-[32rem] grid lg:grid-cols-2 items-center">
        <div></div>
        <div>
          <h1 className="text-5xl font-bold leading-none sm:text-6xl xl:max-w-3xl text-white">
            Welcome to the WorkWave sites !!
          </h1>
          <p className="mt-6 mb-8 text-2xl sm:mb-12 xl:max-w-3xl text-black">
            Hope this site might be helpful for you to find a job or to find a
            job-seeker for your works ...
          </p>
        </div>
      </div>
    </section>
  );
};

export default Banner;
