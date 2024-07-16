import { Helmet } from "react-helmet-async";
import Banner from "../Banner/Banner";
import Template from "../Template/Template";
import Service from "../Service/Service";
import BlogPost from "../BlogPost/BlogPost";
import GenerateCopy from "../GenerateCopy/GenerateCopy";
import GenerateContent from "../GenerateContent/GenerateContent";
import Footer from "../Footer/Footer";

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>TechPulse|Home</title>
      </Helmet>
      <Banner></Banner>
      <Template></Template>
      <Service></Service>
      <BlogPost></BlogPost>
      <GenerateCopy></GenerateCopy>
      <GenerateContent></GenerateContent>
      <Footer></Footer>
    </div>
  );
};

export default Home;
