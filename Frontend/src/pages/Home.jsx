import BrowseCategories from "../components/BrowseCategories";
import Feedback from "../components/Feedback";
import Hero from "../components/Hero";
import HowItWorks from "../components/HowItWorks";
import TrustedCompanies from "../components/TrustedCompanies";
import Subscribe from "../components/Subscribe";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <TrustedCompanies />
      <BrowseCategories />
      <HowItWorks />
      <Feedback />
      <Subscribe />
      <Footer />
    </>
  );
}

export default Home;
