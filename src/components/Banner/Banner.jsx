import { Cursor, useTypewriter } from "react-simple-typewriter";
import "./btnStyle.css";

const Banner = () => {
  const [text] = useTypewriter({
    words: ["AI Content", "Technical Writing", "Blog Writing"],
    loop: true,
    typeSpeed: 50,
    deleteSpeed: 30,
    delaySpeed: 2000,
  });
  return (
    <div>
      <div className="px-3 lg:flex py-14">
        <div className="space-y-7 pb-7">
          <h1 className=" text-4xl lg:text-7xl font-bold ">
            <span className="pb-4">
              High-Quality Way to Write your <br />
            </span>
            <span className=" bg-gradient-to-r from-[#2bbe94] via-[#2bbeb9] to-[#21d2e2] bg-clip-text text-transparent">
              {text}
            </span>
            <Cursor
              cursorBlinking="false"
              cursorStyle="|"
              cursorColor="#2bbeb9"
            ></Cursor>
          </h1>
          <p className="text-xl">
            AI Copywriting is revolutionizing the way content is created. AI can
            create content for blogs, articles, websites, social media and more.
          </p>
          <div className="">
            <button className="btn-banner py-4 px-3 lg:px-6 rounded-full bg-[#2bbeb9] hover:bg-transparent">
              Get Started
            </button>
            <button className="btn-banner py-4 px-3 lg:px-6 ml-5 rounded-full bg-[#2bbeb9] hover:bg-transparent">
              Learn More
            </button>
          </div>
        </div>
        <div>
          <img className="" src="dashboard-img.png" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Banner;
