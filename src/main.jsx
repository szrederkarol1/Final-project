import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import Navigation from "./first_view/Navigation.jsx";
import "./Navigation.scss"

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
    <Navigation />
  </React.StrictMode>
);
