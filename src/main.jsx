import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import Navigation from "./first_view/Navigation.jsx";
import Skills from "./skills_view/Skills.jsx";
import "./App.scss";
import Contact from "./assets/contact/Contact.jsx";
import Location from "./assets/my_location/Location.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
    <Navigation />
    <Skills />
    <Location />
    <Contact />
  </React.StrictMode>
);
