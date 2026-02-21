import { Subscript } from "lucide-react";
import BrowseCategories from "../components/BrowseCategories";
import Feedback from "../components/Feedback";
import Hero from "../components/Hero";
import HowItWorks from "../components/HowItWorks";
import TrustedCompanies from "../components/TrustedCompanies";
import Subscribe from "../components/Subscribe";

function Home() {
  return (
    <>
      <Hero />
      <TrustedCompanies />
      <BrowseCategories />
      <HowItWorks/>
      <Feedback/>
      <Subscribe />
    </>
  );
}

export default Home;
