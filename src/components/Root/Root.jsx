import { Outlet } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import "./Root.css";
import Footer from "../Footer/Footer";

const Root = () => {
  return (
    <div className=" text-white bg-gradient-to-r from-[#407896] from-20% to-[#35707a] to-90%">
      <div className="max-w-6xl mx-auto">
        <Navbar></Navbar>
        <Outlet></Outlet>
        <Footer></Footer>
      </div>
    </div>
  );
};

export default Root;
