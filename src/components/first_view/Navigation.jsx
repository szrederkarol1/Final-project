import React from "react";
import "./Navigation.scss";
import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <>
      <div className="top_bar">
        <div className="logo-container">
          <h1 className="logo">About me</h1>
        </div>
        <nav className="navigation">
          <li>
            <a href="#skills">Skills</a>
          </li>
          <li>
            <a href="#location">Location</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </nav>
      </div>
      <div className="header_container">
        <div className="welcome_site">
          <span className="above-arrow">A LITTLE ABOUT ME</span>
          <div
            className="dots"
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              marginBottom: "2em",
            }}
          >
            <i
              className="fa-solid fa-ellipsis-vertical fa-rotate-90 fa-2x"
              style={{ marginRight: "30px" }}
            ></i>
            <i className="fa-solid fa-arrow-down fa-fade fa-3x"></i>
            <i
              className="fa-solid fa-ellipsis-vertical fa-rotate-90 fa-2x"
              style={{ marginLeft: "30px" }}
            ></i>
          </div>
          <h1 className="welcome_title">Hey, my name is Karol Szreder !</h1>
          <span className="about-me-describe">
            I am a beginner front-end programmer, I am mainly interested in
            JavaScript. I know HTML and CSS well. I have also worked with an
            individual client, and finally I created a website for him about his
            accounting office. See some of my other projects by clicking the button!
          </span>
          <div className="btn-container">
            <button type="submit" className="btn_first_page">
              <Link className="link-projects" to="/Projects">PROJECTS</Link>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
export default Navigation;
