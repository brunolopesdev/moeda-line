import Services from "@/pages/HomePage/Services"
import HeroSection from "@/components/HeroSection/HeroSection"
import About from "@/pages/HomePage/About"
import ContactPage from "@/pages/HomePage/ContactPage/ContactPage"

const Home = () => {

  return (
    <>
      <HeroSection/>
      <About/>
      <Services/>
      <ContactPage/>
    </>
  );
};

export default Home;
