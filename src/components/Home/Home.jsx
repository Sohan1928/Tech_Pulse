import { Helmet } from "react-helmet-async";
import HomePage from "../HomePage/HomePage";

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>TechPulse|Home</title>
      </Helmet>
      <HomePage></HomePage>
    </div>
  );
};

export default Home;
