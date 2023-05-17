import React from "react";
import "./Skills.scss";

function Skills() {
  return (
    <>
      <section className="skills_section">
        <div className="skills_container">
          <h2 className="tittle_skills">HOW I CAN SERVE YOU</h2>
          <div className="first_skill">
            <span>
              <i class="fa-solid fa-laptop-code fa-4x"></i>
            </span>
            <h3 className="tittle_first_skill">Frontend Development</h3>
            <p>
              I have fluent knowledge of HTML, CSS and good knowledge of
              JavaScript. I have knowledge about the React framework.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

export default Skills;
