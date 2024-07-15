import { FaEye } from "react-icons/fa";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div>
      <Helmet>
        <title>TechPulse|Login</title>
      </Helmet>
      <div>
        <div className=" hero min-h-screen">
          <div className="hero-content flex">
            <div className="">
              <img src="login_img.svg" alt="" />
            </div>

            <div className=" login-back-color w-full items-center max-w-sm shrink-0 shadow-2xl">
              <form className="card-body">
                <div className="mt-3 mx-auto text-white">
                  <h1 className="text-2xl font-bold text-center">
                    Please Login
                  </h1>
                  <p className="mt-1 text-center">
                    Send, spend and save smarter
                  </p>
                </div>
                <div className="form-control mt-7 mb-4">
                  <input
                    type="email"
                    placeholder="Email"
                    className="py-3 px-2 rounded-lg login-back-color text-white"
                    name="email"
                    required
                  />
                </div>
                <div className="form-control relative">
                  <input
                    type="password"
                    placeholder="Password"
                    className=" py-3 px-2 rounded-lg login-back-color text-white"
                    name="password"
                    required
                  />
                  <FaEye className="absolute right-4 top-4"></FaEye>
                </div>
                <div className="form-control mt-6 ">
                  <button className="btnStyle py-2 w-full rounded-lg bg-[#2bbeb9] hover:bg-transparent">
                    Login
                  </button>
                  <Link to="/signUp">
                    <p className="mt-2 text-center">
                      New here? <span className="underline">Sign Up</span>
                    </p>
                  </Link>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
