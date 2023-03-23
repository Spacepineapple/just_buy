import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './reducer';

// Importing the Bootstrap CSS
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";

// Importing our Custom CSS
import "./assets/css/reset.css";
import "./index.css";
import "./assets/css/shopPage.css";
import "./assets/css/carousel.css";
import "./assets/css/homeShowcase.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>
);
