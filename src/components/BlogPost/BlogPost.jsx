import { IoMdCheckmarkCircle } from "react-icons/io";

const BlogPost = () => {
  return (
    <div className="px-4">
      <div className="py-10 px-4 grid lg:grid-cols-2 items-center bg-[#172b35]">
        <div className="">
          <h1 className="text-3xl lg:text-5xl font-bold pb-5">
            Write Blog Posts, Stories, & Even Books
          </h1>
          <p className="pb-5">
            Just let me know the topic or genre you have in mind, and I will
            assist you in creating engaging content. Feel free to provide any
            specific instructions or ideas you would like me to incorporate.
          </p>
          <div className="flex items-center gap-2 pb-1">
            <IoMdCheckmarkCircle className="text-xl text-[#14fffb]"></IoMdCheckmarkCircle>
            <h3>The AI-generated text is always fresh and relevant.</h3>
          </div>
          <div className="flex items-center gap-2 pb-1">
            <IoMdCheckmarkCircle className="text-xl text-[#14fffb]"></IoMdCheckmarkCircle>
            <h3>
              The AI-generated text is guaranteed to be unique and original.
            </h3>
          </div>
          <div className="flex items-center gap-2">
            <IoMdCheckmarkCircle className="text-xl text-[#14fffb]"></IoMdCheckmarkCircle>
            <h3>The AI-generated text is SEO-friendly and authoritative.</h3>
          </div>
          <div className="pt-8">
            <button className="px-6 py-3 font-bold rounded-full border border-[#48adac] transition duration-300 delay-150 hover:bg-[#56b4c1]">
              Get Started
            </button>
          </div>
        </div>
        <div className="mr-8 pl-3 mt-4">
          <img src="service-2.svg" alt="" />
        </div>
      </div>
    </div>
  );
};

export default BlogPost;
