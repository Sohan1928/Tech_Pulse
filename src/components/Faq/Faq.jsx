import { Link } from "react-router-dom";

const Faq = () => {
  return (
    <div className="px-4">
      <div className="lg:flex py-10 px-4 justify-around items-center bg-[#172b35]">
        <div className="">
          <h1 className="text-3xl lg:text-5xl font-bold pb-4">
            Any Questions? <br /> We have Answers!
          </h1>
          <p className="pb-5">
            Do not find your answer here? just send us a message for any query.
          </p>
          <Link to="/Contact">
            <button className="px-6 py-3 font-bold rounded-full border border-[#48adac] transition duration-300 delay-150 hover:bg-[#56b4c1]">
              Contact Us
            </button>
          </Link>
        </div>
        <div>
          <div className="collapse collapse-arrow">
            <input type="radio" name="my-accordion-2" defaultChecked />
            <div className="collapse-title text-xl text-[#a59544] font-medium">
              What is AI content writing tool?
            </div>
            <div className="collapse-content">
              <p>
                They not only understand what I say but read between the lines.
              </p>
            </div>
          </div>
          <div className="collapse collapse-arrow">
            <input type="radio" name="my-accordion-2" />
            <div className="collapse-title text-xl font-medium text-[#a59544] ">
              How do you different criteria in your process?
            </div>
            <div className="collapse-content">
              <p>
                They not only understand what I say but read between the lines.
              </p>
            </div>
          </div>
          <div className="collapse collapse-arrow">
            <input type="radio" name="my-accordion-2" />
            <div className="collapse-title text-xl font-medium text-[#a59544] ">
              How can invest money here?
            </div>
            <div className="collapse-content">
              <p>
                They not only understand what I say but read between the lines.
              </p>
            </div>
          </div>
          <div className="collapse collapse-arrow">
            <input type="radio" name="my-accordion-2" />
            <div className="collapse-title text-xl font-medium text-[#a59544] ">
              How can I trade my crypto into different currency?
            </div>
            <div className="collapse-content">
              <p>
                They not only understand what I say but read between the lines.
              </p>
            </div>
          </div>
          <div className="collapse collapse-arrow">
            <input type="radio" name="my-accordion-2" />
            <div className="collapse-title text-xl font-medium text-[#a59544] ">
              How can I accept credit cards online?
            </div>
            <div className="collapse-content">
              <p>
                They not only understand what I say but read between the lines.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Faq;
