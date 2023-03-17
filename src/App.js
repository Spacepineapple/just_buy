import React from "react";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import HomePage from "./components/pages/HomePage";
import Contact from "./components/pages/Contact";
import About from "./components/pages/About";
import Returns from "./components/pages/Returns";
import FAQ from "./components/pages/FAQ";
import Shipping from "./components/pages/Shipping";
import Terms from "./components/pages/Terms";

function App() {
  return (
    <div className="App">
      <NavBar />
      <HomePage />
      <Footer />
    </div>
  );
}

export default App;
