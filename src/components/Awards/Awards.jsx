import { IoMdCheckmarkCircle } from "react-icons/io";
import { FaStar } from "react-icons/fa6";

const Awards = () => {
  return (
    <div className="px-4">
      <div className="py-10 px-4 grid lg:grid-cols-2 items-center bg-[#172b35]">
        <div className="">
          <h1 className="text-3xl lg:text-5xl font-bold pb-5">
            The awards won by our works.
          </h1>
          <div className="flex items-center gap-2 pb-1">
            <IoMdCheckmarkCircle className="text-xl text-[#14fffb]"></IoMdCheckmarkCircle>
            <h3>10+ million user</h3>
          </div>
          <div className="flex items-center gap-2 pb-1">
            <IoMdCheckmarkCircle className="text-xl text-[#14fffb]"></IoMdCheckmarkCircle>
            <h3>6K+ Website user</h3>
          </div>
          <div className="flex items-center gap-2">
            <IoMdCheckmarkCircle className="text-xl text-[#14fffb]"></IoMdCheckmarkCircle>
            <h3>100% billion plagiarism past</h3>
          </div>
          <div className="pt-8">
            <button className="px-6 py-3 font-bold rounded-full border border-[#48adac] transition duration-300 delay-150 hover:bg-[#56b4c1]">
              Learn More
            </button>
          </div>
        </div>
        <div className="mr-8 pl-3 ">
          <p className="pb-6">
            Our clients describe us as a product team which creates AI writing
            tools, by crafting top-notch user experience.
          </p>
          <div className="lg:flex gap-12">
            <h3 className="pb-4">
              <img src="trustpilot.svg" alt="" />
              <p className="flex items-center gap-1 pt-2 text-[#e17f00]">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <h4 className="pl-2 text-white">4.8/5 Rating</h4>
              </p>
            </h3>
            <h3 className="pb-4">
              <img src="capt.svg" alt="" />
              <p className="flex items-center gap-1 pt-2 text-[#e17f00]">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <h4 className="pl-2 text-white">4.8/5 Rating</h4>
              </p>
            </h3>
          </div>
          <div className=" lg:flex pt-4 gap-4">
            <img className="pb-4" src="hubspot.svg" alt="" />
            <img className="pb-4" src="trip.svg" alt="" />
            <img className="pb-4" src="fedex.svg" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Awards;
