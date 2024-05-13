import Banner from "../Sections/Banner";
import GetStart from "../Sections/GetStart";
import JobByCategory from "../Sections/JobByCategory";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <JobByCategory></JobByCategory>
      <GetStart></GetStart>
    </div>
  );
};

export default Home;
