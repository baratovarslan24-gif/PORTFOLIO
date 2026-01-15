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

function App() {
  return (
    <>
      <div className="top-screen h-166.75 bg-cover bg-center md:h-270">
        <div className="container">
          <Header />
        </div>
        <div className="container">
          <Hero />
        </div>
        <div className="container">
          <About />
        </div>
        <div className="container">
          <Skills />
        </div>
        <div className="container">
          <Services />
        </div>
        <div className="container">
          <Portfolio />
        </div>
        <div className="container">
          <Reviews />
        </div>
        <div className="container">
          <Stats />
        </div>
        <div className="container">
          <Contacts />
        </div>
        <div className="container">
          <Footer />
        </div>
      </div>
    </>
  );
}

export default App;
