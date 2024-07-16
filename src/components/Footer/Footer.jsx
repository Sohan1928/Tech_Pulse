import { Link } from "react-router-dom";
import { BiLogoFacebookCircle } from "react-icons/bi";
import { LuTwitter } from "react-icons/lu";
import { FaInstagram } from "react-icons/fa6";
import { AiOutlineYoutube } from "react-icons/ai";

const Footer = () => {
  return (
    <div className="px-4 ">
      <div className="pb-10 bg-[#172b35] divide-y divide-[#0affd6]">
        <footer className="footer text-white p-10">
          <aside>
            <div className="flex items-center">
              <img className="w-12" src="logo.png" alt="" />
              <Link to="/">
                <h2 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-cyan-700 to-violet-700">
                  TechPulse
                </h2>
              </Link>
            </div>
            <p className="w-64 pr-5">
              We provide one-stop solutions for all IT items; your bliss is just
              a click away. Star Tech trusts in quality client
            </p>
            <div className="flex gap-3 text-2xl py-3">
              <BiLogoFacebookCircle className="transition duration-300 delay-150 hover:text-[#08e2ff]"></BiLogoFacebookCircle>
              <LuTwitter className="transition duration-300 delay-150 hover:text-[#08e2ff]"></LuTwitter>
              <FaInstagram className="transition duration-300 delay-150 hover:text-[#08e2ff]"></FaInstagram>
              <AiOutlineYoutube className="transition duration-300 delay-150 hover:text-[#08e2ff]"></AiOutlineYoutube>
            </div>
          </aside>
          <nav>
            <h6 className="footer-title">Services</h6>
            <a className="link link-hover">Branding</a>
            <a className="link link-hover">Design</a>
            <a className="link link-hover">Marketing</a>
            <a className="link link-hover">Advertisement</a>
          </nav>
          <nav>
            <h6 className="footer-title">Company</h6>
            <a className="link link-hover">About us</a>
            <a className="link link-hover">Contact</a>
            <a className="link link-hover">Jobs</a>
            <a className="link link-hover">Press kit</a>
          </nav>
          <nav>
            <h6 className="footer-title">Legal</h6>
            <a className="link link-hover">Terms of use</a>
            <a className="link link-hover">Privacy policy</a>
            <a className="link link-hover">Cookie policy</a>
          </nav>
        </footer>
        <div className="text-center pt-6">
          <h3>Copyright @2024 TechPulse inc</h3>
        </div>
      </div>
    </div>
  );
};

export default Footer;
