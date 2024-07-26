const FutureOfAi = () => {
  return (
    <div className="px-4">
      <div className="lg:flex space-x-6 py-10 px-4 justify-around items-center bg-[#172b35]">
        <div>
          <h1 className="text-3xl lg:text-5xl font-bold pb-4">
            Be part of the future <br /> of Ai Writing tools
          </h1>
          <p>
            Unleash the power of AI within Brainwave. Upgrade your productivity
            with Brainwave, the open AI chat app.
          </p>
          <div className="pt-4 space-x-4 items-center flex">
            <button className="px-6 py-3 font-bold rounded-full border border-[#48adac] transition duration-300 delay-150 hover:bg-[#56b4c1]">
              Get Started
            </button>
            <button className="px-6 py-3 font-bold rounded-full border border-[#48adac] transition duration-300 delay-150 hover:bg-[#56b4c1]">
              Learn More
            </button>
          </div>
        </div>
        <div className="pt-6">
          <img src="cta-screen.png" alt="" />
        </div>
      </div>
    </div>
  );
};

export default FutureOfAi;
