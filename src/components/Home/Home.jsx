import { Helmet } from "react-helmet-async";

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>TechPulse|Home</title>
      </Helmet>
      <div className="h-screen">
        <h1>Home</h1>
      </div>
    </div>
  );
};

export default Home;
