import "./app.css";
import About from "./components/about/About";
import Header from "./components/header/Header";
import Hero from "./components/hero/Hero";
import Skills from "./components/skills/Skills";
import Services from "./components/servises/Services";
import Portfolio from "./components/portfolio/Portfolio";
import Reviews from "./components/reviewc/Reviews";
import Stats from "./components/stats/Stats";
import Contacts from "./components/contacts/Contacts";
import Footer from "./components/footer/Footer";
import HeroBtn from "./components/hero/HeroBtn";

function App() {
  return (
    <>
      <div className="top-screen h-screen bg-cover bg-center flex flex-col justify-between">
        <div className="container">
          <Header />
        </div>
        <div className="container">
          <Hero />
        </div>
        <div>
          <HeroBtn />
        </div>
      </div>
      <div className="container" id="about">
        <About />
      </div>
      <div className="container bg-[#F6F6F8]" id="skills">
        <Skills />
      </div>
      <div className="container" id="services">
        <Services />
      </div>
      <div className="container" id="portfolio">
        <Portfolio />
      </div>
      <div className="container" id="reviews">
        <Reviews />
      </div>
      <div className="container">
        <Stats />
      </div>
      <div className="container" id="contacts">
        <Contacts />
      </div>
      <div>
        <Footer />
      </div>
    </>
  );
}

export default App;
