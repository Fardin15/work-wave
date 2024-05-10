import { Outlet } from "react-router-dom";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";

const Main = () => {
  return (
    <div className="bg-[#13072E] text-white max-w-6xl mx-auto mt-5 font-roboto">
      <Navbar></Navbar>
      <div className="bg-[#3F2182]">
        <Outlet></Outlet>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Main;
