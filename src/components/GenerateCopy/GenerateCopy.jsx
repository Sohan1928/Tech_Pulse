import { IoMdCheckmarkCircle } from "react-icons/io";

const GenerateCopy = () => {
  return (
    <div className="px-4">
      <div className="py-10 px-4 grid lg:grid-cols-2 items-center bg-[#172b35]">
        <div className="mr-8 pl-3">
          <img src="service-3.svg" alt="" />
        </div>
        <div className="">
          <h1 className="text-3xl lg:text-5xl font-bold pb-5">
            Instruct to our AI and generate copy
          </h1>
          <p className="pb-5">
            Give our AI a few descriptions and we will automatically create blog
            articles, product descriptions and more for you within just few
            second.
          </p>
          <div className="flex items-center gap-2 pb-1">
            <IoMdCheckmarkCircle className="text-xl text-[#14fffb]"></IoMdCheckmarkCircle>
            <h3>Entering & Leaving From Country</h3>
          </div>
          <div className="flex items-center gap-2 pb-1">
            <IoMdCheckmarkCircle className="text-xl text-[#14fffb]"></IoMdCheckmarkCircle>
            <h3>Country Citizenship</h3>
          </div>
          <div className="flex items-center gap-2">
            <IoMdCheckmarkCircle className="text-xl text-[#14fffb]"></IoMdCheckmarkCircle>
            <h3>Settling In Country</h3>
          </div>
          <div className="pt-8">
            <button className="px-6 py-3 font-bold rounded-full border border-[#48adac] transition duration-300 delay-150 hover:bg-[#56b4c1]">
              Get Started
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GenerateCopy;
