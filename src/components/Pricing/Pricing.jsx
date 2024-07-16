import { IoMdCheckmarkCircle } from "react-icons/io";
import { FaDollarSign } from "react-icons/fa";

const Pricing = () => {
  return (
    <div className="px-4">
      <div className="py-10 px-4  items-center bg-[#172b35]">
        <div>
          <div className=" lg:flex items-center pb-6">
            <h2 className="text-3xl lg:text-5xl font-bold pb-5">
              The Right Plan for Transparent Pricing
            </h2>
            <p>
              We have several powerful plans to showcase your business and get
              discovered as a creative entrepreneurs. Everything your need.
            </p>
          </div>
          {/* started section */}
          <div className="mb-4 lg:flex items-center justify-between gap-4 border border-[#48adac] rounded-xl">
            <div className="py-3 pl-8">
              <h3 className="text-3xl font-bold pb-2">Starter</h3>
              <p>For most businesses that want to optimize web queries</p>
            </div>

            <div className="px-4 py-4">
              <div className="flex items-center gap-2 pb-1">
                <IoMdCheckmarkCircle className="text-xl text-[#14fffb]"></IoMdCheckmarkCircle>
                <h3>All Limited Links</h3>
              </div>
              <div className="flex items-center gap-2 pb-1">
                <IoMdCheckmarkCircle className="text-xl text-[#14fffb]"></IoMdCheckmarkCircle>
                <h3>Own Analytics Platform</h3>
              </div>
              <div className="flex items-center gap-2 pb-1">
                <IoMdCheckmarkCircle className="text-xl text-[#14fffb]"></IoMdCheckmarkCircle>
                <h3>Chat Support</h3>
              </div>
              <div className="flex items-center gap-2 pb-1">
                <IoMdCheckmarkCircle className="text-xl text-[#14fffb]"></IoMdCheckmarkCircle>
                <h3>Unlimited Users</h3>
              </div>
            </div>
            <div className="items-center text-center justify-center py-3 lg:pl-7">
              <h1 className="text-4xl font-bold">Free</h1>
            </div>
            <div className="lg:pr-8 py-5  items-center text-center">
              <button className="px-6 py-3 font-bold rounded-full border border-[#48adac] transition duration-300 delay-150 hover:bg-[#56b4c1]">
                Get Started
              </button>
            </div>
          </div>
          {/* popular section */}
          <div className="mb-4 lg:flex items-center justify-between gap-4 border border-[#48adac] rounded-xl">
            <div className="py-3 pl-8">
              <h3 className="text-3xl font-bold pb-2">Popular</h3>
              <p>For most businesses that want to optimize web queries we</p>
            </div>

            <div className="px-4 py-4">
              <div className="flex items-center gap-2 pb-1">
                <IoMdCheckmarkCircle className="text-xl text-[#14fffb]"></IoMdCheckmarkCircle>
                <h3>All Limited Links</h3>
              </div>
              <div className="flex items-center gap-2 pb-1">
                <IoMdCheckmarkCircle className="text-xl text-[#14fffb]"></IoMdCheckmarkCircle>
                <h3>Own Analytics Platform</h3>
              </div>
              <div className="flex items-center gap-2 pb-1">
                <IoMdCheckmarkCircle className="text-xl text-[#14fffb]"></IoMdCheckmarkCircle>
                <h3>Chat Support</h3>
              </div>
              <div className="flex items-center gap-2 pb-1">
                <IoMdCheckmarkCircle className="text-xl text-[#14fffb]"></IoMdCheckmarkCircle>
                <h3>Unlimited Users</h3>
              </div>
            </div>
            <div className="items-center text-center justify-center py-3 lg:pl-7">
              <h1 className="text-4xl flex mx-auto justify-center items-center font-bold">
                <FaDollarSign />
                29.99
              </h1>
            </div>
            <div className="lg:pr-8 py-5  items-center text-center">
              <button className="px-6 py-3 font-bold rounded-full border border-[#48adac] transition duration-300 delay-150 hover:bg-[#56b4c1]">
                Get Started
              </button>
            </div>
          </div>
          {/* enterprise section */}
          <div className="mb-4 lg:flex items-center justify-between gap-4 border border-[#48adac] rounded-xl">
            <div className="py-3 pl-8">
              <h3 className="text-3xl font-bold pb-2">Enterprise</h3>
              <p>For most businesses that want to optimize web queries we</p>
            </div>

            <div className="px-4 py-4">
              <div className="flex items-center gap-2 pb-1">
                <IoMdCheckmarkCircle className="text-xl text-[#14fffb]"></IoMdCheckmarkCircle>
                <h3>All Limited Links</h3>
              </div>
              <div className="flex items-center gap-2 pb-1">
                <IoMdCheckmarkCircle className="text-xl text-[#14fffb]"></IoMdCheckmarkCircle>
                <h3>Own Analytics Platform</h3>
              </div>
              <div className="flex items-center gap-2 pb-1">
                <IoMdCheckmarkCircle className="text-xl text-[#14fffb]"></IoMdCheckmarkCircle>
                <h3>Chat Support</h3>
              </div>
              <div className="flex items-center gap-2 pb-1">
                <IoMdCheckmarkCircle className="text-xl text-[#14fffb]"></IoMdCheckmarkCircle>
                <h3>Unlimited Users</h3>
              </div>
            </div>
            <div className="items-center text-center justify-center py-3 lg:pl-7">
              <h1 className="text-4xl font-bold flex items-center justify-center">
                <FaDollarSign />
                39.99
              </h1>
            </div>
            <div className="lg:pr-8 py-5  items-center text-center">
              <button className="px-6 py-3 font-bold rounded-full border border-[#48adac] transition duration-300 delay-150 hover:bg-[#56b4c1]">
                Get Started
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
