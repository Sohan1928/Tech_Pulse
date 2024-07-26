import Marquee from "react-fast-marquee";
import { Helmet } from "react-helmet-async";
import { FaStar } from "react-icons/fa6";
import { IoMdCheckmarkCircle } from "react-icons/io";
import { RiDoubleQuotesL } from "react-icons/ri";

const AboutUs = () => {
  return (
    <div>
      <Helmet>
        <title>TechPulse|AboutUs</title>
      </Helmet>
      <div className=" px-4">
        <h1 className="text-3xl bg-[#43697c] pt-6 lg:text-5xl text-[#e2d40e] font-bold pb-10 text-center underline">
          About Us
        </h1>
        <div className="py-10 px-4 grid lg:grid-cols-2 items-center bg-[#43697c]">
          <div className="mr-8 pl-3">
            <img src="abt-1.svg" alt="" />
          </div>
          <div className="">
            <h1 className="text-3xl lg:text-5xl font-bold pb-5">
              Aai AI Writer tool for seamless collaboration
            </h1>
            <p className="pb-5">
              With smart automation and top-notch security, it is the perfect
              solution for teams looking to work smarter. This tool helps you
              find the right keywords to target for your content.
            </p>
            <div className="flex items-center gap-2 pb-1">
              <IoMdCheckmarkCircle className="text-xl text-[#14fffb]"></IoMdCheckmarkCircle>
              <h3>Seamless Integration</h3>
            </div>
            <div className="flex items-center gap-2 pb-1">
              <IoMdCheckmarkCircle className="text-xl text-[#14fffb]"></IoMdCheckmarkCircle>
              <h3>Smart Automation</h3>
            </div>
            <div className="flex items-center gap-2">
              <IoMdCheckmarkCircle className="text-xl text-[#14fffb]"></IoMdCheckmarkCircle>
              <h3>Top-notch Security</h3>
            </div>
            <div className="pt-8">
              <button className="px-6 py-3 font-bold rounded-full border border-[#48adac] transition duration-300 delay-150 hover:bg-[#56b4c1]">
                Get Started
              </button>
            </div>
          </div>
        </div>
        <div className="py-10 items-center bg-[#43697c]">
          <div className="text-center">
            <h1 className="text-3xl lg:text-5xl font-bold pb-5">
              Meet our Happy Clients
            </h1>
          </div>

          <Marquee pauseOnHover={true}>
            <div className="flex gap-3 pt-6">
              <div className="w-72 ml-3 bg-[#10445f] rounded-xl">
                <div className="p-3 divide-y divide-blue-200">
                  <div>
                    <div className="flex items-center justify-between pb-3">
                      <h4 className="bg-[#394145] rounded-full p-1 items-center text-center justify-center">
                        <RiDoubleQuotesL />
                      </h4>
                      <p className="flex items-center gap-1 pt-2 text-[#e17f00]">
                        <FaStar />
                        <FaStar />
                        <FaStar />
                        <FaStar />
                        <FaStar />
                      </p>
                    </div>
                    <p className="pb-3">
                      They not only understand what I say but read between the
                      lines and also give me ideas of my own.
                    </p>
                  </div>

                  <div className="flex items-center pt-3">
                    <img src="av-7.png" alt="" />
                    <div className="pl-2">
                      <h2 className="">Annette Black</h2>
                      <p className="">Nursing Assistant</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-72 bg-[#10445f] rounded-xl">
                <div className="p-3 divide-y divide-blue-200">
                  <div>
                    <div className="flex items-center justify-between pb-3">
                      <h4 className="bg-[#394145] rounded-full p-1 items-center text-center justify-center">
                        <RiDoubleQuotesL />
                      </h4>
                      <p className="flex items-center gap-1 pt-2 text-[#e17f00]">
                        <FaStar />
                        <FaStar />
                        <FaStar />
                        <FaStar />
                        <FaStar />
                      </p>
                    </div>
                    <p className="pb-3">
                      They not only understand what I say but read between the
                      lines and also give me ideas of my own.
                    </p>
                  </div>
                  <div className="flex items-center pt-3">
                    <img src="av-6.png" alt="" />
                    <div className="pl-2">
                      <h2 className="">Floyd Miles</h2>
                      <p className="">Dog Trainer</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-72 bg-[#10445f] rounded-xl">
                <div className="p-3 divide-y divide-blue-200">
                  <div>
                    <div className="flex items-center justify-between pb-3">
                      <h4 className="bg-[#394145] rounded-full p-1 items-center text-center justify-center">
                        <RiDoubleQuotesL />
                      </h4>
                      <p className="flex items-center gap-1 pt-2 text-[#e17f00]">
                        <FaStar />
                        <FaStar />
                        <FaStar />
                        <FaStar />
                        <FaStar />
                      </p>
                    </div>
                    <p className="pb-3">
                      They not only understand what I say but read between the
                      lines and also give me ideas of my own.
                    </p>
                  </div>

                  <div className="flex items-center pt-3">
                    <img src="av-8.png" alt="" />
                    <div className="pl-2">
                      <h2 className="">Esther Howard</h2>
                      <p className="">Nursing Assistant</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-72 bg-[#10445f] rounded-xl">
                <div className="p-3 divide-y divide-blue-200">
                  <div>
                    <div className="flex items-center justify-between pb-3">
                      <h4 className="bg-[#394145] rounded-full p-1 items-center text-center justify-center">
                        <RiDoubleQuotesL />
                      </h4>
                      <p className="flex items-center gap-1 pt-2 text-[#e17f00]">
                        <FaStar />
                        <FaStar />
                        <FaStar />
                        <FaStar />
                        <FaStar />
                      </p>
                    </div>
                    <p className="pb-3">
                      They not only understand what I say but read between the
                      lines and also give me ideas of my own.
                    </p>
                  </div>

                  <div className="flex items-center pt-3">
                    <img src="av-5.png" alt="" />
                    <div className="pl-2">
                      <h2 className="">Brooklyn Simmons</h2>
                      <p className="">President of Sales</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-72 bg-[#10445f] rounded-xl">
                <div className="p-3 divide-y divide-blue-200">
                  <div>
                    <div className="flex items-center justify-between pb-3">
                      <h4 className="bg-[#394145] rounded-full p-1 items-center text-center justify-center">
                        <RiDoubleQuotesL />
                      </h4>
                      <p className="flex items-center gap-1 pt-2 text-[#e17f00]">
                        <FaStar />
                        <FaStar />
                        <FaStar />
                        <FaStar />
                        <FaStar />
                      </p>
                    </div>
                    <p className="pb-3">
                      They not only understand what I say but read between the
                      lines and also give me ideas of my own.
                    </p>
                  </div>

                  <div className="flex items-center pt-3">
                    <img src="av-6.png" alt="" />
                    <div className="pl-2">
                      <h2 className="">Kristin Watson</h2>
                      <p className="">Medical Assistant</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Marquee>
          <Marquee pauseOnHover={true} direction="right">
            <div className="flex gap-3 py-6">
              <div className="w-72 ml-3 bg-[#10445f] rounded-xl">
                <div className="p-3 divide-y divide-blue-200">
                  <div>
                    <div className="flex items-center justify-between pb-3">
                      <h4 className="bg-[#394145] rounded-full p-1 items-center text-center justify-center">
                        <RiDoubleQuotesL />
                      </h4>
                      <p className="flex items-center gap-1 pt-2 text-[#e17f00]">
                        <FaStar />
                        <FaStar />
                        <FaStar />
                        <FaStar />
                        <FaStar />
                      </p>
                    </div>
                    <p className="pb-3">
                      They not only understand what I say but read between the
                      lines and also give me ideas of my own.
                    </p>
                  </div>

                  <div className="flex items-center pt-3">
                    <img src="av-7.png" alt="" />
                    <div className="pl-2">
                      <h2 className="">Annette Black</h2>
                      <p className="">Nursing Assistant</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-72 bg-[#10445f] rounded-xl">
                <div className="p-3 divide-y divide-blue-200">
                  <div>
                    <div className="flex items-center justify-between pb-3">
                      <h4 className="bg-[#394145] rounded-full p-1 items-center text-center justify-center">
                        <RiDoubleQuotesL />
                      </h4>
                      <p className="flex items-center gap-1 pt-2 text-[#e17f00]">
                        <FaStar />
                        <FaStar />
                        <FaStar />
                        <FaStar />
                        <FaStar />
                      </p>
                    </div>
                    <p className="pb-3">
                      They not only understand what I say but read between the
                      lines and also give me ideas of my own.
                    </p>
                  </div>
                  <div className="flex items-center pt-3">
                    <img src="av-6.png" alt="" />
                    <div className="pl-2">
                      <h2 className="">Floyd Miles</h2>
                      <p className="">Dog Trainer</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-72 bg-[#10445f] rounded-xl">
                <div className="p-3 divide-y divide-blue-200">
                  <div>
                    <div className="flex items-center justify-between pb-3">
                      <h4 className="bg-[#394145] rounded-full p-1 items-center text-center justify-center">
                        <RiDoubleQuotesL />
                      </h4>
                      <p className="flex items-center gap-1 pt-2 text-[#e17f00]">
                        <FaStar />
                        <FaStar />
                        <FaStar />
                        <FaStar />
                        <FaStar />
                      </p>
                    </div>
                    <p className="pb-3">
                      They not only understand what I say but read between the
                      lines and also give me ideas of my own.
                    </p>
                  </div>

                  <div className="flex items-center pt-3">
                    <img src="av-8.png" alt="" />
                    <div className="pl-2">
                      <h2 className="">Esther Howard</h2>
                      <p className="">Nursing Assistant</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-72 bg-[#10445f] rounded-xl">
                <div className="p-3 divide-y divide-blue-200">
                  <div>
                    <div className="flex items-center justify-between pb-3">
                      <h4 className="bg-[#394145] rounded-full p-1 items-center text-center justify-center">
                        <RiDoubleQuotesL />
                      </h4>
                      <p className="flex items-center gap-1 pt-2 text-[#e17f00]">
                        <FaStar />
                        <FaStar />
                        <FaStar />
                        <FaStar />
                        <FaStar />
                      </p>
                    </div>
                    <p className="pb-3">
                      They not only understand what I say but read between the
                      lines and also give me ideas of my own.
                    </p>
                  </div>

                  <div className="flex items-center pt-3">
                    <img src="av-5.png" alt="" />
                    <div className="pl-2">
                      <h2 className="">Brooklyn Simmons</h2>
                      <p className="">President of Sales</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-72 bg-[#10445f] rounded-xl">
                <div className="p-3 divide-y divide-blue-200">
                  <div>
                    <div className="flex items-center justify-between pb-3">
                      <h4 className="bg-[#394145] rounded-full p-1 items-center text-center justify-center">
                        <RiDoubleQuotesL />
                      </h4>
                      <p className="flex items-center gap-1 pt-2 text-[#e17f00]">
                        <FaStar />
                        <FaStar />
                        <FaStar />
                        <FaStar />
                        <FaStar />
                      </p>
                    </div>
                    <p className="pb-3">
                      They not only understand what I say but read between the
                      lines and also give me ideas of my own.
                    </p>
                  </div>

                  <div className="flex items-center pt-3">
                    <img src="av-6.png" alt="" />
                    <div className="pl-2">
                      <h2 className="">Kristin Watson</h2>
                      <p className="">Medical Assistant</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Marquee>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
