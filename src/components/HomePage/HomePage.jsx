import Banner from "../Banner/Banner";
import Template from "../Template/Template";
import Service from "../Service/Service";
import BlogPost from "../BlogPost/BlogPost";
import GenerateCopy from "../GenerateCopy/GenerateCopy";
import GenerateContent from "../GenerateContent/GenerateContent";
import Awards from "../Awards/Awards";
import MeetClient from "../MeetClient/MeetClient";
import Pricing from "../Pricing/Pricing";
import Faq from "../Faq/Faq";
import FutureOfAi from "../FutureOfAi/FutureOfAi";

const HomePage = () => {
  return (
    <div>
      <Banner></Banner>
      <Template></Template>
      <Service></Service>
      <BlogPost></BlogPost>
      <GenerateCopy></GenerateCopy>
      <GenerateContent></GenerateContent>
      <Awards></Awards>
      <MeetClient></MeetClient>
      <Pricing></Pricing>
      <Faq></Faq>
      <FutureOfAi></FutureOfAi>
    </div>
  );
};

export default HomePage;
