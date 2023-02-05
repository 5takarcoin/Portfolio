import "./App.css";
import NotHero from "./components/nothero/NotHero";
import Hero from "./components/hero/Hero";
import Cursor from "./components/cursor/Cursor";
import { useEffect, useState } from "react";

function App() {
  return (
    <div className="App">
      <div className="inApp">
        <div className="slider"></div>
        {/* <Cursor point={mousePos} /> */}
        <Cursor />
        <Hero />
        <NotHero />
      </div>
    </div>
  );
}

export default App;
