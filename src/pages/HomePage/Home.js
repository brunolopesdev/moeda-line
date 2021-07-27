import Services from "./Services"
import HeroSection from "../../components/HeroSection/HeroSection"
import About from "./About"
import ContactPage from "./ContactPage/ContactPage"

const Home = () => {

  return (
    <>
      <HeroSection />
      <About />
      <Services />
      <ContactPage />
    </>
  );
};

export default Home;
