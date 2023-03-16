import React from "react";
import ReactDOM from "react-dom/client";
import "bootstrap/dist/css/bootstrap.min.css";
import "./assets/css/reset.css";
import "./index.css";
import App from "./App";
import NavBar from "./NavBar"

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
    <NavBar/>
  </React.StrictMode>
);
