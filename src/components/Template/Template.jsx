import { MdOutlinePersonAddAlt } from "react-icons/md";
import { TbHomeMove } from "react-icons/tb";
import { CgFileDocument } from "react-icons/cg";

const Template = () => {
  return (
    <div className="pb-10 px-4">
      <div className="lg:flex border border-[#2bbeb9] bg-[#172b35] rounded-3xl divide-y lg:divide-x divide-[#2bbeb9]">
        <div className="px-8 py-4 space-y-1">
          <MdOutlinePersonAddAlt className="text-4xl text-[#fff56c]"></MdOutlinePersonAddAlt>
          <h2 className="text-xl font-bold">Select writing template</h2>
          <p className="opacity-80">
            Simply choose a template from available list to write content.
          </p>
        </div>
        <div className="px-8 py-4 space-y-1">
          <TbHomeMove className="text-4xl text-[#fff56c]"></TbHomeMove>
          <h2 className="text-xl font-bold">Describe your topic</h2>
          <p className="opacity-80">
            Provide our AI content writer with few sentences.
          </p>
        </div>
        <div className="px-8 py-4 space-y-1">
          <CgFileDocument className="text-4xl text-[#fff56c]"></CgFileDocument>
          <h2 className="text-xl font-bold">Generate quality content</h2>
          <p className="opacity-80">
            Our powerful AI tools will generate content in few second
          </p>
        </div>
      </div>
    </div>
  );
};

export default Template;
