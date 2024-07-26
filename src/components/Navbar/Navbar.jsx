import { Link, NavLink } from "react-router-dom";
import "./Nav.css";

const Navbar = () => {
  const navLinks = (
    <>
      <nav className="lg:flex space-x-4 font-semibold items-center text-lg">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/Services">Services</NavLink>
        <NavLink to="/Contact">Contact</NavLink>
        <NavLink to="/AboutUs">About Us</NavLink>
      </nav>
    </>
  );

  return (
    <div className="navbar">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-[#234b5e] rounded-box z-[1] mt-3 p-2 shadow"
          >
            {navLinks}
            <div className="navbar-end gap-4">
              <Link to="/login">
                <p className="btn-grad">
                  <button>Login</button>
                </p>
              </Link>
              <Link to="/signUp">
                <p className="btn-grad">
                  <button>Sign Up</button>
                </p>
              </Link>
            </div>
          </ul>
        </div>
        <div className="flex">
          <Link to="/">
            <img className="w-12" src="logo.png" alt="" />
          </Link>
          <Link to="/">
            <p className="text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-cyan-700 to-violet-700">
              TechPuls
            </p>
          </Link>
        </div>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal flex px-1">
          {navLinks}
          <div className="pl-20 flex gap-4">
            <Link to="/login">
              <p className="btn-grad">
                <button>Login</button>
              </p>
            </Link>
            <Link to="/signUp">
              <p className="btn-grad">
                <button>Sign Up</button>
              </p>
            </Link>
          </div>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
