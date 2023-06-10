import React from "react";
import "./Navigation.scss";
import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <>
      <div className="top_bar">
        <div className="logo-container">
          <h1 className="logo">Karol Szreder</h1>
        </div>
        <nav className="navigation">
          <li>
            <a href="About me">ABOUT ME</a>
          </li>
          <li>
            <a href="#skills">SKILLS</a>
          </li>
          <li>
            <Link to="/Projects">PROJECTS</Link>
          </li>
          <li>
            <a href="#location">LOCATION</a>
          </li>
          <li>
            <a href="#contact">CONTACT</a>
          </li>
        </nav>
      </div>
      <div className="header_container">
        <div className="welcome_site">
          <h1 className="welcome_title">HEY, MY NAME IS KAROL SZREDER</h1>
          <button type="submit" className="btn_first_page">
            PROJECTS
          </button>
        </div>
      </div>
    </>
  );
};
export default Navigation;
