import BrowseCategories from "../components/BrowseCategories";
import Hero from "../components/Hero";
import HowItWorks from "../components/HowItWorks";
import TrustedCompanies from "../components/TrustedCompanies";

function Home() {
  return (
    <>
      <Hero />
      <TrustedCompanies />
      <BrowseCategories />
      <HowItWorks/>
    </>
  );
}

export default Home;
