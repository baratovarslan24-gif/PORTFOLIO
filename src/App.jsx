import "./app.css";
import Header from "./components/Header";
import Hero from "./components/Hero";

function App() {
  return (
    <>
      <div className="top-screen min-h-screen bg-cover bg-center">
        <div className="container">
          <Header />
        </div>
        <div className="container">
          <Hero />
        </div>
      </div>
    </>
  );
}

export default App;
