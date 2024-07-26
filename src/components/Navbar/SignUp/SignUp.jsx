import { createUserWithEmailAndPassword } from "firebase/auth";
import { Helmet } from "react-helmet-async";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Link } from "react-router-dom";
import auth from "../../../firebase/firebase.config";
import { useState } from "react";

const SignUp = () => {
  const [success, setSuccess] = useState("");
  const [registerError, setRegisterError] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleSignUp = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    const checkedTerms = e.target.terms.checked;
    console.log(email, password);

    setRegisterError("");
    setSuccess("");

    if (password.length < 6) {
      setRegisterError("Password should be at least 6 characters or longer!!");
      return;
    } else if (!/[A-Z]/.test(password)) {
      setRegisterError("Password should be at least one upper character!!");
      return;
    } else if (!checkedTerms) {
      setRegisterError("Please accept our terms and conditions!!");
      return;
    }

    createUserWithEmailAndPassword(auth, email, password)
      .then((result) => {
        console.log(result.user);
        setSuccess("User added successfully");
      })
      .catch((error) => {
        console.error(error);
        setRegisterError("This email already in use");
      });
  };

  return (
    <div>
      <Helmet>
        <title>TechPulse|SignUP</title>
      </Helmet>
      <div>
        <div>
          <div className=" hero min-h-screen">
            <div className="hero-content flex">
              <div className="">
                <img src="login_img.svg" alt="" />
              </div>

              <div className="login-back-color w-full items-center max-w-sm shrink-0 shadow-2xl">
                <form onSubmit={handleSignUp} className="card-body">
                  <div className="mt-3 mx-auto text-white">
                    <h1 className="text-2xl font-bold">
                      Sign up for an account
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
                      type={showPassword ? "text" : "password"}
                      placeholder="Password"
                      className=" py-3 px-2 rounded-lg login-back-color text-white"
                      name="password"
                      required
                    />
                    <span
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-4 top-4"
                    >
                      {showPassword ? <FaEyeSlash /> : <FaEye />}
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
                    <button className="btnStyle py-2 rounded-lg bg-[#2bbeb9] hover:bg-transparent">
                      Sign Up
                    </button>
                    <Link to="/login">
                      <p className="mt-2 text-center">
                        Already have an account?{" "}
                        <span className="underline">Please Login</span>
                      </p>
                    </Link>
                  </div>
                </form>
                {registerError && (
                  <p className="text-2xl text-center font-semibold text-red-600 pb-6">
                    {registerError}
                  </p>
                )}
                {success && (
                  <p className="text-2xl text-center font-semibold text-green-600 pb-6">
                    {success}
                  </p>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
