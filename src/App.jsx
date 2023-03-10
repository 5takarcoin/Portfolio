import "./App.css";
import NotHero from "./components/nothero/NotHero";
import Hero from "./components/hero/Hero";
import Cursor from "./components/cursor/Cursor";
import PopupSend from "./components/popupsend/PopupSend";

function App() {
  return (
    <div className="App">
      <div className="inApp">
        <div className="slider"></div>
        {/* <Cursor /> */}
        {/* <div className="resume"></div> */}
        <Hero />
        <NotHero />
        {/* <PopupSend /> */}
      </div>
    </div>
  );
}

export default App;
