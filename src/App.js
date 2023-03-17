import React from "react";
import Footer from "./components/Footer";
import NavBar from "./components/NavBar";
import HomePage from "./components/pages/HomePage";
import About from "./components/pages/About";
import Contact from "./components/pages/Contact";
import FAQ from "./components/pages/FAQ";
import Returns from "./components/pages/Returns";
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
