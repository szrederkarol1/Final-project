import React from "react";
import "./Skills.scss";

function Skills() {
  return (
    <>
      <section className="skills_section">
        <div className="skills_container">
          <h2 className="tittle_skills">HOW I CAN SERVE YOU</h2>
          <div className="first_skill">
            <div className="mały_div">
              <div className="icon_and_title_first_skill">
                <span style={{color: "yellow", fontWeight: "100"}}>
                  <i className="fa-solid fa-laptop-code fa-4x fa-flip"></i>
                </span>
                <h3 className="tittle_first_skill">
                  Frontend <br></br>Development
                </h3>
              </div>
              <p className="paragraph_first_skill">
                I have fluent knowledge of HTML, CSS and good knowledge of
                JavaScript. I have knowledge about the React framework.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Skills;
