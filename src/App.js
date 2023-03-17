import React from "react";
import Footer from "./components/footer";
import NavBar from "./components/NavBar";
import HomePage from "./components/pages/HomePage";

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
