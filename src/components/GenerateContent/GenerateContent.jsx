import { HiArrowLongRight } from "react-icons/hi2";
import { Link } from "react-router-dom";

const GenerateContent = () => {
  return (
    <div className="px-4">
      <div className="py-10 px-4 items-center bg-[#172b35]">
        <div className="text-center">
          <h1 className="text-3xl lg:text-5xl font-bold pb-5">
            AI Generate content in seconds
          </h1>
          <p>
            QumAI has a variety of features that make it the best place to start
            trading
          </p>
        </div>
        <div className="space-y-4 lg:grid grid-cols-3 lg:space-y-0 gap-5 px-5 items-center py-8">
          <div className="border border-[#48adac] mx-auto text-center py-4 px-3 lg:h-80 rounded-lg transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-[#213e43] duration-200">
            <img className="mx-auto" src="fi-1.svg" alt="" />
            <h2 className="pb-3 text-2xl font-semibold">Plagiarism checker</h2>
            <p className="opacity-70">
              Convert data noise intelligent for a quis lorem.
              <h4 className="flex justify-center py-5">
                <Link>
                  <HiArrowLongRight className="text-3xl animate-bounce hover:text-[#03fff2]"></HiArrowLongRight>
                </Link>
              </h4>
            </p>
          </div>
          <div className="border border-[#48adac] mx-auto text-center py-4 px-3 lg:h-80 rounded-lg transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-[#213e43] duration-200">
            <img className="mx-auto" src="fi-2.svg" alt="" />
            <h2 className="pb-3 text-2xl font-semibold">
              Search Engine Optimization
            </h2>
            <p className="opacity-70">
              Convert data noise intelligent for a quis lorem.
              <h4 className="flex justify-center py-5">
                <Link>
                  <HiArrowLongRight className="text-3xl animate-bounce hover:text-[#03fff2]"></HiArrowLongRight>
                </Link>
              </h4>
            </p>
          </div>
          <div className="border border-[#48adac] mx-auto text-center py-4 px-3 lg:h-80 rounded-lg transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-[#213e43] duration-200">
            <img className="mx-auto" src="fi-3.svg" alt="" />
            <h2 className="pb-3 text-2xl font-semibold">Content Generator</h2>
            <p className="opacity-70">
              Convert data noise intelligent for a quis lorem.
              <h4 className="flex justify-center py-5">
                <Link>
                  <HiArrowLongRight className="text-3xl animate-bounce hover:text-[#03fff2]"></HiArrowLongRight>
                </Link>
              </h4>
            </p>
          </div>
          <div className="border border-[#48adac] mx-auto text-center py-4 px-3 lg:h-80 rounded-lg transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-[#213e43] duration-200">
            <img className="mx-auto" src="fi-4.svg" alt="" />
            <h2 className="pb-3 text-2xl font-semibold">
              Digital name generator
            </h2>
            <p className="opacity-70">
              Convert data noise intelligent for a quis lorem.
              <h4 className="flex justify-center py-5">
                <Link>
                  <HiArrowLongRight className="text-3xl animate-bounce hover:text-[#03fff2]"></HiArrowLongRight>
                </Link>
              </h4>
            </p>
          </div>
          <div className="border border-[#48adac] mx-auto text-center py-4 px-3 lg:h-80 rounded-lg transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-[#213e43] duration-200">
            <img className="mx-auto" src="fi-5.svg" alt="" />
            <h2 className="pb-3 text-2xl font-semibold">Ad Targeting tips</h2>
            <p className="opacity-70">
              Convert data noise intelligent for a quis lorem.
              <h4 className="flex justify-center py-5">
                <Link>
                  <HiArrowLongRight className="text-3xl animate-bounce hover:text-[#03fff2]"></HiArrowLongRight>
                </Link>
              </h4>
            </p>
          </div>
          <div className="border border-[#48adac] mx-auto text-center py-4 px-3 lg:h-80 rounded-lg transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-[#213e43] duration-200">
            <img className="mx-auto" src="fi-6.svg" alt="" />
            <h2 className="pb-3 text-2xl font-semibold">Content Rewriter</h2>
            <p className="opacity-70">
              Convert data noise intelligent for a quis lorem.
              <h4 className="flex justify-center py-5">
                <Link>
                  <HiArrowLongRight className="text-3xl animate-bounce hover:text-[#03fff2]"></HiArrowLongRight>
                </Link>
              </h4>
            </p>
          </div>
        </div>
        <div className="py-6 text-center">
          <button className="px-6 py-3 font-bold rounded-full border border-[#48adac] transition duration-300 delay-150 hover:bg-[#56b4c1]">
            See More
          </button>
        </div>
      </div>
    </div>
  );
};

export default GenerateContent;
