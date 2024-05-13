import { Helmet } from "react-helmet-async";
import Banner from "../Sections/Banner";
import Contact from "../Sections/Contact";
import GetStart from "../Sections/GetStart";
import JobByCategory from "../Sections/JobByCategory";

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>Work Wave || Home Page</title>
      </Helmet>
      <Banner></Banner>
      <JobByCategory></JobByCategory>
      <GetStart></GetStart>
      <Contact></Contact>
    </div>
  );
};

export default Home;
