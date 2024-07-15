import { Outlet } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import "./Root.css";

const Root = () => {
  return (
    <div className=" bg-img text-white">
      <div className="max-w-6xl mx-auto">
        <Navbar></Navbar>
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default Root;
