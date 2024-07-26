import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import auth from "../../../firebase/firebase.config";

const Login = () => {
  const [loginSuccess, setLoginSuccess] = useState("");
  const [loginError, setLoginError] = useState("");
  const [loginShowPassword, setLoginShowPassword] = useState(false);

  const handleLogin = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    const checkedOurTerms = e.target.terms.checked;
    console.log(email, password);

    setLoginError("");
    setLoginSuccess("");

    if (password.length < 6) {
      setLoginError("Password should be at least 6 characters or longer!!");
      return;
    } else if (!/[A-Z]/.test(password)) {
      setLoginError("Password should be at least one upper character!!");
      return;
    } else if (!checkedOurTerms) {
      setLoginError("Please accept our terms and conditions!!");
      return;
    }

    createUserWithEmailAndPassword(auth, email, password)
      .then((result) => {
        console.log(result.user);
        setLoginSuccess(result.user);
      })
      .catch((error) => {
        console.error(error);
        setLoginError("This email already in use");
      });
  };

  return (
    <div>
      <Helmet>
        <title>TechPulse|Login</title>
      </Helmet>
      <div className="">
        <div className="hero min-h-screen">
          <div className="hero-content flex">
            <div className="">
              <img src="login_img.svg" alt="" />
            </div>

            <div className=" login-back-color w-full items-center max-w-sm shrink-0 shadow-2xl">
              <form onSubmit={handleLogin} className="card-body">
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
                    type={loginShowPassword ? "text" : "password"}
                    placeholder="Password"
                    className=" py-3 px-2 rounded-lg login-back-color text-white"
                    name="password"
                    required
                  />
                  <span
                    onClick={() => setLoginShowPassword(!loginShowPassword)}
                    className="absolute right-4 top-4"
                  >
                    {loginShowPassword ? <FaEyeSlash /> : <FaEye />}
                  </span>
                </div>
                <div className="mb-3">
                  <input
                    className="mr-2"
                    type="checkbox"
                    name="terms"
                    id="terms"
                  />
                  <label htmlFor="terms">
                    Accept <a href="">our terms and condition</a>
                  </label>
                </div>

                <div className="form-control mt-6 ">
                  <button className="btnStyle py-2 w-full rounded-lg bg-[#2bbeb9] hover:bg-transparent">
                    Login
                  </button>
                  <Link to="/signUp">
                    <p className="mt-2 text-center">
                      New to this website?{" "}
                      <span className="underline">Sign Up</span>
                    </p>
                  </Link>
                </div>
              </form>

              {loginError && (
                <p className="text-2xl font-semibold text-red-600 pb-6 text-center">
                  {loginError}
                </p>
              )}

              {loginSuccess && (
                <p className="text-2xl font-semibold text-green-600 pb-6 text-center">
                  This user added successfully!!
                </p>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
