import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import Navigation from "./first_view/Navigation.jsx";
import Skills from "./skills_view/skills.jsx";
import "./App.scss";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
    <Navigation />
    <Skills />
  </React.StrictMode>
);
