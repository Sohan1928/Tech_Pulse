const AboutService = () => {
  return (
    <div className="px-4">
      <div className="py-10 px-4 items-center bg-[#43697c]">
        <div>
          <h2 className="text-3xl lg:text-5xl text-center font-bold pb-5">
            About this service
          </h2>
          <p className="opacity-70">
            Once you know your audience, choose a topic that will resonate with
            them. Look for trending topics in your industry or address common
            questions or challenges your audience may be facing. Keep in mind
            that your topic should be both interesting and relevant to your
            audience. Writing blog content with Aao, make sure you have a clear
            understanding of who your audience is. There are many variations of
            passages of Lorem Ipsum available, but the majority have suffered
            alteration in some form, by injected humour, or randomised words
            which do not look even slightly believable. If you are going to use
            a passage of Lorem Ipsum, you need to be sure there is not anything
            embarrassing hidden in the middle of text.
          </p>
        </div>
        <div className="my-8 lg:flex items-center justify-between gap-4 border border-[#48adac] rounded-xl">
          <div className="py-3 pl-8">
            <h3 className="text-3xl font-bold pb-2">Get Ready Aai Service</h3>
            <p className="opacity-70">
              We have done it carefully and simply. Combined with <br /> the
              ingredients makes for beautiful landings.
            </p>
          </div>
          <div className="lg:pr-8 py-5  items-center text-center">
            <button className="px-6 py-3 font-bold rounded-full border border-[#48adac] transition duration-300 delay-150 hover:bg-[#56b4c1]">
              Purchase Now!
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutService;
