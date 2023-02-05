import "./App.css";
import NotHero from "./components/nothero/NotHero";
import Hero from "./components/hero/Hero";

function App() {
  return (
    <div className="App">
      <div className="inApp">
        <div className="slider"></div>
        <Hero />
        <NotHero />
      </div>
    </div>
  );
}

export default App;
